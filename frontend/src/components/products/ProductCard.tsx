import { useContext, useState } from "react";
import IconButton from "../_basic_components/iconButton";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCart } from "../../contexts/cartContext";

export interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  className?: string;
}


export default function ProductCard(props: ProductCardProps) {
  
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({id : props.id, name:props.name, price:props.price, quantity:1});
  };
  return (
    <div
      className={
        "w-48 p-4 m-4 text-center rounded-xl bg-secondary " +
        (props.className ? props.className : "")
      }
    >
      <div className="flex flex-col">
        <img
          src={props.image}
          alt={props.name}
          className="h-48 w-full rounded-xl object-cover"
        />

        <div>
          <h1 className="text-primary ">{props.name}</h1>
          <p className="text-secondary truncate">{props.description}</p>
          <div className="flex flex-row justify-evenly">
            <p className="text-primary">{props.price} huf</p>
            <p className="text-primary">{props.quantity} db</p>
          </div>
        </div>
        <IconButton
          className="bg-accent-primary hover:bg-accent-secondary active:text-accent-primary h-auto text-md p-2 m-2"
          text="Kosárba helyezés"
          onClick={handleAddToCart}
        >
          <ShoppingCartIcon className="size-6" />
        </IconButton>
      </div>
    </div>
  );
}
