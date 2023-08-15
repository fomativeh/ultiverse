import "./Styles.scss";
import modalImage from "../../assets/images/modal-img.png";
import closeIcon from "../../assets/icons/x.svg";
import Image from "next/image";
import player from "../../assets/images/player.svg";

const Modal = ({ modalActive, setModalActive }) => {
  return (
    <section
      className={`${
        modalActive ? "transition-slide-up" : "transition-slide-down"
      } w-full h-full flex justify-center items-center bg-[#000] bottom-0 left-0 absolute z-[2] `}
    >
      <figure className="w-[80%] h-[55%] relative">
        <Image src={modalImage} alt={"Modal Image"} fill />
      </figure>

      <section
        className="absolute bottom-[30vh] left-[20vw] flex justify-start"
        onClick={() => setModalActive(false)}
      >
        <figure className="w-[20px] h-[20px] relative">
          <Image src={closeIcon} alt={"Modal Icon"} fill />
        </figure>
      </section>

      <section className="absolute bottom-0 left-0 w-full">
        <section className="w-full flex justify-center items-center relative bottom-[10vh]">
          <section className="absolute left-[50px]">
            <figure className="w-[31px] h-[34px] relative z-[9]">
              <Image src={player} alt={"Hero img"} fill draggable={false} />
            </figure>
          </section>
          <span className="absolute font-Terminus text-[#fff] ">
            UTILIZING METAFI, UE5, AND WEB3 TECHONOLOGY TO CREATE A SOCIAL AND
            IMMERSIVE GAMING EXPERIENCE
          </span>
        </section>
      </section>
    </section>
  );
};

export default Modal;
