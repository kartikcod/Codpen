import React from "react";
import { Editer } from "./Editer";
import { Box, styled } from "@mui/material";

const Container=styled(Box)`
  display: flex;
`


export const Code = () => {
  return (
    <Container>
      <Editer icon="/" langName="HTML" color="red" />
      <Editer icon="*" langName="CSS" color="hsl(196.18deg 100% 52.75%)" />
      <Editer icon="()"langName="JAVASCRIPT" color="hsl(49.32deg 100% 62.55%)" />
    </Container>
    
  );
};
