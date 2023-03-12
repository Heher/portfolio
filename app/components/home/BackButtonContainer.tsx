import BackButton from './BackButton';

type BackButtonContainerProps = {
  routeSelected: boolean;
  moveableGlobe: boolean;
  handleBackButton: () => void;
  width: number;
  isCityPage: RegExpMatchArray | null;
};

const BackButtonContainer = ({
  routeSelected,
  moveableGlobe,
  handleBackButton,
  width,
  isCityPage
}: BackButtonContainerProps) => {
  return (
    <>
      <div
        className={`globe-background fixed top-0 left-0 w-full ${width < 768 && 'mobile'} ${
          routeSelected || moveableGlobe ? 'route-selected z-40 h-[50px]' : 'z-10 h-[50vh]'
        }`}
      ></div>
      {isCityPage && !moveableGlobe ? (
        <BackButton
          routeSelected={routeSelected}
          globeMoveable={moveableGlobe}
          handleBackButton={handleBackButton}
          isLink
        />
      ) : (
        <BackButton routeSelected={routeSelected} globeMoveable={moveableGlobe} handleBackButton={handleBackButton} />
      )}
    </>
  );
};

export default BackButtonContainer;
