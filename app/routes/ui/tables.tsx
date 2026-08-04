import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

import BasicTable from '~/components/uis/tables/BasicTable';
import { createTableData } from '~/components/uis/tables/utils';

import type { Route } from './+types/tables';

export async function loader() {
  const tableData = createTableData(300);

  return { data: tableData };
}

export default function TablesPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex min-h-dvh flex-col">
      <title>Tables | UIs | John Heher</title>
      <meta name="description" content="A simple table component created by John Heher." />
      <div className="
        mx-auto flex w-full max-w-xl flex-col p-5
        sm:px-0 sm:pt-10 sm:pb-8
      "
      >
        <Link
          to="/"
          className="
            flex w-max items-center gap-2 text-sm font-semibold text-[#282B27]
            hover:opacity-80
            sm:text-base
          "
        >
          <ArrowLeft className="size-4.5" />
          <span className="block">Back</span>
        </Link>
        <div className="
          mt-7
          sm:mt-10
        "
        >
          <h1 className="
            text-2xl font-semibold
            sm:text-3xl
          "
          >
            Tables
          </h1>
          <p className="
            my-3 font-zilla text-lg text-[#282B27]
            sm:my-5 sm:text-xl
          "
          >
            I've found if I'm being asked to build an internal tool,
            {' '}
            <span className="whitespace-nowrap">it's gonna be a table.</span>
          </p>
        </div>
      </div>
      <div className="
        h-full flex-1 bg-linear-to-b from-tables to-tables-dark px-2.5 py-5
        sm:px-0 sm:pt-30 sm:pb-0
      "
      >
        <div className="mx-auto w-full max-w-4xl">
          <BasicTable data={loaderData.data} />
        </div>
      </div>
    </div>
  );
}
