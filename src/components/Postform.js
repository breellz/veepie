import React, { useState } from 'react';

const Postform =(props) => {
    const [title, setTitle] = useState(props.post? props.post.title :'')
    const [body, setBody] = useState(props.post ? props.post.body :'')
    const [tags, setTags] = useState(props.post? props.post.tags :'')
    const [error, setError] = useState('')

    const handleTitle = (e) => {
        const titleText = e. target.value;
        setTitle(titleText)
    }

    const handleBody = (e) => {
      const bodyText = e. target.value;
        setBody(bodyText)
    }

    const handleTags = (e) => {
        const tagsText = e.target.value
            setTags(tagsText)
        }
        
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!title || !body || !tags){
            setError('All fields are required')
        }else {
        setError('')
        props.onSubmit({
            title,
            body,
            tags
        })
    }
    }
    return (
        <div>
        {error}
        <form onSubmit={handleSubmit}>
            <input 
            autoFocus
            type="text" 
            placeholder="Post Title goes here..."
            value= {title} 
            onChange={handleTitle}
             />
            <textarea 
            placeholder="Post body goes here..." 
            value={body}
            onChange={handleBody}
             />
            <input 
            type="text" 
            placeholder="space separated tags..."
            value={tags} 
            onChange={handleTags}
            />
            <button>Post Story</button>
        </form>
        </div>
    )
}

export default Postform