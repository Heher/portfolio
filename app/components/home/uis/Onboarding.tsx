import { Link } from 'react-router';

export default function OnboardingUI() {
  return (
    <section className="w-100 shrink-0 rounded-2xl bg-white p-5">
      <Link to="/ui/onboarding">
        <h2 className="mb-5 text-2xl font-semibold">Onboarding</h2>
      </Link>
    </section>
  );
}
