"use client";
import Image from "next/image";

import { gsap } from "gsap";
import { useEffect } from "react";

export default function Home() {
  // console.log("A");

  useEffect(() => {
    gsap.to(".ctn-overlay > div", {
      opacity: 0.1,
      duration: 3,
      stagger: {
        // wrap advanced options in an object
        each: 0.1,
        // from: 'center',
        from: "random",
        grid: "auto",
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1, // Repeats immediately, not waiting for the other staggered animations to finish
      },
    });
  }, []);

  return (
    <main>
      <section className="section">
        <div className="ctn-video hw-full absolute z-[0] overflow-hidden">
          <video muted loop autoPlay>
            <source src="video/bg.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="ctn-overlay hw-full grid grid-cols-8 grid-rows-4 gap-0 absolute z-[1]">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
          <div>06</div>
          <div>05</div>
          <div>06</div>
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>06</div>
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>04</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>04</div>
          <div>02</div>
          <div>03</div>
          <div>01</div>
          <div>04</div>
          <div>04</div>
          <div>04</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>04</div>
        </div>
        <div className="ctn-text hw-full flex-center absolute z-[2]">
          <div className="container mx-auto">
            <div className="w-3/4 flex-start flex-col bg-white/75 p-8 rounded-lg shadow">
              <h1 className="title text-6xl">The Fastest, Real time</h1>
              <h1 className="title-2 text-6xl">Crypto Intelligence platform</h1>
              <p className="text-2xl">
                Crowd-sourced and professionally curated research, analysis, trading signals,
                trading algorithms, and market moving news to give cryptocurrency traders the
                real-time market intelligence needed to gain an edge.
              </p>
              <div className="h-[20px]"></div>
              <div className="ctn-buttons flex-center">
                <button className="btn btn--primary text-2xl text-white p-4 px-6 flex-center">
                  Learn More
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180 scale-125"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
                <button className="btn btn--secondary text-2xl p-4 px-6">Get Beta Access</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">Section 1</section>
      <section className="section">Section 2</section>
    </main>
  );
}
