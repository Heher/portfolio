import { use } from 'react';
import { Link } from 'react-router';

import { Arrow } from '~/icons/Arrow';
import { TripPageContext } from '~/utils/context';

type BackButtonProps = {
  handleBackButton?: () => void;
  isLink?: boolean | null;
};

function BackButton({ handleBackButton, isLink = false }: BackButtonProps) {
  const { selectedRouteLeg, moveableGlobe } = use(TripPageContext);

  return (
    <div
      className={`
        fixed
        ${
    selectedRouteLeg !== null || moveableGlobe ? 'z-50' : 'z-40'
    }
        top-0 left-[50%] mx-auto h-[40px] w-full max-w-(--max-width) translate-x-[-50%]
      `}
    >
      {isLink
        ? (
            <Link
              className="
                mt-[10px] ml-[10px] block h-[30px] w-[45px] px-[10px] py-[5px] transition
                hover:-translate-x-1
              "
              to="/trip"
              prefetch="intent"
            >
              <Arrow fill="#dddddd" />
            </Link>
          )
        : (
            <button
              type="button"
              className="
                mt-[10px] ml-[10px] block h-[30px] w-[45px] px-[10px] py-[5px] transition
                hover:-translate-x-1
              "
              onClick={handleBackButton}
            >
              <Arrow fill="#dddddd" />
            </button>
          )}
    </div>
  );
}

export default BackButton;
