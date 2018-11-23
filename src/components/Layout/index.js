import React from 'React'
import {Layout} from 'antd'
import SideMenu from '@/components/SideMenu'
import logo from '@/assets/img/logo.svg'
// import './style.css'
const { Header, Footer, Sider, Content } = Layout

class App extends React.Component {
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
export default App