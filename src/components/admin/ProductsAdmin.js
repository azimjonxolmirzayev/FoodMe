import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductsAdmin = () => {
  const { menuId } = useParams();
  const [products, setProducts] = useState([]);
  const [menuName, setMenuName] = useState("");
  const BASE_URL = "https://fastapi-example-ito8.onrender.com";

  useEffect(() => {
    const fetchProducts = async () => {
      const token = sessionStorage.getItem("access_token");
      try {
        // Fetch products
        const response = await axios.get(
          `${BASE_URL}/cafes/menus/${menuId}/products`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProducts(response.data);

        // Fetch menu details
        const menuResponse = await axios.get(
          `${BASE_URL}/cafes/menus/${menuId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setMenuName(menuResponse.data.name);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchProducts();
  }, [menuId]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Menu: {menuName}</h2>
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              {product.name} - {product.description} - {product.price}
            </li>
          ))
        ) : (
          <p>No products available</p>
        )}
      </ul>
    </div>
  );
};

export default ProductsAdmin;
