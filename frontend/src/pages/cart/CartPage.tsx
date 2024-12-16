import Footer from "../../components/_basic_components/footer";
import Screen from "../../components/_basic_components/Screen";
import Subscreen from "../../components/_basic_components/subScreen";
import CartCard from "../../components/products/cartCard";
import { useCart } from "../../contexts/cartContext";
export default function CartPage() {
  return (
    <Screen navbar={true} centeredContent={true}>
      <Subscreen className="w-full">
      {useCart().cart.map((item) => (
        <CartCard
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          id={item.id}
          image="https://cdn.nool.hu/2021/11/Ks-PbVJtROYZWW5MEJfIc6j3gALzPOdtivv1PYQ5Oc0/fill/1347/758/no/1/aHR0cHM6Ly9jbXNjZG4uYXBwLmNvbnRlbnQucHJpdmF0ZS9jb250ZW50LzY1NTBlOWY2Y2Y0YzQxNDdiNjJkYjZiNzQxYjdlZjcx.jpg"
        ></CartCard>
      ))}
      </Subscreen>
      <Footer></Footer>
    </Screen>
  );
}
