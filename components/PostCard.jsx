import React from 'react'

const PostCard = ({posts}) => {
  return (
    <div>
        {posts.title}
        {posts.excerpt}
    </div>
  )
}

export default PostCard