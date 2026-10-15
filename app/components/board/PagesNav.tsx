import { NavLink } from 'react-router';

import { cn } from '@/lib/utils';

type ProgramLinkProps = {
  url: string;
  text: string;
};

function ProgramLink({ url, text }: ProgramLinkProps) {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        cn(`
          font-semibold text-asteroid-top/60
          hover:text-asteroid-top/80
        `, isActive && `
          text-asteroid-top
          hover:text-asteroid-top
        `)}
      end
    >
      {text}
    </NavLink>
  );
}

export default function PagesNav() {
  return (
    <div className="flex justify-center bg-asteroid-header/50">
      <nav aria-label="Board documentation" className="flex w-full max-w-xl gap-10 py-6 text-base font-semibold text-name">
        <ProgramLink
          url="/board"
          text="Overview"
        />
        <ProgramLink
          url="/board/clock"
          text="Clock"
        />
        <ProgramLink
          url="/board/flights"
          text="Flights"
        />
        <ProgramLink
          url="/board/spotify"
          text="Spotify"
        />
        <ProgramLink
          url="/board/messages"
          text="Messages"
        />
      </nav>
    </div>
  );
}
