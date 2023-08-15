"use client";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import "./Styles.css";
import heroImg from "../assets/images/a.png";
import textImg from "../assets/images/b.svg";
import player from "../assets/images/player.svg";
import Sidebar from "@/components/Sidebar/Sidebar";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";

const Responsive = () => {
  return (
    <section className="absolute bg-[#000] w-full h-full flex justify-center items-center z-[10] md:hidden md:z-[-1]">
      <p className="text-[#fff] font-Terminus">
        Mobile is view under maintenance.
      </p>
    </section>
  );
};

export default function Home() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <main className="hero flex min-h-screen flex-col items-center justify-between relative overflow-y-hidden">
      <Navbar />
      <Sidebar />
      <Modal modalActive={modalActive} setModalActive={setModalActive} />
      <Responsive />

      <section className="absolute right-[50px] bottom-[120px]">
        <figure
          className="w-[380px] h-[60vh] max-h-[450px] relative"
          onClick={() => setModalActive(true)}
        >
          <Image src={heroImg} alt={"Hero img"} fill draggable={false} />
        </figure>
      </section>

      <section className="absolute left-[50px] bottom-[100px] w-fit">
        <figure className="w-[65vw] h-[30vh] relative opacity-[0.9]">
          <Image src={textImg} alt={"Hero img"} fill draggable={false} />
        </figure>
      </section>

      <section className="absolute left-[50px] bottom-[40px] flex justify-start items-center">
        <figure className="w-[31px] h-[34px] relative">
          <Image src={player} alt={"Hero img"} fill draggable={false} />
        </figure>

        <p className="ml-[24px] font-Terminus text-[#fff]">
          UTILIZING METAFI, UE5, AND WEB3 TECHONOLOGY TO <br />
          CREATE A SOCIAL AND IMMERSIVE GAMING EXPERIENCE.
        </p>
      </section>
    </main>
  );
}
