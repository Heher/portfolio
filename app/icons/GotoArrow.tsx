import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';

type Props = {
  className?: string;
};

type Ref = ForwardedRef<SVGSVGElement>;

const GotoArrow = forwardRef<SVGSVGElement, Props>(function Arrow(props: Props, ref: Ref) {
  return (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="11 11 12 12" className={props.className}>
      <path d="M17.172,16l-5.586,5.586a2,2,0,0,0,2.828,2.828l7-7a2,2,0,0,0,0-2.828l-7-7a2,2,0,0,0-2.828,2.828Z" />
    </svg>
  );
});

export default GotoArrow;
