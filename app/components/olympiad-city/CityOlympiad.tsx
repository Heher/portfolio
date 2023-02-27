import { OlympiadMedia } from './OlympiadMedia';

type CityOlympiadProps = {
  selected?: boolean;
  handleImageModal: (img: string) => void;
  expanded?: boolean;
};

export const CityOlympiad = ({
  olympiad,
  visit,
  selected = false,
  handleImageModal,
  expanded = false
}: CityOlympiadProps) => {
  return (
    <li className={`city-olympiad ${!selected && 'mr-[25px]'}`}>
      <div className="title grid grid-cols-[12px_1fr] items-center gap-[10px]">
        <span
          className={`city-status h-[12px] w-[12px] rounded-full bg-[var(--negative)] ${
            visit && 'bg-[var(--positive)]'
          }`}
        />
        <p key={olympiad.id} className="m-0 text-[1.2rem]">
          {olympiad.year}{' '}
          {selected && `${olympiad.olympiadType.charAt(0) + olympiad.olympiadType.slice(1).toLowerCase()} Games`}
        </p>
      </div>
      <div className="media mt-[20px] hidden items-end group-[.selected]:flex">
        {expanded && visit && (
          <OlympiadMedia visit={visit} olympiadType={olympiad.olympiadType} handleImageModal={handleImageModal} />
        )}
      </div>
    </li>
  );
};
