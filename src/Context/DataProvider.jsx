import { useContext, useState } from "react";

const context = useContext();

const [html, sethtml] = useState("");
const [css, setcss] = useState("");
const [javascript, setjavascript] = useState("");

export const DataProvider = () => {
  return (
    <context.provider>
      value=
      {{
        html,
        css,
        javascript,
        sethtml,
        setcss,
        setjavascript,
      }}
    </context.provider>
  );
};
