import React from "react";
import s from "./Sidebar.module.css";
import { IoIosAdd } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { BsStars } from "react-icons/bs";
import { IoDocumentsSharp } from "react-icons/io5";
import { MdLockPerson } from "react-icons/md";
import { FaImages } from "react-icons/fa6";
import { TbBulbFilled } from "react-icons/tb";
import { FaLink } from "react-icons/fa6";

function Sidebar() {
  return (
    <>
      <div className={s.container}>
        <div className={s.items}>
          <div className={s.item}>
            <FaHome size={20} />
            All Features <IoIosAdd className={s.icons} size={22} />
          </div>
          <div className={s.item}>
            <BsStack size={20} />
            My Projects
          </div>
          <div className={s.item}>
            <BsStars size={20} />
            ChatGPT
          </div>
          <div className={s.item}>
            <FaImages size={20} />
            Image Generator
          </div>
          <div className={s.item}>
            <TbBulbFilled size={20} />
            Bussiness Idea Generator
          </div>
          <div className={s.item}>
            <FaLink size={20} />
            Domain Name Generator
          </div>
          <div className={s.item}>
            <IoDocumentsSharp size={20} />
            Other Page <IoIosArrowDropdown className={s.icons} size={18} />
          </div>
          <div className={s.item}>
            <MdLockPerson size={20} />
            Admin Page <IoIosArrowDropdown className={s.icons} size={18} />
          </div>
        </div>
        <div className={s.button}>
          <button>Set API Key</button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
