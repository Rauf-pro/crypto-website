import React from "react";

// import image
import Logo from "../assets/img/logo.svg";

// import components
import Nav from "./Nav";
import AccountBtns from "./AccountBtns";

// import icons
import { CgMenuRight } from "react-icons/cg";

const Header = ({setNavMobile}) => {
  return (
    <header
      className="py-[30px] lg:pt-[60px]"
      data-aos="fade-down"
      data-aos-delay="900"
      data-aos-duration="2000"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <a href="#">
          <img src={Logo} alt="" />
        </a>

        {/* nav & btns */}
        <div className="hidden lg:flex gap-x-[55px]">
          <Nav />
          <AccountBtns />
        </div>
        {/* open nav */}
        <div className="lg:hidden cursor-pointer" onClick={() => setNavMobile(true)}>
          <CgMenuRight className="text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
