import React, { ReactNode, useContext } from "react";
import { Theme } from "../../types/theme";

interface ScreenProps {
  theme: Theme;
  children?: ReactNode;
}

export default function Screen({ theme, children }: ScreenProps) {
  return <div className={"min-h-screen text-gray-600 dark:bg-black"}>{children}</div>;
}
