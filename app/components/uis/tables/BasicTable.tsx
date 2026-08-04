import type { PaginationState, SortingState } from '@tanstack/react-table';

import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,

  getSortedRowModel,

  useReactTable,
} from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import { useOutletContext } from 'react-router';

import type { TableData } from '@/types/uis/table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { columns } from './columns';

type BasicTableProps = {
  data: TableData[];
};

export default function BasicTable({ data }: BasicTableProps) {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState<SortingState>([{ id: 'date', desc: true }]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    // no need to pass pageCount or rowCount with client-side pagination as it is calculated automatically
    state: {
      pagination,
      sorting,
    },
  });

  return (
    <div>
      <div className="overflow-hidden rounded-md border border-better-white">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id} className="sticky top-0">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="
                        h-15 bg-gray-300 font-medium text-gray-800
                        first-of-type:pl-6
                        last-of-type:pr-6
                      "
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length
              ? (
                  table.getRowModel().rows.map(row => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && 'selected'}
                      className="
                        bg-better-white
                        hover:bg-gray-200
                      "
                    >
                      {row.getVisibleCells().map(cell => (
                        <TableCell
                          key={cell.id}
                          className="
                            h-16 pl-4 text-gray-700
                            first-of-type:pl-8
                            last-of-type:pr-6
                          "
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                )
              : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                      No results.
                    </TableCell>
                  </TableRow>
                )}
          </TableBody>
        </Table>
      </div>
      <div className="mt-3 flex items-center justify-between px-6">
        <div className="flex items-center gap-1 text-better-white/80">
          <span>Page</span>
          <span className="font-bold">
            {`${table.getState().pagination.pageIndex + 1} of ${table.getPageCount().toLocaleString()}`}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="
              cursor-pointer rounded-sm border border-gray-900 bg-better-white/90 px-2.5 py-1.5 font-semibold text-gray-700 transition-colors
              hover:bg-better-white
              disabled:cursor-not-allowed disabled:bg-gray-400/80
              disabled:hover:bg-gray-400/80
            "
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </button>
          <button
            className="
              cursor-pointer rounded-sm border border-gray-900 bg-better-white/90 px-2.5 py-1.5 font-semibold text-gray-700 transition-colors
              hover:bg-better-white
              disabled:cursor-not-allowed disabled:bg-gray-400/80
              disabled:hover:bg-gray-400/80
            "
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
