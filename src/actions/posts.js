import uuid from 'uuid';
import database from '../firebase/firebase';

//ADD_POST

export const addPost = (post) => ({
  type: 'ADD_POST',
  post
})

export const startAddPost = (postData = {})=>{
  return (dispatch) => {
    database.ref('post').push(postData).then((ref)=>{
      dispatch(addPost({
        id: ref.key,
        ...postData
      }))
    })
  }
}

//DELETE_POST

export const deletePost = (id) => ({
  type: 'DELETE_POST',
  id
})

export const startDeletePost = (id) => {
  return (dispatch) => {
   return database.ref(`post/${id}`).remove().then(()=>{
      dispatch(deletePost(id))
    })
  }
}

//EDIT_POST
export const editPost = (id, updates) => ({
  type: 'EDIT_POST',
  id,
  updates
}) 

export const startEditPost= (id, updates) => {
  return (dispatch) => {
    database.ref(`post/${id}`).update(updates).then(()=>{
      dispatch(editPost(id, updates))
    })
  }
}

// SET_POSTS

export const setPosts = (posts) =>({
  type: 'SET_POSTS',
  posts
})

export const startSetPosts = () => {
  return (dispatch)=> {
   return database.ref('post').once('value').then((snapshot)=>{
      const posts = []

      snapshot.forEach((childSnapshot)=>{
        posts.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })
      dispatch(setPosts(posts))
    })
  }
}
