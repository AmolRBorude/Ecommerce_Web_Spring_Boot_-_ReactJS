import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Orders() {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadOrders = () => {

        API.get("/api/orders")
            .then((res) => {
                setOrders(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error loading orders:", err);
                setLoading(false);
            });
    };

    useEffect(() => {
        loadOrders();
    }, []);


    const payOrder = async (id) => {

        try {

            await API.put(`/api/orders/pay/${id}`);

            alert("Payment Successful");

            loadOrders();

        } catch (error) {

            alert("Payment failed");

        }
    };


    const cancelOrder = async (id) => {

        try {

            await API.put(`/api/orders/cancel/${id}`);

            alert("Order Cancelled");

            loadOrders();

        } catch (error) {

            alert("Cancel failed");

        }
    };


    return (

        <div>

            <Navbar />

            <h2 className="orders-title">
                My Orders
            </h2>

            {loading ? (

                <p className="loading">
                    Loading orders...
                </p>

            ) : orders.length === 0 ? (

                <p className="loading">
                    No Orders Found
                </p>

            ) : (

                <div className="orders-container">

                    {orders.map((order) => (

                        <div
                            className="order-card"
                            key={order.id}
                        >

                            <h3>{order.productName}</h3>

                            <p>
                                Price : ₹{order.price}
                            </p>

                            <p>
                                Status :
                                <b> {order.status}</b>
                            </p>

                            <p>
                                Date : {order.orderDate}
                            </p>

                            <div className="order-buttons">

                                <button
                                    className="pay-btn"
                                    onClick={() => payOrder(order.id)}
                                    disabled={
                                        order.status === "PAID" ||
                                        order.status === "CANCELLED"
                                    }
                                >
                                    Pay
                                </button>

                                <button
                                    className="cancel-btn"
                                    onClick={() => cancelOrder(order.id)}
                                    disabled={
                                        order.status === "CANCELLED" ||
                                        order.status === "PAID"
                                    }
                                >
                                    Cancel
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
}

export default Orders;