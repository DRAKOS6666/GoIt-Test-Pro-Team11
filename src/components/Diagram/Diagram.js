import React from 'react';
import { Chart } from 'react-google-charts';

import s from './Diagram.module.css';

const Diagram = ({ data }) => {
  return (
    <div className={s.position}>
      <Chart
        className={s.chart}
        width={'100%'}
        height={'100%'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          legend: '',
          pieSliceText: 'none',
          pieStartAngle: 105,
          tooltip: { trigger: 'none' },
          slices: {
            0: { color: '#FF6B01' },
            1: { color: '#D7D7D7' },
          },
        }}
        rootProps={{ 'data-testid': '2' }}
      />
    </div>
  );
};

export default Diagram;
