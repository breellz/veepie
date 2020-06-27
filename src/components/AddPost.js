import React, { useEffect, useState } from 'react';
import{ connect } from 'react-redux'
import {firebase} from '../firebase/firebase'
//import Postform from './Postform'
import { startAddPost } from '../actions/posts'
import RichEditor from '../components/RichEditor'
import { database } from 'firebase';



const AddPost = (props) => {
  const [name, setName] = useState('Anonymous');
  const [uid, setUid] = useState('')
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      if (user) {
        setName(user.displayName)
        setUid(user.uid)
        }
     })
   },[]) 

  const onSubmit = ({...rest, tags}) => {
    const editedTags = tags.split(',')
    const post= {...rest, tags: editedTags, author: name, uid}
    props.startAddPost(post);
    props.history.push('/dashboard')
  }
 return(
  <div className="content-container add-post">
  
    <RichEditor  onSubmit = {onSubmit}/>
    </div>
 )
}

const mapDispatchToProps = (dispatch) => ({
  startAddPost : (post)=>(dispatch(startAddPost(post)))
})
export default connect(undefined, mapDispatchToProps)(AddPost);
