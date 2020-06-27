import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'

  const PostlistItem = ({ id, createdAt, title, tags }) => (
  <div key={id} className="list-body">
  <h2 className="list-title">{title}</h2>
  <p>Created: {moment(createdAt).format('dddd, MMMM Do YYYY, h:mm a')}</p>
  <p>Tags: {tags.map((tag)=> <span className="tags">{tag}</span>)}</p>
 
 <div className="link-group">
 <Link className="tag-links" to={`/edit/${id}`}>Edit Post</Link>
  <Link className="tag-links" to={`/read/${id}`}>View Post</Link>
  </div>
  </div>
);

export default PostlistItem;