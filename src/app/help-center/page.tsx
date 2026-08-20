"use client";

import {
  Search,
  Smartphone,
  Phone,
  CreditCard,
  ShieldCheck,
  UserCircle,
  MessageCircle,
  BookOpen,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/footer";

import { useState } from "react";



const categories = [

{
title:"eSIM Guide",
description:
"Learn how to purchase, install, activate, and manage your eSIM.",
icon:Smartphone,
articles:"24 Articles"
},


{
title:"Verification Numbers",
description:
"Everything about OTP numbers, supported services, and activation.",
icon:Phone,
articles:"18 Articles"
},


{
title:"Payments & Billing",
description:
"Manage payments, wallets, refunds, and transaction issues.",
icon:CreditCard,
articles:"15 Articles"
},


{
title:"Account & Security",
description:
"Manage your account, privacy, and security settings.",
icon:ShieldCheck,
articles:"12 Articles"
}

];





const popularArticles=[

"How to install VerifySIM eSIM",

"How to receive a verification code",

"Why is my verification number not working?",

"How to add funds to my wallet",

"Supported countries and networks"

];





export default function HelpCenterPage(){


const [search,setSearch]=useState("");



return (

  <>
  <Navbar/>

<main
className="
min-h-screen
bg-[#f7f9fc]
pt-10
"
>





{/* HERO */}


<section
className="
relative
overflow-hidden
bg-[#1a73e8]
py-20
lg:py-28
text-white
"
>


<div
className="
absolute
right-0
top-0
h-[450px]
w-[450px]
rounded-full
bg-blue-400/20
blur-3xl
"
/>





<div
className="
relative
max-w-6xl
mx-auto
px-5
text-center
"
>


<div
className="
inline-flex
items-center
gap-2
rounded-full
bg-white/10
px-5
py-2
text-sm
"
>

<BookOpen size={16}/>

VerifySIM Help Center

</div>





<h1
className="
mt-7
text-4xl
sm:text-5xl
lg:text-6xl
font-bold
"
>

How Can We Help?

</h1>





<p
className="
mt-5
max-w-3xl
mx-auto
text-blue-100
text-lg
"
>

Find answers about eSIM activation,
verification numbers, payments,
and account management.

</p>








<div
className="
mt-10
max-w-3xl
mx-auto
bg-white
rounded-2xl
p-3
flex
items-center
gap-3
shadow-xl
"
>


<Search
className="
text-gray-400
"
/>



<input

value={search}

onChange={(e)=>setSearch(e.target.value)}

placeholder="
Search help articles...
"

className="
flex-1
text-gray-700
outline-none
py-3
"

/>


</div>


</div>


</section>









{/* CATEGORIES */}



<section
className="
max-w-7xl
mx-auto
px-5
sm:px-8
lg:px-10
py-20
"
>


<h2
className="
text-3xl
font-bold
text-[#000000]
"
>

Browse Help Categories

</h2>






<div
className="
mt-10
grid
sm:grid-cols-2
lg:grid-cols-4
gap-6
"
>


{
categories.map((item,index)=>{


const Icon=item.icon;


return (

<div
key={index}
className="
bg-white
rounded-3xl
border
border-[#dbeafe]
p-7
hover:shadow-xl
hover:-translate-y-1
transition
cursor-pointer
"
>


<div
className="
h-14
w-14
rounded-2xl
bg-blue-100
flex
items-center
justify-center
"
>


<Icon
className="text-[#1a73e8]"
size={28}
/>


</div>





<h3
className="
mt-6
text-xl
font-bold
text-[#000000]
"
>

{item.title}

</h3>




<p
className="
mt-3
text-[#717e95]
"
>

{item.description}

</p>




<p
className="
mt-5
text-sm
font-semibold
text-[#000000]
"
>

{item.articles}

</p>



</div>


)


})


}


</div>


</section>









{/* POPULAR ARTICLES */}



<section
className="
bg-white
py-20
"
>


<div
className="
max-w-5xl
mx-auto
px-5
"
>


<h2
className="
text-3xl
font-bold
text-[#000000]
"
>

Popular Articles

</h2>





<div
className="
mt-8
space-y-4
"
>


{
popularArticles.map((article,index)=>(


<div
key={index}
className="
flex
items-center
justify-between
bg-[#f7f9fc]
rounded-2xl
p-5
hover:bg-blue-50
transition
cursor-pointer
"
>


<div
className="
flex
items-center
gap-4
"
>


<BookOpen
className="text-[#6e6e6f]"
/>


<span
className="
font-medium
text-[#6e6e6f]
"
>

{article}

</span>


</div>





<ChevronRight
className="text-[#6e6e6f]"
/>


</div>


))

}


</div>


</div>


</section>









{/* SUPPORT OPTIONS */}



<section
className="
max-w-7xl
mx-auto
px-5
sm:px-8
lg:px-10
py-20
"
>


<div
className="
grid
md:grid-cols-2
gap-8
"
>





<div
className="
rounded-[32px]
bg-white
border
border-[#dbeafe]
p-8
"
>


<MessageCircle
className="text-[#1a73e8]"
size={35}
/>


<h3
className="
mt-5
text-2xl
font-bold
text-[#000000]
"
>

Need More Help?

</h3>



<p
className="
mt-3
text-gray-600
"
>

Can't find your answer?
Our support team is available
to assist you.

</p>



<a href="/support">
<button
className="
mt-6
flex
items-center
gap-2
rounded-xl
bg-[#1a73e8]
px-7
py-4
text-white
font-semibold
cursor-pointer
"
>

Contact Support

<ArrowRight size={18}/>

</button>
</a>



</div>







<div
className="
rounded-[32px]
bg-[#1a73e8]
p-8
text-white
"
>


<UserCircle
size={35}
/>


<h3
className="
mt-5
text-2xl
font-bold
"
>

Account Assistance

</h3>



<p
className="
mt-3
text-blue-100
"
>

Manage your profile,
transactions, eSIMs,
and verification services.

</p>




<button
className="
mt-6
rounded-xl
bg-white
px-7
py-4
font-semibold
text-[#1a529b]
"
>

Go To Dashboard

</button>


</div>



</div>


</section>





</main>
<Footer/>
</>

)

}