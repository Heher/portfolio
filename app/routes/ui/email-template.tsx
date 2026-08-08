import { useEffect } from 'react';
import { Form, useFetcher } from 'react-router';
import { toast } from 'sonner';

import { MainHeader } from '@/app/components/uis/components';
import Header from '@/app/components/uis/Header';
import { sendSampleEmail } from '@/app/utils/email';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Toaster } from '@/components/ui/sonner';
import { ZEmailFormData } from '@/types/uis/email';

import type { Route } from './+types/email-template';

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const values = Object.fromEntries(formData.entries());

  const validatedData = ZEmailFormData.safeParse(values);

  if (!validatedData.success) {
    return { ok: false };
  }

  const result = await sendSampleEmail({ email: values.email as string });

  if (!result?.ok) {
    return { ok: false };
  }

  return { ok: true };
}

// export async function loader() {
//   const tableData = createTableData(10);

//   return { data: tableData };
// }

export default function EmailTemplatePage() {
  const formFetcher = useFetcher({ key: 'email-form' });

  useEffect(() => {
    if (formFetcher.data) {
      console.log(formFetcher.data);
      if (formFetcher.data.ok) {
        toast.success('Email sent!');
      }
      else {
        toast.error('Whoops', {
          description: 'Something went wrong. Please try again.',
        });
      }

      formFetcher.reset();
    }
  }, [formFetcher]);

  return (
    <div className="flex min-h-dvh flex-col">
      <title>Email Templates | UIs | John Heher</title>
      <meta name="description" content="A simple link to send an email template created by John Heher." />
      <Header heading={<MainHeader>Email templates</MainHeader>} subhead="My first job was creating marketing emails. It certainly isn't the most groundbreaking work, having to use 90s web technologies. But that's what you have to do for those Yahoo! Mail users still on Windows 2000." />
      <div className="
        h-full flex-1 bg-linear-to-b from-email-light to-email px-2.5 py-10
        sm:px-0 sm:pt-30 sm:pb-0
      "
      >
        <div className="mx-auto flex w-full max-w-4xl items-center justify-center">
          <div className="w-100 rounded-2xl bg-better-white p-5 shadow-lg">
            <Form className="flex flex-col" method="post" action="/ui/email-template" navigate={false} fetcherKey="email-form">
              <h2 className="text-lg font-semibold text-better-black">Get a sample</h2>
              <p className="mt-3 text-sm text-gray-500">
                Enter your address below to receive just a taste of the incredible power of email.
              </p>
              <div className="relative mt-10">
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="
                    peer h-12 rounded-sm border border-blue-950
                    focus-visible:border-blue-700 focus-visible:ring-0
                    md:text-base
                  "
                />
                {/* Needs to be after input so the peer selector works */}
                <Label
                  htmlFor="email"
                  className="
                    absolute top-0 left-1.5 -translate-y-1/2 bg-better-white px-1 py-0.5 text-sm text-email
                    peer-focus-visible:text-blue-700
                  "
                >
                  Email
                </Label>
              </div>
              <button className="
                mt-8 cursor-pointer self-end rounded-lg bg-email px-4 py-2 text-base font-semibold text-better-white transition-colors
                hover:bg-email-dark
              "
              >
                Send email
              </button>
            </Form>
          </div>
        </div>
      </div>
      <Toaster position="top-center" />
    </div>
  );
}
