import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'

import Article from '@/components/Article'
import AddArticle from '@/components/AddArticle'
import Category from '@/components/Category'
import Tags from '@/components/Tags'
import Charts from '@/components/Charts'
import Account from '@/components/Account'
import NotFound from '@/components/NotFound'

class Routes extends React.Component{
  render () {
    return(
      <Switch>
        <Route exact path="/" render={() =><Redirect to='/article'/>}/>
        <Route path="/article" component={Article}/>
        <Route path="/addArticle" component={AddArticle}/>
        <Route path="/category" component={Category}/>
        <Route path="/tags" component={Tags}/>
        <Route path="/charts" component={Charts}/>
        <Route path="/account" component={Account}/>
        <Route component={NotFound}></Route>
      </Switch>
    )
  }
}

export default Routes