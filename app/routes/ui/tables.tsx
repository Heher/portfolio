import BasicTable from '~/components/uis/tables/BasicTable';
import { createTableData } from '~/components/uis/tables/utils';

import type { Route } from './+types/tables';

export async function loader() {
  const tableData = createTableData(20);

  return { data: tableData };
}

export default function TablesPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="">
      <title>Tables | UIs | John Heher</title>
      <meta name="description" content="A simple table component created by John Heher." />
      <h1 className="text-2xl font-semibold">Tables</h1>
      <p className="my-5 text-base text-[#282B27]">
        I've found if it's an internal tool, it's gonna be a table.
      </p>
      <BasicTable data={loaderData.data} />
    </div>
  );
}
