export default function PostgraphileIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 1200 1200">
      <g className="ears">
        <path fill="currentColor" d="M100 615L25 360 260 25l455 590z" className="seg1" />
        <path fill="currentColor" d="M25 360L260 25l340 105 115 485z" className="seg2" />
        <path fill="currentColor" d="M260 25l340 105L940 25 715 615z" className="seg1" />
        <path fill="currentColor" d="M600 130L940 25l235 335-460 255z" className="seg1" />
        <path fill="currentColor" d="M940 25l235 335-75 255H715z" className="seg2" />
        <path fill="currentColor" d="M1175 360l-75 255-500 440 115-440z" className="seg1" />
        <path fill="currentColor" d="M1100 615l-500 440-500-440h615z" className="seg1" />
        <path fill="currentColor" d="M600 1055L100 615 25 360l690 255z" className="seg1" />
        <path fill="currentColor" d="M100 615L25 360l690 255z" className="seg1" />
      </g>
      <g className="face">
        <path
          fill="#fefefe"
          stroke="#082744"
          strokeLinejoin="round"
          strokeWidth="8"
          d="M375 740l85 55-135 105z"
          className="tusk left-tusk"
        />
        <path
          fill="#fefefe"
          stroke="#082744"
          strokeLinejoin="round"
          strokeWidth="8"
          d="M825 740l-85 55 135 105z"
          className="tusk right-tusk"
        />
        <path fill="currentColor" d="M325 300L490 96h220L600 450z" className="seg2 forehead-left" />
        <path fill="currentColor" d="M490 96h220l165 204-275 150z" className="seg1 forehead-top" />
        <path fill="currentColor" d="M710 96l165 204v425L600 450z" className="seg3 forehead-right no-stroke" />
        <path fill="currentColor" d="M875 300v425L710 835 600 450z" className="seg4 right-eye-area no-stroke" />
        <path fill="currentColor" d="M875 725L710 835l-110 295V450z" className="seg5 face-bottom-right no-stroke" />
        <path
          fill="currentColor"
          d="M710 835v240l-110 55-110-295 110-385z"
          className="seg3 no-stroke trunk-highlight-right"
        />
        <path
          fill="currentColor"
          d="M600 1130l-110-55V835L325 725l275-275z"
          className="seg2 no-stroke trunk-highlight-left"
        />
        <path fill="currentColor" d="M490 835L325 725V300l275 150z" className="seg3 face-bottom-left no-stroke" />
        <path fill="currentColor" d="M325 725V300l275 150z" className="seg1 left-eye-area no-stroke" />
        <path
          fill="none"
          stroke="#082744"
          strokeLinejoin="round"
          strokeWidth="8"
          d="M490 96h220l165 204v425L710 835v240l-110 55-110-55V835L325 725V300z"
          className="entire-face stroke-only"
        />
        <path fill="#fefefe" d="M385 415l130 40-130 50z" className="eye left-eye" />
        <path fill="#fefefe" d="M815 415l-130 40 130 50z" className="eye right-eye" />
      </g>
    </svg>
  );
}
