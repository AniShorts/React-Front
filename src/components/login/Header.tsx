import React from 'react'
import "../../css/signIn.css"
import { MdArrowBackIosNew } from 'react-icons/md';


const Header = (props : {title : string}) => {
  return (
    <div className='header'>
        <p><MdArrowBackIosNew /></p>
        <p>{props.title}</p>
    </div>
  )
}

export default Header