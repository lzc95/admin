import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import {Layout} from 'antd'
const { Header, Footer, Sider, Content } = Layout
import 'antd/dist/antd.css'
class Hello extends Component {
  render() {
    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider>Sider</Sider>
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