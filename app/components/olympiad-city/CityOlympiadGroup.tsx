import { useTripContext } from '~/routes/trip';
import { CityOlympiad } from './CityOlympiad';
import { filterOutNonOlympiadsForCity } from './utils';

type CityOlympiadGroupProps = {
  olympiads: any[];
  cityName: string;
};

const CityOlympiadGroup = ({ olympiads, cityName }: CityOlympiadGroupProps) => {
  const { visits } = useTripContext();

  const filteredOlympiads = filterOutNonOlympiadsForCity(cityName, olympiads);

  return (
    <div>
      {filteredOlympiads.map((olympiad) => {
        if (!olympiad?.year) {
          return null;
        }

        const visit = visits.find(
          (visit) => visit.year === olympiad.year.toString() && visit.type === olympiad.olympiadType?.toLowerCase()
        );

        return <CityOlympiad key={olympiad.id} olympiad={olympiad} visit={visit} selected expanded />;
      })}
    </div>
  );
};

export default CityOlympiadGroup;
