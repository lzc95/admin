import React from "react"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {Layout} from 'antd'

import logo from '@/assets/img/logo.svg'
import './style.css'
const { Header, Footer, Sider, Content } = Layout

import Login from '@/components/Login'
import SideMenu from '@/components/SideMenu'
import Article from '@/components/Article'

class Routes extends React.Component{
  render(){
    return(
      <Router>   
        <Layout style={{ minHeight: '100vh' }}>
          <Sider>
            <img src={logo} className="logo" alt="logo" /><span className="title">后台管理</span>
            <SideMenu/>
          </Sider>
          <Layout>
            <Header>Header</Header>
            <Content>
              <Switch>
                <Route path="/login" component={Login}></Route>
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
