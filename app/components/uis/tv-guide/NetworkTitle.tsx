import type { FormattedNetwork } from '@/types/uis/tv-guide';

export default function NetworkTitle({ network }: { network: FormattedNetwork }) {
  // console.log('Network component rendered with network:', network);
  return (
    <div className="
      flex size-37.5 flex-col items-center gap-3 bg-gray-600 transition-colors
      group-hover:bg-gray-500
    "
    >
      <div className="mt-5 size-20 bg-white" />
      <span className="text-base font-medium text-gray-100">{network.name}</span>
    </div>
  );
}
