import { ADD_POST, EDIT_POST, DELETE_POST } from '../actions'

const defaultState = []

const ProfileReducer = (state = defaultState, action) => {
  const {
    type, id, title, imageUrl, description,
  } = action
  switch (type) {
    case ADD_POST:
      return [
        ...state,
        {
          id,
          title,
          imageUrl,
          description,
        },
      ]
    case EDIT_POST:
      return state.map(post => {
        if (post.id === id) {
          return {
            id,
            title,
            imageUrl,
            description,
          }
        }
        return post
      })
    case DELETE_POST:
      return state.filter(post => post.id !== id)
    default:
      return state
  }
}

export default ProfileReducer
