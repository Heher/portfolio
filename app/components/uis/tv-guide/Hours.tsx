import { useMemo } from 'react';

import { hourWidth } from './utils';

function createHours() {
  const hours = [];

  // hours.push(
  //   <div key="spacer" className="w-[220px] shrink-0 bg-gray-400" />,
  // );

  for (let i = 0; i < 24; i++) {
    const hour = `${i.toString().padStart(2, '0')}:00`;
    hours.push(
      <div
        key={i}
        className="flex shrink-0 items-end bg-gray-400 pb-2 pl-3 text-white"
        style={{ width: `${hourWidth}px`, height: '100%' }}
      >
        {hour}
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
    <div className="ml-[150px]">
      <div className="flex h-14">{hours}</div>
    </div>
  );
}
