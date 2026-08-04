import { faker } from '@faker-js/faker';

import type { TableData } from '@/types/uis/table';

export function createTableData(amount: number): TableData[] {
  const data: TableData[] = [];

  for (let i = 0; i < amount; i++) {
    data.push({
      id: `JH00${faker.string.numeric(3)}`,
      name: faker.commerce.productName(),
      dateTime: faker.date.past().toISOString(),
      total: faker.commerce.price({ min: 10, max: 500 }),
    });
  }

  return data;
}
