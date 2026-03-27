import API from "../services/api";

function ProductCard({ product }) {

    const buyProduct = async () => {

        try {

            
            const res = await API.post("/api/payment/create-order", {
                amount: product.price
            });

            const order = res.data;

            
            const options = {
                key: "rzp_test_XXXXXXXX",   
                amount: order.amount,
                currency: "INR",
                name: "My E-Commerce",
                description: product.name,
                order_id: order.id,

                handler: function (response) {

                    alert("Payment Successful ✅");

                    console.log("Payment Response:", response);

                
                    API.post("/api/orders/create", {
                        productName: product.name,
                        price: product.price,
                        paymentId: response.razorpay_payment_id
                    });

                },

                prefill: {
                    email: localStorage.getItem("userEmail")
                },

                theme: {
                    color: "#0d47a1"
                }
            };

            const rzp = new window.Razorpay(options);
            rzp.open();

        } catch (error) {

            console.log(error);
            alert("Payment Failed ❌");

        }

    };

    return (

        <div className="product-card">

            <img
                src={product.imgUrl + "?w=400"}
                alt={product.name}
                loading="lazy"
            />

            <h3>{product.name}</h3>

            <p className="product-desc">
                {product.description}
            </p>

            <p className="price">
                ₹{product.price}
            </p>

            <button
                className="buy-btn"
                onClick={buyProduct}
            >
                Buy Now
            </button>

        </div>

    );
}

export default ProductCard;