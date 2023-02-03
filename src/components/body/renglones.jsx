import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Producto } from "../../producto";

const Renglones = () => {
    
    const formRef = useRef()

    const [codigo, setCodigo] = useState()
    const [t, setT] = useState()
    const [cantidad, setCantidad] = useState()
    const [precio, setPrecio] = useState()
    const [descuentos, setDescuentos] = useState()
    const [lista, setLista] = useState([])

    function handelButton() {
        const codigo = formRef.current[0].value
        const t = formRef.current[3].value
        const cantidad = formRef.current[4].value
        const precio = formRef.current[5].value
        const descuentos = formRef.current[6].value

        const producto = new Producto(codigo, t, cantidad, precio, descuentos)

        setLista(lista.concat(producto))

        setCodigo(formRef.current[0].value)
        setT(formRef.current[3].value)
        setCantidad(formRef.current[4].value)
        setPrecio(formRef.current[5].value)
        setDescuentos(formRef.current[6].value)
    }
    return(
        <div className="renglones">
            <div className="cargas">
                <form ref={formRef} className="formCargas">
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

                    <button onClick={handelButton} type="button">+</button>
                </form>            
            </div>
            <div className="listado">
                <ul>
                    {
                        lista.map((producto, key) => {
                            return(
                                <li key={key}>{`${producto.codigo} ${producto.t} ${producto.cantidad} ${producto.precio} ${producto.descuentos}`}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Renglones;