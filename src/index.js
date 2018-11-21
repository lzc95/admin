import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './base.css'
class Hello extends Component {
    render() {
        return (
            <div className="red">
                hello, webpack,i'm react luozemgcahg 
            </div>
        )
    }
}
ReactDOM.render(
    <Hello/>,
    document.getElementById('root')
)