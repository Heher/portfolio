import type { Visit } from 'types/globe';

type OlympiadMediaProps = {
  visit: Visit;
  olympiadType: string;
  handleImageModal: (img: string) => void;
};

export function OlympiadMedia({ visit, olympiadType, handleImageModal }: OlympiadMediaProps) {
  return (
    <div className={`mt-7 grid w-full grid-cols-[1fr_1fr] justify-items-center pb-[120px] md:max-w-[500px]`}>
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
