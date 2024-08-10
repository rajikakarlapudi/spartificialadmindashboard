import React, { useState } from 'react';
import Navbar from 'C:/Users/RAJIKAKARLAPUDI/admindashboard/src/components/Navbar/index.js';
import KPIBox from 'C:/Users/RAJIKAKARLAPUDI/admindashboard/src/components/KPIBox/index.js';
import UserTable from 'C:/Users/RAJIKAKARLAPUDI/admindashboard/src/components/UserTable/index.js'; 
import PostTable from 'C:/Users/RAJIKAKARLAPUDI/admindashboard/src/components/PostTable/index.js'; 
import { users, posts } from 'C:/Users/RAJIKAKARLAPUDI/admindashboard/src/dummyData.js';
import './index.css';

const Home = () => {
  const [activeList, setActiveList] = useState(null);
  const totalUsers = users.length;
  const totalPosts = posts.length;

  const activeUsers = users.filter(user => {
    const lastActiveDate = new Date(user.lastActive); 
    const currentDate = new Date();
    const hoursDifference = (currentDate - lastActiveDate) / (1000 * 60 * 60);
    return hoursDifference <= 24; 
  }).length;

  const getPostsLast24Hours = () => {
    const currentDate = new Date();
    return posts.filter(post => {
      const postDate = new Date(post.createdAt); 
      const hoursDifference = (currentDate - postDate) / (1000 * 60 * 60);
      
      console.log(`Post Title: ${post.title}, Hours Difference: ${hoursDifference}`);

      return hoursDifference <= 24;
    });
  };

  const handleKPIBoxClick = (listType) => {
    setActiveList(listType); 
  };

  return (
    <div className="home-page">
      <div className='navbar-item'>
        <Navbar />
      </div>
      <div className='main'>
        <div className="kpis">
          <KPIBox 
            title="Total Users" 
            value={totalUsers} 
            colorClass="total-users-color" 
            onClick={() => handleKPIBoxClick('users')}
          />
          <KPIBox 
            title="Total Posts" 
            value={totalPosts} 
            colorClass="total-posts-color" 
            onClick={() => handleKPIBoxClick('posts')}
          />
          <KPIBox 
            title="Users Active Last 24h" 
            value={activeUsers} 
            colorClass="active-users-color" 
            onClick={() => handleKPIBoxClick('activeUsers')}
          />
          <KPIBox 
            title="Posts Last 24h" 
            value={getPostsLast24Hours().length} 
            colorClass="posts-24h-color" 
            onClick={() => handleKPIBoxClick('postsLast24Hours')}
          />
        </div>

        <div className="list-section">
          {activeList === 'users' && <UserTable users={users} />}
          {activeList === 'posts' && <PostTable posts={posts} />}
          {activeList === 'activeUsers' && <UserTable users={users.filter(user => {
            const lastActiveDate = new Date(user.lastActive); 
            const currentDate = new Date();
            const hoursDifference = (currentDate - lastActiveDate) / (1000 * 60 * 60);
            return hoursDifference <= 24; 
          })} />}
          {activeList === 'postsLast24Hours' && <PostTable posts={getPostsLast24Hours()} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
