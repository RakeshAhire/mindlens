const Logo = () => {
  return (
    <header className="flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-xs font-inter">
      <div className="flex flex-row items-start justify-start gap-[76px] max-w-full mq450:gap-[38px]">
        <div className="h-[59px] w-[58px] relative  text-white">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-black w-full h-full z-[2]" />
          <b className="absolute top-[22px] left-[12px] inline-block w-[35px] h-4 min-w-[35px] z-[3]">
            LOGO
          </b>
        </div>
      </div>
    </header>
  );
};

export default Logo;
