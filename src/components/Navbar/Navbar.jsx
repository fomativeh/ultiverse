"use client";
import Image from "next/image";
import logo from "../../assets/logo/logo.svg";
import discordIcon from "../../assets/icons/Discord.svg";
import twitterIcon from "../../assets/icons/Twitter.svg";
import "./Styles.scss";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

const Navbar = () => {
  const [hamActive, setHamActive] = useState(false);
  const progressBar = useRef();
  useEffect(() => {
    const timeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 0,
      yoyo: true,
    });

    timeline.to(progressBar.current, {
      keyframes: [
        { width: "30%" },
        { width: "50%" }, 
        { width: "15%" }, 
        { width: "40%" }, 
        { width: "55%" }, 
        { width: "90%" }, 
        { width: "77%" }, 
        { width: "30%" },
      ],
      duration: 5, 
      ease: "power1.inOut",
    });

    //Animation for nav links with texts
    const textList = document.querySelectorAll(".animate-text");
    textList.forEach((wrapper) => {
      //This variable helps handle the mouse hover glitch and a looping reinitialization
      let animationRunning = false;

      const startAnimation = (e) => {
        e.stopPropagation();
        if (!animationRunning) {
          animationRunning = true;
          const mainSpan = wrapper.children[0];
          const smSpans = wrapper.children[1];

          const inner_text = mainSpan.getAttribute("data-spanText");
          let timeline = gsap.timeline();

          timeline
            .fromTo(
              mainSpan,
              { text: "" },
              {
                text: inner_text,
                duration: 0.78,
                onComplete: () => {
                  animationRunning = false;
                },
              }
            )
            .fromTo(
              smSpans.children[0],
              {
                y: -30,
              },
              {
                y: 0,
                duration: 0.35,
                ease: "linear",
              },
              "<"
            )
            .fromTo(
              smSpans.children[1],
              {
                x: -20,
                rotate: 360,
              },
              {
                x: 0,
                duration: 0.45,
                ease: "linear",
              },
              "<"
            )
            .from(
              smSpans.children[2],
              {
                opacity: 0,
                x: 20,
                duration: 0.78,
                ease: "linear",
                rotate: 360,
              },
              "<"
            );
        }
      };

      wrapper.addEventListener("mouseover", (e) => startAnimation(e));
      wrapper.addEventListener("mouseleave", (e) => startAnimation(e)); // Add mouseleave event
    });

    //Animation for nav links with images
    const imgLinks = document.querySelectorAll(".wrap-img");
    imgLinks.forEach((eachLink) => {
      let animationRunning = false;
      const startImageAnimation = (e) => {
        e.stopPropagation();
        if (!animationRunning) {
          animationRunning = true;
          // eachLink.style.backgroundColor = "#00ffe6";
          const iconHolder = eachLink.children[0];
          const smSpans = eachLink.children[1];
          const timeline = gsap.timeline();
          timeline
            .from(iconHolder, {
              width: "100%",
              height: "100%",
              borderRadius: "0px",
              duration: 0.45,
              ease: "linear",
              onComplete: () => {
                animationRunning = false;
              },
            })
            // .to(eachLink, { backgroundColor: "#00ffe6;" }, "<")
            .fromTo(
              smSpans.children[0],
              {
                y: -30,
              },
              {
                y: 0,
                duration: 0.35,
                ease: "linear",
              },
              "<"
            )
            .fromTo(
              smSpans.children[1],
              {
                x: -20,
                rotate: 360,
              },
              {
                x: 0,
                duration: 0.45,
                ease: "linear",
              },
              "<"
            )
            .from(
              smSpans.children[2],
              {
                opacity: 0,
                x: 20,
                duration: 0.78,
                ease: "linear",
                rotate: 360,
              },
              "<"
            );
        }
      };

      eachLink.addEventListener("mouseover", (e) => startImageAnimation(e));
      eachLink.addEventListener("mouseleave", (e) => startImageAnimation(e));
    });
  }, []);

  return (
    <nav className="fixed top-7 md:w-[95vw] md:h-[70px] flex justify-start items-center z-[11]">
      <section className="h-[100%] w-[80px] flex justify-center items-center border border-[#302f2f]">
        <figure className="relative h-[50%] w-[50%]">
          <Image src={logo} alt={"Ultiverse logo"} fill />
        </figure>
      </section>
      <section className="dynamic-width-a progress-parent relative h-[100%] border border-light-silver border-l-0">
        <div
          ref={progressBar}
          className="absolute left-0 top-0 
          bg-theme-cyan h-[100%] z-[2] transition-[width] duration-300 ease-in-out"
        ></div>
      </section>
      <ul className="dynamic-width-b h-[100%] flex list-none border border-[#302f2f] border-l-0 font-Terminus">
        <li className="animate-text link-wrap h-100% w-[30%] border-r border-[#302f2f] flex justify-center items-center relative">
          <span className="main-span text-[#fff]" data-spanText={"ABOUT"}>
            ABOUT
          </span>
          <span className="sm-span text-[#7e7c7c] absolute bottom-[6px] left-[12px] text-[13px]">
            <span className="inline-block">0</span>
            <span className="inline-block">0</span>
            <span className="inline-block">1</span>
          </span>
        </li>

        <li className="h-100% w-[30%] border-r border-[#302f2f] flex justify-start items-center relative">
          <section className="wrap-img link-wrap w-[50%] h-[100%] border-r border-[#302f2f] relative flex justify-center items-center">
            <section className="icon-holder p-[7px] rounded-[50px] w-fit h-fit">
              <figure className="h-[14px] w-[17px]  relative">
                <Image src={discordIcon} alt={"DIscord icon"} fill />
              </figure>
            </section>

            <span className="span-sm text-[#7e7c7c] absolute bottom-[6px] left-[12px] text-[13px]">
              <span className="inline-block">0</span>
              <span className="inline-block">0</span>
              <span className="inline-block">2</span>
            </span>
          </section>

          <section className="wrap-img link-wrap w-[50%] h-[100%] border-r border-[#302f2f] relative flex justify-center items-center">
            <section className="icon-holder p-[7px] rounded-[50px] w-fit h-fit">
              <figure className="h-[14px] w-[17px]  relative">
                <Image src={twitterIcon} alt={"Twitter icon"} fill />
              </figure>
            </section>

            <span className="span-sm text-[#7e7c7c] absolute bottom-[6px] left-[12px] text-[13px]">
              <span className="inline-block">0</span>
              <span className="inline-block">0</span>
              <span className="inline-block">3</span>
            </span>
          </section>
        </li>

        <li className="animate-text link-wrap h-100% w-[30%] border-r border-[#302f2f] flex justify-center items-center relative">
          <span
            className="main-span text-[#fff]"
            data-spanText={"LAUNCH ULTIVERSE"}
          >
            LAUNCH ULTIVERSE
          </span>
          <span className="span-sm text-[#7e7c7c] absolute bottom-[6px] left-[12px] text-[13px]">
            <span className="inline-block">0</span>
            <span className="inline-block">0</span>
            <span className="inline-block">4</span>
          </span>
        </li>

        <li
          className="ham h-100% w-[10%] border-r border-[#302f2f] flex justify-center items-center relative"
          onClick={() => setHamActive(!hamActive)}
        >
          <section className="h-[100%] w-[70%] flex flex-col justify-center items-end relative">
            <div
              className={` ${
                hamActive ? `lng-active` : `inactive`
              } lng  w-[100%] h-[1px] bg-[#fff] opacity-[30%]`}
            ></div>
            <div
              className={`sht ${
                hamActive ? `sht-active` : `inactive`
              } w-[70%] h-[1px] mt-[10px] bg-[#fff] opacity-[30%]`}
            ></div>
          </section>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
