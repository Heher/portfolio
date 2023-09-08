import { Link } from '@remix-run/react';
import { Arrow } from '../icons/Arrow';
import { TripPageContext } from '~/routes/trip';
import { useContext } from 'react';

type BackButtonProps = {
  handleBackButton?: () => void;
  isLink?: boolean | null;
};

function BackButton({ handleBackButton, isLink = false }: BackButtonProps) {
  const { selectedRouteLeg, moveableGlobe } = useContext(TripPageContext);

  return (
    <div
      className={`fixed ${
        selectedRouteLeg !== null || moveableGlobe ? 'z-50' : 'z-40'
      } left-[50%] top-0 mx-auto h-[40px] w-full max-w-[var(--max-width)] translate-x-[-50%]`}
    >
      {isLink ? (
        <Link
          className="ml-[10px] mt-[10px] block h-[30px] w-[45px] px-[10px] py-[5px] transition hover:-translate-x-1"
          to={'/trip'}
          prefetch="intent"
        >
          <Arrow fill="#dddddd" />
        </Link>
      ) : (
        <button
          type="button"
          className="ml-[10px] mt-[10px] block h-[30px] w-[45px] px-[10px] py-[5px] transition hover:-translate-x-1"
          onClick={handleBackButton}
        >
          <Arrow fill="#dddddd" />
        </button>
      )}
    </div>
  );
}

export default BackButton;
