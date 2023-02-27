import { OlympiadMedia } from './OlympiadMedia';

function SharedOlympiads({ olympiads, visit, handleImageModal }) {
  const olympiadYears = olympiads.map((olympiad) => olympiad.year);
  const firstOlympiad = olympiads[0];

  return (
    <li className="city-olympiad mr-[20px]">
      <div className="title grid grid-cols-[10px_1fr] items-center gap-[7px]">
        <span className={`city-status h-[10px] w-[10px] rounded-full bg-[var(--positive)]`} />
        <p className="m-0 text-[1.2rem]">
          {olympiadYears.join(' and ')}
          {` ${firstOlympiad.olympiadType.charAt(0) + firstOlympiad.olympiadType.slice(1).toLowerCase()} Games`}
        </p>
      </div>
      <div className="media mt-[20px] items-end group-[.selected]:flex">
        <OlympiadMedia visit={visit} olympiadType={firstOlympiad.olympiadType} handleImageModal={handleImageModal} />
      </div>
    </li>
  );
}

export default SharedOlympiads;
