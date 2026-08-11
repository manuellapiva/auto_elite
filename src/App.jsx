import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from './components/Footer'
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Faq from "./pages/Faq";
import Error from "./pages/Error";
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'

function App() {
  return (
    <>
      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/produtos" element={<Produtos />} />

        <Route path="/sobre" element={<Sobre />} />

        <Route path="/contato" element={<Contato />} />

        <Route path="/faq" element={<Faq />} />

        <Route path="*" element={<Error />} />

      </Routes>

      <Footer/>
    </>
  );
}

export default App;