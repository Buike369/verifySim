


import {
  Globe2,
  ShieldCheck,
  Mail,
//   Twitter,
//   Linkedin,
//   Facebook,
//   Instagram,
  ArrowRight,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const products = [
  "Verification Numbers",
  "Data Only eSIM",
  "Global Plans",
  "Business Solutions",
];


const company = [
  { name:"About Us", href:"/about-us"},
  {name:"Pricing", href:"/pricing"},
  {name:"Contact", href:"/contact"},
  {name:"Help Center", href:"/help-center"},
];


const legal = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "Cookie Policy", href: "/cookie-policy" },
];




export default function Footer(){


return (


<footer
className="
relative
overflow-hidden
bg-[#f7f9fc]
text-[#000000]
"
>


{/* Background */}

<div
className="
absolute
top-0
right-0
h-96
w-96
rounded-full
bg-blue-400/10
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
pt-16
pb-8
"
>





{/* Main Footer */}

<div
className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-5
gap-10
"
>





{/* Brand */}


<div
className="
lg:col-span-2
"
>


<div
className="
flex
items-center
gap-3
"
>

<div
className="
flex
h-12
w-12
items-center
justify-center
rounded-2xl
bg-white/10
"
>

<Globe2/>

</div>



<h2
className="
text-2xl
font-bold
"
>

VerifySIM

</h2>


</div>





<p
className="
mt-5
max-w-sm
text-[#848d99]
leading-relaxed
"
>

Connecting the world with secure verification
numbers and affordable data-only eSIM solutions
across global destinations.

</p>





<div
className="
mt-6
flex
items-center
gap-3
text-sm
text-[#848d99]
"
>

<ShieldCheck size={18}/>

Secure global connectivity platform

</div>




</div>







{/* Products */}


<div>

<h3
className="
font-semibold
text-lg
mb-5
"
>

Products

</h3>


<ul className="
space-y-3
text-[#848d99]
"
>

{
products.map((item)=>(
<li
key={item}
className="
hover:text-black
cursor-pointer
transition
"
>
{item}
</li>
))
}

</ul>


</div>







{/* Company */}


<div>

<h3
className="
font-semibold
text-lg
mb-5
"
>

Company

</h3>


<ul className="
space-y-3
text-[#848d99]
"
>

{
company.map((item,id)=>(
<li
key={id}
className="
hover:text-black
cursor-pointer
transition
"
>
<a href={item.href}>
{item.name}
</a>  
</li>
))
}

</ul>


</div>







{/* Newsletter */}


<div>


<h3
className="
font-semibold
text-lg
mb-5
"
>

Stay Connected

</h3>



<p
className="
text-sm
text-[#848d99]
mb-4
"
>

Get updates about new countries,
plans and connectivity features.

</p>




<div
className="
flex
items-center
rounded-xl
bg-white
p-1
"
>


<input

placeholder="Email address"

className="
w-full
bg-transparent
px-4
py-3
text-gray-900
outline-none
text-sm
"

/>



<button
className="
rounded-lg
bg-[#1a73e8]
p-3
text-white
"
>

<ArrowRight
size={18}
/>

</button>



</div>





</div>



</div>








{/* Security Bar */}


<div
className="
mt-14
border-t
border-[#848d991c]
pt-8
flex
flex-col
md:flex-row
items-center
justify-between
gap-6
"
>


<div
className="
flex
items-center
gap-4
"
>


<a
className="
rounded-full
bg-white
p-3
hover:bg-white/20
transition
cursor-pointer
"
>

<FaLinkedinIn size={16}/>

</a>


<a
className="
rounded-full
bg-white
p-3
hover:bg-white/20
transition
cursor-pointer
"
>

<FaFacebookF size={16}/>

</a>



<a
className="
rounded-full
bg-white
p-3
hover:bg-white/20
transition
cursor-pointer
"
>

<FaXTwitter size={16}/>

</a>



<a
className="
rounded-full
bg-white
p-3
hover:bg-white/20
transition
cursor-pointer
"
>

<FaInstagram size={16}/>

</a>
<a
className="
rounded-full
bg-white
p-3
hover:bg-white/20
transition
cursor-pointer
"
>

<FaYoutube size={16}/>

</a>
<a
className="
rounded-full
bg-white
p-3
hover:bg-white/20
transition
cursor-pointer
"
>

<FaTiktok size={16}/>

</a>


</div>






<div
className="
flex
items-center
gap-2
text-sm
text-[#848d99]
"
>

<Mail size={16}/>

support@verifysim.com

</div>



</div>









{/* Bottom Copyright */}


<div
className="
mt-8
border-t
border-[#848d991c]
pt-6
flex
flex-col
md:flex-row
justify-between
items-center
gap-4
text-sm
text-[#848d999e]
"
>


<p>
© 2026 VerifySIM. All rights reserved.
</p>



<div
className="
flex
gap-5
"
>

{
legal.map((item,id)=>(
<span
key={id}
className="
hover:text-black
cursor-pointer
transition
"
>
  <a href={item.href}>
    {item.name}
  </a>
</span>
))
}

</div>



</div>





</div>


</footer>


)

}