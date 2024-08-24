// App.js
import "./components/i18next";
import Home from "./Layouts/Home";
import Demo from "./Layouts/Demo";
import AdminPage from "./components/admin/AdminPage";
import Login from "./components/auth/login/Login";
import ProtectedRoute from "./components/protect/ProtectedRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateCafe from "./components/CreateCafe";
import Registration from "./components/auth/register/Registration";
import MenuDetails from "./components/admin/MenuDetails";
import Cafes from "./Layouts/Cafes"; // Import Cafes component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route
          path="/admin"
          element={<ProtectedRoute element={<AdminPage />} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/create_cafe" element={<CreateCafe />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/cafes/:cafe_id" element={<Cafes />} />{" "}
        {/* Add route for Cafes with ID */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        <Route path="/menu/:index" element={<MenuDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
