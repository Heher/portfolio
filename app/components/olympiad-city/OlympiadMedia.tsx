export const OlympiadMedia = ({ visit, olympiadType }) => {
  return (
    <div className="grid grid-cols-[1fr_100px] gap-[20px] justify-items-center mb-[20px]">
      {visit.stadium?.img && (
        <div>
          <p className="uppercase text-center text-[0.7rem] text-bold mb-[10px]">Stadium</p>
          <img
            className="w-auto h-[120px] border-2 border-solid border-[var(--globe-background)] rounded-[3px])]"
            src={`https://res.cloudinary.com/globe-draft/image/upload/h_500,c_scale/q_40/olympic-visits/${visit.stadium.img}`}
            alt=""
            loading="lazy"
          />
        </div>
      )}
      {visit.strava?.link && (
        <div>
          <p className="uppercase text-center text-[0.7rem] text-bold mb-[10px]">
            {olympiadType === 'SUMMER' ? 'Run' : 'Ski'}
          </p>
          <a
            className="strava-link block bg-[#fc4c02] w-[100px] text-white font-semibold uppercase py-[10px] px-[20px] rounded-[8px] no-underline"
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
};
