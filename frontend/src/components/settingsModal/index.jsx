import Modal from "../../shared/modal/Modal"
import SettingsModalContents from "./SettingsModal";


const SettingsModal = ({isShown, onClose}) => {
  return (
    <Modal isShown={isShown} hide={onClose} showClose> 
        <SettingsModalContents />
    </Modal>
  )
}

export default SettingsModal