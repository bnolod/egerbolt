import React, { ReactNode, useContext } from "react";
import { Theme } from "../../types/theme";
import Navbar from "../_navbar/Navbar";

interface ScreenProps {
  navbar?: boolean
  children?: ReactNode;
}

export default function Screen({navbar,children}: ScreenProps) {
  return <div className={"min-h-screen bg-primary"}>
    {navbar? <Navbar/> : null}
    {children}</div>;
}
