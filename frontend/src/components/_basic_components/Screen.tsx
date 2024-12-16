import { ReactNode } from "react";

import Navbar from "../_navbar/Navbar";

interface ScreenProps {
  navbar?: boolean;
  children?: ReactNode;
  className?: string;
  centeredContent?: boolean;
}

export default function Screen({
  navbar,
  children,
  className,
  centeredContent,
}: ScreenProps) {
  return (<div className="min-h-screen bg-primary ">
    {navbar ? <Navbar /> : null}
    <div
      className={
        "" +
        (className && className) +
        (centeredContent ? " flex flex-col flex-wrap justify-center content-center items-center" : "")
      }
    >
      
      {children}
    </div>
    </div>
  );
}
