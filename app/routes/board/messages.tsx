import { useEffect, useState } from 'react';
import { Link, useFetcher, useOutletContext } from 'react-router';
import { toast } from 'sonner';

import MessageDialog from '@/app/components/board/dialogs/MessageDialog';
import { Toaster } from '@/components/ui/sonner';

import type { BoardOutletContext } from './layout';

import { DocFacts, DocLayout, DocList, DocP, DocSection } from '../../components/board/docs/DocLayout';

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
    <DocLayout
      title="Messages"
      summary="The one program you can trigger: type a note or draw a picture and watch it appear on my wall."
    >
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
      <DocSection title="What it shows">
        <DocP>
          A red "Incoming Message" banner draws a border around the board, then your message scrolls in, holds for about five seconds, and gives way to the next. When they're all done, the board returns to whatever it was showing before.
        </DocP>
      </DocSection>

      <DocSection title="Text or doodle">
        <DocFacts
          rows={[
            ['Text', 'Pick your words and a color.'],
            ['Draw', 'Paint pixel by pixel on a canvas that matches the board.'],
          ]}
        />
        <DocP>
          Try it on
          {' '}
          <Link to="/board" className="underline">the board page</Link>
          . The preview uses the same pixel grid as the real display, and strokes are filled in smoothly even if you draw fast.
        </DocP>
      </DocSection>

      <DocSection title="What happens when you hit send">
        <DocList>
          <li>This site checks your message and passes it to my home server.</li>
          <li>The server saves it in a queue.</li>
          <li>The board checks the queue every few seconds, and picks up anything new.</li>
          <li>It remembers what it was showing, plays your message, and goes back.</li>
        </DocList>
      </DocSection>

      <DocSection title="Why not instantly?">
        <DocP>
          I didn't want a new message to cut off a song or a flight mid-card. Checking every few seconds keeps the board calm, and a few messages sent together play back to back.
        </DocP>
      </DocSection>
      <MessageDialog
        show={showMessageDialog}
        close={() => setShowMessageDialog(false)}
      />
      <Toaster position="top-center" />
    </DocLayout>
  );
}
