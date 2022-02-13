import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Pagina1 from "./paginas/Sobre";
import Home from "./paginas/Home";
import Musical from "./paginas/Musical";
import Literatura from "./paginas/Literatura";
import Comunidade from "./paginas/Comunidade";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="sobre-nos/*" element={<Pagina1 />} />
      <Route path="musical/*" element={<Musical />} />
      <Route path="literatura/*" element={<Literatura />} />
      <Route path="comunidade/*" element={<Comunidade />} />
    </Routes>
  );
}

export default App;
