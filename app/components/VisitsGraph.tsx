import type { DefaultArcObject } from 'd3';

import * as d3 from 'd3';
import { animate, motion, useMotionValue, useTransform } from 'motion/react';
import { use, useEffect, useRef } from 'react';

import { TripPageContext } from '~/utils/context';

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

export default function VisitsGraph({ title, visits, total }: VisitsGraphProps) {
  const { loaded } = use(TripPageContext);
  const svgRef = useRef<SVGSVGElement>(null);

  const count = useMotionValue(loaded ? visits : 0);
  const rounded = useTransform(count, latest => Math.round(latest));

  const arcPercent = visits / total;

  const bgArc = arc({ endAngle: 2 * Math.PI * 0.8 } as DefaultArcObject);
  const mainArc = arc({ endAngle: 0 } as DefaultArcObject);

  useEffect(() => {
    if (svgRef.current) {
      const path = d3.select(`.main-arc-${title}`);

      if (!loaded) {
        path
          .transition()
          .duration(700)
          .attrTween('d', () => {
            const interpolate = d3.interpolate(0, 2 * 0.8 * Math.PI * arcPercent);

            return (t) => {
              const endAngle = interpolate(t);
              const arcInter = arc({ endAngle } as DefaultArcObject);
              return arcInter ?? '';
            };
          });
      }
      else {
        path.attr('d', arc({ endAngle: 2 * 0.8 * Math.PI * arcPercent } as DefaultArcObject));
      }

      const controls = animate(count, visits, { delay: 0.3 });

      return controls.stop;
    }
  }, [arcPercent, title, loaded, count, visits]);

  if (mainArc === null || bgArc === null)
    return null;

  return (
    <div className="relative">
      <h3 className="text-center text-[0.9rem] font-semibold text-slate-100 uppercase">{title}</h3>
      <svg ref={svgRef} className="mt-[10px] block w-[120px]" viewBox={`0 0 ${size} ${size}`} width={120} height={120}>
        <g className="translate-1/2 rotate-215">
          <path className="fill-(--flag-box-shadow)" d={bgArc} fill="none" />
          <path
            className={`
              main-arc-${title}
              ${title === 'Summer' ? 'fill-summer-background' : 'fill-winter-background'}
            `}
            d={mainArc}
          />
        </g>
      </svg>
      <p className="absolute top-[70px] left-1/2 w-full -translate-x-2/4 text-center text-slate-100">
        <motion.span className="text-[2.3rem] leading-none">{rounded}</motion.span>
        <span className="ml-[5px]">
          /
          {total}
        </span>
      </p>
    </div>
  );
}
