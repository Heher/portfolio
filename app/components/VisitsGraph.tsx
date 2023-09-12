import * as d3 from 'd3';
import type { DefaultArcObject } from 'd3';
import { useEffect, useRef } from 'react';
import { useTripContext } from '~/routes/trip';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';

const size = 100;
const outerRadius = size / 2 - 1;
const thickness = 10;

const arc = d3
  .arc()
  .innerRadius(outerRadius - thickness)
  .outerRadius(outerRadius)
  .cornerRadius(2)
  .startAngle(0)
  .endAngle(({ endAngle }) => endAngle);

type VisitsGraphProps = {
  title: string;
  visits: number;
  total: number;
};

const VisitsGraph = ({ title, visits, total }: VisitsGraphProps) => {
  const { appState } = useTripContext();
  const { loaded } = appState;
  const svgRef = useRef<SVGSVGElement>(null);

  const count = useMotionValue(loaded ? visits : 0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  const arcPercent = visits / total;

  const bgArc = arc({ endAngle: 2 * Math.PI * 0.8 } as DefaultArcObject);
  const mainArc = arc({ endAngle: 0 } as DefaultArcObject);

  useEffect(() => {
    if (svgRef?.current) {
      const path = d3.select(`.main-arc-${title}`);

      if (!loaded) {
        path
          .transition()
          .duration(700)
          .attrTween('d', function () {
            const interpolate = d3.interpolate(0, 2 * 0.8 * Math.PI * arcPercent);

            return (t) => {
              const endAngle = interpolate(t);
              const arcInter = arc({ endAngle } as DefaultArcObject);
              return arcInter || '';
            };
          });
      } else {
        path.attr('d', arc({ endAngle: 2 * 0.8 * Math.PI * arcPercent } as DefaultArcObject));
      }

      const controls = animate(count, visits, { delay: 0.3 });

      return controls.stop;
    }
  }, [arcPercent, title, loaded, count, visits]);

  if (mainArc === null || bgArc === null) return null;

  return (
    <div className="relative">
      <h3 className="text-center text-[0.9rem] font-semibold uppercase text-slate-100">{title}</h3>
      <svg ref={svgRef} className="mt-[10px] block w-[120px]" viewBox={`0 0 ${size} ${size}`} width={120} height={120}>
        <g className="translate-x-[50%] translate-y-[50%] rotate-[215deg]">
          <path className="fill-[var(--flag-box-shadow)]" d={bgArc} fill="none" />
          <path
            className={`main-arc-${title} ${
              title === 'Summer' ? 'fill-[var(--summer-background)]' : 'fill-[var(--winter-background)]'
            }`}
            d={mainArc}
          />
        </g>
      </svg>
      <p className="absolute left-1/2 top-[70px] w-full -translate-x-2/4 text-center text-slate-100">
        <motion.span className="text-[2.3rem] leading-none">{rounded}</motion.span>
        <span className="ml-[5px]">/ {total}</span>
      </p>
    </div>
  );
};

export default VisitsGraph;
