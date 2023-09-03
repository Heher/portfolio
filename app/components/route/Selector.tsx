/* eslint-disable tailwindcss/classnames-order */
// import { useState } from 'react';
import { useTripContext } from '~/routes/trip';
import { getMoveableGlobeContainerRight } from '../globe/globePositioning';
import { myRoute } from '../globe/routeCoordinates';

export function Selector({ width }: { width: number }) {
  const { appState, dispatch } = useTripContext();

  const { selectedRouteLeg } = appState;

  const positionRight = getMoveableGlobeContainerRight(width);

  const totalLegs = myRoute.length;

  function handleLegChange(newLegNum: number) {
    if (newLegNum < 0 || newLegNum > totalLegs) {
      return;
    }

    dispatch({ type: 'SELECTED_ROUTE_LEG', selectedRouteLeg: newLegNum });
  }

  return (
    <div
      className={`route-selector-container fixed bottom-0 right-[${positionRight}] z-50 flex h-[100px] w-full items-center justify-center md:max-h-[800px] lg:max-h-[1000px] lg:max-w-[var(--max-width)] text-xl font-semibold uppercase text-[#e0e0e0]`}
    >
      <div className="grid gap-[10px] grid-cols-[40px_1fr_40px] items-center w-[300px]">
        <button
          className="h-[25px] w-[40px] px-[10px] py-[5px]"
          type="button"
          onClick={() => handleLegChange(selectedRouteLeg - 1)}
        >
          <svg className="" version="1.1" viewBox="100 80 500 400" xmlns="http://www.w3.org/2000/svg">
            <path
              fill={selectedRouteLeg > 0 ? '#dddddd' : '#777777'}
              d="m296.5 179.83c9.1094-9.1133 9.1094-23.887 0-32.996-9.1133-9.1133-23.887-9.1133-33 0l-81.656 81.656c0.003906-0.003907-0.003906 0.003906 0 0l-35.008 35.008c-4.1523 4.1523-6.4141 9.4766-6.7812 14.906-0.10547 1.5156-0.0625 3.0469 0.13281 4.5703 0.56641 4.4258 2.4023 8.7266 5.5117 12.305 0.40234 0.46484 0.82031 0.91016 1.2578 1.3398l116.54 116.54c9.1133 9.1133 23.887 9.1133 33 0 9.1094-9.1094 9.1094-23.883 0-32.996l-76.836-76.836h317c12.887 0 23.332-10.445 23.332-23.332s-10.445-23.332-23.332-23.332h-317z"
            />
          </svg>
        </button>
        <p className="text-center text-[16px] leading-5">
          {selectedRouteLeg === 0 ? 'Overall' : myRoute[selectedRouteLeg - 1].description}
        </p>
        <button
          className="h-[25px] w-[40px] px-[10px] py-[5px] rotate-180"
          type="button"
          onClick={() => handleLegChange(selectedRouteLeg + 1)}
        >
          <svg className="" version="1.1" viewBox="100 80 500 400" xmlns="http://www.w3.org/2000/svg">
            <path
              fill={selectedRouteLeg < totalLegs ? '#dddddd' : '#777777'}
              d="m296.5 179.83c9.1094-9.1133 9.1094-23.887 0-32.996-9.1133-9.1133-23.887-9.1133-33 0l-81.656 81.656c0.003906-0.003907-0.003906 0.003906 0 0l-35.008 35.008c-4.1523 4.1523-6.4141 9.4766-6.7812 14.906-0.10547 1.5156-0.0625 3.0469 0.13281 4.5703 0.56641 4.4258 2.4023 8.7266 5.5117 12.305 0.40234 0.46484 0.82031 0.91016 1.2578 1.3398l116.54 116.54c9.1133 9.1133 23.887 9.1133 33 0 9.1094-9.1094 9.1094-23.883 0-32.996l-76.836-76.836h317c12.887 0 23.332-10.445 23.332-23.332s-10.445-23.332-23.332-23.332h-317z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
