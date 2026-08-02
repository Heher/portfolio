import type { FormattedNetwork, FormattedShow, ScheduleData } from '@/types/uis/tv-guide';

export const hourWidth = 220;

export async function getScheduleData(date: string = '2026-08-02'): Promise<ScheduleData[]> {
  const response = await fetch(`https://api.tvmaze.com/schedule?country=US&date=${date}`);
  const data: ScheduleData[] = await response.json();
  return data;
}

export function formatScheduleData(data: ScheduleData[]) {
  const networks: Record<string, FormattedNetwork> = {};

  data.forEach((item) => {
    const formattedShow: FormattedShow = {
      id: item.show.id,
      name: item.show.name,
      startTime: item.airstamp,
      duration: item.runtime,
    };

    const networkId = item.show.network?.id;

    if (networkId && !networks[networkId]) {
      networks[networkId] = {
        id: String(networkId),
        name: item.show.network?.name,
        shows: [formattedShow],
      };
    }
    else if (networkId) {
      networks[networkId].shows.push(formattedShow);
    }
  });

  return { networks: Object.values(networks) };
}
