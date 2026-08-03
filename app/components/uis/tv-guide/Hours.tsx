import { useMemo } from 'react';

import { hourWidth } from './utils';

function createHours() {
  const hours = [];

  // hours.push(
  //   <div key="spacer" className="w-[220px] shrink-0 bg-gray-400" />,
  // );

  for (let i = 0; i < 48; i++) {
    const startOfHour = i === 0 || i % 2 === 0;

    const hour = (Math.floor(i / 2)).toString().padStart(2, '0');
    const minutes = startOfHour ? '00' : '30';

    const time = `${hour}:${minutes}`;

    hours.push(
      <div
        key={i}
        className="flex shrink-0 items-center justify-center border-l border-gray-50 bg-gray-800 text-gray-50"
        style={{ width: `${hourWidth / 2}px`, height: '100%' }}
      >
        {time}
      </div>,
    );
  }

  return hours;
}

export default function Hours() {
  const hours = useMemo(() => {
    return createHours();
  }, []);

  return (
    <div className="bg-gray-800 pl-37.5">
      <div className="flex h-14">{hours}</div>
    </div>
  );
}
