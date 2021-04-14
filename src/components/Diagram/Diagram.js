import React from 'react';
import { Chart } from "react-google-charts";

import s from './Diagram.module.css';

const Diagram = ({data}) => {
  
 return (
        <div className={s.position}>
        <Chart 
  width={'400px'}
  height={'400px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  /* data={[['Answer', 'Percentage'], ['Correct', 75], ['Incorrect', (100- 75)]]} */
  data={data}
  
  options={{
    legend: '',
    pieSliceText: '',
    pieStartAngle: 135,
    tooltip: { trigger: 'none' },
    slices: {
      0: { color: '#FF6B01' },
      1: { color: '#D7D7D7' },
    },
  }}
  rootProps={{'data-testid': '2' }}
/></div>)
}



export default Diagram;

/* 
<Component
  initialState={{ dataLoadingStatus: 'loading', chartData: [] }}
  didMount={async function(component) {
    const response = await fetch(
      'https://api.exchangeratesapi.io/latest?symbols=USD,GBP,CAD',
    )
    const json = await response.json()
    const rateCurrencyNames = Object.keys(json.rates)
    const rateCurrencyValues = Object.values(json.rates)
    const chartData = [['Currency Name', 'Currency Rate']]
    for (let i = 0; i < rateCurrencyNames.length; i += 1) {
      chartData.push([rateCurrencyNames[i], rateCurrencyValues[i]])
    }
    component.setState({
      dataLoadingStatus: 'ready',
      chartData: chartData,
    })
  }}
>
  {component => {
    return component.state.dataLoadingStatus === 'ready' ? (
      <Chart
        chartType="BarChart"
        data={component.state.chartData}
        options={{
          chartArea: {
            width: '50%',
          },
          title: 'EUR Price',
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    ) : (
      <div>Fetching data from API</div>
    )
  }}
</Component> */