import React, { useState } from 'react';
import { Settings as SettingsIcon, Bell, Moon, Shield, Database, Zap, Eye, Volume2, Clock } from 'lucide-react';

export default function Settings(){
  const [activeTab, setActiveTab] = useState('appearance');
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('nf_theme') === 'dark');
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [refreshRate, setRefreshRate] = useState(5);

  const themes = [
    {id:'cyan', name:'Cyan', color:'#06b6d4', bg:'#e6fffb'},
    {id:'peach', name:'Peach', color:'#fb7185', bg:'#fff0f6'},
    {id:'lavender', name:'Lavender', color:'#a78bfa', bg:'#f3f0ff'}
  ];

  const setTheme = (themeId) => {
    document.documentElement.className = `theme-${themeId}`;
    localStorage.setItem('nf_theme', themeId);
  };

  const toggleNotifications = () => {
    setNotifications(!notifications);
    if(!notifications) console.log('✓ Notifications enabled');
    else console.log('✗ Notifications disabled');
  };

  const toggleAutoRefresh = () => {
    setAutoRefresh(!autoRefresh);
    if(!autoRefresh) console.log('✓ Auto-refresh enabled');
  };

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
    if(!soundEnabled) console.log('🔊 Sound enabled');
  };

  return (
    <div style={{maxWidth:'1200px',margin:'24px auto',display:'grid',gridTemplateColumns:'280px 1fr',gap:24}}>
      {/* Sidebar */}
      <div className='card' style={{height:'fit-content',animation:'fadeIn 0.5s ease'}}>
        <div style={{fontWeight:700,marginBottom:16,display:'flex',alignItems:'center',gap:8}}>
          <SettingsIcon size={20} style={{color:'#06b6d4'}}/>
          Settings
        </div>
        <nav style={{display:'flex',flexDirection:'column',gap:4}}>
          {[
            {id:'appearance', label:'Appearance', icon:'🎨'},
            {id:'notifications', label:'Notifications', icon:'🔔'},
            {id:'performance', label:'Performance', icon:'⚡'},
            {id:'security', label:'Security', icon:'🔒'},
            {id:'about', label:'About', icon:'ℹ️'}
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding:'12px 16px',
                borderRadius:10,
                border:'none',
                background: activeTab === tab.id ? 'rgba(6,182,212,0.1)' : 'transparent',
                color: activeTab === tab.id ? '#06b6d4' : '#0f1724',
                fontWeight: activeTab === tab.id ? 600 : 400,
                cursor:'pointer',
                transition:'all 0.3s ease',
                textAlign:'left',
                fontSize:14
              }}
              className='hover-effect'
            >
              <span style={{marginRight:8}}>{tab.icon}</span>{tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div style={{animation:'fadeIn 0.6s ease'}}>
        {/* Appearance Tab */}
        {activeTab === 'appearance' && (
          <div className='card' style={{animation:'slideUp 0.5s ease'}}>
            <h2 style={{fontWeight:700,marginBottom:20,display:'flex',alignItems:'center',gap:10}}>
              <span>🎨</span> Appearance & Theme
            </h2>
            
            {/* Theme Selection */}
            <div style={{marginBottom:32}}>
              <label style={{fontSize:14,fontWeight:600,color:'#334155',display:'block',marginBottom:12}}>Select Theme</label>
              <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12}}>
                {themes.map(t => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    style={{
                      padding:16,
                      borderRadius:12,
                      border:`2px solid ${localStorage.getItem('nf_theme') === t.id ? t.color : '#e2e8f0'}`,
                      background:t.bg,
                      cursor:'pointer',
                      transition:'all 0.3s ease',
                      transform:localStorage.getItem('nf_theme') === t.id ? 'scale(1.05)' : 'scale(1)',
                      boxShadow:localStorage.getItem('nf_theme') === t.id ? `0 0 20px ${t.color}40` : 'none'
                    }}
                  >
                    <div style={{width:'100%',height:40,background:t.color,borderRadius:8,marginBottom:10}}/>
                    <div style={{fontWeight:600,color:'#0f1724'}}>{t.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Font Size */}
            <div style={{marginBottom:32}}>
              <label style={{fontSize:14,fontWeight:600,color:'#334155',display:'block',marginBottom:12}}>Font Size</label>
              <div style={{display:'flex',gap:8}}>
                {['Small','Normal','Large'].map((sz,i) => (
                  <button
                    key={i}
                    style={{
                      flex:1,
                      padding:'12px 16px',
                      borderRadius:8,
                      border:'1px solid #e2e8f0',
                      background:'#f8fafc',
                      cursor:'pointer',
                      transition:'all 0.3s ease',
                      fontWeight:500
                    }}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Display Options */}
            <div>
              <label style={{fontSize:14,fontWeight:600,color:'#334155',display:'block',marginBottom:12}}>Display Options</label>
              <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:12}}>
                {[{icon:Eye,label:'High Contrast'},{icon:Moon,label:'Dark Edges'}].map((opt,i) => (
                  <button
                    key={i}
                    style={{
                      padding:12,
                      borderRadius:8,
                      border:'1px solid #e2e8f0',
                      background:'#f8fafc',
                      cursor:'pointer',
                      transition:'all 0.3s ease',
                      display:'flex',
                      alignItems:'center',
                      gap:8,
                      fontWeight:500
                    }}
                  >
                    <opt.icon size={18} style={{color:'#06b6d4'}}/> {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <div className='card' style={{animation:'slideUp 0.5s ease'}}>
            <h2 style={{fontWeight:700,marginBottom:20,display:'flex',alignItems:'center',gap:10}}>
              <Bell size={24}/> Notifications
            </h2>
            
            {[
              {label:'Push Notifications',desc:'Get alerts on new bookings and updates',icon:Bell},
              {label:'Email Notifications',desc:'Receive email updates',icon:Zap},
              {label:'Sound Effects',desc:'Play sounds for events',icon:Volume2},
              {label:'Desktop Alerts',desc:'Show desktop notifications',icon:SettingsIcon}
            ].map((item,i) => (
              <div
                key={i}
                style={{
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'space-between',
                  padding:16,
                  borderBottom: i < 3 ? '1px solid #e2e8f0' : 'none',
                  transition:'all 0.3s ease'
                }}
              >
                <div style={{display:'flex',alignItems:'center',gap:12}}>
                  <item.icon size={20} style={{color:'#06b6d4'}}/>
                  <div>
                    <div style={{fontWeight:600,color:'#0f1724'}}>{item.label}</div>
                    <div style={{fontSize:13,color:'#64748b',marginTop:4}}>{item.desc}</div>
                  </div>
                </div>
                <button
                  onClick={() => i === 2 ? toggleSound() : toggleNotifications()}
                  style={{
                    width:50,
                    height:28,
                    borderRadius:14,
                    border:'none',
                    background: (i === 2 ? soundEnabled : notifications) ? '#06b6d4' : '#cbd5e1',
                    cursor:'pointer',
                    transition:'all 0.3s ease',
                    position:'relative'
                  }}
                >
                  <div
                    style={{
                      width:24,
                      height:24,
                      borderRadius:'50%',
                      background:'white',
                      position:'absolute',
                      top:2,
                      left: (i === 2 ? soundEnabled : notifications) ? 24 : 2,
                      transition:'left 0.3s ease'
                    }}
                  />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Performance Tab */}
        {activeTab === 'performance' && (
          <div className='card' style={{animation:'slideUp 0.5s ease'}}>
            <h2 style={{fontWeight:700,marginBottom:20,display:'flex',alignItems:'center',gap:10}}>
              <Zap size={24}/> Performance
            </h2>
            
            <div style={{marginBottom:24}}>
              <label style={{fontSize:14,fontWeight:600,color:'#334155',display:'block',marginBottom:12}}>Auto-Refresh Data</label>
              <div style={{display:'flex',alignItems:'center',gap:12}}>
                <button
                  onClick={toggleAutoRefresh}
                  style={{
                    width:60,
                    height:32,
                    borderRadius:16,
                    border:'none',
                    background: autoRefresh ? '#06b6d4' : '#cbd5e1',
                    cursor:'pointer',
                    transition:'all 0.3s ease',
                    position:'relative'
                  }}
                >
                  <div
                    style={{
                      width:28,
                      height:28,
                      borderRadius:'50%',
                      background:'white',
                      position:'absolute',
                      top:2,
                      left: autoRefresh ? 30 : 2,
                      transition:'left 0.3s ease'
                    }}
                  />
                </button>
                <span style={{color:'#64748b'}}>{autoRefresh ? 'Enabled' : 'Disabled'}</span>
              </div>
            </div>

            <div style={{marginBottom:24}}>
              <label style={{fontSize:14,fontWeight:600,color:'#334155',display:'block',marginBottom:12}}>Refresh Rate: {refreshRate}s</label>
              <input
                type='range'
                min='1'
                max='30'
                value={refreshRate}
                onChange={(e) => setRefreshRate(e.target.value)}
                style={{width:'100%',height:6,borderRadius:3,appearance:'none',background:'linear-gradient(to right, #06b6d4, #a78bfa)',cursor:'pointer'}}
              />
              <div style={{display:'flex',justifyContent:'space-between',marginTop:8,fontSize:12,color:'#64748b'}}>
                <span>1s (Faster)</span>
                <span>{refreshRate}s (Current)</span>
                <span>30s (Slower)</span>
              </div>
            </div>

            <div style={{padding:16,background:'rgba(6,182,212,0.05)',borderRadius:8}}>
              <div style={{fontWeight:600,marginBottom:8,color:'#0f1724'}}>💡 Performance Tips</div>
              <ul style={{fontSize:13,color:'#64748b',margin:0,paddingLeft:20}}>
                <li>Lower refresh rate reduces server load</li>
                <li>Disable auto-refresh on slow connections</li>
                <li>Use standard theme for better performance</li>
              </ul>
            </div>
          </div>
        )}

        {/* Security Tab */}
        {activeTab === 'security' && (
          <div className='card' style={{animation:'slideUp 0.5s ease'}}>
            <h2 style={{fontWeight:700,marginBottom:20,display:'flex',alignItems:'center',gap:10}}>
              <Shield size={24}/> Security & Privacy
            </h2>
            
            {[
              {label:'Two-Factor Authentication',desc:'Add an extra layer of security',icon:Shield,action:'Enable'},
              {label:'Session Timeout',desc:'Auto-logout after 30 minutes',icon:Clock,action:'Configure'},
              {label:'Data Privacy',desc:'Manage your data and privacy settings',icon:Database,action:'Manage'},
              {label:'Login Activity',desc:'View recent login history',icon:Eye,action:'View'}
            ].map((item,i) => (
              <div
                key={i}
                style={{
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'space-between',
                  padding:16,
                  borderBottom: i < 3 ? '1px solid #e2e8f0' : 'none'
                }}
              >
                <div style={{display:'flex',alignItems:'center',gap:12}}>
                  <item.icon size={20} style={{color:'#06b6d4'}}/>
                  <div>
                    <div style={{fontWeight:600,color:'#0f1724'}}>{item.label}</div>
                    <div style={{fontSize:13,color:'#64748b',marginTop:4}}>{item.desc}</div>
                  </div>
                </div>
                <button
                  style={{
                    padding:'8px 16px',
                    borderRadius:8,
                    border:'1px solid #06b6d4',
                    background:'transparent',
                    color:'#06b6d4',
                    fontWeight:600,
                    cursor:'pointer',
                    transition:'all 0.3s ease'
                  }}
                >
                  {item.action}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* About Tab */}
        {activeTab === 'about' && (
          <div className='card' style={{animation:'slideUp 0.5s ease',textAlign:'center'}}>
            <div style={{fontSize:48,marginBottom:16}}>🚗</div>
            <h2 style={{fontWeight:700,marginBottom:8}}>NeuroFleetX</h2>
            <p style={{color:'#64748b',marginBottom:24}}>Intelligent Fleet Management System v1.0.0</p>
            
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginBottom:32}}>
              {[{label:'Total Vehicles',value:'250+'},{label:'Active Users',value:'1500+'},{label:'Trips Today',value:'340'}].map((stat,i) => (
                <div key={i} style={{padding:20,background:'rgba(6,182,212,0.05)',borderRadius:12}}>
                  <div style={{fontSize:28,fontWeight:700,color:'#06b6d4',marginBottom:4}}>{stat.value}</div>
                  <div style={{fontSize:13,color:'#64748b'}}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div style={{padding:16,background:'#f8fafc',borderRadius:8,textAlign:'left',marginBottom:16}}>
              <div style={{fontWeight:600,marginBottom:12}}>Features</div>
              <ul style={{fontSize:13,color:'#64748b',margin:0,paddingLeft:20}}>
                <li>Real-time vehicle tracking</li>
                <li>Advanced booking management</li>
                <li>Automated maintenance scheduling</li>
                <li>Analytics & reporting</li>
              </ul>
            </div>

            <button
              style={{
                width:'100%',
                padding:'12px 24px',
                borderRadius:8,
                border:'none',
                background:'linear-gradient(135deg,#06b6d4,#0891b2)',
                color:'white',
                fontWeight:600,
                cursor:'pointer',
                transition:'all 0.3s ease'
              }}
            >
              Check for Updates
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hover-effect:hover {
          transform: translateX(4px) !important;
          background: rgba(6,182,212,0.08) !important;
        }
        input[type='range']::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: 3px solid #06b6d4;
        }
        input[type='range']::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: 3px solid #06b6d4;
        }
      `}</style>
    </div>
  );
}
