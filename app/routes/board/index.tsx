import { BoardHeader, BoardList, BoardSubhead, BoardText } from '@/app/components/board/shared';

export default function BoardIndexPage() {
  return (
    <div className="
      mx-auto w-full max-w-250 py-20
      sm:py-30
    "
    >
      <title>Overview | The Board | John Heher</title>
      <BoardHeader>
        The idea
      </BoardHeader>
      <BoardText>
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
      </BoardText>
      <BoardText className="
        mt-5
        sm:mt-10
      "
      >
        Inspired by other projects I was finding online, I wanted to create something like a dashboard I could hang on my wall to display useful (or even meaningless) information.
      </BoardText>
      <BoardText className="
        mt-5
        sm:mt-10
      "
      >
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
      </BoardText>
      <BoardText className="
        mt-5
        sm:mt-10
      "
      >
        Even though the LEDs are run by a fairly powerful Raspberry Pi 4, I wanted to separate the concerns and offload anything that wasn't just driving the display to a separate server. So, I moved any data processing and communication handling to my already existing home server.
      </BoardText>
      <BoardHeader className="
        mt-20 mb-15
        sm:mt-30 sm:mb-20
      "
      >
        The matrix
      </BoardHeader>
      <BoardSubhead>
        Hardware
      </BoardSubhead>
      <BoardText>
        This is the Board itself. The thing that displays the information. All data is communicated over Wi-Fi, so the only cables going out of the frame are the two power cables for the panels and the Pi.
      </BoardText>
      <BoardList className="mt-5">
        <li>
          Three 64x32 LED panels side by side, totaling 192 pixels wide and 32 tall.
        </li>
        <li>
          Raspberry Pi 4 with a Adafruit HAT attached to the GPIO pins, that is then attached to the LED panels (Cleverly gaffer-taped behind the panels).
        </li>
        <li>
          Custom 3D-printed frame that holds the LED panels and Raspberry Pi, mounted on the wall.
        </li>
      </BoardList>
      <BoardSubhead>
        Software
      </BoardSubhead>
      <BoardText>
        The software is very straightforward. Heavily using the rpi-led-matrix library, it runs a custom program to show whichever program is set to run. It runs in a continuous loop, constantly checking for MQTT messages to exit out of the current program loop.
      </BoardText>
      <BoardList className="mt-5">
        <li>
          MQTT receiver for handling messages from the server.
        </li>
        <li>
          Custom program based on the rpi-led-matrix library for controlling the LED panels.
        </li>
      </BoardList>
      <BoardHeader className="
        mt-20 mb-15
        sm:mt-30 sm:mb-20
      "
      >
        The server
      </BoardHeader>
      <BoardSubhead>
        Hardware
      </BoardSubhead>
      <BoardText>
        My home server (a Raspberry Pi 3) handles miscellaneous tasks for my house, like controlling lights and other smart devices. The only additional hardware that was needed for The Board was how to get flight data. For this, I purchased a small ADS-B receiver that connects over USB and an antenna to capture aircraft signals.
      </BoardText>
      <BoardList className="mt-5">
        <li>
          Raspberry Pi 3
        </li>
        <li>
          ADS-B antenna and USB receiver plugged into the Raspberry Pi for tracking aircraft
        </li>
      </BoardList>
      <BoardSubhead>
        Software
      </BoardSubhead>
      <BoardText>
        I wanted to make my server act as the central hub for the Board. The software that was already running on my home server was a Hono API, so expanding that to handle messages to and from the Board was easy. All updates are routed through the server, which will then forward any Board updates, like turning it on or off, or changing the displayed content to the Board Raspberry Pi. This is done over MQTT, a lightweight messaging protocol.
      </BoardText>
      <BoardText className="mt-5">
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
      </BoardText>
      <BoardText className="mt-5">
        At this time, the only thing users outside my home can send to the board is messages. These are handled the same way as other Board updates, but they are stored in a SQLite database for retrieval by the Board later. I don't want the Board to be overrun by the onslaught of messages from my many fans.
      </BoardText>
      <BoardList className="mt-5">
        <li>
          API written with Hono for handling requests
        </li>
        <li>
          tar1090 for supplying aircraft tracking data to the Board
        </li>
        <li>
          MQTT provider for sending messages to the Board
        </li>
        <li>
          SQLite database for storing messages that should be displayed on the Board.
        </li>
      </BoardList>
    </div>
  );
}
