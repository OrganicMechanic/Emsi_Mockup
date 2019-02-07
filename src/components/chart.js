import React, { Component } from 'react'
import { Bar, Line } from 'react-chartjs-2'

class Chart extends Component {
  constructor (props) {
  	super(props)
  }

  render () {
    return (
      <div className='chart'>
        <Line
          data={{
          	labels: [ 2013, 2014, 2015, 2016, 2017, 2018 ],
          	datasets: [{
          		label: 'Regional',
          		backgroundColor: 'lightgreen',
          		data: [
                11904,
                12384,
                12352,
                12680,
                12920,
                13114
              ]
          	}, {
          		label: 'State',
          		backgroundColor: 'lightblue',
          		data: [
          		13103,
                13598,
                13599,
                13968,
                14244,
                14469
          		]
          	}
          	]
          }}
          width={75}
          height={20}
          options={{}}
        />
      </div>
    )
  }
}

export default Chart
