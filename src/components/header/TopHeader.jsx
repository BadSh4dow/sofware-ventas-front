import React from "react";
import { useEffect } from "react";
import { useState } from "react";


const TopHeader = () => {

    const [today, setToday] = useState(new Date())

    function getToday(){
        let year = `${today.getFullYear()}` 
        let month = today.getMonth() + 1
        let day = today.getDate()

        if(month < 10) month = `0${month}`
        else month = `${month}`

        if(day < 10) day = `0${day}`
        else day = `${day}`

        return(`${year}-${month}-${day}`)
    }

    return(
        <div className="topHeader">
            <form className="headerTopForm">
                <div className="topFormSection">
                    <label htmlFor="documento">Documento</label>
                    <select id="documento" name="documento">
                        <option value="boletaContado">Boleta contado</option>
                        <option value="factura">Factura</option>
                        <option value="notaDeCredito">Nota de credito</option>
                        <option value="devolucionContado">Devolucion contado</option>
                        <option value="presupuesto">Presupuesto</option>
                    </select>
                </div>
                <div className="topFormSection">
                    <label htmlFor="date">Fecha</label>
                    <input id="date" type="date" value={getToday()} max={getToday()}></input>
                </div>
                <div className="topFormSection">
                    <label htmlFor="moneda">Moneda</label>
                    <select id="moneda" name="moneda">
                        <option value="uyu">UYU</option>
                        <option value="usd">USD</option>
                    </select>
                </div>              
            </form>
            <button type="button">Aceptar</button>
        </div>
    )
}

export default TopHeader