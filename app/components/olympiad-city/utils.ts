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

//* Not sure why this isn't working with variables
//* but I had to change it to hex values to get it to work
// export function statusColor(amountCompleted: number, totalOlympiads: number, card = false) {
//   let color = '[color:var(--negative)]';

//   if (amountCompleted === totalOlympiads) {
//     color = '[color:var(--positive)]';
//   }

//   if (amountCompleted < totalOlympiads && amountCompleted > 0) {
//     color = '[#FFA566]';
//   }

//   if (card) {
//     return `bg-${color}`;
//   }

//   return `border-${color}`;
// }

export function statusColor(amountCompleted: number, totalOlympiads: number, card = false) {
  if (amountCompleted === totalOlympiads) {
    return 'positive';
  }

  if (amountCompleted < totalOlympiads && amountCompleted > 0) {
    return 'incomplete';
  }

  return `negative`;
}
