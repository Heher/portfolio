import type { Dispatch, SetStateAction } from 'react';

import type { Plans } from '@/types/uis/onboarding';

import Card from './Card';

type VerticalPlansProps = {
  selectedPlan: string;
  setSelectedPlan: Dispatch<SetStateAction<Plans>>;
};

export default function VerticalPlans({ selectedPlan, setSelectedPlan }: VerticalPlansProps) {
  return (
    <div className="
      mt-10 flex flex-col justify-center gap-3
      sm:flex-row
    "
    >
      <Card planName="basic" selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}>
        <div className="
          relative z-2 m-2 flex h-52 flex-col justify-between rounded-sm bg-mist-400 p-4 transition-all
          group-hover:not-group-data-selected:bg-mist-200
          group-data-selected:bg-mist-50
        "
        >
          <div className="
            relative grid grid-rows-[30px_1fr_50px]
            sm:grid-rows-[50px_1fr_50px]
          "
          >

            <h2 className="text-lg">Heher+ with ads</h2>
            <ul className="mt-3 flex list-none flex-col gap-3 text-sm text-gray-700">
              <li>Watch 100+ shows and movies with ads</li>
            </ul>
            <span className="self-end text-xl">$4.99/mo</span>
          </div>
          <span className="
            flex h-10 w-full items-center justify-center rounded-sm bg-blue-950 font-semibold text-better-white
            sm:hidden
          "
          >
            Select
          </span>
        </div>
        <div className="
          absolute top-0 left-0 z-1 size-full rounded-lg bg-emerald-100/70 transition-all
          group-hover:not-group-data-selected:bg-emerald-100/80
          group-data-selected:bg-emerald-100/90
        "
        />
      </Card>
      <Card planName="premium" selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}>
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
          absolute top-0 left-0 z-1 size-full rounded-lg bg-emerald-800 transition-all
          group-hover:not-group-data-selected:bg-emerald-600
          group-data-selected:bg-emerald-400
        "
        />
      </Card>
      <Card planName="bundle" selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}>
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
      </Card>
    </div>
  );
}
