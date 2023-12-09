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
import { MdOutlineLightMode } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import Template from "../Template/Template";
import { useId } from "react";
function Header() {
  //State for handling closing and opening menu
  const [showOptions, setShowOptions] = useState(false);

  //State for toggling Dark mode and Light Mode
  const [dark, setDark] = useState(true);

  //state  for toggloing profile option
  const [prfoileshow, setProfileShow] = useState(false);
  //State for passing props
  const [hideTemplate, setHideTemplate] = useState(false);
  return (
    <>
      {hideTemplate ? <Template dark={dark} /> : null}

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
            <IoMdLock size={24} className={h.sideIcons} />
            <FaCircleInfo size={20} className={h.sideIcons} />
            {dark ? (
              <MdDarkMode
                size={24}
                className={h.sideIcons}
                onClick={(e) => {
                  setDark(!dark);
                }}
              />
            ) : (
              <MdOutlineLightMode
                size={24}
                className={h.sideIcons}
                onClick={(e) => {
                  setDark(!dark);
                }}
              />
            )}
          </div>
          <div
            className={h.profile}
            onClick={(e) => {
              setProfileShow(!prfoileshow);
            }}
          >
            <img src={logo} alt="" />
          </div>
        </div>
        <div className={h.menu}>
          <div className={h.theme}>
            {dark ? (
              <MdDarkMode
                size={26}
                className={h.sideIcons}
                onClick={(e) => {
                  setDark(!dark);
                }}
              />
            ) : (
              <MdOutlineLightMode
                size={26}
                className={h.sideIcons}
                onClick={(e) => {
                  setDark(!dark);
                }}
              />
            )}
          </div>
          <div>
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
      {prfoileshow ? (
        <div className={h.profileView}>
          <div className={h.profileView2}>
            <div className={h.profileViewOptions} id={h.profileName}>
              👋 Hey Idiot
            </div>
          </div>

          <div className={h.profileView2}>
            <div className={h.profileViewOptions}>
              Profile Settings <IoSettings className={h.profileIcons} />
            </div>
            <div className={h.profileViewOptions} id={h.logout}>
              Log out
              <IoMdLogOut className={h.profileIcons} />
            </div>
          </div>
        </div>
      ) : null}
      <div
        className={h.profile}
        id={h.profile}
        onClick={(e) => {
          setProfileShow(!prfoileshow);
        }}
      >
        <img src={logo} alt="" />
      </div>
    </>
  );
}

export default Header;
