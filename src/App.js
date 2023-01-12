import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainlayout from "./component/Mainlayout/Mainlayout";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Mainlayout />}>
            <Route index element={<Home/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
