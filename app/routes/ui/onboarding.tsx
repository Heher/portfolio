import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useFetcher } from 'react-router';

import type { Plans } from '@/types/uis/onboarding';

import { toast, Toaster } from '@/components/ui/toast';
import { ZOnboardingFormData } from '@/types/uis/onboarding';
import SignUpDialog from '~/components/uis/onboarding/SignUpDialog';

import type { Route } from './+types/onboarding';

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const values = Object.fromEntries(formData.entries());

  const validatedData = ZOnboardingFormData.safeParse(values);

  console.log(validatedData);

  if (!validatedData.success) {
    return { ok: false };
  }

  return { ok: true, data: validatedData.data };
}

// export async function loader() {
//   const tableData = createTableData(20);

//   return { data: tableData };
// }

export default function OnboardingPage() {
  const [selectedPlan, setSelectedPlan] = useState<Plans>('basic');
  const [showSignUpDialog, setShowSignUpDialog] = useState(false);

  const formFetcher = useFetcher({ key: 'onboarding-form' });

  useEffect(() => {
    if (formFetcher.data && showSignUpDialog) {
      setShowSignUpDialog(false);

      if (formFetcher.data.ok) {
        toast.add({
          title: 'Email sent!',
          description: 'Check your email to verify your account.',
          type: 'success',
        });
      }
      else {
        toast.add({
          title: 'Whoops',
          description: 'Something went wrong. Please try again.',
          type: 'error',
        });
      }

      formFetcher.reset();
    }
  }, [formFetcher, showSignUpDialog]);

  return (
    <div className="flex h-full min-h-full flex-col">
      <title>Onboarding | UIs | John Heher</title>
      <meta name="description" content="A simple onboarding page created by John Heher." />
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
          <h1 className="text-3xl font-semibold">Onboarding</h1>
          <p className="my-5 text-lg text-[#282B27]">
            An example of an onboarding marketing landing page with signup.
          </p>
        </div>
      </div>
      <div className="h-full bg-linear-to-b from-blue-950 to-mist-700 pt-30 pb-60">
        <h2 className="text-center text-2xl font-semibold text-better-white">Choose a plan</h2>
        <div className="mt-10 flex justify-center gap-3">
          <div className="group relative cursor-pointer text-better-black" onClick={() => setSelectedPlan('basic')} data-selected={selectedPlan === 'basic'}>
            <div className="
              relative z-2 m-2 flex h-80 w-60 rounded-sm bg-mist-400 p-4 transition-all
              group-hover:not-group-data-selected:bg-mist-200
              group-data-selected:bg-mist-50
            "
            >
              <div className="relative grid grid-rows-[50px_1fr_50px]">

                <h2 className="text-lg">Heher+ with ads</h2>
                <ul className="mt-3 flex list-none flex-col gap-3 text-sm text-gray-700">
                  <li>Watch 100+ shows and movies with ads</li>
                </ul>
                <span className="self-end text-xl">$4.99/mo</span>
              </div>
            </div>
            <div className="
              absolute top-0 left-0 z-1 size-full rounded-lg bg-better-white/70 transition-all
              group-hover:not-group-data-selected:bg-better-white/80
              group-data-selected:bg-better-white/90
            "
            />
          </div>
          <div className="group relative cursor-pointer text-better-black" onClick={() => setSelectedPlan('premium')} data-selected={selectedPlan === 'premium'}>
            <div className="
              relative z-2 m-2 flex h-80 w-60 rounded-sm bg-mist-400 p-4 transition-all
              group-hover:not-group-data-selected:bg-mist-200
              group-data-selected:bg-mist-50
            "
            >
              <div className="relative grid grid-rows-[50px_1fr_50px]">
                <h2 className="text-lg">Heher+</h2>
                <ul className="mt-3 flex list-none flex-col gap-3 text-sm text-gray-700">
                  <li>Watch 100+ shows and movies ad-free in 4K</li>
                  <li>Download to your device for offline viewing</li>
                </ul>
                <span className="self-end text-xl">$9.99/mo</span>
              </div>
            </div>
            <div className="
              absolute top-0 left-0 z-1 size-full rounded-lg bg-emerald-700 transition-all
              group-hover:not-group-data-selected:bg-emerald-600
              group-data-selected:bg-emerald-400
            "
            />
          </div>
          <div className="group relative cursor-pointer text-better-black" onClick={() => setSelectedPlan('bundle')} data-selected={selectedPlan === 'bundle'}>
            <div className="
              relative z-2 m-2 flex h-80 w-60 rounded-sm bg-mist-400 p-4 transition-all
              group-hover:not-group-data-selected:bg-mist-200
              group-data-selected:border-blue-300 group-data-selected:bg-mist-50
            "
            >
              <div className="relative grid grid-rows-[50px_1fr_50px]">
                <div>
                  <h2 className="text-lg">Heher+ Bundle</h2>
                  <span className="mt-0.75 block text-sm leading-none text-fuchsia-700">with Heher Music™</span>
                </div>
                <ul className="mt-3 flex list-none flex-col gap-3 text-sm text-gray-700">
                  <li>Watch 100+ shows and movies ad-free in 4K</li>
                  <li>Download to your device for offline viewing</li>
                  <li>Stream over 100+ million songs</li>
                </ul>
                <span className="self-end text-xl">$14.99/mo</span>
              </div>
            </div>
            <div className="
              absolute top-0 left-0 z-1 size-full rounded-lg bg-linear-to-br from-emerald-700 to-fuchsia-900 transition-all
              group-hover:not-group-data-selected:from-emerald-600 group-hover:not-group-data-selected:to-fuchsia-700
              group-data-selected:from-emerald-400 group-data-selected:to-fuchsia-400
            "
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="
              mt-20 cursor-pointer rounded-lg bg-blue-950 px-6 py-3 text-lg font-semibold text-better-white transition-colors
              hover:bg-blue-800
            "
            onClick={() => setShowSignUpDialog(true)}
          >
            Next
          </button>
          <SignUpDialog show={showSignUpDialog} close={() => setShowSignUpDialog(false)} />
        </div>
      </div>
      <Toaster />
    </div>
  );
}
