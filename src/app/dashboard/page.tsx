// import Header from "@/components/esim/Header";
// import BalanceCard from "@/components/esim/BalanceCard";
// import QuickActions from "@/components/esim/QuickActions";
// // import PromoBanner from "@/components/esim/PromoBanner";
// import Statistics from "@/components/esim/Statistic";
// import MyEsims from "@/components/esim/MyEsim";
// import DestinationSlider from "@/components/esim/PopularDestination";
// // import BottomNavigation from "@/components/esim/BottomNavigation";

// export default function Page() {
//   return (
//     <main className="min-h-screen bg-slate-50 pb-32">

//       <Header />

//       <div className="space-y-6 p-5">

//         <BalanceCard />

//         <QuickActions />

//         {/* <PromoBanner /> */}

//         <Statistics />

//         <MyEsims />

//         <DestinationSlider />

//       </div>

//       {/* <BottomNavigation /> */}

//     </main>
//   );
// }





"use client";

import {
  Menu,
  X,
  Smartphone,
  Phone,
  Wallet,
  CreditCard,
  Globe2,
  ShieldCheck,
  Bell,
  Settings,
  LogOut,
  ArrowUpRight,
  ArrowDownLeft,
  Signal,
  Plus,
} from "lucide-react";

import { useState } from "react";





const menuItems = [

{
title:"Dashboard",
icon:Globe2
},

{
title:"My eSIM",
icon:Smartphone
},

{
title:"Verification Numbers",
icon:Phone
},

{
title:"Wallet",
icon:Wallet
},

{
title:"Transactions",
icon:CreditCard
},

{
title:"Settings",
icon:Settings
}

];






const transactions=[

{
type:"eSIM Purchase",
amount:"-$15.00",
status:"Completed",
date:"Aug 07, 2026"
},


{
type:"Wallet Top Up",
amount:"+$50.00",
status:"Completed",
date:"Aug 05, 2026"
},


{
type:"Verification Number",
amount:"-$2.00",
status:"Completed",
date:"Aug 03, 2026"
}

];





export default function Dashboard(){


const [sidebar,setSidebar]=useState(false);



return (

<div
className="
min-h-screen
bg-[#f7f9fc]
flex
"
>





{/* MOBILE OVERLAY */}

{
sidebar &&

<div
onClick={()=>setSidebar(false)}
className="
fixed
inset-0
bg-black/40
z-30
lg:hidden
"
/>

}






{/* SIDEBAR */}


<aside
className={`
fixed
lg:static
z-40
h-screen
w-72
bg-[#071B4D]
text-white
p-6
transition-transform

${sidebar
?
"translate-x-0"
:
"-translate-x-full lg:translate-x-0"
}

`}
>



<div
className="
flex
items-center
justify-between
"
>


<h1
className="
text-2xl
font-bold
"
>

VerifySIM

</h1>


<button
onClick={()=>setSidebar(false)}
className="lg:hidden"
>

<X/>

</button>


</div>





<nav
className="
mt-10
space-y-3
"
>


{
menuItems.map((item,index)=>{


const Icon=item.icon;


return (

<button
key={index}
className="
w-full
flex
items-center
gap-4
rounded-xl
px-4
py-3
hover:bg-white/10
transition
"
>


<Icon size={20}/>

{item.title}


</button>

)


})

}


</nav>







<div
className="
absolute
bottom-8
left-6
right-6
"
>


<button
className="
flex
items-center
gap-3
text-blue-100
"
>

<LogOut size={20}/>

Logout

</button>


</div>


</aside>









{/* MAIN */}



<div
className="
flex-1
"
>





{/* HEADER */}



<header
className="
bg-white
border-b
border-[#e5f1f3]
px-5
lg:px-10
py-5
flex
items-center
justify-between
"
>



<button
onClick={()=>setSidebar(true)}
className="
lg:hidden
"
>

<Menu/>

</button>




<div>

<h2
className="
text-xl
font-bold
text-[#071B4D]
"
>

Welcome back, Kingsley 👋

</h2>


<p
className="
text-gray-500
text-sm
"
>

Manage your global connectivity

</p>


</div>







<div
className="
flex
items-center
gap-5
"
>


<Bell
className="text-gray-600"
/>



<div
className="
hidden
sm:flex
items-center
gap-3
"
>

<div
className="
h-10
w-10
rounded-full
bg-blue-100
"
/>


<span
className="
font-semibold
text-[#071B4D]
"
>

User

</span>


</div>


</div>


</header>









{/* CONTENT */}



<main
className="
p-5
lg:p-10
"
>









{/* STATS */}


<div
className="
grid
sm:grid-cols-2
xl:grid-cols-4
gap-6
"
>




<div
className="
bg-white
rounded-3xl
p-6
border
border-[#d0dddf]
"
>


<Wallet
className="text-[#071B4D]"
/>


<h3
className="
mt-5
text-gray-500
"
>

Wallet Balance

</h3>


<p
className="
text-3xl
font-bold
text-[#071B4D]
"
>

$245.50

</p>


</div>







<div
className="
bg-white
rounded-3xl
p-6
border
border-[#d0dddf]
"
>


<Smartphone
className="text-[#071B4D]"
/>


<h3
className="
mt-5
text-gray-500
"
>

Active eSIM

</h3>


<p
className="
text-3xl
font-bold
text-[#071B4D]
"
>

3

</p>


</div>







<div
className="
bg-white
rounded-3xl
p-6
border
border-[#d0dddf]
"
>


<Phone
className="text-[#071B4D]"
/>


<h3
className="
mt-5
text-gray-500
"
>

Active Numbers

</h3>


<p
className="
text-3xl
font-bold
text-[#071B4D]
"
>

5

</p>


</div>







<div
className="
bg-white
rounded-3xl
p-6
border
border-[#d0dddf]
"
>


<Signal
className="text-[#071B4D]"
/>


<h3
className="
mt-5
text-gray-500
"
>

Data Usage

</h3>


<p
className="
text-3xl
font-bold
text-[#071B4D]
"
>

8.5GB

</p>


</div>





</div>









{/* QUICK ACTIONS */}



<section
className="
mt-10
"
>


<h2
className="
text-2xl
font-bold
text-[#071B4D]
"
>

Quick Actions

</h2>





<div
className="
mt-5
grid
sm:grid-cols-2
lg:grid-cols-4
gap-5
"
>


<button
className="
bg-[#071B4D]
text-white
rounded-2xl
p-6
text-left
"
>


<Plus/>

<p
className="
mt-4
font-semibold
"
>

Buy eSIM

</p>


</button>





<button
className="
bg-white
border
border-[#d0dddf]
rounded-2xl
p-6
text-left
"
>


<Phone
className="text-[#071B4D]"
/>


<p
className="
mt-4
font-semibold
"
>

Get Number

</p>


</button>





<button
className="
bg-white
border
border-[#d0dddf]
rounded-2xl
p-6
text-left
"
>


<Wallet
className="text-[#071B4D]"
/>


<p
className="
mt-4
font-semibold
"
>

Add Funds

</p>


</button>





<button
className="
bg-white
border
border-[#d0dddf]
rounded-2xl
p-6
text-left
"
>


<ShieldCheck
className="text-[#071B4D]"
/>


<p
className="
mt-4
font-semibold
"
>

Security

</p>


</button>



</div>


</section>









{/* TRANSACTIONS */}



<section
className="
mt-10
bg-white
rounded-3xl
border
border-[#d0dddf]
p-6
"
>


<div
className="
flex
justify-between
"
>


<h2
className="
text-xl
font-bold
text-[#071B4D]
"
>

Recent Transactions

</h2>


<button
className="
text-[#071B4D]
font-semibold
"
>

View All

</button>


</div>





<div
className="
mt-6
space-y-4
"
>


{
transactions.map((item,index)=>(


<div
key={index}
className="
flex
justify-between
items-center
bg-[#f7f9fc]
rounded-xl
p-4
"
>


<div>

<p
className="
font-semibold
"
>

{item.type}

</p>


<p
className="
text-sm
text-gray-500
"
>

{item.date}

</p>


</div>




<div
className="
text-right
"
>


<p
className="
font-bold
text-[#071B4D]
"
>

{item.amount}

</p>


<p
className="
text-sm
text-green-600
"
>

{item.status}

</p>


</div>


</div>


))

}


</div>


</section>





</main>


</div>


</div>


)

}