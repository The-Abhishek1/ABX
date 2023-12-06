import React, { useState } from "react";
import h from "./Header.module.css";
import logo from "./ab2.jpg";
import { MdDarkMode } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { FaCircleInfo } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoCloseCircleSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Header() {
  //States for handling closing and opening menu

  const [showOptions, setShowOptions] = useState(false);
  return (
    <>
      <div className={h.header}>
        <div className={h.combine}>
          <div className={h.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={h.name}>ABX</div>
        </div>

        <div className={h.nav}>
          <NavLink href="" className={h.link}>
            Documentation
          </NavLink>
          <NavLink href="" className={h.link}>
            Pricing
          </NavLink>
          <NavLink href="" className={h.link}>
            Resouce
          </NavLink>
          <NavLink href="" className={h.link}>
            contact
          </NavLink>
        </div>
        <div className={h.sidesearch}>
          <div className={h.search}>
            <IoMdSearch className={h.icon} size={20} />
            <input type="text" name="search" id="" placeholder="Search" />
          </div>
          <div className={h.icons}>
            <IoMdLock size={24} />
            <FaCircleInfo size={20} />
            <MdDarkMode size={24} />{" "}
          </div>
          <div className={h.profile}>
            <img src={logo} alt="" />
          </div>
        </div>
        <div className={h.menu}>
          {showOptions ? (
            <IoCloseCircleSharp
              size={27}
              onClick={(e) => {
                setShowOptions(false);
              }}
              className={h.menuClose}
            />
          ) : (
            <IoMdMenu
              size={27}
              onClick={(e) => {
                setShowOptions(true);
              }}
              className={h.menuClose}
            />
          )}
        </div>
      </div>
      {showOptions ? (
        <div className={h.sideOptions}>
          <div className={h.sideNav}>
            <div className={h.sideNavCombine}>
              <NavLink href="" className={h.link}>
                Documentation
              </NavLink>
              <IoIosArrowDroprightCircle className={h.arrow} size={20} />
            </div>
            <div className={h.sideNavCombine}>
              <NavLink href="" className={h.link}>
                Pricing
              </NavLink>
              <IoIosArrowDroprightCircle className={h.arrow} size={20} />
            </div>
            <div className={h.sideNavCombine}>
              <NavLink href="" className={h.link}>
                Resouce
              </NavLink>
              <IoIosArrowDroprightCircle className={h.arrow} size={20} />
            </div>

            <div className={h.sideNavCombine}>
              <NavLink href="" className={h.link}>
                contact
              </NavLink>
              <IoIosArrowDroprightCircle className={h.arrow} size={20} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Header;
