type BackButtonProps = {
  routeSelected: boolean;
  globeMoveable: boolean;
  handleBackButton: () => void;
};

const BackButton = ({ routeSelected, globeMoveable, handleBackButton }: BackButtonProps) => {
  return (
    <div
      className={`fixed ${
        routeSelected || globeMoveable ? 'z-50' : 'z-40'
      } top-0 left-[50%] mx-auto h-[40px] w-full max-w-[var(--max-width)] translate-x-[-50%]`}
    >
      <button
        type="button"
        onClick={handleBackButton}
        className="mt-[10px] ml-[10px] h-[30px] w-[45px] px-[10px] py-[5px] transition hover:-translate-x-1"
      >
        <svg className="" version="1.1" viewBox="100 80 500 400" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#dddddd"
            d="m296.5 179.83c9.1094-9.1133 9.1094-23.887 0-32.996-9.1133-9.1133-23.887-9.1133-33 0l-81.656 81.656c0.003906-0.003907-0.003906 0.003906 0 0l-35.008 35.008c-4.1523 4.1523-6.4141 9.4766-6.7812 14.906-0.10547 1.5156-0.0625 3.0469 0.13281 4.5703 0.56641 4.4258 2.4023 8.7266 5.5117 12.305 0.40234 0.46484 0.82031 0.91016 1.2578 1.3398l116.54 116.54c9.1133 9.1133 23.887 9.1133 33 0 9.1094-9.1094 9.1094-23.883 0-32.996l-76.836-76.836h317c12.887 0 23.332-10.445 23.332-23.332s-10.445-23.332-23.332-23.332h-317z"
          />
        </svg>
      </button>
    </div>
  );
};

export default BackButton;
