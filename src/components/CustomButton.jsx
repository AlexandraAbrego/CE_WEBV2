import React from 'react'
const CustomButton = ({title, onClick, type="dark", widthC='fitContent', disabledC='' }) => {

  return (
    <button style={{width:widthC}} disabled={disabledC}  onClick={onClick} className ={type==="dark" ? 'btn btn-primary' : 'btn btn-secondary'} >{title}</button>

  )
}
export default CustomButton