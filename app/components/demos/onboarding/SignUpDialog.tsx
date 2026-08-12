import { Form } from 'react-router';

import type { Plans } from '@/types/demos/onboarding';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type SignUpDialogProps = {
  show: boolean;
  selectedPlan: Plans;
  close: () => void;
};

const plansCopy: Record<Plans, { header: string }> = {
  basic: {
    header: 'Heher+ with ads',
  },
  premium: {
    header: 'Heher+',
  },
  bundle: {
    header: 'Heher+ Bundle',
  },
};

export default function SignUpDialog({ show, selectedPlan, close }: SignUpDialogProps) {
  const copy = plansCopy[selectedPlan];

  return (
    <Dialog open={show} onOpenChange={close}>
      <DialogContent className="
        bg-better-white
        sm:max-w-100
      "
      >
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-better-black">Great pick!</DialogTitle>
        </DialogHeader>
        <div className="mt-0 border border-gray-400 bg-gray-200/90 p-3">
          <p>{copy.header}</p>
        </div>
        <p className="mt-3 text-sm text-gray-700">Enter your email below to create your account.</p>
        <Form className="mt-0 flex flex-col" method="post" action="/demos/onboarding" navigate={false} fetcherKey="onboarding-form">
          <div className="relative">
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              className="
                peer h-12 rounded-sm border border-blue-950
                focus-visible:border-blue-700 focus-visible:ring-0
                md:text-base
              "
            />
            {/* Needs to be after input so the peer selector works */}
            <Label
              htmlFor="email"
              className="
                absolute top-0 left-1.5 -translate-y-1/2 bg-better-white px-1 py-0.5 text-sm text-blue-950
                peer-focus-visible:text-blue-700
              "
            >
              Email
            </Label>
          </div>
          <button className="
            mt-8 cursor-pointer self-end rounded-lg bg-blue-950 px-4 py-2 text-base font-semibold text-better-white transition-colors
            hover:bg-blue-800
          "
          >
            Next
          </button>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
