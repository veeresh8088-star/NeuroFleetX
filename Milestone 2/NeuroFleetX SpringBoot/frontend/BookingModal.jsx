import React,{useState} from 'react';
import API from '../services/api';

export default function BookingModal({onCreate}){
  const [form,setForm] = useState({customerName:'',customerEmail:'',pickupLocation:'',dropLocation:'',vehicleType:''});
  async function submit(e){
    e.preventDefault();
    try{ await API.post('/api/bookings/create', form); onCreate && onCreate(); setForm({customerName:'',customerEmail:'',pickupLocation:'',dropLocation:'',vehicleType:''}); }
    catch(err){ console.error(err); }
  }
  return (
    <div className='card'>
      <div style={{fontWeight:700,marginBottom:8}}>Create Booking</div>
      <form onSubmit={submit} className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        <input required placeholder='Customer name' value={form.customerName} onChange={e=>setForm({...form,customerName:e.target.value})} className='p-3 bg-transparent border rounded' />
        <input required placeholder='Customer email' value={form.customerEmail} onChange={e=>setForm({...form,customerEmail:e.target.value})} className='p-3 bg-transparent border rounded' />
        <input required placeholder='Pickup' value={form.pickupLocation} onChange={e=>setForm({...form,pickupLocation:e.target.value})} className='p-3 bg-transparent border rounded' />
        <input required placeholder='Drop' value={form.dropLocation} onChange={e=>setForm({...form,dropLocation:e.target.value})} className='p-3 bg-transparent border rounded' />
        <input placeholder='Vehicle type' value={form.vehicleType} onChange={e=>setForm({...form,vehicleType:e.target.value})} className='p-3 bg-transparent border rounded' />
        <div><button className='btn btn-glow' type='submit'>Create</button></div>
      </form>
    </div>
  );
}
