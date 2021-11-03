import { EDIT_PROFILE } from '../actions'

const defaultState = { imageUrl: null, description: null }

const ProfileReducer = (state = defaultState, action) => {
  const { type, imageUrl, description } = action
  switch (type) {
    case EDIT_PROFILE:
      return { imageUrl, description }
    default:
      return state
  }
}

export default ProfileReducer
