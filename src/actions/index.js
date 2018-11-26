import * as TYPES from './type'

const setCurrentUser = (user) => {
  return {
    type: TYPES.SET_CURRENT_USER,
    user
  }
}

export {
  setCurrentUser
}