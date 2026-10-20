export default function HeaderTech({ tech }: { tech: string }) {
  return (
    <span className="
      rounded-full border border-[oklch(0.2736_0.077_45.81)]/60 bg-subtitle/20 px-2 py-1 text-sm font-medium text-[oklch(0.2736_0.077_45.81)]
      sm:px-3 sm:py-2 sm:text-sm
    "
    >
      {tech}
    </span>
  );
}
