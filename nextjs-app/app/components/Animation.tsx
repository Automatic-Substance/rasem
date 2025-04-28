"use client";

import cn from "classnames";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionProps } from "framer-motion";
interface FadeInProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  className,
  ...props
}: FadeInProps) {
  const animation = {
    hidden: {
      opacity: 0,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        delay: delay,
        bounce: 0.3,
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animation}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxProps extends MotionProps {
  children: React.ReactNode;
}

export function Parallax({ children, ...props }: ParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.8]);
  return (
    <div ref={ref} className="absolute size-full overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="absolute size-full"
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
}
