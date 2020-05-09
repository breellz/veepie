import React from 'react';
import { Link } from 'react-router-dom';


const PostlistItem = ({ id, createdAt, title, tags }) => (
  <div key={id}>
  <h2>{title}</h2>
  <p>Created: {createdAt}</p>
  <p>Tags: {tags.map((tag)=> `${tag} `)}</p>
  <Link to={`/edit/${id}`}>Edit Post</Link>
  <Link to={`/read/${id}`}>View Post</Link>
    </div>
);

export default PostlistItem;