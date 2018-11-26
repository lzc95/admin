import { connect } from "react-redux"
import axios from 'axios'
import LoginComponent  from '@/components/Login'
import {setCurrentUser} from '@/actions'
import setAuthorizationToken from '@/utils/setAuthorizationToken'


const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return{
    handleLogin: () =>{
        axios.post('/api/auth', user).then(res => {
        const token = res.data.token
        localStorage.setItem('jwtToken', token)
        setAuthorizationToken(token)
        dispatch(setCurrentUser(jwtDecode(token)))
      })  
    }
  }
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent)

export default Login;