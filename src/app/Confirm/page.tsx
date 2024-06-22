import Link from "next/link";
import React from "react";

export default function Component() {
  return (
    <div className="relative flex flex-col items-center justify-center h-[100dvh]">
      <img
        src="blockchain.jpg"
        alt="Blockchain"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center">
          <div className="relative max-w-md py-12 px-20 rounded-lg bg-white/50 z-10 backdrop-blur-sm">
            <div className="flex flex-col items-center space-y-4 text-center ">
              <div className="flex flex-col">
                <img src="check.png" className="w-16" />
              </div>
              <h2 className="text-2xl font-bold">Thank you!</h2>
              <p className="text-muted-foreground">Your form has been submitted successfully.</p>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Back to Home
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
}
