import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type FlapProps = {
  letter: string;
  index: number;
};

function Flap({ letter, index }: FlapProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, [letter]);

  return (
    <motion.span
      className="h-[30px] w-[20px] bg-black text-center leading-[30px] text-white"
      key={`${letter}-${index}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 2 } }}
    >
      {letter.toUpperCase()}
    </motion.span>
  );
}

export default Flap;
