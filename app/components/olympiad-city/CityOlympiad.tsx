export const CityOlympiad = ({ olympiad, visit }) => {
  return (
    <li className="city-olympiad mr-[20px]">
      <div className="title grid grid-cols-[10px_1fr] gap-[7px] items-center">
        <span
          className={`city-status w-[10px] h-[10px] rounded-full bg-[var(--negative)] ${
            visit && 'bg-[var(--positive)]'
          }`}
        />
        <p key={olympiad.id} className="m-0">
          {olympiad.year}
        </p>
      </div>
      <div className="media hidden items-end mt-[30px] group-[.selected]:flex">
        {visit?.strava?.link && (
          <a
            className="strava-link mr-[20px] bg-[#fc4c02] text-white font-semibold uppercase py-[10px] px-[20px] rounded-[8px] no-underline"
            href={visit.strava.link}
            target="_blank"
            rel="noreferrer"
          >
            Strava
          </a>
        )}
        {visit?.stadium?.img && (
          <img
            className="w-auto h-[100px]"
            src={`https://res.cloudinary.com/globe-draft/image/upload/h_100,c_scale/q_60/f_auto/olympic-visits/${visit.stadium.img}`}
            alt=""
          />
        )}
      </div>
    </li>
  );
};
