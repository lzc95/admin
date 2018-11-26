const initialState = false

export default (state = initialState, action)=>{
  switch (action.type) {
    case 'LOGIN':
      return !state
    case 'LOGOUT':
      return state
    default:
      return state
  }
}