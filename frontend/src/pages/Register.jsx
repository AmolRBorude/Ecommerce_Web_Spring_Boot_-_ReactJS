import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!user.name || !user.email || !user.password) {

            setError("All fields are required");
            return;
        }

        if (user.password.length < 6) {

            setError("Password must be at least 6 characters");
            return;
        }

        try {

            await API.post("/addUser", user);

            alert("Registration Successful");

            navigate("/");

        } catch (error) {

            setError("User already exists");

        }
    };

    return (

        <div className="form-container">

            <h2>Register</h2>

            {error && <p className="error">{error}</p>}

            <form onSubmit={handleSubmit}>

                <input
                    name="name"
                    placeholder="Enter Name"
                    onChange={handleChange}
                />

                <input
                    name="email"
                    placeholder="Enter Email"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    onChange={handleChange}
                />

                <button type="submit">
                    Register
                </button>

                <p>
                    Already have an account?
                    <Link to="/"> Login</Link>
                </p>

            </form>

        </div>
    );
}

export default Register;