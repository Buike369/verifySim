"use client"

import {
  Phone,
  Globe2,
  Zap,
  Lock,
  CheckCircle2,
  Wifi,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";


const features = [

  {
    title: "Instant Verification Numbers",
    desc: "Receive OTP codes instantly from reliable global mobile networks with fast activation.",
    icon: Phone,
    badge: "OTP Ready",
  },


  {
    title: "Global eSIM Coverage",
    desc: "Stay connected with affordable data-only eSIM plans across 190+ destinations.",
    icon: Globe2,
    badge: "190+ Countries",
  },


  {
    title: "Instant Activation",
    desc: "Activate your digital SIM within minutes without visiting stores or waiting.",
    icon: Zap,
    badge: "Fast Setup",
  },


  {
    title: "Enterprise Security",
    desc: "Your identity and connectivity are protected with secure infrastructure.",
    icon: ShieldCheck,
    badge: "Protected",
  },

];





export default function Features(){


return (

<section
className="
relative
bg-[#f7f9fc]
py-24
overflow-hidden
"
>


{/* Background Decoration */}

<div
className="
absolute
top-0
right-0
w-96
h-96
bg-blue-100/40
rounded-full
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
bg-blue-100
px-4
py-2
text-sm
font-medium
text-[#071B4D]
"
>

<CheckCircle2 size={16}/>

Premium Connectivity 

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

Everything You Need For
<span className="text-[#1a73e8]"> Global Digital Connectivity</span>

</h2>



<p
className="
mt-5
text-lg
text-gray-600
"
>

Powerful verification numbers and data eSIM
solutions built for individuals and businesses
worldwide.

</p>


</div>







{/* Feature Cards */}


<div
className="
mt-16
grid
sm:grid-cols-2
lg:grid-cols-4
gap-6
"
>


{
features.map((item,index)=>{


const Icon=item.icon;



return (

<div
key={index}
className="
group
relative
rounded-3xl
bg-white
border
border-gray-100
p-7
shadow-sm
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-300
"
>



{/* Badge */}

<div
className="
absolute
top-6
right-6
rounded-full
bg-[#eef3ff]
px-3
py-1
text-xs
font-semibold
text-[#071B4D]
"
>

{item.badge}

</div>





{/* Icon */}


<div
className="
flex
h-16
w-16
items-center
justify-center
rounded-2xl
bg-gradient-to-br
from-[#1a73e8]
to-[#346ffa7a]
shadow-lg
shadow-blue-900/20
group-hover:scale-110
transition
"
>


<Icon
size={30}
className="text-white"
/>


</div>





<h3
className="
mt-7
text-xl
font-bold
text-[#071B4D]
"
>

{item.title}

</h3>




<p
className="
mt-4
leading-relaxed
text-[#485f7eb8]
"
>

{item.desc}

</p>





<div
className="
mt-6
flex
items-center
gap-2
text-sm
font-medium
text-[#071B4D]
"
>


<CheckCircle2 size={16}/>

Available 24/7


</div>



</div>


)


})


}



</div>






{/* Bottom Trust Bar */}


 {/* Trust / CTA bar */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-[#1a73e8] shadow-xl">
          <div className="flex flex-col gap-8 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-cyan-300">
                <ShieldCheck size={18} />
                Trusted digital connectivity
              </div>

              <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                Connect globally without the hassle.
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                Whether you need a verification number or mobile data abroad,
                everything is managed from one simple platform.
              </p>
            </div>

            <button
              type="button"
              className="
                inline-flex
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-white
                px-5
                py-3
                text-sm
                font-bold
                text-[#071B4D]
                transition
                hover:bg-cyan-50
              "
            >
              Get Started
              <ArrowRight size={17} />
            </button>
          </div>
        </div>

        {/* Trust points */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-500" />
            Secure payments
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-500" />
            Instant digital delivery
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-500" />
            Global availability
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-500" />
            Support when you need it
          </div>
        </div>
 




</div>



</section>

)

}


