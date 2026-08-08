import z from 'zod';

import { statuses } from '@/app/components/uis/tables/utils';

const ZTableData = z.object({
  id: z.string(),
  customer: z.string(),
  date: z.iso.datetime(),
  status: z.enum(statuses),
  items: z.number(),
  total: z.string(),
});
export type TableData = z.infer<typeof ZTableData>;
