import React, { useState } from 'react'
import { connect } from 'react-redux'

import { deletePost, editPost } from '../actions'
import InputPopUp from './InputPopUp'

const Post = ({
  id,
  title,
  imageUrl,
  description,
  dispatchEditPost,
  dispatchDeletePost,
}) => {
  const [isEditPost, setIsEditPost] = useState(false)

  return (
    <div
      style={{
        padding: '5px',
        margin: '2px',
        marginRight: '30%',
        borderStyle: 'solid',
        borderWidth: '2px',
      }}
    >
      <div>
        Post
        {' '}
        {id}
        :
        {' '}
        {title}
      </div>
      <img src={imageUrl} alt="" />
      <div>{description}</div>
      <input
        className="button"
        type="button"
        value="Edit"
        onClick={() => setIsEditPost(true)}
      />
      <input
        className="button"
        type="button"
        value="Delete"
        onClick={() => dispatchDeletePost(id)}
      />
      <InputPopUp
        visible={isEditPost}
        closeModal={() => setIsEditPost(false)}
        inputs={[
          {
            title: 'Title',
            suggestedText: 'Enter the title of the post',
            currentText: title,
          },
          {
            title: 'Image',
            suggestedText: 'Enter image url',
            currentText: imageUrl,
          },
          {
            title: 'Description',
            suggestedText: 'Enter Description',
            currentText: description,
          },
        ]}
        onSubmit={(ptitle, pimageUrl, pdescription) => dispatchEditPost(id, ptitle, pimageUrl, pdescription)}
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchEditPost: (id, title, imageUrl, description) => dispatch(editPost(id, title, imageUrl, description)),
  dispatchDeletePost: id => dispatch(deletePost(id)),
})

export default connect(null, mapDispatchToProps)(Post)
