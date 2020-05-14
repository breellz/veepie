import React from 'react';
import { connect } from 'react-redux';
import PostsSelector from '../selectors/PostsSelector'
import PostlistItem from './PostlistItem'


const PostList = (props) => (
  <div>
  {
    props.posts.length === 0 ? (<p>No posts to show</p>) :
    (props.posts.map((post)=> <PostlistItem key={post.id} {...post} />))
   }
</div>
)

const mapStateToProps = (state) =>{
 return{
  posts: PostsSelector(state.posts, state.filters)
 } 
}
export default connect(mapStateToProps)(PostList);