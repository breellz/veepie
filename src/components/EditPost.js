import React from 'react';
import { connect } from 'react-redux'
import PostForm from './Postform';
import {editPost, deletePost} from '../actions/posts'


const EditPost = (props) => {
  console.log(props)
 const onRemove=()=>{
   props.deletePost(props.post.id)
   props.history.push('/')
 }
 const onSubmit = (post)=> {
   console.log(post)
   props.editpost(props.post.id, post)
  props.history.push('/')
}
  return(
  <div>
    <PostForm post = {props.post}
    onSubmit ={(post)=>onSubmit(post)}/>
    <button onClick={onRemove}>Delete Post</button>
  </div>
 )
};

const mapStateToProps = (state, props) => ({
  post: state.posts.find((post) => post.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editpost: (id, post) => dispatch(editPost(id, post)),
  deletePost: (id) => dispatch(deletePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
