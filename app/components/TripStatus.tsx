import { groupBy } from 'lodash';

const TripStatus = ({ olympiads, visits }) => {
  console.log(visits);
  const olympiadsLength = olympiads.length;

  const totalWinter = olympiads.filter((olympiad) => olympiad.olympiadType === 'WINTER').length;
  const totalSummer = olympiads.filter((olympiad) => olympiad.olympiadType === 'SUMMER').length;

  let winterVisits = 0;
  let summerVisits = 0;

  Object.values(visits).forEach((yearVisits) => {
    if (yearVisits.winter) winterVisits++;
    if (yearVisits.summer) summerVisits++;
  });

  return (
    <div>
      <div>
        <h3>Summer</h3>
        <p>
          <span>{summerVisits}</span>
          <span>{totalSummer}</span>
        </p>
      </div>
      <div>
        <h3>Winter</h3>
        <p>
          <span>{winterVisits}</span>
          <span>{totalWinter}</span>
        </p>
      </div>
    </div>
  );
};

export default TripStatus;
