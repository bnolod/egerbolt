import { BackspaceIcon, TrashIcon } from "@heroicons/react/24/outline";
import Card from "../_basic_components/card";
import IconButton from "../_basic_components/iconButton";
import { useCart } from "../../contexts/cartContext";

interface CardProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  className?: string;
  image: string
}

export default function CartCard(props: CardProps) {
    const { removeFromCart } = useCart();
    
      const handleRemove = () => {
        removeFromCart(props.id)
      };
    return <Card
    key={props.id}
    // centeredContent={true}
    className="bg-secondary m-2 p-2 flex flex-col w-full"
    >
        <img src={props.image} alt={props.name} className="size-32 object-cover mr-5" />
        <div>

        <h1 className="text-primary text-3xl">{props.name}</h1>
        <p className="text-secondary text-xl">
            {props.price*props.quantity} HUF
        </p>
        <p className="text-secondary text-lg">
            {props.quantity} db
        </p>
        </div>
        <IconButton className="text-black bg-red-600 w-min px-6" text="Törlés a kosárból"><TrashIcon className="size-12"/></IconButton>
    </Card>
}
