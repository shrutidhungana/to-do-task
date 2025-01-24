import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import "./styles.css";

const ConfirmationModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="confirmation-modal-overlay">
      <div className="confirmation-modal">
        <h3 className="confirmation-message">
          Are you sure you want to delete this task?
        </h3>
        <div className="confirmation-buttons">
          <button className="confirm-btn" onClick={onConfirm}>
            Confirm
          </button>
          <button className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
        </div>
        <FaTimes className="close-modal-icon" onClick={onCancel} />
      </div>
    </div>
  );
};

ConfirmationModal.propTypes = {
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func
}

export default ConfirmationModal;
