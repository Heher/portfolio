// import type { MetaFunction } from '@remix-run/node';
// import { motion } from 'framer-motion';
// import { Suspense, useState } from 'react';
// import useMeasure from 'react-use-measure';
// import { DonutContainer } from '~/components/donut/DonutContainer';

// export const meta: MetaFunction = () => {
//   return [
//     { title: 'Donut | John Heher' },
//     {
//       name: 'description',
//       content: "John Heher's donut"
//     },
//     {
//       name: 'og:title',
//       content: 'Donut | John Heher'
//     },
//     {
//       name: 'og:image',
//       content: '/olympic-cities-og.jpg'
//     }
//   ];
// };

// type IcingColor = {
//   baseColor: string;
//   background: string;
// };

// type ColorButtonProps = {
//   selectedColor: number;
//   color: IcingColor;
//   handleColorChange: (newValue: string, fromInput?: boolean) => void;
// };

// function DonutFallback() {
//   return <div>Loading...</div>;
// }

// const icingColors = [
//   { baseColor: '#e780ce', background: 'bg-[#e780ce]' },
//   { baseColor: '#9667AB', background: 'bg-[#9667AB]' },
//   { baseColor: '#BA98F0', background: 'bg-[#BA98F0]' },
//   { baseColor: '#DF4335', background: 'bg-[#DF4335]' },
//   { baseColor: '#EBEBE8', background: 'bg-[#EBEBE8]' }
// ];

// function ColorButton({ selectedColor, color, handleColorChange }: ColorButtonProps) {
//   const selected = `#${selectedColor.toString(16)}` === color.baseColor.toLowerCase();

//   return (
//     <button
//       // eslint-disable-next-line tailwindcss/classnames-order
//       className={`h-[28px] w-[28px] rounded-full ${color.background} border-4 ${
//         selected ? 'border-slate-400' : 'border-slate-900'
//       }`}
//       type="button"
//       onClick={() => handleColorChange(color.baseColor)}
//     />
//   );
// }

// export default function DonutIndex() {
//   const [pageContainerRef, { width }] = useMeasure({ debounce: 300 });

//   const [color, setColor] = useState<number>(0xe780ce);
//   const [colorInput, setColorInput] = useState<string | undefined>(undefined);

//   function handleColorChange(newValue: string, fromInput?: boolean) {
//     if (fromInput) {
//       setColorInput(newValue);
//       setColor(parseInt(newValue.replace('#', '0x'), 16));
//     }

//     setColor(parseInt(newValue.replace('#', '0x'), 16));
//   }

//   return (
//     <main ref={pageContainerRef} className={`relative h-[100dvh] w-full bg-[var(--nav-background)]`}>
//       <div className="body-container mx-auto h-[100dvh] max-w-[var(--max-width)]">
//         {width && (
//           <motion.div
//             className={`donut-container fixed z-30 h-[100vh] w-full px-[50px] pt-[50px] md:max-h-[800px] lg:max-h-[1000px] lg:max-w-[var(--max-width)]`}
//           >
//             <div className="relative flex h-full justify-end rounded-lg bg-slate-100">
//               <div className="h-[80%] w-[80%]">
//                 <Suspense fallback={<DonutFallback />}>
//                   <DonutContainer color={color} />
//                 </Suspense>
//               </div>
//               <div className="absolute left-0 top-[50%] pl-[50px] text-gray-900">
//                 <h1 className="text-6xl">Donut</h1>
//                 <p className="mt-[20px] max-w-[43%] text-lg text-gray-700">
//                   This is a donut I created all by myself (also with the help of watching multiple YouTube videos over
//                   and over) in Blender. I then <span>expertly</span> exported it here for use in this magnificent
//                   display.
//                 </p>
//                 <div className="mt-[40px] flex w-[300px] justify-between">
//                   {icingColors.map((icingColor, index) => (
//                     <ColorButton
//                       key={index}
//                       selectedColor={color}
//                       color={icingColor}
//                       handleColorChange={handleColorChange}
//                     />
//                   ))}
//                   {/* <input
//                     id="color-input"
//                     type="color"
//                     value={colorInput}
//                     onChange={(event) => handleColorChange(event.target.value, true)}
//                   /> */}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </main>
//   );
// }

export default function DonutContainer() {
  return null;
}
