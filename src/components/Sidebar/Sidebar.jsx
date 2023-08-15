import "./Styles.scss";

const ListItem = ({ text }) => {
  return (
    <>
      <li className="flex flex-start items-center mb-[12px] w-[100%]">
        <div className="w-[6px] mr-[4px]"></div>
        <div className=" w-[2px]"></div>
        <span className="ml-[10px] font-Terminus text-[20px]">
          {text}
        </span>
      </li>
    </>
  );
};

const Sidebar = () => {
  return (
    <aside className="absolute left-[30px] top-[200px]">
      <ul className="flex flex-col list-none justify-start items-start w-[150px]">
        <ListItem text={"MAP"}/>
        <ListItem text={"MISSIONS"}/>
        <ListItem text={"CHARACTERS"}/>
        <ListItem text={"LOADOUTS"}/>
        <ListItem text={"EVENTS"}/>

      </ul>
    </aside>
  );
};

export default Sidebar;
