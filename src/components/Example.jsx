import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Figma',
    total: 4000,
    last: 2400,
    amt: 2400,
  },
  {
    name: 'Framer',
    total: 2400,
    last: 1800,
    amt: 2290,
  },
  {
    name: 'Webflow',
    total: 3000,
    last: 1398,
    amt: 2210,
  },
 
 
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/simple-bar-chart-72d7y5';

  render() {
    return (
      <div className='w-full md:w-96 h-[460px] flex flex-col gap-6 p-5 bg-white rounded'>
        <h2 className='font-bold text-base md:text-lg text-gray-600'>Earnings per skill</h2>
           <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"  tick={{ fontSize: 14, fill: '#555',  }} />
          <YAxis tick={{ fontSize: 14, fill: '#555',  }} />
          <Tooltip 
                  contentStyle={{ backgroundColor : 'white', borderRadius:'5px' , border: 'none' }}
                  labelStyle={{ display: 'none' }}
                />
          <Legend />
          <Bar dataKey="total" fill="#8884d8"  />
          <Bar dataKey="last" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>


      <p className='text-xs text-gray-500 italic'>
      *This chart illustrates the estimated earnings for each design skill, highlighting the most lucrative areas of expertise.
      </p>
      </div>  

   
    );
  }
}
