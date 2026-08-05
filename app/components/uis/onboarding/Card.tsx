import type { Dispatch, ReactNode, SetStateAction } from 'react';

import { useOutletContext } from 'react-router';

import type { UIContext } from '@/app/routes/ui/layout';
import type { Plans } from '@/types/uis/onboarding';

type CardProps = {
  planName: Plans;
  selectedPlan: string;
  setSelectedPlan: Dispatch<SetStateAction<Plans>>;
  showDialog: () => void;
  children: ReactNode;
};

function handleClick(selectPlan: () => void, showDialog: () => void, width?: number) {
  if (!width) {
    return;
  }

  if (width >= 640) {
    selectPlan();
  }
  else {
    showDialog();
  }
}

export default function Card({ planName, selectedPlan, setSelectedPlan, showDialog, children }: CardProps) {
  const { size } = useOutletContext<UIContext>();

  return (
    <div className="group relative cursor-pointer text-better-black" onClick={() => handleClick(() => setSelectedPlan(planName), showDialog, size?.width)} data-selected={selectedPlan === planName}>
      {children}
    </div>
  );
}
