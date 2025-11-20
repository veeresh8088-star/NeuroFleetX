import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Shell({children}){
  return (
    <div className='app-shell'>
      <Navbar/>
      <Sidebar/>
      <main className='main'>{children}</main>
    </div>
  );
}
