import React from 'react';
import PostList from './PostList'
import PostlistFilters from './PostlistFilter'; 




const DashboardPage = (props) => (
  <div>
    <PostlistFilters />
    <PostList />
  </div>
);

export default DashboardPage

