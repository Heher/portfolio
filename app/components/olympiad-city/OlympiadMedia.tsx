export const OlympiadMedia = ({ visit, olympiadType, setSelectedImg }) => {
  return (
    <div className="mb-[20px] grid grid-cols-[1fr_100px] justify-items-center gap-[20px]">
      {visit.stadium?.img && (
        <div>
          <p className="text-bold mb-[10px] text-center text-[0.7rem] uppercase">Stadium</p>
          <img
            className="rounded-[3px])] h-[120px] w-auto border-2 border-solid border-[var(--globe-background)]"
            src={`https://res.cloudinary.com/globe-draft/image/upload/h_500,c_scale/q_40/olympic-visits/${visit.stadium.img}`}
            alt=""
            loading="lazy"
            onClick={() => setSelectedImg(visit.stadium.img)}
          />
        </div>
      )}
      {visit.strava?.link && (
        <div>
          <p className="text-bold mb-[10px] text-center text-[0.7rem] uppercase">
            {olympiadType === 'SUMMER' ? 'Run' : 'Ski'}
          </p>
          <a
            className="strava-link block w-[100px] rounded-[8px] bg-[#fc4c02] py-[10px] px-[20px] font-semibold uppercase text-white no-underline"
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