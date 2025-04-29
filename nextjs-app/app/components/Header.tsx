"use client";

import RasemLogo from "@/app/assets/icons/rasem-logo.svg";
import { useState, useEffect } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";

export default function Header() {
  const [smallLogo, setSmallLogo] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10 && !smallLogo) {
      setSmallLogo(true);
    } else if (latest <= 10 && smallLogo) {
      setSmallLogo(false);
    }
  });

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  const logoAnimation = {
    large: {
      width: "280px",
      translateY: 80,
      transition: {
        ease: "easeInOut",
        duration: 0.2,
      },
    },
    small: {
      width: "120px",
      translateY: 80,
      transition: {
        ease: "easeInOut",
        duration: 0.2,
      },
    },
  };

  return (
    <header className="absolute top-0 left-0 z-20 w-full flex">
      <div className="container py-6 sm:px-5 flex justify-center">
        <nav>
          <motion.div
            variants={logoAnimation}
            animate={smallLogo ? "small" : "large"}
            initial="large"
          >
            <RasemLogo className="w-full" />
          </motion.div>
        </nav>
      </div>
    </header>
  );
}
