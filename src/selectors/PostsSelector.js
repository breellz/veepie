
export  default (posts, {text})=> {
    return posts.filter((post)=> post.title.toLowerCase()
    .includes(text.toLowerCase()))
}