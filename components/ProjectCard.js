"use client";
import React from "react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";

export default function ProjectCard({ image, brand, title, category }) {
  const cardVars = {
    initial: {
      y: 50,
    },
    animate: {
      y: 0,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
    exit: {
      y: 50,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const controls = useAnimation();
  return (
    <div className="relative w-full h-full">
      <motion.div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="w-full h-full bg-center bg-no-repeat bg-cover"
      >
        <div className="w-full h-full overflow-hidden backdrop-brightness-50"></div>
      </motion.div>
      <motion.div
        animate={controls}
        variants={cardVars}
        onHoverStart={() => controls.start("animate")}
        onHoverEnd={async () => {
          await controls.start("exit");
          await controls.start("initial");
        }}
        initial="initial"
        className="absolute bottom-0 left-0 flex flex-col justify-end w-full h-full gap-12 px-4 py-6 overflow-hidden text-white "
      >
        <p className="text-sm font-light opacity-50">{brand}</p>
        <h4 className="max-w-sm text-5xl font-light">{title}</h4>
        <p className="text-lg font-normal">{category}</p>
      </motion.div>
    </div>
  );
}
