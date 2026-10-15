export default function BoardSpotify() {
  return (
    <div className="mx-auto w-full max-w-[1000px] py-30">
      <title>Spotify | The Board | John Heher</title>
      <h3 className="
        mb-20 font-figtree leading-none font-semibold tracking-wide text-better-white
        sm:text-[48px]
      "
      >
        Spotify
      </h3>
      <h4 className="
        mx-auto mb-8 max-w-xl font-figtree leading-none font-semibold tracking-wide text-better-white/80
        sm:text-[30px]
      "
      >
        What it shows
      </h4>
      <p className="mx-auto mb-20 max-w-xl font-zilla text-xl/8 text-better-white">
        It shows whatever I'm currently listening to on Spotify, including the album art, song title, artist, and a progress bar.
      </p>
      <h4 className="
        mx-auto mb-8 max-w-xl font-figtree leading-none font-semibold tracking-wide text-better-white/80
        sm:text-[30px]
      "
      >
        The details
      </h4>
      <p className="mx-auto mb-10 max-w-xl font-zilla text-xl/8 text-better-white">
        Running in a loop that updates every second, the program will make a request to the Spotify API to check the currently playing track. If a track is playing, it will update the display with the album art, song title, artist, and progress bar. If no track is playing, it will show "Nothing playing".
      </p>
    </div>
  );
}
