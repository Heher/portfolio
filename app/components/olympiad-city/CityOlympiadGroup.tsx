import type { FragmentType } from '~/gql';
import { useFragment } from '~/gql';
import { CityOlympiadFragmentDoc } from '~/gql/graphql';
import { useTripContext } from '~/routes/trip';
import { CityOlympiad } from './CityOlympiad';
import { filterOutNonOlympiadsForCity } from './utils';

type CityOlympiadGroupProps = {
  olympiads: FragmentType<typeof CityOlympiadFragmentDoc>[];
  cityName: string;
};

const CityOlympiadGroup = (props: CityOlympiadGroupProps) => {
  const olympiads = useFragment(CityOlympiadFragmentDoc, props.olympiads);
  const { visits } = useTripContext();

  const filteredOlympiads = filterOutNonOlympiadsForCity(props.cityName, olympiads);

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
