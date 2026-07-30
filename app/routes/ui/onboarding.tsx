import { useState } from 'react';

import { createTableData } from '~/components/uis/tables/utils';

export async function loader() {
  const tableData = createTableData(20);

  return { data: tableData };
}

const plans = {
  basic: '1',
  premium: '2',
  bundle: '3',
};

export default function OnboardingPage() {
  const [selectedPlan, setSelectedPlan] = useState<keyof typeof plans | null>('basic');

  return (
    <div className="flex h-full min-h-full flex-col">
      <title>Onboarding | UIs | John Heher</title>
      <meta name="description" content="A simple onboarding page created by John Heher." />
      <div className="mx-auto w-full max-w-xl py-8">
        <h1 className="text-3xl font-semibold">Onboarding</h1>
        <p className="my-5 text-lg text-[#282B27]">
          An example of an onboarding marketing landing page with signup.
        </p>
      </div>
      <div className="h-full bg-linear-to-b from-blue-950 to-mist-700 pt-30 pb-60">
        <h2 className="text-center text-2xl font-semibold text-better-white">Choose a plan</h2>
        <div className="mt-10 flex justify-center gap-3">
          <div className="group relative cursor-pointer text-better-black" onClick={() => setSelectedPlan('basic')} data-selected={selectedPlan === 'basic'}>
            <div className="
              relative z-2 m-2 flex h-70 w-55 rounded-sm bg-mist-400 p-4 transition-all
              group-hover:not-group-data-selected:bg-mist-200
              group-data-selected:bg-mist-50
            "
            >
              <div className="relative grid grid-rows-[50px_1fr_50px]">

                <h2 className="text-lg">Heher+ with ads</h2>
                <ul className="mt-5 flex list-none flex-col gap-2 text-sm text-gray-700">
                  <li>Watch over 100+ shows and movies with ads</li>
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
              relative z-2 m-2 flex h-70 w-55 rounded-sm bg-mist-400 p-4 transition-all
              group-hover:not-group-data-selected:bg-mist-200
              group-data-selected:bg-mist-50
            "
            >
              <div className="relative grid grid-rows-[50px_1fr_50px]">
                <h2 className="text-lg">Heher+</h2>
                <ul className="mt-5 flex list-none flex-col gap-2 text-sm text-gray-700">
                  <li>Watch over 100+ shows and movies ad-free</li>
                  <li>4K picture quality</li>
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
              relative z-2 m-2 flex h-70 w-55 rounded-sm bg-mist-400 p-4 transition-all
              group-hover:not-group-data-selected:bg-mist-200
              group-data-selected:border-blue-300 group-data-selected:bg-mist-50
            "
            >
              <div className="relative grid grid-rows-[50px_1fr_50px]">
                <div>
                  <h2 className="text-lg">Heher+ Bundle</h2>
                  <span className="text-sm text-gray-600">with Heher Music™</span>
                </div>
                <ul className="mt-5 flex list-none flex-col gap-2 text-sm text-gray-700">
                  <li>Watch over 100+ shows and movies ad-free</li>
                  <li>4K picture quality</li>
                  <li>Stream over 100+ million songs</li>
                </ul>
                <span className="self-end text-xl">$14.99/mo</span>
              </div>
            </div>
            <div className="
              absolute top-0 left-0 z-1 size-full rounded-lg bg-linear-to-br from-emerald-700 to-fuchsia-700 transition-all
              group-hover:not-group-data-selected:from-emerald-600 group-hover:not-group-data-selected:to-fuchsia-600
              group-data-selected:from-emerald-400 group-data-selected:to-fuchsia-400
            "
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="
            mt-20 cursor-pointer rounded-lg bg-blue-950 px-6 py-3 text-lg font-semibold text-better-white transition-colors
            hover:bg-blue-800
          "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
