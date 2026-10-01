import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

type BoardProgram = 'none' | 'clock' | 'message' | 'flights' | 'spotify';

type MatrixStatus = {
  shown: boolean;
  program: {
    type: BoardProgram;
    message?: string;
  };
  brightness: number;
};

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
    && ['none', 'clock', 'message', 'flights', 'spotify'].includes(program.type as BoardProgram)
    && (program.message === undefined || typeof program.message === 'string')
  );
}

function MatrixStatusIndicator({ status }: { status: 'connecting' | 'open' | 'closed' }) {
  if (status === 'connecting') {
    return <span className="block size-3 rounded-full bg-yellow-700"></span>;
  }

  if (status === 'closed') {
    return <span className="block size-3 rounded-full bg-red-700"></span>;
  }

  return (
    <span className="block size-3 rounded-full bg-green-700"></span>
  );
}

function MatrixDisplayIndicator({ shown }: { shown: boolean }) {
  if (!shown) {
    return <span className="block size-3 rounded-full bg-red-700"></span>;
  }

  return (
    <span className="block size-3 rounded-full bg-green-700"></span>
  );
}

function ProgramIndicator({ program, selected }: { program: string; selected?: boolean }) {
  return (
    <span className={cn(
      `
        rounded-full border border-asteroid-top/60 bg-asteroid-top/5 px-2 py-1 text-sm font-medium text-asteroid-top
        sm:px-3 sm:py-2 sm:text-sm
      `,
      selected && 'bg-better-white/70',
    )}
    >
      {program}
    </span>
  );
}

export default function MatrixStatus() {
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
    <div className="max-w-[500px]">
      <div className="mb-4 flex items-center gap-4">
        <h2 className="text-2xl leading-none font-bold text-better-white">Status</h2>
        {/* <div className="flex items-center gap-2 rounded-sm border border-gray-400 bg-gray-200/60 px-2 py-1 text-xs uppercase">
          <span>Synced</span>
          <MatrixStatusIndicator status={status} />
        </div> */}
      </div>
      <div
        className="mt-8 flex flex-col gap-5 rounded-md border border-gray-200 bg-gray-100/40 text-base text-better-black"
      >
        <div className="">
          {/* <p className="text-xs font-semibold text-asteroid-top uppercase">Display</p> */}
          <div className="flex items-center justify-start gap-2 rounded-t-sm bg-gray-200/30 px-5 py-2">
            <p className="font-semibold text-better-white">{matrixStatus?.shown ? 'On' : 'Off'}</p>
            <MatrixDisplayIndicator shown={matrixStatus?.shown ?? false} />
          </div>
        </div>
        <div className="flex flex-col gap-3 px-5 pb-5">
          <p className="text-xs font-semibold text-asteroid-top uppercase">Program</p>
          <div className="flex items-center gap-2">
            <ProgramIndicator program="Clock" selected={matrixStatus?.program.type === 'clock'} />
            <ProgramIndicator program="Flights" selected={matrixStatus?.program.type === 'flights'} />
            <ProgramIndicator program="Spotify" selected={matrixStatus?.program.type === 'spotify'} />
            <ProgramIndicator program="Messages" selected={matrixStatus?.program.type === 'message'} />
          </div>
          {/* <p className="font-semibold">{matrixStatus?.program.type ?? 'Waiting for data'}</p> */}
        </div>
        {/* <div>
          <p className="text-sm text-gray-500">Brightness</p>
          <p className="font-semibold">{matrixStatus ? `${matrixStatus.brightness}%` : 'Waiting for data'}</p>
        </div> */}
        {/* <div>
          <p className="text-sm text-gray-500">Message</p>
          <p className="font-semibold">{matrixStatus?.program.message ?? 'No message'}</p>
        </div> */}
      </div>
    </div>
  );
}
