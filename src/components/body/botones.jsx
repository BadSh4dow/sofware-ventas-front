import React from "react";
import { useRef } from "react";
import { useState } from "react";

const Botones = () => {
    const [activeButtonOne, setActiveButtonOne] = useState(true)
    const [activeButtonTwo, setActiveButtonTwo] = useState(false)
    const [activeButtonThree, setActiveButtonThree] = useState(false)
    const [activeButtonFour, setActiveButtonFour] = useState(false) 

    function handleClickOne(){
        setActiveButtonOne(true)
        setActiveButtonTwo(false)
        setActiveButtonThree(false)
        setActiveButtonFour(false)
    }
    function handleClickTwo(){
        setActiveButtonOne(false)
        setActiveButtonTwo(true)
        setActiveButtonThree(false)
        setActiveButtonFour(false)
    }
    function handleClickThree(){
        setActiveButtonOne(false)
        setActiveButtonTwo(false)
        setActiveButtonThree(true)
        setActiveButtonFour(false)
    }
    function handleClickFour(){
        setActiveButtonOne(false)
        setActiveButtonTwo(false)
        setActiveButtonThree(false)
        setActiveButtonFour(true)
    }

    return(
        <div className="botones">
            <div id="1" className={activeButtonOne === true ? "botonClick": ""} onClick={handleClickOne}>Renglones</div>
            <div id="2" className={activeButtonTwo === true ? "botonClick": ""} onClick={handleClickTwo}>Entrega</div>
            <div id="3" className={activeButtonThree === true ? "botonClick": ""} onClick={handleClickThree}>Logistica</div>
            <div id="4" className={activeButtonFour === true ? "botonClick": ""} onClick={handleClickFour}>Varios</div>
        </div>
    )
}

export default Botones