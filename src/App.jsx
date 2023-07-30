import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import Product from "./Pages/product/Product";
import Software from "./Pages/software/Software";

import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />} />
        <Route path="software" element={<Software />}/>
        <Route path="product" element={<Product />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
