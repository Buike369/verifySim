"use client";

import {
  Globe2,
  ShieldCheck,
  Zap,
  Users,
  Wifi,
  Smartphone,
  Target,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/footer";



const values = [

{
title:"Global Connectivity",
description:
"We make digital connectivity accessible by providing reliable eSIM solutions and verification services worldwide.",
icon:Globe2
},


{
title:"Security First",
description:
"Your privacy and account security are our priority with trusted infrastructure and secure technology.",
icon:ShieldCheck
},


{
title:"Fast & Reliable",
description:
"Instant activation, quick verification, and seamless experiences designed for modern users.",
icon:Zap
},


{
title:"Customer Focus",
description:
"We build products around real customer needs with simple and powerful solutions.",
icon:Users
}

];





const stats = [

{
number:"190+",
label:"Countries Covered"
},

{
number:"99%",
label:"Service Reliability"
},

{
number:"24/7",
label:"Customer Support"
},

{
number:"Millions",
label:"Global Connections"
}

];



const features = [
  {
    title: "Global eSIM",
    description:
      "Purchase affordable mobile data plans for over 190 countries without changing your physical SIM.",
    icon: Smartphone,
  },
  {
    title: "Verification Numbers",
    description:
      "Receive SMS verification codes securely for supported online platforms and applications.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable Network",
    description:
      "Premium network partners ensure stable and high-speed mobile connectivity worldwide.",
    icon: Wifi,
  },
  {
    title: "Instant Delivery",
    description:
      "Most purchases are activated within seconds, allowing you to connect immediately.",
    icon: Rocket,
  },
];



export default function AboutPage(){



return (

    <>
    <Navbar/>

<main
className="
min-h-screen
bg-[#f7f9fc] pt-10
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
h-[500px]
w-[500px]
rounded-full
bg-blue-100/50
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
bg-blue-100
px-5
py-2
text-sm
font-medium
text-[#071B4D]
"
>

<Globe2 size={16}/>

Building Global Digital Connectivity

</div>






<h1
className="
mt-7
text-2xl


sm:text-4xl
lg:text-6xl
font-bold
leading-tight
text-[#000000]
"

>

Connecting People.
Empowering Businesses.
Worldwide.

</h1>





<p
className="
mt-6
max-w-3xl
mx-auto
text-lg
text-[#717e95]
"
>

VerifySIM provides secure verification numbers
and affordable data-only eSIM solutions that help
people and businesses stay connected anywhere.

</p>



</div>


</section>









{/* STORY */}



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
lg:grid-cols-2
gap-12
items-center
"
>





<div>

<h2
className="
text-4xl
font-bold
text-[#000000]
"
>

Who We Are

</h2>



<p
className="
mt-6
text-[#717e95]
leading-relaxed
"
>

VerifySIM is a global connectivity platform focused
on simplifying digital communication.

We help users access virtual phone numbers for
secure account verification and provide instant
data-only eSIM plans for travelers, remote workers,
and businesses.

</p>




<p
className="
mt-5
text-[#717e95]
leading-relaxed
"
>

Our mission is to remove borders from connectivity
by combining modern technology, reliable networks,
and a seamless user experience.

</p>


</div>







<div
className="
rounded-[36px]
bg-[#1a73e8]
px-6 py-10
text-white
"
>


<div
className="
grid
grid-cols-2
gap-3
"
>


{
stats.map((item,index)=>(


<div
key={index}
>

<h3
className="
text-3xl
font-bold
"
>

{item.number}

</h3>


<p
className="
mt-2
text-blue-100
text-sm
"
>

{item.label}

</p>


</div>


))

}


</div>



</div>



</div>


</section>









{/* MISSION */}



<section
className="
bg-white
py-20
"
>


<div
className="
max-w-7xl
mx-auto
px-5
sm:px-8
lg:px-10
"
>


<div
className="
grid
md:grid-cols-3
gap-8
"
>





<div
className="
md:col-span-1
"
>


<div
className="
h-16
w-16
rounded-2xl
bg-[#eef3ff]
flex
items-center
justify-center
"
>

<Target
className="text-[#1a73e8]"
size={32}
/>

</div>



<h2
className="
mt-6
text-3xl
font-bold
text-[#000000]
"
>

Our Mission

</h2>


<p
className="
mt-4
text-[#717e95]
"
>

To make global connectivity simple,
affordable, and accessible for everyone.

</p>


</div>







<div
className="
md:col-span-2
grid
sm:grid-cols-2
gap-6
"
>


<div
className="
rounded-3xl
bg-[#f7f9fc]
p-7
"
>

<Smartphone
className="text-[#1a73e8]"
size={24}
/>


<h3
className="
mt-4
font-bold
text-xl
text-[#000000]
"
>

Digital SIM Technology

</h3>


<p
className="
mt-3
text-[#717e95]
"
>

Instant eSIM activation without physical SIM cards.

</p>


</div>






<div
className="
rounded-3xl
bg-[#f7f9fc]
p-7
"
>


<Wifi
className="text-[#1a73e8]"
size={18}
/>


<h3
className="
mt-4
font-bold
text-xl
text-[#000000]
"
>

Global Networks

</h3>


<p
className="
mt-3
text-[#717e95]
"
>

Reliable connectivity through trusted partners.

</p>


</div>






</div>



</div>


</div>


</section>


  <section className="bg-slate-50 py-24">

           <div className="mx-auto max-w-7xl px-6">

             <div className="text-center">

               <h2 className="text-4xl text-[#000000] font-bold">
                 What We Offer
               </h2>

               <p className="mt-4 text-[#717e95]">
                 Everything you need to stay connected worldwide.
              </p>

             </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

              {features.map((feature) => {
                const Icon = feature.icon;

                 return (
                   <div
                    key={feature.title}
                    className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                  >
                    <Icon className="h-10 w-10 text-[#1a73e8]" />

                    <h3 className="mt-6 text-xl font-semibold text-[#000000]">
                      {feature.title}
                    </h3>

                    <p className="mt-4 text-[#717e95]">
                      {feature.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </section>




{/* VALUES */}



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
text-center
text-4xl
font-bold
text-[#000000]
"
>

Our Core Values

</h2>





<div
className="
mt-12
grid
sm:grid-cols-2
lg:grid-cols-4
gap-6
"
>


{
values.map((value,index)=>{


const Icon=value.icon;


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
transition
"
>


<div
className="
h-14
w-14
rounded-xl
bg-blue-100
flex
items-center
justify-center
"
>

<Icon
className="text-[#1a73e8]"
/>


</div>




<h3
className="
mt-5
text-xl
font-bold
text-[#000000]
"
>

{value.title}

</h3>




<p
className="
mt-3
text-[#717e95]
"
>

{value.description}

</p>


</div>


)


})


}


</div>


</section>









{/* CTA */}


<div className="p-6">
      <section className="py-24">

           <div className="mx-auto max-w-5xl rounded-[40px] bg-gradient-to-r from-[#1c74e9] to-[#1a529b] px-3 py-20 text-center text-white">

             <h2 className="text-5xl font-bold">
              Join the Future of Connectivity
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-cyan-100">
               Experience secure verification services and affordable
               global mobile connectivity with VerifySIM.
             </p>

             <button className="mt-10 rounded-xl bg-white px-10 py-4 font-semibold text-[#071B4D] transition hover:scale-105">
              Create Free Account
            </button>

          </div>

        </section>
        </div>





</main>
<Footer/>
</>

)

}




// "use client";

// import Navbar from "@/components/Home/Navbar";
// import Footer from "@/components/Home/footer";

// import {
//   Globe2,
//   ShieldCheck,
//   Zap,
//   Users,
//   Wifi,
//   Smartphone,
//   Rocket,
//   CheckCircle2,
//   Target,
//   Sparkles,
//   ArrowRight,
// } from "lucide-react";

// const values = [
//   {
//     title: "Global Connectivity",
//     description:
//       "Providing reliable eSIM and verification services across the world with instant access and consistent performance.",
//     icon: Globe2,
//   },
//   {
//     title: "Security First",
//     description:
//       "Protecting customer privacy through secure infrastructure, encrypted transactions, and trusted technology.",
//     icon: ShieldCheck,
//   },
//   {
//     title: "Speed & Reliability",
//     description:
//       "Instant activation, fast verification, and highly available services built for modern digital lifestyles.",
//     icon: Zap,
//   },
//   {
//     title: "Customer Driven",
//     description:
//       "Everything we build is focused on making connectivity easier, faster, and more affordable.",
//     icon: Users,
//   },
// ];

// const features = [
//   {
//     title: "Global eSIM",
//     description:
//       "Purchase affordable mobile data plans for over 190 countries without changing your physical SIM.",
//     icon: Smartphone,
//   },
//   {
//     title: "Verification Numbers",
//     description:
//       "Receive SMS verification codes securely for supported online platforms and applications.",
//     icon: ShieldCheck,
//   },
//   {
//     title: "Reliable Network",
//     description:
//       "Premium network partners ensure stable and high-speed mobile connectivity worldwide.",
//     icon: Wifi,
//   },
//   {
//     title: "Instant Delivery",
//     description:
//       "Most purchases are activated within seconds, allowing you to connect immediately.",
//     icon: Rocket,
//   },
// ];

// const stats = [
//   {
//     number: "190+",
//     label: "Countries",
//   },
//   {
//     number: "99.9%",
//     label: "Service Availability",
//   },
//   {
//     number: "24/7",
//     label: "Customer Support",
//   },
//   {
//     number: "Millions",
//     label: "Successful Connections",
//   },
// ];

// export default function AboutPage() {
//   return (
//     <>
//       <Navbar />

//       <main className="bg-white text-slate-900">

//         {/* Hero */}

//         <section className="relative overflow-hidden bg-gradient-to-br from-[#071B4D] via-[#0C5AA6] to-cyan-600 text-white">

//           <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]" />

//           <div className="relative mx-auto max-w-7xl px-6 py-28 lg:flex lg:items-center lg:justify-between">

//             <div className="max-w-3xl">

//               <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
//                 <Sparkles className="h-4 w-4" />
//                 Trusted Global Connectivity Platform
//               </div>

//               <h1 className="mt-8 text-5xl font-bold leading-tight lg:text-7xl">
//                 Building the Future of
//                 <span className="block text-cyan-300">
//                   Global Connectivity
//                 </span>
//               </h1>

//               <p className="mt-8 text-xl leading-9 text-slate-200">
//                 VerifySIM helps individuals, travelers, remote teams,
//                 startups, and enterprises stay connected through secure
//                 verification numbers and affordable data-only eSIM
//                 technology anywhere in the world.
//               </p>

//               <div className="mt-10 flex flex-wrap gap-5">

//                 <button className="rounded-xl bg-white px-8 py-4 font-semibold text-[#071B4D] transition hover:scale-105">
//                   Get Started
//                 </button>

//                 <button className="flex items-center gap-2 rounded-xl border border-white/30 px-8 py-4 hover:bg-white/10">
//                   Learn More
//                   <ArrowRight size={18} />
//                 </button>

//               </div>

//             </div>

//             <div className="mt-16 grid grid-cols-2 gap-5 lg:mt-0">

//               {stats.map((item) => (
//                 <div
//                   key={item.label}
//                   className="rounded-3xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur"
//                 >
//                   <h2 className="text-4xl font-bold">{item.number}</h2>
//                   <p className="mt-2 text-slate-200">{item.label}</p>
//                 </div>
//               ))}

//             </div>

//           </div>
//         </section>

//         {/* Story */}

//         <section className="mx-auto max-w-7xl px-6 py-24">

//           <div className="grid gap-16 lg:grid-cols-2">

//             <div>

//               <span className="font-semibold uppercase tracking-widest text-cyan-600">
//                 About VerifySIM
//               </span>

//               <h2 className="mt-4 text-4xl font-bold">
//                 Making Global Communication Simple
//               </h2>

//               <p className="mt-8 text-lg leading-8 text-slate-600">
//                 VerifySIM is a modern digital connectivity platform
//                 dedicated to removing the barriers that prevent people
//                 from staying connected around the world.
//               </p>

//               <p className="mt-6 text-lg leading-8 text-slate-600">
//                 Whether you need a verification number for online
//                 services or an affordable data-only eSIM while traveling,
//                 our platform delivers fast, secure, and reliable digital
//                 connectivity in just a few clicks.
//               </p>

//             </div>

//             <div className="rounded-3xl bg-slate-50 p-10">

//               <div className="space-y-8">

//                 <div className="flex gap-5">

//                   <Target className="mt-1 text-cyan-600" />

//                   <div>

//                     <h3 className="font-bold text-xl">
//                       Our Mission
//                     </h3>

//                     <p className="mt-2 text-slate-600">
//                       To make global connectivity simple, affordable,
//                       secure, and accessible for everyone.
//                     </p>

//                   </div>

//                 </div>

//                 <div className="flex gap-5">

//                   <Rocket className="mt-1 text-cyan-600" />

//                   <div>

//                     <h3 className="font-bold text-xl">
//                       Our Vision
//                     </h3>

//                     <p className="mt-2 text-slate-600">
//                       To become the world's most trusted digital
//                       connectivity platform for travelers, businesses,
//                       developers, and everyday users.
//                     </p>

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </section>

//         {/* Features */}

//         <section className="bg-slate-50 py-24">

//           <div className="mx-auto max-w-7xl px-6">

//             <div className="text-center">

//               <h2 className="text-4xl font-bold">
//                 What We Offer
//               </h2>

//               <p className="mt-4 text-slate-600">
//                 Everything you need to stay connected worldwide.
//               </p>

//             </div>

//             <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

//               {features.map((feature) => {
//                 const Icon = feature.icon;

//                 return (
//                   <div
//                     key={feature.title}
//                     className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
//                   >
//                     <Icon className="h-10 w-10 text-cyan-600" />

//                     <h3 className="mt-6 text-xl font-semibold">
//                       {feature.title}
//                     </h3>

//                     <p className="mt-4 text-slate-600">
//                       {feature.description}
//                     </p>

//                   </div>
//                 );
//               })}

//             </div>

//           </div>

//         </section>

//         {/* Values */}

//         <section className="mx-auto max-w-7xl px-6 py-24">

//           <div className="text-center">

//             <h2 className="text-4xl font-bold">
//               Our Core Values
//             </h2>

//           </div>

//           <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

//             {values.map((value) => {
//               const Icon = value.icon;

//               return (
//                 <div
//                   key={value.title}
//                   className="rounded-3xl border p-8 transition hover:border-cyan-500 hover:shadow-lg"
//                 >
//                   <Icon className="h-10 w-10 text-cyan-600" />

//                   <h3 className="mt-6 text-xl font-bold">
//                     {value.title}
//                   </h3>

//                   <p className="mt-4 text-slate-600">
//                     {value.description}
//                   </p>

//                 </div>
//               );
//             })}

//           </div>

//         </section>

//         {/* Why */}

//         <section className="bg-[#071B4D] py-24 text-white">

//           <div className="mx-auto max-w-6xl px-6 text-center">

//             <h2 className="text-4xl font-bold">
//               Why Millions Choose VerifySIM
//             </h2>

//             <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

//               {[
//                 "Instant eSIM Activation",
//                 "Affordable Pricing",
//                 "Trusted Infrastructure",
//                 "Worldwide Coverage",
//               ].map((item) => (
//                 <div
//                   key={item}
//                   className="rounded-2xl border border-white/10 bg-white/5 p-6"
//                 >
//                   <CheckCircle2 className="mx-auto mb-4 h-10 w-10 text-cyan-300" />
//                   <p>{item}</p>
//                 </div>
//               ))}

//             </div>

//           </div>

//         </section>

//         {/* CTA */}

//         <section className="py-24">

//           <div className="mx-auto max-w-5xl rounded-[40px] bg-gradient-to-r from-cyan-600 to-[#071B4D] px-8 py-20 text-center text-white">

//             <h2 className="text-5xl font-bold">
//               Join the Future of Connectivity
//             </h2>

//             <p className="mx-auto mt-6 max-w-3xl text-lg text-cyan-100">
//               Experience secure verification services and affordable
//               global mobile connectivity with VerifySIM.
//             </p>

//             <button className="mt-10 rounded-xl bg-white px-10 py-4 font-semibold text-[#071B4D] transition hover:scale-105">
//               Create Free Account
//             </button>

//           </div>

//         </section>

//       </main>

//       <Footer />
//     </>
//   );
// }