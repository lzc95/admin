import { connect } from "react-redux";
import LoginComponent  from '@/components/Login'
import {login, logout} from '@/actions';


const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return{
    handleSubmit (){
      dispatch(login())
    }
  }
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent)

export default Login;