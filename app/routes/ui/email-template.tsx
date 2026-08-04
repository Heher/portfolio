import { ArrowLeft } from 'lucide-react';
import { Form, Link } from 'react-router';

import { sendSampleEmail } from '@/app/utils/email';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import type { Route } from './+types/email-template';

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const values = Object.fromEntries(formData.entries());

  const result = await sendSampleEmail({ email: values.email as string });

  return result;
}

// export async function loader() {
//   const tableData = createTableData(10);

//   return { data: tableData };
// }

export default function EmailTemplatePage() {
  return (
    <div className="">
      <title>Email Templates | UIs | John Heher</title>
      <meta name="description" content="A simple link to send an email template created by John Heher." />
      <div className="mx-auto flex w-full max-w-xl flex-col pb-8">
        <Link
          to="/"
          className="
            flex w-max items-center gap-2 text-base font-semibold text-[#282B27]
            hover:opacity-80
          "
        >
          <ArrowLeft className="size-4.5" />
          <span className="block">Back</span>
        </Link>
        <div className="mt-10">
          <h1 className="text-3xl font-semibold">Email templates</h1>
          <p className="mt-5 text-lg text-[#282B27]">
            My first job was creating marketing emails. It certainly isn't the most groundbreaking work having to use 90s web technologies.
          </p>
          <p className="mt-3 mb-10 text-lg text-[#282B27]">
            But that's what you have to do for those Yahoo! Mail users still on Windows 2000.
          </p>
        </div>
      </div>
      <div className="h-full bg-linear-to-b from-email-light to-email pt-30 pb-60">
        <div className="mx-auto flex h-75 w-full max-w-4xl items-center justify-center">
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
    </div>
  );
}
