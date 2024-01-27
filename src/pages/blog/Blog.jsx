import React from 'react'
import Post from '../../components/blog/Post'

const Blog = () => {

    const posts = [
        {
            id: 1,
            title: "Lorem Ipsum and others Lore Lorem Ipsum and",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim corrupti id esse repellat repellendus provident ut quod, alias harum modi nulla consequuntur dolorem dolor quo velit consectetur voluptatum ullam. Ea!",
            link: "/home",
            date: "Mar 8, 2020",

            image: "../src/assets/species/1.png"
        },
        {
            id: 2,
            title: "Lorem Ipsum and others Lore Lorem Ipsum and",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim corrupti id esse repellat repellendus provident ut quod, alias harum modi nulla consequuntur dolorem dolor quo velit consectetur voluptatum ullam. Ea!",
            link: "/home",
            date: "Mar 16, 2020",
            image: "../src/assets/species/2.png"
        }
    ]

    return (
        <div className='flex flex-col min-h-screen w-full items-center'>
            <h1 className='bg-primary-color p-4 text-white text-center text-3xl font-semibold w-full'>Blog</h1>
            <section className='flex flex-col py-8 px-6 mx-auto max-w-screen-xl lg:px-8 justify-center items-center'>
                <h2 className='text-2xl font-semibold mb-4 border-b-2 border-primary-color max-w-fit px-2'>Últimas Notícias</h2>
                <section className='flex flex-col gap-8 mt-8'>
                    {posts
                        .reverse()
                        .map(post => (
                            <Post key={post.id} post={post} />
                        ))}
                </section>
            </section>
        </div>

    )
}

export default Blog