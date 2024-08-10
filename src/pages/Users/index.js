import React, { useState, useEffect } from 'react';
import Navbar from 'C:/Users/RAJIKAKARLAPUDI/admindashboard/src/components/Navbar/index.js';
import UserTable from 'C:/Users/RAJIKAKARLAPUDI/admindashboard/src/components/UserTable/index.js';
import { users as initialUsers } from 'C:/Users/RAJIKAKARLAPUDI/admindashboard/src/dummyData.js';
import KPIBox from 'C:/Users/RAJIKAKARLAPUDI/admindashboard/src/components/KPIBox/index.js';
import './index.css';

const Users = () => {
    const [totalUsers, setTotalUsers] = useState(0);
    const [activeUsers, setActiveUsers] = useState(0);
    const [activeList, setActiveList] = useState('all'); 

    useEffect(() => {
        setTotalUsers(initialUsers.length);
        setActiveUsers(initialUsers.filter(user => {
            const lastActiveDate = new Date(user.lastActive); 
            const currentDate = new Date();
            const hoursDifference = (currentDate - lastActiveDate) / (1000 * 60 * 60);
            return hoursDifference <= 24; 
        }).length);
    }, []);

    const handleKPIBoxClick = (listType) => {
        setActiveList(listType); 
    };

    const filteredUsers = activeList === 'active' 
        ? initialUsers.filter(user => {
            const lastActiveDate = new Date(user.lastActive); 
            const currentDate = new Date();
            const hoursDifference = (currentDate - lastActiveDate) / (1000 * 60 * 60);
            return hoursDifference <= 24; 
        }) 
        : initialUsers;

    return (
        <div className="users-page">
            <Navbar />
            <div className="kpis">
                <KPIBox 
                    title="Total Users" 
                    value={totalUsers} 
                    colorClass="total-users-color" 
                    onClick={() => handleKPIBoxClick('all')} 
                />
                <KPIBox 
                    title="Users Active in Last 24 Hours" 
                    value={activeUsers} 
                    colorClass="active-users-color" 
                    onClick={() => handleKPIBoxClick('active')} 
                />
            </div>
            <UserTable users={filteredUsers} /> 
        </div>
    );
};

export default Users;
