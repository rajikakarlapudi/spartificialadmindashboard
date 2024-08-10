// src/components/UserTable.js
import React, { useState,useEffect } from 'react';
import EditUserModal  from '../EditUserModal';
import BanUserModal from '../BanUserModal'; 

import './index.css'; 

const UserTable = ({ users }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;
    const [userList, setUserList] = useState([]);
    const [editingUser, setEditingUser] = useState(null); 
    const [banningUser, setBanningUser] = useState(null); 


useEffect(() => {
    setUserList(users);
}, [users]);

const indexOfLastUser = currentPage * usersPerPage;
const indexOfFirstUser = indexOfLastUser - usersPerPage;
const currentUsers = userList.slice(indexOfFirstUser, indexOfLastUser);

const totalPages = Math.ceil(userList.length / usersPerPage);

const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
};

const handleEdit = (user) => {
    setEditingUser(user); 
};

const handleBan = (user) => {
    setBanningUser(user); 
};

const confirmBan = (userId) => {
    const updatedUsers = userList.filter(user => user.id !== userId);
    setUserList(updatedUsers);
    alert(`User with ID: ${userId} has been banned.`);
};
const handleSave = (editedUser) => {
    const updatedUsers = userList.map(user => 
        user.id === editedUser.id ? editedUser : user
    );
    setUserList(updatedUsers);
    setEditingUser(null);
}

const handleCloseModal = () => {
    setEditingUser(null); 
}
const handleCloseBanModal = () => {
    setBanningUser(null); 
};
console.log("Users passed to UserTable:", users); 
console.log("Current Users being displayed:", currentUsers); 

return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {currentUsers.length > 0 ? (
                    currentUsers.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className='btn edit' onClick={() => handleEdit(user)}>Edit</button>
                                <button className='btn ban' onClick={() => handleBan(user)}>Ban</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="5">No users available.</td>
                    </tr>
                )}
            </tbody>
        </table>
        <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={currentPage === index + 1 ? 'active' : ''}
                >
                    {index + 1}
                </button>
            ))}
        </div>

        {editingUser && (
            <EditUserModal 
                user={editingUser} 
                onClose={handleCloseModal} 
                onSave={handleSave} 
            />
        )}
         {banningUser && (
                <BanUserModal 
                    user={banningUser} 
                    onClose={handleCloseBanModal} 
                    onConfirm={confirmBan} 
                />
            )}
    </div>
);
};

export default UserTable;