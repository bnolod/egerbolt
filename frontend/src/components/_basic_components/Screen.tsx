import{ ReactNode} from "react";

import Navbar from "../_navbar/Navbar";

interface ScreenProps {
  navbar?: boolean
  children?: ReactNode;
  className?: string;
}

export default function Screen({navbar,children,className}: ScreenProps) {
  return <div className={"min-h-screen bg-primary "+
    (className ? className : "")}>
    {navbar? <Navbar/> : null}
    {children}</div>;
}
