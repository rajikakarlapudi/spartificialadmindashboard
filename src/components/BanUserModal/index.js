import React from 'react';
import './index.css';

const BanUserModal = ({ user, onClose, onConfirm }) => {
    const handleConfirm = () => {
        onConfirm(user.id); 
        onClose(); 
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Confirm Ban</h2>
                <p>Are you sure you want to ban {user.username}?</p>
                <button className='ban-user' onClick={handleConfirm}>Yes, Ban User</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default BanUserModal;
