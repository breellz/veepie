import React from 'react';
import{ connect } from 'react-redux'
import Postform from './Postform'
import {addPost} from '../actions/posts'




const AddPost = (props) => {
  const onSubmit = ({...rest, tags}) => {
    const editedTags = tags.split(' ')
    const post= {...rest, tags: editedTags}
    props.addPost(post);
    props.history.push('/')
  }
 return(
  <div>
    <Postform  onSubmit = {onSubmit}/>
    </div>
 )
}

const mapDispatchToProps = (dispatch) => ({
  addPost : (post)=>(dispatch(addPost(post)))
})
export default connect(undefined, mapDispatchToProps)(AddPost);
