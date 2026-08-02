import EmailTemplateUI from './uis/EmailTemplate';
import OnboardingUI from './uis/Onboarding';
import ProductPageUI from './uis/ProductPage';
import TablesUI from './uis/Tables';
import TemplatingUI from './uis/Templating';
import TVGuideUI from './uis/TVGuide';

export default function UISection() {
  return (
    <section
      className="
        mt-10
        md:mt-20
      "
    >
      <h2 className="mb-5 text-3xl font-semibold text-name">User Interfaces</h2>
      <p className="mt-3 max-w-xl text-lg text-name">
        I've built a wide variety of UIs, from simple landing pages to complex
        dashboards. Take a look at some samples of my work.
      </p>
      <div
        className="
          mt-10 flex gap-5 overflow-scroll
          sm:grid sm:w-fit sm:grid-cols-3 sm:gap-7
        "
      >
        <TablesUI />
        <OnboardingUI />
        <ProductPageUI />
        <EmailTemplateUI />
        <TVGuideUI />
        <TemplatingUI />
      </div>
    </section>
  );
}
