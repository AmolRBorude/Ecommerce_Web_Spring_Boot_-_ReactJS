import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Orders from "./pages/Orders";

import PrivateRoute from "./components/PrivateRoute";
import AdminLogin from "./pages/AdminLogin";
import AddProduct from "./pages/AddProduct";

function App() {

    const user = localStorage.getItem("userEmail");

    return (
        <BrowserRouter>

            <Routes>

                {/* Login Page */}
                <Route
                    path="/"
                    element={user ? <Navigate to="/home" /> : <Login />}
                />

                {/* Register Page */}
                <Route
                    path="/register"
                    element={<Register />}
                />

                {/* Protected Home Page */}
                <Route
                    path="/home"
                    element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    }
                />

                {/* Protected Orders Page */}
                <Route
                    path="/orders"
                    element={
                        <PrivateRoute>
                            <Orders />
                        </PrivateRoute>
                    }
                />

                {/* Redirect unknown routes */}
                <Route
                    path="*"
                    element={<Navigate to="/" />}
                />

                <Route path="/admin" element={<AdminLogin/>} />
               
               <Route path="/admin/add-product" element={<AddProduct />} />

            </Routes>

        </BrowserRouter>
    );
}

export default App;