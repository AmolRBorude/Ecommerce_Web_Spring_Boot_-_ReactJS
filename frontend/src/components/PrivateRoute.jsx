import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {

    const user = localStorage.getItem("userEmail");

    if (!user) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default PrivateRoute;