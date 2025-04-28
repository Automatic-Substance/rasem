"use client";

import RasemLogo from "@/app/assets/icons/rasem-logo.svg";
import ContactForm from "@/app/components/ContactForm";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative text-white bg-primary-background overflow-hidden">
      <div className="grid grid-cols-7 lg:grid-cols-9 gap-x-5 gap-y-12 lg:gap-x-12 lg:gap-y-12 mx-10 lg:mx-12 mt-14 mb-8 lg:my-20">
        <div className="col-span-7 lg:col-span-4 flex flex-col items-center lg:items-start justify-between">
          <div>
            <RasemLogo className="w-[140px] lg:w-[200px]" />
          </div>
          <div className="hidden lg:block text-lg">
            <p>Copyright © {year} Lorem Group Ltd.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
        <div className="col-span-7 text-center lg:col-span-4">
          <p className="text-lg mb-14">
            The new global benchmark for wellness real estate—where cutting-edge
            science, heritage, and bespoke luxury coexist. The brand’s mission
            is to create environments where elite living converges with
            transformative well-being solutions. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. In ut elementum erat. Nullam in
            dignissim augue.
          </p>
          <div className="space-y-5">
            <h2 className="text-base lg:text-3xl uppercase font-heading font-normal">
              Contact Us
            </h2>
            <p className="text-lg">
              Fusce vitae sem consequat, fermentum purus quis, vehicula libero.
              Quisque vehicula ligula nec fringilla pellentesque. Quisque
              condimentum at tellus at scelerisque.
            </p>
            <ContactForm />
          </div>
          <div className="lg:hidden text-xs mt-14">
            <p>Copyright © {year} Lorem Group Ltd.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
