import React from 'react'
import {Button, Icon} from 'antd'
import axios from '@/utils/axios'
import './style.css'

 class Article extends React.Component {
  constructor (props) {
    super(props)
  }
  componentWillMount(){
    axios.post('/api/getArticle').then(res => {
     console.log(res)
    }).catch()
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