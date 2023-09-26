import React, { useContext } from 'react'
import { ModalContext } from '../../context/AppContext'
import style from "./Modal.module.css"

export default function Modal({children}) {
    const {isModalOpen, closeModal} = useContext(ModalContext)

  return (
    <>
    {isModalOpen && (
        <div className={style.modalOverlay}>
          <div className={style.modal} >
            <button className={style.closeButton} onClick={closeModal}>
              &times;
            </button>
            <div className={style.modalContent}>{children}</div>
          </div>
        </div>
      )}
      </>
  )
}
