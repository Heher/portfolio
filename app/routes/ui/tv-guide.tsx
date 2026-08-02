import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

import { formatScheduleData, getScheduleData } from '@/app/components/uis/tv-guide/utils';
import TVGuide from '~/components/uis/tv-guide/TVGuide';

// import type { Route } from './+types/tv-guide';

export async function loader() {
  // const networks = await getNetworkData();
  const schedule = await getScheduleData();

  const { networks } = formatScheduleData(schedule);

  return { networks };
}

export type LoaderData = typeof loader;

export default function TVGuidePage() {
  return (
    <div className="">
      <title>TV Guide | UIs | John Heher</title>
      <meta name="description" content="A simple TV guide component created by John Heher." />
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
          <h1 className="text-3xl font-semibold">TV Guide</h1>
          <p className="my-5 text-lg text-[#282B27]">
            No need to wait for your favorite channel to roll around again on the TV Guide channel. Through the magic of computers, you can scroll.
          </p>
        </div>
      </div>
      <div className="h-full bg-linear-to-b from-tv-guide-light to-tv-guide pt-30 pb-60">
        <div className="mx-auto w-full max-w-4xl">
          <TVGuide />
        </div>
      </div>
    </div>
  );
}
