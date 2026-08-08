import { ArrowLeft, ChevronRight, InfoIcon } from 'lucide-react';
import { Link } from 'react-router';

import { MainHeader, UIPageBody } from '@/app/components/uis/components';
import CreditCard from '@/app/components/uis/dashboard/CreditCard';
import SidebarCard from '@/app/components/uis/dashboard/SidebarCard';
import Header from '@/app/components/uis/Header';
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
    <div className="flex h-dvh flex-col">
      <title>Dashboard | UIs | John Heher</title>
      <meta name="description" content="A beautiful, unbelievable dashboard created by John Heher." />
      <Header heading={<MainHeader transitionPath="/ui/dashboard">Dashboard</MainHeader>} subhead="An example of a totally original dashboard that isn't almost exactly like what I worked on for two years." />
      <UIPageBody
        transitionPath="/ui/dashboard"
        className="
          flex-1 bg-linear-to-b from-templating-light/60 to-templating-dark/50 px-2.5 py-5
          sm:px-0 sm:pt-10 sm:pb-0
        "
      >
        <div className="mx-auto w-full max-w-250">
          <div className="bg-gray-300">
            <div className="
              flex w-full flex-col gap-5 p-3
              sm:flex-row sm:p-5
            "
            >
              <div className="
                flex w-full flex-col gap-3
                sm:gap-10
              "
              >
                <CreditCard ccName="Heher Platinum® Reserve Card" ccColor="bg-black" balance="$1,606.38" availableCredit="$48,393.62" lastStatement="$2,119.44" minimumAmount="$50.00" />
                <CreditCard ccName="Heher Emerald® Preferred Card" ccColor="bg-emerald-800" balance="$609.10" availableCredit="$9,390.90" lastStatement="$804.70" minimumAmount="$35.00" />
              </div>
              <div className="
                flex w-full flex-col gap-5
                sm:max-w-75
              "
              >
                <SidebarCard header="Rewards points" infoBox={{ header: 'Total Available Points', data: '1,337' }} links={['Points Summary', 'Redeem Points']} />
                <SidebarCard header="Cash back" infoBox={{ header: 'Total Cash Rewards', data: '$50.88' }} links={['Redeem Cash Rewards']} />
              </div>
            </div>
          </div>
        </div>
      </UIPageBody>
    </div>
  );
}
