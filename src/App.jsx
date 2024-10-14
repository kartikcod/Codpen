import React from "react";
import {Navbar}from "./components/Navbar";
import { Code } from "./components/Code";
import { Editer } from "./components/Editer";
import { DataProvider } from "./Context/DataProvider";
import { Home } from "./components/Home";
import { Result } from "./components/Result";


function App() {
  return (
    <>    <DataProvider>
       <Home/>
       </DataProvider>
    </>
  );
}

export default App;
