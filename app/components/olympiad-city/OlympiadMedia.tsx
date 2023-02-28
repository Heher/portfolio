export function OlympiadMedia({ visit, olympiadType, handleImageModal }) {
  return (
    <div className="grid w-full grid-cols-[1fr_1fr] justify-items-center gap-[20px] pb-[80px] md:max-w-[500px]">
      {visit.stadium?.img && (
        <div>
          <p className="mb-[10px] text-center text-[0.8rem] uppercase">Stadium</p>
          <div className="h-auto w-auto md:max-w-[250px]">
            <img
              className="rounded-[3px])] w-full cursor-pointer border-2 border-solid border-[var(--globe-background)]"
              src={`https://res.cloudinary.com/globe-draft/image/upload/h_500,c_scale/q_40/olympic-visits/${visit.stadium.img}`}
              alt=""
              loading="lazy"
              onClick={() => handleImageModal(visit.stadium.img)}
            />
          </div>
        </div>
      )}
      {visit.strava?.link && (
        <div>
          <p className="mb-[10px] text-center text-[0.8rem] uppercase">{olympiadType === 'SUMMER' ? 'Run' : 'Ski'}</p>
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
}
