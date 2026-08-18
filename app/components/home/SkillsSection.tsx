import { useEffect, useMemo, useRef, useState } from 'react';

import type { CompanyInfo, SelectedSkill } from '@/types/skills';

import { cn } from '@/lib/utils';
import DrizzleIcon from '~/icons/stack/Drizzle';
import PostgreSQLIcon from '~/icons/stack/PostgreSQL';
import ReactIcon from '~/icons/stack/React';
import ReactRouterIcon from '~/icons/stack/ReactRouter';
import SentryIcon from '~/icons/stack/Sentry';
// import SSTIcon from '~/icons/stack/SST';
import TailwindIcon from '~/icons/stack/Tailwind';
import TypeScriptIcon from '~/icons/stack/TypeScript';
import ViteIcon from '~/icons/stack/Vite';

import { companies, companySkills, skills } from '../skills/data';

function StackTech({ name, link, icon }: { name: string; link?: string; icon?: React.ReactNode }) {
  return (
    <a
      href={link}
      className="
        grid w-38 grid-cols-[30px_1fr] items-center gap-1 rounded-md bg-better-white/70 py-3 pl-3 text-sm text-index-link transition-colors
        hover:bg-better-white
        sm:w-50 sm:grid-cols-[35px_1fr] sm:gap-2 sm:rounded-lg sm:py-4 sm:pl-5 sm:text-base
      "
    >
      {icon}
      {name}
    </a>
  );
}

function Skill({ text, selected }: { text: string; selected: SelectedSkill | undefined }) {
  return (
    <span className={cn(`block rounded-full border px-2 py-1 text-sm font-semibold`, selected
      ? 'border-name bg-white text-name'
      : `border-name/40 bg-transparent text-name/40`, selected?.using && `bg-[oklch(0.8_0.08_45.81)]/50`, selected?.new && `bg-[oklch(0.86_0.1002_121.51)]`)}
    >
      {text}
    </span>
  );
}

function Company({
  companyRef,
  info,
  selected,
}: {
  companyRef: React.Ref<HTMLDivElement>;
  info: CompanyInfo;
  selected: boolean;
}) {
  return (
    <div
      ref={companyRef}
      className="
        pb-100
        last-of-type:pb-50
      "
      data-company={info.slug}
    >
      <div className="
        relative w-[260px] rounded-sm bg-better-white px-7 py-5
        sm:w-[400px]
      "
      >
        <div className={cn(`absolute top-1/2 -left-8 z-1 size-6 -translate-y-1/2 rounded-full border border-better-black bg-better-white`, selected && `
          bg-[oklch(0.86_0.1002_121.51)]
        `)}
        >
          <span className="absolute top-1/2 left-1/2 z-2 size-3 -translate-1/2 rounded-full bg-better-black" />
        </div>
        <h3 className="
          text-xl font-semibold
          sm:text-2xl
        "
        >
          {info.name}
        </h3>
        <p className="mt-1 max-w-[300px] text-base">{info.location}</p>
        <p className="mt-6 max-w-[300px] text-base">{info.title}</p>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const companyElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

  const selectedCompanySkills = useMemo(() => {
    if (!selectedCompany) {
      return null;
    }

    return companySkills[selectedCompany];
  }, [selectedCompany]);

  useEffect(() => {
    const sentinel = sentinelRef.current;

    if (!sentinel) {
      return;
    }

    let observerRef: IntersectionObserver | undefined;

    const observeCompanies = () => {
      const skillsSection = sentinel.getBoundingClientRect();
      const mobileRootMargin = `${-skillsSection.bottom}px 0px -100px`;
      const rootMargin = `${-skillsSection.top}px 0px ${skillsSection.bottom - window.innerHeight}px`;

      observerRef?.disconnect();
      observerRef = new IntersectionObserver(
        (entries) => {
          if (entries.some(entry => entry.isIntersecting)) {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                const companySlug = entry.target.getAttribute('data-company');

                setSelectedCompany(companySlug);
              }
            }
          }
          else {
            // setSelectedSkills([]);
            setSelectedCompany(null);
          }
        },
        { rootMargin: window.innerWidth < 640 ? mobileRootMargin : rootMargin, threshold: 0 },
      );

      for (const company of companyElementsRef.current) {
        if (company) {
          observerRef.observe(company);
        }
      }
    };

    observeCompanies();
    window.addEventListener('scroll', observeCompanies, { passive: true });
    window.addEventListener('resize', observeCompanies);

    return () => {
      observerRef?.disconnect();
      window.removeEventListener('scroll', observeCompanies);
      window.removeEventListener('resize', observeCompanies);
    };
  }, []);

  return (
    <section
      className="
        bg-index-background py-20
        sm:py-40
      "
    >
      <div className="mx-auto max-w-250">
        <div className="
          mx-5 mb-10 flex flex-col gap-3
          sm:mx-0 sm:mb-30 sm:flex-row sm:gap-20
        "
        >
          <h2 className="
            mb-0 text-[30px] leading-none font-semibold text-name
            sm:mb-0 sm:text-[70px]
          "
          >
            Skills Timeline
          </h2>
          <p className="
            mt-4 max-w-xl font-zilla text-lg text-name
            sm:max-w-[400px] sm:text-xl
          "
          >
            Being a programmer for almost two decades allows you to work with a variety of technologies. This is a broad overview of how I developed the motley crew of skills I have today.
          </p>
        </div>
        <div className="
          flex flex-col items-start gap-0
          sm:flex-row sm:gap-20
        "
        >
          <div
            ref={sentinelRef}
            className="
              sticky top-0 z-2 flex w-full flex-wrap gap-2 bg-index-background p-5
              sm:top-20 sm:z-1 sm:max-w-[300px] sm:p-0
            "
          >
            {skills.map((skill) => {
              let selected;

              if (selectedCompanySkills) {
                selected = selectedCompanySkills[skill];
              }

              return <Skill key={skill} text={skill} selected={selected} />;
            })}
          </div>
          <div className="
            ml-10 flex flex-col items-start border-l border-better-black pt-100 pl-5
            sm:ml-0 sm:w-full sm:pb-30
          "
          >
            {companies.map((company, index) => (
              <Company
                key={company.slug}
                companyRef={(element) => { companyElementsRef.current[index] = element; }}
                info={company}
                selected={selectedCompany === company.slug}
              />
            ))}
          </div>
        </div>
        <div className="
          mt-10 flex flex-col items-center gap-12 px-5
          sm:mt-30 sm:px-0
        "
        >
          <p className="font-zilla text-2xl font-medium">My current stack (and the one that I used to build this site):</p>
          <div className="
            flex gap-5 text-base text-[#282B27]
            sm:gap-8
          "
          >
            <div>
              <h3 className="
                mb-3 text-sm text-[oklch(0.45_0.0324_251.81)] uppercase
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
                mb-3 text-sm text-[oklch(0.45_0.0324_251.81)] uppercase
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
      </div>
    </section>
  );
}
