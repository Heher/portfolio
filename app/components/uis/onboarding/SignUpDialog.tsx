import { Form } from 'react-router';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type SignUpDialogProps = {
  show: boolean;
  close: () => void;
};

export default function SignUpDialog({ show, close }: SignUpDialogProps) {
  return (
    <Dialog open={show} onOpenChange={close}>
      <DialogContent className="
        bg-mist-200
        sm:max-w-100
      "
      >
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-better-black">Great pick!</DialogTitle>
          <DialogDescription className="mt-1 text-sm text-gray-500">
            Enter your email below to create your account.
          </DialogDescription>
        </DialogHeader>
        <Form className="mt-2 flex flex-col" method="post" action="/ui/onboarding" navigate={false} fetcherKey="onboarding-form">
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
                absolute top-0 left-1.5 -translate-y-1/2 bg-mist-200 px-1 py-0.5 text-sm text-blue-950
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
