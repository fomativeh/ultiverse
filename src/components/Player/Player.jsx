import { useEffect, useState } from "react";
import { gsap } from "gsap";

const Player = () => {
  // const [isPlaying, setIsPlaying] = useState(true);
  const animation = gsap.timeline();

  useEffect(() => {
    const shortDivs = document.querySelectorAll(".shortDivs");
    const tallDivs = document.querySelectorAll(".tallDivs");
    const midDivs = document.querySelectorAll(".midDivs");

    animation
      .fromTo(
        shortDivs,
        { height: "20%" },
        {
          height: "100%",
          repeat: -1,
          yoyo: true,
          duration: 0.625,
          ease: "linear",
        }
      )
      .fromTo(
        tallDivs,
        { height: "100%" },
        {
          height: "20%",
          repeat: -1,
          yoyo: true,
          duration: 0.425,
          ease: "linear",
        },
        "<"
      )
      .fromTo(
        midDivs,
        { height: "100%" },
        {
          height: "30%",
          repeat: -1,
          yoyo: true,
          duration: 0.625,
          ease: "linear",
        },
        "<"
      );
  }, []);

  // useEffect(() => {
  //   // if (isPlaying) {
  //   //   animation.play();
  //   // } else {
  //   //   animation.pause();
  //   // }
  //   if(!isPlaying){
  //     animation.pause()
  //   }
  // }, [isPlaying]);

  return (
    <section
      className="flex justify-center items-center h-[40px]"
      // onClick={() => {
      //   // animation.paused == true ? animation.play() : animation.pause();
      //   // let a = animation.paused();
      //   // console.log(a);
      //   // animation.pause();
      // }}
    >
      <div className="shortDivs bg-[#fff] w-[2px] mr-[4px] rounded-[20px] h-[20%]"></div>
      <div className="midDivs bg-[#fff] w-[2px] mr-[4px] rounded-[20px] h-[70%]"></div>
      <div className="tallDivs bg-[#fff] w-[2px] mr-[4px] rounded-[20px] h-[100%]"></div>
      <div className="shortDivs bg-[#fff] w-[2px] mr-[4px] rounded-[20px] h-[20%]"></div>
      <div className="midDivs bg-[#fff] w-[2px] mr-[4px] rounded-[20px] h-[70%]"></div>
      <div className="tallDivs bg-[#fff] w-[2px] mr-[4px] rounded-[20px] h-[100%]"></div>
    </section>
  );
};

export default Player;
