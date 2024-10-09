import React from "react";
import { Box, styled } from "@mui/material";
import { Controlled as ControlledEditer } from "react-codemirror2";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
 
import '../App.css';

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 20px 10px;
  gap: 2;
`;

const Header = styled(Box)`
  background: #000000;
  color: #ffffff;
  display: flex;
  font-weight: 700;
  justify-content: space-between;
`;
export const Editer = ({langName,icon,color}) => {
  return (
    <>
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
              marginLeft: "12px",
              color:"black",
             
            }}
          >
           {icon}
          </Box>
         {langName}
        </Heading>
        <CloseFullscreenIcon />
      </Header> 
      <ControlledEditer className='Controlled-editer'
          options={{
            theme:"material",
            lineNumbers:true,
          }} />
    </>
  );
};
