import { DocFacts, DocLayout, DocList, DocP, DocSection } from '../../components/board/docs/DocLayout';

function Node({ name, detail }: { name: string; detail: string }) {
  return (
    <div className="rounded-md border border-better-white/30 bg-better-white/10 px-4 py-3">
      <p className="font-figtree font-semibold text-better-white">{name}</p>
      <p className="text-base text-better-white/70">{detail}</p>
    </div>
  );
}

function Arrow({ label }: { label: string }) {
  return (
    <p className="py-1.5 pl-4 font-figtree text-sm text-better-white/60 uppercase" aria-hidden="true">
      ↓
      {' '}
      {label}
    </p>
  );
}

export default function BoardHowItWorks() {
  return (
    <DocLayout
      title="How it works"
      summary="A wall of LEDs above my TV that quietly shows what's going on around me, and lets you leave a note."
    >
      <DocSection title="The idea">
        <DocP>
          I wanted a display that isn't a screen you stare at. The Board is a long strip of glowing pixels that shows the time, the planes flying over my house, or the song I'm playing, and only one of them at a time. It's also the one part of my setup that visitors can touch: send it a message from this page and it shows up on my wall.
        </DocP>
      </DocSection>

      <DocSection title="What's in the box">
        <DocFacts
          rows={[
            ['The display', 'Three LED panels side by side, 192 pixels wide and 32 tall.'],
            ['The brain', 'A Raspberry Pi behind the panels, running programs I wrote in TypeScript.'],
            ['The home server', 'A second Raspberry Pi that talks to the internet, stores messages, and listens for aircraft with a small antenna.'],
            ['This website', 'Shows the board\'s live status and takes your messages.'],
          ]}
        />
      </DocSection>

      <DocSection title="From your keyboard to my wall">
        <div className="flex flex-col">
          <Node name="You" detail="Type a line or draw a picture in the message box." />
          <Arrow label="sent to" />
          <Node name="This website" detail="Checks your message and passes it along with a secret key." />
          <Arrow label="through a secure tunnel into my home" />
          <Node name="My home server" detail="Confirms the key and puts your message in line." />
          <Arrow label="picked up every few seconds by" />
          <Node name="The Board" detail="Plays any new messages, then goes back to what it was doing." />
        </div>
        <DocP>
          The board goes and asks for messages instead of getting interrupted by them. That's on purpose: a new message never cuts off the song or flight on screen, and messages sent close together play back to back.
        </DocP>
      </DocSection>

      <DocSection title="The board talks back">
        <DocP>
          The status panel on the board page is live. Whenever the board switches programs or turns on or off, it tells my home server, which relays that to this site as it happens. So what you see in the browser matches what's on my wall.
        </DocP>
      </DocSection>

      <DocSection title="Only I hold the remote">
        <DocP>
          I can switch programs and turn the board on or off from my own devices. Those controls aren't on this site. Visitors can send messages and nothing else.
        </DocP>
      </DocSection>

      <DocSection title="Under the hood">
        <DocList>
          <li>The home server is a Raspberry Pi 3 running a small API, a message broker (MQTT) and a database (SQLite) as background services.</li>
          <li>The board is a Raspberry Pi 4 and an Adafruit LED Matrix HAT, driven from TypeScript through the open source rpi-rgb-led-matrix library.</li>
          <li>Each program draws about 30 times a second and stops the moment I switch to another one.</li>
          <li>Both Pis start on their own at boot and restart themselves if something crashes.</li>
          <li>The plane data comes from an RTL-SDR USB receiver and antenna on the home server.</li>
        </DocList>
      </DocSection>
    </DocLayout>
  );
}
