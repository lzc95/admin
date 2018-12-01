import React from 'react'
import {Button, Icon, Table} from 'antd'
import {withRouter} from 'react-router-dom'
import axios from '@/utils/axios'
import './style.css'

 class Article extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dataSource: []
    }
  }
  addArticle = () => {
    this.props.history.push('/addArticle')
  }
  componentWillMount(){
    axios.post('/api/getArticle').then(res => {
     console.log(res)
    }).catch()
  }
  
  render () {
    const columns = [{
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    }, {
      title: '分类',
      dataIndex: 'category',
      key: 'category',
    }, {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    }]

    return(
      <div>
        <Button type="primary" onClick={this.addArticle}>新建文章<Icon type="plus" /></Button>
        <Table dataSource={this.state.dataSource} columns={columns} />
      </div>
    )
  }
 }

 export default withRouter(Article)