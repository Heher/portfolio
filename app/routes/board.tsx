import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { Link, useOutletContext } from 'react-router';
import useMeasure from 'react-use-measure';

import type { Route } from './+types/board';

import MessageDialog from '../components/board/dialogs/MessageDialog';
import MatrixStatus from '../components/board/MatrixStatus';
import MessageDrawer from '../components/board/MessageDrawer';
import MessageForm from '../components/board/MessageForm';
import HeaderTech from '../components/shared/HeaderTech';

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const mode = formData.get('mode');

  if (mode === 'freestyle') {
    const pixels = formData.get('pixels');
    const paintedPixels = typeof pixels === 'string' ? JSON.parse(pixels) : [];

    const response = await fetch('https://www.heher.casa/board', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action: 'message', type: 'pixel', pixels: paintedPixels, token: 'se2C7T24BbgfNGKw3oGm' }),
    });

    // console.log(response);
    // console.log(await response.json());
    // console.log(paintedPixels);
    return null;
  }

  const message = formData.get('message');
  console.log(message);
  return null;
}

export default function BoardIndex() {
  const [showMessageDialog, setShowMessageDialog] = useState(false);

  const [pageContainerRef, size] = useMeasure({ debounce: 300 });

  return (
    <main
      ref={pageContainerRef}
      className="w-screen bg-header-top font-figtree text-lg"
    >
      <div className="w-full bg-asteroid-header">
        <div
          className="
            relative mx-auto flex w-full max-w-xl flex-col p-5
            sm:px-0 sm:py-10
          "
        >
          <div className="flex justify-between">
            <Link
              to="/"
              className="
                flex w-[80px] items-center justify-center gap-2 rounded-lg bg-name py-2 text-sm font-semibold text-better-white
                hover:opacity-80
                sm:w-[90px] sm:text-base
              "
            >
              <ArrowLeft
                className="
                  size-4
                  sm:size-4.5
                "
              />
              <span className="block">Back</span>
            </Link>
          </div>
          <div className="
            my-10 flex w-full items-center gap-5
            sm:my-15 sm:gap-10
          "
          >
            <img
              src="/demos/dashboard.png"
              className="
                h-auto w-20
                sm:h-30 sm:w-auto
              "
            />
            <h1
              className="
                text-[47px] leading-none font-bold text-name
                sm:text-[80px]
              "
            >
              The Board
            </h1>
          </div>
          <div className="
            font-zilla text-xl text-name
            sm:text-2xl
          "
          >
            <span>A LED matrix mounted above my TV to display information in a harder to read format.</span>
          </div>
          <p className="
            mt-8 text-sm font-light text-name uppercase
            sm:mt-10 sm:text-sm
          "
          >
            Made with:
          </p>
          <div className="mt-3 flex flex-wrap gap-3 text-name">
            <HeaderTech tech="Raspberry Pi" />
            <HeaderTech tech="Adafruit LED Matrix" />
            <HeaderTech tech="ADS-B Receiver" />
            <HeaderTech tech="MQTT" />
            <HeaderTech tech="SQLite" />
            <HeaderTech tech="Hono" />
            <HeaderTech tech="Cloudflare Tunnels" />
            <HeaderTech tech="rpi-led-matrix" />
          </div>
        </div>
      </div>
      <div
        className="
          flex h-full min-h-dvh flex-1 flex-col bg-linear-to-b from-asteroid-top to-asteroid-bottom px-2.5 py-5
          sm:p-0
        "
      >
        <title>The Board | John Heher</title>
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
            <MatrixStatus />
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
              <button type="button" className="mt-10 cursor-pointer rounded-sm bg-better-white px-4 py-2 font-semibold text-asteroid-top" onClick={() => setShowMessageDialog(true)}>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <MessageDialog
        show={showMessageDialog}
        close={() => setShowMessageDialog(false)}
      />
      {/* {size?.width && size.width > 640
        ? (
            <MessageDialog
              show={showMessageDialog}
              close={() => setShowMessageDialog(false)}
            />
          )
        : (
            <MessageDrawer
              show={showMessageDialog}
              close={() => setShowMessageDialog(false)}
            />
          )} */}
    </main>
  );
}
