import DashboardUI from './uis/Dashboard';
import EmailTemplateUI from './uis/EmailTemplate';
import OnboardingUI from './uis/Onboarding';
import ProductPageUI from './uis/ProductPage';
import TablesUI from './uis/Tables';
import TVGuideUI from './uis/TVGuide';

export default function UISection() {
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
          mb-3 text-2xl font-semibold text-name
          sm:mb-5 sm:text-3xl
        "
        >
          User Interfaces
        </h2>
        <p className="
          max-w-xl font-zilla text-lg text-name
          sm:text-xl
        "
        >
          I've built a wide variety of UIs, from simple landing pages to complex
          dashboards. Here are some demos I created from work I've done over the years.
        </p>
      </div>
      {/* {width < 640 && (
          <>
            <div className="absolute top-0 left-0 z-2 h-46 w-9 bg-linear-to-r from-index-background" />
            <div className="absolute top-0 right-0 z-2 h-46 w-9 bg-linear-to-l from-index-background" />
          </>
        )} */}
      <div
        className="
          mt-10 grid grid-cols-2 gap-3 px-5
          sm:w-fit sm:grid-cols-3 sm:gap-7 sm:px-0
        "
      >
        <TablesUI />
        <OnboardingUI />
        <ProductPageUI />
        <EmailTemplateUI />
        <TVGuideUI />
        <DashboardUI />
      </div>
    </section>
  );
}
