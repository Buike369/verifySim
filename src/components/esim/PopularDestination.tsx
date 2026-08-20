// const countries=[
// "USA",
// "Japan",
// "Turkey",
// "Thailand",
// "United Kingdom",
// "France",
// "Canada"
// ];

// <div className="flex gap-5 overflow-x-auto pb-3">

// {countries.map(country=>(

// <div
// key={country}
// className="min-w-[180px] rounded-3xl bg-white shadow">

// <img
// src={`/countries/${country}.jpg`}
// className="h-40 w-full rounded-t-3xl object-cover"
// />

// <div className="p-4">

// <h2 className="font-semibold">

// {country}

// </h2>

// <p className="text-sky-600 font-bold">

// From $3.90

// </p>

// </div>

// </div>

// ))}

// </div>


const countries=[

"USA",
"Japan",
"Turkey",
"Thailand",
"France"

];

export default function PopularDestination(){

return(

<div>

<h2 className="text-2xl font-bold mb-5">

Popular Destinations

</h2>

<div className="flex gap-5 overflow-x-auto pb-4">

{countries.map((country)=>(

<div
key={country}
className="min-w-[220px] bg-white rounded-3xl shadow">

<div className="h-40 bg-sky-100 rounded-t-3xl"/>

<div className="p-5">

<h3 className="font-bold">

{country}

</h3>

<p className="text-sky-600">

From $3.99

</p>

</div>

</div>

))}

</div>

</div>

)
}