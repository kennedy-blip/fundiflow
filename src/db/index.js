import Dexie from 'dexie';
export const db=new Dexie('FundiFlowDB');
db.version(1).stores({projects:'++id,name,status,createdAt',quotes:'++id,projectId,client,createdAt',expenses:'++id,projectId,category,date',deposits:'++id,projectId,date',workers:'++id,name,role',attendance:'++id,workerId,projectId,date',tools:'++id,name,status',toolLogs:'++id,toolId,projectId,checkedOutAt'});
export const money=n=>new Intl.NumberFormat('en-KE',{style:'currency',currency:'KES',maximumFractionDigits:0}).format(Number(n)||0);
export const uid=()=>crypto.randomUUID?.()??String(Date.now()+Math.random());