import "../styles/toast.css"
import cancelIcon from "../assets/cancel-icon.svg"

const Toast = ({open, handleClose, type}) => {
  return (
    <div className="toast-wrapper">
      <div className={`toast ${open ? "open" : "close"} ${type && type.severity}`}>
        <p>{type && type.message}</p>
        <img src={cancelIcon} onClick={() => handleClose()} alt=""/>
      </div>
    </div>
  )
}

export default Toast
