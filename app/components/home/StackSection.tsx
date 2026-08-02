import DrizzleIcon from '~/icons/stack/Drizzle';
import PostgreSQLIcon from '~/icons/stack/PostgreSQL';
import ReactIcon from '~/icons/stack/React';
import ReactRouterIcon from '~/icons/stack/ReactRouter';
import SentryIcon from '~/icons/stack/Sentry';
// import SSTIcon from '~/icons/stack/SST';
import TailwindIcon from '~/icons/stack/Tailwind';
import TypeScriptIcon from '~/icons/stack/TypeScript';
import ViteIcon from '~/icons/stack/Vite';

function StackTech({ name, link, icon }: { name: string; link?: string; icon?: React.ReactNode }) {
  return (
    <a
      href={link}
      className="
        grid w-50 grid-cols-[35px_1fr] items-center gap-2 rounded-md bg-better-white/70 py-4 pl-5 text-sm text-index-link transition-colors
        hover:bg-better-white
        sm:rounded-lg sm:text-base
      "
    >
      {icon}
      {name}
    </a>
  );
}

export default function StackSection() {
  return (
    <section
      className="
        mx-5 mt-18
        sm:mx-0
        md:mt-20
      "
    >
      <h2 className="
        mb-3 text-xl font-semibold text-name
        sm:mb-5 sm:text-3xl
      "
      >
        Stack
      </h2>
      <p className="
        max-w-xl text-base text-name
        sm:text-lg
      "
      >
        Being a programmer for almost two decades allows you to work with a variety of technologies, but lately my go-to
        stack (and the one that built this site) has been these.
      </p>
      <div className="
        mt-10
        sm:mt-10
      "
      >
        <div className="
          flex flex-col gap-10 text-base text-[#282B27]
          sm:flex-row sm:gap-8
        "
        >
          <div>
            <h3 className="
              mb-3 text-xs text-[oklch(0.45_0.0324_251.81)] uppercase
              sm:text-sm
            "
            >
              Front-end
            </h3>
            <div className="grid grid-cols-1 gap-3">
              <StackTech
                name="React Router"
                link="https://reactrouter.com/"
                icon={<ReactRouterIcon className="h-5 justify-self-center fill-current" />}
              />
              <StackTech
                name="React"
                link="https://react.dev/"
                icon={<ReactIcon className="h-5 justify-self-center fill-current" />}
              />
              <StackTech
                name="Tailwind"
                link="https://tailwindcss.com/"
                icon={<TailwindIcon className="h-3.75 justify-self-center fill-current" />}
              />
              <StackTech
                name="TypeScript"
                link="https://www.typescriptlang.org/"
                icon={<TypeScriptIcon className="h-5 justify-self-center fill-current" />}
              />
            </div>
          </div>
          <div>
            <h3 className="
              mb-3 text-xs text-[oklch(0.45_0.0324_251.81)] uppercase
              sm:text-sm
            "
            >
              Back-end / DevOps
            </h3>
            <div className="grid grid-cols-1 gap-3">
              <StackTech
                name="Vite"
                link="https://vitejs.dev/"
                icon={<ViteIcon className="h-5 justify-self-center fill-current" />}
              />
              <StackTech
                name="Sentry"
                link="https://www.sentry.io/"
                icon={<SentryIcon className="h-5 justify-self-center fill-current" />}
              />
              <StackTech
                name="Drizzle"
                link="https://orm.drizzle.team/"
                icon={<DrizzleIcon className="h-5 justify-self-center fill-current" />}
              />
              <StackTech
                name="PostgreSQL"
                link="https://www.postgresql.org/"
                icon={<PostgreSQLIcon className="h-5 justify-self-center fill-current" />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
