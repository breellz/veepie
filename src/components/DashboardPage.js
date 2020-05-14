import React from 'react';
import PostList from './PostList'
import PostlistFilters from './PostlistFilter'; 



const DashboardPage = (props) => (
  <div className="content-container">
    <PostlistFilters />
    <PostList />
  </div>
);

export default DashboardPage

