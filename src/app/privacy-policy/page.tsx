import {
  ShieldCheck,
  Globe2,
  Lock,
  Database,
  UserCheck,
  FileText,
} from "lucide-react";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/footer";



const sections = [

{
title:"Information We Collect",
icon:Database,
content:
`
We collect information necessary to provide and improve VerifySIM services.

This may include:

• Account information such as your name, email address, and profile details.
• Transaction information including purchases, payments, and service usage.
• Device information required for security and service optimization.
• Verification number and eSIM usage information.
`
},


{
title:"How We Use Your Information",
icon:UserCheck,
content:
`
We use collected information to:

• Provide verification number and eSIM services.
• Process payments and manage transactions.
• Improve platform performance and user experience.
• Prevent fraud, abuse, and unauthorized access.
• Communicate important account and service updates.
`
},



{
title:"Data Security",
icon:Lock,
content:
`
VerifySIM uses industry-standard security practices to protect your information.

We implement appropriate technical and organizational measures including secure
authentication, encrypted communication, access controls, and monitoring systems.
`
},



{
title:"Information Sharing",
icon:Globe2,
content:
`
We do not sell your personal information.

We may share limited information with trusted service providers who help us operate
our platform, process payments, provide network services, or comply with legal
requirements.
`
},



{
title:"Your Privacy Rights",
icon:UserCheck,
content:
`
Depending on your location, you may have rights to:

• Access your personal information.
• Request correction of inaccurate data.
• Request deletion of your information.
• Manage communication preferences.
• Withdraw consent where applicable.
`
},


{
title:"Cookies and Tracking",
icon:FileText,
content:
`
VerifySIM may use cookies and similar technologies to improve functionality,
remember preferences, analyze usage, and provide a better user experience.

You can control cookie preferences through your browser settings.
`
}

];





export default function PrivacyPolicyPage(){



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
bg-white
py-20
lg:py-28
relative
overflow-hidden
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
bg-blue-100
px-5
py-2
rounded-full
text-sm
font-medium
text-[#1a529b]
"
>

<ShieldCheck size={16}/>

Your Privacy Matters

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

Privacy Policy

</h1>





<p
className="
mt-6
max-w-3xl
mx-auto
text-lg
text-[#686b71]
"
>

At VerifySIM, we respect your privacy and are committed
to protecting your personal information while providing
global connectivity services.

</p>



<p
className="
mt-5
text-sm
text-gray-500
"
>

Last Updated: August 2026

</p>


</div>


</section>









{/* POLICY CONTENT */}



<section
className="
max-w-5xl
mx-auto
px-5
sm:px-8
lg:px-10
py-20
"
>


<div
className="
space-y-6
"
>


{
sections.map((section,index)=>{


const Icon=section.icon;


return (

<article
key={index}
className="
bg-white
rounded-3xl
border
border-gray-100
p-7
sm:p-10
hover:shadow-lg
transition
"
>


<div
className="
flex
items-center
gap-4
"
>


<div
className="
h-12
w-12
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



<h2
className="
text-2xl
font-bold
text-[#000000]
"
>

{section.title}

</h2>


</div>





<p
className="
mt-6
whitespace-pre-line
leading-relaxed
text-[#686b71]
"
>

{section.content}

</p>



</article>


)


})


}


</div>


</section>









{/* TRUST CTA */}



<section
className="
max-w-5xl
mx-auto
px-5
pb-20
"
>


<div
className="
rounded-[32px]
bg-[#1a73e8]
p-10
lg:p-14
text-center
text-white
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
font-bold
"
>

Secure Global Connectivity

</h2>




<p
className="
mt-4
text-blue-100
max-w-2xl
mx-auto
"
>

Your trust is important to us.
VerifySIM continues to improve security,
privacy, and transparency.

</p>




<button
className="
mt-8
rounded-xl
bg-white
px-8
py-4
font-semibold
text-[#071B4D]
"
>

Contact Privacy Team

</button>



</div>


</section>





</main>
<Footer/>
</>

)

}