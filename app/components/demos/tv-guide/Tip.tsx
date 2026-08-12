import { InfoIcon } from 'lucide-react';
import { useState } from 'react';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export default function Tip() {
  const [open, setOpen] = useState(false);

  return (
    <Tooltip open={open}>
      <TooltipTrigger asChild>
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          onTouchStart={() => setOpen(!open)}
          onKeyDown={(e) => {
            e.preventDefault();
            e.key === 'Enter' && setOpen(!open);
          }}
        >
          <InfoIcon className="
            size-4 text-tv-guide-dark
            sm:size-5
          "
          />
        </button>
      </TooltipTrigger>
      <TooltipContent className="flex-col items-start px-4 py-3">
        <p>Please excuse the fake lorem ipsum shows.</p>
        <p>The only TV schedule API I could find was woefully inaccurate. Just imagine you're watching TV in Ancient Rome.</p>
      </TooltipContent>
    </Tooltip>
  );
}
