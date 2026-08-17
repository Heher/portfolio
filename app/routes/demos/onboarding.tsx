import type { Dispatch, SetStateAction } from 'react';

import { useEffect, useState } from 'react';
import { useFetcher, useOutletContext } from 'react-router';
import { toast } from 'sonner';

import type { Plans } from '@/types/demos/onboarding';

import { MainHeader, MainHeaderContainer, UIPageBody } from '@/app/components/demos/components';
import Header from '@/app/components/demos/Header';
import HorizontalPlans from '@/app/components/demos/onboarding/HorizontalPlans';
import SignUpDialog from '@/app/components/demos/onboarding/SignUpDialog';
import { Toaster } from '@/components/ui/sonner';
import { ZOnboardingFormData } from '@/types/demos/onboarding';

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
        toast.success('Email sent!');
      }
      else {
        toast.error('Whoops', {
          description: 'Something went wrong. Please try again.',
        });
      }

      formFetcher.reset();
    }
  }, [formFetcher, showSignUpDialog]);

  return (
    <div className="flex min-h-dvh flex-col">
      <title>Onboarding | Demos | John Heher</title>
      <meta name="description" content="A simple onboarding page created by John Heher." />
      <Header
        heading={(
          <MainHeaderContainer>
            <MainHeader>Onboarding / Signup</MainHeader>
          </MainHeaderContainer>
        )}
        subhead="An example of an onboarding marketing landing page with signup."
      />
      <UIPageBody
        transitionPath="/demos/onboarding"
        className="
          flex h-full min-h-dvh flex-1 flex-col bg-linear-to-b from-purple-bliss-top to-purple-bliss-bottom px-2.5 pt-5
          sm:p-0
        "
      >
        <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center">
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
      </UIPageBody>
      <Toaster position="top-center" />
    </div>
  );
}
