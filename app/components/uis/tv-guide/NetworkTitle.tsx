import type { FormattedNetwork } from '@/types/uis/tv-guide';

export default function NetworkTitle({ network }: { network: FormattedNetwork }) {
  return (
    <div className="
      flex size-25 flex-col items-center bg-gray-600 transition-colors
      group-hover:bg-gray-500
      sm:size-37.5
    "
    >
      <div className="
        flex h-18 items-center justify-center
        sm:h-28.75
      "
      >
        <img
          src={`/images/tv/${network.slug}.webp`}
          className="
            w-10
            sm:w-18
          "
        />
      </div>
      <span className="
        text-sm font-medium text-gray-100
        sm:text-base
      "
      >
        {network.name}
      </span>
    </div>
  );
}
