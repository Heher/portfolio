import { TripPageContext } from '~/routes/trip';
import BackButton from './BackButton';
import { useContext } from 'react';

type BackButtonContainerProps = {
  handleBackButton: () => void;
  isCityPage: RegExpMatchArray | null;
};

const BackButtonContainer = ({ handleBackButton, isCityPage }: BackButtonContainerProps) => {
  const { routeSelected, moveableGlobe, width } = useContext(TripPageContext);

  return (
    <>
      <div
        className={`globe-background fixed left-0 top-0 w-full ${width < 768 && 'mobile'} ${
          routeSelected || moveableGlobe ? 'route-selected z-40 h-[50px]' : '-z-10 h-[50vh]'
        }`}
      ></div>
      {isCityPage && !moveableGlobe ? (
        <BackButton handleBackButton={handleBackButton} isLink />
      ) : (
        <BackButton handleBackButton={handleBackButton} />
      )}
    </>
  );
};

export default BackButtonContainer;
