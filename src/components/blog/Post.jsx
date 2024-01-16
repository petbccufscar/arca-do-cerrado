import React from 'react'
import './Post.css'

const Post = ({post}) => {
    return (
        <div className='post'>
            <div className='header'>
                <p className='date'>{post.date}</p>
                <p className='tag'>{post.category}</p>
            </div>
            <h3>{post.title}</h3>
            <p className='summary'>{post.summary}</p>
            <div className='links'>
                <p>Via {post.souce}</p>
                <a href={post.link}>Saiba mais</a>
            </div>
        </div>
    )
}

export default Post