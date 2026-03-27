import { useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";

function Navbar() {

    const navigate = useNavigate();

    const [keyword, setKeyword] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const logout = () => {
        localStorage.clear();
        navigate("/");
    };

    // ✅ LIVE SUGGESTIONS
    const handleChange = async (e) => {

        const value = e.target.value;
        setKeyword(value);

        if (value.length > 1) {

            try {
                const res = await API.get(`/api/products/suggest?keyword=${value}`);
                setSuggestions(res.data);
            } catch (err) {
                console.log(err);
            }

        } else {
            setSuggestions([]);
        }
    };

    // ✅ SEARCH ON ENTER
    const handleSearch = async (e) => {

        if (e.key === "Enter") {

            try {

                const res = await API.get(`/api/products/search?keyword=${keyword}`);

                navigate("/home", {
                    state: { searchResults: res.data }
                });

                setSuggestions([]); // clear dropdown

            } catch (err) {
                console.log(err);
            }
        }
    };

    // ✅ CLICK SUGGESTION
    const handleSuggestionClick = (product) => {

        navigate("/home", {
            state: { searchResults: [product] }
        });

        setSuggestions([]);
        setKeyword("");
    };

    return (

        <div className="navbar">

            <div className="logo">BlueCart</div>

            <div className="search-bar" style={{ position: "relative" }}>

                <input
                    type="text"
                    placeholder="Search products..."
                    value={keyword}
                    onChange={handleChange}
                    onKeyDown={handleSearch}
                />

                {/* ✅ SUGGESTION DROPDOWN */}
                {suggestions.length > 0 && (

                    <div className="suggestion-box">

                        {suggestions.map((item) => (

                            <div
                                key={item.id}
                                className="suggestion-item"
                                onClick={() => handleSuggestionClick(item)}
                            >
                                {item.name}
                            </div>

                        ))}

                    </div>

                )}

            </div>

            <div className="nav-links">
                <a href="/home">Home</a>
                <a href="/orders">Orders</a>

                <button className="logout-btn" onClick={logout}>
                    Logout
                </button>
            </div>

        </div>
    );
}

export default Navbar;