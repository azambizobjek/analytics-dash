import React, { Component } from 'react'
import Stat from './Stat'
import Search from './Search'
import { Card } from 'reactstrap'

 class Analytics extends Component {

    constructor(){
        super();
        this.state={
            chartData:{}
        }
    }
    
    componentWillMount(){
        this.getChartData();
    }

    getChartData(){
        this.setState({
            chartData: {
                labels : ['Ali', 'Suib', 'Sudin', 'Mamat', 'Sajat', 'Fatimah', 'Emma', 'Wawa', 'Hannah'],
                datasets:[
                  {
                    label:'User Log In',
                    data:[
                      6,
                      80,
                      60,
                      25,
                      15,
                      30,
                      40,
                      82,
                      95
                    ],
                    backgroundColor:[
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 206, 86, 0.6)',
                      'rgba(75, 192, 192, 0.6)',
                      'rgba(153, 102, 255, 0.6)',
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 206, 86, 0.6)',
                      'rgba(75, 192, 192, 0.6)',
                    ]
                  }
                ] 
              }
        })
    }

  render() {
    return (
      <div>
        
        <section className="statistics mt-4">
        <div className="container-fluid">
        <h1 className="h3 display">Total Record Created            </h1>

        <div className="row d-flex">

                
        <div className="col-lg-4 col-md-4 col-sm-4">  
        {/* <Card>      */}
            <div className="card data-usage">
                <h2 className="display h4">All</h2>
                <div className="row d-flex align-items-center">
                    <div className="col-sm-6">
                        <img src={require('../../img/month.svg')} alt="Month" className="card-img-top img-fluid" data-toggle="tooltip" data-placement="top" title="Month"/>                                      
                        
                    </div>
                    <div className="col-sm-6"><h3 className="h4 display">Total</h3><strong className="text-primary">3</strong><span></span></div>
                </div>

            </div>
            {/* </Card> */}
        </div>

        <div className="col-lg-4 col-md-4 col-sm-4">  
        {/* <Card>      */}
            <div className="card data-usage">
                <h2 className="display h4">Month</h2>
                <div className="row d-flex align-items-center">
                    <div className="col-sm-6">
                                                            
                        <img src={require('../../img/date.svg')} alt="Date" className="card-img-top img-fluid" data-toggle="tooltip" data-placement="top" title="Date"/>                                      

                    </div>
                    <div className="col-sm-6"><h3 className="h4 display">Total</h3><strong className="text-primary">5</strong><span></span></div>
                </div>

            </div>
            {/* </Card> */}
        </div>

        <div className="col-lg-4 col-md-4 col-sm-4">  
        {/* <Card>      */}
            <div className="card data-usage">
                <h2 className="display h4">User</h2>
                <div className="row d-flex align-items-center">
                    <div className="col-sm-6">
                                                            
                        <img src={require('../../img/user1.svg')} alt="User1" className="card-img-top img-fluid" data-toggle="tooltip" data-placement="top" title="User1"/>                                      
                        
                    </div>
                    <div className="col-sm-6"><h3 className="h4 display">Total</h3><strong className="text-primary">10</strong><span></span></div>
                </div>

            </div>
            {/* </Card> */}
        </div>

      </div>
        </div>
    </section>


    <section className="statistics mt-4">
        <div className="container-fluid">
        <h1 class="h3 display">System Usage Statistic            </h1>

        <div className="row d-flex">

        <Card className="col-lg-12 col-md-12 col-sm-12">
        <div >  
            <div className="chart">
                {/* <h2 className="display h4">System Usage Statistic</h2> */}
                {/* <div className="row d-flex align-it/ems-center"> */}
                <Stat chartData={this.state.chartData} legendPosition="bottom"/>
                {/* </div> */}

            </div>
        </div>
        </Card>
                
        </div>
        </div>
    </section>
      </div>
    )
  }
}
export default Analytics;


