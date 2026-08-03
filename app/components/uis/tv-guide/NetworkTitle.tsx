import type { FormattedNetwork } from '@/types/uis/tv-guide';

export default function NetworkTitle({ network }: { network: FormattedNetwork }) {
  return (
    <div className="
      flex size-37.5 flex-col items-center bg-gray-600 transition-colors
      group-hover:bg-gray-500
    "
    >
      <div className="flex h-28.75 items-center justify-center">
        <img src={`/images/tv/${network.slug}.webp`} className="w-18" />
      </div>
      <span className="text-base font-medium text-gray-100">{network.name}</span>
    </div>
  );
}
