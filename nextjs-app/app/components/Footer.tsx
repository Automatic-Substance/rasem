"use client";

import RasemLogo from "@/app/assets/icons/rasem-logo.svg";
import ContactForm from "@/app/components/ContactForm";
import { motion } from "framer-motion";
import { StaggerIn, animation } from "./Animation";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative text-white bg-primary-background overflow-hidden">
      <StaggerIn className="grid grid-cols-7 lg:grid-cols-9 gap-x-5 gap-y-12 lg:gap-x-12 lg:gap-y-12 mx-10 lg:mx-12 mt-14 mb-8 lg:my-20">
        <div className="col-span-7 lg:col-span-4 flex flex-col items-center lg:items-start justify-between">
          <motion.div variants={animation}>
            <RasemLogo className="w-[140px] lg:w-[200px]" />
          </motion.div>
          <motion.div variants={animation} className="hidden lg:block text-lg">
            <p>Copyright © {year} Lorem Group Ltd.</p>
            <p>All rights reserved.</p>
          </motion.div>
        </div>
        <div className="col-span-7 text-center lg:text-left lg:col-span-4">
          <motion.p variants={animation} className="text-lg mb-14">
            RASEM redefines living at the highest level. Merging real estate
            investment, wellness, and innovation into one intentional ecosystem,
            we are a canvas for a life well-lived. Founded on a philosophy
            guided by the love of life itself, every element transforms how we
            shape and spend precious time. Here, longevity becomes legacy. And
            lifeophilic finds its form.
          </motion.p>
          <motion.div variants={animation} className="space-y-5">
            <h2 className="text-base lg:text-3xl uppercase font-heading font-normal">
              Contact Us
            </h2>
            <p className="text-lg">
              Ready to connect? We invite you to register your interest or reach
              out for a conversation by completing the contact form below.
            </p>
            <ContactForm />
          </motion.div>
          <div className="lg:hidden text-xs mt-14">
            <p>Copyright © {year} RASEM Investments LLC</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </StaggerIn>
    </footer>
  );
}
