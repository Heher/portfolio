const OlympiadMedia = ({ visit, olympiadType }) => {
  return (
    <div className="grid grid-cols-[1fr_100px] gap-[20px] justify-items-center mb-[20px]">
      {visit.stadium?.img && (
        <div>
          <p className="uppercase text-center text-[0.7rem] text-bold mb-[10px]">Stadium</p>
          <img
            className="w-auto h-[120px] border-2 border-solid border-[var(--globe-background)] rounded-[3px])]"
            src={`https://res.cloudinary.com/globe-draft/image/upload/h_500,c_scale/q_40/olympic-visits/${visit.stadium.img}`}
            alt=""
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
