import { useEffect, useRef, useState } from 'react';

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

type SelectedSkill = {
  name: string;
  using: boolean;
  new: boolean;
};

type CompanyData = {
  total: string[];
  skills: string[];
  new: string[];
};

type CompanyInfo = {
  name: string;
  slug: string;
  location: string;
  title: string;
};

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
    <span className={cn(`block rounded-full border border-name px-2 py-1 text-sm font-semibold`, selected ? 'bg-better-white' : 'bg-transparent', selected?.using && `
      bg-subtitle/40
    `, selected?.new && `bg-emerald-200`)}
    >
      {text}
    </span>
  );
}

function Company({
  companyRef,
  info,
}: {
  companyRef: React.Ref<HTMLDivElement>;
  info: CompanyInfo;
}) {
  return (
    <div ref={companyRef} className="relative w-[400px] bg-better-white px-7 py-5" data-company={info.slug}>
      <div className="absolute top-1/2 -left-8 z-1 size-6 -translate-y-1/2 rounded-full border border-better-black bg-better-white">
        <span className="absolute top-1/2 left-1/2 z-2 size-3 -translate-1/2 rounded-full bg-better-black" />
      </div>
      <h3 className="text-3xl font-semibold">{info.name}</h3>
      <p className="mt-6 max-w-[300px] text-base">{info.location}</p>
      <p className="mt-2 max-w-[300px] text-base">{info.title}</p>
    </div>
  );
}

const skills = ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Photoshop', 'Ruby on Rails', 'jQuery', 'CoffeeScript', 'Sass', 'Jira', 'Jade', 'Node', 'React', 'GraphQL', 'Storybook', 'TypeScript', 'Ant Design', 'Jest', 'React Router', 'Tailwind', 'Drizzle ORM', 'PostgreSQL', 'Vite'];

const companySkills: Record<string, CompanyData> = {
  'traction': {
    total: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Photoshop'],
    skills: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Photoshop'],
    new: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Photoshop'],
  },
  'greenling': {
    total: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Photoshop', 'Ruby on Rails', 'jQuery', 'CoffeeScript', 'Sass'],
    skills: ['Ruby on Rails', 'jQuery', 'CoffeeScript', 'JavaScript', 'Sass'],
    new: ['Ruby on Rails', 'jQuery', 'CoffeeScript', 'Sass'],
  },
  'razorfish': {
    total: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Photoshop', 'Ruby on Rails', 'jQuery', 'CoffeeScript', 'Sass', 'Jira', 'Jade', 'Node', 'React'],
    skills: ['Jira', 'JavaScript', 'Jade', 'Sass', 'jQuery', 'Node', 'React'],
    new: ['Jira', 'Jade', 'Node', 'React'],
  },
  'phlur': {
    total: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Photoshop', 'Ruby on Rails', 'jQuery', 'CoffeeScript', 'Sass', 'Jira', 'Jade', 'Node', 'React', 'GraphQL', 'Storybook'],
    skills: ['React', 'JavaScript', 'GraphQL', 'Ruby on Rails', 'HTML', 'CSS', 'Storybook'],
    new: ['GraphQL', 'Storybook'],
  },
  'palo-alto-networks': {
    total: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Photoshop', 'Ruby on Rails', 'jQuery', 'CoffeeScript', 'Sass', 'Jira', 'Jade', 'Node', 'React', 'GraphQL', 'Storybook', 'TypeScript', 'Ant Design'],
    skills: ['Jira', 'React', 'JavaScript', 'TypeScript', 'Storybook', 'Ant Design'],
    new: ['TypeScript', 'Ant Design'],
  },
  'disney': {
    total: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Photoshop', 'Ruby on Rails', 'jQuery', 'CoffeeScript', 'Sass', 'Jira', 'Jade', 'Node', 'React', 'GraphQL', 'Storybook', 'TypeScript', 'Ant Design', 'Jest'],
    skills: ['React', 'JavaScript', 'TypeScript', 'Jira', 'Jest'],
    new: ['Jest'],
  },
  'globedraft': {
    total: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Photoshop', 'Ruby on Rails', 'jQuery', 'CoffeeScript', 'Sass', 'Jira', 'Jade', 'Node', 'React', 'GraphQL', 'Storybook', 'TypeScript', 'Ant Design', 'Jest', 'React Router', 'Tailwind', 'Drizzle ORM', 'PostgreSQL', 'Vite'],
    skills: ['React', 'React Router', 'TypeScript', 'Tailwind', 'Node', 'Drizzle ORM', 'PostgreSQL', 'Vite'],
    new: ['React Router', 'Tailwind', 'Drizzle ORM', 'PostgreSQL', 'Vite'],
  },
  'warner-bros-discovery': {
    total: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Photoshop', 'Ruby on Rails', 'jQuery', 'CoffeeScript', 'Sass', 'Jira', 'Jade', 'Node', 'React', 'GraphQL', 'Storybook', 'TypeScript', 'Ant Design', 'Jest', 'React Router', 'Tailwind', 'Drizzle ORM', 'PostgreSQL', 'Vite'],
    skills: ['React', 'JavaScript', 'TypeScript', 'Tailwind', 'Jira', 'Vite'],
    new: [],
  },
};

const companies: CompanyInfo[] = [
  {
    name: 'Traction',
    slug: 'traction',
    location: 'San Francisco, CA',
    title: 'Senior Front-End Developer',
  },
  {
    name: 'Greenling',
    slug: 'greenling',
    location: 'Austin, TX',
    title: 'Lead Front-End Developer',
  },
  {
    name: 'Razorfish',
    slug: 'razorfish',
    location: 'Austin, TX',
    title: 'Presentation Layer Engineer',
  },
  {
    name: 'PHLUR',
    slug: 'phlur',
    location: 'Austin, TX',
    title: 'Director, Front-end development',
  },
  {
    name: 'Palo Alto Networks',
    slug: 'palo-alto-networks',
    location: 'Remote',
    title: 'Senior Front-end Developer',
  },
  {
    name: 'Disney Streaming',
    slug: 'disney',
    location: 'Remote',
    title: 'Senior Front-end Developer',
  },
  {
    name: 'Warner Bros. Discovery',
    slug: 'warner-bros-discovery',
    location: 'Remote',
    title: 'Senior Front-end Developer',
  },
];

export default function SkillsSection() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const companyElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [selectedSkills, setSelectedSkills] = useState<SelectedSkill[]>([]);

  useEffect(() => {
    const sentinel = sentinelRef.current;

    if (!sentinel) {
      return;
    }

    let observerRef: IntersectionObserver | undefined;

    const observeCompanies = () => {
      const skillsBottom = sentinel.getBoundingClientRect().bottom;
      const rootMargin = `${-skillsBottom}px 0px ${skillsBottom + 1 - window.innerHeight}px`;

      observerRef?.disconnect();
      observerRef = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const companySlug = entry.target.getAttribute('data-company');

              const companySkillsData = companySkills[companySlug as keyof typeof companySkills];

              const currentSelectedSkills = companySkillsData.total.map(skill => ({
                name: skill,
                using: companySkillsData.skills.includes(skill),
                new: companySkillsData.new.includes(skill),
              }));

              setSelectedSkills(currentSelectedSkills);
            }
          }
        },
        { rootMargin, threshold: 0 },
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
      className="py-40"
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
            Skills Timeline
          </h2>
          <p className="
            mt-5 max-w-xl font-zilla text-lg text-name
            sm:max-w-[450px] sm:text-xl
          "
          >
            Being a programmer for almost two decades allows you to work with a variety of technologies. This is a broad overview of how I developed the motley crew of skills I have today.
          </p>
        </div>
        <div className="flex items-start gap-20">
          <div ref={sentinelRef} className="sticky top-20 flex w-full max-w-[300px] flex-wrap gap-2">
            {skills.map((skill) => {
              const selected = selectedSkills.find(selectedSkill => selectedSkill.name === skill);

              return <Skill key={skill} text={skill} selected={selected} />;
            })}
          </div>
          <div className="flex w-full flex-col items-start gap-100 border-l border-better-black pt-100 pb-30 pl-5">
            {companies.map((company, index) => (
              <Company
                key={company.slug}
                companyRef={(element) => { companyElementsRef.current[index] = element; }}
                info={company}
              />
            ))}
          </div>
        </div>
        <div className="
          mt-10
          sm:mt-10
        "
        >
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
