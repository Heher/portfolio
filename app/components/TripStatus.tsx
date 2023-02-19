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
    <div className="mx-auto mt-[30px] flex w-[75vw] items-center justify-between md:mt-[40px] md:w-auto md:px-[30px]">
      <VisitsGraph title="Summer" visits={summerVisits} total={totalSummer} />
      <VisitsGraph title="Winter" visits={winterVisits} total={totalWinter} />
    </div>
  );
};

export default TripStatus;
