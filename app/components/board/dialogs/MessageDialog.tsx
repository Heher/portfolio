import { useState } from 'react';
import { useFetcher } from 'react-router';

import type { Align, MessageMode } from '@/types/board';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

import MessageForm from '../MessageForm';
import { BOARD_HEIGHT, BOARD_WIDTH, LED_ON } from '../utils';

type MessageDialogProps = {
  show: boolean;
  close: () => void;
};

const MODES: { value: MessageMode; label: string }[] = [
  { value: 'text', label: 'Text' },
  { value: 'freestyle', label: 'Draw' },
];

export default function MessageDialog({ show, close }: MessageDialogProps) {
  const [mode, setMode] = useState<MessageMode>('text');
  const [pixels, setPixels] = useState<(string | null)[]>(
    () => Array.from({ length: BOARD_WIDTH * BOARD_HEIGHT }).fill(null) as null[],
  );
  const [text, setText] = useState('');
  const [align, setAlign] = useState<Align>('center');
  const [color, setColor] = useState(LED_ON);

  const fetcher = useFetcher({ key: 'message-dialog' });

  function clear() {
    setPixels(Array.from({ length: BOARD_WIDTH * BOARD_HEIGHT }).fill(null) as null[]);
  }

  function switchMode(newMode: MessageMode) {
    clear();
    setText('');
    setAlign('center');
    // setColor(LED_ON);
    setMode(newMode);
  }

  function submit() {
    // console.log('Submitting message with', { mode, pixels, text, align });

    fetcher.submit(
      { mode, pixels: JSON.stringify(pixels), text, align, textColor: color },
      { method: 'post', action: '/board' },
    );

    clear();
    setText('');
    setAlign('center');
    setColor(LED_ON);
    close();
  }

  return (
    <Dialog open={show} onOpenChange={close}>
      <DialogContent
        className="
          gap-2 bg-better-white p-2
          max-sm:portrait:max-h-[calc(100vw-2rem)] max-sm:portrait:w-[calc(100vh-2rem)] max-sm:portrait:max-w-[calc(100vh-2rem)] max-sm:portrait:rotate-270
          max-sm:portrait:overflow-y-auto
          pointer-coarse:landscape:w-[calc(100vw-2rem)] pointer-coarse:landscape:max-w-[calc(100vw-2rem)]
          sm:pointer-fine:max-w-250 sm:pointer-fine:gap-6 sm:pointer-fine:p-6
        "
        closeClassName="top-2 right-2 size-6 sm:pointer-fine:top-4 sm:pointer-fine:size-10 sm:pointer-fine:right-4"
      >
        <DialogHeader>
          <DialogTitle className="
            text-sm font-semibold text-better-black
            sm:pointer-fine:text-lg
          "
          >
            Send a message
          </DialogTitle>
        </DialogHeader>
        <div className="
          flex flex-col gap-2 rounded-sm bg-asteroid-bottom p-2
          sm:pointer-fine:p-4
        "
        >
          <div className="flex items-start">
            <div className="
              flex gap-1 rounded-sm bg-better-white/20
              sm:pointer-fine:p-2
            "
            >
              {MODES.map((option) => {
                return (
                  <Button
                    key={option.value}
                    type="button"
                    variant={mode === option.value ? 'default' : 'ghost'}
                    onClick={() => switchMode(option.value)}
                    className={cn(`
                      cursor-pointer text-xs capitalize
                      sm:pointer-fine:text-sm
                    `)}
                  >
                    {option.label}
                  </Button>
                );
              })}
            </div>
          </div>
          <div className="
            mt-3
            sm:pointer-fine:mt-5
          "
          >
            <MessageForm mode={mode} close={close} pixels={pixels} setPixels={setPixels} clear={clear} text={text} setText={setText} align={align} setAlign={setAlign} submit={submit} color={color} setColor={setColor} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
