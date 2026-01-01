import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Scalable", "Intelligent", "Reliable"];

  // Staggered animation variants for a "flow" effect
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <motion.div
      id="home"
      initial="hidden"
      animate="visible"
      variants={container}
      className="z-10 mt-15 md:mt-40 mr-5 text-center md:text-left c-space"
    >
      {/* Status Badge */}
      <motion.div variants={item} className="inline-flex items-center gap-2 mb-8">
        <span className="flex h-2 w-2 rounded-full bg-orange-600 animate-pulse" />
        <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold">
          Currently Building STARTBRIDGE
        </p>
      </motion.div>

      <div className="flex flex-col gap-3">
        {/* Intro */}
        <motion.h1 variants={item} className="text-xl md:text-2xl font-light text-neutral-400">
          Hi, I’m <span className="text-white font-semibold">Adarsh Singh</span>
        </motion.h1>

        {/* Main Title Section */}
        <div className="flex flex-col">
          <motion.p variants={item} className="text-5xl md:text-6xl font-bold tracking-tight text-neutral-200">
            I design and build
          </motion.p>
          
          <motion.div variants={item} className="py-2">
            <FlipWords
              words={words}
              className="text-7xl md:text-9xl font-black tracking-tighter text-white"
            />
          </motion.div>
          
          <motion.p variants={item} className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-200">
            digital systems.
          </motion.p>
        </div>

        {/* Sub-description */}
        <motion.p
          variants={item}
          className="mt-6 text-lg md:text-xl text-white/80 max-w-lg leading-relaxed font-normal"
        >
          Specializing in full-stack architecture and AI systems that help 
          <span className="text-white"> early-stage builders</span> move from idea to traction.
        </motion.p>

        {/* CTA Group */}
        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-5">
          <a href="#work" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300">
            Explore Work
          </a>
          <div className="hidden sm:block h-10 w-[1px] bg-neutral-800" />
          <div className="flex gap-4">
             <span className="text-xs uppercase tracking-widest text-neutral-600 font-bold">Solo Founder <br/> Full-Stack</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroText;