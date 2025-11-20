export function saveToken(t){ localStorage.setItem('nf_token', t); }
export function getToken(){ return localStorage.getItem('nf_token'); }
export function clearToken(){ localStorage.removeItem('nf_token'); }
