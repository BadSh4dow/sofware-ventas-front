import React from "react";

const UnderHeader = () => {
    return(
        <div className="underHeader">
            <div className="underHeaderOne">
                <div>
                    <div className="cta">
                        <label htmlFor="cta">Cta</label>
                        <input id="cta" type="number"></input>
                        <button type="button">//</button>
                        <button type="button">...</button>
                    </div>
                    <div className="nom">
                        <label htmlFor="nom">Nom.</label>
                        <input id="nom" type="text"></input>
                    </div>
                    <div className="dom">
                        <label htmlFor="dom">Dom.</label>
                        <input id="dom" type="text"></input>
                    </div>
                    <div className="loc">
                        <label htmlFor="loc">Loc.</label>
                        <input id="loc" type="text"></input>
                    </div>
                </div>
                <div className="ident">
                    <label htmlFor="ident">Ident.</label>
                    <select id="ident" name="ident">
                        <option value="uyu">RUC</option>
                        <option value="usd">DOC.IDENT</option>
                        <option value="uyu">PAS</option>
                        <option value="usd">DNI</option>
                    </select>
                    <input></input>
                </div>
            </div>
            <div className="underHeaderTwo">
                <div className="vdor">
                    <label htmlFor="loc">Vdor.</label>
                    <input id="vdor" type="text"></input>
                </div>
                <div className="canal">
                    <label htmlFor="canal">Canal</label>
                    <input id="canal" type="text"></input>
                    
                </div>
                <div className="plan">
                    <label htmlFor="loc">Plan</label>
                    <input id="plan" type="text"></input>
                </div>
                <div>
                    <button type="button">Situacion</button>
                    <button type="button">Aceptar</button>
                </div>
                <form>
                    <label for="ivaIncl">Iva Exon</label>
                    <input type="radio" id="ivaExon" name="ivaExon"></input>
                    <label for="ivaIncl">Iva Incl</label>
                    <input type="radio" id="ivaIncl" name="ivaIncl"></input>
                </form>
            </div>
                
                
        </div>
    )
}

export default UnderHeader