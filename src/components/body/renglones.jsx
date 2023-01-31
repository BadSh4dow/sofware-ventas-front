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
                    <input id="descripcion" type="text" />

                    <label htmlFor="T">T</label>
                    <input id="T" type="text" />

                    <label htmlFor="cantidad">Cantidad</label>
                    <input id="cantidad" type="text" />
                    
                    <label htmlFor="precio">Precio</label>
                    <input id="precio" type="text" />
                    
                    <label htmlFor="descuentos">Descuentos</label>
                    <input id="descuentos" type="text" />
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