import React from 'react';
import Markdown from 'react-markdown';
import content from '../posts/what_you_need_to_start_web_development.md?raw';

export default function BlogDetails() {
  return (
    <div className="px-4 py-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-stone-900 dark:text-stone-100">My Blog Post</h1>
      <h2 className="text-center m-5 font-bold text-2xl text-stone-800 dark:text-stone-200">Let&apos;s Learn together and Grow together</h2>
      <p className="p-5 font-medium text-stone-700 dark:text-stone-300">I believe that the super thing that can make you super is just learning</p>
      <p className="m-2 text-md bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 p-4 rounded-xl border border-stone-200 dark:border-stone-700">Whether you&apos;re starting from scratch or aiming higher, learning is your most powerful tool. Let&apos;s explore it together.</p>
      <div className="prose prose-sm md:prose-base lg:prose-lg dark:prose-invert max-w-none">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
}
