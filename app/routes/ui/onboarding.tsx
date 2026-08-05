import type { Dispatch, SetStateAction } from 'react';

import { useEffect, useState } from 'react';
import { useFetcher, useOutletContext } from 'react-router';

import type { Plans } from '@/types/uis/onboarding';

import Header from '@/app/components/uis/Header';
import HorizontalPlans from '@/app/components/uis/onboarding/HorizontalPlans';
import VerticalPlans from '@/app/components/uis/onboarding/VerticalPlans';
import { toast, Toaster } from '@/components/ui/toast';
import { ZOnboardingFormData } from '@/types/uis/onboarding';
import SignUpDialog from '~/components/uis/onboarding/SignUpDialog';

import type { Route } from './+types/onboarding';
import type { UIContext } from './layout';

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const values = Object.fromEntries(formData.entries());

  const validatedData = ZOnboardingFormData.safeParse(values);

  // console.log(validatedData);

  if (!validatedData.success) {
    return { ok: false };
  }

  return { ok: true, data: validatedData.data };
}

// export async function loader() {
//   const tableData = createTableData(20);

//   return { data: tableData };
// }

type OnboardingInnerProps = {
  width?: number;
  selectedPlan: string;
  setSelectedPlan: Dispatch<SetStateAction<Plans>>;
  showDialog: () => void;
};

function OnboardingInner({ width, selectedPlan, setSelectedPlan, showDialog }: OnboardingInnerProps) {
  if (!width) {
    return null;
  }

  return <HorizontalPlans selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} showDialog={showDialog} />;

  // if (width >= 640) {
  //   return <HorizontalPlans selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} showDialog={showDialog} />;
  // }

  // return <VerticalPlans selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />;
}

export default function OnboardingPage() {
  const [selectedPlan, setSelectedPlan] = useState<Plans>('basic');
  const [showSignUpDialog, setShowSignUpDialog] = useState(false);

  const { size } = useOutletContext<UIContext>();

  const formFetcher = useFetcher({ key: 'onboarding-form' });

  useEffect(() => {
    if (formFetcher.data && showSignUpDialog) {
      setShowSignUpDialog(false);

      if (formFetcher.data.ok) {
        toast.add({
          title: 'Email sent!',
          description: 'Check your email to verify your account.',
          type: 'success',
        });
      }
      else {
        toast.add({
          title: 'Whoops',
          description: 'Something went wrong. Please try again.',
          type: 'error',
        });
      }

      formFetcher.reset();
    }
  }, [formFetcher, showSignUpDialog]);

  return (
    <div className="flex min-h-dvh flex-col">
      <title>Onboarding | UIs | John Heher</title>
      <meta name="description" content="A simple onboarding page created by John Heher." />
      <Header heading="Onboarding / Signup" subhead="An example of an onboarding marketing landing page with signup." />
      <div className="
        h-full flex-1 bg-linear-to-b from-blue-950 to-mist-700 px-2.5 pt-5 pb-10
        sm:px-0 sm:pt-30 sm:pb-0
      "
      >
        <h2 className="
          mt-5 text-center text-xl font-semibold text-better-white
          sm:mt-0 sm:text-2xl
        "
        >
          Choose a plan
        </h2>
        <OnboardingInner width={size?.width} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} showDialog={() => setShowSignUpDialog(true)} />
        <SignUpDialog show={showSignUpDialog} selectedPlan={selectedPlan} close={() => setShowSignUpDialog(false)} />
      </div>
      <Toaster />
    </div>
  );
}
