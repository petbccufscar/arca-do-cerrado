import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const FaviconUpdater = () => {
    const location = useLocation();

    useEffect(() => {
        const link = document.querySelector("link[rel~='icon']");
        if (link) {
            link.href = "/favicon.ico"; // Garante que o favicon seja atualizado
        }
    }, [location]);

    return null;
};

export default FaviconUpdater;