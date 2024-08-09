import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { jwtDecode } from "jwt-decode"

export const Protected = ({ children }) => {

    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        auth().catch(() => setIsAuthorized(false))
    }, []);

    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
            setIsAuthorized(false);
            return;
        } else {
            const decode = jwtDecode(token);
            const exp = decode.exp
            const now = Date.now() / 1000 // to seconds
            if (exp < now) {
                await refresh_the_token()
            } else {
                setIsAuthorized(true)
            }

        }

    };

    const refresh_the_token = async () => {
        const refresh_token = localStorage.getItem(REFRESH_TOKEN);
        try {
            const refresh = await api.post("/api/token/refresh/", { refresh: refresh_token })
            if (refresh.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, refresh.data.access);
                setIsAuthorized(true);
            } else {
                setIsAuthorized(false)
            }

        } catch (error) {
            setIsAuthorized(false)
            console.log(error);
        }

    }

    if (isAuthorized === null) {
        return <div>Loading...</div>; // Or other loading indicator
    }

    return isAuthorized ? children : <Navigate to={'/login'}></Navigate>
}