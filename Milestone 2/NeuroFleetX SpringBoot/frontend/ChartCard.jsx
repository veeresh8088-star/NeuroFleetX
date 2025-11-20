import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

export default function ChartCard({data,title}) {
  return (
    <div className='card'>
      <div style={{fontWeight:700,marginBottom:8}}>{title}</div>
      <div style={{width:'100%',height:220}}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <XAxis dataKey='name' stroke='#64748b'/>
            <YAxis stroke='#64748b'/>
            <Tooltip/>
            <Line dataKey='value' stroke='var(--accent)' strokeWidth={3} animationDuration={800}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
