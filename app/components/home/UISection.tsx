import ECommerceUI from './uis/ECommerce';
import EmailTemplate from './uis/EmailTemplate';
import MarketingUI from './uis/Marketing';
import TablesUI from './uis/Tables';
import TemplatingUI from './uis/Templating';
import TVGuideUI from './uis/TVGuide';

export default function UISection() {
  return (
    <section className="
      mt-20
      md:mt-32
    "
    >
      <h2 className="mb-5 text-2xl font-semibold">UIs</h2>
      <p className="mt-3 max-w-md text-base text-[#282B27]">
        I've built a wide variety of UIs, from simple landing pages to complex dashboards. Here are a few examples of my work.
      </p>
      <div className="mt-10 flex gap-5 overflow-scroll">
        <TablesUI />
        <ECommerceUI />
        <EmailTemplate />
        <MarketingUI />
        <TVGuideUI />
        <TemplatingUI />
      </div>
    </section>
  );
};
