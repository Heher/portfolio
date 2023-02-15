import VisitsGraph from './VisitsGraph';

const TripStatus = ({ olympiads, visits }) => {
  const totalWinter = olympiads.filter((olympiad) => olympiad.olympiadType === 'WINTER').length;
  const totalSummer = olympiads.filter((olympiad) => olympiad.olympiadType === 'SUMMER').length;

  let winterVisits = 0;
  let summerVisits = 0;

  Object.values(visits).forEach((yearVisits) => {
    if (yearVisits.winter) winterVisits++;
    if (yearVisits.summer) summerVisits++;
  });

  return (
    <div className="flex items-center justify-between w-[75vw] mx-auto mt-[50px]">
      <VisitsGraph title="Summer" visits={summerVisits} total={totalSummer} />
      <VisitsGraph title="Winter" visits={winterVisits} total={totalWinter} />
    </div>
  );
};

export default TripStatus;
