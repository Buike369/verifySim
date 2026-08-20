"use client";

import {
  Globe2,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  ShieldCheck,
  Send,
  Headphones,
} from "lucide-react";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/footer";




const contactMethods = [

{
title:"Email Support",
description:"Get assistance from our support team.",
value:"support@verifysim.com",
icon:Mail
},


{
title:"Live Chat",
description:"Chat with our connectivity specialists.",
value:"Available 24/7",
icon:MessageCircle
},


{
title:"Phone Support",
description:"Speak with our customer care team.",
value:"+1 (800) 000-0000",
icon:Phone
}


];





export default function ContactPage(){



return (

  <>
  <Navbar/>

<main
className="
min-h-screen
bg-[#f7f9fc]
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

Global Customer Support

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

Let's Connect With VerifySIM

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

Have questions about eSIM plans,
verification numbers, payments, or your account?
Our team is ready to help.

</p>


</div>


</section>









{/* CONTACT AREA */}



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
lg:grid-cols-3
gap-8
"
>









{/* Contact Information */}


<div
className="
space-y-6
"
>


{
contactMethods.map((item,index)=>{


const Icon=item.icon;


return (

<div
key={index}
className="
bg-white
rounded-3xl
border
border-[#dcebff]
p-7
hover:shadow-xl
transition
"
>


<div
className="
h-14
w-14
rounded-2xl
bg-blue-100
flex
items-center
justify-center
"
>

<Icon
className="text-[#1a73e8]"
size={28}
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

{item.title}

</h3>



<p
className="
mt-2
text-[#717e95]
"
>

{item.description}

</p>




<p
className="
mt-4
font-semibold
text-[#000]
"
>

{item.value}

</p>


</div>


)

})


}






<div
className="
rounded-3xl
bg-[#1a73e8]
p-7
text-white
"
>


<div
className="
flex
items-center
gap-3
"
>

<ShieldCheck/>

Secure Communication

</div>




<p
className="
mt-4
text-blue-100
"
>

Your information is protected with
enterprise-grade security.

</p>


</div>




</div>









{/* FORM */}



<div
className="
lg:col-span-2
bg-white
rounded-[32px]
border
border-[#dcebff]
p-8
sm:p-10
"
>


<div>

<h2
className="
text-3xl
font-bold
text-[#000000]
"
>

Send Us A Message

</h2>



<p
className="
mt-3
text-[#717e95]
"
>

Fill out the form and our team will
respond as soon as possible.

</p>


</div>








<form
className="
mt-8
space-y-5
"
>






<div
className="
grid
sm:grid-cols-2
gap-5
"
>


<div>

<label
className="
text-sm
font-medium
text-[#000]
"
>

Full Name

</label>


<input

placeholder="John Smith"

className="
mt-2
w-full
rounded-xl
border
border-[#dcebff]
px-4
py-3
outline-none
focus:ring-2
focus:ring-blue-200
placeholder:text-[#727c895e]
"

/>


</div>






<div>

<label
className="
text-sm
font-medium
text-[#000]
"
>

Email Address

</label>


<input

type="email"

placeholder="example@email.com"

className="
mt-2
w-full
rounded-xl
border
border-[#dcebff]
px-4
py-3
outline-none
focus:ring-2
focus:ring-blue-200
placeholder:text-[#727c895e]
"

/>


</div>



</div>









<div>

<label
className="
text-sm
font-medium
text-[#000]
"
>

Subject

</label>


<input

placeholder="How can we help?"

className="
mt-2
w-full
rounded-xl
border
border-[#dcebff]
px-4
py-3
outline-none
placeholder:text-[#727c895e]
"

/>


</div>








<div>

<label
className="
text-sm
font-medium
text-[#000]
"
>

Message

</label>


<textarea

rows={6}

placeholder="Write your message..."

className="
mt-2
w-full
rounded-xl
border
border-[#dcebff]
px-4
py-3
outline-none
resize-none
placeholder:text-[#727c895e]
"

/>


</div>







<button
className="
flex
items-center
justify-center
gap-3
w-full
rounded-xl
bg-[#1a73e8]
py-4
font-semibold
text-white
hover:bg-[#0b2d73]
transition
"
>

<Send size={18}/>

Send Message

</button>




</form>



</div>



</div>


</section>









{/* OFFICE / SUPPORT HOURS */}



<section
className="
bg-white
py-16
"
>


<div
className="
max-w-5xl
mx-auto
px-5
grid
sm:grid-cols-2
gap-6
"
>



<div
className="
rounded-3xl
bg-[#f7f9fc]
p-8
"
>


<div
className="
flex
items-center
gap-3
text-[#000000]
font-bold
"
>

<MapPin/>

Global Operations

</div>



<p
className="
mt-4
text-[#717e95]
"
>

Serving customers and businesses
across multiple countries worldwide.

</p>


</div>







<div
className="
rounded-3xl
bg-[#f7f9fc]
p-8
"
>


<div
className="
flex
items-center
gap-3
text-[#000000]
font-bold
"
>

<Clock/>

Support Hours

</div>



<p
className="
mt-4
text-[#717e95]
"
>

24/7 customer support for
global connectivity services.

</p>


</div>




</div>


</section>





</main>
<Footer/>
</>

)

}