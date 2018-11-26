import * as TYPES from './type'

const login = () => {
  return{
    type:TYPES.LOGIN
  }
}

const logout = () => {
  return{
    type:TYPES.LOGOUT
  }
}

export {
  login,
  logout
}