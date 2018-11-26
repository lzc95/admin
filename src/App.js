import React from "react"
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import {Layout} from 'antd'
import logo from '@/assets/img/logo.svg'
import './App.css'
const { Header, Footer, Sider, Content } = Layout
import PropTypes from 'prop-types'
import Login from '@/containers/login'
import SideMenu from '@/components/SideMenu'
import Article from '@/components/Article'

class App extends React.Component{
  constructor (props, context){
    super(props, context)
    this.state={
      collapsed: false,
    }
  }
  // 侧边栏收起展开
  onCollapse = (collapsed) => {
    this.setState({ collapsed })
  }


  render(){
    let isLogin = this.context.store.getState().auth.isAuthenticated
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
            <Header>Header</Header>
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

// *****很重要*****   子组件必须对context定义，否则 this.context 将是 empty object
App.contextTypes={
  store:PropTypes.object
}
export default App
