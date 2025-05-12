import React from 'react'

const Checker = ({ typeC = "checkbox", valueC = "", idC = "check1", option, inputType = "text" }) => {
    return inputType === "text" ? (
        <div className="form-check">
            <input className="form-check-input" type={typeC} value={valueC} id={idC} />
            <label className="form-check-label" >
                {option}
            </label>
        </div>
    ) : (
        <>
            <label  className="form-label">Selecciona una fecha:</label>
            <input type="date" className="form-control" id="fecha" name="fecha" />
        </>
    );



}

export default Checker