import { ReactNode } from "react";

interface CardProps {
  className?: string;
  image?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  centeredContent?: boolean
}

export default function Card(props: CardProps) {
  return (
    <div className={(props.className && props.className) + " p-4  rounded-xl " + (props.centeredContent && " flex flex-col text-center flex-wrap justify-center content-center ")}>
      {props.image ? <img src={props.image} /> : null}
      {props.title ? <h1 className="font-bold text-primary">{props.title}</h1> : null}
      {props.subtitle ? <h2 className="font-semibold text-primary">{props.subtitle}</h2> : null}
      {props.description ? <h3 className="font-medium text-secondary">{props.description}</h3> : null}
      {props.children}
    </div>
  );
}
