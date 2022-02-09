import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import your route components too

import RodaDaVida from "./pages/rodaDaVida2";
import Linguagem from "./pages/linguagemDoAmor";

import Personalidade from "./pages/personalidade"
import App from "./App";

render(
  <BrowserRouter>
    <App />
      <Routes>
        <Route path="/" element={<RodaDaVida />} />
        <Route path="/linguagemDoAmor" element={<Linguagem />} />
        <Route path="/avaliacao-comportamental" element={<Personalidade />} />
      </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
