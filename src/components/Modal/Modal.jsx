import "./Styles.scss";
import modalImage from "../../assets/images/modal-img.png";
import closeIcon from "../../assets/icons/x.svg";
import Image from "next/image";
// import player from "../../assets/images/player.svg";
import { gsap } from "gsap";
const { fromTo } = gsap;
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect, useRef } from "react";
import Player from "../Player/Player";
gsap.registerPlugin(TextPlugin);

const Modal = ({ modalActive, setModalActive }) => {
  const textRef = useRef();
  useEffect(() => {
    const element = textRef.current;
    fromTo(
      element,
      { text: "" },
      {
        text: element.textContent,
        repeat: -1,
        yoyo: true,
        duration: 3.2,
        ease: "ease.inOut",
      }
    );
  }, []);

  const animationOne = (modalAnimation) => {
    modalAnimation
      .fromTo(
        ".modal-wrap",
        {
          top: "100vh",
        },
        { top: "0px", duration: 0.8, ease: "Power1.easeOut" }
      )
      .to(".overlay", {
        opacity: "0",
        zIndex: "-1",
        duration: 0.97,
        ease: "linear",
      })
      .to(".slide-div", {
        left: "100vw",
        duration: 1.06,
        ease: "Power1.easeOut",
      })
      .to(".slide-div2", {
        left: "-100vw",
        right: "100vw",
        duration: 1.06,
        ease: "Power1.easeOut",
      })
      .fromTo(
        ".bottom-section",
        { bottom: "-100vh" },
        { bottom: "10vh", duration: 0.425, ease: "Power1.easeIn" }
      );
  };

  const animationTwo = (modalAnimation) => {
    modalAnimation
      .to(".modal-wrap", { top: "100%", duration: 1.06 })
      .to(".overlay", { zIndex: "9", opacity: 1 })
      .to(".slide-div", {
        left: "0",
      })
      .to(".slide-div2", {
        left:"0",
      })
      .to(".bottom-section", { bottom: "-100vh" });
  };

  useEffect(() => {
    const modalAnimation = gsap.timeline();
    switch (modalActive) {
      case true:
        animationOne(modalAnimation);
        break;
      case false:
        animationTwo(modalAnimation);
        break;
    }
  }, [modalActive]);

  return (
    <section
      className={
        "modal-wrap w-full h-full flex justify-center items-center bg-[#000] top-[100vh] left-0 absolute z-[8] "
      }
    >
      <div className="slide-div bg-[#000] absolute w-full h-[45%] top-0 left-0 z-[10]"></div>
      <div className="slide-div2 bg-[#000] absolute w-full h-[45%] bottom-0 left-0 z-[10]"></div>
      <div className="overlay z-[9] w-full h-full absolute left-0 top-0 opacity-[1] bg-[#000]"></div>
      <figure className="w-[80%] h-[55%] relative">
        <Image src={modalImage} alt={"Modal Image"} fill />
      </figure>

      <section
        className="absolute bottom-[30vh] left-[20vw] flex justify-start"
        onClick={() => {
          setModalActive((prev) => !prev);
        }}
      >
        <figure className="w-[20px] h-[20px] relative">
          <Image src={closeIcon} alt={"Modal Icon"} fill />
        </figure>
      </section>

      <section className="absolute bottom-0 left-0 w-full flex justify-center">
        <section className="bottom-section flex w-[70%] justify-start items-center relative bottom-[10vh]">
          <Player />
          <span
            className="absolute font-Terminus text-[#fff] ml-[100px]"
            ref={textRef}
          >
            UTILIZING METAFI, UE5, AND WEB3 TECHONOLOGY TO CREATE A SOCIAL AND
            IMMERSIVE GAMING EXPERIENCE.
          </span>
        </section>
      </section>
    </section>
  );
};

export default Modal;
