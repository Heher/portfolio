import { createTableData } from '~/components/uis/tables/utils';

export async function loader() {
  const tableData = createTableData(20);

  return { data: tableData };
}

export default function OnboardingPage() {
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
      <div className="h-full bg-mist-800 pt-30 pb-50">
        <h2 className="text-center text-2xl font-semibold text-better-white">Choose a plan</h2>
        <div className="mt-10 flex justify-center gap-3">
          <div className="group relative text-better-black">
            <div className="relative z-2 m-1 flex h-70 w-50 rounded-md bg-[#F5F5F5] p-4">
              <div className="relative flex flex-col justify-between bg-[#f5f5f5]">
                <div>
                  <h2 className="text-lg">Heher+ with ads</h2>
                  {/* <span className="text-sm text-[#777]">with ads</span> */}
                </div>
                <span className="text-xl">$4.99/mo</span>
              </div>
            </div>
            <div className="
              absolute top-0 left-0 z-1 size-full rounded-lg border border-better-white/10 bg-better-white/70 transition-all
              group-hover:blur-xs
            "
            />
          </div>
          <div className="group relative text-better-black">
            <div className="relative z-2 m-1 flex h-70 w-50 rounded-md bg-[#F5F5F5] p-4">
              <div className="relative flex flex-col justify-between bg-[#f5f5f5]">
                <div>
                  <h2 className="text-lg">Heher+</h2>
                  {/* <span className="text-sm text-[#777]">with ads</span> */}
                </div>
                <span className="text-xl">$9.99/mo</span>
              </div>
            </div>
            <div className="
              absolute top-0 left-0 z-1 size-full rounded-lg border border-better-white bg-emerald-500 transition-all
              group-hover:blur-xs
            "
            />
          </div>
          <div className="group relative text-better-black">
            <div className="relative z-2 m-1 flex h-70 w-50 rounded-md bg-[#F5F5F5] p-4">
              <div className="relative flex flex-col justify-between bg-[#f5f5f5]">
                <div className="flex flex-col">
                  <h2 className="text-lg">Heher+ Bundle</h2>
                  <span className="text-sm text-[#777]">with Heher Music™</span>
                </div>
                <span className="text-xl">$14.99/mo</span>
              </div>
            </div>
            <div className="
              absolute top-0 left-0 z-1 size-full rounded-lg border border-better-white bg-linear-to-br from-emerald-400 to-fuchsia-400 transition-all
              group-hover:blur-xs
            "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
