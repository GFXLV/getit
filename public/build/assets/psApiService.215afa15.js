import{aF as o}from"./app.17cd73cb.js";let l="";l="/psx-mpc-demo";const c=l+"/api/v1.0",u="/category/search",h="/sub_category/search",_="/location-city/search",g="/location-township/search",m="/user/search",a="/product/customize-header",n="5",f=(s,t,e)=>o.post(c+u,{keyword:t,login_user_id:e,limit:n,offset:s}).then(i=>i).catch(),p=(s,t,e,i)=>o.post(c+h+"?login_user_id="+e,{keyword:t||"",category_id:i=="all"?"":i,limit:n,offset:s}).then(r=>r).catch(),y=(s,t,e)=>o.post(c+_+"?login_user_id="+e,{keyword:t||"",limit:n,offset:s}).then(i=>i).catch(),b=(s,t,e,i)=>o.post(c+g+"?login_user_id="+e,{keyword:t||"",city_id:i=="all"?"":i,limit:n,offset:s}).then(r=>r).catch(),w=(s,t,e)=>o.post(c+m+"?login_user_id="+e,{keyword:t||"",limit:n,offset:s}).then(i=>i).catch(),z=(s,t)=>o.get(c+a+"/ps-itm00003/customize-details?login_user_id="+t+"&limit=5&offset="+s).then(e=>e).catch(),C=(s,t)=>o.get(c+a+"/ps-itm00007/customize-details?login_user_id="+t+"&limit=5&offset="+s).then(e=>e).catch(),x=(s,t)=>o.get(c+a+"/ps-itm00002/customize-details?login_user_id="+t+"&limit=5&offset="+s).then(e=>e).catch(),O=(s,t,e,i)=>o.get(c+a+"/"+i+"/customize-details?login_user_id="+e+"&limit=5&offset="+s).then(r=>r).catch();export{p as a,y as b,b as c,O as d,w as e,z as f,f as g,C as h,x as i};