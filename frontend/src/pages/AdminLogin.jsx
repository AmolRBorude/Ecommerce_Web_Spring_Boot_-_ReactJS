import { useState, useEffect } from "react";   // ✅ added useEffect
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function AdminLogin() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // ✅ PROTECTION (like Home)
    useEffect(() => {
        const role = localStorage.getItem("role");

        if (role === "admin") {
            navigate("/admin/add-product");   // already logged in
        }
    }, [navigate]);


    const handleLogin = async (e) => {

        e.preventDefault();

        if (!email || !password) {
            setError("All fields are required");
            return;
        }

        try {

            const response = await API.post("/api/admin/login", {
                email,
                password
            });

            if (response.data.success === true) {

                localStorage.setItem("role", "admin");
                localStorage.setItem("adminEmail", email);

                navigate("/admin/add-product");

            } else {
                setError("Invalid Email or Password");
            }

        } catch (err) {
            console.log(err.response);
            setError("Server error");
        }
    };

    return (

        <div className="form-container">

            <h2>Admin Login</h2>

            {error && <p className="error">{error}</p>}

            <form onSubmit={handleLogin}>

                <input
                    type="email"
                    placeholder="Enter Admin Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">
                    Login
                </button>

            </form>

        </div>
    );
}

export default AdminLogin;