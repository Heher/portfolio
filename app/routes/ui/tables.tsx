import { MainHeader } from '@/app/components/uis/components';
import Header from '@/app/components/uis/Header';
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
      <Header
        heading={<MainHeader>Tables</MainHeader>}
        subhead={(
          <span>
            I've found if I'm being asked to build an internal tool,
            {' '}
            <span className="whitespace-nowrap">it's gonna be a table.</span>
          </span>
        )}
      />
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
