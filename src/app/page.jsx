"use client";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import "./Styles.css";
import heroImg from "../assets/images/a.png";
import textImg from "../assets/images/b.svg";
import player from "../assets/images/player.svg";
import Sidebar from "@/components/Sidebar/Sidebar";
import Modal from "@/components/Modal/Modal";
import { useEffect, useRef, useState } from "react";
import { gsap, } from "gsap";
const { fromTo } = gsap;
import { TextPlugin } from "gsap/TextPlugin";
import Player from "@/components/Player/Player";
gsap.registerPlugin(TextPlugin);

const Responsive = () => {
  return (
    <section className="absolute bg-[#000] w-full h-full flex justify-center items-center z-[10] md:hidden md:z-[-1]">
      <p className="text-[#fff] font-Terminus">
        Mobile is view under maintenance.
      </p>
    </section>
  );
};

const BGTransition = ()=>{
  return(
    <section className="absolute flex flex-col justify-between items-center h-full w-full z-[1] top-0 left-0">
     <p className="text-[#257b6f] font-Terminus text-[50vh] text-transparent text-stroke-2 opacity-[25%] marquee-text">Ultiverse</p>
      <p className="text-[#257b6f] font-Terminus text-[50vh] text-transparent text-stroke-2 opacity-[25%] marquee-text">Ultiverse</p>
    </section>
  )
}

export default function Home() {
  const textRef = useRef();
  useEffect(() => {
  const element = textRef.current;
    fromTo(
      element,
      { text: "" },
      { text: element.textContent, repeat: -1, duration:4, ease:"ease.inOut" }
    );
  }, []);

  useEffect(() => {
    const marqueeElements = document.querySelectorAll('.marquee-text');
    const timeline = gsap.timeline()

      timeline.fromTo(
        marqueeElements[0],
        { x: '100%' },
        {
          x: '-100%',
          duration: 20,
          ease: 'none',
          repeat: -1, // Infinite repeat
          immediateRender: true, // Start animation from the beginning
        }
      ).fromTo(
        marqueeElements[1],
        { x: '100%' },
        {
          x: '-100%',
          duration: 20,
          ease: 'none',
          repeat: -1, // Infinite repeat
          // immediateRender: true, // Start animation from the beginning
        },
        "-=10"
      )
  }, []);

  const [modalActive, setModalActive] = useState(false);
  return (
    <main className="hero flex min-h-screen flex-col items-center justify-between relative overflow-hidden">
      <BGTransition/>
      <Navbar />
      <Sidebar />
      <Modal modalActive={modalActive} setModalActive={setModalActive} />
      <Responsive />

      <section className="absolute right-[50px] bottom-[120px] z-[2]">
        <figure
          className="w-[380px] h-[60vh] max-h-[450px] relative"
          onClick={() => setModalActive(true)}
        >
          <Image src={heroImg} alt={"Hero img"} fill draggable={false} />
        </figure>
      </section>

      <section className="absolute left-[50px] bottom-[100px] w-fit z-[2]">
        <figure className="w-[65vw] h-[30vh] relative opacity-[0.9]">
          <Image src={textImg} alt={"Hero img"} fill draggable={false} />
        </figure>
      </section>

      <section className="absolute left-[50px] bottom-[40px] flex justify-start items-center z-[2]">
      <Player/>
     

        <p className="ml-[24px] font-Terminus text-[#fff] max-w-[430px]" ref={textRef}>
          UTILIZING METAFI, UE5, AND WEB3 TECHONOLOGY TO 
          CREATE A SOCIAL AND IMMERSIVE GAMING EXPERIENCE.
        </p>
      </section>
    </main>
  );
}
