import { useEffect, useState } from "react";
import ProductCard, {
  ProductCardProps,
} from "../../components/products/ProductCard";
import Screen from "../../components/_basic_components/Screen";
import Subscreen from "../../components/_basic_components/subScreen";
import IconButton from "../../components/_basic_components/iconButton";
import { ArrowDownIcon } from "@heroicons/react/20/solid";
import SortPanel from "../../components/products/sortPanel";
import { Product } from "../../types/productTypes";
import { getProductsPage } from "../../hooks/fetchProducts";
import { backendUrl } from "../../constants/backend_constants";

export default function ProductsPage() {
  const [products, setProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    fetch(backendUrl+'products?search=&page=1', {
      method: "GET",
      headers: {
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products); // Update the products state with fetched data
      })
      .catch((error) => console.log(error));
    // setProducts(generatedProducts); // Update state with the products
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <Screen navbar={true} centeredContent={true}>
      <Subscreen className="flex flex-row flex-wrap justify-center">
      <SortPanel></SortPanel>
        {products.map((data) => (
          <ProductCard
            className="flex-grow"
            key={data.id} // Provide a unique key for each element
            name={data.name}
            description={data.description}
            image={data.image}
            price={data.price}
            quantity={data.quantity}
          />
        ))}
      </Subscreen>
      <Subscreen>
        <IconButton className="bg-accent-primary hover:bg-accent-secondary active:outline-2 p-2 m-2 text-md text-center">
          <ArrowDownIcon className="size-6"/>
        </IconButton>
      </Subscreen>
    </Screen>
  );
}
