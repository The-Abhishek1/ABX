import React, { useEffect, useState } from "react";
import c from "./Chatgpt.module.css";
import { IoMdAdd } from "react-icons/io";
import { LuSendHorizonal } from "react-icons/lu";
import OpenAI from "openai";
import { IoMdMenu } from "react-icons/io";

function Chatgpt() {
  // State for toggling sidebar
  const [showSide, setShowSide] = useState(false);
  const API_KEY = "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";

  const openai = new OpenAI({ apiKey: API_KEY, dangerouslyAllowBrowser: true });

  // async function main() {
  //   const completion = await openai.chat.completions.create({
  //     messages: [
  //       {
  //         role: "system",
  //         content: "You are a helpful assistant designed to output JSON.",
  //       },
  //       { role: "user", content: "Who won the world series in 2020?" },
  //     ],
  //     model: "gpt-3.5-turbo-1106",
  //     response_format: { type: "json_object" },
  //   });
  //   console.log(completion.choices[0].message.content);
  // }

  // main();

  return (
    <>
      <div className={c.container}>
        <section className={c.sidebar}>
          <div className={c.button}>
            <button>New Chat</button>
            <IoMdAdd />
          </div>
          <div className={c.history}>
            <ul className={c.historyitems}>
              <li>History</li>
              <li>History</li>
              <li>History</li>
              <li>History</li>
            </ul>
          </div>
          <div className={c.made}>Made By ABX</div>
        </section>
        <main className={c.chatBox}>
          <div className={c.menu}>
            <IoMdMenu size={27} onClick={(e) => setShowSide(!showSide)} />
          </div>
          <div className={c.ABX}>ABX</div>
          <div className={c.output}>
            <div className={c.outputitems}>
              <div className={c.outputeachitem}>Output</div>
              <div className={c.outputeachitem}>Output</div>
              <div className={c.outputeachitem}>Output</div>
              <div className={c.outputeachitem}>Output</div>
            </div>
          </div>
          <div className={c.input}>
            <input type="text" />
            <div className={c.send} onClick={open}>
              <LuSendHorizonal size={22} />
            </div>
          </div>
          <div className={c.info}>
            ChatGPT can make mistakes. Consider checking important information.
          </div>
        </main>
      </div>
      {showSide ? (
        <section id={c.menusidebar}>
          <div id={c.button}>
            <button>New Chat</button>
            <IoMdAdd />
          </div>
          <div id={c.history}>
            <ul id={c.historyitems}>
              <li>History</li>
              <li>History</li>
              <li>History</li>
              <li>History</li>
            </ul>
          </div>
          <div id={c.made}>Made By ABX</div>
        </section>
      ) : null}
    </>
  );
}

export default Chatgpt;
