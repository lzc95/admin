import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'

import {Layout} from 'antd'
import SideMenu from '@/components/SideMenu'
import logo from '@/assets/img/logo.svg';
const { Header, Footer, Sider, Content } = Layout
import './index.css'

class Hello extends Component {
  render() {
    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider>
            <p><img src={logo} className="logo" alt="logo" /><span className="title">后台管理</span></p>
            <SideMenu/>
          </Sider>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}
ReactDOM.render(
  <Hello/>,
  document.getElementById('root')
)