import { useEffect, useState } from 'react';
import { useFetcher, useOutletContext } from 'react-router';
import { toast } from 'sonner';

import MessageDialog from '@/app/components/board/dialogs/MessageDialog';
import MessagesPreview from '@/app/components/board/previews/MessagesPreview';
import { BoardHeader, BoardSubhead, BoardText } from '@/app/components/board/shared';
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
    <div className="
      mx-auto w-full max-w-250 py-20
      sm:py-30
    "
    >
      <title>Messages | The Board | John Heher</title>
      <BoardHeader>
        Messages
      </BoardHeader>
      <MessagesPreview className="mx-auto mb-20 max-w-xl" />
      <div className="mx-auto mb-20 max-w-xl">
        <div className="
          max-w-[500px] rounded-sm bg-better-white/10 p-5
          sm:p-8
        "
        >
          <h3 className="
            text-xl leading-none font-bold text-better-white
            sm:text-2xl
          "
          >
            Send a message to The Board
          </h3>
          <p className="mt-7 font-zilla text-base/7 text-better-white">
            Feel like letting me know something that can fit within 24 characters? Or just want to make me look at the stupidest thing for five seconds? Now you can!
          </p>
          <div className="
            mt-7 flex flex-col gap-3 rounded-sm border border-name/20 bg-better-white/40 p-3 font-zilla text-base text-asteroid-top
            sm:p-5 sm:text-lg
          "
          >
            <p>I can't promise I'll actually see it. Surprisingly I have better things to do than just stare at some LEDs on a wall all day.</p>
          </div>
          <button
            type="button"
            className="
              mt-10 cursor-pointer rounded-sm bg-better-white px-4 py-2 text-base font-semibold text-asteroid-top
              disabled:cursor-not-allowed disabled:bg-asteroid-bottom/70
              sm:text-lg
            "
            onClick={() => setShowMessageDialog(true)}
            disabled={context?.status?.shown !== true}
          >
            Send Message
          </button>
        </div>
      </div>
      <BoardSubhead>
        What it shows
      </BoardSubhead>
      <BoardText>
        Interupting whatever program the Board is currently running, the message program scrolls through any unseen messages in the queue, displaying them one by one. After the last message is shown, it returns to the previously running program.
      </BoardText>
      <BoardSubhead className="
        mt-15
        sm:mt-20
      "
      >
        The details
      </BoardSubhead>
      <BoardText>
        After sending a message using the form above, the message will be stored in the SQLite database on the server, where it will wait for the Board's next request for messages. In order to batch message interuptions, the main program has an interval to request new messages from the server every five seconds.
      </BoardText>
      <MessageDialog
        show={showMessageDialog}
        close={() => setShowMessageDialog(false)}
      />
      <Toaster position="top-center" />
    </div>
  );
}
