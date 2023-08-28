import "./Styles.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const ListItem = ({ text }) => {
  return (
    <>
      <li className="flex flex-start items-center mb-[12px] w-[100%]">
        <div className="div1 w-[6px] mr-[4px]"></div>
        <div className="div2 w-[2px]"></div>
        <span
          className="ml-[10px] font-Terminus text-[20px]"
          data-spanText={text}
        >
          {text}
        </span>
      </li>
    </>
  );
};

const Sidebar = () => {
  const listRef = useRef();

  useEffect(() => {
    const lists = listRef.current.querySelectorAll("li");

    const handleMouseEnter = (e) => {
      const li = e.currentTarget;
      const spans = listRef.current.querySelectorAll("span");
      const divs = listRef.current.querySelectorAll("div");

      const spanEL = li.querySelector("span");
      const spanText = spanEL.getAttribute("data-spanText");
      const div1 = li.querySelector(".div1");
      const div2 = li.querySelector(".div2");

      // Reset other spans and divs
      spans.forEach((otherSpan) => {
        if (otherSpan !== spanEL) {
          gsap.to(otherSpan, { color: "#fff", opacity: 1 });
        }
      });

      divs.forEach((otherDiv) => {
        if (otherDiv !== div1 && otherDiv !== div2) {
          gsap.fromTo(
            otherDiv,
            { height: "100%" },
            {
              backgroundColor: "#fff",
              height: "100%",
              opacity: 0.3,
            }
          );
        }
      });

      // Animate the current span and divs
      gsap.fromTo(
        spanEL,
        { text: "" },
        { color: "#00ffe6", duration: 1, opacity: 1, text: spanText }
      );
      gsap.fromTo(
        div1,
        { height: "0%" },
        {
          height: "60%",
          backgroundColor: "#00ffe6",
          opacity: 1,
          duration: 2,
        }
      );
      gsap.fromTo(
        div2,
        { height: "0%" },
        {
          height: "100%",
          backgroundColor: "#00ffe6",
          opacity: 1,
          duration: 1.3,
        }
      );
    };

    const handleMouseLeave = (e) => {
      const li = e.currentTarget;
      const spanEL = li.querySelector("span");
      const divs = li.querySelectorAll("div");

      // Reset the current span and divs
      gsap.to(spanEL, { color: "#fff", opacity: 1 });
      gsap.to(divs, { backgroundColor: "#fff", height: "100%", opacity: 0.3 });
    };

    lists.forEach((list) => {
      list.addEventListener("mouseenter", handleMouseEnter);
      list.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup: Remove event listeners when the component unmounts
    return () => {
      lists.forEach((list) => {
        list.removeEventListener("mouseenter", handleMouseEnter);
        list.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <aside className="absolute left-[30px] top-[200px] z-[2]">
      <ul
        className="flex flex-col list-none justify-start items-start w-[150px]"
        ref={listRef}
      >
        <ListItem text={"MAP"} />
        <ListItem text={"MISSIONS"} />
        <ListItem text={"CHARACTERS"} />
        <ListItem text={"LOADOUTS"} />
        <ListItem text={"EVENTS"} />
      </ul>
    </aside>
  );
};

export default Sidebar;
