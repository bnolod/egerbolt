import { useEffect, useState } from "react";
import ProductCard, {
  ProductCardProps,
} from "../../components/products/ProductCard";
import Screen from "../../components/_basic_components/Screen";
import Subscreen from "../../components/_basic_components/subScreen";
import IconButton from "../../components/_basic_components/iconButton";
import SortPanel from "../../components/products/sortPanel";
import { Product } from "../../types/productTypes";
import { getProductsPage } from "../../hooks/fetchProducts";
import { backendUrl } from "../../constants/backend_constants";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

export default function ProductsPage() {
  const [products, setProducts] = useState<Array<Product>>([]);
  const [totalPageCount, setTotalPageCount] = useState<number>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [order, setOrder] = useState<"asc" | "desc">("desc");

  function fetchProducts() {
    fetch(
      `${backendUrl}products?search=${search}&page=${currentPage}&orderBy=${order}`,
      {
        method: "GET",
        headers: {},
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setTotalPageCount(data.totalPages);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleOrder =
    (value: "asc" | "desc") => (event: React.MouseEvent<HTMLButtonElement>) => {
      setOrder(value);
      fetchProducts()
    };

  return (
    <Screen navbar={true} centeredContent={true}>
      <Subscreen className="flex flex-row flex-wrap justify-center">
        <SortPanel>
          <IconButton
            text="Ár csökkenő"
            className="bg-secondary p-2 m-2"
            onClick={handleOrder("desc")}
          >
            <ArrowDownIcon className="size-4" />
          </IconButton>
          <IconButton
            text="Ár növekvő"
            className="bg-secondary p-2 m-2"
            onClick={handleOrder("asc")}
          >
            <ArrowUpIcon className="size-4" />
          </IconButton>
        </SortPanel>
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
          <ArrowDownIcon className="size-6" />
        </IconButton>
      </Subscreen>
    </Screen>
  );
}
