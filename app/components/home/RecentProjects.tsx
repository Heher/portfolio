import logo from '~/assets/images/logo8.png?url';
import rings from '~/assets/images/rings.png?url';

export default function RecentProjects() {
  return (
    <div className="
      mt-20
      md:mt-32
    "
    >
      <h2 className="mb-5 text-xl font-semibold uppercase">Recent projects</h2>
      <a href="https://www.globedraft.com" className="group">
        <div className="
          flex items-center gap-3 rounded-t-xl border-2 border-b-0 border-[#3d5061] bg-gd-background px-2 py-5
          group-hover:bg-gd-background/90
          md:px-4
        "
        >
          <img
            src={logo}
            className="
              h-7 self-center
              md:mt-[-4px] md:h-8
            "
          />
          <h3
            className="
              relative mt-[4px] font-logo text-[20px] leading-none font-semibold tracking-tight text-(--nav-link) no-underline
              md:mt-0
            "
          >
            GlobeDraft
          </h3>
        </div>
        <div className="
          rounded-b-xl border-2 border-t-0 border-[#3d5061] bg-gd-page-background px-3 py-5
          group-hover:bg-gd-page-background/60
          md:px-5
        "
        >
          <div className="flex items-center justify-center gap-2">
            <p className="
              text-[14px] text-[#282B27]
              md:text-base
            "
            >
              Fantasy Olympics
            </p>
            <img
              src={rings}
              className="
                h-5 self-center
                md:h-5
              "
            />
          </div>
          <p className="mt-7 max-w-md text-base text-[#282B27]">
            Draft a team of countries to compete against your friends for the most medals.
          </p>
        </div>
      </a>
    </div>
  );
}
