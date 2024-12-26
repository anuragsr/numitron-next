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
          <div>04</div>
          <div>04</div>
          <div>04</div>
          <div>04</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>04</div>
        </div>
        <div className="ctn-text hw-full flex-center flex-col absolute z-[2] gap-4">
          <h1 className="title text-7xl">Crypto Text</h1>
          <h1 className="title-2 text-7xl">Crypto Text</h1>
          <p className="para text-2xl font-bold">
            This is a text that's going to be used for all the texts so it better look like its
            crypto related
          </p>
          <p className="para text-2xl">
            This is a normal text that's going to be used for all the texts so it better
          </p>
        </div>
      </section>

      <section className="section">Section 1</section>
      <section className="section">Section 2</section>
    </main>
  );
}
