import {Message} from 'antd'
import { connect } from "react-redux"
import axios from '@/utils/axios'
import LoginComponent  from '@/components/Login'
import {setCurrentUser} from '@/actions'

const mapStateToProps = (state) => {
  console.log(state)
  return state
}

const mapDispatchToProps = (dispatch) => {
  return{
    handleLogin: (user) =>{
        axios.post('/api/login', user).then(res => {
        console.log(res)
        if (res.code == 0) {
          localStorage.setItem('token', res.token)
          localStorage.setItem('username', res.data.username)
          dispatch(setCurrentUser({status:true}))
          window.location.reload()
        } else {
          Message.error(res.data)
        }
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