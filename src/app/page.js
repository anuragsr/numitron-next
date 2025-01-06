"use client";

import { gsap } from "gsap";
import { useEffect } from "react";
import { l } from "@/app/helpers";

import SectionAbout from "@/app/sections/about";
import Reach3DScene from "@/app/components/Reach3DScene";
import MV2DScene from "@/app/components/MV2DScene";

export default function Home() {
  useEffect(() => {
    // Animations
    // Video overlay with white squares
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

    // Intro animation
    // COMING SOON
  }, []);

  return (
    <main className="relative h-[100vh] w-full overflow-auto">
      <section>
        <div className="absolute-child z-[0] ctn-video overflow-hidden">
          <video muted loop autoPlay>
            <source src="video/bg.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute-child z-[1] ctn-overlay grid grid-cols-8 grid-rows-4 gap-0  ">
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
        <div className="absolute-child z-[2] ctn-text flex-center">
          <div className="container">
            <div className="w-3/4 flex-start flex-col bg-white/75 card">
              <h1 className="font-aquire-light text-6xl">The Fastest, Real time</h1>
              <h1 className="font-aquire text-6xl">Crypto Intelligence platform</h1>
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
        <div className="ctn-scroll absolute z-[1] left-0 bottom-0 w-full flex-center py-8">
          <img alt="" src="./images/scroll.gif" className="h-20" />
        </div>
      </section>

      <SectionAbout />

      <section>
        <div className="container w-[100vw] h-[75vh] space-y-4">
          <div className="row flex-center">
            <div className="col card">
              <h1 className="title-gradient font-aquire text-6xl">Features</h1>
            </div>
          </div>
          <div className="h-4" />
          <div className="row flex-start items-stretch">
            <div className="col card basis-1/2">
              <div className="">Anurag</div>
            </div>
            <div className="col card basis-1/2">
              <p className="text-2xl">
                We also provide advisory services on regulatory compliance, security, and market
                analysis, while focusing on creating decentralized applications (dApps) or tokens
                through Initial Coin Offerings (ICOs).
              </p>
            </div>
          </div>
          <div className="row flex-start items-stretch">
            <div className="col card basis-1/2">
              <div className="">Anurag</div>
            </div>
            <div className="col card basis-1/2">
              <p className="text-2xl">
                We also provide advisory services on regulatory compliance, security, and market
                analysis, while focusing on creating decentralized applications (dApps) or tokens
                through Initial Coin Offerings (ICOs).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container w-[100vw] h-[75vh] space-y-4">
          <div className="row flex-center justify-end">
            <div className="col card">
              <h1 className="title-gradient font-aquire text-6xl">Our Reach</h1>
            </div>
          </div>
          <div className="h-4" />
          <div className="row flex-start items-stretch">
            <div className="col card basis-1/3 space-y-4">
              <p className="text-2xl">
                At heart, we are an agency offering the next level of market intelligence in the
                field of Cryptocurrency.
              </p>
              <p className="text-2xl">
                Developing blockchain technology, facilitating cryptocurrency trading and exchanges,
                providing wallet services, and offering investment opportunities in various crypto
                assets.
              </p>
              <p className="text-2xl">
                We also provide advisory services on regulatory compliance, security, and market
                analysis, while focusing on creating decentralized applications (dApps) or tokens
                through Initial Coin Offerings (ICOs).
              </p>
            </div>
            <div className="col card basis-2/3 p-0">
              <Reach3DScene />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container w-[100vw] h-[75vh] space-y-4">
          <div className="row flex-center">
            <div className="col card">
              <h1 className="title-gradient font-aquire text-6xl">Roadmap</h1>
            </div>
          </div>
          <div className="h-4" />
          <div className="row flex-start items-stretch">
            <div className="col card h-64">
              <p className="text-2xl">
                We also provide advisory services on regulatory compliance, security, and market
                analysis, while focusing on creating decentralized applications (dApps) or tokens
                through Initial Coin Offerings (ICOs).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container w-[100vw] h-[75vh] space-y-4">
          <div className="row flex-start justify-start">
            <div className="col card">
              <h1 className="title-gradient font-aquire text-6xl">Mission - Vision</h1>
            </div>
          </div>
          <div className="h-4" />
          <div className="row flex-start items-stretch">
            <div className="col card basis-2/3 p-0">
              <MV2DScene />
            </div>
            <div className="col card basis-1/3 space-y-4">
              <p className="text-2xl">
                At heart, we are an agency offering the next level of market intelligence in the
                field of Cryptocurrency.
              </p>
              <p className="text-2xl">
                Developing blockchain technology, facilitating cryptocurrency trading and exchanges,
                providing wallet services, and offering investment opportunities in various crypto
                assets.
              </p>
              <p className="text-2xl">
                We also provide advisory services on regulatory compliance, security, and market
                analysis, while focusing on creating decentralized applications (dApps) or tokens
                through Initial Coin Offerings (ICOs).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container w-[100vw] h-[75vh] space-y-4">
          <div className="row flex-start justify-start">
            <div className="col card">
              <h1 className="title-gradient font-aquire text-6xl">Partners</h1>
            </div>
          </div>
          <div className="h-4" />
          <div className="row flex-start items-stretch">
            <div className="col card basis-1/3 space-y-4">
              <p className="text-2xl">
                Our work has been appreciated by many well-known companies in the industry.
                <br />
                We have had the honor of working with these major clients.
              </p>
            </div>
            <div className="col card basis-1/3 space-y-4">
              <p className="text-2xl">
                Our work has been appreciated by many well-known companies in the industry.
                <br />
                We have had the honor of working with these major clients.
              </p>
            </div>
            <div className="col card basis-1/3 space-y-4">
              <p className="text-2xl">
                Our work has been appreciated by many well-known companies in the industry.
                <br />
                We have had the honor of working with these major clients.
              </p>
            </div>
          </div>
          <div className="row flex-start items-stretch">
            <div className="col card basis-1/3 space-y-4">
              <p className="text-2xl">
                Our work has been appreciated by many well-known companies in the industry.
                <br />
                We have had the honor of working with these major clients.
              </p>
            </div>
            <div className="col card basis-1/3 space-y-4">
              <p className="text-2xl">
                Our work has been appreciated by many well-known companies in the industry.
                <br />
                We have had the honor of working with these major clients.
              </p>
            </div>
            <div className="col card basis-1/3 space-y-4">
              <p className="text-2xl">
                Our work has been appreciated by many well-known companies in the industry.
                <br />
                We have had the honor of working with these major clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container w-[100vw] h-[75vh] space-y-4">
          <div className="row flex-center">
            <div className="col card">
              <h1 className="title-gradient font-aquire text-6xl">Follow Us</h1>
            </div>
          </div>
          <div className="h-4" />
          <div className="row flex-start items-stretch">
            <div className="col card h-64">
              <p className="text-2xl">
                We also provide advisory services on regulatory compliance, security, and market
                analysis, while focusing on creating decentralized applications (dApps) or tokens
                through Initial Coin Offerings (ICOs). d
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
