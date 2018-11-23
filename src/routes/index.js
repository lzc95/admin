import React from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import LayoutComponent from '@/components/Layout'

class Routes extends React.Component{
   render(){
        return(
            // <Router>   
                <div>  
                  <LayoutComponent/>
                </div>
            // </Router>
        )
   }
}

export default Routes
