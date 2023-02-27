import BackButton from './BackButton';

const BackButtonContainer = ({ routeSelected, moveableGlobe, handleBackButton, width, isCityPage }) => {
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
