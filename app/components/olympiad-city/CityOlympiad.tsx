import { OlympiadMedia } from './OlympiadMedia';

export const CityOlympiad = ({ olympiad, visit, selected = false }) => {
  return (
    <li className="city-olympiad mr-[20px]">
      <div className="title grid grid-cols-[10px_1fr] gap-[7px] items-center">
        <span
          className={`city-status w-[10px] h-[10px] rounded-full bg-[var(--negative)] ${
            visit && 'bg-[var(--positive)]'
          }`}
        />
        <p key={olympiad.id} className="m-0">
          {olympiad.year}{' '}
          {selected && `${olympiad.olympiadType.charAt(0) + olympiad.olympiadType.slice(1).toLowerCase()} Games`}
        </p>
      </div>
      <div className="media hidden items-end mt-[20px] group-[.selected]:flex">
        {visit && <OlympiadMedia visit={visit} olympiadType={olympiad.olympiadType} />}
      </div>
    </li>
  );
};
