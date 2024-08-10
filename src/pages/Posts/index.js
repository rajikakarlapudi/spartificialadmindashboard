import React, { useState } from 'react';
import Navbar from 'C:/Users/RAJIKAKARLAPUDI/admindashboard/src/components/Navbar/index.js';
import PostTable from 'C:/Users/RAJIKAKARLAPUDI/admindashboard/src/components/PostTable/index.js';
import KPIBox from 'C:/Users/RAJIKAKARLAPUDI/admindashboard/src/components/KPIBox/index.js';
import { posts } from 'C:/Users/RAJIKAKARLAPUDI/admindashboard/src/dummyData.js';
import './index.css';

const Posts = () => {
    const [activeList, setActiveList] = useState('all'); 

    const totalPosts = posts.length;

    const postsLast24Hours = posts.filter(post => {
        const postDate = new Date(post.createdAt); 
        const currentDate = new Date();
        const hoursDifference = (currentDate - postDate) / (1000 * 60 * 60);
        return hoursDifference <= 24; 
    });

    const filteredPosts = activeList === 'last24h' ? postsLast24Hours : posts;
    
    console.log(`Active List: ${activeList}`);
    console.log('Filtered Posts:', filteredPosts);

    const handleKPIBoxClick = (listType) => {
        setActiveList(listType); 
    };

    return (
        <div className="posts-page">
            <Navbar />
            <div className="kpis">
                <KPIBox 
                    title="Total Posts" 
                    value={totalPosts} 
                    colorClass="total-posts-color" 
                    onClick={() => handleKPIBoxClick('all')} 
                />
                <KPIBox 
                    title="Posts Last 24h" 
                    value={postsLast24Hours.length} 
                    colorClass="posts-24h-color" 
                    onClick={() => handleKPIBoxClick('last24h')} 
                />
            </div>
            {/* Force re-render by changing key */}
            <PostTable posts={filteredPosts} key={activeList} /> 
        </div>
    );
};

export default Posts;
