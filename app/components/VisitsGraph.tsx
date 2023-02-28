import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

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

const VisitsGraph = ({ title, visits, total }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const arcPercent = visits / total;

  const bgArc = arc({ endAngle: 2 * Math.PI * 0.8 });
  const mainArc = arc({ endAngle: 0 });

  useEffect(() => {
    if (svgRef?.current) {
      const path = d3.select(`.main-arc-${title}`);

      path
        .transition()
        .duration(1000)
        .attrTween('d', function () {
          const interpolate = d3.interpolate(0, 2 * 0.8 * Math.PI * arcPercent);

          return (t) => {
            const endAngle = interpolate(t);
            return arc({ endAngle });
          };
        });
    }
  }, []);

  return (
    <div>
      <h3 className="text-center text-[0.9rem] font-semibold uppercase text-slate-100">{title}</h3>
      <svg ref={svgRef} className="mt-[10px] h-[120px] w-[120px]" viewBox={`0 0 ${size} ${size}`}>
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
      <p className="mt-[-90px] text-center text-slate-100">
        <span className="text-[2.3rem]">{visits}</span>
        <span className="ml-[5px]">/ {total}</span>
      </p>
    </div>
  );
};

export default VisitsGraph;
