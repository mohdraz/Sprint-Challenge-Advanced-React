import React, {useState} from "react";

import useCustomCard from "../hooks/useCustomCard";

const CustomCSS = () => {
    const [customCSS, setCustomCSS] = useCustomCard(false);

    const handButton = e => {
        e.preventDefault();
        setCustomCSS(!customCSS);
    }

    return(
        <>
            <button onClick={handButton} >Change CSS</button>
        </>
    );
};

export default CustomCSS;