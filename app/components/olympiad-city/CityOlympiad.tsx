export const CityOlympiad = ({ olympiad, visit }) => {
  return (
    <li className="city-olympiad">
      <div className="title">
        <span className={`city-status ${visit && 'visited'}`} />
        <p key={olympiad.id}>{olympiad.year}</p>
      </div>
      <div className="media">
        {visit?.strava?.link && (
          <a className="strava-link" href={visit.strava.link} target="_blank" rel="noreferrer">
            Strava
          </a>
        )}
        {visit?.stadium?.img && (
          <img
            src={`https://res.cloudinary.com/globe-draft/image/upload/q_60/olympic-visits/${visit.stadium.img}`}
            alt=""
          />
        )}
      </div>
    </li>
  );
};
