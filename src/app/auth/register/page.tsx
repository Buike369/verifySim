"use client";

import {
  Globe2,
  ShieldCheck,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  CheckCircle2,
  Smartphone,
} from "lucide-react";

import { useState } from "react";



export default function SignupPage() {


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





{/* LEFT BRAND SECTION */}


<section
className="
hidden
lg:flex
relative
bg-gradient-to-br
from-[#1a73e8]
via-[#4276c7]
to-[#5b8ad2]
text-white
p-12
flex-col
justify-between
overflow-hidden
"
>


<div
className="
absolute
top-0
right-0
h-72
w-72
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

VerifyeSIM

</h1>


</div>
</a>






<h2
className="
mt-14
text-5xl
font-bold
leading-tight
"
>

Connect
Globally.
Verify
Instantly.

</h2>




<p
className="
mt-6
text-blue-100
text-lg
leading-relaxed
"
>

Access secure verification numbers and
affordable data-only eSIM plans from
anywhere in the world.

</p>


</div>







<div
className="
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

190+ Countries Coverage

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




<div
className="
flex
items-center
gap-3
"
>

<Smartphone/>

Instant eSIM Activation

</div>



</div>



</section>









{/* SIGNUP FORM */}



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
bg-[#071B4D]
text-white
rounded-xl
p-3
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

Create your account

</h2>



<p
className="
mt-3
text-[#686b71]
"
>

Start using global verification numbers
and data-only eSIM plans today.

</p>









<form
className="
mt-8
space-y-5
"
>





{/* Name */}

<div>

<label
className="
text-sm
font-medium
text-[#686b71]
"
>

Full Name

</label>


<div
className="
mt-2
flex
items-center
gap-3
border
border-[#e0e5ed]
rounded-xl
px-4
py-3
focus-within:ring-2
focus-within:ring-blue-200
"
>

<User
size={20}
className="text-gray-400"
/>


<input

type="text"

placeholder="John Smith"

className="
w-full
outline-none
"

 />

</div>


</div>







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
border
border-[#e0e5ed]
rounded-xl
px-4
py-3
"
>

<Mail
size={20}
className="text-gray-400"
/>


<input

type="email"

placeholder="example@email.com"

className="
w-full
outline-none
"

 />

</div>


</div>









{/* Password */}


<div>

<label
className="
text-sm
font-medium
text-[#686b71]
"
>

Password

</label>


<div
className="
mt-2
flex
items-center
gap-3
border
border-[#e0e5ed]
rounded-xl
px-4
py-3
"
>


<Lock
size={20}
className="text-gray-400"
/>



<input

type={
showPassword
?
" text "
:
"password"
}

placeholder="Create password"

className="
w-full
outline-none
"

 />



<button
type="button"
onClick={()=>setShowPassword(!showPassword)}
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








{/* Terms */}


<label
className="
flex
items-start
gap-3
text-sm
text-[#686b71]
"
>

<input
type="checkbox"
className="mt-1"
/>


<span>

I agree to the Terms of Service
and Privacy Policy

</span>


</label>







<button
className="
w-full
rounded-xl
bg-[#3676d4]
py-4
text-white
font-semibold
shadow-lg
shadow-blue-900/20
hover:bg-[#0b2d73]
transition
"
>

Create Account

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
border-[#6a72825e]
"
/>

<span
className="
absolute
left-1/2
-translate-x-1/2
-top-3
bg-white
px-4
text-sm
text-[#6a72825e]
"
>

OR

</span>

</div>







<button
type="button"
className="
w-full
border
border-[#e0e5ed]
rounded-xl
py-4
font-medium
text-gray-700
hover:bg-gray-50
transition
"
>

Continue with Google

</button>







<p
className="
mt-8
text-center
text-sm
text-[#686b71]
"
>

Already have an account?
<a href="/auth/login">

<span
className="
ml-1
font-semibold
text-[#000000]
cursor-pointer
"
>

Login

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