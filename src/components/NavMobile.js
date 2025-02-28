import React from "react";

// import data
import { navData } from "../data";

// import icons
import { CgClose } from "react-icons/cg";

const NavMobile = ({setNavMobile}) => {
  return (
    <nav className="lg:hidden bg-violet h-full top-0 bottom-0 w-80 flex justify-center items-center">
      {/* close btn */}
      <div className="absolute top-2 left-2 cursor-pointer" onClick={() => setNavMobile(false)}>
        <CgClose className="text-3xl" />
      </div>
      {/* menu list */}
      <ul className="text-xl flex flex-col gap-y-8">
        {navData.map((item, index) => {
          console.log(item);
          return (
            <li key={index}>
              <a href={item.link}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
