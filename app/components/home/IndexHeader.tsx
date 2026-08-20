import { motion } from 'motion/react';

import Socials from './Socials';

export default function IndexHeader() {
  return (
    <div className="relative overflow-hidden bg-linear-[160deg] from-header-top to-header-bottom">
      <div className="
        relative mx-auto max-w-275 overflow-hidden
        sm:overflow-visible
      "
      >
        <motion.div
          className="absolute -bottom-20 left-0 z-1 h-[90%] w-full rounded-2xl bg-linear-to-t from-better-white/40 via-better-white to-better-white/40 blur-3xl"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '100%', opacity: [0, 1, 0] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
        />
        <div className="
          relative flex flex-col-reverse pt-8
          sm:flex-row sm:rounded-bl-3xl sm:pt-45
        "
        >
          <div className="
            -mt-3 max-w-192.5 self-end
            sm:mt-0
          "
          >
            <img
              src="/images/header.webp"
              alt=""
              className="
                relative z-0 -ml-5 w-full
                sm:ml-0
              "
            />
          </div>
          <div className="
            relative z-3 mb-1 flex justify-center
            sm:mb-0 sm:ml-15 sm:flex-col sm:justify-start sm:pr-0
          "
          >
            <div className="
              flex flex-col items-center
              sm:items-start
            "
            >
              <h1 className="
                flex flex-col gap-1 text-[34px] leading-none text-name uppercase
                sm:text-4xl
              "
              >
                <span className="
                  -mb-0.75 ml-0.5 leading-none
                  sm:ml-0
                "
                >
                  John
                </span>
                <span className="
                  text-[47px] leading-none font-bold
                  sm:text-[49px]
                "
                >
                  Heher
                </span>
              </h1>
              <h2 className="
                mt-3 mb-8 text-base font-semibold tracking-[0.12em] text-subtitle uppercase
                sm:mt-4 sm:mb-6 sm:text-base sm:tracking-[0.16em]
              "
              >
                Web Developer
              </h2>
            </div>
            <div className="
              hidden
              sm:block
            "
            >
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
