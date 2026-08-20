import {
ShoppingCart,
Smartphone,
BarChart3,
Wallet
} from "lucide-react";

const items = [
{
title:"Buy eSIM",
icon:ShoppingCart
},
{
title:"My eSIMs",
icon:Smartphone
},
{
title:"Usage",
icon:BarChart3
},
{
title:"Top Up",
icon:Wallet
}
];

export default function QuickActions(){

return(

<div className="grid grid-cols-4 gap-4">

{items.map(({title,icon:Icon})=>(

<div
key={title}
className="bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-lg transition">

<div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100">

<Icon className="text-sky-600"/>

</div>

<p className="font-semibold">{title}</p>

</div>

))}

</div>

)
}