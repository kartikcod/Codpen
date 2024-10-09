import React from "react";
import { Box, styled } from "@mui/material";
import { Controlled as ControlledEditer } from "react-codemirror2";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";

import "../App.css";

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 20px;
  border-top: 5px solid hsl(225.88deg 3.99% 22.86%);
`;

const Header = styled(Box)`
  background: #000000;
  color: #ffffff;
  display: flex;
  font-weight: 700;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
  
  
`;

const Container=styled(Box)`
  flex-grow: 1;
`

export const Editer = ({ langName, icon, color }) => {
  return (
    <>
   < Container>

      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: color,
              width: 20,
              height: 20,
              borderRadius: 15,
              display: "flex",
              placeContent: "center",
              color: "black",
              marginRight: "12px",
              marginTop: "-1px",
            }}
          >
            {icon}
          </Box>
          {langName}
        </Heading>
        <CloseFullscreenIcon style={{margin:"12px"}} />
      </Header>
      
      <ControlledEditer
        className="Controlled-editer"
        options={{
          theme: "material",
          lineNumbers: true,
        }}
      />
      </Container>
    
    </>
  );
};
