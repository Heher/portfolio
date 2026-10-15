import { DocFacts, DocLayout, DocList, DocP, DocSection } from '../../components/board/docs/DocLayout';

export default function BoardFlights() {
  return (
    <div className="mx-auto w-full max-w-[1000px] py-30">
      <title>Flights | The Board | John Heher</title>
      <h3 className="
        mb-20 font-figtree leading-none font-semibold tracking-wide text-better-white
        sm:text-[48px]
      "
      >
        Flights
      </h3>
      <h4 className="
        mx-auto mb-8 max-w-xl font-figtree leading-none font-semibold tracking-wide text-better-white/80
        sm:text-[30px]
      "
      >
        What it shows
      </h4>
      <p className="mx-auto mb-10 max-w-xl font-zilla text-xl/8 text-better-white">
        There are two main parts to the display: a map on the left and a list of flights on the right.
      </p>
      <p className="mx-auto mb-10 max-w-xl font-zilla text-xl/8 text-better-white">
        For the map, it always shows a map of my house in the middle, with the surrounding area around it. If there are any flights in the area, it will show them as dots on the map with their previous locations shown as a tail if that flight is selected.
      </p>
      <p className="mx-auto mb-20 max-w-xl font-zilla text-xl/8 text-better-white">
        The list of flights is a rotating collection of data about the flights that are currently in the area. With the selected flight marked on the map, the details will be displayed to the right which includes altitute, speed, callsign, and origin/destination if that can be found.
      </p>
      <h4 className="
        mx-auto mb-8 max-w-xl font-figtree leading-none font-semibold tracking-wide text-better-white/80
        sm:text-[30px]
      "
      >
        The details
      </h4>
      <p className="mx-auto mb-10 max-w-xl font-zilla text-xl/8 text-better-white">
        The main loop runs every 33ms to allow for smooth scrolling of the list. Within this, it needs to fetch data for the flights in the area, and then origin/destination/airline for found flights if available.
      </p>
      <p className="mx-auto mb-10 max-w-xl font-zilla text-xl/8 text-better-white">
        The main data for flights comes from the ADS-B antenna I have plugged into my home server. That sends JSON data about all flights it can detect. On initialization, the program will fetch the data from that endpoint and then set up an interval to do the same every second.
      </p>
      <p className="mx-auto mb-10 max-w-xl font-zilla text-xl/8 text-better-white">
        This data gives the basic information about each flight, but I use the separate
        {' '}
        <a
          href="https://www.adsbdb.com"
          target="_blank"
          rel="noopener noreferrer"
          className="
            font-semibold text-cta/70 underline
            hover:text-cta/90
          "
        >
          adsbdb
        </a>
        {' '}
        API to add any additional details like origin, destination, and airline. This happens at the same time as the basic data fetch but because I don't want to overuse the external API, I cache any responses for future use. If the same flight number is found in my data, and it is already cached, there is no need to make another external request.
      </p>
      <p className="mx-auto mb-10 max-w-xl font-zilla text-xl/8 text-better-white">
        All of this is compiled into an array that is positioned and displayed using the
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
        library. The only main custom utility I wrote is for displaying the airline logo if it exists. The library doesn't have a built-in image renderer, so I had to implement that myself. The program has a growing list of airline logos that will display if it finds a match.
      </p>
      <p className="mx-auto mb-10 max-w-xl font-zilla text-xl/8 text-better-white">
        Each flight in the array is rendered with a matrix height offset from each other (32 pixels in this case). It will then scroll through all currently displayed flights, waiting five seconds between scrolling again.
      </p>
      <p className="mx-auto mb-10 max-w-xl font-zilla text-xl/8 text-better-white">
        Although I hope to make the map more dynamic in the future, the map is pretty much a static background for now. Centering the coordinates of the location of my ADS-B antenna, it calculates the latitude and longitude borders of the usable map space to determine what should be displayed within the map boundaries. I also manually wrote arrays of coordinates for important roads, waterways, and other landmarks to give the viewer an better sense of the surrounding environment.
      </p>
      <p className="mx-auto mb-10 max-w-xl font-zilla text-xl/8 text-better-white">
        Any flights found within the map boundaries are rendered as white dots on the map. As the flight info list scrolls, the displayed flight info will be marked as selected in the map, turning the dot bright blue and it's previous locations shown as a dark blue trail behind it.
      </p>
      <p className="mx-auto mb-10 max-w-xl font-zilla text-xl/8 text-better-white">
        This trail information is stored in a cache the same way as the flight details, simply adding onto the existing trail for each flight as new location data comes in.
      </p>
    </div>
  );
}
