const esim = [

{
country:"Dubai",
plan:"3GB / 7 Days",
used:"1.2GB / 3GB"
},

{
country:"France",
plan:"5GB / 15 Days",
used:"2.6GB / 5GB"
}

];

export default function MyEsims(){

return(

<div>

<h2 className="text-2xl font-bold mb-5">

My eSIMs

</h2>

<div className="space-y-4">

{esim.map((item)=>(

<div
key={item.country}
className="bg-white rounded-3xl p-5 shadow">

<div className="flex justify-between">

<div>

<h3 className="font-bold">

{item.country}

</h3>

<p className="text-slate-500">

{item.plan}

</p>

</div>

<span className="bg-green-100 text-green-600 rounded-full px-4 py-1">

Active

</span>

</div>

<div className="h-3 bg-slate-200 rounded-full mt-4">

<div className="bg-sky-500 h-3 rounded-full w-2/5"/>

</div>

<p className="mt-2 text-sm">

{item.used}

</p>

</div>

))}

</div>

</div>

)
}