


import {
  Search,
  ShoppingCart,
  Smartphone,
  CheckCircle2,
  Globe2,
  ShieldCheck,
} from "lucide-react";



const steps = [

  {
    number:"01",
    title:"Choose Your Service",
    description:
    "Select your preferred verification number or data-only eSIM plan from available countries.",
    icon:Search
  },


  {
    number:"02",
    title:"Instant Activation",
    description:
    "Receive your virtual number or install your eSIM instantly with simple activation steps.",
    icon:ShoppingCart
  },


  {
    number:"03",
    title:"Connect Globally",
    description:
    "Start receiving OTP messages or enjoy fast mobile data anywhere in the world.",
    icon:Smartphone
  }

];





export default function HowItWorks(){


return (


<section
className="
relative
overflow-hidden
bg-white
py-24
"
>


{/* Background */}

<div
className="
absolute
top-20
left-0
w-80
h-80
rounded-full
bg-blue-100/40
blur-3xl
"
/>



<div
className="
relative
max-w-7xl
mx-auto
px-5
sm:px-8
lg:px-10
"
>




{/* Header */}


<div
className="
max-w-3xl
mx-auto
text-center
"
>


<div
className="
inline-flex
items-center
gap-2
rounded-full
bg-[#eef3ff]
px-4
py-2
text-sm
font-medium
text-[#071B4D]
"
>

<Globe2 size={16}/>

Simple Steps 

</div>




<h2
className="
mt-6
text-3xl
sm:text-4xl
lg:text-5xl
font-bold
tracking-tight
text-[#000000]
"
>

Get Connected In
Three Simple Steps

</h2>



<p
className="
mt-5
text-lg
text-gray-600
"
>

From choosing a service to going online,
our platform makes global connectivity fast,
secure, and effortless.

</p>


</div>








{/* Steps */}


<div
className="
relative
mt-16
grid
md:grid-cols-3
gap-8
"
>


{/* Connecting Line Desktop */}

<div
className="
hidden
md:block
absolute
top-24
left-[18%]
right-[18%]
h-px
bg-blue-200
"
/>





{
steps.map((step,index)=>{


const Icon=step.icon;


return (

<div
key={index}
className="
relative
group
"
>


<div
className="
rounded-3xl
bg-white
border
border-gray-100
p-8
shadow-sm
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-300
text-center
"
>





{/* Step Number */}


<div
className="
absolute
top-5
right-5
text-sm
font-bold
text-blue-200
"
>

{step.number}

</div>






{/* Icon */}


<div
className="
mx-auto
flex
h-20
w-20
items-center
justify-center
rounded-3xl
bg-gradient-to-br
from-[#1a73e8]
to-[#346ffa7a]
shadow-xl
shadow-blue-900/20
group-hover:scale-110
transition
"
>

<Icon
size={34}
className="
text-white
"
/>


</div>






<h3
className="
mt-8
text-xl
font-bold
text-[#071B4D]
"
>

{step.title}

</h3>





<p
className="
mt-4
leading-relaxed
text-[#485f7eb8]
"
>

{step.description}

</p>





<div
className="
mt-6
inline-flex
items-center
gap-2
rounded-full
bg-green-50
px-4
py-2
text-sm
font-medium
text-green-700
"
>

<CheckCircle2 size={16}/>

Ready


</div>




</div>



</div>


)


})


}


</div>








{/* Security Banner */}

{/* 
<div
className="
mt-16
rounded-3xl
bg-[#1a73e8]
p-8
lg:p-10
flex
flex-col
md:flex-row
items-center
justify-between
gap-6
text-white
"
>


<div>


<h3
className="
text-2xl
font-bold
"
>

Secure. Fast. Worldwide.

</h3>


<p
className="
mt-3
text-blue-100
"
>

Trusted infrastructure designed for
individual users and global businesses.

</p>


</div>





<div
className="
flex
items-center
gap-3
rounded-xl
bg-white/10
px-5
py-3
"
>

<ShieldCheck/>

<span className="font-semibold">
Enterprise Security
</span>


</div>


</div> */}





</div>


</section>


)

}