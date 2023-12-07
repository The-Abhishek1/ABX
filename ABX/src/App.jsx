import viteLogo from "/vite.svg";
import a from "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className={a.whole}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={[<Header />, <Sidebar />]} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
