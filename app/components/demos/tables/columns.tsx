import { createColumnHelper } from '@tanstack/react-table';
import { format } from 'date-fns';
import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

import type { TableData } from '@/types/demos/table';

import StatusTag from './StatusTag';

const columnHelper = createColumnHelper<TableData>();

const MotionArrow = motion.create(ArrowDown);

export const columns = [
  columnHelper.accessor('id', {
    header: ({ column }) => {
      const isSorted = column.getIsSorted();

      return (
        <button
          type="button"
          className="
            flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5
            hover:bg-better-white/50
          "
          onClick={() => column.toggleSorting(isSorted === 'asc')}
        >
          ID
          <div className="size-4">
            {isSorted && (
              <MotionArrow
                className="size-4"
                initial={{ rotate: 0 }}
                animate={{ rotate: isSorted === 'desc' ? 180 : 0 }}
                transition={{ ease: 'easeOut', duration: 0.15 }}
              />
            )}
          </div>
        </button>
      );
    },
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('customer', {
    header: ({ column }) => {
      const isSorted = column.getIsSorted();

      return (
        <button
          type="button"
          className="
            flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5
            hover:bg-better-white/50
          "
          onClick={() => column.toggleSorting(isSorted === 'asc')}
        >
          Customer
          <div className="size-4">
            {isSorted && (
              <MotionArrow
                className="size-4"
                initial={{ rotate: 0 }}
                animate={{ rotate: isSorted === 'desc' ? 180 : 0 }}
                transition={{ ease: 'easeOut', duration: 0.15 }}
              />
            )}
          </div>
        </button>
      );
    },
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('date', {
    header: ({ column }) => {
      const isSorted = column.getIsSorted();

      return (
        <button
          type="button"
          className="
            flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5
            hover:bg-better-white/50
          "
          onClick={() => column.toggleSorting(isSorted === 'asc')}
        >
          Date
          <div className="size-4">
            {isSorted && (
              <MotionArrow
                className="size-4"
                initial={{ rotate: 0 }}
                animate={{ rotate: isSorted === 'desc' ? 180 : 0 }}
                transition={{ ease: 'easeOut', duration: 0.15 }}
              />
            )}
          </div>
        </button>
      );
    },
    cell: (info) => {
      const date = info.getValue();

      return (
        <div className="flex flex-col gap-1">
          <span className="text-sm">{format(date, 'yyyy-MM-dd')}</span>
        </div>
      );
    },
    sortingFn: 'datetime',
  }),
  columnHelper.accessor('total', {
    header: ({ column }) => {
      const isSorted = column.getIsSorted();

      return (
        <button
          type="button"
          className="
            flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5
            hover:bg-better-white/50
          "
          onClick={() => column.toggleSorting(isSorted === 'asc')}
        >
          Total
          <div className="size-4">
            {isSorted && (
              <MotionArrow
                className="size-4"
                initial={{ rotate: 0 }}
                animate={{ rotate: isSorted === 'desc' ? 180 : 0 }}
                transition={{ ease: 'easeOut', duration: 0.15 }}
              />
            )}
          </div>
        </button>
      );
    },
    cell: (info) => {
      const total = info.getValue();

      return `$${total}`;
    },
  }),
  columnHelper.accessor('status', {
    header: ({ column }) => {
      const isSorted = column.getIsSorted();

      return (
        <button
          type="button"
          className="
            flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5
            hover:bg-better-white/50
          "
          onClick={() => column.toggleSorting(isSorted === 'asc')}
        >
          Status
          <div className="size-4">
            {isSorted && (
              <MotionArrow
                className="size-4"
                initial={{ rotate: 0 }}
                animate={{ rotate: isSorted === 'desc' ? 180 : 0 }}
                transition={{ ease: 'easeOut', duration: 0.15 }}
              />
            )}
          </div>
        </button>
      );
    },
    cell: (info) => {
      const status = info.getValue();

      return <StatusTag text={status} />;
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
