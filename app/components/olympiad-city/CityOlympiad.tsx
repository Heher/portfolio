import type { Visit } from 'types/globe';

import { OlympiadMedia } from './OlympiadMedia';

type CityOlympiadProps = {
  olympiad: any;
  visit: Visit | undefined;
  selected?: boolean;
  expanded?: boolean;
};

export function CityOlympiad({ olympiad, visit, selected = false, expanded = false }: CityOlympiadProps) {
  if (!olympiad?.olympiadType) {
    return null;
  }

  return (
    <li className={`
      ${!selected && 'mr-[25px]'}
    `}
    >
      <div className="grid grid-cols-[12px_1fr] items-center gap-[10px]">
        <span
          className={`
            size-[12px] rounded-full bg-negative
            ${
    visit && 'bg-positive'
    }
          `}
        />
        <p key={olympiad.id} className="m-0 text-[1.2rem]">
          {olympiad.year}
          {' '}
          {selected && `${olympiad.olympiadType.charAt(0) + olympiad.olympiadType.slice(1).toLowerCase()} Games`}
        </p>
      </div>
      <div className="
        mt-[20px] hidden items-end
        group-[.selected]:flex
      "
      >
        {expanded && visit && <OlympiadMedia visit={visit} olympiadType={olympiad.olympiadType} />}
      </div>
    </li>
  );
}
