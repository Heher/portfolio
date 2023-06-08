import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

type FlapProps = {
  letter: string;
  index: number;
};

function Flap({ letter, index }: FlapProps) {
  console.log(letter);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 2000);
  }, [letter]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        className="h-[30px] w-[20px] bg-black text-center leading-[30px] text-white"
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0, transition: { duration: 2 } }}
        exit={{ opacity: 0, transition: { duration: 2 } }}
      >
        {letter.toUpperCase()}
      </motion.span>
    </AnimatePresence>
  );
}

type WordProps = {
  word: string;
};

function Word({ word }: WordProps) {
  const [letters, setLetters] = useState<string[]>([]);

  useEffect(() => {
    setLetters(word.split(''));
  }, [word]);

  return (
    <div className="flex">
      {[...Array(20)].map((number, index) => (
        <Flap letter={letters[index] || ''} index={index} key={index} />
      ))}
    </div>
  );
}

export default Word;
