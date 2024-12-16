import { Product } from "../types/productTypes";
import { backendUrl } from "../constants/backend_constants";


// order: "asc" | "desc"

export async function getProductsPage(page: number) {
    await fetch(backendUrl+"products")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}