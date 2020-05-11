import React from 'react';
import{ connect } from 'react-redux'
//import Postform from './Postform'
import { startAddPost } from '../actions/posts'
import RichEditor from '../components/RichEditor'



const AddPost = (props) => {
  const onSubmit = ({...rest, tags}) => {
    const editedTags = tags.split(',')
    const post= {...rest, tags: editedTags}
    props.startAddPost(post);
    console.log(post)
    props.history.push('/')
  }
 return(
  <div>
    <RichEditor  onSubmit = {onSubmit}/>
    </div>
 )
}

const mapDispatchToProps = (dispatch) => ({
  startAddPost : (post)=>(dispatch(startAddPost(post)))
})
export default connect(undefined, mapDispatchToProps)(AddPost);
