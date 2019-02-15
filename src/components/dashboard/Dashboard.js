import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Analytics from './Analytics'

 class Dashboard extends Component {
  render() {

    


    return (
        <Fragment>
        <div className="breadcrumb-holder">
           <div className="container-fluid">        
             <div className="breadcrumb">           
               <h4 className="text-primary"><strong>DASHBOARD</strong></h4>  
             </div>
           </div>
       </div>           
            
       

           <Analytics
             
             /> 
           

         
       
 
     </Fragment>
    )
  }
}

const mapStateToProps= state =>({
   
     
})

export default connect(mapStateToProps,{
 
 
  
})(Dashboard)