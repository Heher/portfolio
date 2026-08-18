import { useRef } from 'react';

import DemoSection from '@/app/components/home/DemoSection';
import SkillsSection from '@/app/components/home/SkillsSection';
import RecentProjects from '~/components/home/RecentProjects';

import IndexHeader from '../components/home/IndexHeader';
import Socials from '../components/home/Socials';

export default function Index() {
  const containerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const body = document.body;
  //   body.classList.remove('bg-index-background');
  //   body.classList.add('bg-linear-to-b', 'from-header-top', 'to-index-background', 'from-49%', 'to-51%');
  // }, []);

  return (
    <main
      className="w-screen bg-header-top font-figtree text-lg"
    >
      <div
        className="m-0 mx-auto"
        ref={containerRef}
      >
        <title>John Heher | Web Developer</title>
        <meta name="description" content="John Heher is a full-stack web developer from the United States, mostly focused on front-end development." />
        <div className="">
          <IndexHeader />
          <div className="">
            <div className="sm:hidden">
              <Socials />
            </div>
            <DemoSection />
            <SkillsSection />
            <RecentProjects />
          </div>
        </div>
      </div>
    </main>
  );
}
