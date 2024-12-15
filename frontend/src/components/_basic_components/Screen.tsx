import React, { ReactNode, useContext } from "react";
import { Theme } from "../../types/theme";

interface ScreenProps {
  theme: Theme;
  children?: ReactNode;
}

export default function Screen({ theme, children }: ScreenProps) {
  return <div className="{theme}">{children}</div>;
}
