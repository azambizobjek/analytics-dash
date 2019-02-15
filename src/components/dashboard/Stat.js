import React, { Component } from 'react'
import {Bar, Line, Pie, Doughnut, Polar, Radar, HorizontalBar} from 'react-chartjs-2';

 class Stat extends Component {

  constructor(props){
    super(props);
    this.state = {
      chartData: props.chartData
    }
  }


  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'User Log In'
}

  render() {
    return (
      <div className="chart">
      <HorizontalBar
      data={this.state.chartData}
      options={{
        // title:{
        //   display: this.props.displayTitle,
        //   text: 'System Usage Statistic',
        //   fontSize:25
        // },
        legend:{
          display:this.props.displayLegend,
          position:this.props.legendPosition
        },
      }}
/>
      </div>
    )
  }
}

export default Stat;