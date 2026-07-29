import { createTableData } from '~/components/uis/tables/utils';

import type { Route } from './+types/tables';

export async function loader() {
  const tableData = createTableData(20);

  return { data: tableData };
}

function PlanCard({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative flex h-70 w-50 rounded-lg border-2 border-transparent bg-[#F5F5F5] p-4">
      {children}
    </div>
  );
}

export default function OnboardingPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="">
      <title>Onboarding | UIs | John Heher</title>
      <meta name="description" content="A simple onboarding page created by John Heher." />
      <h1 className="text-2xl font-semibold">Onboarding</h1>
      <p className="my-5 text-base text-[#282B27]">
        An example of an onboarding marketing landing page with signup.
      </p>
      <div className="mt-10">
        <h2 className="text-center text-xl font-semibold">Choose a plan</h2>
        <div className="mt-5 flex justify-center gap-3">
          <div className="group relative">
            <div className="relative z-2 m-0.5 flex h-69 w-49 rounded-md bg-[#F5F5F5] p-4">
              <div className="relative flex flex-col justify-between bg-[#f5f5f5]">
                <div>
                  <h2 className="text-lg">Heher+ with ads</h2>
                  {/* <span className="text-sm text-[#777]">with ads</span> */}
                </div>
                <span className="text-xl">$4.99/mo</span>
              </div>
            </div>
            <div className="
              absolute top-0 left-0 z-1 size-full rounded-lg bg-[#FF0000] transition-all
              group-hover:blur-xs
            "
            />
          </div>
          <div className="group relative">
            <div className="relative z-2 m-0.5 flex h-69 w-49 rounded-md bg-[#F5F5F5] p-4">
              <div className="relative flex flex-col justify-between bg-[#f5f5f5]">
                <div>
                  <h2 className="text-lg">Heher+</h2>
                  {/* <span className="text-sm text-[#777]">with ads</span> */}
                </div>
                <span className="text-xl">$9.99/mo</span>
              </div>
            </div>
            <div className="
              absolute top-0 left-0 z-1 size-full rounded-lg bg-[#00FF00] transition-all
              group-hover:blur-xs
            "
            />
          </div>
          <div className="group relative">
            <div className="relative z-2 m-0.5 flex h-69 w-49 rounded-md bg-[#F5F5F5] p-4">
              <div className="relative flex flex-col justify-between bg-[#f5f5f5]">
                <div>
                  <h2 className="text-lg">Heher+ Bundle</h2>
                  <span className="text-sm text-[#777]">with Heher Music™</span>
                </div>
                <span className="text-xl">$14.99/mo</span>
              </div>
            </div>
            <div className="
              absolute top-0 left-0 z-1 size-full rounded-lg bg-[#0000FF] transition-all
              group-hover:blur-xs
            "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
