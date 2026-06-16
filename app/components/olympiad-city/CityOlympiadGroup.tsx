import { use } from 'react';

import { TripPageContext } from '~/utils/context';

import { CityOlympiad } from './CityOlympiad';
import { filterOutNonOlympiadsForCity } from './utils';

type CityOlympiadGroupProps = {
  olympiads: any[];
  cityName: string;
};

export default function CityOlympiadGroup({ olympiads, cityName }: CityOlympiadGroupProps) {
  const { visits } = use(TripPageContext);

  const filteredOlympiads = filterOutNonOlympiadsForCity(cityName, olympiads);

  return (
    <div>
      {filteredOlympiads.map((olympiad) => {
        if (!olympiad?.year) {
          return null;
        }

        const visit = visits.find(
          visit => visit.year === olympiad.year.toString() && visit.type === olympiad.olympiadType?.toLowerCase(),
        );

        return <CityOlympiad key={olympiad.id} olympiad={olympiad} visit={visit} selected expanded />;
      })}
    </div>
  );
};
