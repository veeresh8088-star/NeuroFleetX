import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, User, LogOut } from 'lucide-react';
export default function Navbar(){
  const nav = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header style={{
      background:'linear-gradient(135deg,#0f1724 0%,#1a2332 100%)',
      borderBottom:'2px solid rgba(6,182,212,0.2)',
      padding:'16px 24px',
      display:'flex',
      alignItems:'center',
      justifyContent:'space-between',
      boxShadow:'0 4px 20px rgba(0,0,0,0.1)',
      position:'sticky',
      top:0,
      zIndex:50
    }}>
      <div style={{display:'flex',alignItems:'center',gap:16,cursor:'pointer'}} onClick={()=>nav('/dashboard')}>
        <div style={{
          width:56,height:56,borderRadius:16,
          display:'flex',alignItems:'center',justifyContent:'center',
          fontWeight:800,fontSize:24,
          background:'linear-gradient(135deg,#06b6d4 0%,#0891b2 50%,#06b6d4 100%)',
          backgroundSize:'200% 200%',
          animation:'gradientShift 3s ease infinite',
          color:'white',
          boxShadow:'0 8px 24px rgba(6,182,212,0.3)'
        }}>🚗</div>
        <div>
          <div style={{fontWeight:800,fontSize:20,background:'linear-gradient(135deg,#06b6d4,#00d4b6)',backgroundClip:'text',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>NeuroFleetX</div>
          <div style={{fontSize:11,color:'#64748b',letterSpacing:'0.5px'}}>INTELLIGENT FLEET MANAGEMENT</div>
        </div>
      </div>

      <div style={{display:'flex',alignItems:'center',gap:16,flex:1,justifyContent:'center'}}>
        <input 
          placeholder='🔍 Search vehicles, bookings...' 
          style={{
            padding:'10px 16px',
            borderRadius:12,
            border:'2px solid rgba(6,182,212,0.2)',
            background:'rgba(15,23,36,0.8)',
            color:'#0f1724',
            fontSize:13,
            width:280,
            transition:'all 0.3s ease',
            outline:'none'
          }}
          onFocus={(e)=>e.target.style.borderColor='#06b6d4'}
          onBlur={(e)=>e.target.style.borderColor='rgba(6,182,212,0.2)'}
        />
      </div>

      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <button style={{
          width:44,height:44,borderRadius:12,
          border:'2px solid rgba(6,182,212,0.2)',
          background:'transparent',
          color:'#06b6d4',
          cursor:'pointer',
          display:'flex',alignItems:'center',justifyContent:'center',
          transition:'all 0.3s ease',
          position:'relative'
        }}
        onMouseEnter={(e)=>{e.target.style.borderColor='#06b6d4'; e.target.style.background='rgba(6,182,212,0.1)'}}
        onMouseLeave={(e)=>{e.target.style.borderColor='rgba(6,182,212,0.2)'; e.target.style.background='transparent'}}
        >
          <Bell size={20}/>
          <span style={{position:'absolute',top:4,right:4,width:8,height:8,borderRadius:'50%',background:'#fb7185'}}/>
        </button>

        <div style={{position:'relative'}}>
          <button 
            onClick={()=>setShowDropdown(!showDropdown)}
            style={{
              width:44,height:44,borderRadius:12,
              border:'2px solid rgba(6,182,212,0.3)',
              background:'linear-gradient(135deg,rgba(6,182,212,0.1),rgba(10,184,169,0.1))',
              color:'#06b6d4',
              cursor:'pointer',
              display:'flex',alignItems:'center',justifyContent:'center',
              transition:'all 0.3s ease',
              fontWeight:700
            }}
            onMouseEnter={(e)=>{e.target.style.borderColor='#06b6d4'; e.target.style.background='rgba(6,182,212,0.15)'}}
            onMouseLeave={(e)=>!showDropdown && (e.target.style.borderColor='rgba(6,182,212,0.3)', e.target.style.background='linear-gradient(135deg,rgba(6,182,212,0.1),rgba(10,184,169,0.1))')}
          >
            <User size={20}/>
          </button>
          {showDropdown && (
            <div style={{
              position:'absolute',right:0,top:52,
              background:'#0f1724',
              border:'1px solid rgba(6,182,212,0.3)',
              borderRadius:12,
              minWidth:200,
              boxShadow:'0 8px 24px rgba(0,0,0,0.3)',
              zIndex:100,
              animation:'slideDown 0.3s ease',
              overflow:'hidden'
            }}>
              <button style={{width:'100%',padding:'12px 16px',textAlign:'left',border:'1px solid rgba(6,182,212,0.2)',background:'rgba(6,182,212,0.08)',color:'#06b6d4',cursor:'pointer',fontSize:13,fontWeight:600,transition:'all 0.3s ease',borderRadius:8,margin:8}}
                onMouseEnter={(e)=>e.target.style.background='rgba(6,182,212,0.15)'}
                onMouseLeave={(e)=>e.target.style.background='rgba(6,182,212,0.08)'}
              >👤 My Profile</button>
              <button style={{width:'calc(100% - 16px)',padding:'12px 16px',textAlign:'left',border:'1px solid rgba(139,92,246,0.2)',background:'rgba(139,92,246,0.08)',color:'#8b5cf6',cursor:'pointer',fontSize:13,fontWeight:600,transition:'all 0.3s ease',borderRadius:8,margin:8}}
                onMouseEnter={(e)=>e.target.style.background='rgba(139,92,246,0.15)'}
                onMouseLeave={(e)=>e.target.style.background='rgba(139,92,246,0.08)'}
              >⚙️ Settings</button>
              <button style={{width:'calc(100% - 16px)',padding:'12px 16px',textAlign:'left',border:'1px solid rgba(239,68,68,0.2)',background:'rgba(251,113,133,0.08)',color:'#fb7185',cursor:'pointer',fontSize:13,fontWeight:600,transition:'all 0.3s ease',borderRadius:8,margin:8}}
                onMouseEnter={(e)=>e.target.style.background='rgba(251,113,133,0.15)'}
                onMouseLeave={(e)=>e.target.style.background='rgba(251,113,133,0.08)'}
                onClick={()=>{localStorage.removeItem('nf_token'); nav('/login')}}
              >
                <LogOut size={16} style={{display:'inline',marginRight:8}}/>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}
