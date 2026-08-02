import type { FormattedNetwork } from '@/types/uis/tv-guide';

export default function NetworkTitle({ network }: { network: FormattedNetwork }) {
  // console.log('Network component rendered with network:', network);
  return (
    <div className="size-[150px] bg-amber-200">
      <span className="text-lg">{network.name}</span>
    </div>
  );
}
