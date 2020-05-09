import React from 'react';
import { Link } from 'react-router-dom';


const PostlistItem = ({ id, title, body, tags }) => (
    <Link to={`/edit/${id}`}>
      <div>
        <h2>{title}</h2>
        <h3>{body}</h3>
        <p>{tags}</p>
      </div>
    </Link>
    
);

export default PostlistItem;