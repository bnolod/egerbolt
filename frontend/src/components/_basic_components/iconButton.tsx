import { ReactNode } from "react";

interface ButtonProps {
  text?: string;
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  size?: number;
}

export default function IconButton(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={
        (props.className && props.className) +
        " flex flex-row justify-center content-center text-center items-center" +
        (props.text ? " rounded-lg" : " rounded-full")
      }
    >
      {props.children}
      {props.text && <span className="flex-grow">{props.text}</span>}
    </button>
  );
}
