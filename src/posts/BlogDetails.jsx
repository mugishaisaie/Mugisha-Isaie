import React from 'react'
import Markdown from 'react-markdown'
import content from '../posts/what_you_need_to_start_web_development.md?raw'
export default function BlogDetails() {
  return (
    <div className="px-4 py-10 max-w-4xl mx-auto ">
      <h1 className="text-4xl font-bold mb-6 text-center dark:text-stone-100">My 📚 Blog Post</h1>
      <h3 className='text-center m-5 font-bold text-2xl dark:text-stone-100'>Let's Learn together and Grow together</h3>
<p className='p-5 font-medium dark:text-stone-100'>I believe that the super thing that can make you super is just learning</p>
<p className='m-2 text-md bg-slate-300 p-2 '>Whether you're starting from scratch or aiming higher, learning is your most powerful tool. Let's explore it together.</p>
      <div className="prose prose-sm md:prose-base lg:prose-lg dark:prose-invert max-w-none">
        <Markdown >{content}</Markdown>
      </div>
    </div>
  );
}

