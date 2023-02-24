export function cityStatus(olympiads, visits): { amountCompleted: number; totalOlympiads: number } {
  let amountCompleted = 0;

  olympiads.forEach((olympiad) => {
    const visit = visits[olympiad.year.toString()]?.[olympiad.olympiadType.toLowerCase()];

    if (visit) amountCompleted++;
  });

  return {
    amountCompleted,
    totalOlympiads: olympiads.length
  };
}

export function statusColor(amountCompleted: number, totalOlympiads: number, card = false) {
  let color = '[var(--negative)]';

  if (amountCompleted === totalOlympiads) {
    color = '[var(--positive)]';
  }

  if (amountCompleted < totalOlympiads && amountCompleted > 0) {
    color = '[#FFA566]';
  }

  if (card) {
    return `bg-${color};`;
  }

  return `border-${color}`;
}
