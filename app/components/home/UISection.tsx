import DashboardUI from './uis/Dashboard';
import EmailTemplateUI from './uis/EmailTemplate';
import OnboardingUI from './uis/Onboarding';
import ProductPageUI from './uis/ProductPage';
import TablesUI from './uis/Tables';
import TVGuideUI from './uis/TVGuide';

type UISectionProps = {
  width: number;
};

export default function UISection({ width }: UISectionProps) {
  return (
    <section
      className="
        mt-10
        md:mt-20
      "
    >
      <div className="
        mx-5
        sm:mx-0
      "
      >
        <h2 className="
          mb-3 text-xl font-semibold text-name
          sm:mb-5 sm:text-3xl
        "
        >
          User Interfaces
        </h2>
        <p className="
          max-w-xl text-base text-name
          sm:text-lg
        "
        >
          I've built a wide variety of UIs, from simple landing pages to complex
          dashboards. Take a look at these links to some samples of my work.
        </p>
      </div>
      <div className="
        relative mt-7 h-46 overflow-hidden
        sm:h-auto
      "
      >
        {width < 640 && (
          <>
            <div className="absolute top-0 left-0 z-2 h-[184px] w-5 bg-linear-to-r from-index-background" />
            <div className="absolute top-0 right-0 z-2 h-[184px] w-5 bg-linear-to-l from-index-background" />
          </>
        )}
        <div
          className="
            flex gap-3 overflow-scroll overscroll-x-none px-5 pb-10
            sm:mt-10 sm:grid sm:w-fit sm:grid-cols-3 sm:gap-7 sm:px-0 sm:pb-0
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
