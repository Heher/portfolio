import { faker } from '@faker-js/faker';

import type { TableData } from '@/types/uis/table';

export function createTableData(amount: number): TableData[] {
  const data: TableData[] = [];

  for (let i = 0; i < amount; i++) {
    data.push({
      id: `ID00${faker.string.numeric(3)}`,
      title: faker.commerce.productName(),
      startTime: faker.date.past().toISOString(),
      endTime: faker.date.past().toISOString(),
    });
  }

  return data;
}
