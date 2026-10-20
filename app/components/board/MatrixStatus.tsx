import type { MatrixStatus as MatrixStatusType } from '@/types/board';

import { cn } from '@/lib/utils';

// function MatrixStatusIndicator({ status }: { status: 'connecting' | 'open' | 'closed' }) {
//   if (status === 'connecting') {
//     return <span className="block size-3 rounded-full bg-yellow-700"></span>;
//   }

//   if (status === 'closed') {
//     return <span className="block size-3 rounded-full bg-red-700"></span>;
//   }

//   return (
//     <span className="block size-3 rounded-full bg-green-700"></span>
//   );
// }

function MatrixDisplayIndicator({ shown }: { shown: boolean }) {
  if (!shown) {
    return <span className="block size-3 rounded-full bg-red-700"></span>;
  }

  return (
    <span className="block size-3 rounded-full bg-green-700"></span>
  );
}

function ProgramIndicator({ program, selected, shown }: { program: string; selected?: boolean; shown: boolean }) {
  return (
    <span className={cn(
      `
        bg-better-white/30 px-2 py-1 text-sm font-medium text-asteroid-top
        first-of-type:rounded-l-md
        last-of-type:rounded-r-md
        sm:px-3 sm:py-2 sm:text-sm
      `,
      selected && 'bg-better-white',
      !shown && 'bg-better-white/30',
    )}
    >
      {program}
    </span>
  );
}

type MatrixStatusProps = {
  status: MatrixStatusType | null;
};

export default function MatrixStatus({ status }: MatrixStatusProps) {
  // const [status, setStatus] = useState<'connecting' | 'open' | 'closed'>('connecting');

  return (
    <div className="max-w-[500px]">
      {/* <div className="mb-2 flex items-center gap-4">
        <h2 className="text-2xl leading-none font-bold text-better-white">Status</h2>
      </div> */}
      <div
        className="mt-8 flex flex-col gap-5 rounded-md border border-asteroid-bottom bg-asteroid-top/20 text-base text-better-black"
      >
        <div className="flex items-center justify-start gap-2 rounded-t-sm bg-better-white/60 px-5 py-2">
          <p className="font-semibold text-better-black">{status?.shown ? 'On' : 'Off'}</p>
          <MatrixDisplayIndicator shown={status?.shown ?? false} />
        </div>
        <div className="flex flex-col gap-3 px-5 pb-5">
          {/* <p className="text-xs font-semibold text-asteroid-top uppercase">Program running</p> */}
          <div className="flex items-center justify-start">
            <div className="flex items-center gap-px rounded-md border border-asteroid-top/60 bg-asteroid-top/60">
              <ProgramIndicator program="Clock" selected={status?.program.type === 'clock'} shown={status?.shown ?? false} />
              <ProgramIndicator program="Flights" selected={status?.program.type === 'flights'} shown={status?.shown ?? false} />
              <ProgramIndicator program="Spotify" selected={status?.program.type === 'spotify'} shown={status?.shown ?? false} />
              <ProgramIndicator program="Messages" selected={status?.program.type === 'message'} shown={status?.shown ?? false} />
            </div>
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
