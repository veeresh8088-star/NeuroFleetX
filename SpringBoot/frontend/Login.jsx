import React, {useState} from 'react';
import API from '../../services/api';
import { saveToken } from '../../services/auth';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const nav = useNavigate();
  const [form,setForm] = useState({email:'', password:''});
  const [error,setError] = useState('');
  async function submit(e){
    e.preventDefault();
    try{
      const r = await API.post('/api/auth/login', form);
      saveToken(r.data.token);
      nav('/dashboard');
    }catch(err){
      setError(err.response?.data?.error || err.response?.data?.message || 'Login failed');
    }
  }
  return (
    <div style={{maxWidth:440,margin:'40px auto'}} className='card'>
      <h3 style={{fontWeight:700}}>Sign in</h3>
      {error && <div style={{color:'#f43f5e'}}>{error}</div>}
      <form onSubmit={submit} style={{marginTop:12,display:'grid',gap:8}}>
        <input required placeholder='Email' value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className='p-3 bg-transparent border rounded' />
        <input required placeholder='Password' type='password' value={form.password} onChange={e=>setForm({...form,password:e.target.value})} className='p-3 bg-transparent border rounded' />
        <button className='btn btn-glow' type='submit'>Sign in</button>
      </form>
    </div>
  );
}
