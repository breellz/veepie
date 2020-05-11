import React from 'react';
import { connect } from 'react-redux'
//import PostForm from './Postform';
import {startEditPost, startDeletePost} from '../actions/posts'
import RichEditor from './RichEditor'


const EditPost = (props) => {
 const onRemove=()=>{
   props.startDeletePost(props.post.id)
   props.history.push('/')
 }
 const onSubmit = ({tags, ...rest})=> {
  const editedTags = tags.split(',')
  const updates = {...rest, tags: editedTags}
   props.startEditpost(props.post.id, updates)
  props.history.push('/')
}
  return(
  <div>
    <RichEditor post = {props.post}
    onSubmit ={(post)=>onSubmit(post)}/>
    <button onClick={onRemove}>Delete Post</button>
  </div>
 )
};

const mapStateToProps = (state, props) => ({
  post: state.posts.find((post) => post.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditpost: (id, updates) => dispatch(startEditPost(id, updates)),
  startDeletePost: (id) => dispatch(startDeletePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
