"use client";

import {
  Headphones,
  MessageCircle,
  Mail,
  Globe2,
  ShieldCheck,
  Clock3,
  Search,
  ChevronDown,
  Smartphone,
  Phone,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/footer";

import { useState } from "react";



const supportOptions = [

{
title:"Live Chat Support",
description:
"Chat with our support team and get quick answers to your questions.",
icon:MessageCircle,
action:"Start Chat"
},


{
title:"Email Support",
description:
"Send us your request and our specialists will respond quickly.",
icon:Mail,
action:"Send Email"
},


{
title:"Help Center",
description:
"Find guides about eSIM activation, verification numbers, and payments.",
icon:Headphones,
action:"Browse Articles"
}


];





const faqs = [

{
question:"How do I activate my eSIM?",
answer:
"After purchase, install your eSIM using the QR code provided in your account dashboard."
},


{
question:"How fast do verification numbers arrive?",
answer:
"Most verification numbers are delivered instantly after successful purchase."
},


{
question:"Which countries are supported?",
answer:
"VerifySIM supports connectivity and verification services across many global destinations."
},


{
question:"Can I use eSIM and verification numbers together?",
answer:
"Yes. Both services can be managed from your VerifySIM account."
}


];





export default function SupportPage(){


const [open,setOpen] = useState<number | null>(null);



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
bg-white
py-20
lg:py-28
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
bg-blue-100/50
blur-3xl
"
/>




<div
className="
relative
max-w-5xl
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
bg-blue-100
px-5
py-2
text-sm
font-medium
text-[#071B4D]
"
>

<Globe2 size={16}/>

Global Customer Support

</div>





<h1
className="
mt-7
text-4xl
sm:text-5xl
lg:text-6xl
font-bold
text-[#000000]
"
>

How Can We Help You?

</h1>





<p
className="
mt-6
text-lg
text-[#686b71]
max-w-3xl
mx-auto
"
>

Get help with verification numbers,
eSIM activation, payments, and your
VerifySIM account.

</p>







{/* Search */}

<div
className="
mt-10
max-w-2xl
mx-auto
flex
items-center
gap-3
rounded-2xl
bg-white
border
border-[#dde1e5d4]
shadow-xl
px-5
py-4
"
>


<Search
className="text-gray-400"
/>


<input

placeholder="Search help articles..."

className="
w-full
outline-none
"

/>


</div>


</div>


</section>









{/* SUPPORT CHANNELS */}


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
md:grid-cols-3
gap-6
"
>


{
supportOptions.map((item,index)=>{


const Icon=item.icon;


return (

<div
key={index}
className="
bg-white
rounded-3xl
border
border-gray-100
p-8
hover:shadow-xl
hover:-translate-y-2
transition
"
>


<div
className="
h-14
w-14
rounded-2xl
bg-[#eef3ff]
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
text-[#686b71]
leading-relaxed
"
>

{item.description}

</p>





<button
className="
mt-6
text-[#000000]
font-semibold
"
>

{item.action}

</button>



</div>


)

})


}


</div>


</section>









{/* FAQ */}



<section
className="
bg-white
py-20
"
>


<div
className="
max-w-4xl
mx-auto
px-5
"
>


<h2
className="
text-4xl
font-bold
text-center
text-[#000000]
"
>

Frequently Asked Questions

</h2>




<div
className="
mt-10
space-y-4
"
>


{
faqs.map((faq,index)=>(


<div
key={index}
className="
rounded-2xl
border
border-[#c1c3c5d4]
bg-white
overflow-hidden
"
>


<button
onClick={()=>setOpen(
open===index ? null:index
)}
className="
w-full
flex
items-center
justify-between
p-6
text-left
font-semibold
text-[#3c3e42f5]
"
>

{faq.question}


<ChevronDown
className={`
transition
${open===index ? "rotate-180":""}
`}
/>


</button>





{
open===index &&

<div
className="
px-6
pb-6
text-gray-600
"
>

{faq.answer}

</div>

}



</div>


))

}


</div>


</div>


</section>









{/* TRUST CTA */}



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
rounded-[36px]
bg-gradient-to-br
from-[#1a73e8]
to-[#3156a3]
text-white
p-10
lg:p-16
text-center
"
>



<ShieldCheck
size={45}
className="
mx-auto
"
/>




<h2
className="
mt-6
text-3xl
lg:text-4xl
font-bold
"
>

Reliable Support When You Need It

</h2>



<p
className="
mt-5
text-blue-100
max-w-2xl
mx-auto
"
>

Our team is available to help you stay
connected anywhere in the world.

</p>






<div
className="
mt-8
flex
flex-col
sm:flex-row
justify-center
gap-4
"
>


<button
className="
rounded-xl
bg-white
px-8
py-4
font-semibold
text-[#071B4D]
"
>

Contact Support

</button>


<a href="/help-center">
<button
className="
rounded-xl
border
border-white/30
px-8
py-4
font-semibold
cursor-pointer
"
>

Visit Help Center

</button>
</a>


</div>


</div>


</section>





</main>
<Footer/>
</>
)

}