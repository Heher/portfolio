import type { Dispatch, ReactNode, SetStateAction } from 'react';

import { useOutletContext } from 'react-router';

import type { UIContext } from '@/app/routes/ui/layout';
import type { Plans } from '@/types/uis/onboarding';

type CardProps = {
  planName: Plans;
  selectedPlan: string;
  setSelectedPlan: Dispatch<SetStateAction<Plans>>;
  children: ReactNode;
};

function handleClick(selectPlan: () => void, width?: number) {
  if (!width || width < 640) {
    return;
  }

  selectPlan();
}

export default function Card({ planName, selectedPlan, setSelectedPlan, children }: CardProps) {
  const { size } = useOutletContext<UIContext>();

  return (
    <div className="group relative cursor-pointer text-better-black" onClick={() => handleClick(() => setSelectedPlan(planName), size?.width)} data-selected={selectedPlan === planName}>
      {children}
    </div>
  );
}
