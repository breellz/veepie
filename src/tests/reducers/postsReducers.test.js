import posts from '../fixtures/posts'
import postsReducer from '../../reducers/posts'


test('should set up default state', ()=>{
 const state = postsReducer(undefined, {type : '@@INIT'})
    expect(state).toEqual([])
})

test('should add posts to state', ()=>{
    const action = {
        type: 'ADD_POST',
        post: posts
    }
    const state = postsReducer(undefined, action)
    expect(state).toEqual([posts])
})

test('should delete post by id', ()=>{
    const action = {
        type: 'DELETE_POST',
        id: posts[1].id
    }
    const state = postsReducer(posts, action)
    expect(state).toEqual([posts[0],posts[2]])
})

test('should edit post by id', ()=>{
    const title = 'Noah'
    const action = {
        type: 'EDIT_POST',
        id: posts[1].id,
        updates : {
            title
        }
    }
    const state = postsReducer(posts, action)
    expect(state[1].title).toBe(title)
})

test('should set posts regardless of previous state', ()=>{
    const action ={
        type: 'SET_POSTS',
        posts: posts[2]
    }

    const state = postsReducer(posts, action)
    expect(state).toEqual(posts[2])
})