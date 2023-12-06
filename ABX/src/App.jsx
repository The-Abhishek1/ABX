import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={[<Header />, <Sidebar />]} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
