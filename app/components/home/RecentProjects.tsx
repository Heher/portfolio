import { Link } from 'react-router';

import LedMatrixPreview from './LedMatrixPreview';

export default function RecentProjects() {
  return (
    <section
      className="
        bg-better-white px-5 py-20
        sm:px-0 sm:py-40
      "
    >
      <div className="mx-auto max-w-250">
        <div className="
          mb-10 flex flex-col gap-3
          sm:mb-30 sm:flex-row sm:gap-20
        "
        >
          <h2 className="
            mb-0 max-w-[300px] text-[40px] leading-none font-semibold text-name
            sm:mb-0 sm:text-[70px]
          "
          >
            Recent projects
          </h2>
          <p className="
            mt-4 max-w-xl font-zilla text-xl text-name
            sm:max-w-[400px] sm:text-xl
          "
          >
            When I'm not building beautiful and flawless UIs, I somehow find time to build some other stuff on the side.
          </p>
        </div>
        <div className="
          grid max-w-[1020px] grid-cols-1 items-center gap-5
          sm:grid-cols-2
        "
        >
          <a href="https://www.globedraft.com" className="block w-full">
            <div className="relative h-[300px] w-full max-w-[500px] rounded-lg bg-linear-to-b from-gd-background to-gd-page-background">
              <div className="absolute top-5 left-3 flex items-center gap-2">
                <img
                  src="/images/globedraft-logo.png"
                  className="
                    h-[34px]
                    sm:h-[42px]
                  "
                />
                <img
                  src="/images/globedraft-text.png"
                  className="
                    h-[18px]
                    sm:h-[20px]
                  "
                />
              </div>
              <img
                src="/images/globedraft-globe.png"
                className="
                  absolute right-0 bottom-0 h-[240px] rounded-br-lg
                  sm:h-[280px]
                "
              />
              <div className="absolute bottom-0 left-0 h-[110px] w-full bg-gd-page-background/90 px-4 py-2">
                <h3 className="text-2xl font-bold text-gd-text">Fantasy Olympics</h3>
                <p className="
                  mt-2 font-zilla text-base font-medium text-gd-text/80
                  sm:max-w-[80%]
                "
                >
                  Draft a team of countries and compete against your friends for the most medals.
                </p>
              </div>
            </div>
          </a>
          <Link to="/board">
            <div className="relative h-[300px] w-full max-w-[500px] rounded-lg bg-linear-to-b from-asteroid-top to-asteroid-bottom">
              <LedMatrixPreview className="mx-5 pt-13" />
              <div className="absolute bottom-0 left-0 h-[110px] w-full bg-better-white/30 px-4 py-2">
                <h3 className="text-2xl font-bold text-asteroid-top">The Board</h3>
                <p className="
                  mt-2 font-zilla text-base font-medium text-asteroid-top/80
                  sm:max-w-[80%]
                "
                >
                  A wall-mounted display for information that you could also just get on your phone.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
