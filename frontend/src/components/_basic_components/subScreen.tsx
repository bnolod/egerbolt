import { ReactNode } from "react";

import Navbar from "../_navbar/Navbar";

interface ScreenProps {
  children?: ReactNode;
  className?: string;
  centeredContent?: boolean;
}

export default function Subscreen({
  children,
  className,
  centeredContent,
}: ScreenProps) {
  return (<div className={"min-h-screen bg-primary sm:w-full md:w-2/3" +
    " " +
    (className ? className : "") +
    (centeredContent ? "flex flex-col flex-wrap justify-center content-center" : "")
  }>
 
      
      {children}
    </div>
  );
}
