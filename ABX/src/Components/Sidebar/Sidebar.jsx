import React, { useState } from "react";
import s from "./Sidebar.module.css";
import { FaHome } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { BsStack } from "react-icons/bs";
import { BsStars } from "react-icons/bs";
import { MdLockPerson } from "react-icons/md";
import { FaImages } from "react-icons/fa6";
import { TbBulbFilled } from "react-icons/tb";
import { FaLink } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";

function Sidebar() {
  const [showHide, setShowHide] = useState(false);
  //State for hiding and showing chatGPT page
  const [gpt, setGpt] = useState(false);
  return (
    <>
      <div
        className={s.home}
        onClick={(e) => {
          setShowHide(!showHide);
        }}
      >
        <div>
          <FaHome />
        </div>
        <div> View All</div>
      </div>
      <div className={s.container}>
        <div className={s.items}>
          <div className={s.item}>
            <FaHome size={20} className={s.firstIcons} />
            All Features{" "}
            <IoIosArrowDroprightCircle className={s.icons} size={18} />
          </div>
          <div className={s.item}>
            <BsStack size={20} className={s.firstIcons} />
            My Projects{" "}
            <IoIosArrowDroprightCircle className={s.icons} size={18} />
          </div>
          <div className={s.item} onClick={(e) => setGpt(!gpt)}>
            <BsStars size={20} className={s.firstIcons} />
            ChatGPT <IoIosArrowDroprightCircle className={s.icons} size={18} />
          </div>
          <div className={s.item}>
            <FaImages size={20} className={s.firstIcons} />
            Image Generator{" "}
            <IoIosArrowDroprightCircle className={s.icons} size={18} />
          </div>
          <div className={s.item}>
            <TbBulbFilled size={20} className={s.firstIcons} />
            Bussiness Idea Generator
            <IoIosArrowDroprightCircle className={s.icons} size={18} />
          </div>
          <div className={s.item}>
            <FaLink size={20} className={s.firstIcons} />
            Domain Name Generator
            <IoIosArrowDroprightCircle className={s.icons} size={18} />
          </div>
          <div className={s.item}>
            <IoSettings size={20} />
            Settings <IoIosArrowDroprightCircle className={s.icons} size={18} />
          </div>
          <div className={s.item}>
            <MdLockPerson size={20} className={s.firstIcons} />
            User Profile
            <IoIosArrowDroprightCircle className={s.icons} size={18} />
          </div>
        </div>
        <div className={s.button}>
          <button>Set API Key</button>
        </div>
      </div>
      {showHide ? (
        <div className={s.container} id={s.container2}>
          <div className={s.items}>
            <div className={s.item}>
              <FaHome size={20} className={s.firstIcons} />
              All Features{" "}
              <IoIosArrowDroprightCircle className={s.icons} size={18} />
            </div>
            <div className={s.item}>
              <BsStack size={20} className={s.firstIcons} />
              My Projects{" "}
              <IoIosArrowDroprightCircle className={s.icons} size={18} />
            </div>
            <div className={s.item} onClick={(e) => setGpt(!gpt)}>
              <BsStars size={20} className={s.firstIcons} />
              ChatGPT{" "}
              <IoIosArrowDroprightCircle className={s.icons} size={18} />
            </div>
            <div className={s.item}>
              <FaImages size={20} className={s.firstIcons} />
              Image Generator{" "}
              <IoIosArrowDroprightCircle className={s.icons} size={18} />
            </div>
            <div className={s.item}>
              <TbBulbFilled size={20} className={s.firstIcons} />
              Bussiness Idea Generator
              <IoIosArrowDroprightCircle className={s.icons} size={18} />
            </div>
            <div className={s.item}>
              <FaLink size={20} className={s.firstIcons} />
              Domain Name Generator
              <IoIosArrowDroprightCircle className={s.icons} size={18} />
            </div>
            <div className={s.item}>
              <IoSettings size={20} />
              Settings{" "}
              <IoIosArrowDroprightCircle className={s.icons} size={18} />
            </div>
            <div className={s.item}>
              <MdLockPerson size={20} className={s.firstIcons} />
              User Profile
              <IoIosArrowDroprightCircle className={s.icons} size={18} />
            </div>
          </div>
          <div className={s.button} id={s.button}>
            <button>Set API Key</button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Sidebar;
