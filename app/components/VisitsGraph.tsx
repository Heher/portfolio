import * as d3 from 'd3';
import { motion } from 'framer-motion';

const size = 100;
const outerRadius = size / 2 - 1;
const thickness = 10;

const arcGen = d3
  .arc()
  .innerRadius(outerRadius - thickness)
  .outerRadius(outerRadius)
  .cornerRadius(2)
  .startAngle(0)
  .endAngle(Math.PI * 1.6);

const lineGen = d3.line();

// bg: Math.PI * 1.6
// main: Math.PI * arcPercent

const VisitsGraph = ({ title, visits, total }) => {
  const arcPercent = (visits / total) * 1.6;

  let bgArc = arcGen();

  const mainArc = arcGen();

  let d = lineGen([
    [0, 0],
    [100, 100]
  ]);

  return (
    <div>
      <h3 className="text-slate-100 uppercase font-semibold text-[0.9rem] text-center">{title}</h3>
      <svg className="w-[120px] h-[120px] mt-[10px]" viewBox={`0 0 ${size} ${size}`}>
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, type: 'spring' }}
          d={d || ''}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d={bgArc || ''}
          fill="none"
          className={`fill-[var(--flag-box-shadow)] translate-x-[50%] translate-y-[50%] rotate-[215deg]`}
        />
        <path
          d={mainArc || ''}
          className={`${
            title === 'Summer' ? 'fill-[var(--summer-background)]' : 'fill-[var(--winter-background)]'
          } translate-x-[50%] translate-y-[50%] rotate-[215deg]`}
        />
      </svg>
      <p className="text-slate-100 text-center mt-[-90px]">
        <span className="text-[2.3rem]">{visits}</span>
        <span className="ml-[5px]">/ {total}</span>
      </p>
    </div>
  );
};

export default VisitsGraph;
