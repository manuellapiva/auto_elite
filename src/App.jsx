import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Produtos from "./pages/Produtos";
import Contato from "./pages/Contato";
import Faq from "./pages/Faq";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/sobre" element={<Sobre />} />

        <Route path="/produtos" element={<Produtos />} />

        <Route path="/contato" element={<Contato />} />

        <Route path="/faq" element={<Faq />} />

        <Route path="*" element={<Error />} />

      </Routes>
    </>
  );
}

export default App;