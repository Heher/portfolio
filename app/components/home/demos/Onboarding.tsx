import UILink from './UILink';

export default function OnboardingUI() {
  return (
    // <UILink url="/ui/onboarding" title="Onboarding / Signup" image="onboarding-5.png" bodyClassName="bg-linear-to-b from-better-white/40 from-80% to-tables-dark/30 rounded-b-xl" />
    <UILink url="/demos/onboarding" title="Signup" image="onboarding-5.png" className="border-0" bodyClassName="bg-linear-to-b from-purple-bliss-top/20 to-purple-bliss-bottom/20 rounded-xl group-hover:from-purple-bliss-top/40 group-hover:to-purple-bliss-bottom/40" />
  );
}
