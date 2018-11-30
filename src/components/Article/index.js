import React from 'react'
import {Button, Icon} from 'antd'
import {withRouter} from 'react-router-dom'
import axios from '@/utils/axios'
import './style.css'

 class Article extends React.Component {
  constructor (props) {
    super(props)
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
    return(
      <div>
        <Button type="primary" className="addBtn" onClick={this.addArticle}>新建文章<Icon type="plus" /></Button>
      </div>
    )
  }
 }

 export default withRouter(Article)