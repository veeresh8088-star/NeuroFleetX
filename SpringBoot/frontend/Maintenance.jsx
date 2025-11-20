import React,{useState,useEffect} from "react";
import API from "../services/api";
import { Wrench, Plus, Clock } from "lucide-react";

export default function Maintenance(){
  const [list,setList]=useState([]);
  const [form,setForm]=useState({vehicleNumber:"",type:"",scheduledDate:"",notes:"",cost:"",performedBy:""});
  const [showForm, setShowForm] = useState(false);
  useEffect(()=>{ load() },[]);
  function load(){ API.get("/api/maintenance").then(r=>setList(r.data)).catch(()=>setList([])); }
  function add(e){ 
    e.preventDefault(); 
    API.post("/api/maintenance",form).then(()=>{
      load(); 
      setForm({vehicleNumber:"",type:"",scheduledDate:"",notes:"",cost:"",performedBy:""}); 
      setShowForm(false);
    }).catch(err=>console.error(err)); 
  }
  
  const getTypeColor = (type) => {
    const colors = {
      "Oil Change": {bg:"rgba(6,182,212,0.15)",border:"#06b6d4",text:"#06b6d4",icon:"⚙"},
      "Tire Replacement": {bg:"rgba(245,158,11,0.15)",border:"#f59e0b",text:"#f59e0b",icon:"🔧"},
      "Battery": {bg:"rgba(139,92,246,0.15)",border:"#8b5cf6",text:"#8b5cf6",icon:"🔋"},
      "Brakes": {bg:"rgba(239,68,68,0.15)",border:"#ef4444",text:"#ef4444",icon:"⛔"}
    };
    return colors[type] || {bg:"rgba(107,114,128,0.15)",border:"#6b7280",text:"#6b7280",icon:"?"};
  };

  const btnStyle={padding:"12px 24px",borderRadius:12,border:"none",color:"white",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:8,transition:"all 0.3s",boxShadow:"0 4px 12px rgba(6,182,212,0.3)"};
  btnStyle.background="linear-gradient(135deg,#06b6d4,#0891b2)";
  
  const submitStyle={padding:"12px",borderRadius:8,border:"none",color:"white",fontWeight:600,cursor:"pointer",gridColumn:"1/-1",transition:"all 0.3s"};
  submitStyle.background="linear-gradient(135deg,#10b981,#059669)";

  return (
    <div style={{padding:"24px",background:"linear-gradient(135deg,#f8fafc 0%,#f0f9ff 100%)",minHeight:"100vh"}}>
      {/* Header */}
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:32,padding:20,background:'linear-gradient(135deg,rgba(134,194,255,0.08),rgba(255,228,181,0.08))',borderRadius:16,border:'1px solid rgba(6,182,212,0.2)',boxShadow:'0 8px 24px rgba(0,0,0,0.05)'}}>
        <div>
          <h1 style={{fontSize:32,fontWeight:800,marginBottom:8,color:"#0f1724",display:"flex",alignItems:"center",gap:12}}>
            <Wrench size={32} style={{color:"#06b6d4"}}/>
            Maintenance Management
          </h1>
          <p style={{color:"#64748b",fontSize:14}}>Schedule and track vehicle maintenance</p>
        </div>
        <button
          onClick={()=>setShowForm(!showForm)}
          style={btnStyle}
          onMouseEnter={(e)=>e.target.style.transform="translateY(-2px)"}
          onMouseLeave={(e)=>e.target.style.transform="translateY(0)"}
        >
          <Plus size={20}/> Schedule Maintenance
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div style={{background:'linear-gradient(135deg,rgba(134,194,255,0.05),rgba(255,228,181,0.05))',borderRadius:16,padding:24,border:'1px solid rgba(6,182,212,0.2)',marginBottom:32,animation:'slideDown 0.3s ease',boxShadow:'0 8px 24px rgba(0,0,0,0.04)'}}>
          <h3 style={{fontWeight:700,marginBottom:16}}>Schedule New Maintenance</h3>
          <form onSubmit={add} style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:12}}>
            <input required placeholder="Vehicle Number" value={form.vehicleNumber} onChange={e=>setForm({...form,vehicleNumber:e.target.value})} style={{padding:"12px",borderRadius:8,border:"2px solid #e2e8f0",outline:"none",transition:"all 0.3s"}} onFocus={(e)=>e.target.style.borderColor="#06b6d4"} onBlur={(e)=>e.target.style.borderColor="#e2e8f0"}/>
            <input placeholder="Type" value={form.type} onChange={e=>setForm({...form,type:e.target.value})} style={{padding:"12px",borderRadius:8,border:"2px solid #e2e8f0",outline:"none",transition:"all 0.3s"}} onFocus={(e)=>e.target.style.borderColor="#06b6d4"} onBlur={(e)=>e.target.style.borderColor="#e2e8f0"}/>
            <input type="date" value={form.scheduledDate} onChange={e=>setForm({...form,scheduledDate:e.target.value})} style={{padding:"12px",borderRadius:8,border:"2px solid #e2e8f0",outline:"none",transition:"all 0.3s"}} onFocus={(e)=>e.target.style.borderColor="#06b6d4"} onBlur={(e)=>e.target.style.borderColor="#e2e8f0"}/>
            <input placeholder="Performed By" value={form.performedBy} onChange={e=>setForm({...form,performedBy:e.target.value})} style={{padding:"12px",borderRadius:8,border:"2px solid #e2e8f0",outline:"none",transition:"all 0.3s"}} onFocus={(e)=>e.target.style.borderColor="#06b6d4"} onBlur={(e)=>e.target.style.borderColor="#e2e8f0"}/>
            <input type="number" placeholder="Cost" value={form.cost} onChange={e=>setForm({...form,cost:e.target.value})} style={{padding:"12px",borderRadius:8,border:"2px solid #e2e8f0",outline:"none",transition:"all 0.3s"}} onFocus={(e)=>e.target.style.borderColor="#06b6d4"} onBlur={(e)=>e.target.style.borderColor="#e2e8f0"}/>
            <textarea placeholder="Notes" value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})} style={{padding:"12px",borderRadius:8,border:"2px solid #e2e8f0",outline:"none",transition:"all 0.3s",gridColumn:"1/-1"}} onFocus={(e)=>e.target.style.borderColor="#06b6d4"} onBlur={(e)=>e.target.style.borderColor="#e2e8f0"}/>
            <button type="submit" style={submitStyle} onMouseEnter={(e)=>e.target.style.transform="translateY(-2px)"} onMouseLeave={(e)=>e.target.style.transform="translateY(0)"}> Schedule Maintenance</button>
          </form>
        </div>
      )}

      {/* Maintenance Timeline */}
      <div style={{display:"grid",gap:16}}>
        {list.map(m=>{
          const typeInfo = getTypeColor(m.type);
          const borderStyle="2px solid "+typeInfo.border;
          return (
            <div key={m.id} style={{background:typeInfo.bg,borderRadius:16,border:'1px solid rgba(6,182,212,0.2)',overflow:'hidden',boxShadow:'0 4px 12px rgba(0,0,0,0.06)',transition:'all 0.3s',padding:20}}>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:20}}>
                <div>
                  <div style={{fontSize:12,color:"#64748b",fontWeight:600,marginBottom:4}}>VEHICLE</div>
                  <div style={{fontSize:18,fontWeight:800,color:"#0f1724"}}>{m.vehicleNumber}</div>
                </div>
                <div>
                  <div style={{fontSize:12,color:"#64748b",fontWeight:600,marginBottom:4}}>TYPE</div>
                  <div style={{display:"flex",alignItems:"center",gap:8}}>
                    <span style={{fontSize:18}}>{typeInfo.icon}</span>
                    <span style={{fontSize:14,fontWeight:700,color:typeInfo.text}}>{m.type}</span>
                  </div>
                </div>
                <div>
                  <div style={{fontSize:12,color:"#64748b",fontWeight:600,marginBottom:4}}>SCHEDULED DATE</div>
                  <div style={{fontSize:14,fontWeight:700,color:"#0f1724",display:"flex",alignItems:"center",gap:6}}>
                    <Clock size={16} style={{color:typeInfo.text}}/>
                    {m.scheduledDate}
                  </div>
                </div>
                <div>
                  <div style={{fontSize:12,color:"#64748b",fontWeight:600,marginBottom:4}}>COST</div>
                  <div style={{fontSize:18,fontWeight:800,color:typeInfo.text}}>₹{m.cost||"—"}</div>
                </div>
              </div>
              {m.notes && <div style={{marginTop:12,padding:12,background:"rgba(15,23,36,0.03)",borderRadius:8,fontSize:13,color:"#64748b"}}>📝 {m.notes}</div>}
              {m.performedBy && <div style={{marginTop:8,fontSize:12,color:"#64748b"}}>👤 By: {m.performedBy}</div>}
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
