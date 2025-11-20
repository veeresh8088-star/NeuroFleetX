import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar(){
  const items = [
    {to:'/dashboard', label:'Dashboard'},
    {to:'/vehicles', label:'Vehicles'},
    {to:'/booking', label:'Bookings'},
    {to:'/maintenance', label:'Maintenance'},
    {to:'/settings', label:'Settings'}
  ];
  return (
    <aside className='sidebar fade-in'>
      <div style={{fontWeight:700,fontSize:16,marginBottom:12}}>Menu</div>
      <nav style={{display:'flex',flexDirection:'column',gap:8}}>
        {items.map(i=>(
          <NavLink key={i.to} to={i.to} style={({isActive})=>({
            padding:'10px 12px', borderRadius:10, display:'flex', alignItems:'center', gap:10,
            background: isActive ? 'rgba(0,184,169,0.06)' : 'transparent',
            textDecoration:'none', color:'#0f1724'
          })}>{i.label}</NavLink>
        ))}
      </nav>
      <div style={{marginTop:18}}>
        <div style={{fontSize:12,color:'#64748b'}}>Theme</div>
        <div style={{display:'flex',gap:8,marginTop:8}}>
          <button className='btn' onClick={()=>{document.documentElement.className='theme-cyan'; localStorage.setItem('nf_theme','cyan')}} style={{background:'#e6fffb',borderRadius:10,padding:8}}/>
          <button className='btn' onClick={()=>{document.documentElement.className='theme-peach'; localStorage.setItem('nf_theme','peach')}} style={{background:'#fff0f6',borderRadius:10,padding:8}}/>
          <button className='btn' onClick={()=>{document.documentElement.className='theme-lavender'; localStorage.setItem('nf_theme','lavender')}} style={{background:'#f3f0ff',borderRadius:10,padding:8}}/>
        </div>
      </div>
    </aside>
  );
}
