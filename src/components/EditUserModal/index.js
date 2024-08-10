import React, { useState } from 'react';
import './index.css'; 
const EditUserModal = ({ user, onClose, onSave }) => {
  const [editedUser, setEditedUser] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedUser);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Username:
              <input className='input' type="text" name="username" value={editedUser.username} onChange={handleChange} required />
            </label>
          </div>
          <div>
            <label>
              Name:
              <input className='input' type="text" name="name" value={editedUser.name} onChange={handleChange} required />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input className='input' type="email" name="email" value={editedUser.email} onChange={handleChange} required />
            </label>
          </div>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;
