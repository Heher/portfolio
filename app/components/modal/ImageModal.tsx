import { CloseIcon } from '../icons/CloseIcon';

export const ImageModal = ({ img, closeModal }) => {
  return (
    <div className="fixed top-0 left-0 z-50 flex h-[100vh] w-[100vw] items-center justify-center bg-slate-200">
      <button type="button" onClick={closeModal} className="absolute top-[20px] left-[5vw]">
        <CloseIcon />
      </button>
      <img
        className="h-auto w-[90vw] border-4 border-solid border-[var(--globe-background)]"
        src={`https://res.cloudinary.com/globe-draft/image/upload/q_30/olympic-visits/${img}`}
        alt=""
        loading="lazy"
      />
    </div>
  );
};
