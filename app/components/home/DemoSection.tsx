import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

import DashboardUI from './demos/Dashboard';
import EmailTemplateUI from './demos/EmailTemplate';
import OnboardingUI from './demos/Onboarding';
import ProductPageUI from './demos/ProductPage';
import TablesUI from './demos/Tables';
import TVGuideUI from './demos/TVGuide';

export default function DemoSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const referral = params.get('refer');

  useEffect(() => {
    if (referral && scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;
      const demoElement = scrollContainer.querySelector(`[data-demo="${referral}"]`);

      if (demoElement) {
        const demoRect = demoElement.getBoundingClientRect();
        const containerRect = scrollContainer.getBoundingClientRect();
        const scrollLeft = demoRect.left - containerRect.left + scrollContainer.scrollLeft;

        scrollContainer.scrollTo({
          left: scrollLeft,
        });
      }
    }
  }, [referral]);

  return (
    <section
      className="
        bg-better-white py-20
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
            Demos
          </h2>
          <p className="
            mt-4 max-w-xl font-zilla text-lg text-name
            sm:max-w-[400px] sm:text-xl
          "
          >
            I've built a wide variety of UIs, from simple landing pages to complex
            dashboards. Here are some examples I created from work I've done over the years.
          </p>
        </div>
      </div>
      <div
        className="relative mx-auto flex max-w-[1100px]"
      >
        <div className="absolute top-0 left-0 z-4 h-full w-[20px] bg-linear-to-r from-better-white" />
        <div className="absolute top-0 right-0 z-4 h-full w-[40px] bg-linear-to-l from-better-white from-50%" />
        <div
          ref={scrollContainerRef}
          className="
            flex gap-5 overflow-scroll px-[20px] pr-[40px]
            sm:px-[50px] sm:pr-[100px]
          "
        >
          <TablesUI />
          <OnboardingUI />
          <ProductPageUI />
          <EmailTemplateUI />
          <TVGuideUI />
          <DashboardUI />
        </div>
      </div>
    </section>
  );
}
