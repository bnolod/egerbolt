export interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  className?: string;
}

export default function ProductCard(props: ProductCardProps) {
  return (
    <div
      className={
        "w-48 bg-secondary p-4 m-4 text-center " +
        (props.className ? props.className : "")
      }
    >
      <div className="flex flex-col">
        <div>
          <img src={props.image} alt={props.name} className="w-full" />
        </div>
        <div>
          <h1 className="text-primary">{props.name}</h1>
          <p className="text-secondary">{props.description}</p>
          <div className="flex flex-row justify-evenly">
            <p className="text-primary">{props.price} huf</p>
            <p className="text-primary">{props.quantity} db</p>
          </div>
        </div>
      </div>
      <button className="text-primary bg-accent-primary w-full">
        add to cart
      </button>
    </div>
  );
}
