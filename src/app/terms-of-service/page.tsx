import {
  FileText,
  ShieldCheck,
  UserCheck,
  CreditCard,
  Smartphone,
  AlertCircle,
  Globe2,
  Scale,
} from "lucide-react";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/footer";



const termsSections = [

{
title:"Acceptance of Terms",
icon:FileText,
content:
`
By creating an account or using VerifySIM services, you agree
to these Terms of Service.

These terms govern your access to verification numbers,
data-only eSIM services, account features, payments,
and all related products provided by VerifySIM.
`
},


{
title:"VerifySIM Services",
icon:Globe2,
content:
`
VerifySIM provides digital connectivity solutions including:

• Virtual verification numbers for supported platforms.
• Data-only eSIM plans for global connectivity.
• Account management and digital service tools.

Service availability may vary depending on country,
network partners, and regulatory requirements.
`
},



{
title:"Account Responsibilities",
icon:UserCheck,
content:
`
You are responsible for maintaining accurate account
information and protecting your login credentials.

You agree to:

• Provide truthful information.
• Keep your account secure.
• Notify us of unauthorized access.
• Use services according to applicable laws.
`
},



{
title:"Payments and Billing",
icon:CreditCard,
content:
`
Payments made through VerifySIM are processed securely.

By purchasing a service, you agree that:

• Pricing is displayed before confirmation.
• Charges are based on selected services.
• You are responsible for maintaining valid payment details.
• Some digital services may begin immediately after purchase.
`
},



{
title:"eSIM Usage",
icon:Smartphone,
content:
`
eSIM services require compatible devices and network support.

Users are responsible for:

• Ensuring device compatibility.
• Following carrier requirements.
• Managing data usage and connectivity settings.

VerifySIM is not responsible for device limitations
or unsupported hardware.
`
},



{
title:"Acceptable Use",
icon:ShieldCheck,
content:
`
You agree not to use VerifySIM services for illegal,
fraudulent, abusive, or unauthorized activities.

Prohibited activities include:

• Identity abuse.
• Fraudulent registrations.
• Platform manipulation.
• Violations of applicable laws.
`
},



{
title:"Service Availability",
icon:AlertCircle,
content:
`
We work to maintain reliable services but cannot guarantee
uninterrupted availability.

Services may be affected by:

• Network provider limitations.
• Maintenance.
• Technical issues.
• Regulatory restrictions.
`
},



{
title:"Limitation of Liability",
icon:Scale,
content:
`
VerifySIM provides services on an "as available" basis.

To the maximum extent permitted by law, VerifySIM is not
liable for indirect losses, service interruptions, or issues
caused by third-party providers.
`
}

];





export default function TermsOfServicePage(){


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

<FileText size={16}/>

Legal Agreement

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

Terms of Service

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

Please review these terms carefully before using
VerifySIM services. They explain your rights,
responsibilities, and our service conditions.

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









{/* TERMS CONTENT */}



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
termsSections.map((section,index)=>{


const Icon = section.icon;


return (

<div
key={index}
className="
bg-white
rounded-3xl
border
border-gray-100
p-7
sm:p-10
hover:shadow-xl
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



</div>


)


})


}


</div>


</section>









{/* CTA */}



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
text-white
text-center
p-10
lg:p-14
"
>


<ShieldCheck
size={45}
className="mx-auto"
/>



<h2
className="
mt-6
text-3xl
font-bold
"
>

Safe And Trusted Connectivity

</h2>



<p
className="
mt-4
text-blue-100
max-w-2xl
mx-auto
"
>

By using VerifySIM, you agree to our commitment
to providing secure and reliable global connectivity.

</p>




<button
className="
mt-8
rounded-xl
bg-white
px-10
py-4
font-semibold
text-[#071B4D]
"
>

Contact Legal Team

</button>



</div>


</section>





</main>
<Footer/>
</>

)

}