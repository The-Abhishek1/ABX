import React from "react";
import t from "./Template.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Chatgpt from "../ChatGPT/Chatgpt";
function Template() {
  return (
    <>
      <div className={t.whole}>
        <section className={t.header}>
          <Header />
        </section>
        <nav className={t.navbar}>
          <Sidebar />
        </nav>
        <section className={t.chat}>
          <Chatgpt />
        </section>
      </div>
      <div className={t.menusidebar}>
        <Sidebar />
      </div>
    </>
  );
}

export default Template;
