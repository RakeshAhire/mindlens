import Logo from "./Logo";
import MenusItems from "./MenusItems";

const Sidebar = () => {
 
  return (
      <div className="w-full h-screen bg-white flex flex-col gap-8 items-center pt-2 ">
        <Logo />
        <MenusItems  />
        </div>
  );
};

export default Sidebar;
