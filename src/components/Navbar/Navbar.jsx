"use client";
import Image from "next/image";
import logo from "../../assets/logo/logo.svg";
import discordIcon from "../../assets/icons/Discord.svg";
import twitterIcon from "../../assets/icons/Dwitter.svg";

import "./Styles.scss";
import { useState } from "react";

const Navbar = () => {
  const [hamActive, setHamActive] = useState(false);

  return (
    <nav className="fixed top-7 md:w-[95vw] md:h-[70px] flex justify-start items-center z-[9]">
      <section className="h-[100%] w-[80px] flex justify-center items-center border border-[#302f2f]">
        <figure className="relative h-[50%] w-[50%]">
          <Image src={logo} alt={"Ultiverse logo"} fill />
        </figure>
      </section>
      <section className="dynamic-width-a progress-parent relative h-[100%] border border-light-silver border-l-0">
        <div
          className="absolute left-0 top-0 
          bg-theme-cyan h-[100%] z-[2] transition-[width] duration-300 ease-in-out"
        ></div>
      </section>
      <ul className="dynamic-width-b h-[100%] flex list-none border border-[#302f2f] border-l-0 font-Terminus">
        <li className="link-wrap h-100% w-[30%] border-r border-[#302f2f] flex justify-center items-center relative">
          <span className="text-[#fff]">ABOUT</span>
          <span className="text-[#7e7c7c] absolute bottom-[6px] left-[12px] text-[13px]">
            001
          </span>
        </li>

        <li className="h-100% w-[30%] border-r border-[#302f2f] flex justify-start items-center relative">
          <section className="link-wrap w-[50%] h-[100%] border-r border-[#302f2f] relative flex justify-center items-center">
            <section className="icon-holder p-[7px] rounded-[50px]">
              <figure className="h-[14px] w-[17px]  relative">
                <Image src={discordIcon} alt={"DIscord icon"} fill />
              </figure>
            </section>

            <span className="text-[#7e7c7c] absolute bottom-[6px] left-[12px] text-[13px]">
              002
            </span>
          </section>

          <section className="link-wrap w-[50%] h-[100%] border-r border-[#302f2f] relative flex justify-center items-center">
            <section className="icon-holder p-[7px] rounded-[50px]">
              <figure className="h-[14px] w-[17px]  relative">
                <Image src={twitterIcon} alt={"Twitter icon"} fill />
              </figure>
            </section>

            <span className="text-[#7e7c7c] absolute bottom-[6px] left-[12px] text-[13px]">
              003
            </span>
          </section>
        </li>

        <li className="link-wrap h-100% w-[30%] border-r border-[#302f2f] flex justify-center items-center relative">
          <span className="text-[#fff]">LAUNCH ULTIVERSE</span>
          <span className="text-[#7e7c7c] absolute bottom-[6px] left-[12px] text-[13px]">
            004
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
