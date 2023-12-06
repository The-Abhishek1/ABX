import React from "react";
import h from "./Header.module.css";
import logo from "./ab2.jpg";

function Header() {
  return (
    <div className={h.header}>
      <div className={h.combine}>
        <div className={h.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={h.name}>ABX</div>
      </div>

      <div className={h.nav}>
        <a href="">Documentation</a>
        <a href="">Pricing</a>
        <a href="">Resouce</a>
        <a href="">contact</a>
      </div>
      <div className={h.sidesearch}>
        <div className={h.search}>
          <input type="text" name="search" id="" placeholder="Search" />
        </div>
        <div className={h.icons}>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <div className={h.profile}>A</div>
      </div>
    </div>
  );
}

export default Header;
