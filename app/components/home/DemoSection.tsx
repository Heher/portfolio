import DashboardUI from './demos/Dashboard';
import EmailTemplateUI from './demos/EmailTemplate';
import OnboardingUI from './demos/Onboarding';
import ProductPageUI from './demos/ProductPage';
import TablesUI from './demos/Tables';
import TVGuideUI from './demos/TVGuide';

export default function DemoSection() {
  return (
    <section
      className="bg-better-white py-40"
    >
      <div className="mx-auto max-w-250">
        <div className="
          mx-5 mb-30 flex gap-20
          sm:mx-0
        "
        >
          <h2 className="
            mb-3 text-2xl leading-none font-semibold text-name
            sm:mb-0 sm:text-[80px]
          "
          >
            Demos
          </h2>
          <p className="
            mt-5 max-w-xl font-zilla text-lg text-name
            sm:max-w-[400px] sm:text-xl
          "
          >
            I've built a wide variety of UIs, from simple landing pages to complex
            dashboards. Here are some examples I created from work I've done over the years.
          </p>
        </div>
        {/* {width < 640 && (
          <>
            <div className="absolute top-0 left-0 z-2 h-46 w-9 bg-linear-to-r from-index-background" />
            <div className="absolute top-0 right-0 z-2 h-46 w-9 bg-linear-to-l from-index-background" />
          </>
        )} */}
      </div>
      <div
        className="relative mx-auto flex max-w-[1100px]"
      >
        <div className="absolute top-0 left-0 z-4 h-full w-[50px] bg-linear-to-r from-better-white" />
        <div className="absolute top-0 right-0 z-4 h-full w-[100px] bg-linear-to-l from-better-white from-50%" />
        <div
          className="flex gap-5 overflow-scroll px-[50px] pr-[100px]"
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
