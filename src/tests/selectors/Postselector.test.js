import PostSelector from '../../selectors/PostsSelector'
import posts from '../fixtures/posts'



test('should filter by text value', ()=>{
const filter = {
    text: 'i'
}
const result = PostSelector(posts, filter)
expect(result).toEqual([posts[0],posts[2]])
})