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

export function statusColor(amountCompleted: number, totalOlympiads: number) {
  if (amountCompleted === totalOlympiads) {
    return 'border-[var(--positive)]';
  }

  if (amountCompleted < totalOlympiads && amountCompleted > 0) {
    return 'border-[#FFA566]';
  }

  return 'border-[var(--negative)]';
}
