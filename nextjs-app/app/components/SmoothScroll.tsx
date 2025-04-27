"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScroll({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return <ReactLenis root>{children}</ReactLenis>;
}
