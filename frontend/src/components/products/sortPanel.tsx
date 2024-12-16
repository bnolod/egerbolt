import { ArrowDownIcon, ArrowUpIcon} from "@heroicons/react/24/outline";
import IconButton from "../_basic_components/iconButton";
import { ReactNode } from "react";

interface SortProps {
  className?: string;
  children: ReactNode
}

export default function SortPanel(props: SortProps) {
  return (
    <div className={(props.className && props.className) + " text-primary text-md flex flex-row w-full items-center"}>
      {props.children}
    </div>
  );
}
