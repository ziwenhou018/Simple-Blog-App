let id = 1

export const EDIT_PROFILE = 'EDIT_PROFILE'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

export const editProfile = (imageUrl, description) => ({
  type: EDIT_PROFILE,
  imageUrl,
  description,
})

export const addPost = (title, imageUrl, description) => ({
  type: ADD_POST,
  id: id++,
  title,
  imageUrl,
  description,
})

export const editPost = (pid, title, imageUrl, description) => ({
  type: EDIT_POST,
  id: pid,
  title,
  imageUrl,
  description,
})

export const deletePost = pid => ({
  type: DELETE_POST,
  id: pid,
})
