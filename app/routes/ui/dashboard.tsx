import { ArrowLeft, ChevronRight, InfoIcon } from 'lucide-react';
import { Link } from 'react-router';

import CreditCard from '@/app/components/uis/dashboard/CreditCard';
import SidebarCard from '@/app/components/uis/dashboard/SidebarCard';
import { getFakeScheduleData } from '@/app/components/uis/tv-guide/utils';

export async function loader() {
  // const schedule = await getScheduleData();

  // const networks = formatScheduleData(schedule);

  const networks = getFakeScheduleData();

  return { networks };
}

export type LoaderData = typeof loader;

export default function DashboardPage() {
  return (
    <div className="">
      <title>Dashboard | UIs | John Heher</title>
      <meta name="description" content="A beautiful, unbelievable dashboard created by John Heher." />
      <div className="mx-auto flex w-full max-w-xl flex-col">
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
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <p className="mt-5 mb-10 text-lg text-[#282B27]">
            An example of a totally original dashboard that isn't almost exactly like what I worked on for two years.
          </p>
        </div>
      </div>
      <div className="h-full bg-linear-to-b from-templating-light/60 to-templating-dark/50 pt-10">
        <div className="mx-auto w-full max-w-[1000px] pb-20">
          <div className="h-200 bg-gray-300">
            <div className="flex w-full gap-5 p-5">
              <div className="flex w-full flex-col gap-10">
                <CreditCard ccName="Heher Platinum® Reserve Card" ccColor="bg-black" balance="$1,606.38" availableCredit="$48,393.62" lastStatement="$2,119.44" minimumAmount="$50.00" />
                <CreditCard ccName="Heher Emerald® Preferred Card" ccColor="bg-emerald-800" balance="$609.10" availableCredit="$9,390.90" lastStatement="$804.70" minimumAmount="$35.00" />
              </div>
              <div className="flex w-full max-w-75 flex-col gap-5">
                <SidebarCard header="Rewards points" infoBox={{ header: 'Total Available Points', data: '1,337' }} links={['Points Summary', 'Redeem Points']} />
                <SidebarCard header="Cash back" infoBox={{ header: 'Total Cash Rewards', data: '$50.88' }} links={['Redeem Cash Rewards']} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
