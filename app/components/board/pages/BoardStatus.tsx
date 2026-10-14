import { useEffect, useState } from 'react';
import { useFetcher, useOutletContext } from 'react-router';
import { toast } from 'sonner';

import type { BoardOutletContext } from '@/app/routes/board';

import { Toaster } from '@/components/ui/sonner';

import MessageDialog from '../dialogs/MessageDialog';
import MatrixStatus from '../MatrixStatus';

export default function BoardStatus() {
  const [showMessageDialog, setShowMessageDialog] = useState(false);
  const fetcher = useFetcher({ key: 'message-dialog' });
  const context = useOutletContext<BoardOutletContext>();

  useEffect(() => {
    if (fetcher.data) {
      if (fetcher.data.ok) {
        toast.success('Message sent!');
      }
      else {
        toast.error('Whoops', {
          description: 'Something went wrong. Please try again.',
        });
      }

      fetcher.reset();
    }
  }, [fetcher]);

  return (
    <div
      className="
        px-5 py-10
        sm:px-0 sm:py-30
      "
    >
      <div className="
        mx-auto flex max-w-250 flex-col justify-between gap-20
        sm:flex-row sm:gap-6
      "
      >
        <MatrixStatus status={context.status} />
        <div className="max-w-[500px]">
          <h2 className="text-2xl leading-none font-bold text-better-white">Send a message to The Board</h2>
          <p className="mt-7 font-zilla text-better-white">
            Feel like letting me know something that can fit within 24 characters? Or just want to make me look at the stupidest thing for five seconds? Now you can!
          </p>
          <div className="
            mt-7 flex flex-col gap-3 rounded-sm border border-name/20 bg-better-white/40 p-3 font-zilla text-asteroid-top
            sm:p-5 sm:text-lg
          "
          >
            <p>I can't promise I'll actually see it. Surprisingly I have better things to do than just stare at some LEDs on a wall all day.</p>
          </div>
          <button
            type="button"
            className="
              mt-10 cursor-pointer rounded-sm bg-better-white px-4 py-2 font-semibold text-asteroid-top
              disabled:cursor-not-allowed disabled:bg-asteroid-bottom/70
            "
            onClick={() => setShowMessageDialog(true)}
            disabled={context?.status?.shown !== true}
          >
            Send Message
          </button>
        </div>
      </div>
      <MessageDialog
        show={showMessageDialog}
        close={() => setShowMessageDialog(false)}
      />
      <Toaster position="top-center" />
    </div>
  );
}
