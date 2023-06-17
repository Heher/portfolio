import { Link } from '@remix-run/react';
import { Arrow } from '../icons/Arrow';

type BackButtonProps = {
  routeSelected: boolean;
  globeMoveable: boolean;
  handleBackButton?: () => void;
  isLink?: boolean | null;
};

function BackButton({ routeSelected, globeMoveable, handleBackButton, isLink = false }: BackButtonProps) {
  return (
    <div
      className={`fixed ${
        routeSelected || globeMoveable ? 'z-50' : 'z-40'
      } top-0 left-[50%] mx-auto h-[40px] w-full max-w-[var(--max-width)] translate-x-[-50%]`}
    >
      {isLink ? (
        <Link
          className="mt-[10px] ml-[10px] block h-[30px] w-[45px] px-[10px] py-[5px] transition hover:-translate-x-1"
          to={'/trip'}
          prefetch="intent"
        >
          <Arrow fill="#dddddd" />
        </Link>
      ) : (
        <button
          type="button"
          className="mt-[10px] ml-[10px] block h-[30px] w-[45px] px-[10px] py-[5px] transition hover:-translate-x-1"
          onClick={handleBackButton}
        >
          <Arrow fill="#dddddd" />
        </button>
      )}
    </div>
  );
}

export default BackButton;
