import { useEffect, useState } from 'react';
import { Form } from 'react-router';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import type { Route } from './+types/board';

import MessageForm from '../components/board/MessageForm';

type BoardProgram = 'none' | 'clock' | 'message' | 'flights' | 'spotify';

type MatrixStatus = {
  shown: boolean;
  program: {
    type: BoardProgram;
    message?: string;
  };
  brightness: number;
};

const boardPrograms: BoardProgram[] = ['none', 'clock', 'message', 'flights', 'spotify'];

function isMatrixStatus(value: unknown): value is MatrixStatus {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const status = value as Partial<MatrixStatus>;
  const program = status.program;

  return (
    typeof status.shown === 'boolean'
    && typeof status.brightness === 'number'
    && typeof program === 'object'
    && program !== null
    && typeof program.type === 'string'
    && boardPrograms.includes(program.type as BoardProgram)
    && (program.message === undefined || typeof program.message === 'string')
  );
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const message = formData.get('message');
  console.log(message);
  return null;
}

export default function BoardIndex() {
  const [status, setStatus] = useState<'connecting' | 'open' | 'closed'>('connecting');
  const [matrixStatus, setMatrixStatus] = useState<MatrixStatus | null>(null);

  useEffect(() => {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const socket = new WebSocket(`${protocol}//${window.location.host}/ws`);

    const handleOpen = () => setStatus('open');
    const handleClose = () => setStatus('closed');
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

    socket.addEventListener('open', handleOpen);
    socket.addEventListener('close', handleClose);
    socket.addEventListener('error', handleError);
    socket.addEventListener('message', handleMessage);

    return () => {
      socket.removeEventListener('open', handleOpen);
      socket.removeEventListener('close', handleClose);
      socket.removeEventListener('error', handleError);
      socket.removeEventListener('message', handleMessage);
      socket.close();
    };
  }, []);

  return (
    <main
      className="w-screen bg-header-top font-figtree text-lg"
    >
      <div
        className="m-0 mx-auto"
      >
        <title>The Board | John Heher</title>
        <div
          className="
            bg-better-white px-5 py-20
            sm:px-0 sm:py-40
          "
        >
          <div className="mx-auto max-w-250">
            <h1>Board Page</h1>
            <p className="text-sm text-gray-500">
              Socket status:
              {' '}
              {status}
            </p>
            <div
              className="
                mt-8 grid gap-4 border border-gray-300 bg-gray-100 p-5 text-base text-better-black
                sm:grid-cols-2
              "
            >
              <div>
                <p className="text-sm text-gray-500">Display</p>
                <p className="font-semibold">{matrixStatus?.shown ? 'Shown' : 'Hidden'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Program</p>
                <p className="font-semibold">{matrixStatus?.program.type ?? 'Waiting for data'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Brightness</p>
                <p className="font-semibold">{matrixStatus ? `${matrixStatus.brightness}%` : 'Waiting for data'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Message</p>
                <p className="font-semibold">{matrixStatus?.program.message ?? 'No message'}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-250 flex-1 flex-col justify-center">
          <div className="mt-10 max-w-[300px] bg-gray-300 p-3 text-better-black">
            {/* <Form method="post">
              <Label htmlFor="message">Message</Label>
              <Input
                id="message"
                name="message"
                type="text"
                placeholder="Enter your message"
              />
              <button type="submit" className="mt-3 bg-better-black px-3 py-1 text-better-white">
                Submit
              </button>
            </Form> */}
            <MessageForm />
          </div>
        </div>
      </div>
    </main>
  );
}
