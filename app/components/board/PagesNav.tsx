import { Link } from 'react-router';

export default function PagesNav() {
  return (
    <div className="flex justify-center bg-asteroid-header/50">
      <nav aria-label="Board documentation" className="flex w-full max-w-xl gap-10 py-6 text-base font-semibold text-name">
        <Link
          to="/board"
          className="
            underline underline-offset-4
            hover:opacity-80
          "
        >
          Overview
        </Link>
        <Link
          to="/board/clock"
          className="
            underline underline-offset-4
            hover:opacity-80
          "
        >
          Clock
        </Link>
        <Link
          to="/board/flights"
          className="
            underline underline-offset-4
            hover:opacity-80
          "
        >
          Flights
        </Link>
        <Link
          to="/board/spotify"
          className="
            underline underline-offset-4
            hover:opacity-80
          "
        >
          Spotify
        </Link>
        <Link
          to="/board/messages"
          className="
            underline underline-offset-4
            hover:opacity-80
          "
        >
          Messages
        </Link>
      </nav>
    </div>
  );
}
