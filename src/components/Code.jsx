import React from "react";
import { Editer } from "./Editer";

export const Code = () => {
  return (
    <>
      <Editer icon="/" langName="HTML" color="red" />
      <Editer icon="*" langName="CSS" color="hsl(196.18deg 100% 52.75%)" />
      <Editer icon="()"langName="JAVASCRIPT" color="hsl(49.32deg 100% 62.55%)" />
    </>
  );
};
