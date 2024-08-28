import { motion } from 'framer-motion';

export default function ExpandIcon({ className, delay }: { className?: string }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 50"
      className={className}
      initial={{ y: -5 }}
      animate={{ y: 5 }}
      transition={{ repeat: Infinity, repeatType: 'reverse', delay, duration: 1.5 }}
    >
      <g>
        <polygon points="91.247,57.092 91.283,57.072 91.283,29.941 49.815,0 8.717,29.602 8.717,56.738 49.791,27.157    " />
      </g>
    </motion.svg>
  );
}
