export default function RecentProjects() {
  return (
    <section
      className="
        mx-5 mt-18
        sm:mx-0
        md:mt-40
      "
    >
      <h2 className="
        mb-5 text-2xl font-semibold text-name
        sm:mb-7 sm:text-3xl
      "
      >
        Recent projects
      </h2>
      <a href="https://www.globedraft.com">
        <picture>
          <source media="(max-width: 640px)" srcSet="/images/globedraft-mobile.jpg" />
          <img src="/images/globedraft.jpg" className="rounded-lg" />
        </picture>
      </a>
    </section>
  );
}
