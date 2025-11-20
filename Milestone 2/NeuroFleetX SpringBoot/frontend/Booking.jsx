import React,{useEffect,useState} from 'react';
import API from '../services/api';
import BookingModal from '../components/BookingModal';
import { Calendar, MapPin, Phone, TrendingUp } from 'lucide-react';

export default function Booking(){
  const [bookings,setBookings]=useState([]);
  useEffect(()=>{ load() },[]);
  function load(){ API.get('/api/bookings').then(r=>setBookings(r.data)).catch(()=>setBookings([])); }
  
  const getStatusColor = (status) => {
    const colors = {
      'BOOKED': {bg:'rgba(59,130,246,0.1)',border:'2px solid #3b82f6',text:'#3b82f6',icon:'📅'},
      'COMPLETED': {bg:'rgba(16,185,129,0.1)',border:'2px solid #10b981',text:'#10b981',icon:'✓'},
      'SCHEDULED': {bg:'rgba(245,158,11,0.1)',border:'2px solid #f59e0b',text:'#f59e0b',icon:'⏱'}
    };
    return colors[status] || {bg:'rgba(107,114,128,0.1)',border:'2px solid #6b7280',text:'#6b7280',icon:'?'};
  };

  return (
    <div style={{padding:'24px',background:'linear-gradient(135deg,#f8fafc 0%,#f0f9ff 100%)',minHeight:'100vh'}}>
      <div style={{marginBottom:32,padding:20,background:'linear-gradient(135deg,rgba(134,194,255,0.08),rgba(255,228,181,0.08))',borderRadius:16,border:'1px solid rgba(6,182,212,0.2)',boxShadow:'0 8px 24px rgba(0,0,0,0.05)'}}>
        <h1 style={{fontSize:32,fontWeight:800,marginBottom:8,color:'#0f1724',display:'flex',alignItems:'center',gap:12}}>
          <Calendar size={32} style={{color:'#06b6d4'}}/>
          Booking Management
        </h1>
        <p style={{color:'#64748b',fontSize:14}}>Create and manage your vehicle bookings</p>
      </div>

      <div style={{marginBottom:32}}><BookingModal onCreate={load}/></div>

      {/* Stats */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:16,marginBottom:32}}>
        <div style={{padding:20,borderRadius:16,background:'linear-gradient(135deg,#3b82f6 0%,#2563eb 100%)',color:'white',border:'1px solid rgba(59,130,246,0.3)',boxShadow:'0 4px 12px rgba(0,0,0,0.06)'}}>
          <div style={{fontSize:13,fontWeight:600,opacity:0.9,marginBottom:8}}>📅 Booked</div>
          <div style={{fontSize:28,fontWeight:800}}>{bookings.filter(b=>b.status==='BOOKED').length}</div>
        </div>
        <div style={{padding:20,borderRadius:16,background:'linear-gradient(135deg,#10b981 0%,#059669 100%)',color:'white',border:'1px solid rgba(16,185,129,0.3)',boxShadow:'0 4px 12px rgba(0,0,0,0.06)'}}>
          <div style={{fontSize:13,fontWeight:600,opacity:0.9,marginBottom:8}}>✓ Completed</div>
          <div style={{fontSize:28,fontWeight:800}}>{bookings.filter(b=>b.status==='COMPLETED').length}</div>
        </div>
        <div style={{padding:20,borderRadius:16,background:'linear-gradient(135deg,#f59e0b 0%,#d97706 100%)',color:'white',border:'1px solid rgba(245,158,11,0.3)',boxShadow:'0 4px 12px rgba(0,0,0,0.06)'}}>
          <div style={{fontSize:13,fontWeight:600,opacity:0.9,marginBottom:8}}>⏱ Total Revenue</div>
          <div style={{fontSize:28,fontWeight:800}}>₹{bookings.reduce((sum,b)=>sum+(b.fare||0),0).toFixed(0)}</div>
        </div>
      </div>

      {/* Bookings Grid */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(350px,1fr))',gap:20}}>
        {bookings.map(b=>{
          const statusInfo = getStatusColor(b.status);
          const cardStyle = Object.assign({},statusInfo,{background:statusInfo.bg,borderRadius:16,border:'1px solid rgba(59,130,246,0.2)',overflow:'hidden',boxShadow:'0 4px 12px rgba(0,0,0,0.06)',transition:'all 0.3s'});
          return (
            <div key={b.id} style={cardStyle} onMouseEnter={(e)=>e.currentTarget.style.transform='translateY(-4px)'} onMouseLeave={(e)=>e.currentTarget.style.transform='translateY(0)'}>
              <div style={{height:100,background:statusInfo.bg,padding:16,display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
                <div>
                  <div style={{fontSize:18,fontWeight:800,color:'#0f1724'}}>{b.customerName}</div>
                  <div style={{fontSize:12,color:'#64748b',marginTop:4}}>Booking ID: {b.id}</div>
                </div>
                <span style={{fontSize:28}}>{statusInfo.icon}</span>
              </div>
              <div style={{padding:16}}>
                <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:12,color:'#64748b',fontSize:13}}>
                  <MapPin size={16} style={{color:statusInfo.text}}/>
                  <span>{b.pickupLocation} → {b.dropLocation}</span>
                </div>
                {b.customerPhone && <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:12,color:'#64748b',fontSize:13}}>
                  <Phone size={16} style={{color:statusInfo.text}}/>
                  <span>{b.customerPhone}</span>
                </div>}
                {b.fare && <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:12,color:'#0f1724',fontSize:13,fontWeight:600}}>
                  <TrendingUp size={16} style={{color:statusInfo.text}}/>
                  <span>₹{b.fare}</span>
                </div>}
                <div style={{display:'flex',gap:8,marginTop:16}}>
                  <div style={{flex:1,padding:'8px 12px',borderRadius:8,background:statusInfo.bg,color:statusInfo.text,fontWeight:600,fontSize:12,textAlign:'center'}}>{b.status}</div>
                  <button style={{flex:1,padding:'8px 12px',borderRadius:8,border:`2px solid ${statusInfo.text}`,background:'transparent',color:statusInfo.text,fontWeight:600,fontSize:12,cursor:'pointer',transition:'all 0.3s'}} onMouseEnter={(e)=>e.target.style.background=statusInfo.bg} onMouseLeave={(e)=>e.target.style.background='transparent'}>Details</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
