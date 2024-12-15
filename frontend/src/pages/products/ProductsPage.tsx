import { useEffect, useState } from "react";
import ProductCard, {
  ProductCardProps,
} from "../../components/_basic_components/ProductCard";
import Screen from "../../components/_basic_components/Screen";

export default function ProductsPage() {
    const [products, setProducts] = useState<Array<ProductCardProps>>([]);
  
    useEffect(() => {
      // Initialize products array
      const generatedProducts: Array<ProductCardProps> = [];
      for (let i = 0; i < 50; i++) {
        generatedProducts.push({
          name: "fasz",
          description: "leírás jaj de hosszú leírás atya ég egek ó egek egek ó egek egek ó egek egek ó egek egek ó egek egek ó egek",
          image:
            "https://cdn.discordapp.com/attachments/774335723385389076/1288566388394426460/P8HXX5Ekb9QWMMAAAAASUVORK5CYII.png?ex=67606ff7&is=675f1e77&hm=a5e7fec72c5e71e194af486c8a120ec2bedbd3f7474b486b8a6dbe3ad23b6651&",
          price: 200,
          quantity: 200,
        });
      }
      setProducts(generatedProducts); // Update state with the products
    }, []); // Empty dependency array ensures this runs only once on mount
  
    return (
      <Screen navbar={true}>
        <div className="flex flex-row flex-wrap justify-center">
        {products.map((data, index) => (
          <ProductCard className="flex-grow"
            key={index} // Provide a unique key for each element
            name={data.name}
            description={data.description}
            image={data.image}
            price={data.price}
            quantity={data.quantity}
          />
        ))}
        </div>
      </Screen>
    );
  }