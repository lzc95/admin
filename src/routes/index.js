import React from "react"
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import {Layout} from 'antd'

import logo from '@/assets/img/logo.svg'
import './style.css'
const { Header, Footer, Sider, Content } = Layout

import Login from '@/components/Login'
import SideMenu from '@/components/SideMenu'
import Article from '@/components/Article'

class Routes extends React.Component{
  constructor (props){
    super(props)
    this.state={
      collapsed: false,
      isLogin: true
    }
  }
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render(){
    if (!this.state.isLogin) {
      return <Login/>
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
              </Switch>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Router>
    )
   }
}
export default Routes
