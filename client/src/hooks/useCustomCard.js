import React, {useEffect} from "react";
import {useLocalStorage} from "./useLocalStorage";

const useCustomCard = (initialValue) => {
    const [css, setCss] = useLocalStorage('CSS', initialValue);

    useEffect( () => {
        if (css) {
            document.querySelector(".playerCard").classList.add("custom-css");
        } else {
            document.querySelector(".playerCard").classList.remove("custom-css");
        }
    }, [css]);

    return (css, setCss);
}

export default useCustomCard;