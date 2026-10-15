import { BoardHeader, BoardSubhead, BoardText } from '@/app/components/board/shared';

export default function BoardClock() {
  return (
    <div className="
      mx-auto w-full max-w-250 py-20
      sm:py-30
    "
    >
      <title>Clock | The Board | John Heher</title>
      <BoardHeader>
        Clock
      </BoardHeader>
      <BoardSubhead>
        What it shows
      </BoardSubhead>
      <BoardText>
        It's...it's a clock. In a revelation of modern computing, it shows the current time with hours, minutes,
        {' '}
        <span className="font-bold italic">and</span>
        {' '}
        seconds.
      </BoardText>
      <BoardSubhead className="
        mt-15
        sm:mt-20
      "
      >
        The details
      </BoardSubhead>
      <BoardText>
        The program runs in a loop that will wait for one second between each iteration. Within that loop, it will take the current time, convert it into hours, minutes, and seconds, and then update the display accordingly.
      </BoardText>
    </div>
  );
}
