import { DocLayout, DocList, DocP, DocSection } from '../../components/board/docs/DocLayout';

export default function BoardSpotify() {
  return (
    <DocLayout
      title="Spotify"
      summary="Whatever I'm listening to, with the album art, on the wall."
    >
      <DocSection title="What it shows">
        <DocList>
          <li>The album cover, shrunk down to a 28×28 pixel mosaic</li>
          <li>The song title in large letters, with the album and artist below</li>
          <li>A green progress bar that fills as the song plays</li>
          <li>A simple "nothing playing" screen when the music stops</li>
        </DocList>
        <DocP>
          Long titles scroll sideways so they always fit, and each new song starts from the beginning of its title.
        </DocP>
      </DocSection>

      <DocSection title="How it works">
        <DocP>
          The board checks Spotify once a second to see what's playing, and it only ever sees my own account. It downloads each album cover once, turns it into pixels, and reuses it for the whole song.
        </DocP>
      </DocSection>

      <DocSection title="Signing in once">
        <DocP>
          Spotify wants a login before it shares anything. The board handles that a single time, then keeps itself signed in in the background. After that it never needs me to touch it again.
        </DocP>
      </DocSection>
    </DocLayout>
  );
}
