import React from 'react';
import { connect } from 'react-redux';
import PostsSelector from '../selectors/PostsSelector'
import PostlistItem from './PostlistItem'


const PostList = (props) => (
  props.posts.map((post)=> <PostlistItem key={post.id} {...post} />)
);


const mapStateToProps = (state) =>{
 return{
  posts: PostsSelector(state.posts, state.filters)
 } 
}
export default connect(mapStateToProps)(PostList);