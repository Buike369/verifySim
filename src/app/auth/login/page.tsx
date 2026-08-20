"use client";

import {
  Globe2,
  ShieldCheck,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  Smartphone,
  Wifi,
} from "lucide-react";

import { useState } from "react";



export default function LoginPage() {


const [showPassword,setShowPassword] = useState(false);



return (

<main
className="
min-h-screen
bg-[#f7f9fc]
flex
items-center
justify-center
px-5
py-10
"
>


<div
className="
w-full
max-w-6xl
grid
lg:grid-cols-2
bg-white
rounded-[32px]
overflow-hidden
shadow-2xl
border
border-gray-100
"
>







{/* LEFT INFORMATION PANEL */}



<section
className="
hidden
lg:flex
relative
flex-col
justify-between
overflow-hidden
bg-gradient-to-br
from-[#1a73e8]
via-[#4276c7]
to-[#5b8ad2]
text-white
p-12
"
>



<div
className="
absolute
top-0
right-0
h-96
w-96
rounded-full
bg-white/10
blur-3xl
"
/>





<div
className="
relative
"
>

<a href="/">
<div
className="
flex
items-center
gap-3
"
>


<div
className="
h-12
w-12
rounded-2xl
bg-white/10
flex
items-center
justify-center
"
>

<Globe2/>

</div>



<h1
className="
text-2xl
font-bold
"
>

VerifySIM

</h1>


</div>
</a>






<h2
className="
mt-16
text-5xl
font-bold
leading-tight
"
>

Welcome Back.
Stay Connected
Worldwide.

</h2>





<p
className="
mt-6
text-blue-100
text-lg
leading-relaxed
"
>

Manage your verification numbers,
data-only eSIM plans, and global
connectivity from one secure platform.

</p>



</div>









{/* Benefits */}


<div
className="
relative
space-y-5
"
>


<div
className="
flex
items-center
gap-3
"
>

<CheckCircle2/>

Instant OTP Verification

</div>




<div
className="
flex
items-center
gap-3
"
>

<Wifi/>

Global Data Connectivity

</div>





<div
className="
flex
items-center
gap-3
"
>

<ShieldCheck/>

Enterprise Security

</div>



</div>






</section>









{/* LOGIN FORM */}



<section
className="
p-6
sm:p-10
lg:p-14
"
>


<div
className="
max-w-md
mx-auto
"
>





{/* Mobile Logo */}

<div
className="
lg:hidden
flex
items-center
gap-3
mb-8
"
>


<div
className="
rounded-xl
bg-[#071B4D]
p-3
text-white
"
>

<Globe2/>

</div>



<h1
className="
text-2xl
font-bold
text-[#071B4D]
"
>

VerifySIM

</h1>


</div>









<h2
className="
text-3xl
font-bold
text-[#000000]
"
>

Sign in to your account

</h2>





<p
className="
mt-3
text-[#686b71]
"
>

Access your virtual numbers and
global eSIM services.

</p>









<form
className="
mt-8
space-y-5
"
>






{/* Email */}


<div>

<label
className="
text-sm
font-medium
text-[#686b71]
"
>

Email Address

</label>



<div
className="
mt-2
flex
items-center
gap-3
rounded-xl
border
border-[#dadadbd9]
px-4
py-3
focus-within:ring-2
focus-within:ring-blue-200
"
>


<Mail
size={20}
className="
text-gray-400
"
/>



<input

type="email"

placeholder="name@example.com"

className="
w-full
outline-none
"

 />


</div>


</div>









{/* Password */}



<div>

<div
className="
flex
justify-between
items-center
"
>


<label
className="
text-sm
font-medium
text-[#686b71]
"
>

Password

</label>


<a
className="
text-sm
font-medium
text-[#000000]
cursor-pointer
"
>

Forgot password?

</a>


</div>






<div
className="
mt-2
flex
items-center
gap-3
rounded-xl
border
border-[#dadadbd9]
px-4
py-3
"
>


<Lock
size={20}
className="
text-gray-400
"
/>





<input

type={
showPassword
?
"text"
:
"password"
}

placeholder="Enter password"

className="
w-full
outline-none
"

/>





<button
type="button"
onClick={()=>setShowPassword(!showPassword)}
className="
text-gray-500
"
>

{
showPassword
?
<EyeOff size={20}/>
:
<Eye size={20}/>
}


</button>



</div>


</div>









{/* Remember */}


<div
className="
flex
items-center
justify-between
"
>


<label
className="
flex
items-center
gap-2
text-sm
text-[#686b71]
"
>


<input
type="checkbox"
/>


Remember me


</label>



</div>









<button
className="
w-full
rounded-xl
bg-[#2974df]
py-4
font-semibold
text-white
shadow-lg
shadow-blue-900/20
hover:bg-[#0b2d73]
transition
"
>

Login

</button>









<div
className="
relative
my-7
"
>

<div
className="
border-t
border-[#ceced4]
"
/>


<span
className="
absolute
left-1/2
-translate-x-1/2
-translate-y-1/2
bg-white
px-4
text-sm
text-gray-500
"
>

OR

</span>


</div>









<button
className="
w-full
rounded-xl
border
border-[#ceced4]
py-4
font-medium
text-[#686b71]
hover:bg-gray-50
transition
"
>

Continue with Google

</button>









<div
className="
mt-8
rounded-2xl
bg-[#f2f6ff]
p-5
"
>


<div
className="
flex
items-center
gap-3
text-[#000000]
font-semibold
"
>

<Smartphone size={20}/>

Secure Device Access

</div>



<p
className="
mt-2
text-sm
text-gray-600
"
>

Your account is protected with
secure authentication technology.

</p>


</div>








<p
className="
mt-8
text-center
text-sm
text-gray-600
"
>

Don't have an account?

<a href="/auth/register">
<span
className="
ml-1
font-semibold
text-[#000000]
cursor-pointer
"
>

Create account

</span>
</a>


</p>





</form>



</div>


</section>





</div>


</main>


)

}