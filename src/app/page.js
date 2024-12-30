"use client";
import Image from "next/image";

import { gsap } from "gsap";
import { useEffect } from "react";

export default function Home() {
  console.log("A");

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
          <div className="container mx-auto flex-center">
            <div className="w-2/3 flex-start flex-col bg-white/75 p-4 px-8 rounded-lg shadow">
              <h1 className="title text-7xl">The Fastest, Real time</h1>
              <h1 className="title-2 text-7xl">
                Crypto INtelligence
                <br /> platform
              </h1>
              <p className="text-2xl">
                Crowd-sourced and professionally curated research, analysis, trading signals,
                trading algorithms, and market moving news to give cryptocurrency traders the
                real-time market intelligence needed to gain an edge.
              </p>
              <div className="ctn-buttons">
                <button className="btn-primary">Learn More</button>
                <button className="btn-primary">Get Early Beta Access</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-red-300">Section 1</section>
      <section className="section bg-green-300">Section 2</section>
    </main>
  );
}
