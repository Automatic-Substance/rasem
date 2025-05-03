"use client";

import RasemLogo from "@/app/assets/icons/rasem-logo.svg";
import ContactForm from "@/app/components/ContactForm";
import { motion } from "framer-motion";
import { StaggerIn, animation } from "./Animation";
import PortableText from "@/app/components/PortableText";
import { type PortableTextBlock } from "next-sanity";

interface FooterProps {
  description?: any;
  contactdescription?: any;
}

export default function Footer({
  description,
  contactdescription,
}: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="relative text-white bg-primary-background overflow-hidden">
      <StaggerIn className="grid grid-cols-7 lg:grid-cols-9 gap-x-5 gap-y-12 lg:gap-x-12 lg:gap-y-12 mx-10 lg:mx-12 mt-14 mb-8 lg:mt-20 lg:mb-10">
        <div className="col-span-7 lg:col-span-4 flex flex-col items-center lg:items-start justify-between">
          <motion.div variants={animation}>
            <RasemLogo className="w-[140px] lg:w-[200px]" />
          </motion.div>
          <motion.div variants={animation} className="hidden lg:block text-lg">
            <p>Copyright © {year} RASEM Investments LLC</p>
            <p>All rights reserved.</p>
          </motion.div>
        </div>
        <div className="col-span-7 text-center lg:text-left lg:col-span-4">
          <motion.div variants={animation} className="mb-14">
            {description?.length && (
              <PortableText
                className="text-lg"
                value={description as PortableTextBlock[]}
              />
            )}
          </motion.div>
          <motion.div variants={animation} className="space-y-5">
            <h2 className="text-base lg:text-3xl uppercase font-heading font-normal">
              Contact Us
            </h2>
            {contactdescription?.length && (
              <PortableText
                className="text-lg"
                value={contactdescription as PortableTextBlock[]}
              />
            )}
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
