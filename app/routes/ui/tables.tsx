import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

import BasicTable from '~/components/uis/tables/BasicTable';
import { createTableData } from '~/components/uis/tables/utils';

import type { Route } from './+types/tables';

export async function loader() {
  const tableData = createTableData(10);

  return { data: tableData };
}

export default function TablesPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="">
      <title>Tables | UIs | John Heher</title>
      <meta name="description" content="A simple table component created by John Heher." />
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
          <h1 className="text-3xl font-semibold">Tables</h1>
          <p className="my-5 text-lg text-[#282B27]">
            I've found if I'm being asked to build an internal tool,
            {' '}
            <span className="whitespace-nowrap">it's gonna be a table.</span>
          </p>
        </div>
      </div>
      <div className="h-full bg-linear-to-b from-tables to-tables-bottom pt-30 pb-60">
        <div className="mx-auto w-full max-w-4xl">
          <BasicTable data={loaderData.data} />
        </div>
      </div>
    </div>
  );
}
