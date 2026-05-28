import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import "../Style/ProfilePage.css";

const EditInfoModal = ({ isOpen, onClose, initialData, onSave }) => {
  const [formData, setFormData] = useState({ ...initialData });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        {/* Close Button Header */}
        <button type="button" className="modal-close-btn" onClick={onClose}>
          <FiX />
        </button>

        <h2>Personal Information</h2>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-grid">
            <div className="input-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="modal-save-btn">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditInfoModal;
