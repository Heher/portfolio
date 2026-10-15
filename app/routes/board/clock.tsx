export default function BoardClock() {
  return (
    <div className="mx-auto w-full max-w-[1000px] py-30">
      <title>Clock | The Board | John Heher</title>
      <h3 className="
        mb-20 font-figtree leading-none font-semibold tracking-wide text-better-white
        sm:text-[48px]
      "
      >
        Clock
      </h3>
      <h4 className="
        mx-auto mb-8 max-w-xl font-figtree leading-none font-semibold tracking-wide text-better-white/80
        sm:text-[30px]
      "
      >
        What it shows
      </h4>
      <p className="mx-auto mb-20 max-w-xl font-zilla text-xl/8 text-better-white">
        It's...it's a clock. In a revelation of modern computing, it shows the current time with hours, minutes,
        {' '}
        <span className="font-bold italic">and</span>
        {' '}
        seconds.
      </p>
      <h4 className="
        mx-auto mb-8 max-w-xl font-figtree leading-none font-semibold tracking-wide text-better-white/80
        sm:text-[30px]
      "
      >
        The details
      </h4>
      <p className="mx-auto mb-10 max-w-xl font-zilla text-xl/8 text-better-white">
        The program runs in a loop that will wait for one second between each iteration. Within that loop, it will take the current time, convert it into hours, minutes, and seconds, and then update the display accordingly.
      </p>
    </div>
  );
}
