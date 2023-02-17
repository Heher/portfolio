import { CloseIcon } from '../icons/CloseIcon';

export const ImageModal = ({ img, setSelectedImg }) => {
  return (
    <div className="fixed top-0 left-0 z-50 bg-slate-200 w-[100vw] h-[100vh] flex items-center justify-center">
      <button type="button" onClick={() => setSelectedImg(null)} className="absolute top-[20px] left-[5vw]">
        <CloseIcon />
      </button>
      <img
        className="w-[90vw] h-auto border-4 border-solid border-[var(--globe-background)]"
        src={`https://res.cloudinary.com/globe-draft/image/upload/q_60/olympic-visits/${img}`}
        alt=""
        loading="lazy"
      />
    </div>
  );
};
