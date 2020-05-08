import React from 'react';
import { connect } from 'react-redux';
import PostsSelector from '../selectors/PostsSelector'

const PostList = (props) => (
  <div>
    {props.posts.map((post)=> <p key={post.id}>{post.title}</p>)}
  </div>
);


const mapStateToProps = (state) =>{
 return{
  posts: PostsSelector(state.posts, state.filters)
 } 
}
export default connect(mapStateToProps)(PostList);