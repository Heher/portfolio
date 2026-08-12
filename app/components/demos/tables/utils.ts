import { faker } from '@faker-js/faker';

import type { TableData } from '@/types/demos/table';

export const statuses = ['Processing', 'Shipped', 'Delivered'];

export function createTableData(amount: number): TableData[] {
  const data: TableData[] = [];

  for (let i = 0; i < amount; i++) {
    data.push({
      id: `JH00${faker.string.numeric(4)}`,
      customer: faker.person.fullName(),
      date: faker.date.past().toISOString(),
      status: statuses[Math.floor(Math.random() * statuses.length)],
      items: faker.number.int({ min: 1, max: 5 }),
      total: faker.commerce.price({ min: 10, max: 500 }),
    });
  }

  return data;
}
