"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { Suspense } from "react";

export default function ProgressBarProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Suspense fallback={null}>
        <ProgressBar
          height="2px"
          color="#ccc"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </Suspense>
    </>
  );
}