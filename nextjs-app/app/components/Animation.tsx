"use client";

import cn from "classnames";
import { useRef, forwardRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionProps,
  useMotionValue,
} from "framer-motion";
interface FadeInProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const animation = {
  hidden: {
    opacity: 0,
    y: 50,
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
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

export function FadeIn({
  children,
  delay = 0,
  className,
  ...props
}: FadeInProps) {
  const animation = {
    hidden: {
      opacity: 0,
      y: 50,
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
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={animation}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerIn({
  children,
  delay = 0,
  className,
  ...props
}: FadeInProps) {
  const staggerAnimation = {
    hidden: {
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8,
      },
    },
    visible: {
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
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerAnimation}
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

export const Parallax = forwardRef<HTMLDivElement, ParallaxProps>(
  ({ children, ...props }, ref) => {
    const scale = useMotionValue(1.2);
    const { scrollYProgress } = useScroll({
      //@ts-ignore
      target: ref,
      offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [-100, 250]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.8]);

    return (
      <div className="absolute size-full overflow-hidden">
        <motion.div
          style={{ y, opacity, scale }}
          className="absolute size-full"
          {...props}
        >
          {children}
        </motion.div>
      </div>
    );
  }
);

Parallax.displayName = "Parallax";
