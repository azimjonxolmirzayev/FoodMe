import React, { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";

function MenuDetails() {
  const { index } = useParams();
  const location = useLocation();
  const { menus } = location.state || { menus: [] };
  const [menu, setMenu] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    image_url: "",
    ingredients: "",
  });
  const [currentProductIndex, setCurrentProductIndex] = useState(null);

  useEffect(() => {
    const savedMenus = JSON.parse(localStorage.getItem("menus")) || [];
    setMenu(savedMenus[index] || null);
  }, [index]);

  const addProduct = () => {
    if (menu && newProduct.name) {
      const updatedMenus = JSON.parse(localStorage.getItem("menus")) || [];
      updatedMenus[index].products.push(newProduct);
      localStorage.setItem("menus", JSON.stringify(updatedMenus));
      setMenu({ ...menu, products: [...menu.products, newProduct] });
      setNewProduct({
        name: "",
        description: "",
        price: "",
        image_url: "",
        ingredients: "",
      });
      setShowAddModal(false);
    }
  };

  const deleteProduct = (productIndex) => {
    if (menu) {
      const updatedMenus = JSON.parse(localStorage.getItem("menus")) || [];
      updatedMenus[index].products.splice(productIndex, 1);
      localStorage.setItem("menus", JSON.stringify(updatedMenus));
      setMenu({
        ...menu,
        products: updatedMenus[index].products,
      });
    }
  };

  const startEditProduct = (product, productIndex) => {
    setCurrentProductIndex(productIndex);
    setNewProduct(product);
    setShowEditModal(true);
  };

  const editProduct = () => {
    if (menu && newProduct.name != null) {
      const updatedMenus = JSON.parse(localStorage.getItem("menus")) || [];
      updatedMenus[index].products[currentProductIndex] = newProduct;
      localStorage.setItem("menus", JSON.stringify(updatedMenus));
      setMenu({ ...menu, products: updatedMenus[index].products });
      setNewProduct({
        name: "",
        description: "",
        price: "",
        image_url: "",
        ingredients: "",
      });
      setShowEditModal(false);
    }
  };

  if (!menu) {
    return <p>Menu not found!</p>;
  }

  return (
    <div className="p-4 bg-white rounded shadow-md text-dark">
      <h2 className="text-3xl font-bold mb-6 text-green">{menu.name}</h2>
      <h3 className="text-xl font-semibold mb-4 text-dark">Products:</h3>
      {menu.products.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {menu.products.map((product, idx) => (
            <div key={idx} className="bg-white p-4 border rounded shadow-md">
              <h4 className="text-lg font-semibold text-green mb-2">
                {product.name}
              </h4>
              <p className="text-gray-700 mb-2">
                <strong>Description:</strong> {product.description}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Price:</strong> ${product.price}
              </p>
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-48 object-cover mb-2"
              />
              <p className="text-gray-700">
                <strong>Ingredients:</strong> {product.ingredients}
              </p>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => startEditProduct(product, idx)}
                  className="bg-blue-500 text-black px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProduct(idx)}
                  className="bg-red-500 text-black px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products available.</p>
      )}
      <button
        onClick={() => setShowAddModal(true)}
        className="mt-6 bg-green text-white px-4 py-2 rounded"
      >
        Add Product
      </button>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
            <h3 className="text-lg font-semibold mb-4">Add New Product</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addProduct();
              }}
            >
              {/* Form fields for adding product */}
              {Object.keys(newProduct).map((key) => (
                <div className="mb-4" key={key}>
                  <label className="block text-sm font-semibold text-dark">
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </label>
                  <input
                    type={key === "price" ? "number" : "text"}
                    value={newProduct[key]}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, [key]: e.target.value })
                    }
                    className="border border-grey p-2 rounded w-full"
                    required={key === "name"}
                  />
                </div>
              ))}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="bg-green text-white px-4 py-2 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Product Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
            <h3 className="text-lg font-semibold mb-4">Edit Product</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                editProduct();
              }}
            >
              {/* Form fields for editing product */}
              {Object.keys(newProduct).map((key) => (
                <div className="mb-4" key={key}>
                  <label className="block text-sm font-semibold text-dark">
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </label>
                  <input
                    type={key === "price" ? "number" : "text"}
                    value={newProduct[key]}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, [key]: e.target.value })
                    }
                    className="border border-grey p-2 rounded w-full"
                    required={key === "name"}
                  />
                </div>
              ))}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="bg-green text-white px-4 py-2 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Link
        to="/admin"
        className="mt-6 m-5 inline-block text-blue-500 hover:underline"
      >
        Back to Admin Panel
      </Link>
    </div>
  );
}

export default MenuDetails;
