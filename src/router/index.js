import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'

import Article from '@/components/Article'
import AddArticle from '@/components/AddArticle'
import NotFound from '@/components/NotFound'

class Routes extends React.Component{
  render () {
    return(
      <Switch>
        <Route exact path="/" render={() =><Redirect to='/article'/>}/>
        <Route path="/article" component={Article}/>
        <Route path="/addArticle" component={AddArticle}/>
        <Route component={NotFound}></Route>
      </Switch>
    )
  }
}

export default Routes