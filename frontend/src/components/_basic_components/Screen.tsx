import React, { ReactNode, useContext } from "react";
import { Theme } from "../../types/theme";

interface ScreenProps {
  children?: ReactNode;
}

export default function Screen({children}: ScreenProps) {
  return <div className={"min-h-screen bg-primary"}>{children}</div>;
}
