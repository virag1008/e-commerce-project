import React from "react";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Ecom/Component/Footer";
import Nav from "./Ecom/Component/Nav";
import Signup from "./Ecom/Component/Signup";
import PrivateComponent from "./Ecom/Component/PrivateComponent";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h1> Product Listing Component </h1>} />
            <Route path="/add" element={<h1>add Product </h1>} />
            <Route path="/update" element={<h1>update Product Listing </h1>} />
            <Route path="/logout" element={<h1>logout </h1>} />
            <Route path="/profile" element={<h1>profile Product </h1>} />
          </Route>
          <Route path="/signup" element={<Signup />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
