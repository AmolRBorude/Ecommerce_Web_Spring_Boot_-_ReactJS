import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import ImageSlider from "../components/ImageSlider";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

function Home() {

    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    // Load products from API
    const loadProducts = () => {

        API.get("/api/products")
            .then((res) => {
                setProducts(res.data);
                setAllProducts(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching products", err);
                setLoading(false);
            });

    };

    useEffect(() => {
        loadProducts();
    }, []);


    // Filter products by category
    const filterCategory = (category) => {

        if (category === "All") {
            setProducts(allProducts);
            return;
        }

        const filteredProducts = allProducts.filter(
            (p) => p.category?.name === category
        );

        setProducts(filteredProducts);
    };

    useEffect(() => {
    if (location.state?.searchResults) {
        setProducts(location.state.searchResults);
    }
}, [location.state]);


    return (

        <div className="home">

            {/* Navbar */}
            <Navbar />

            {/* Image Slider */}
            <ImageSlider />

            {/* Hero Banner */}
            <div className="hero-banner">

                <div className="hero-text">

                    <h1>Big Blue Sale</h1>

                    <p>
                        Best Deals On Electronics, Fashion & More
                    </p>

                    <button className="shop-btn">
                        Shop Now
                    </button>

                </div>

            </div>


            {/* Category Section */}

            <div className="category-section">

                <div className="category" onClick={() => filterCategory("All")}>
                    All
                </div>

                <div className="category" onClick={() => filterCategory("Electronics")}>
                    Electronics
                </div>

                <div className="category" onClick={() => filterCategory("Fashion")}>
                    Fashion
                </div>

                <div className="category" onClick={() => filterCategory("Mobiles")}>
                    Mobiles
                </div>

                <div className="category" onClick={() => filterCategory("Laptops")}>
                    Laptops
                </div>

                <div className="category" onClick={() => filterCategory("Home Appliances")}>
                    Home Appliances
                </div>

                <div className="category" onClick={() => filterCategory("Books")}>
                    Books
                </div>

                <div className="category" onClick={() => filterCategory("Furniture")}>
                    Furniture
                </div>

                <div className="category" onClick={() => filterCategory("Grocery")}>
                    Grocery
                </div>

                <div className="category" onClick={() => filterCategory("Sports")}>
                    Sports
                </div>

                <div className="category" onClick={() => filterCategory("Beauty & Personal Care")}>
                    Beauty
                </div>

            </div>


            {/* Product Section */}

            <div className="product-section">

                <h2 className="section-title">
                    Trending Products
                </h2>

                {loading ? (

                    <p style={{ textAlign: "center" }}>
                        Loading products...
                    </p>

                ) : (

                    <div className="products">

                        {products.map((product) => (

                            <ProductCard
                                key={product.id}
                                product={product}
                            />

                        ))}

                    </div>

                )}

            </div>

            <Footer/>

        </div>

    );
}

export default Home;