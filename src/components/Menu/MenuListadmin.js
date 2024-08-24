import { useNavigate } from "react-router-dom";

const MenuListadmin = () => {
  const navigate = useNavigate();

  const handleMenuClick = (cafeId, menuId) => {
    navigate(`/cafes/${cafeId}/menus/${menuId}/products`);
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Menus</h2>
      <ul>
        {menus.length > 0 ? (
          menus.map((menu, index) => (
            <li key={index} className="flex items-center mb-2">
              <span className="flex-grow">{menu.name}</span>
              <button
                onClick={() => handleMenuClick(cafeId, menu.id)}
                className="bg-blue-500 text-black px-4 py-2 rounded mr-2"
              >
                View
              </button>
              <button
                onClick={() =>
                  updateMenu(menu.id, prompt("New Menu Name", menu.name))
                }
                className="bg-yellow-500 text-black px-4 py-2 rounded mr-2"
              >
                Update
              </button>
              <button
                onClick={() => deleteMenu(menu.id)}
                className="bg-red-500 text-black px-4 py-2 rounded"
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>No menus available</p>
        )}
      </ul>
    </div>
  );
};

export default MenuListadmin;
