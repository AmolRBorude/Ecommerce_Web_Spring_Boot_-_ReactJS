import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        if (!email || !password) {
            setError("All fields are required");
            return;
        }

        try {

            const response = await API.post("/loginUser", {
                email: email,
                password: password
            });

            if (response.data === true) {

                localStorage.setItem("userEmail", email);

                navigate("/home");

            } else {

                setError("Invalid Email or Password");

            }

        } catch (error) {

            setError("Server error");

        }
    };

    return (

        <div className="form-container">

            {/* ✅ ADDED ADMIN LOGIN BUTTON */}
            <div style={{ position: "absolute", top: "20px", right: "20px" }}>
                <button onClick={() => navigate("/admin")}>
                    Login as Admin
                </button>
            </div>

            <h2>Login</h2>

            {error && <p className="error">{error}</p>}

            <form onSubmit={handleLogin}>

                <input
                    type="email"
                    placeholder="Enter Email"
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

                <p>
                    Don't have an account?
                    <Link to="/register"> Register</Link>
                </p>

            </form>

        </div>
    );
}

export default Login;