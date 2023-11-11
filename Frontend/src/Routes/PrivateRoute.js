import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
    const user = localStorage.getItem("token");

    return user ? children : <Navigate to="/" />;
}
