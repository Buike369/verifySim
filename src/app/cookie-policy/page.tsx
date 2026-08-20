import {
  Cookie,
  ShieldCheck,
  Settings,
  BarChart3,
  Lock,
  Globe2,
  UserCheck,
  FileText,
} from "lucide-react";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/footer";



const cookieSections = [

{
title:"What Are Cookies?",
icon:Cookie,
content:
`
Cookies are small text files stored on your device when you
visit a website.

VerifySIM uses cookies and similar technologies to improve
website functionality, remember preferences, understand usage,
and provide a secure experience.
`
},


{
title:"How We Use Cookies",
icon:Settings,
content:
`
We use cookies to:

• Keep your account secure.
• Remember your preferences.
• Improve website performance.
• Provide better user experiences.
• Support authentication and account management.
`
},



{
title:"Types of Cookies We Use",
icon:Globe2,
content:
`
Essential Cookies:

Required for core platform functionality such as login,
security, and account access.

Performance Cookies:

Help us understand how users interact with our platform
so we can improve speed and usability.

Functional Cookies:

Remember settings and preferences to provide a personalized
experience.

Security Cookies:

Help detect suspicious activity and protect user accounts.
`
},




{
title:"Analytics Cookies",
icon:BarChart3,
content:
`
Analytics cookies help us measure website performance,
traffic patterns, and user behavior.

The information collected is used only to improve our
services and user experience.
`
},




{
title:"Managing Your Cookie Preferences",
icon:UserCheck,
content:
`
You can control or remove cookies through your browser
settings.

Please note that disabling certain cookies may affect some
features, including account access and platform functionality.
`
},




{
title:"Cookie Security",
icon:Lock,
content:
`
VerifySIM uses security measures designed to protect cookie
data and prevent unauthorized access.

Cookies are only used for legitimate service, security,
and user experience purposes.
`
},




{
title:"Third-Party Cookies",
icon:FileText,
content:
`
Some trusted third-party providers may use cookies to help
us provide services such as payment processing, analytics,
customer support, or security monitoring.

These providers follow their own privacy policies.
`
}

];





export default function CookiePolicyPage(){


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

<Cookie size={17}/>

Website Transparency

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

Cookie Policy

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

Learn how VerifySIM uses cookies and similar
technologies to provide secure, reliable,
and personalized connectivity services.

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









{/* COOKIE CONTENT */}



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
cookieSections.map((section,index)=>{


const Icon = section.icon;


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
text-[#686b71]
leading-relaxed
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









{/* TRUST SECTION */}



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

Your Privacy, Our Responsibility

</h2>




<p
className="
mt-5
max-w-2xl
mx-auto
text-blue-100
"
>

VerifySIM uses cookies responsibly to maintain
security, improve performance, and deliver a
better global connectivity experience.

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

Manage Cookie Settings

</button>



</div>


</section>





</main>
<Footer/>
</>

)

}