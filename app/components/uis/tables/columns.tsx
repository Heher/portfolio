import { createColumnHelper } from '@tanstack/react-table';
import { format } from 'date-fns';

import type { TableData } from '@/types/uis/table';

const columnHelper = createColumnHelper<TableData>();

export const columns = [
  columnHelper.accessor('id', {
    header: () => 'ID',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('name', {
    header: () => 'Product',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('dateTime', {
    header: () => 'Order time',
    cell: (info) => {
      const datetime = info.getValue();

      return (
        <div className="flex flex-col gap-1">
          <span className="text-sm">{format(datetime, 'yyyy-MM-dd')}</span>
          <span className="text-sm">{format(datetime, 'HH:mm')}</span>
        </div>
      );
    },
  }),
  columnHelper.accessor('total', {
    header: () => 'Total',
    cell: (info) => {
      const total = info.getValue();

      return `$${total}`;
    },
  }),
];

// export const columns: ColumnDef<TableData>[] = [
//   {
//     accessorKey: 'id',
//     header: 'ID',
//   },
//   {
//     accessorKey: 'name',
//     header: 'Product',
//   },
//   {
//     accessorKey: 'dateTime',
//     header: 'Order Time',
//     cell: (info) => {
//       const formattedDatetime = format(info.row.original.dateTime, 'yyyy-MM-dd HH:mm');

//       return formattedDatetime;
//     },
//   },
//   {
//     accessorKey: 'total',
//     header: 'Total',
//     cell: (info) => {
//       const price = info.getValue();

//       return `$${price}`;
//     },
//   },
// ];
