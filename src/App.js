import React, { Component } from 'react'
import Chart from './components/chart'
import Table1 from './components/Table'
import './App.css'

function calculatePercent (val1, val2) {
  let x = (val1 / val2) * 100
  return (x)
}

var data = [
  { industry: 'Software Publishers', occupation: '4654', percent: '37.7%', total: '8.8%' },
  { industry: 'Computer Systems Design Services', occupation: '1873', percent: '15.2%', total: '9.1%' },
  { industry: 'Custom Computer Programming Services', occupation: '1388', percent: '11.2%', total: '9.1%' },
  { industry: 'Aircraft Manufacturing', occupation: '444', percent: '3.6%', total: '0.6%' },
  { industry: 'Other Computer Related Services', occupation: '296', percent: '2.4%', total: '9.1%' }
]

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: false
    }
  }
  componentDidMount () {
    fetch('http://www.mocky.io/v2/5a29b5672e00004a3ca09d33')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      })
  }
  render () {
    var { isLoaded, items } = this.state
    if (!isLoaded) {
      return <div>Loading...</div>
    }
    return (
      <div classname='App'>
        <p class='nospacing'>
          <h2>Occupation Overview</h2>
          {this.state.items.occupation.title} in {this.state.items.region.title}
        </p>
        <br />
        <p class='tab'>
          <b>Occupation Summary for {this.state.items.occupation.title}</b>
        </p>
        <div class='row'>
          <div class='columnleft'>
            <span>
              <h2>{this.state.items.summary.jobs.regional}</h2>
              <p><font size='2'><b>Jobs ({this.state.items.summary.jobs.year})</b></font></p>
              <p><font size='2'>190% <font color='green'> above </font> National average </font></p>
            </span>
          </div>
          <div class='column'>
            <span>
              <h2><font color='green'>+{this.state.items.summary.jobs_growth.regional}%</font></h2>
              <p><font size='2'><b>% Change ({this.state.items.summary.jobs_growth.start_year}-{this.state.items.summary.jobs_growth.end_year})</b></font></p>
              <p><font size='2'>Nation: <font color='green'>+{this.state.items.summary.jobs_growth.national_avg}%</font></font></p>
            </span>
          </div>
          <div class='columnright'>
            <span>
              <h2>${this.state.items.summary.earnings.regional}/hr</h2>
              <p><font size='2'><b>Median Hourly Earnings</b></font></p>
              <p><font size='2'>Nation: ${this.state.items.summary.earnings.national_avg}/hr</font></p>
            </span>
          </div>
        </div>

        <br /><br />
        <p class='nospacing'>
          <b>Regional Trends</b>
          <br />
        </p>
        <hr />
        <Chart />

        <p class='nospacing'>
          <b>Industries Employing Computer Programmers</b>
          <br />
        </p>
        <hr />
        <Table1 data={data} trClassName='tr-style' />
      </div>
    )
  }
}
export default App
