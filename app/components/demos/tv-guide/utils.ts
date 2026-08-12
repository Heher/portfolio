import { TZDate } from '@date-fns/tz';
import { faker } from '@faker-js/faker';
import { addMinutes } from 'date-fns';

import type { FormattedNetwork, FormattedShow, ScheduleData } from '@/types/demos/tv-guide';

export const hourWidth = 280;

// export async function getScheduleData(date: string = '2026-08-02'): Promise<ScheduleData[]> {
//   const response = await fetch(`https://api.tvmaze.com/schedule?country=US&date=${date}`);
//   const data: ScheduleData[] = await response.json();
//   return data;
// }

// export function formatScheduleData(data: ScheduleData[]) {
//   console.log(data.length);
//   const networks: Record<string, FormattedNetwork> = {};

//   data.forEach((item) => {
//     const formattedShow: FormattedShow = {
//       id: item.show.id,
//       name: item.show.name,
//       startTime: item.airstamp,
//       duration: item.runtime,
//     };

//     const networkId = item.show.network?.id;

//     if (networkId && !networks[networkId]) {
//       networks[networkId] = {
//         id: String(networkId),
//         name: item.show.network?.name,
//         shows: [formattedShow],
//       };
//     }
//     else if (networkId) {
//       networks[networkId].shows.push(formattedShow);
//     }
//   });

//   return Object.values(networks);
// }

const durations = [15, 30, 60, 90, 120];
const minutesInDay = 24 * 60;
const midnightNewYork = new TZDate(2026, 7, 2, 0, 0, 0, 'America/New_York');

function loadNetwork() {
  let minutes = 0;
  const shows = [];

  while (minutes < minutesInDay) {
    const showDuration = durations[Math.floor(Math.random() * durations.length)];
    const startTime = addMinutes(midnightNewYork, minutes);

    const formattedShow: FormattedShow = {
      id: shows.length + 1,
      name: faker.lorem.words({ min: 1, max: 3 }),
      startTime: startTime.toISOString(),
      endTime: addMinutes(startTime, showDuration).toISOString(),
      duration: showDuration,
    };

    shows.push(formattedShow);

    minutes += showDuration;
  }

  return shows;
}

export function getFakeScheduleData(): FormattedNetwork[] {
  const networks = [
    {
      id: '1',
      name: 'Fox',
      slug: 'fox',
      shows: loadNetwork(),
    },
    {
      id: '2',
      name: 'ABC',
      slug: 'abc',
      shows: loadNetwork(),
    },
    {
      id: '3',
      name: 'NBC',
      slug: 'nbc',
      shows: loadNetwork(),
    },
    {
      id: '4',
      name: 'CBS',
      slug: 'cbs',
      shows: loadNetwork(),
    },
    {
      id: '5',
      name: 'PBS',
      slug: 'pbs',
      shows: loadNetwork(),
    },
    {
      id: '6',
      name: 'Telemundo',
      slug: 'telemundo',
      shows: loadNetwork(),
    },
    {
      id: '7',
      name: 'ESPN',
      slug: 'espn',
      shows: loadNetwork(),
    },
    {
      id: '8',
      name: 'Nickelodeon',
      slug: 'nickelodeon',
      shows: loadNetwork(),
    },
    {
      id: '9',
      name: 'Bravo',
      slug: 'bravo',
      shows: loadNetwork(),
    },
  ];

  return networks;
}
