import { TextAlignCenter, TextAlignEnd, TextAlignStart } from 'lucide-react';
import { useCallback, useState } from 'react';

import type { Align } from '@/types/board';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

import MatrixCanvas from './MatrixCanvas';

function AlignButton({ align, currentAlign, setAlign }: { align: Align; currentAlign: Align; setAlign: (align: Align) => void }) {
  const Icon = align === 'left' ? TextAlignStart : align === 'center' ? TextAlignCenter : TextAlignEnd;
  const isActive = currentAlign === align;

  return (
    <button
      type="button"
      onClick={() => setAlign(align)}
      className={cn(`h-10 bg-better-white/50 p-2`, align === 'left' && 'rounded-l-md', align === 'right' && 'rounded-r-md', isActive && `bg-better-white`)}
    >
      <Icon className="size-5" />
    </button>
  );
}

type TextMessagePanelProps = {
  text: string;
  setText: (text: string) => void;
  align: Align;
  setAlign: (align: Align) => void;
  color: string;
  setColor: (color: string) => void;
};

export default function TextMessagePanel({ text, setText, align, setAlign, color, setColor }: TextMessagePanelProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-full max-w-[400px]">
        <Input
          name="message"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
          placeholder="Type a message"
          className="
            peer h-12 border-better-white/40 text-better-white
            placeholder:text-better-white/40
            focus-visible:border-better-white focus-visible:ring-0
            md:text-base
          "
        />
        {/* Needs to be after input so the peer selector works */}
        <Label
          htmlFor="message"
          className="
            absolute top-0 left-1.5 -translate-y-1/2 bg-asteroid-bottom px-1 py-0.5 text-xs font-normal text-better-white/70
            peer-focus-visible:text-better-white
          "
        >
          Message
        </Label>
      </div>

      <div className="flex items-center">
        <AlignButton align="left" currentAlign={align} setAlign={setAlign} />
        <AlignButton align="center" currentAlign={align} setAlign={setAlign} />
        <AlignButton align="right" currentAlign={align} setAlign={setAlign} />
      </div>
      <input
        type="color"
        value={color}
        onChange={event => setColor(event.target.value)}
        aria-label="Pick a custom color"
        className="size-10 cursor-pointer rounded-full border-2 border-transparent bg-transparent p-0"
      />
    </div>
  );
}
