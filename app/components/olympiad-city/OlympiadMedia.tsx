import { Link } from '@remix-run/react';
import type { Visit } from 'types/globe';
import EnterIcon from '../icons/Enter';
import { format } from 'date-fns';

type OlympiadMediaProps = {
  visit: Visit;
  citySlug?: string | null;
  olympiadType: string;
  handleImageModal: (img: string) => void;
};

function Stamp({ visit, citySlug }: { visit: Visit; citySlug?: string | null }) {
  if (!visit.date) return null;

  // console.log(citySlug);

  if (!visit.leg) {
    return (
      <p className="col-span-2 mb-8 justify-self-start rounded-md border-2 border-[#2B4955] px-6 py-3 text-[#2B4955]">
        <span className="block">{visit.date}</span>
      </p>
    );
  }

  return (
    <Link
      to={`/trip/route/${visit.leg}?refer=${encodeURI(citySlug || '')}`}
      className="col-span-2 mb-8 w-40 rotate-6 justify-self-start rounded-[8px] border-2 border-[#2B4955] p-[1px] text-[#2B4955]"
    >
      <div className="rounded-md border-2 border-[#2B4955] p-1">
        <span className="block h-6 w-6 rounded-full border-[2px] border-[#2B4955] text-center text-xs leading-[21px] text-[#2B4955]">
          GR
        </span>
        <span className="my-2 block w-full text-center text-red-600">{visit.date.replaceAll('-', '.')}</span>
        {/* <span className="block">Part of Leg {visit.leg}</span> */}
        <EnterIcon className="h-6 fill-[#2B4955] stroke-[#2B4955]  stroke-[4px]" />
      </div>
    </Link>
  );
}

export function OlympiadMedia({ visit, citySlug, olympiadType, handleImageModal }: OlympiadMediaProps) {
  return (
    <div
      className={`grid-rows-[repeat(2,_fit-content(0, 1fr))] grid w-full grid-cols-[1fr_1fr] justify-items-center pb-[120px] pt-10 md:max-w-[500px]`}
    >
      {visit.stadium?.img && (
        <div>
          <p className="mb-3 text-center text-xs uppercase md:text-sm">Stadium</p>
          <div className="h-auto w-auto md:max-w-[250px]">
            <img
              className="rounded-[3px])] w-full cursor-pointer border-2 border-solid border-[var(--globe-background)]"
              src={`https://res.cloudinary.com/globe-draft/image/upload/h_500,c_scale/w_auto,c_scale/q_auto/olympic-visits/${visit.stadium.img}`}
              alt=""
              loading="lazy"
              onClick={() => handleImageModal(visit.stadium.img)}
            />
          </div>
        </div>
      )}
      {visit.strava?.link && (
        <div>
          <p className="mb-3 text-center text-xs uppercase md:text-sm">{olympiadType === 'SUMMER' ? 'Run' : 'Ski'}</p>
          <a
            className="strava-link block w-[100px] rounded-[8px] bg-[#fc4c02] px-[20px] py-[10px] text-center font-semibold uppercase text-white no-underline"
            href={visit.strava.link}
            target="_blank"
            rel="noreferrer"
          >
            Strava
          </a>
        </div>
      )}
    </div>
  );
}
