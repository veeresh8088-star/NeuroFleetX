import React,{useEffect,useState} from 'react';
import StatsCard from '../components/StatsCard';
import MapPanel from '../components/MapPanel';
import VehicleTable from '../components/VehicleTable';
import ChartCard from '../components/ChartCard';
import API from '../services/api';
import { Truck, Clock, Activity, AlertCircle, TrendingUp, Users, MapPin, BarChart3 } from 'lucide-react';

export default function Dashboard(){
  const [vehicles,setVehicles] = useState([]);
  useEffect(()=>{ API.get('/api/vehicles').then(r=>setVehicles(r.data)).catch(()=>setVehicles([])); },[]);
  
  const activeVehicles = vehicles.filter(v=>v.status==='ACTIVE').length;
  const inService = vehicles.filter(v=>v.status==='IN_SERVICE').length;
  const offline = vehicles.filter(v=>v.status==='OFFLINE').length;

  const sample = [{name:'Mon',value:120},{name:'Tue',value:160},{name:'Wed',value:90},{name:'Thu',value:180},{name:'Fri',value:200},{name:'Sat',value:150},{name:'Sun',value:110}];
  
  return (
    <div style={{padding:'24px',background:'linear-gradient(135deg,#f8fafc 0%,#f0f9ff 100%)',minHeight:'100vh'}}>
      {/* Header */}
      <div style={{marginBottom:32,padding:20,background:'linear-gradient(135deg,rgba(134,194,255,0.08),rgba(255,228,181,0.08))',borderRadius:16,border:'1px solid rgba(6,182,212,0.2)',boxShadow:'0 8px 24px rgba(0,0,0,0.05)'}}>
        <h1 style={{fontSize:32,fontWeight:800,marginBottom:8,color:'#0f1724',display:'flex',alignItems:'center',gap:12}}>
          <BarChart3 size={32} style={{color:'#06b6d4'}}/>
          Fleet Dashboard
        </h1>
        <p style={{color:'#64748b',fontSize:14}}>Real-time fleet management & analytics</p>
      </div>

      {/* KPI Cards */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:16,marginBottom:32}}>
        <div style={{padding:20,borderRadius:16,background:'linear-gradient(135deg,#06b6d4 0%,#0891b2 100%)',color:'white',boxShadow:'0 8px 24px rgba(6,182,212,0.15)',border:'1px solid rgba(6,182,212,0.3)'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12}}>
            <span style={{fontSize:13,fontWeight:600,opacity:0.9}}>Active Vehicles</span>
            <Truck size={20} style={{opacity:0.8}}/>
          </div>
          <div style={{fontSize:32,fontWeight:800,marginBottom:8}}>{activeVehicles}</div>
          <div style={{fontSize:12,opacity:0.85}}>+{activeVehicles % 5} from yesterday</div>
        </div>

        <div style={{padding:20,borderRadius:16,background:'linear-gradient(135deg,#8b5cf6 0%,#7c3aed 100%)',color:'white',boxShadow:'0 8px 24px rgba(139,92,246,0.15)',border:'1px solid rgba(139,92,246,0.3)'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12}}>
            <span style={{fontSize:13,fontWeight:600,opacity:0.9}}>In Service</span>
            <Activity size={20} style={{opacity:0.8}}/>
          </div>
          <div style={{fontSize:32,fontWeight:800,marginBottom:8}}>{inService}</div>
          <div style={{fontSize:12,opacity:0.85}}>Currently operating</div>
        </div>

        <div style={{padding:20,borderRadius:16,background:'linear-gradient(135deg,#f59e0b 0%,#d97706 100%)',color:'white',boxShadow:'0 8px 24px rgba(245,158,11,0.15)',border:'1px solid rgba(245,158,11,0.3)'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12}}>
            <span style={{fontSize:13,fontWeight:600,opacity:0.9}}>Offline</span>
            <AlertCircle size={20} style={{opacity:0.8}}/>
          </div>
          <div style={{fontSize:32,fontWeight:800,marginBottom:8}}>{offline}</div>
          <div style={{fontSize:12,opacity:0.85}}>Require attention</div>
        </div>

        <div style={{padding:20,borderRadius:16,background:'linear-gradient(135deg,#10b981 0%,#059669 100%)',color:'white',boxShadow:'0 8px 24px rgba(16,185,129,0.15)',border:'1px solid rgba(16,185,129,0.3)'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12}}>
            <span style={{fontSize:13,fontWeight:600,opacity:0.9}}>Total Distance</span>
            <TrendingUp size={20} style={{opacity:0.8}}/>
          </div>
          <div style={{fontSize:32,fontWeight:800,marginBottom:8}}>2,340km</div>
          <div style={{fontSize:12,opacity:0.85}}>This week</div>
        </div>
      </div>

      {/* Main Grid */}
      <div style={{display:'grid',gridTemplateColumns:'2fr 1fr',gap:24,marginBottom:32}}>
        {/* Chart */}
        <div style={{background:'linear-gradient(135deg,rgba(134,194,255,0.05),rgba(255,228,181,0.05))',borderRadius:16,padding:24,border:'1px solid rgba(6,182,212,0.15)',boxShadow:'0 4px 12px rgba(0,0,0,0.04)'}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:20}}>
            <TrendingUp size={24} style={{color:'#06b6d4'}}/>
            <h3 style={{fontWeight:700,fontSize:16,color:'#0f1724'}}>Weekly Trip Activity</h3>
          </div>
          <ChartCard data={sample} title=''/>
        </div>

        {/* Stats Sidebar */}
        <div style={{display:'grid',gap:16}}>
          <div style={{background:'linear-gradient(135deg,rgba(6,182,212,0.1),rgba(134,194,255,0.08))',borderRadius:16,padding:20,border:'1px solid rgba(6,182,212,0.2)',boxShadow:'0 4px 12px rgba(0,0,0,0.04)'}}>
            <div style={{fontSize:13,fontWeight:600,color:'#06b6d4',marginBottom:12}}>🎯 Today's Metrics</div>
            <div style={{fontSize:32,fontWeight:800,color:'#0f1724',marginBottom:4}}>340</div>
            <div style={{fontSize:12,color:'#64748b'}}>Completed trips</div>
          </div>

          <div style={{background:'linear-gradient(135deg,rgba(139,92,246,0.1),rgba(219,112,147,0.08))',borderRadius:16,padding:20,border:'1px solid rgba(139,92,246,0.2)',boxShadow:'0 4px 12px rgba(0,0,0,0.04)'}}>
            <div style={{fontSize:13,fontWeight:600,color:'#8b5cf6',marginBottom:12}}>⚡ Performance</div>
            <div style={{fontSize:32,fontWeight:800,color:'#0f1724',marginBottom:4}}>98.5%</div>
            <div style={{fontSize:12,color:'#64748b'}}>Fleet efficiency</div>
          </div>

          <div style={{background:'linear-gradient(135deg,rgba(255,228,181,0.15),rgba(255,192,203,0.1))',borderRadius:16,padding:20,border:'1px solid rgba(255,192,203,0.3)',boxShadow:'0 4px 12px rgba(0,0,0,0.04)'}}>
            <div style={{fontSize:13,fontWeight:600,color:'#f59e0b',marginBottom:12}}>💰 Revenue</div>
            <div style={{fontSize:32,fontWeight:800,color:'#0f1724',marginBottom:4}}>₹85K</div>
            <div style={{fontSize:12,color:'#64748b'}}>This month</div>
          </div>
        </div>
      </div>

      {/* Map & Table */}
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24}}>
        <div style={{background:'linear-gradient(135deg,rgba(134,194,255,0.05),rgba(255,228,181,0.05))',borderRadius:16,padding:24,border:'1px solid rgba(6,182,212,0.15)',boxShadow:'0 4px 12px rgba(0,0,0,0.04)'}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:20}}>
            <MapPin size={24} style={{color:'#06b6d4'}}/>
            <h3 style={{fontWeight:700,fontSize:16,color:'#0f1724'}}>Live Location Map</h3>
          </div>
          <MapPanel markers={vehicles.map(v=>({lat:v.lat,lng:v.lng,label:v.vehicleNumber}))}/>
        </div>

        <div style={{background:'linear-gradient(135deg,rgba(134,194,255,0.05),rgba(255,228,181,0.05))',borderRadius:16,padding:24,border:'1px solid rgba(6,182,212,0.15)',boxShadow:'0 4px 12px rgba(0,0,0,0.04)'}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:20}}>
            <Truck size={24} style={{color:'#06b6d4'}}/>
            <h3 style={{fontWeight:700,fontSize:16,color:'#0f1724'}}>Fleet Status</h3>
          </div>
          <VehicleTable rows={vehicles}/>
        </div>
      </div>
    </div>
  );
}
