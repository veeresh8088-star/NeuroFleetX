import React from 'react';
export default function StatsCard({icon,label,value,delta}) {
  return (
    <div className='card' style={{display:'flex',alignItems:'center',gap:12}}>
      <div style={{fontSize:28,color:'var(--accent)'}}>{icon}</div>
      <div style={{flex:1}}>
        <div style={{fontSize:12,color:'#64748b'}}>{label}</div>
        <div style={{fontSize:20,fontWeight:700}}>{value}</div>
      </div>
      <div style={{color: delta?.startsWith('+') ? 'green':'#f43f5e'}}>{delta||''}</div>
    </div>
  );
}
