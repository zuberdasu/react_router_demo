import React, { Component } from "react";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import Products from "./components/Products";
import Nav from "./components/Nav";
import ProductsNav from "./components/ProductsNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <Nav />
          <Routes>
            <Route exact path="/products" element={<ProductsNav />}></Route>
          </Routes>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="contact" element={<Contact />}></Route>
          <Route exact path="about" element={<About />}></Route>
          <Route exact path="products" element={<Products />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
