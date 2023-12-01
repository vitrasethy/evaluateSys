"use client";
import Image from "next/image";
import "../award/page.css";
import { useEffect, useState, useRef } from "react";

export default function Award() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoading2, setIsLoading2] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [numParticles, setNumParticles] = useState(30);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let enterCount = useRef(0);

  const particles = [];
  for (let i = 0; i < numParticles; i++) {
    particles.push(<div className="particle" key={i}></div>);
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const interval = setInterval(() => {
      const change = Math.floor(Math.random() * 3) - 1;
      setNumParticles((prev) => Math.max(0, prev + change));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Enter") {
        enterCount.current++;
        if (enterCount.current=== 1){
          window.scroll({
            top: document.body.offsetHeight,
            left: 0, 
            behavior: 'smooth',
          });
        }
        if (enterCount.current === 2) {
          setIsLoading(true);
        }
        if (enterCount.current === 3){
          setIsLoading2(true);
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isLoading]);

  return (
    <main>
      <div className="bg-[#070707]">
      <section className="first-screen">
      <div id="particle-container">{particles}</div>

        <div className="text-center h-[85vh] flex flex-col justify-center items-center">
          <h1 className="text-4xl tracking-tight font-extrabold font-['Georgia'] uppercase sm:text-5xl md:text-[10rem] bg-gradient-to-r from-[#3b7cc1] to-[#9ae2ff] inline-block text-transparent bg-clip-text drop-shadow-[7px_5px_rgba(205,245,253,0.2)]">
            Engineering's Day
          </h1>
          <p className="max-w-4xl mx-auto text-6xl mt-8 text-white leading-snug">
            Award of Engineering's Day 2023
          </p>
          <p className="max-w-4xl mx-auto text-5xl mt-8 text-white">
            Congratulation to the winners...
          </p>
        
        </div>
      </section>

      <div id="particle-container">{particles}
      </div>
      <div className="h-screen"></div>

      <section className="second-screen">
        <div className="pyro">
          <div className="before"></div>
          <div className="after"></div>
        </div>
        <div className=" h-screen flex flex-col justify-center items-center">
          <div className="text-white flex justify-center items-center gap-16 mb-16">
          <Image
                src="/bgcol.png"
                alt=""
                width={600}
                height={600}
                className=""
              />
            <h1 className="text-7xl font-semibold">Engineering's Day 2023</h1>
          </div>
          <div className="w-[85%] h-[65%] bg-[url('/reward3.jpeg')] bg-no-repeat bg-cover border-2 border-gray-500">
            <div className="flex flex-col justify-center h-full rounded-md bg-sky-950/30 backdrop-brightness-[.6] w-full px-20">
              <div className="text-white text-center mb-12">
              <h3 className="text-7xl font-medium">Leader Board</h3>
            <h2 className="mt-8 mb-8 text-5xl">Department : Information Technology Engineering</h2>
            <h2 className="text-5xl">Year: 3</h2>
              </div>

            <div className="relative w-auto">
              <div className="flex bg-gradient-to-r from-[#cc9910] to-[#fcf97c] shadow-lg border-1 py-6 px-[4rem] rounded-xl h-[11rem]">
                <div className="flex gap-16 text-4xl items-center">
                  <p>1st</p>
                  {isLoading2&&(
                    <div className="flex gap-16 items-center">
                      <p className="w-[102.4rem] leading-snug">GASTROMOD: AN INTERACTIVE TOOL FOR 3D GASTROPOD MODELING</p>
                      <p>003</p>
                    </div>
                  )}
                </div>
              </div>
              <Image
                src="/gold.png"
                alt=""
                width={70}
                height={80}
                className="absolute top-[-10px] left-[-25px] rotate-12"
              />
            </div>

            <div className="relative mt-8">
              <div className="flex bg-gradient-to-r from-[#C0C0C0] to-[#e9e9eb] shadow-lg border-1 py-6 px-[4rem] rounded-xl h-[11rem]">
                <div className="flex gap-16 text-4xl items-center">
                  <p>2nd</p>
                  {isLoading&&(
                    <div className="flex gap-16 items-center">
                      <p className="w-[101.4rem] leading-snug">ASEAN FACTORI 4.0 PROJECT ASEAN FACTORI 4.0 PROJECT</p>
                      <p>003</p>
                    </div>
                  )}
                  </div>
              </div>
              <Image
                src="/silver.png"
                alt=""
                width={70}
                height={80}
                className="absolute top-[-10px] left-[-25px] rotate-12"
              />
            </div>

            <div className="relative mt-8">
              <div className="flex bg-gradient-to-r from-[#ca6533] to-[#F0C9BA] shadow-lg border-1 py-6 px-[4rem] rounded-xl h-[11rem]">
                <div className="flex gap-16 text-4xl items-center w-full">
                  <p>3rd</p>
                  {isLoading2&&(
                    <div className="flex gap-16 items-center">
                      <p className="w-[102rem] leading-snug">A NEW MODEL FOR SIMULATING AND EVALUATING CONGESTION CAUSE AT SIGNALIZED INTERSECTION</p>
                      <p>003</p>
                    </div>
                  )}
                </div>
              </div>
              <Image
                src="/bronze.png"
                alt=""
                width={70}
                height={80}
                className="absolute top-[-10px] left-[-25px] rotate-12"
              />
            </div>

            <p className="text-center text-3xl mt-14 text-white">Royal University of Phnom Penh || Faculty of Engineering</p>
            </div>
              </div>
          </div>
      </section>

      </div>
    </main>
  );
}
