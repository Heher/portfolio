import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useFetcher } from 'react-router';
import { toast } from 'sonner';

import type { BoardProgram, MatrixStatus as MatrixStatusType } from '@/types/board';

import { Toaster } from '@/components/ui/sonner';
// import useMeasure from 'react-use-measure';
import config from '@/config';
import { ZSubmittedMessageData } from '@/types/board';

import type { RgbColor } from '../components/board/utils';
import type { Route } from './+types/board';

import MessageDialog from '../components/board/dialogs/MessageDialog';
import MatrixStatus from '../components/board/MatrixStatus';
import { BOARD_HEIGHT, BOARD_WIDTH, hexToRgb } from '../components/board/utils';
import HeaderTech from '../components/shared/HeaderTech';

type MessageData = {
  action: 'message';
  token: string;
  type?: 'pixel' | 'text';
  pixels?: ({ x: number; y: number; r: number; g: number; b: number })[];
  message?: string;
  messageColor?: RgbColor | null;
};

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const values = Object.fromEntries(formData.entries());
  // console.log('values', values);

  const validatedData = ZSubmittedMessageData.safeParse(values);

  if (!validatedData.success) {
    return { ok: false };
  }

  console.log('formData', formData);

  const messageData: MessageData = {
    action: 'message',
    token: config.SERVER_TOKEN as string,
  };

  if (validatedData.data.mode === 'freestyle') {
    const pixels = validatedData.data.pixels;
    const paintedPixels = typeof pixels === 'string' ? JSON.parse(pixels) : [];

    const convertedPixels = [];

    for (let row = 0; row < BOARD_HEIGHT; row += 1) {
      for (let column = 0; column < BOARD_WIDTH; column += 1) {
        const matchingPixel = paintedPixels[row * BOARD_WIDTH + column];

        if (!matchingPixel) {
          continue;
        }

        const convertedColor = hexToRgb(matchingPixel);

        if (!convertedColor) {
          continue;
        }

        convertedPixels.push({ ...convertedColor, x: column, y: row });
      }
    }

    messageData.type = 'pixel';
    messageData.pixels = convertedPixels;
  }
  else {
    const message = validatedData.data.text;

    messageData.type = 'text';
    messageData.message = message || '';
    messageData.messageColor = hexToRgb(validatedData.data.textColor) || null;
  }

  // console.log(messageData);

  const response = await fetch('https://www.heher.casa/board', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(messageData),
  });

  // console.log(response);

  return { ok: true };
}

function isMatrixStatus(value: unknown): value is MatrixStatusType {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const status = value as Partial<MatrixStatusType>;
  const program = status.program;

  return (
    typeof status.shown === 'boolean'
    && typeof status.brightness === 'number'
    && typeof program === 'object'
    && program !== null
    && typeof program.type === 'string'
    && ['none', 'clock', 'message', 'flights', 'spotify'].includes(program.type as BoardProgram)
    && (program.message === undefined || typeof program.message === 'string')
  );
}

export default function BoardIndex() {
  const [matrixStatus, setMatrixStatus] = useState<MatrixStatusType | null>(null);
  const [showMessageDialog, setShowMessageDialog] = useState(false);
  const fetcher = useFetcher({ key: 'message-dialog' });

  useEffect(() => {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const socket = new WebSocket(`${protocol}//${window.location.host}/ws`);

    // const handleOpen = () => setStatus('open');
    // const handleClose = () => setStatus('closed');
    const handleError = (error: Event) => console.error('WebSocket error:', error);
    const handleMessage = async (event: MessageEvent) => {
      const message = event.data instanceof Blob ? await event.data.text() : event.data;

      if (typeof message !== 'string') {
        console.warn('Unexpected WebSocket message:', message);
        return;
      }

      try {
        const parsedMessage: unknown = JSON.parse(message);

        if (isMatrixStatus(parsedMessage)) {
          setMatrixStatus(parsedMessage);
          return;
        }
      }
      catch {
      }

      console.warn('Unexpected WebSocket message:', message);
    };

    // socket.addEventListener('open', handleOpen);
    // socket.addEventListener('close', handleClose);
    socket.addEventListener('error', handleError);
    socket.addEventListener('message', handleMessage);

    return () => {
      // socket.removeEventListener('open', handleOpen);
      // socket.removeEventListener('close', handleClose);
      socket.removeEventListener('error', handleError);
      socket.removeEventListener('message', handleMessage);
      socket.close();
    };
  }, []);

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
    <main
      // ref={pageContainerRef}
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
              src="/demos/board.png"
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
            <span>An LED matrix mounted above my TV to display information in a harder to read format.</span>
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
            <MatrixStatus status={matrixStatus} />
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
                disabled={matrixStatus?.shown !== true}
              >
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
      <Toaster position="top-center" />
    </main>
  );
}
