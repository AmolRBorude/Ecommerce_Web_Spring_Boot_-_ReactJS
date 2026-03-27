import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function AddProduct() {

    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: "",
        description: "",
        imgUrl: "",
        price: "",
        categoryId: ""
    });

    // ✅ PROTECTION
    useEffect(() => {
        const role = localStorage.getItem("role");

        if (role !== "admin") {
            navigate("/admin");
        }
    }, [navigate]);

    // ✅ LOGOUT FUNCTION
    const handleLogout = () => {
        localStorage.removeItem("role");
        localStorage.removeItem("adminEmail");

        navigate("/admin");   // back to admin login
    };

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const data = {
                name: product.name,
                description: product.description,
                imgUrl: product.imgUrl,
                price: parseFloat(product.price),
                category: {
                    id: parseInt(product.categoryId)
                }
            };

            await API.post("/api/products/add", data, {
                headers: {
                    role: localStorage.getItem("role")
                }
            });

            alert("Product Added Successfully");

        } catch (err) {
            console.log(err.response);
            alert("Error adding product");
        }
    };

    return (

        <div className="form-container">

            {/* ✅ LOGOUT BUTTON */}
            <div style={{ position: "absolute", top: "20px", right: "20px" }}>
                <button onClick={handleLogout}>Logout</button>
            </div>

            <h2>Add Product</h2>

            <form onSubmit={handleSubmit}>

                <input name="name" placeholder="Product Name" onChange={handleChange} />
                <input name="description" placeholder="Description" onChange={handleChange} />
                <input name="imgUrl" placeholder="Image URL" onChange={handleChange} />
                <input name="price" placeholder="Price" onChange={handleChange} />
                <input name="categoryId" placeholder="Category ID" onChange={handleChange} />

                <button type="submit">Add Product</button>

            </form>

        </div>
    );
}

export default AddProduct;