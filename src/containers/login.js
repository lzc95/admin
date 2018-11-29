import { connect } from "react-redux"
import axios from '@/utils/axios'
import jwt from 'jwt-simple'
import LoginComponent  from '@/components/Login'
import {setCurrentUser} from '@/actions'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return{
    handleLogin: (user) =>{
        axios.post('/api/auth', user).then(res => {
        console.log(res)
        // const token = res.data.token
        // localStorage.setItem('token', token)
        // dispatch(setCurrentUser(jwt.decode(token, 'jstSecret')))
      }).catch(err => {
        console.log(err)
      })
    }
  }
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent)

export default Login;