// Imports
import React from 'react';
import '../modal/Modal.css';
import closeIcon from "../../assets/images/shared/closeIcon.webp";

export default function Modal(props) {
  return (
    // Modal
    <div className='modal' style={{display: props.state}}>
      <div className="modalContent">
        <button className='modalClose' onClick={props.function}><img src={closeIcon} alt="Close" /></button>
        <img className='modalCertificate' src={props.img} alt="Certificate" />
      </div>
    </div>
  )
}