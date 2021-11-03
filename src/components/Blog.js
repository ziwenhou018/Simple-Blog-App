import React, { useState } from 'react'
import { connect } from 'react-redux'

import InputPopUp from './InputPopUp'
import { addPost } from '../actions'
import Post from './Post'

const Blog = ({ posts, dispatchAddPost }) => {
  const [isAddPost, setIsAddPost] = useState(false)

  return (
    <div
      style={{
        padding: '5px',
        borderStyle: 'solid',
        margin: '2px',
        borderWidth: '2px',
      }}
    >
      <div style={{ display: 'flex' }}>
        <div style={{ fontSize: '20px' }}>Blog Posts</div>
        <input
          className="button"
          type="button"
          value="Add Post"
          onClick={() => setIsAddPost(true)}
        />
        <InputPopUp
          title="New Post"
          visible={isAddPost}
          closeModal={() => setIsAddPost(false)}
          inputs={[
            {
              title: 'Title',
              suggestedText: 'Enter the title of the post',
              currentText: '',
            },
            {
              title: 'Image',
              suggestedText: 'Enter image url',
              currentText: '',
            },
            {
              title: 'Description',
              suggestedText: 'Enter Description',
              currentText: '',
            },
          ]}
          onSubmit={dispatchAddPost}
        />
      </div>
      {posts.map(post => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          imageUrl={post.imageUrl}
          description={post.description}
        />
      ))}
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: (title, imageUrl, description) => dispatch(addPost(title, imageUrl, description)),
})

const mapStateToProps = state => ({
  posts: state.posts,
})

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
