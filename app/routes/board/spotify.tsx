import { BoardHeader, BoardSubhead, BoardText } from '@/app/components/board/shared';

export default function BoardSpotify() {
  return (
    <div className="
      mx-auto w-full max-w-250 py-20
      sm:py-30
    "
    >
      <title>Spotify | The Board | John Heher</title>
      <BoardHeader>
        Spotify
      </BoardHeader>
      <BoardSubhead>
        What it shows
      </BoardSubhead>
      <BoardText>
        It shows whatever I'm currently listening to on Spotify, including the album art, song title, artist, and a progress bar.
      </BoardText>
      <BoardSubhead className="
        mt-15
        sm:mt-20
      "
      >
        The details
      </BoardSubhead>
      <BoardText>
        Running in a loop that updates every second, the program will make a request to the Spotify API to check the currently playing track. If a track is playing, it will update the display with the album art, song title, artist, and progress bar. If no track is playing, it will show "Nothing playing".
      </BoardText>
    </div>
  );
}
