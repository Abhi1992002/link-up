import{T as E,O as w,r as t,P as S,j as e,B as M,a as k,k as B}from"./index-DtmGh-ef.js";import{C as I,a as A,b as D,e as P,c as T,d as R}from"./card-oELOtQkW.js";import{I as o}from"./input-CwvonfPM.js";function L(){const s=E(a=>a.users.currentUser),m=w(),[l,u]=t.useState(s==null?void 0:s.username),[x,y]=t.useState(s==null?void 0:s.name),[c,g]=t.useState((s==null?void 0:s.type)||""),[r,j]=t.useState(s==null?void 0:s.isMentor),[i,v]=t.useState(s==null?void 0:s.age),[n,N]=t.useState((s==null?void 0:s.bio)||""),[d,C]=t.useState(s==null?void 0:s.city),[h,b]=t.useState(s==null?void 0:s.country);t.useEffect(()=>{m(S())},[m]),t.useEffect(()=>{s&&(u(s.username),y(s.name),g(s.type||""),j(s.isMentor),v(s.age),N(s.bio),C(s.city),b(s.country))},[s]);const f=()=>{console.log({username:l,name:x,type:c,isMentor:r,age:i,bio:n,city:d,country:h});const a={username:l,type:c,isMentor:r,age:i,bio:n,city:d,country:h};k.put(B+"/edit-user",a).then(p=>{console.log(p)}).catch(p=>{console.log(p)})};return e.jsxs(I,{className:"w-full max-w-md mx-auto",children:[e.jsxs(A,{children:[e.jsx(D,{children:"Edit Profile"}),e.jsx(P,{children:"Update your profile information."})]}),e.jsxs(T,{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"Username*"}),e.jsx(o,{id:"username",disabled:!0,className:"border-color-white",value:l,onChange:a=>u(a.target.value)})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"Name*"}),e.jsx(o,{id:"name",className:"border-color-white",placeholder:"Enter your name",type:"text",value:x,onChange:a=>y(a.target.value)})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"User Type*"}),e.jsx(o,{id:"type",className:"border-color-white",placeholder:"Enter your user type",type:"text",value:c,onChange:a=>g(a.target.value)})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-nowrap",children:"Is Mentor*"}),e.jsx(o,{id:"isMentor",className:"border-color-white w-10 rounded bg-transparent",placeholder:"Enter if you are a mentor",type:"checkbox",checked:r,onChange:a=>j(a.target.checked)})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"Age*"}),e.jsx(o,{id:"age",className:"border-color-white",placeholder:"Enter your age",type:"number",value:i,onChange:a=>v(Number(a.target.value))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"City*"}),e.jsx(o,{id:"city",className:"border-color-white",placeholder:"Enter your city",value:d,onChange:a=>C(a.target.value)})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"Country"}),e.jsx(o,{id:"country",className:"border-color-white",placeholder:"Enter your country",value:h,onChange:a=>b(a.target.value)})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"Bio"}),e.jsx(o,{id:"bio",className:"border-color-white",placeholder:"Enter your bio",value:n,onChange:a=>N(a.target.value)})]})]})]}),e.jsx(R,{children:e.jsx(M,{className:"ml-auto",onClick:f,children:"Save Changes"})})]})}export{L as default};
