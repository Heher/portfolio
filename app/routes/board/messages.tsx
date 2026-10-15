import { useEffect, useState } from 'react';
import { useFetcher, useOutletContext } from 'react-router';
import { toast } from 'sonner';

import MessageDialog from '@/app/components/board/dialogs/MessageDialog';
import { Toaster } from '@/components/ui/sonner';

import type { BoardOutletContext } from './layout';

export default function BoardMessages() {
  const [showMessageDialog, setShowMessageDialog] = useState(false);
  const context = useOutletContext<BoardOutletContext>();

  const fetcher = useFetcher({ key: 'message-dialog' });

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
    <div className="mx-auto w-full max-w-[1000px] py-30">
      <title>Messages | The Board | John Heher</title>
      <h3 className="
        mb-20 font-figtree leading-none font-semibold tracking-wide text-better-white
        sm:text-[48px]
      "
      >
        Messages
      </h3>
      <div className="mx-auto mb-20 max-w-xl">
        <div className="max-w-[500px] rounded-sm bg-better-white/10 p-8">
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
      <h4 className="
        mx-auto mb-8 max-w-xl font-figtree leading-none font-semibold tracking-wide text-better-white/80
        sm:text-[30px]
      "
      >
        What it shows
      </h4>
      <p className="mx-auto mb-20 max-w-xl font-zilla text-xl/8 text-better-white">
        Interupting whatever program the Board is currently running, the message program scrolls through any unseen messages in the queue, displaying them one by one. After the last message is shown, it returns to the previously running program.
      </p>
      <h4 className="
        mx-auto mb-8 max-w-xl font-figtree leading-none font-semibold tracking-wide text-better-white/80
        sm:text-[30px]
      "
      >
        The details
      </h4>
      <p className="mx-auto mb-10 max-w-xl font-zilla text-xl/8 text-better-white">
        After sending a message using the form above, the message will be stored in the SQLite database on the server, where it will wait for the Board's next request for messages. In order to batch message interuptions, the main program has an interval to request new messages from the server every five seconds.
      </p>
      <MessageDialog
        show={showMessageDialog}
        close={() => setShowMessageDialog(false)}
      />
      <Toaster position="top-center" />
    </div>
  );
}
