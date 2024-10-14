import React, { useContext } from "react";
import { Editer } from "./Editer";
import { Box, styled } from "@mui/material";
import { DataContext } from "../Context/DataProvider";



const Container=styled(Box)`
  display: flex;
  background-color: #0d0e0f;
`
 

export const Code = () => {

  const {html,setHtml,css,setCss ,Js,setJs}=useContext(DataContext);

  return (
    <Container>
      <Editer icon="/" langName="HTML" color="red" value={html} OnChange={setHtml}/>
      <Editer icon="*" langName="CSS" color="hsl(196.18deg 100% 52.75%)" value={ css} OnChange={ setCss}/>
      <Editer icon="()"langName="JAVASCRIPT" color="hsl(49.32deg 100% 62.55%)" value={Js} OnChange={setJs}/>
    </Container>
    
  );
};
