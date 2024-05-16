import React from "react";
import Mainstream from "./pages/Mainstream";
import { Routes, Route } from "react-router-dom";
import H_page from "./pages/Home_screen";
import A_page from "./pages/About_screen";
import C_page from './pages/Contact_screen'
import E_page from "./pages/Experience_screen";
import P_page from './pages/Project_screen'
import S_web_page from './pages/Web_screen'
import S_prog_page from './pages/Program_screen'
function Change() {
  return (
    <div>
      {" "}
      <Routes>
        <Route path="/" element={<Mainstream />}>
          <Route index element={<H_page />} />
          <Route path="/about" element={<A_page/>}/>
          <Route path="/contact" element={<C_page/>}/>
          <Route path="/skill/web" element={<S_web_page/>}/>
          <Route path="/skill/programming" element={<S_prog_page/>}/>
          <Route path="/project" element={<P_page/>}/>
          <Route path="/experience" element={<E_page/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default Change;
