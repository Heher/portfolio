import { CloseIcon } from '../icons/CloseIcon';

type ImageModalProps = {
  img: string;
  closeModal: () => void;
};

export const ImageModal: React.FC<ImageModalProps> = ({ img, closeModal }) => {
  return (
    <div className="fixed top-0 left-0 z-50 h-[100vh] w-[100vw] bg-slate-200">
      <div className="relative mx-auto w-full max-w-[var(--max-width)]">
        <button type="button" onClick={closeModal} className="absolute top-[20px] left-[20px]">
          <CloseIcon />
        </button>
        <div className="flex h-[100vh] items-center justify-center px-[30px]">
          <img
            className="h-auto w-full max-w-[600px] border-4 border-solid border-[var(--globe-background)]"
            src={`https://res.cloudinary.com/globe-draft/image/upload/q_30/olympic-visits/${img}`}
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
