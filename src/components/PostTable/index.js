import React, { useState } from 'react';
import './index.css';

const PostTable = ({ posts }) => {
  const [postList, setPostList] = useState(posts);

  const handleHide = (postId) => {
    const updatedPosts = postList.map(post =>
      post.id === postId ? { ...post, hidden: !post.hidden } : post
    );
    setPostList(updatedPosts);
    const action = updatedPosts.find(post => post.id === postId).hidden ? 'hidden' : 'unhidden';
    alert(`Post with ID: ${postId} has been ${action}.`);
  };

  const handleDelete = (postId) => {
    const updatedPosts = postList.filter(post => post.id !== postId);
    setPostList(updatedPosts);
    alert(`Post with ID: ${postId} has been deleted.`);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Post ID</th>
          <th>Post Caption</th>
          <th>Media URL</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {postList.map(post => (
          <tr key={post.id} style={{ opacity: post.hidden ? 0.5 : 1 }}>
            <td>{post.id}</td>
            <td>{post.caption}</td>
            <td>
              <a href={post.mediaUrl} target="_blank" rel="noopener noreferrer">
                View Media
              </a>
            </td>
            <td>
              {!post.hidden ? (
                <button className='button hide' onClick={() => handleHide(post.id)}>Hide</button>
              ) : (
                <button className='button unhide' onClick={() => handleHide(post.id)}>Unhide</button>
              )}
              <button className='button delete' onClick={() => handleDelete(post.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostTable;
