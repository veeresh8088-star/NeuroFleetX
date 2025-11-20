import React,{useState,useEffect} from 'react';
import API from '../services/api';
import { Truck, Plus, MapPin, Zap, AlertCircle, CheckCircle } from 'lucide-react';

export default function Vehicles(){
  const [vehicles,setVehicles]=useState([]);
  const [form,setForm]=useState({vehicleNumber:'',model:'',status:'ACTIVE',lat:12.9716,lng:77.5946});
  const [showForm, setShowForm] = useState(false);
  useEffect(()=>{ load() },[]);
  function load(){ API.get('/api/vehicles').then(r=>setVehicles(r.data)).catch(()=>setVehicles([])); }
  function add(e){ e.preventDefault(); API.post('/api/vehicles',form).then(()=>{load(); setForm({vehicleNumber:'',model:'',status:'ACTIVE',lat:12.9716,lng:77.5946}); setShowForm(false);}).catch(err=>console.error(err)); }
  
  const getStatusColor = (status) => {
    switch(status){
      case 'ACTIVE': return {bg:'rgba(16,185,129,0.1)',border:'2px solid #10b981',icon:'✓',text:'#10b981'};
      case 'IN_SERVICE': return {bg:'rgba(59,130,246,0.1)',border:'2px solid #3b82f6',icon:'⚙',text:'#3b82f6'};
      case 'OFFLINE': return {bg:'rgba(239,68,68,0.1)',border:'2px solid #ef4444',icon:'✗',text:'#ef4444'};
      default: return {bg:'rgba(107,114,128,0.1)',border:'2px solid #6b7280',icon:'?',text:'#6b7280'};
    }
  };

  return (
    <div style={{padding:'24px',background:'linear-gradient(135deg,#f8fafc 0%,#f0f9ff 100%)',minHeight:'100vh'}}>
      {/* Header */}
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:32,padding:20,background:'linear-gradient(135deg,rgba(134,194,255,0.08),rgba(255,228,181,0.08))',borderRadius:16,border:'1px solid rgba(6,182,212,0.2)',boxShadow:'0 8px 24px rgba(0,0,0,0.05)'}}>
        <div>
          <h1 style={{fontSize:32,fontWeight:800,marginBottom:8,color:'#0f1724',display:'flex',alignItems:'center',gap:12}}>
            <Truck size={32} style={{color:'#06b6d4'}}/>
            Vehicle Fleet Management
          </h1>
          <p style={{color:'#64748b',fontSize:14}}>Manage and monitor all vehicles in real-time</p>
        </div>
        <button
          onClick={()=>setShowForm(!showForm)}
          style={{
            padding:'12px 24px',
            borderRadius:12,
            border:'none',
            background:'linear-gradient(135deg,#06b6d4,#0891b2)',
            color:'white',
            fontWeight:600,
            cursor:'pointer',
            display:'flex',alignItems:'center',gap:8,
            transition:'all 0.3s ease',
            boxShadow:'0 4px 12px rgba(6,182,212,0.3)'
          }}
          onMouseEnter={(e)=>e.target.style.transform='translateY(-2px)'}
          onMouseLeave={(e)=>e.target.style.transform='translateY(0)'}
        >
          <Plus size={20}/> Add Vehicle
        </button>
      </div>

      {/* Add Form */}
      {showForm && (
        <div style={{background:'linear-gradient(135deg,rgba(134,194,255,0.05),rgba(255,228,181,0.05))',borderRadius:16,padding:24,border:'1px solid rgba(6,182,212,0.2)',marginBottom:32,animation:'slideDown 0.3s ease',boxShadow:'0 8px 24px rgba(0,0,0,0.04)'}}>
          <h3 style={{fontWeight:700,marginBottom:16}}>Add New Vehicle</h3>
          <form onSubmit={add} style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:12}}>
            <input required placeholder='Vehicle Number' value={form.vehicleNumber} onChange={e=>setForm({...form,vehicleNumber:e.target.value})} style={{padding:'12px',borderRadius:8,border:'2px solid #e2e8f0',outline:'none',transition:'all 0.3s'}} onFocus={(e)=>e.target.style.borderColor='#06b6d4'} onBlur={(e)=>e.target.style.borderColor='#e2e8f0'}/>
            <input placeholder='Model' value={form.model} onChange={e=>setForm({...form,model:e.target.value})} style={{padding:'12px',borderRadius:8,border:'2px solid #e2e8f0',outline:'none',transition:'all 0.3s'}} onFocus={(e)=>e.target.style.borderColor='#06b6d4'} onBlur={(e)=>e.target.style.borderColor='#e2e8f0'}/>
            <select value={form.status} onChange={e=>setForm({...form,status:e.target.value})} style={{padding:'12px',borderRadius:8,border:'2px solid #e2e8f0',outline:'none',transition:'all 0.3s'}} onFocus={(e)=>e.target.style.borderColor='#06b6d4'} onBlur={(e)=>e.target.style.borderColor='#e2e8f0'}>
              <option>ACTIVE</option>
              <option>IN_SERVICE</option>
              <option>OFFLINE</option>
            </select>
            <input placeholder='Latitude' type='number' step='0.0001' value={form.lat} onChange={e=>setForm({...form,lat:parseFloat(e.target.value)})} style={{padding:'12px',borderRadius:8,border:'2px solid #e2e8f0',outline:'none',transition:'all 0.3s'}} onFocus={(e)=>e.target.style.borderColor='#06b6d4'} onBlur={(e)=>e.target.style.borderColor='#e2e8f0'}/>
            <input placeholder='Longitude' type='number' step='0.0001' value={form.lng} onChange={e=>setForm({...form,lng:parseFloat(e.target.value)})} style={{padding:'12px',borderRadius:8,border:'2px solid #e2e8f0',outline:'none',transition:'all 0.3s'}} onFocus={(e)=>e.target.style.borderColor='#06b6d4'} onBlur={(e)=>e.target.style.borderColor='#e2e8f0'}/>
            <button type='submit' 
              style={{padding:'12px',borderRadius:8,border:'none',background:'linear-gradient(135deg,#10b981,#059669)',color:'white',fontWeight:600,cursor:'pointer',transition:'all 0.3s',gridColumn:'1/-1'}} 
              onMouseEnter={(e)=>e.target.style.transform='translateY(-2px)'} 
              onMouseLeave={(e)=>e.target.style.transform='translateY(0)'}
            >
              Add Vehicle
            </button>
          </form>
        </div>
      )}

      {/* Stats */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:16,marginBottom:32}}>
        <div style={{padding:20,borderRadius:16,background:'linear-gradient(135deg,#10b981 0%,#059669 100%)',color:'white',border:'1px solid rgba(16,185,129,0.3)'}}>
          <div style={{fontSize:13,fontWeight:600,opacity:0.9,marginBottom:8}}>✓ Active</div>
          <div style={{fontSize:28,fontWeight:800}}>{vehicles.filter(v=>v.status==='ACTIVE').length}</div>
        </div>
        <div style={{padding:20,borderRadius:16,background:'linear-gradient(135deg,#3b82f6 0%,#2563eb 100%)',color:'white',border:'1px solid rgba(59,130,246,0.3)'}}>
          <div style={{fontSize:13,fontWeight:600,opacity:0.9,marginBottom:8}}>⚙ In Service</div>
          <div style={{fontSize:28,fontWeight:800}}>{vehicles.filter(v=>v.status==='IN_SERVICE').length}</div>
        </div>
        <div style={{padding:20,borderRadius:16,background:'linear-gradient(135deg,#ef4444 0%,#dc2626 100%)',color:'white',border:'1px solid rgba(239,68,68,0.3)'}}>
          <div style={{fontSize:13,fontWeight:600,opacity:0.9,marginBottom:8}}>✗ Offline</div>
          <div style={{fontSize:28,fontWeight:800}}>{vehicles.filter(v=>v.status==='OFFLINE').length}</div>
        </div>
      </div>

      {/* Vehicle Grid */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))',gap:20}}>
        {vehicles.map(v=>{
          const statusInfo = getStatusColor(v.status);
          const gradBg = `linear-gradient(135deg,${statusInfo.text}22,${statusInfo.text}08)`;
          const cardStyle = {background:statusInfo.bg,borderRadius:16,border:'1px solid rgba(6,182,212,0.2)',overflow:'hidden',boxShadow:'0 4px 12px rgba(0,0,0,0.06)',transition:'all 0.3s ease',transform:'scale(1)',cursor:'pointer'};
          return (
            <div key={v.id} style={cardStyle} onMouseEnter={(e)=>e.currentTarget.style.transform='scale(1.02)'} onMouseLeave={(e)=>e.currentTarget.style.transform='scale(1)'}>
              <div style={{height:120,background:gradBg,display:'flex',alignItems:'center',justifyContent:'space-between',padding:20}}>
                <div>
                  <div style={{fontSize:24,fontWeight:800,color:'#0f1724'}}>{v.vehicleNumber}</div>
                  <div style={{fontSize:13,color:'#64748b'}}>{v.model}</div>
                </div>
                <Truck size={40} style={{color:statusInfo.text,opacity:0.6}}/>
              </div>
              <div style={{padding:16}}>
                <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:12}}>
                  <div style={{width:12,height:12,borderRadius:'50%',background:statusInfo.text}}/>
                  <span style={{fontWeight:600,color:'#0f1724'}}>{v.status}</span>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:12,color:'#64748b',fontSize:13}}>
                  <MapPin size={16}/>
                  <span>{v.lat?.toFixed(3)}, {v.lng?.toFixed(3)}</span>
                </div>
                <div style={{display:'flex',gap:8}}>
                  <button style={{flex:1,padding:'10px',borderRadius:8,border:`2px solid ${statusInfo.text}`,background:'transparent',color:statusInfo.text,fontWeight:600,cursor:'pointer',transition:'all 0.3s'}} onMouseEnter={(e)=>e.target.style.background=statusInfo.bg} onMouseLeave={(e)=>e.target.style.background='transparent'}>View</button>
                  <button style={{flex:1,padding:'10px',borderRadius:8,border:'2px solid #e2e8f0',background:'transparent',color:'#0f1724',fontWeight:600,cursor:'pointer',transition:'all 0.3s'}} onMouseEnter={(e)=>e.target.style.borderColor='#ef4444'} onMouseLeave={(e)=>e.target.style.borderColor='#e2e8f0'}>Delete</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
