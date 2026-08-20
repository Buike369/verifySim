const stats = [

{
title:"Countries",
value:"200+"
},

{
title:"Delivery",
value:"1 Min"
},

{
title:"Speed",
value:"4G/5G"
},

{
title:"Secure",
value:"100%"
}

];

export default function Statistics(){

return(

<div className="grid grid-cols-4 gap-3">

{stats.map((item)=>(

<div
key={item.title}
className="rounded-2xl bg-white p-5 text-center shadow-sm">

<h2 className="font-bold text-sky-600">

{item.value}

</h2>

<p className="text-slate-500">

{item.title}

</p>

</div>

))}

</div>

)
}