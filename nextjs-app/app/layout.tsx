import "keen-slider/keen-slider.min.css";
import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, EB_Garamond } from "next/font/google";
import { draftMode } from "next/headers";
import { VisualEditing, toPlainText } from "next-sanity";
import { Toaster } from "sonner";

import DraftModeToast from "@/app/components/DraftModeToast";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import * as demo from "@/sanity/lib/demo";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import { handleError } from "./client-utils";
import SmoothScroll from "@/app//components/SmoothScroll";

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(): Promise<Metadata> {
  const { data: settings } = await sanityFetch({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  });
  const title = settings?.title || demo.title;
  const description =
    "To live lifeophilic is to embrace that a life well lived is not defined by longevity alone but by a commitment to fullness, purpose, and impact. For those who seek not more time, but more from time, this pursuit becomes mastery: where vitality shapes the canvas, and life becomes the masterpiece. Here, time is not simply spent—it is reclaimed, reshaped, and commanded.";

  const ogImage = resolveOpenGraphImage(settings?.ogImage);
  let metadataBase: URL | undefined = undefined;
  try {
    metadataBase = new URL("https://raseminvestments.com");
  } catch {
    // ignore
  }
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: description,
  };
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const ebgaramond = EB_Garamond({
  variable: "--font-ebgaramond",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const gotham = localFont({
  src: "./fonts/font.woff2",
  variable: "--font-gotham",
  weight: "400",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${ebgaramond.variable} ${gotham.variable} bg-white text-black`}
    >
      <body>
        <SmoothScroll>
          <section className="min-h-screen">
            {/* The <Toaster> component is responsible for rendering toast notifications used in /app/client-utils.ts and /app/components/DraftModeToast.tsx */}
            <Toaster />
            {isDraftMode && (
              <>
                <DraftModeToast />
                {/*  Enable Visual Editing, only to be rendered when Draft Mode is enabled */}
                <VisualEditing />
              </>
            )}
            {/* The <SanityLive> component is responsible for making all sanityFetch calls in your application live, so should always be rendered. */}
            <SanityLive onError={handleError} />
            <Header />
            <main className="">{children}</main>
            <Footer />
          </section>
          <SpeedInsights />
        </SmoothScroll>
      </body>
    </html>
  );
}
