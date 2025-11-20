import React, {useState} from 'react';
import API from '../../services/api';
import { saveToken } from '../../services/auth';
import { useNavigate } from 'react-router-dom';

export default function Register(){
  const nav = useNavigate();
  const [form,setForm] = useState({email:'', password:'', fullName:''});
  const [error,setError] = useState('');
  async function submit(e){
    e.preventDefault();
    try{
      // Map front-end fullName to backend `name` property
      const payload = { email: form.email, password: form.password, name: form.fullName };
      const r = await API.post('/api/auth/register', payload);
      saveToken(r.data.token); nav('/dashboard');
    }catch(err){ setError(err.response?.data?.error || 'Registration failed'); }
  }
  return (
    <div style={{maxWidth:440,margin:'40px auto'}} className='card'>
      <h3 style={{fontWeight:700}}>Create account</h3>
      {error && <div style={{color:'#f43f5e'}}>{error}</div>}
      <form onSubmit={submit} style={{marginTop:12,display:'grid',gap:8}}>
        <input required placeholder='Full name' value={form.fullName} onChange={e=>setForm({...form,fullName:e.target.value})} className='p-3 bg-transparent border rounded' />
        <input required placeholder='Email' value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className='p-3 bg-transparent border rounded' />
        <input required placeholder='Password' type='password' value={form.password} onChange={e=>setForm({...form,password:e.target.value})} className='p-3 bg-transparent border rounded' />
        <button className='btn btn-glow' type='submit'>Create account</button>
      </form>
    </div>
  );
}
