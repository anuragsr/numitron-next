"use client";

import About3DScene from "@/app/components/About3DScene";
import { useEffect, useState } from "react";

export default function SectionAbout() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // Setting width, height for sub-sections (for 3D Scenes)
    const resizeObserver = new ResizeObserver(event => {
      setWidth(Math.round(event[0].contentBoxSize[0].inlineSize));
      setHeight(Math.round(event[0].contentBoxSize[0].blockSize));
    });

    resizeObserver.observe(document.getElementById("sub-scene1"));
  }, []);

  return (
    <section>
      <div className="container w-[100vw] h-[75vh] space-y-4">
        <div className="row flex-start justify-start">
          <div className="col card">
            <h1 className="title-gradient font-aquire text-6xl">About</h1>
          </div>
        </div>
        <div className="h-4" />
        <div className="row flex-start items-stretch">
          <div className="col card basis-2/3 p-0" id="sub-scene1">
            <About3DScene height={height} width={width} />
          </div>
          <div className="col card basis-1/3 space-y-4">
            <p className="text-2xl">
              At heart, we are an agency offering the next level of market intelligence in the field
              of Cryptocurrency.
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
  );
}
