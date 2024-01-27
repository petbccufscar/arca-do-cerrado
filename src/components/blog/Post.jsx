import React from 'react'
import './Post.css'

const Post = ({ post }) => {
    return (
        <div>
            <a href={post.link} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
                <img className="object-cover object-center w-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={post.image} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className='text-sm text-neutral-500'>Publicado em: {post.date}</p>
                    <h5 className="mb-2 font-bold tracking-tight text-gray-900">{post.title}</h5>
                    <p className="mb-3 text-sm text-gray-700 overflow-ellipsis line-clamp-3">{post.content}</p>
                </div>
            </a>
        </div>
    )
}

export default Post