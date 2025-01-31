import React from "react";

const AccountBtns = () => {
  return (
    <div className="flex items-center font-medium">
      {/* login btn */}
      <a className="hover:text-blue transition"  href="#" >Login</a>
      {/* seperator */}
      <span className="mx-6 text-white/20 font-thin">|</span>
      {/* register btn */}
      <button className="btn h-[52px] text-base px-8">Register</button>
    </div>
  );
};

export default AccountBtns;
