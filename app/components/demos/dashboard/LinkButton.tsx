import { ChevronRight } from 'lucide-react';

type LinkButtonProps = {
  text: string;
};

export default function LinkButton({ text }: LinkButtonProps) {
  return (
    <button
      type="button"
      className="
        flex cursor-pointer items-center text-left text-sm font-semibold text-blue-800
        hover:text-blue-600
      "
    >
      {text}
      <ChevronRight size={18} />
    </button>
  );
}
