import { cn } from '@/lib/utils';

type StatusTagProps = {
  text: string;
};

type StatusColors = {
  container: string;
  icon: string;
};

const statusColors: Record<string, StatusColors> = {
  Processing: {
    container: 'bg-amber-50/50 border-amber-800 text-amber-800',
    icon: 'bg-amber-400',
  },
  Shipped: {
    container: 'bg-blue-50/80 border-blue-800 text-blue-800',
    icon: 'bg-blue-500',
  },
  Delivered: {
    container: 'bg-green-50/50 border-green-800 text-green-800',
    icon: 'bg-green-600',
  },
};

export default function StatusTag({ text }: StatusTagProps) {
  return (
    <div className={cn(`flex w-32.5 items-center gap-2 rounded-sm border px-3 py-2 text-sm`, statusColors[text].container)}>
      <span className={cn(`size-3 rounded-full`, statusColors[text].icon)} />
      {text}
    </div>
  );
}
