const ModalContainer = ({ city, handleCitySelection }) => {
  return (
    <div className="city-modal">
      <button type="button" className="close-button" onClick={() => handleCitySelection(null)}>
        &times;
      </button>
      <h2>{city.name}</h2>
    </div>
  );
};

export default ModalContainer;
