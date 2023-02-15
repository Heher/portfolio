import * as d3 from 'd3';

const VisitsGraph = ({ title, visits, total }) => {
  const size = 100;
  const outerRadius = size / 2 - 1;
  const thickness = 10;

  const arcPercent = (visits / total) * 1.6;

  let bgArc = d3
    .arc()
    .startAngle(0)
    .endAngle(Math.PI * 1.6)
    .innerRadius(outerRadius - thickness)
    .outerRadius(outerRadius);

  let mainArc = d3
    .arc()
    .startAngle(0)
    .endAngle(Math.PI * arcPercent)
    .innerRadius(outerRadius - thickness)
    .outerRadius(outerRadius);

  return (
    <div>
      <h3 className="text-slate-100 uppercase font-semibold text-[0.9rem] text-center">{title}</h3>
      <svg className="w-[120px] h-[120px] mt-[10px]" viewBox={`0 0 ${size} ${size}`}>
        <path
          d={bgArc()}
          fill="none"
          className={`fill-[var(--flag-box-shadow)] translate-x-[50%] translate-y-[50%] rotate-[215deg]`}
        />
        <path
          d={mainArc()}
          fill="none"
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
