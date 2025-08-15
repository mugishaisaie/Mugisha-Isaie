import matter from "gray-matter";
import React from 'react'

function getBlogs() {
    const context = import.meta.glob('../posts/*.md',{as:'raw'});
    const blogPromises = []
  return (
    <div>
      
    </div>
  )
}

export default getBlogs
