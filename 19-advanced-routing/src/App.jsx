import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes, useParams } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Courses from "./pages/Courses";
import CoursesDetail from "./pages/CoursesDetail";

const App = () => {
  let {id} = useParams();
      console.log({id})

  return (
    <div>
      <Navbar />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/About" element={<About />}>
          About
        </Route>
        <Route path="/contact" element={<Contact />}>
          Contact
        </Route>
        <Route path="*" element={<NotFound />}>
          NotFound
        </Route>

        {/* Dynamic Routing  */}
        <Route path="/courses/" element={<Courses/>}/>
        <Route path='/courses/:id' element={<CoursesDetail />}/>

        {/* Nested Routing */}

        <Route path="/product" element={<Product />}>
          Product
        <Route path="/product/men" element={<Men/>}>Men</Route>
        <Route path="/product/women" element={<Women/>}>Women</Route>
        </Route>
      </Routes>
      
    </div>
  );
};

export default App;
