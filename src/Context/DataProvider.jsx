import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [Js, setJs] = useState("");

  return (
    <DataContext.Provider
      value={{
        html,
        css,
        Js,
        setHtml, 
        setCss,
        setJs,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
