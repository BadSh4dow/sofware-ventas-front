import React from "react";

const Renglones = () => {
    return(
        <div className="renglones">
            <div className="cargas">
                <form className="formCargas">
                    <label htmlFor="codigo">Codigo</label>
                    <input id="codigo" type="number" />
                    <button type="button">...</button>

                    <label htmlFor="descripcion">Descripcion</label>
                    <input id="descripcion" type="text" disabled/>

                    <label htmlFor="T">T</label>
                    <input id="T" type="number" />

                    <label htmlFor="cantidad">Cantidad</label>
                    <input id="cantidad" type="number" />
                    
                    <label htmlFor="precio">Precio</label>
                    <input id="precio" type="number" />
                    
                    <label htmlFor="descuentos">Descuentos</label>
                    <input id="descuentos" type="number" />
                </form>
            </div>
            <div className="listado">
                <ul>
                    <li>ASDSad</li>
                </ul>
            </div>
        </div>
    )
}

export default Renglones;