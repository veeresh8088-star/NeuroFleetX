import React from 'react';
export default function VehicleTable({rows=[]}) {
  const getStatusBg=(status)=>{
    const map={ACTIVE:'rgba(16,185,129,0.15)',IN_SERVICE:'rgba(59,130,246,0.15)',OFFLINE:'rgba(239,68,68,0.15)'};
    return map[status]||'rgba(107,114,128,0.08)';
  };
  const getStatusColor=(status)=>{
    const map={ACTIVE:'#10b981',IN_SERVICE:'#3b82f6',OFFLINE:'#ef4444'};
    return map[status]||'#6b7280';
  };
  return (
    <div style={{border:'1px solid rgba(6,182,212,0.2)',borderRadius:12,overflow:'hidden',background:'rgba(134,194,255,0.02)',boxShadow:'0 4px 12px rgba(0,0,0,0.05)'}}>
      <table style={{width:'100%',borderCollapse:'collapse'}}>
        <thead style={{background:'linear-gradient(135deg,#06b6d4 0%,#0891b2 100%)',color:'white'}}>
          <tr>
            <th style={{padding:16,textAlign:'left',fontWeight:700,fontSize:13,borderRight:'1px solid rgba(6,182,212,0.15)'}}>Vehicle</th>
            <th style={{padding:16,textAlign:'left',fontWeight:700,fontSize:13,borderRight:'1px solid rgba(6,182,212,0.15)'}}>Model</th>
            <th style={{padding:16,textAlign:'left',fontWeight:700,fontSize:13,borderRight:'1px solid rgba(6,182,212,0.15)'}}>Status</th>
            <th style={{padding:16,textAlign:'left',fontWeight:700,fontSize:13}}>Location</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r,idx)=>(
            <tr key={r.id} style={{background:idx%2===0?'rgba(134,194,255,0.08)':'rgba(255,228,181,0.05)',borderBottom:'1px solid rgba(6,182,212,0.1)',transition:'all 0.3s'}} onMouseEnter={(e)=>e.currentTarget.style.background='rgba(138,43,226,0.06)'} onMouseLeave={(e)=>e.currentTarget.style.background=idx%2===0?'rgba(134,194,255,0.08)':'rgba(255,228,181,0.05)'}>
              <td style={{padding:16,borderRight:'1px solid rgba(6,182,212,0.1)',fontWeight:600,color:'#0f1724'}}>{r.vehicleNumber}</td>
              <td style={{padding:16,borderRight:'1px solid rgba(6,182,212,0.1)',color:'#64748b'}}>{r.model}</td>
              <td style={{padding:16,borderRight:'1px solid rgba(6,182,212,0.1)'}}>
                <span style={{display:'inline-block',padding:'6px 12px',borderRadius:8,background:getStatusBg(r.status),color:getStatusColor(r.status),fontWeight:700,fontSize:12,border:`1px solid ${getStatusColor(r.status)}`}}>{r.status}</span>
              </td>
              <td style={{padding:16,color:'#64748b',fontSize:13}}>{r.lat?.toFixed?.(4) || '—'}, {r.lng?.toFixed?.(4) || '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
