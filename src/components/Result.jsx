import React, { useContext } from "react";
import { DataContext } from "../Context/DataProvider";
import { Box } from "@mui/material";



export const Result = () => {

    const { html, css, js } = useContext(DataContext);

const SrcCode = [
  <html>
    <body>${html} </body>
    <style>${css} </style>
    <script>${js}</script>
  </html>,
];
  return (
    <Box>
      <iframe
        SrcCode={SrcCode}
        frameborder={0}
        width="100%"
        height="100%"
        sandbox="allow-scripts"
      ></iframe>
    </Box>
  );
};
