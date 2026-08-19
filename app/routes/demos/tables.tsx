import { MainHeader, UIPageBody } from '@/app/components/demos/components';
import Header from '@/app/components/demos/Header';
import BasicTable from '@/app/components/demos/tables/BasicTable';
import { createTableData } from '@/app/components/demos/tables/utils';

import type { Route } from './+types/tables';

export async function loader() {
  const tableData = createTableData(300);

  return { data: tableData };
}

export default function TablesPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="relative flex min-h-dvh flex-col">
      <title>Tables | Demos | John Heher</title>
      <meta name="description" content="A simple table component created by John Heher." />
      <meta property="og:title" content="Tables | Demos | John Heher" />
      <meta property="og:description" content="A simple table component created by John Heher." />
      <Header
        heading={(
          <MainHeader url="/demos/tables">
            Tables
          </MainHeader>
        )}
        subhead={(
          <span>
            I've found if I'm being asked to build an internal tool, it's gonna be a table.
          </span>
        )}
        imgSrc="/demos/table-3.png"
        madeWith={['React', 'TanStack Table', 'Tailwind', 'Faker']}
        headerBgColor="bg-mello-header"
      />
      <UIPageBody
        transitionPath="/demos/tables"
        className="
          flex h-full min-h-dvh flex-1 flex-col bg-linear-to-b from-mello-top/80 to-mello-bottom/80 px-2.5 py-5
          sm:p-0
        "
      >
        <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center">
          <BasicTable data={loaderData.data} />
        </div>
      </UIPageBody>
    </div>
  );
}
