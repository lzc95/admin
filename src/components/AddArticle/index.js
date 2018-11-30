import React from 'react'
import {Button,Input,Select} from 'antd'
import Editor from 'wangeditor'
import './style.css'
 class AddArticle extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editorContent: ''
    }
  }
  componentDidMount() {
    const elem = this.refs.editorElem
    const editor = new Editor(elem)
    // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
    editor.customConfig.onchange = html => {
      this.setState({
        editorContent: html
      })
    }
    editor.create()
  }

  clickHandle() {
    alert(this.state.editorContent)
  }
  render () {
    return(
      <div>
        <div>标题：<Input className="content-item"/></div>
        <div>分类：<Select className="content-item"/></div>
        <div>标签：<Select mode="tags" className="content-item" placeholder="标签"></Select></div>
        <div ref="editorElem" className="editor"></div>
        <Button onClick={this.clickHandle.bind(this)}>获取内容</Button>
      </div>
    )
  }
 }

 export default AddArticle