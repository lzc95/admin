import React from 'react'
import {withRouter} from 'react-router-dom';
import { Menu, Icon} from 'antd'
const SubMenu = Menu.SubMenu
import {nav} from './config'
class SideMenu extends React.Component {
  constructor(props){
    super(props)
  }
  routeJump (path) {
    this.props.history.push(path)
  }
  render () {
    let menus = nav
    return(
      <div>
        <Menu mode="inline" theme="dark">
          {
            menus.map((item)=>{
              return(
                !item.children &&
                <Menu.Item key={item.id} onClick={this.routeJump.bind(this,item.path)}>
                  <Icon type={item.icon} />
                  <span>{item.title}</span>
                </Menu.Item>
              )
            })
          }
          {
            menus.map((item)=>{
              return(
                item.children &&
                <SubMenu key={item.id} title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
                  { item.children.map((v)=>{
                      return(
                        <Menu.Item key={v.id} onClick={this.routeJump.bind(this,v.path)}>
                          {v.title}
                        </Menu.Item>
                      )
                    })
                  }
                </SubMenu>
              )
            })
          }
        </Menu>
      </div>
    )
  }
}
export default withRouter(SideMenu)