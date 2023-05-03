import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./containers/Header/Header.js";
import Main from "./containers/Main/Main.js";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
        {/* <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/main" element={<Main />} />
        </Routes> */}
      </BrowserRouter>
    
    </div>
  );
};
export default App;