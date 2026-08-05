import type { Dispatch, SetStateAction } from 'react';

import type { Plans } from '@/types/uis/onboarding';

import Card from './Card';

type HorizontalPlansProps = {
  selectedPlan: string;
  setSelectedPlan: Dispatch<SetStateAction<Plans>>;
  showDialog: () => void;
};

export default function HorizontalPlans({ selectedPlan, setSelectedPlan, showDialog }: HorizontalPlansProps) {
  return (
    <div>
      <div className="
        mt-10 flex flex-col justify-center gap-5
        sm:flex-row sm:gap-3
      "
      >
        <Card planName="basic" selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}>
          <div className="
            relative z-2 m-2 flex flex-col justify-between rounded-sm bg-mist-50 p-4 transition-all
            sm:h-80 sm:w-60 sm:bg-mist-400
            sm:group-hover:not-group-data-selected:bg-mist-200
            sm:group-data-selected:bg-mist-50
          "
          >
            <div className="
              relative mb-5 grid h-full grid-rows-[30px_1fr_30px]
              sm:mb-0 sm:grid-rows-[50px_1fr_50px]
            "
            >

              <h2 className="text-lg">Heher+ with ads</h2>
              <ul className="my-3 flex list-none flex-col gap-3 text-sm text-gray-700">
                <li>Watch 100+ shows and movies with ads</li>
              </ul>
              <span className="
                self-end text-lg
                sm:text-xl
              "
              >
                $4.99/mo
              </span>
            </div>
            <button
              type="button"
              className="
                flex h-10 w-full items-center justify-center rounded-sm bg-blue-950 font-semibold text-better-white
                sm:hidden
              "
              onClick={showDialog}
            >
              Select
            </button>
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
            relative z-2 m-2 flex flex-col justify-between rounded-sm bg-mist-50 p-4 transition-all
            sm:h-80 sm:w-60 sm:bg-mist-400
            sm:group-hover:not-group-data-selected:bg-mist-200
            sm:group-data-selected:bg-mist-50
          "
          >
            <div className="
              relative mb-5 grid h-full grid-rows-[30px_1fr_30px]
              sm:mb-0 sm:grid-rows-[50px_1fr_50px]
            "
            >
              <h2 className="text-lg">Heher+</h2>
              <ul className="my-3 flex list-none flex-col gap-3 text-sm text-gray-700">
                <li>Watch 100+ shows and movies ad-free in 4K</li>
                <li>Download to your device for offline viewing</li>
              </ul>
              <span className="
                self-end text-lg
                sm:text-xl
              "
              >
                $9.99/mo
              </span>
            </div>
            <button
              type="button"
              className="
                flex h-10 w-full items-center justify-center rounded-sm bg-blue-950 font-semibold text-better-white
                sm:hidden
              "
              onClick={showDialog}
            >
              Select
            </button>
          </div>
          <div className="
            absolute top-0 left-0 z-1 size-full rounded-lg bg-emerald-400 transition-all
            sm:bg-emerald-800
            sm:group-hover:not-group-data-selected:bg-emerald-600
            sm:group-data-selected:bg-emerald-400
          "
          />
        </Card>
        <Card planName="bundle" selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}>
          <div className="
            relative z-2 m-2 flex flex-col justify-between rounded-sm bg-mist-50 p-4 transition-all
            sm:h-80 sm:w-60 sm:bg-mist-400
            sm:group-hover:not-group-data-selected:bg-mist-200
            sm:group-data-selected:bg-mist-50
          "
          >
            <div className="
              relative mb-5 grid h-full grid-rows-[50px_1fr_30px]
              sm:mb-0 sm:grid-rows-[50px_1fr_50px]
            "
            >
              <div>
                <h2 className="text-lg">Heher+ Bundle</h2>
                <span className="mt-0.75 block text-sm leading-none text-fuchsia-700">with Heher Music™</span>
              </div>
              <ul className="my-3 flex list-none flex-col gap-3 text-sm text-gray-700">
                <li>Watch 100+ shows and movies ad-free in 4K</li>
                <li>Download to your device for offline viewing</li>
                <li>Stream over 100+ million songs</li>
              </ul>
              <span className="
                self-end text-lg
                sm:text-xl
              "
              >
                $14.99/mo
              </span>
            </div>
            <button
              type="button"
              className="
                flex h-10 w-full items-center justify-center rounded-sm bg-blue-950 font-semibold text-better-white
                sm:hidden
              "
              onClick={showDialog}
            >
              Select
            </button>
          </div>
          <div className="
            absolute top-0 left-0 z-1 size-full rounded-lg bg-linear-to-br from-emerald-400 to-fuchsia-400 transition-all
            group-hover:not-group-data-selected:from-emerald-600 group-hover:not-group-data-selected:to-fuchsia-700
            group-data-selected:from-emerald-400 group-data-selected:to-fuchsia-400
            sm:from-emerald-700 sm:to-fuchsia-900
          "
          />
        </Card>
      </div>
      <div className="
        hidden justify-center
        sm:flex
      "
      >
        <button
          className="
            mt-20 cursor-pointer rounded-lg bg-blue-950 px-6 py-3 text-lg font-semibold text-better-white transition-colors
            hover:bg-blue-800
          "
          onClick={showDialog}
        >
          Next
        </button>
      </div>
    </div>
  );
}
