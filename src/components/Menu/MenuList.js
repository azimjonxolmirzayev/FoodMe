import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

function MenuList() {
  const [selectedMenuId, setSelectedMenuId] = useState(null);
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation();
  const [menus, setMenus] = useState([]);
  const [categories, setCategories] = useState({});
  const { cafe_id } = useParams();
  const [products, setProducts] = useState([]);

  const BASE_URL = "https://fastapi-example-ito8.onrender.com";

  useEffect(() => {
    const fetchProducts = async () => {
      const token = sessionStorage.getItem("access_token");
      if (selectedMenuId !== null) {
        try {
          const response = await axios.get(
            `${BASE_URL}/cafes/${cafe_id}/menus/${selectedMenuId}/products`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setProducts(response.data);
        } catch (error) {
          console.error(
            "Products fetch error",
            error.response?.data || error.message
          );
        }
      }
    };

    fetchProducts();
  }, [selectedMenuId, cafe_id]);

  useEffect(() => {
    const fetchMenus = async () => {
      const token = sessionStorage.getItem("access_token");
      try {
        const response = await axios.get(`${BASE_URL}/cafes/${cafe_id}/menus`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMenus(response.data);

        // Convert menus to categories
        const categoriesObject = {};
        response.data.forEach((menu) => {
          categoriesObject[menu.name] = menu;
        });
        setCategories(categoriesObject);

        // Agar menyular bo'sh bo'lmasa, birinchi menyuni tanlangan qilib o'rnatish
        if (response.data.length > 0) {
          setSelectedMenuId(response.data[0].id);
        }
      } catch (error) {
        console.error("Menus fetch error", error);
      }
    };

    fetchMenus();
  }, [cafe_id]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (dish) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === dish.name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === dish.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...dish, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (dish) => {
    setCart((prevCart) =>
      prevCart.reduce((acc, item) => {
        if (item.name === dish.name) {
          if (item.quantity === 1) return acc;
          return [...acc, { ...item, quantity: item.quantity - 1 }];
        } else {
          return [...acc, item];
        }
      }, [])
    );
  };

  const getItemQuantity = (dishName) => {
    const item = cart.find((item) => item.name === dishName);
    return item ? item.quantity : 0;
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const serviceCharge = total * 0.1;

  return (
    <div>
      <div className="relative mb-4">
        <div className="flex space-x-4 overflow-x-auto p-4">
          {menus.length === 0 ? (
            <p>{t("menus_empty")}</p>
          ) : (
            menus.map((menu) => (
              <button
                key={menu.id}
                className={`px-5 py-2 rounded ${
                  selectedMenuId === menu.id
                    ? "bg-blue-500 text-green"
                    : "bg-gray-200 text-black"
                }`}
                onClick={() => setSelectedMenuId(menu.id)}
              >
                {menu.name}
              </button>
            ))
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((dish, index) => (
          <div key={index} className="rounded-xl shadow-md overflow-hidden">
            <img
              src={dish.image_url}
              alt={dish.name}
              className="w-full rounded-xl h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{dish.name}</h2>
              <p className="text-gray-700 mb-2">
                {t("ingredients")}: {dish.ingredients}
              </p>
              <p className="text-xl font-bold">{dish.price.toFixed(2)} so'm</p>
              {getItemQuantity(dish.name) > 0 ? (
                <div className="flex items-center mt-4">
                  <button
                    className="px-2 py-1 bg-red-500 text-black rounded"
                    onClick={() => removeFromCart(dish)}
                  >
                    -
                  </button>
                  <span className="px-4">{getItemQuantity(dish.name)}</span>
                  <button
                    className="px-2 py-1 bg-green-500 text-black rounded"
                    onClick={() => addToCart(dish)}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="mt-4 px-4 py-2 bg-green-500 text-black rounded"
                  onClick={() => addToCart(dish)}
                >
                  {t("add_to_cart")}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="fixed max-w-screen-sm mx-auto bottom-0 left-0 right-0 bg-gray-100 p-4 shadow-lg">
          <button
            className="w-full px-4 py-2 bg-green text-black rounded"
            onClick={() => setModalOpen(true)}
          >
            {t("view_cart")} - ({cart.length})
          </button>
        </div>
      )}

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/2">
            <h2 className="text-xl font-semibold mb-4">{t("order")}</h2>
            <div className="max-h-80 overflow-y-auto">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mb-4"
                >
                  <div>
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-gray-700">
                      {item.price.toFixed(2)} so'm x {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="px-2 py-1 bg-red-500 text-black rounded"
                      onClick={() => removeFromCart(item)}
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-green-500 text-black rounded"
                      onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <p className="font-bold">
                {t("item_total")}: {total.toFixed(2)} so'm
              </p>
              <p className="font-bold">
                {t("service_charge")}(10%): {serviceCharge.toFixed(2)} so'm
              </p>
              <p className="font-bold">
                {t("total_with_service_charge")}:{" "}
                {(total + serviceCharge).toFixed(2)} so'm
              </p>
            </div>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-black rounded"
              onClick={() => setModalOpen(false)}
            >
              {t("exit")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuList;
