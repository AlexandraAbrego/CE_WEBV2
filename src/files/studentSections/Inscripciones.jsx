import React from 'react'
import DivContainer from '../../components/divContainer'

const Inscripciones = () => {
    return (
        <>
            <DivContainer titleC={'Ficha de Inscripción'} />
            <DivContainer titleC={'Información General del Alumno'} showButton={true} titleB='Guardar'></DivContainer>
            <DivContainer titleC={'Dirección del Alumno'} showButton={true} titleB='Guardar'></DivContainer>
            <DivContainer titleC={'Antecedentes Médicos'} showButton={true} titleB='Guardar'></DivContainer>
            <DivContainer titleC={'Información Médica Actual'} showButton={true} titleB='Guardar'></DivContainer>
            <DivContainer titleC={'Situación Legal de la Familia'} showButton={true} titleB='Guardar'></DivContainer>
            <DivContainer titleC={'Vivienda'} showButton={true} titleB='Guardar'></DivContainer>
            <DivContainer titleC={'Datos de los padres'} showButton={true} titleB='Guardar'></DivContainer>
            <DivContainer titleC={'Contactos de Emergencia'} showButton={true} titleB='Guardar'></DivContainer>
            <DivContainer titleC={'Autorizados a recoger al alumno'} showButton={true} titleB='Guardar'></DivContainer>
            <DivContainer titleC={'Información académica y Pagos'} showButton={true} titleB='Guardar'></DivContainer>
            <DivContainer titleC={'Documentos'} showButton={true} titleB='Guardar'></DivContainer>


        </>

    )
}

export default Inscripciones