import style from "./Modal.module.css";

type Props = {
  children: React.ReactNode;
  title: string;
  isModalOpen: boolean;
  closeModal: () => void;
  performFunction?: () => void;
};

export default function Modal({
  children,
  title,
  isModalOpen,
  closeModal,
  performFunction,
}: Props) {
  return (
    <>
      {isModalOpen && (
        <div className={style.modalOverlay}>
          <div className={style.modal}>
            <header className={style.modalHead}>
              <h1>{title}</h1>
              <button className={style.closeButton} onClick={closeModal}>
                &times;
              </button>
            </header>
            <div className={style.modalContent}>{children}</div>
            {performFunction && (
              <div className={style.modalActions}>
                <button onClick={closeModal}>Cancel</button>
                <button onClick={performFunction}>Continue</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
