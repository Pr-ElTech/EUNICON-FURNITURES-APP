import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import "../Style/ProfilePage.css";

const EditAdress = ({ isOpen, onClose, initialData, onSave }) => {
  const [addressForm, setAddressForm] = useState({
    country: initialData.country || "",
    state: initialData.state || "",
    postalCode: initialData.postalCode || "100001", // Defaults to image value if not provided
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(addressForm);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card address-modal-width">
        {/* Close Button Cross Emblem Container */}
        <button type="button" className="modal-close-btn" onClick={onClose}>
          <FiX />
        </button>

        <h2 className="modal-title-bold">Edit Address</h2>

        <form onSubmit={handleSubmit} className="modal-form">
          {/* Vertical Form Stack Layout Container */}
          <div className="form-vertical-stack">
            <div className="input-group">
              <label>Country</label>
              <input
                type="text"
                name="country"
                value={addressForm.country}
                onChange={handleChange}
                placeholder="Nigeria"
                required
              />
            </div>

            <div className="input-group">
              <label>City/State</label>
              <input
                type="text"
                name="state"
                value={addressForm.state}
                onChange={handleChange}
                placeholder="Lagos State..."
                required
              />
            </div>

            <div className="input-group">
              <label>Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={addressForm.postalCode}
                onChange={handleChange}
                placeholder="100001"
                required
              />
            </div>
          </div>

          <button type="submit" className="modal-save-btn address-submit-btn">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditAdress;
