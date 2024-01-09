import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ModalComponent from './components/ModalComponent'

const Modal = ({ setShowModal, projectList, index }) => {

    return ReactDOM.createPortal(
        <ModalComponent setShowModal={setShowModal} projectList={projectList} index={index} />,
        document.querySelector('#modal')
    )
}

export default Modal