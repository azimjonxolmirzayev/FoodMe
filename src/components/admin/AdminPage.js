// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function AdminPage() {
//   const [cafeName, setCafeName] = useState("");
//   const [menus, setMenus] = useState([]);
//   const [newMenu, setNewMenu] = useState("");

//   const [selectedMenu, setSelectedMenu] = useState(null);
//   const [productName, setProductName] = useState("");
//   const [newCafeName, setNewCafeName] = useState("");
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [notification, setNotification] = useState({ message: "", type: "" });
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [menuToDelete, setMenuToDelete] = useState(null);

//   const [cafeId, setCafeId] = useState(null);
//   const navigate = useNavigate();
//   const BASE_URL = "https://fastapi-example-ito8.onrender.com";

//   const [cafeDetails, setCafeDetails] = useState({
//     name: "",
//     location: "",
//     description: "",
//     phonenumber: "",
//     wifipass: "",
//     logo_url: "",
//     image_url: "",
//   });
//   const handleDeleteClick = (menu) => {
//     setMenuToDelete(menu);
//     setShowDeleteModal(true);
//   };

//   const [newCafeDetails, setNewCafeDetails] = useState(cafeDetails);

//   useEffect(() => {
//     const fetchCafeDetailsAndMenus = async () => {
//       const token = sessionStorage.getItem("access_token");

//       if (!token) {
//         console.error("Token topilmadi");
//         return;
//       }

//       try {
//         // Kafe ma'lumotlarini olish
//         const cafeResponse = await axios.get(`${BASE_URL}/cafes/user/cafe`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setCafeId(cafeResponse.data.id); // Kafe ID-ni olish
//         setCafeDetails(cafeResponse.data);

//         // Kafe menyularini olish
//         const menusResponse = await axios.get(
//           `${BASE_URL}/cafes/${cafeResponse.data.id}/menus`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         setMenus(menusResponse.data);
//       } catch (error) {
//         console.error("Ma'lumotlarni olishda xatolik:", error);
//       }
//     };

//     fetchCafeDetailsAndMenus();
//   }, []);

//   const handleChange = (e) => {
//     setNewCafeDetails({
//       ...newCafeDetails,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSaveChanges = async () => {
//     const token = sessionStorage.getItem("access_token");

//     if (!token) {
//       console.error("Token topilmadi");
//       return;
//     }

//     try {
//       const response = await axios.put(
//         `${BASE_URL}/cafes/user/cafe`,
//         newCafeDetails,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setCafeDetails(response.data);
//       setNotification({
//         message: "Kafe ma'lumotlari muvaffaqiyatli yangilandi.",
//         type: "success",
//       });
//     } catch (error) {
//       console.error("Kafe ma'lumotlarini yangilashda xatolik:", error);
//       setNotification({
//         message:
//           "Yangilashda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.",
//         type: "error",
//       });
//     }
//   };

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     handleSaveChanges();
//     setShowAddModal(true);
//   };

//   useEffect(() => {
//     localStorage.setItem("menus", JSON.stringify(menus));
//     localStorage.setItem("cafeName", cafeName);
//   }, [menus, cafeName]);

//   const addMenu = async () => {
//     const token = sessionStorage.getItem("access_token");

//     if (!token) {
//       console.error("Token topilmadi");
//       return;
//     }

//     if (newMenu && cafeId) {
//       try {
//         const response = await axios.post(
//           `${BASE_URL}/cafes/${cafeId}/menus`,
//           { name: newMenu, cafe_id: cafeId }, // `cafe_id` qo'shildi
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         setMenus([...menus, response.data]);
//         setNewMenu("");
//         setNotification({
//           message: "Menyu muvaffaqiyatli qo'shildi.",
//           type: "success",
//         });
//       } catch (error) {
//         console.error(
//           "Menyu qo'shishda xatolik:",
//           error.response ? error.response.data : error.message
//         );
//         setNotification({
//           message: "Menyu qo'shishda xatolik yuz berdi.",
//           type: "error",
//         });
//       }
//     }
//   };

//   const handleMenuClick = (index) => {
//     navigate(`/menu/${index}`, { state: { menus } });
//   };

//   const updateMenu = async (menuId, newMenuName) => {
//     const token = sessionStorage.getItem("access_token");

//     if (!token) {
//       console.error("Token topilmadi");
//       return;
//     }

//     if (newMenuName) {
//       try {
//         const response = await axios.put(
//           `${BASE_URL}/cafes/menus/${menuId}`,
//           { name: newMenuName }, // To'g'ri ma'lumotlar formatini yuborish
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         console.log("Menyu muvaffaqiyatli yangilandi:", response.data);
//       } catch (error) {
//         console.error(
//           "Menyu yangilashda xatolik:",
//           error.response ? error.response.data : error.message
//         );
//       }
//     }
//   };

//   // menularni delete qilish
//   // const deleteMenu = async (menuId) => {
//   //   const token = sessionStorage.getItem("access_token");

//   //   if (!token) {
//   //     console.error("Token topilmadi");
//   //     return;
//   //   }

//   //   try {
//   //     await axios.delete(`${BASE_URL}/cafes/menus/${menuId}`, {
//   //       headers: {
//   //         Authorization: `Bearer ${token}`,
//   //       },
//   //     });

//   //     setMenus(menus.filter((menu) => menu.id !== menuId));
//   //     setNotification({
//   //       message: "Menyu muvaffaqiyatli o'chirildi.",
//   //       type: "success",
//   //     });
//   //   } catch (error) {
//   //     console.error("Menyu o'chirishda xatolik:", error);
//   //     setNotification({
//   //       message: "Menyu o'chirishda xatolik yuz berdi.",
//   //       type: "error",
//   //     });
//   //   }
//   // };
// const confirmDeleteMenu = async () => {
//   if (!menuToDelete) return;

//   const token = sessionStorage.getItem("access_token");

//   if (!token) {
//     console.error("Token topilmadi");
//     return;
//   }

//   try {
//     await axios.delete(`${BASE_URL}/cafes/menus/${menuToDelete.id}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     setMenus(menus.filter((menu) => menu.id !== menuToDelete.id));
//     setNotification({
//       message: "Menyu muvaffaqiyatli o'chirildi.",
//       type: "success",
//     });
//     setShowDeleteModal(false);
//   } catch (error) {
//     console.error("Menyu o'chirishda xatolik:", error);
//     setNotification({
//       message: "Menyu o'chirishda xatolik yuz berdi.",
//       type: "error",
//     });
//     setShowDeleteModal(false);
//   }
// };

//   return (
//     <div className="min-h-screen max-w-screen-sm font-['SpaceGrotesk'] mx-auto bg-dark text-white p-4">
//       <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

//       {notification.message && (
//         <div
//           className={`p-4 mb-4 text-black rounded ${
//             notification.type === "success" ? "bg-green" : "bg-red"
//           }`}
//         >
//           {notification.message}
//         </div>
//       )}

//       {showDeleteModal && (
//         <div className="fixed inset-0 bg-metal bg-opacity-70 flex justify-center items-center z-50">
//           <div className="bg-midnight p-6 rounded-lg shadow-lg w-full max-w-xs">
//             <h2 className="text-xl font-semibold mb-4">
//               Haqiqatan ham o'chirmoqchimisiz?
//             </h2>
//             <button
//               onClick={confirmDeleteMenu}
//               className="bg-red text-white px-4 py-2 rounded mr-2"
//             >
//               Ha, o'chirish
//             </button>
//             <button
//               onClick={() => setShowDeleteModal(false)}
//               className="bg-grey text-black px-4 py-2 rounded"
//             >
//               Bekor qilish
//             </button>
//           </div>
//         </div>
//       )}

//       <div className="mb-6">
//         <label className="block text-lg font-semibold">
//           <h1>
//             {cafeDetails.name ? cafeDetails.name : "Kafe nomini yuklamoqda..."}
//           </h1>
//         </label>

//         <button
//           onClick={handleUpdate}
//           className="ml-2 bg-green text-black px-4 py-2 rounded"
//         >
//           Yangilash
//         </button>
//       </div>

//       <div className="mb-6">
//         <label className="block text-lg font-semibold">Menu qo'shish:</label>
//         <input
//           type="text"
//           value={newMenu}
//           onChange={(e) => setNewMenu(e.target.value)}
//           className="border border-grey p-2 rounded bg-dark text-white"
//         />
//         <button
//           onClick={addMenu}
//           className="ml-2 bg-green text-black px-4 py-2 rounded"
//         >
//           Qo'shish
//         </button>
//       </div>

//       {showAddModal && (
//         <div className="fixed inset-0 bg-metal bg-opacity-70 flex justify-center items-center z-50">
//           <div className="bg-midnight p-6 rounded-lg shadow-lg w-full max-w-xs">
//             <h2 className="text-xl font-semibold mb-4">Yangi Menu Qo'shish</h2>
//             <input
//               type="text"
//               value={newMenu}
//               onChange={(e) => setNewMenu(e.target.value)}
//               className="border border-grey p-2 rounded mb-4 w-full bg-dark text-white"
//             />
//             <button
//               onClick={() => {
//                 addMenu();
//                 setShowAddModal(false);
//               }}
//               className="bg-green text-black px-4 py-2 rounded"
//             >
//               Qo'shish
//             </button>
//             <button
//               onClick={() => setShowAddModal(false)}
//               className="ml-2 bg-red text-black px-4 py-2 rounded"
//             >
//               Bekor qilish
//             </button>
//           </div>
//         </div>
//       )}

//       <div className="mt-6">
//         <h2 className="text-xl font-bold mb-4">Menyular</h2>
//         <ul>
//           {menus.length > 0 ? (
//             menus.map((menu, index) => (
//               <li key={index} className="flex items-center mb-2">
//                 <span className="flex-grow">{menu.name}</span>
//                 <button
//                   // onClick={() => handleMenuClick(menu.id)}
//                   className="bg-tahiti text-black px-4 py-2 rounded mr-2"
//                 >
//                   Ko'rish
//                 </button>
//                 <button
//                   onClick={() =>
//                     updateMenu(menu.id, prompt("Yangi Menu Nomi", menu.name))
//                   }
//                   className="bg-bubble-gum text-black px-4 py-2 rounded mr-2"
//                 >
//                   Yangilash
//                 </button>
//                 <button
//                   onClick={() => handleDeleteClick(menu)}
//                   className="bg-red text-white px-4 py-2 rounded"
//                 >
//                   O'chirish
//                 </button>
//               </li>
//             ))
//           ) : (
//             <p>Menyular mavjud emas</p>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default AdminPage;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import QRCode from "qrcode.react";
import { saveAs } from "file-saver";

function AdminPage() {
  const [cafeName, setCafeName] = useState("");
  const [menus, setMenus] = useState([]);
  const [newMenu, setNewMenu] = useState("");
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [productName, setProductName] = useState("");
  const [newCafeName, setNewCafeName] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [notification, setNotification] = useState({ message: "", type: "" });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [menuToDelete, setMenuToDelete] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(null);
  const [updatedMenuName, setUpdatedMenuName] = useState("");
  const [showQRCodeModal, setShowQRCodeModal] = useState(false);
  const [qrCodeData, setQrCodeData] = useState("");

  const [cafeId, setCafeId] = useState(null);
  const navigate = useNavigate();
  const BASE_URL = "https://fastapi-example-ito8.onrender.com";

  const [cafeDetails, setCafeDetails] = useState({
    name: "",
    location: "",
    description: "",
    phonenumber: "",
    wifipass: "",
    logo_url: "",
    image_url: "",
  });

  useEffect(() => {
    const fetchCafeDetailsAndMenus = async () => {
      const token = sessionStorage.getItem("access_token");

      if (!token) {
        console.error("Token topilmadi");
        return;
      }

      try {
        const cafeResponse = await axios.get(`${BASE_URL}/cafes/user/cafe`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCafeId(cafeResponse.data.id);
        setCafeDetails(cafeResponse.data);

        const menusResponse = await axios.get(
          `${BASE_URL}/cafes/${cafeResponse.data.id}/menus`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setMenus(menusResponse.data);
      } catch (error) {
        console.error("Ma'lumotlarni olishda xatolik:", error);
      }
    };

    fetchCafeDetailsAndMenus();
  }, []);

  const handleQRCodeClick = () => {
    setQrCodeData(`https://food-me-psi.vercel.app/cafes/${cafeId}`);
    setShowQRCodeModal(true);
  };

  const downloadQRCode = () => {
    const canvas = document.getElementById("qr-code");
    canvas.toBlob((blob) => {
      saveAs(blob, `cafe-${cafeId}-qrcode.png`);
    });
  };

  const closeQRCodeModal = () => {
    setShowQRCodeModal(false);
  };

  const handleSaveChanges = async () => {
    const token = sessionStorage.getItem("access_token");

    if (!token) {
      console.error("Token topilmadi");
      return;
    }

    try {
      const response = await axios.put(
        `${BASE_URL}/cafes/user/cafe`,
        newCafeDetails,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCafeDetails(response.data);
      setNotification({
        message: "Kafe ma'lumotlari muvaffaqiyatli yangilandi.",
        type: "success",
      });
    } catch (error) {
      console.error("Kafe ma'lumotlarini yangilashda xatolik:", error);
      setNotification({
        message:
          "Yangilashda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.",
        type: "error",
      });
    }
  };

  const handleMenuClick = (index) => {
    navigate(`/menu/${index}`, { state: { menus } });
  };

  const addMenu = async () => {
    const token = sessionStorage.getItem("access_token");

    if (!token) {
      console.error("Token topilmadi");
      return;
    }

    if (newMenu && cafeId) {
      try {
        const response = await axios.post(
          `${BASE_URL}/cafes/${cafeId}/menus`,
          { name: newMenu, cafe_id: cafeId },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        setMenus([...menus, response.data]);
        setNewMenu("");
        setNotification({
          message: "Menyu muvaffaqiyatli qo'shildi.",
          type: "success",
        });
      } catch (error) {
        console.error(
          "Menyu qo'shishda xatolik:",
          error.response ? error.response.data : error.message
        );
        setNotification({
          message: "Menyu qo'shishda xatolik yuz berdi.",
          type: "error",
        });
      }
    }
  };

  const updateMenu = async () => {
    const token = sessionStorage.getItem("access_token");

    if (!token) {
      console.error("Token topilmadi");
      return;
    }

    if (updatedMenuName) {
      try {
        const response = await axios.put(
          `${BASE_URL}/cafes/menus/${currentMenu.id}`,
          { name: updatedMenuName },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        setMenus(
          menus.map((menu) =>
            menu.id === currentMenu.id
              ? { ...menu, name: updatedMenuName }
              : menu
          )
        );
        setNotification({
          message: "Menyu muvaffaqiyatli yangilandi.",
          type: "success",
        });
        setShowUpdateModal(false);
      } catch (error) {
        console.error(
          "Menyu yangilashda xatolik:",
          error.response ? error.response.data : error.message
        );
        setNotification({
          message: "Menyu yangilashda xatolik yuz berdi.",
          type: "error",
        });
        setShowUpdateModal(false);
      }
    }
  };

  const handleDeleteClick = (menu) => {
    setMenuToDelete(menu);
    setShowDeleteModal(true);
  };

  const confirmDeleteMenu = async () => {
    if (!menuToDelete) return;

    const token = sessionStorage.getItem("access_token");

    if (!token) {
      console.error("Token topilmadi");
      return;
    }

    try {
      await axios.delete(`${BASE_URL}/cafes/menus/${menuToDelete.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMenus(menus.filter((menu) => menu.id !== menuToDelete.id));
      setNotification({
        message: "Menyu muvaffaqiyatli o'chirildi.",
        type: "success",
      });
      setShowDeleteModal(false);
    } catch (error) {
      console.error("Menyu o'chirishda xatolik:", error);
      setNotification({
        message: "Menyu o'chirishda xatolik yuz berdi.",
        type: "error",
      });
      setShowDeleteModal(false);
    }
  };

  const handleUpdateClick = (menu) => {
    setCurrentMenu(menu);
    setUpdatedMenuName(menu.name);
    setShowUpdateModal(true);
  };

  return (
    <div className="min-h-screen bg-dark text-white p-4 max-w-screen-sm font-['SpaceGrotesk'] mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      {notification.message && (
        <div
          className={`p-4 mb-4 text-black rounded ${
            notification.type === "success" ? "bg-green" : "bg-red"
          }`}
        >
          {notification.message}
        </div>
      )}

      {showDeleteModal && (
        <div className="fixed inset-0 bg-metal bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-midnight p-6 rounded-lg shadow-lg w-full max-w-xs">
            <h2 className="text-xl font-semibold mb-4">
              Haqiqatan ham o'chirmoqchimisiz?
            </h2>
            <button
              onClick={confirmDeleteMenu}
              className="bg-red text-white px-4 py-2 rounded mr-2"
            >
              Ha, o'chirish
            </button>
            <button
              onClick={() => setShowDeleteModal(false)}
              className="bg-grey text-black px-4 py-2 rounded"
            >
              Bekor qilish
            </button>
          </div>
        </div>
      )}

      {showUpdateModal && (
        <div className="fixed inset-0 bg-metal bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-midnight p-6 rounded-lg shadow-lg w-full max-w-xs">
            <h2 className="text-xl font-semibold mb-4">
              Menyu nomini yangilash
            </h2>
            <input
              type="text"
              value={updatedMenuName}
              onChange={(e) => setUpdatedMenuName(e.target.value)}
              className="border border-grey p-2 rounded mb-4 w-full bg-dark text-white"
            />
            <button
              onClick={updateMenu}
              className="bg-green text-black px-4 py-2 rounded"
            >
              Yangilash
            </button>
            <button
              onClick={() => setShowUpdateModal(false)}
              className="bg-grey text-black px-4 py-2 rounded ml-2"
            >
              Bekor qilish
            </button>
          </div>
        </div>
      )}

      <div className="bg-tahiti p-4 rounded-lg shadow-lg mb-4">
        <h2 className="text-xl font-semibold mb-4">Kafe nomini yangilash</h2>
        <input
          type="text"
          value={cafeDetails.name}
          onChange={(e) =>
            setCafeDetails({ ...cafeDetails, name: e.target.value })
          }
          className="border border-grey p-2 rounded mb-4 w-full bg-dark text-white"
        />
        <button
          onClick={handleSaveChanges}
          className="bg-green text-black px-4 py-2 rounded"
        >
          Saqlash
        </button>
      </div>

      <div className="bg-tahiti p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Mavjud Menyular</h2>
        {menus.map((menu) => (
          <div key={menu.id} className="flex items-center justify-between mb-2">
            <button
              onClick={() => handleMenuClick(menu.id)}
              className="text-lg text-white bg-metal p-2 rounded"
            >
              {menu.name}
            </button>
            <div>
              <button
                onClick={() => handleUpdateClick(menu)}
                className="bg-bubble-gum text-black px-3 py-1 rounded mr-2"
              >
                Yangilash
              </button>
              <button
                onClick={() => handleDeleteClick(menu)}
                className="bg-red text-white px-3 py-1 rounded"
              >
                O'chirish
              </button>
            </div>
          </div>
        ))}
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-purple text-white px-4 py-2 rounded"
        >
          Yangi Menyu Qo'shish
        </button>
      </div>
      <div className="bg-tahiti p-4 mt-4 rounded-lg flex justify-center flex-wrap gap-5 items-center shadow-lg">
        <button
          onClick={handleQRCodeClick}
          className="bg-purple text-whitep p-4 rounded"
        >
          QR kod yaratish
        </button>
        <a
          href={qrCodeData}
          className="qr-code-link text-purple"
          target="_blank"
          rel="noopener noreferrer"
        >
          {qrCodeData}
        </a>
      </div>

      {showQRCodeModal && (
        <div className="fixed inset-0 bg-metal bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-midnight p-6 rounded-lg shadow-lg w-full max-w-xs">
            <h2 className="text-xl font-semibold mb-4">QR kod</h2>
            <QRCode
              id="qr-code"
              value={qrCodeData}
              size={256}
              level={"H"}
              includeMargin={true}
            />
            <div className="mt-4 flex justify-between">
              <button
                onClick={downloadQRCode}
                className="bg-green text-black px-4 py-2 rounded"
              >
                Yuklab olish
              </button>
              <button
                onClick={closeQRCodeModal}
                className="bg-grey text-black px-4 py-2 rounded"
              >
                Bekor qilish
              </button>
            </div>
          </div>
        </div>
      )}

      {showAddModal && (
        <div className="fixed inset-0 bg-metal bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-midnight p-6 rounded-lg shadow-lg w-full max-w-xs">
            <h2 className="text-xl font-semibold mb-4">Yangi Menyu Qo'shish</h2>
            <input
              type="text"
              value={newMenu}
              onChange={(e) => setNewMenu(e.target.value)}
              className="border border-grey p-2 rounded mb-4 w-full bg-dark text-white"
            />
            <button
              onClick={addMenu}
              className="bg-green text-black px-4 py-2 rounded"
            >
              Qo'shish
            </button>
            <button
              onClick={() => setShowAddModal(false)}
              className="bg-grey text-black px-4 py-2 rounded ml-2"
            >
              Bekor qilish
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPage;
