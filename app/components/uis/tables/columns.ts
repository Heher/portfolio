import type { ColumnDef } from '@tanstack/react-table';

import type { TableData } from '@/types/uis/table';

export const columns: ColumnDef<TableData>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'startTime',
    header: 'Start Time',
  },
  {
    accessorKey: 'endTime',
    header: 'End Time',
  },
];
