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
    <li className="">
      <a
        href={link}
        className="
          grid w-50 grid-cols-[30px_1fr] items-center gap-3 rounded-sm bg-white/40 py-4 pr-5 pl-3 text-index-link transition-colors
          hover:bg-white/80
        "
      >
        {icon}
        {name}
      </a>
    </li>
  );
}

export default function StackSection() {
  return (
    <div className="
      mt-20
      md:mt-32
    "
    >
      <h2 className="mb-5 text-xl font-semibold uppercase">Stack</h2>
      <p className="mt-3 max-w-md text-base text-[#282B27]">
        Being a programmer for over a decade allows you to work with a variety of technologies, but lately my go-to
        stack (and the one that built this site) has been these.
      </p>
      <div className="mt-10 flex gap-5">
        <div className="flex w-full justify-around">
          <ul className="mt-5 flex flex-col gap-1 text-base text-[#282B27]">
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
          </ul>
          <ul className="mt-5 flex flex-col gap-1 text-base text-[#282B27]">
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
          </ul>
        </div>
      </div>
    </div>
  );
}
