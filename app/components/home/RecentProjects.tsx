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
        </div>
        <a href="https://www.globedraft.com">
          <picture>
            <source media="(max-width: 640px)" srcSet="/images/globedraft-mobile.jpg" />
            <img src="/images/globedraft.jpg" className="rounded-lg" />
          </picture>
        </a>
      </div>
    </section>
  );
}
