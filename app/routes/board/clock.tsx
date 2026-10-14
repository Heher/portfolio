import { DocFacts, DocLayout, DocP, DocSection } from '../../components/board/docs/DocLayout';

export default function BoardClock() {
  return (
    <DocLayout
      title="Clock"
      summary="The board's resting state: the time, in big blue digits."
    >
      <DocSection title="What it shows">
        <DocP>
          Hours, minutes and seconds across the full width of the board, ticking once a second. It's the simplest program, and the one I glance at most.
        </DocP>
        <DocFacts
          rows={[
            ['Format', '24-hour time'],
            ['Color', 'Blue'],
            ['Updates', 'Every second'],
          ]}
        />
      </DocSection>

      <DocSection title="The details">
        <DocP>
          Everything on the board is drawn pixel by pixel, so even a clock needs some care. The three number groups are spaced by hand so they sit evenly, and the colons are drawn as tiny squares instead of text so they never wobble when the digits change.
        </DocP>
      </DocSection>
    </DocLayout>
  );
}
