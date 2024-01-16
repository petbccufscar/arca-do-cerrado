import React from 'react'
import './Blog.css'
import Post from '../../components/blog/Post'

const Blog = () => {

    const posts = [
        {
            id: 1,
            title: "Lorem Ipsum and others Lore Lorem Ipsum and",
            summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim corrupti id esse repellat repellendus provident ut quod, alias harum modi nulla consequuntur dolorem dolor quo velit consectetur voluptatum ullam. Ea!",
            souce: "G1",
            link: "/home",
            date:  "Mar 8, 2020",
            category: "New specie"
        },
        {
            id: 2,
            title: "Lorem Ipsum and others Lore Lorem Ipsum and",
            summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim corrupti id esse repellat repellendus provident ut quod, alias harum modi nulla consequuntur dolorem dolor quo velit consectetur voluptatum ullam. Ea!",
            souce: "G1",
            link: "/home",
            date: "Mar 16, 2020",
            category: "New specie"
        }
    ]

    return (
        <div className='blog'>
            <h1>Blog</h1>
            <section className='main'>
                <h2>Últimas notícias</h2>
                <section className='posts'>
                {posts
                    .reverse()
                    .map(post => (
                    <Post key={post.id} post={post}/>
                ))}
                </section>
                

            </section>
        </div>

    )
}

export default Blog