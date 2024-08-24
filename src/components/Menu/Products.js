const Products = ({ menuId }) => {
  const [products, setProducts] = useState([]);

  const BASE_URL = "https://fastapi-example-ito8.onrender.com";

  useEffect(() => {
    const fetchProducts = async () => {
      const token = sessionStorage.getItem("access_token");
      try {
        const response = await axios.get(
          `${BASE_URL}/cafes/menus/${menuId}/products`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Products fetch error", error);
      }
    };

    fetchProducts();
  }, [menuId]);

  return (
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
  );
};

export default Products;
