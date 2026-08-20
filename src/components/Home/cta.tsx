// export default function CTA(){

// return (

// <section
// className="
// py-20
// text-center
// "
// >


// <h2 className="
// text-4xl
// font-bold
// text-[#071B4D]
// ">

// Ready to connect globally?

// </h2>


// <button
// className="
// mt-8
// bg-[#071B4D]
// text-white
// px-10 py-4
// rounded-xl
// "
// >

// Create Account

// </button>


// </section>

// )

// }

import {
  ArrowRight,
  Globe2,
  ShieldCheck,
  Zap,
  CheckCircle2
} from "lucide-react";



export default function CTA(){


return (

<section
className="
relative
overflow-hidden
py-24
bg-white
"
>


{/* Background Glow */}

<div
className="
absolute
top-10
left-1/2
-translate-x-1/2
h-[400px]
w-[600px]
rounded-full
bg-blue-100/50
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



<div
className="
relative
overflow-hidden
rounded-[40px]
bg-gradient-to-br
from-[#1a73e8]
via-[#1453b4]
to-[#1a529b]
px-6
py-14
sm:px-12
lg:px-20
lg:py-20
text-center
text-white
"
>



{/* Decorative shapes */}

<div
className="
absolute
-top-20
-right-20
h-72
w-72
rounded-full
bg-white/10
blur-3xl
"
/>


<div
className="
absolute
-bottom-20
-left-20
h-72
w-72
rounded-full
bg-blue-300/20
blur-3xl
"
/>




<div
className="
relative
max-w-4xl
mx-auto
"
>




<div
className="
inline-flex
items-center
gap-2
rounded-full
border
border-white/20
bg-white/10
px-5
py-2
text-sm
font-medium
"
>


<Globe2 size={17}/>

Global Digital Connectivity


</div>






<h2
className="
mt-7
text-3xl
sm:text-4xl
lg:text-6xl
font-bold
leading-tight
"
>

Ready To Connect
Anywhere In The World?

</h2>






<p
className="
mt-6
text-lg
leading-relaxed
text-blue-100
max-w-3xl
mx-auto
"
>

Create your account today and access instant
verification numbers and affordable data-only
eSIM plans from anywhere.

</p>






{/* Action Buttons */}

<div
className="
mt-10
flex
flex-col
sm:flex-row
justify-center
gap-4
"
>


<button
className="
group
inline-flex
items-center
justify-center
gap-3
rounded-xl
bg-white
px-8
py-4
font-semibold
text-[#071B4D]
shadow-xl
hover:bg-blue-50
transition-all
duration-300
"
>

Create Free Account

<ArrowRight
size={18}
className="
group-hover:translate-x-1
transition
"
/>

</button>





<button
className="
rounded-xl
border
border-white/30
bg-white/10
px-8
py-4
font-semibold
text-white
backdrop-blur
hover:bg-white/20
transition
"
>

View eSIM Plans

</button>



</div>







{/* Trust Indicators */}
{/* 
<div
className="
mt-12
grid
grid-cols-1
sm:grid-cols-3
gap-5
"
>



<div
className="
rounded-2xl
bg-white/10
border
border-white/20
p-5
"
>


<ShieldCheck
className="mx-auto mb-3"
/>


<p className="font-semibold">
Secure Platform
</p>


<span
className="
text-sm
text-blue-100
"
>
Enterprise protection
</span>


</div>





<div
className="
rounded-2xl
bg-white/10
border
border-white/20
p-5
"
>


<Zap
className="mx-auto mb-3"
/>


<p className="font-semibold">
Instant Activation
</p>


<span
className="
text-sm
text-blue-100
"
>
Ready in minutes
</span>


</div>







<div
className="
rounded-2xl
bg-white/10
border
border-white/20
p-5
"
>


<CheckCircle2
className="mx-auto mb-3"
/>


<p className="font-semibold">
Trusted Worldwide
</p>


<span
className="
text-sm
text-blue-100
"
>
Millions of connections
</span>


</div>



</div> */}





</div>


</div>


</div>


</section>

)

}