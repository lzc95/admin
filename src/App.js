import React from "react"
import {connect} from 'react-redux'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import {Layout, Spin, Avatar,Icon} from 'antd'
import logo from '@/assets/img/logo.svg'
import './App.css'
const { Header, Footer, Sider, Content } = Layout
import Login from '@/containers/login'
import SideMenu from '@/components/SideMenu'
import Article from '@/components/Article'
import axios from '@/utils/axios'
import {setCurrentUser} from '@/actions'

class App extends React.Component{
  constructor (props){
    super(props)
    this.state={
      collapsed: false,
      loading:true,
      username:''
    }
  }
  // 侧边栏收起展开
  onCollapse = (collapsed) => {
    this.setState({ collapsed })
  }
  
  componentDidMount () {
    axios.get('/api/auth').then(res => {
      this.setState({
        loading:false
      })
      if (res.code == 0){
        this.props.checkAuth({status:true})
      }
    }).catch(err => {
      this.setState({
        loading:false
      })
    })

    if(localStorage.username){
      this.setState({
        username: localStorage.getItem('username')
      })
    }
  }

  render(){
    let {isLogin }= this.props
    if (this.state.loading) {
      return(
        <Spin spinning={this.state.loading} 
        tip="Loading..." 
        size="large"  className="spin"/>
      )
    }
    if (!isLogin) {
      return (
        <Login />
      )
    }
    return(
      <Router>   
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}>
            <img src={logo} className="logo" alt="logo" />
            {!this.state.collapsed && <span className="title">后台管理</span>}
            <SideMenu/>
          </Sider>
          <Layout>
            <Header>
              <div className="userInfo">
                <Avatar style={{ backgroundColor: '#87d068'}} icon="user" />
                <span>Hi,{this.state.username}</span>
                <button className="logout"><Icon type="logout" />退出</button>
              </div> 
            </Header>
            <Content>
              <Switch>
                <Route exact path="/" render={() =><Redirect to='/article'/>}></Route>
                <Route path="/article" component={Article}></Route>
                <Route path="/login" component={Login}></Route>
              </Switch>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Router>
    )
   }
}

// *****很重要*****   子组件必须对context定义，否则 this.context 将是 empty object(但是慎用this.context)
// App.contextTypes={
//   store:PropTypes.object
// }
const mapStateToProps = (state) => {
  return{
    isLogin: state.auth.isAuthenticated
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    checkAuth: (status) =>{
     dispatch(setCurrentUser(status))
    },
    logout: (status) => {
      dispatch(setCurrentUser(status))
      localStorage.removeItem('username')
      localStorage.removeItem('token')
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
