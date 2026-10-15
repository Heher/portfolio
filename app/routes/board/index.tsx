// import { DocFacts, DocList, DocP, DocSection } from '@/app/components/board/docs/DocLayout';
// import { Arrow, Node } from '@/app/components/board/shared';

export default function BoardIndexPage() {
  return (
    <div className="mx-auto w-full max-w-[1000px] py-30">
      <title>Overview | The Board | John Heher</title>
      {/* <h2 className="
        mb-10 leading-none font-semibold tracking-wide text-better-white
        sm:text-[48px]
      "
      >
        Overview
      </h2> */}
      <h3 className="
        mb-20 font-figtree leading-none font-semibold tracking-wide text-better-white
        sm:text-[48px]
      "
      >
        The idea
      </h3>
      <p className="mx-auto max-w-xl font-zilla text-xl/8 text-better-white">
        I began buying and tinkering with Raspberry Pis around 2014 and after seeing some LED panels on sale, I bought three of them and started fiddling. I created a very rudimentary frame to house the displays and started writing some very stupid programs using the
        {' '}
        <a
          href="https://github.com/hzeller/rpi-rgb-led-matrix"
          target="_blank"
          rel="noopener noreferrer"
          className="
            font-semibold text-cta/70 underline
            hover:text-cta/90
          "
        >
          rpi-rgb-led-matrix
        </a>
        {' '}
        library.
      </p>
      <p className="mx-auto mt-10 max-w-xl font-zilla text-xl/8 text-better-white">
        Inspired by other projects I was finding online, I wanted to create something like a dashboard I could hang on my wall to display useful (or even meaningless) information.
      </p>
      {/* <p className="mt-10 font-zilla text-xl/8 text-better-white">
        The precariously positioned wooden frame kept falling off or apart, so I took to Reddit and found two people who helped me design and 3D print a new frame that it currently sits in. I hung the frame on the wall and very cleverly hid the cables in a large white cable cover.
      </p> */}
      {/* <p className="mt-10 font-zilla text-xl/8 text-better-white">
        I envisioned a display that I could hang on the wall that would be able to show dynamic information like stock prices, weather updates, or just anything I could build.
      </p> */}
      <p className="mx-auto mt-10 max-w-xl font-zilla text-xl/8 text-better-white">
        So, I started upgrading each component one at a time. I commissioned a custom design and 3D print for the frame to securely house the LED panels. I then rewrote the programs using the
        {' '}
        <a
          href="https://github.com/alexeden/rpi-led-matrix"
          target="_blank"
          rel="noopener noreferrer"
          className="
            font-semibold text-cta/70 underline
            hover:text-cta/90
          "
        >
          rpi-led-matrix
        </a>
        {' '}
        library, which is a TypeScript wrapper around the original C++ library. Being a stereotypical front-end developer, I'm required to believe JavaScript is the answer for every application.
      </p>
      <p className="mx-auto mt-10 max-w-xl font-zilla text-xl/8 text-better-white">
        Even though the LEDs are run by a fairly powerful Raspberry Pi 4, I wanted to separate the concerns and offload anything that wasn't just driving the display to a separate server. So, I moved any data processing and communication handling to my already existing home server.
      </p>
      <h3 className="
        mt-30 mb-20 font-figtree leading-none font-semibold tracking-wide text-better-white
        sm:text-[48px]
      "
      >
        The matrix
      </h3>
      <h4 className="
        mx-auto mb-8 max-w-xl font-figtree leading-none font-semibold tracking-wide text-better-white/80
        sm:text-[30px]
      "
      >
        Hardware
      </h4>
      <p className="mx-auto mb-10 max-w-xl font-zilla text-xl/8 text-better-white">
        This is the Board itself. The thing that displays the information. All data is communicated over Wi-Fi, so the only cables going out of the frame are the two power cables for the panels and the Pi.
      </p>
      <ul className="mx-auto mb-20 grid max-w-xl list-disc grid-cols-1 gap-y-5 rounded-md border border-better-white/20 bg-better-white/5 px-8 py-5 font-zilla text-lg">
        <li className="text-better-white/70">
          Three 64x32 LED panels side by side, totaling 192 pixels wide and 32 tall.
        </li>
        <li className="text-better-white/70">
          Raspberry Pi 4 with a Adafruit HAT attached to the GPIO pins, that is then attached to the LED panels (Cleverly gaffer-taped behind the panels).
        </li>
        <li className="text-better-white/70">
          Custom 3D-printed frame that holds the LED panels and Raspberry Pi, mounted on the wall.
        </li>
      </ul>
      <h4 className="
        mx-auto mb-8 max-w-xl font-figtree leading-none font-semibold tracking-wide text-better-white/80
        sm:text-[30px]
      "
      >
        Software
      </h4>
      <p className="mx-auto mb-10 max-w-xl font-zilla text-xl/8 text-better-white">
        The software is very straightforward. Heavily using the rpi-led-matrix library, it runs a custom program to show whichever program is set to run. It runs in a continuous loop, constantly checking for MQTT messages to exit out of the current program loop.
      </p>
      <ul className="mx-auto mb-10 grid max-w-xl list-disc grid-cols-1 gap-y-3 rounded-md border border-better-white/20 bg-better-white/5 px-8 py-4 font-zilla text-lg">
        <li className="text-better-white/70">
          MQTT receiver for handling messages from the server.
        </li>
        <li className="text-better-white/70">
          Custom program based on the rpi-led-matrix library for controlling the LED panels.
        </li>
      </ul>
      <h3 className="
        mt-30 mb-20 font-figtree leading-none font-semibold tracking-wide text-better-white
        sm:text-[48px]
      "
      >
        The server
      </h3>
      <h4 className="
        mx-auto mb-8 max-w-xl font-figtree leading-none font-semibold tracking-wide text-better-white/80
        sm:text-[30px]
      "
      >
        Hardware
      </h4>
      <p className="mx-auto mb-10 max-w-xl font-zilla text-xl/8 text-better-white">
        My home server (a Raspberry Pi 3) handles miscellaneous tasks for my house, like controlling lights and other smart devices. The only additional hardware that was needed for The Board was how to get flight data. For this, I purchased a small ADS-B receiver that connects over USB and an antenna to capture aircraft signals.
      </p>
      <ul className="mx-auto mb-20 grid max-w-xl list-disc grid-cols-1 gap-y-5 rounded-md border border-better-white/20 bg-better-white/5 px-8 py-5 font-zilla text-lg">
        <li className="text-better-white/70">
          Raspberry Pi 3
        </li>
        <li className="text-better-white/70">
          ADS-B antenna and USB receiver plugged into the Raspberry Pi for tracking aircraft
        </li>
      </ul>
      <h4 className="
        mx-auto mb-8 max-w-xl font-figtree leading-none font-semibold tracking-wide text-better-white/80
        sm:text-[30px]
      "
      >
        Software
      </h4>
      <p className="mx-auto mb-10 max-w-xl font-zilla text-xl/8 text-better-white">
        I wanted to make my server act as the central hub for the Board. The software that was already running on my home server was a Hono API, so expanding that to handle messages to and from the Board was easy. All updates are routed through the server, which will then forward any Board updates, like turning it on or off, or changing the displayed content to the Board Raspberry Pi. This is done over MQTT, a lightweight messaging protocol.
      </p>
      <p className="mx-auto mb-10 max-w-xl font-zilla text-xl/8 text-better-white">
        For the flight data, I am using the
        {' '}
        <a
          href="https://github.com/wiedehopf/tar1090"
          target="_blank"
          rel="noopener noreferrer"
          className="
            font-semibold text-cta/70 underline
            hover:text-cta/90
          "
        >
          tar1090
        </a>
        {' '}
        library to take the raw data from the ADS-B receiver, process it into JSON, and serve that for the Board to use.
      </p>
      <p className="mx-auto mb-10 max-w-xl font-zilla text-xl/8 text-better-white">
        At this time, the only thing users outside my home can send to the board is messages. These are handled the same way as other Board updates, but they are stored in a SQLite database for retrieval by the Board later. I don't want the Board to be overrun by the onslaught of messages from my many fans.
      </p>
      <ul className="mx-auto mb-10 grid max-w-xl list-disc grid-cols-1 gap-y-3 rounded-md border border-better-white/20 bg-better-white/5 px-8 py-4 font-zilla text-lg">
        <li className="text-better-white/70">
          API written with Hono for handling requests
        </li>
        <li className="text-better-white/70">
          tar1090 for supplying aircraft tracking data to the Board
        </li>
        <li className="text-better-white/70">
          MQTT provider for sending messages to the Board
        </li>
        <li className="text-better-white/70">
          SQLite database for storing messages that should be displayed on the Board.
        </li>
      </ul>
    </div>
  );
}
