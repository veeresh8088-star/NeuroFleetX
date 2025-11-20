import React from 'react';
import MapPanel from '../components/MapPanel';

export default function Home(){
  return (
    <div>
      <div style={{display:'flex',gap:18,alignItems:'center'}}>
        <div style={{flex:1}}>
          <h1 style={{fontSize:34,fontWeight:800}}>NeuroFleetX — Enterprise (White)</h1>
          <p style={{color:'#64748b'}}>AI-driven urban mobility optimization — enterprise demo with full stack and white theme.</p>
        </div>
        <div style={{width:480}}>
          <div className='card'>
            <div style={{fontWeight:700}}>Live Map Preview</div>
            <div style={{height:180}}><MapPanel markers={[{lat:12.9716,lng:77.5946,label:'NF-1001'}]}/></div>
          </div>
        </div>
      </div>
    </div>
  );
}
