"use client";

import RasemLogo from "@/app/assets/icons/rasem-logo.svg";
import { useState, useEffect } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { useMedia } from "react-use";

export default function Header() {
  const [smallLogo, setSmallLogo] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();

  const isDesktop = useMedia("(min-width: 1024px)", false);

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
      width: isDesktop ? "280px" : "140px",
      translateY: isDesktop ? 80 : 20,
      transition: {
        ease: "easeInOut",
        duration: 0.2,
      },
    },
    small: {
      width: isDesktop ? "120px" : "90px",
      translateY: isDesktop ? 80 : 20,
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
