import{A as i}from"./index.aa8dbf77.js";const u={getIssues(s,e,r,t){return i().get(`series/${e}/issues?orderby=${r}&orderdir=${t}`,s)},addIssues(s,e,r){return i().post(`series/${s}/issues`,e,r)}};export{u as I};
