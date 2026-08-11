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
        <img
          src="/images/globedraft.jpg"
          srcSet="/images/globedraft-mobile.jpg 650w, /images/globedraft.jpg 1600w"
          sizes="(max-width: 640px) 100vw, 1600px"
          className="rounded-lg"
        />
      </a>
    </section>
  );
}
