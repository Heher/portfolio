import { DocFacts, DocLayout, DocList, DocP, DocSection } from '../../components/board/docs/DocLayout';

export default function BoardFlights() {
  return (
    <DocLayout
      title="Flights"
      summary="A live radar for the sky over Austin, with a card for every plane that flies by."
    >
      <DocSection title="What it shows">
        <DocP>
          The left of the board is a little map: the highways, the lake, the airport, my house, and every aircraft nearby as a moving dot. On the right, a card for one flight at a time scrolls through, about five seconds each.
        </DocP>
        <DocList>
          <li>The airline's logo, or an icon for the type of aircraft</li>
          <li>The flight number and where it's flying from and to</li>
          <li>Speed, altitude, whether it's climbing or descending, and which way it's heading</li>
          <li>The path the plane has flown across the map</li>
        </DocList>
        <DocP>
          When the sky is empty, the board says so.
        </DocP>
      </DocSection>

      <DocSection title="Where the planes come from">
        <DocP>
          Airplanes constantly broadcast their position over radio. A small antenna and USB receiver on my home server pick those signals up, so the board is showing real aircraft within a few dozen miles, not a feed from the internet.
        </DocP>
        <DocP>
          The radio signal doesn't say who owns the plane or where it's headed, so the board looks that up online and remembers the answer. If a lookup is slow or fails, it moves on and tries again later, so the display never freezes waiting.
        </DocP>
      </DocSection>

      <DocSection title="Building the map">
        <DocP>
          There's no map image here. Each pixel stands for roughly half a kilometer, centered on my house, and the roads and lake are drawn as lines between coordinates I entered by hand. Every plane's latitude and longitude is converted into a spot on that 100×32 grid as it arrives.
        </DocP>
      </DocSection>

      <DocSection title="Picking who's next">
        <DocP>
          Each plane gets a turn in a queue, no more than twice in a row so a busy sky doesn't repeat itself. If a plane leaves the area mid-card, its turn ends early and the next one scrolls in. Aircraft without an airline logo get an icon that matches their type: light plane, airliner, heavy jet, fighter or helicopter.
        </DocP>
      </DocSection>

      <DocSection title="A small to-do list">
        <DocP>
          Whenever a plane shows up from an airline I haven't drawn a logo for, the board writes it down. It's a running list of what to pixel-art next.
        </DocP>
      </DocSection>
    </DocLayout>
  );
}
