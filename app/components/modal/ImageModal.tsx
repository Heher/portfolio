import Close from '~/icons/Close';

type ImageModalProps = {
  img: string;
  closeModal: () => void;
};

export const ImageModal: React.FC<ImageModalProps> = ({ img, closeModal }) => {
  return (
    <div className="fixed left-0 top-0 z-50 h-[100vh] w-[100vw] bg-slate-200">
      <div className="relative mx-auto w-full max-w-[var(--max-width)]">
        <button type="button" onClick={closeModal} className="absolute left-[20px] top-[20px]">
          <Close className="fill-[var(--globe-background)]" />
        </button>
        <div className="flex h-[100vh] items-center justify-center px-[30px]">
          <img
            className="h-auto w-full max-w-[600px] border-4 border-solid border-[var(--globe-background)]"
            src={`https://res.cloudinary.com/globe-draft/image/upload/w_600,c_scale/q_auto/olympic-visits/${img}`}
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
