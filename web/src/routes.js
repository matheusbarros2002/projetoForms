import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RodaDaVida from "./pages/rodaDaVida";
// import your route components too

export default function Routess() {
    return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RodaDaVida />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
}


