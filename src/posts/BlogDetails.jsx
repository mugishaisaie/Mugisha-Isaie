import React from 'react'
import Markdown from 'react-markdown'
import content from '../posts/what_you_need_to_start_web_development.md?raw'
export default function BlogDetails() {
  return (
    <div className="px-4 py-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">📚 Blog Post</h1>
      <div className="prose prose-lg">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
}

