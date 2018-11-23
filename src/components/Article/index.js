import React from 'react'
import {Button, Icon} from 'antd'
import './style.css'

 class Article extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return(
      <div>
        <Button type="primary" className="addBtn">新建文章<Icon type="plus" /></Button>
      </div>
    )
  }
 }

 export default Article