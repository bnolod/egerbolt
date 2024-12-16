import { ArrowDownIcon, ArrowUpIcon} from "@heroicons/react/24/outline";
import IconButton from "../_basic_components/iconButton";

interface SortProps {
  className?: string;
}

export default function SortPanel(props: SortProps) {
  return (
    <div className={(props.className && props.className) + " text-primary text-md flex flex-row w-full items-center"}>
      <IconButton text="Ár csökkenő" className="bg-secondary p-2 m-2">
        <ArrowDownIcon className="size-4" />
      </IconButton>
      <IconButton text="Ár növekvő" className="bg-secondary p-2 m-2">
        <ArrowUpIcon className="size-4" />
      </IconButton>
    </div>
  );
}
