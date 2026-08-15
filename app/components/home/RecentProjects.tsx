export default function RecentProjects() {
  return (
    <section
      className="
        mx-5 bg-header-top py-40
        sm:mx-0
      "
    >
      <div className="mx-auto max-w-250">
        <div className="
          mx-5 mb-30 flex gap-20
          sm:mx-0
        "
        >
          <h2 className="
            mb-3 max-w-[300px] text-2xl leading-none font-semibold text-name
            sm:mb-0 sm:text-[80px]
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
