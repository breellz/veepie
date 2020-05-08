import uuid from 'uuid';

//ADD_POST
export const addPost = (post) => ({
  type: 'ADD_POST',
  post
})

//DELETE_POST

export const deletePost = (id) => ({
  type: 'DELETE_POST',
  id
})

//EDIT_POST
export const editPost = (id, updates) => ({
  type: 'EDIT_POST',
  id,
  updates
}) 

// SET_POSTS

export const setPosts = (posts) =>({
  type: 'SET_POSTS',
  posts
})
