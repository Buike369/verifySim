// "use client";

// import {
//   Smartphone,
//   Signal,
//   Wifi,
//   QrCode,
//   Copy,
//   RefreshCcw,
//   Settings,
//   Globe2,
//   Database,
//   CalendarDays,
//   ShieldCheck,
//   Download,
//   CheckCircle2,
//   SmartphoneIcon,
//   Router,
// } from "lucide-react";





// const networkInfo = [

// {
// title:"Network",
// value:"AT&T / T-Mobile",
// icon:Signal
// },

// {
// title:"Coverage",
// value:"United States",
// icon:Globe2
// },

// {
// title:"Speed",
// value:"5G Ready",
// icon:Wifi
// },

// {
// title:"Status",
// value:"Active",
// icon:CheckCircle2
// }

// ];






// export default function ManageEsimPage(){



// return (

// <main
// className="
// min-h-screen
// bg-[#f7f9fc]
// "
// >







// {/* HEADER */}



// <section
// className="
// bg-white
// border-b
// py-10
// "
// >


// <div
// className="
// max-w-7xl
// mx-auto
// px-5
// lg:px-10
// "
// >


// <div
// className="
// flex
// flex-col
// md:flex-row
// justify-between
// gap-6
// "
// >


// <div
// className="
// flex
// items-center
// gap-4
// "
// >


// <div
// className="
// w-14
// h-14
// rounded-2xl
// bg-blue-100
// flex
// items-center
// justify-center
// "
// >


// <Smartphone
// className="text-[#071B4D]"
// size={30}
// />


// </div>





// <div>

// <h1
// className="
// text-3xl
// font-bold
// text-[#071B4D]
// "
// >

// Manage eSIM

// </h1>


// <p
// className="
// text-gray-500
// "
// >

// Control your mobile data profile and connectivity.

// </p>


// </div>


// </div>








// <button
// className="
// bg-[#071B4D]
// text-white
// px-7
// py-4
// rounded-xl
// font-semibold
// flex
// items-center
// gap-2
// "
// >


// <RefreshCcw size={18}/>

// Renew Plan


// </button>




// </div>


// </div>


// </section>









// {/* MAIN CONTENT */}



// <section
// className="
// max-w-7xl
// mx-auto
// px-5
// lg:px-10
// py-10
// "
// >


// <div
// className="
// grid
// lg:grid-cols-3
// gap-8
// "
// >









// {/* ESIM CARD */}



// <div
// className="
// lg:col-span-2
// bg-white
// rounded-[36px]
// border
// p-8
// "
// >


// <div
// className="
// flex
// justify-between
// "
// >


// <div>

// <div
// className="
// flex
// items-center
// gap-3
// "
// >


// <span
// className="
// text-5xl
// "
// >

// 🇺🇸

// </span>



// <div>

// <h2
// className="
// text-2xl
// font-bold
// text-[#071B4D]
// "
// >

// USA Travel eSIM

// </h2>


// <p
// className="
// text-gray-500
// "
// >

// 10GB Data Plan • 30 Days

// </p>


// </div>


// </div>


// </div>




// <span
// className="
// bg-green-100
// text-green-700
// px-4
// py-2
// rounded-full
// font-semibold
// text-sm
// "
// >

// Active

// </span>



// </div>









// {/* DATA USAGE */}



// <div
// className="
// mt-8
// bg-[#f7f9fc]
// rounded-3xl
// p-6
// "
// >


// <div
// className="
// flex
// justify-between
// "
// >


// <h3
// className="
// font-semibold
// "
// >

// Data Usage

// </h3>


// <p
// className="
// font-bold
// text-[#071B4D]
// "
// >

// 6.4GB / 10GB

// </p>


// </div>





// <div
// className="
// mt-4
// h-3
// bg-gray-200
// rounded-full
// overflow-hidden
// "
// >


// <div
// className="
// bg-[#071B4D]
// h-full
// rounded-full
// w-[65%]
// "
// />


// </div>



// <p
// className="
// mt-3
// text-sm
// text-gray-500
// "
// >

// 3.6GB remaining

// </p>


// </div>









// {/* DETAILS */}



// <div
// className="
// mt-8
// grid
// sm:grid-cols-2
// gap-5
// "
// >



// <div
// className="
// border
// rounded-2xl
// p-5
// "
// >


// <p
// className="
// text-gray-500
// text-sm
// "
// >

// ICCID

// </p>


// <div
// className="
// mt-2
// flex
// justify-between
// "
// >


// <p
// className="
// font-semibold
// "
// >

// 89442000012345

// </p>


// <Copy size={18}/>


// </div>


// </div>







// <div
// className="
// border
// rounded-2xl
// p-5
// "
// >


// <p
// className="
// text-gray-500
// text-sm
// "
// >

// Activation Date

// </p>


// <p
// className="
// mt-2
// font-semibold
// "
// >

// Aug 01, 2026

// </p>


// </div>







// <div
// className="
// border
// rounded-2xl
// p-5
// "
// >


// <p
// className="
// text-gray-500
// text-sm
// "
// >

// Expiry Date

// </p>


// <p
// className="
// mt-2
// font-semibold
// "
// >

// Aug 30, 2026

// </p>


// </div>







// <div
// className="
// border
// rounded-2xl
// p-5
// "
// >


// <p
// className="
// text-gray-500
// text-sm
// "
// >

// Data Type

// </p>


// <p
// className="
// mt-2
// font-semibold
// "
// >

// Data Only

// </p>


// </div>



// </div>






// </div>









// {/* QR INSTALL */}



// <div
// className="
// bg-white
// rounded-[36px]
// border
// p-8
// "
// >


// <div
// className="
// flex
// items-center
// gap-3
// "
// >


// <QrCode
// className="text-[#071B4D]"
// />



// <h2
// className="
// text-xl
// font-bold
// text-[#071B4D]
// "
// >

// Install eSIM

// </h2>


// </div>






// <div
// className="
// mt-6
// bg-[#f7f9fc]
// rounded-3xl
// h-52
// flex
// items-center
// justify-center
// "
// >


// <QrCode
// size={90}
// className="text-[#071B4D]"
// />


// </div>






// <button
// className="
// mt-6
// w-full
// bg-[#071B4D]
// text-white
// rounded-xl
// py-4
// font-semibold
// flex
// justify-center
// items-center
// gap-2
// "
// >


// <Download size={18}/>

// Download QR Code


// </button>





// </div>






// </div>


// </section>









// {/* NETWORK INFORMATION */}



// <section
// className="
// max-w-7xl
// mx-auto
// px-5
// lg:px-10
// pb-10
// "
// >


// <h2
// className="
// text-2xl
// font-bold
// text-[#071B4D]
// "
// >

// Network Information

// </h2>






// <div
// className="
// mt-6
// grid
// sm:grid-cols-2
// lg:grid-cols-4
// gap-6
// "
// >


// {
// networkInfo.map((item,index)=>{


// const Icon=item.icon;


// return (

// <div
// key={index}
// className="
// bg-white
// border
// rounded-3xl
// p-6
// "
// >


// <Icon
// className="text-[#071B4D]"
// />


// <p
// className="
// mt-4
// text-gray-500
// "
// >

// {item.title}

// </p>


// <h3
// className="
// font-bold
// mt-1
// "
// >

// {item.value}

// </h3>


// </div>


// )


// })


// }


// </div>


// </section>









// {/* SETTINGS */}



// <section
// className="
// max-w-7xl
// mx-auto
// px-5
// lg:px-10
// pb-20
// "
// >


// <div
// className="
// bg-white
// rounded-[36px]
// border
// p-8
// "
// >


// <div
// className="
// flex
// items-center
// gap-3
// "
// >


// <Settings
// className="text-[#071B4D]"
// />


// <h2
// className="
// text-2xl
// font-bold
// text-[#071B4D]
// "
// >

// eSIM Settings

// </h2>


// </div>







// <div
// className="
// mt-6
// grid
// md:grid-cols-3
// gap-5
// "
// >


// <button
// className="
// border
// rounded-2xl
// p-5
// text-left
// "
// >


// <Router/>

// <p
// className="
// mt-3
// font-semibold
// "
// >

// APN Settings

// </p>


// </button>





// <button
// className="
// border
// rounded-2xl
// p-5
// text-left
// "
// >


// <SmartphoneIcon/>

// <p
// className="
// mt-3
// font-semibold
// "
// >

// Device Management

// </p>


// </button>





// <button
// className="
// border
// rounded-2xl
// p-5
// text-left
// "
// >


// <ShieldCheck/>

// <p
// className="
// mt-3
// font-semibold
// "
// >

// Security

// </p>


// </button>



// </div>


// </div>


// </section>





// </main>

// )

// }







// "use client";
// import {useState} from "react";

// import {
//   Smartphone,
//   Wifi,
//   Signal,
//   Globe2,
//   QrCode,
//   Copy,
//     Info,
//   RefreshCcw,
//   Settings,
//   Database,
//   CalendarDays,
//   Download,
//   CheckCircle2,
//   Router,
//   ShieldCheck,
//   Apple,
//   Activity,
//   MapPin,
//   Plus,
// } from "lucide-react";





// const stats = [

// {
// title:"Data Remaining",
// value:"6.8GB",
// desc:"Out of 10GB",
// icon:Database
// },

// {
// title:"Validity",
// value:"18 Days",
// desc:"Remaining",
// icon:CalendarDays
// },

// {
// title:"Network",
// value:"5G Ready",
// desc:"Multiple carriers",
// icon:Signal
// },

// {
// title:"Coverage",
// value:"190+ Countries",
// desc:"Global access",
// icon:Globe2
// }

// ];







// const usageHistory=[

// {
// day:"Today",
// usage:"420MB"
// },

// {
// day:"Yesterday",
// usage:"850MB"
// },

// {
// day:"Aug 04",
// usage:"1.2GB"
// }

// ];








// export default function ManageDataEsimPage(){


//   const [copied,setCopied] = useState("");

// const copyText = (text:string,type:string)=>{

// navigator.clipboard.writeText(text);

// setCopied(type);

// setTimeout(()=>{
// setCopied("");
// },2000);

// };


// return (

// <main
// className="
// min-h-screen
// bg-[#f7f9fc]
// "
// >








// {/* HEADER */}



// <section
// className="
// bg-white
// border-b
// py-10
// "
// >


// <div
// className="
// max-w-7xl
// mx-auto
// px-5
// lg:px-10
// "
// >


// <div
// className="
// flex
// flex-col
// lg:flex-row
// justify-between
// gap-6
// "
// >


// <div
// className="
// flex
// items-center
// gap-4
// "
// >


// <div
// className="
// h-14
// w-14
// rounded-2xl
// bg-blue-100
// flex
// items-center
// justify-center
// "
// >


// <Smartphone
// className="text-[#071B4D]"
// size={32}
// />


// </div>





// <div>

// <h1
// className="
// text-3xl
// font-bold
// text-[#071B4D]
// "
// >

// USA Data eSIM

// </h1>


// <p
// className="
// text-gray-500
// "
// >

// Manage your data-only global connectivity plan

// </p>


// </div>


// </div>







// <div
// className="
// flex
// gap-3
// "
// >


// <button
// className="
// border
// px-6
// py-3
// rounded-xl
// font-semibold
// "
// >

// Pause

// </button>




// <button
// className="
// bg-[#071B4D]
// text-white
// px-6
// py-3
// rounded-xl
// font-semibold
// flex
// items-center
// gap-2
// "
// >


// <Plus size={18}/>

// Top Up Data


// </button>


// </div>



// </div>


// </div>


// </section>









// {/* HERO ESIM CARD */}



// <section
// className="
// max-w-7xl
// mx-auto
// px-5
// lg:px-10
// py-10
// "
// >


// <div
// className="
// bg-[#071B4D]
// rounded-[40px]
// p-8
// lg:p-12
// text-white
// "
// >


// <div
// className="
// flex
// flex-col
// lg:flex-row
// justify-between
// gap-10
// "
// >





// <div>


// <div
// className="
// flex
// items-center
// gap-3
// "
// >


// <span
// className="
// text-5xl
// "
// >

// 🇺🇸

// </span>


// <div>

// <h2
// className="
// text-3xl
// font-bold
// "
// >

// United States

// </h2>


// <p
// className="
// text-blue-100
// "
// >

// Data Only eSIM

// </p>


// </div>


// </div>







// <div
// className="
// mt-10
// "
// >


// <p
// className="
// text-blue-100
// "
// >

// Current Data Balance

// </p>


// <h3
// className="
// text-6xl
// font-bold
// mt-2
// "
// >

// 6.8GB

// </h3>


// <p
// className="
// mt-3
// text-blue-100
// "
// >

// Expires Aug 30, 2026

// </p>


// </div>


// </div>








// <div
// className="
// bg-white/10
// rounded-3xl
// p-8
// min-w-[260px]
// "
// >


// <Activity/>


// <h3
// className="
// mt-5
// text-xl
// font-bold
// "
// >

// Connection Status

// </h3>


// <div
// className="
// mt-4
// flex
// items-center
// gap-2
// "
// >


// <span
// className="
// h-3
// w-3
// bg-green-400
// rounded-full
// "
// />


// Active Connected


// </div>



// </div>




// </div>


// </div>


// </section>









// {/* STATISTICS */}



// <section
// className="
// max-w-7xl
// mx-auto
// px-5
// lg:px-10
// "
// >


// <div
// className="
// grid
// sm:grid-cols-2
// lg:grid-cols-4
// gap-6
// "
// >


// {
// stats.map((item,index)=>{


// const Icon=item.icon;


// return (

// <div
// key={index}
// className="
// bg-white
// rounded-3xl
// border
// p-6
// "
// >


// <Icon
// className="text-[#071B4D]"
// />


// <p
// className="
// mt-4
// text-gray-500
// "
// >

// {item.title}

// </p>


// <h3
// className="
// text-2xl
// font-bold
// text-[#071B4D]
// "
// >

// {item.value}

// </h3>


// <p
// className="
// text-sm
// text-gray-500
// "
// >

// {item.desc}

// </p>


// </div>


// )


// })


// }


// </div>


// </section>









// {/* DATA USAGE */}



// <section
// className="
// max-w-7xl
// mx-auto
// px-5
// lg:px-10
// py-10
// "
// >


// <div
// className="
// grid
// lg:grid-cols-3
// gap-6
// "
// >





// <div
// className="
// lg:col-span-2
// bg-white
// border
// rounded-[32px]
// p-8
// "
// >


// <div
// className="
// flex
// justify-between
// "
// >


// <h2
// className="
// text-2xl
// font-bold
// text-[#071B4D]
// "
// >

// Data Usage

// </h2>


// <p
// className="
// font-bold
// "
// >

// 32% Used

// </p>


// </div>






// <div
// className="
// mt-8
// h-5
// bg-gray-200
// rounded-full
// overflow-hidden
// "
// >


// <div
// className="
// h-full
// bg-[#071B4D]
// w-[32%]
// rounded-full
// "
// />


// </div>





// <div
// className="
// mt-8
// space-y-4
// "
// >


// {
// usageHistory.map((item,index)=>(


// <div
// key={index}
// className="
// flex
// justify-between
// bg-[#f7f9fc]
// p-4
// rounded-xl
// "
// >


// <span>

// {item.day}

// </span>


// <strong>

// {item.usage}

// </strong>


// </div>


// ))


// }


// </div>


// </div>









// {/* QR */}



// <div
// className="
// bg-white
// border
// rounded-[32px]
// p-8
// "
// >


// <h2
// className="
// text-xl
// font-bold
// text-[#071B4D]
// "
// >

// Install eSIM

// </h2>




// <div
// className="
// mt-6
// h-44
// bg-[#f7f9fc]
// rounded-2xl
// flex
// items-center
// justify-center
// "
// >


// <QrCode
// size={80}
// className="text-[#071B4D]"
// />


// </div>






// <button
// className="
// mt-6
// w-full
// bg-[#071B4D]
// text-white
// rounded-xl
// py-3
// flex
// items-center
// justify-center
// gap-2
// font-semibold
// "
// >


// <Download size={18}/>

// Download QR


// </button>


// </div>



// </div>


// </section>


// {/* INSTALLATION METHODS */}

// {/* INSTALLATION METHODS */}

// <section
// className="
// max-w-7xl
// mx-auto
// px-5
// lg:px-10
// py-10
// "
// >


// {/* <div
// className="
// bg-white
// border
// rounded-[36px]
// p-8
// "
// > */}


// <div
// className="
// flex
// items-center
// gap-3
// "
// >

// <Smartphone
// className="text-[#071B4D]"
// />


// <h2
// className="
// text-2xl
// font-bold
// text-[#071B4D]
// "
// >

// Install Your Data eSIM

// </h2>


// </div>





// <p
// className="
// mt-3
// text-gray-500
// "
// >

// Choose your preferred installation method.
// QR installation is recommended, or manually enter the details below.

// </p>







// <div
// className="
// mt-8
// grid
// lg:grid-cols-2
// gap-8
// "
// >





// {/* QR INSTALLATION */}



// <div
// className="
// border
// rounded-3xl
// p-6
// "
// >


// <div
// className="
// flex
// items-center
// gap-3
// "
// >

// <QrCode
// className="text-[#071B4D]"
// />


// <h3
// className="
// text-xl
// font-bold
// "
// >

// QR Installation

// </h3>


// </div>





// <div
// className="
// mt-6
// h-48
// bg-[#f7f9fc]
// rounded-2xl
// flex
// items-center
// justify-center
// "
// >


// <QrCode
// size={90}
// className="text-[#071B4D]"
// />


// </div>







// <button
// className="
// mt-6
// w-full
// bg-[#071B4D]
// text-white
// py-3
// rounded-xl
// font-semibold
// flex
// items-center
// justify-center
// gap-2
// "
// >


// <Download size={18}/>

// Download QR Code


// </button>






// <div
// className="
// mt-6
// space-y-3
// text-sm
// text-gray-600
// "
// >


// <p>
// 1. Open phone Settings
// </p>


// <p>
// 2. Select Add eSIM
// </p>


// <p>
// 3. Scan this QR Code
// </p>


// <p>
// 4. Enable Mobile Data
// </p>


// </div>



// </div>









// {/* MANUAL INSTALLATION */}



// <div
// className="
// border
// rounded-3xl
// p-6
// "
// >



// <div
// className="
// flex
// items-center
// gap-3
// "
// >


// <Settings
// className="text-[#071B4D]"
// />


// <h3
// className="
// text-xl
// font-bold
// "
// >

// Manual Installation

// </h3>


// </div>






// <p
// className="
// mt-3
// text-sm
// text-gray-500
// "
// >

// Use these details when your device cannot scan a QR code.

// </p>








// {/* SM-DP ADDRESS */}


// <div
// className="
// mt-6
// space-y-5
// "
// >


// <div>

// <label
// className="
// text-sm
// text-gray-500
// "
// >

// SM-DP+ Address

// </label>


// <div
// className="
// mt-2
// flex
// items-center
// justify-between
// bg-[#f7f9fc]
// rounded-xl
// p-4
// "
// >


// <p
// className="
// font-semibold
// text-sm
// break-all
// "
// >

// rsp.truphone.com

// </p>



// <button

// onClick={()=>copyText(
// "rsp.truphone.com",
// "address"
// )}

// >


// {
// copied==="address"
// ?
// <CheckCircle2
// className="text-green-600"
// />
// :
// <Copy size={18}/>
// }


// </button>


// </div>


// </div>









// {/* ACTIVATION CODE */}



// <div>


// <label
// className="
// text-sm
// text-gray-500
// "
// >

// Activation Code

// </label>



// <div
// className="
// mt-2
// flex
// items-center
// justify-between
// bg-[#f7f9fc]
// rounded-xl
// p-4
// "
// >


// <p
// className="
// font-semibold
// "
// >

// LPA:1$TRUPHONE.COM$8FD92K31

// </p>




// <button

// onClick={()=>copyText(
// "LPA:1$TRUPHONE.COM$8FD92K31",
// "code"
// )}

// >


// {
// copied==="code"
// ?
// <CheckCircle2
// className="text-green-600"
// />
// :
// <Copy size={18}/>
// }


// </button>



// </div>


// </div>





// </div>







// {/* MANUAL STEPS */}


// <div
// className="
// mt-8
// bg-blue-50
// rounded-2xl
// p-5
// "
// >


// <div
// className="
// flex
// gap-3
// "
// >

// <Info
// className="text-[#071B4D]"
// />


// <h4
// className="
// font-bold
// "
// >

// Manual Setup Steps

// </h4>


// </div>





// <ul
// className="
// mt-4
// space-y-3
// text-sm
// text-gray-600
// "
// >


// <li>
// ✓ Open Settings → Mobile Data
// </li>


// <li>
// ✓ Select Add eSIM
// </li>


// <li>
// ✓ Choose Enter Details Manually
// </li>


// <li>
// ✓ Enter SM-DP+ Address
// </li>


// <li>
// ✓ Enter Activation Code
// </li>


// <li>
// ✓ Turn on Data Roaming
// </li>


// </ul>


// </div>






// </div>


// </div>


// </section>













// {/* TECHNICAL DETAILS */}


// <section
// className="
// max-w-7xl
// mx-auto
// px-5
// lg:px-10
// pb-20
// "
// >


// <div
// className="
// grid
// md:grid-cols-2
// gap-6
// "
// >


// <div
// className="
// bg-white
// border
// rounded-3xl
// p-6
// "
// >


// <div className="flex gap-3 items-center">

// <Apple
// className="text-[#071B4D]"
// />

// <h3 className="font-bold text-xl">
// iPhone Installation
// </h3>

// </div>


// <p className="mt-4 text-gray-600">

// Settings → Cellular → Add eSIM →
// Use QR Code or Enter Details Manually.

// </p>


// </div>





// <div
// className="
// bg-white
// border
// rounded-3xl
// p-6
// "
// >


// <div className="flex gap-3 items-center">

// <Smartphone
// className="text-[#071B4D]"
// />

// <h3 className="font-bold text-xl">
// Android Installation
// </h3>

// </div>


// <p className="mt-4 text-gray-600">

// Settings → Network → SIM Manager →
// Add eSIM → Scan QR Code.

// </p>


// </div>


// </div>


// </section>


// <section
// className="
// max-w-7xl
// mx-auto
// px-5
// lg:px-10
// "
// >


// <div
// className="
// bg-white
// border
// rounded-[32px]
// p-8
// "
// >


// <h2
// className="
// text-2xl
// font-bold
// text-[#071B4D]
// "
// >

// eSIM Technical Information

// </h2>







// <div
// className="
// mt-6
// grid
// md:grid-cols-3
// gap-5
// "
// >



// <div
// className="
// border
// rounded-xl
// p-5
// "
// >


// <p className="text-gray-500">
// ICCID
// </p>


// <div
// className="
// flex
// justify-between
// mt-2
// font-bold
// "
// >

// 898820000123456

// <Copy size={16}/>

// </div>


// </div>








// <div
// className="
// border
// rounded-xl
// p-5
// "
// >


// <p className="text-gray-500">
// APN
// </p>


// <p className="
// mt-2
// font-bold
// ">

// globaldata

// </p>


// </div>







// <div
// className="
// border
// rounded-xl
// p-5
// "
// >


// <p className="text-gray-500">
// SIM Type
// </p>


// <p className="
// mt-2
// font-bold
// ">

// Data Only

// </p>


// </div>



// </div>


// </div>


// </section>












// {/* SETTINGS */}



// <section
// className="
// max-w-7xl
// mx-auto
// px-5
// lg:px-10
// py-10
// pb-20
// "
// >


// <div
// className="
// grid
// md:grid-cols-3
// gap-6
// "
// >



// <button
// className="
// bg-white
// border
// rounded-3xl
// p-6
// text-left
// "
// >


// <Router/>

// <h3
// className="
// mt-4
// font-bold
// "
// >

// APN Settings

// </h3>


// <p
// className="
// text-gray-500
// text-sm
// "
// >

// Configure mobile data access

// </p>


// </button>







// <button
// className="
// bg-white
// border
// rounded-3xl
// p-6
// text-left
// "
// >


// <Settings/>

// <h3
// className="
// mt-4
// font-bold
// "
// >

// Manage Device

// </h3>


// <p
// className="
// text-gray-500
// text-sm
// "
// >

// Change connected device

// </p>


// </button>







// <button
// className="
// bg-white
// border
// rounded-3xl
// p-6
// text-left
// "
// >


// <ShieldCheck/>

// <h3
// className="
// mt-4
// font-bold
// "
// >

// Security

// </h3>


// <p
// className="
// text-gray-500
// text-sm
// "
// >

// Protect your eSIM profile

// </p>


// </button>


// </div>


// </section>





// </main>

// )

// }



"use client";

import {
  Activity,
  AlertCircle,
  ArrowDownToLine,
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Copy,
  Download,
  Edit3,
  Globe2,
  Info,
  Lock,
  MoreHorizontal,
  Network,
  QrCode,
  RefreshCw,
  RotateCcw,
  Save,
  Settings2,
  ShieldCheck,
  Signal,
  Smartphone,
  Trash2,
  Wifi,
  X,
  Zap,
} from "lucide-react";

import { useMemo, useState } from "react";

type EsimStatus =
  | "active"
  | "inactive"
  | "expired"
  | "suspended"
  | "not_activated";

type ActivityItem = {
  id: string;
  title: string;
  description: string;
  date: string;
  type:
    | "activation"
    | "network"
    | "settings"
    | "purchase"
    | "security";
};

type Esim = {
  id: string;

  name: string;
  country: string;
  flag: string;

  planName: string;

  status: EsimStatus;

  dataTotal: number;
  dataUsed: number;

  daysRemaining: number;
  expiryDate: string;

  iccid: string;
  eid: string;

  activationCode: string;

  network: string;

  apn: string;

  purchaseDate: string;

  dataRoaming: boolean;

  autoConnect: boolean;

  activity: ActivityItem[];
};

const initialEsims: Esim[] = [
  {
    id: "esim_usa_001",

    name: "USA Travel eSIM",

    country: "United States",
    flag: "🇺🇸",

    planName: "USA 10GB",

    status: "active",

    dataTotal: 10,
    dataUsed: 3.7,

    daysRemaining: 18,
    expiryDate: "Aug 31, 2026",

    iccid: "8944201234567890123",

    eid: "89049032000000000000000012345678",

    activationCode:
      "LPA:1$sm-v4.example.com$USA10GB-8X2K9P",

    network: "T-Mobile",

    apn: "globaldata",

    purchaseDate: "Aug 02, 2026",

    dataRoaming: true,

    autoConnect: true,

    activity: [
      {
        id: "1",
        title: "eSIM activated",
        description:
          "The eSIM was successfully activated.",
        date: "Aug 04, 2026 · 10:42 AM",
        type: "activation",
      },
      {
        id: "2",
        title: "Connected to T-Mobile",
        description:
          "Your eSIM connected to the available network.",
        date: "Aug 04, 2026 · 10:45 AM",
        type: "network",
      },
      {
        id: "3",
        title: "Data roaming enabled",
        description:
          "Data roaming was enabled for this eSIM.",
        date: "Aug 04, 2026 · 10:46 AM",
        type: "settings",
      },
      {
        id: "4",
        title: "eSIM purchased",
        description:
          "USA 10GB data plan purchased successfully.",
        date: "Aug 02, 2026 · 8:31 PM",
        type: "purchase",
      },
    ],
  },

  {
    id: "esim_uk_001",

    name: "UK Travel eSIM",

    country: "United Kingdom",
    flag: "🇬🇧",

    planName: "UK 5GB",

    status: "active",

    dataTotal: 5,
    dataUsed: 1.8,

    daysRemaining: 7,
    expiryDate: "Aug 19, 2026",

    iccid: "8944201234567890456",

    eid: "89049032000000000000000087654321",

    activationCode:
      "LPA:1$sm-v4.example.com$UK5GB-7M4Q2R",

    network: "EE",

    apn: "globaldata",

    purchaseDate: "Aug 04, 2026",

    dataRoaming: true,

    autoConnect: true,

    activity: [
      {
        id: "1",
        title: "eSIM activated",
        description:
          "The eSIM was successfully activated.",
        date: "Aug 05, 2026 · 9:18 AM",
        type: "activation",
      },
      {
        id: "2",
        title: "Connected to EE",
        description:
          "Your eSIM connected to EE.",
        date: "Aug 05, 2026 · 9:21 AM",
        type: "network",
      },
    ],
  },
];

export default function ManageEsimPage() {
  const [esims, setEsims] =
    useState<Esim[]>(initialEsims);

  const [selectedId, setSelectedId] =
    useState(initialEsims[0].id);

  const [showSelector, setShowSelector] =
    useState(false);

  const [showRename, setShowRename] =
    useState(false);

  const [showDelete, setShowDelete] =
    useState(false);

  const [showReset, setShowReset] =
    useState(false);

  const [showQR, setShowQR] =
    useState(false);

  const [showActivation, setShowActivation] =
    useState(false);

  const [isSaving, setIsSaving] =
    useState(false);

  const [copied, setCopied] =
    useState<string | null>(null);

  const [refreshing, setRefreshing] =
    useState(false);

  const selectedEsim =
    esims.find(
      (esim) => esim.id === selectedId
    ) ?? esims[0];

  const usagePercentage =
    selectedEsim.dataTotal > 0
      ? (selectedEsim.dataUsed /
          selectedEsim.dataTotal) *
        100
      : 0;

  const remainingData =
    Math.max(
      0,
      selectedEsim.dataTotal -
        selectedEsim.dataUsed
    );

  function updateSelectedEsim(
    updates: Partial<Esim>
  ) {
    setEsims((current) =>
      current.map((esim) =>
        esim.id === selectedEsim.id
          ? {
              ...esim,
              ...updates,
            }
          : esim
      )
    );
  }

  async function copyValue(
    value: string,
    key: string
  ) {
    try {
      await navigator.clipboard.writeText(
        value
      );

      setCopied(key);

      setTimeout(() => {
        setCopied(null);
      }, 1600);
    } catch {
      // Clipboard unavailable.
    }
  }

  async function refreshData() {
    setRefreshing(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    setRefreshing(false);
  }

  async function saveRename(
    name: string
  ) {
    if (!name.trim()) return;

    setIsSaving(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 700)
    );

    updateSelectedEsim({
      name: name.trim(),
    });

    setIsSaving(false);
    setShowRename(false);
  }

  function toggleEsim() {
    const nextStatus =
      selectedEsim.status === "active"
        ? "inactive"
        : "active";

    updateSelectedEsim({
      status: nextStatus,
    });
  }

  function deleteEsim() {
    const remaining = esims.filter(
      (esim) =>
        esim.id !== selectedEsim.id
    );

    setEsims(remaining);

    if (remaining.length > 0) {
      setSelectedId(remaining[0].id);
    }

    setShowDelete(false);
  }

  const currentActivities =
    useMemo(
      () =>
        selectedEsim.activity.slice(
          0,
          5
        ),
      [selectedEsim.activity]
    );

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-900">

      <div className="mx-auto w-full max-w-[1500px] px-4 py-5 sm:px-6 lg:px-8 lg:py-8">

        {/* ===================================================== */}
        {/* BREADCRUMB */}
        {/* ===================================================== */}

        <div className="mb-5 flex items-center gap-2 text-sm text-slate-400">

          <a
            href="/esim"
            className="transition hover:text-cyan-700"
          >
            Data eSIM
          </a>

          <ChevronRight className="h-4 w-4" />

          <a
            href="/esim/my-esim"
            className="transition hover:text-cyan-700"
          >
            My eSIM
          </a>

          <ChevronRight className="h-4 w-4" />

          <span className="font-medium text-slate-700">
            Manage
          </span>

        </div>

        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}

        <section className="mb-7">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                  <Settings2 className="h-6 w-6" />
                </div>

                <div>

                  <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    Manage eSIM
                  </h1>

                  <p className="mt-1 text-sm text-slate-500 sm:text-base">
                    Manage your eSIM settings, connection,
                    activation details and security.
                  </p>

                </div>

              </div>

            </div>

            <button
              type="button"
              onClick={refreshData}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              <RefreshCw
                className={`h-4 w-4 ${
                  refreshing
                    ? "animate-spin"
                    : ""
                }`}
              />

              {refreshing
                ? "Refreshing..."
                : "Refresh status"}
            </button>

          </div>

        </section>

        {/* ===================================================== */}
        {/* ESIM SELECTOR */}
        {/* ===================================================== */}

        <section className="relative mb-5">

          <button
            type="button"
            onClick={() =>
              setShowSelector(
                (value) => !value
              )
            }
            className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-slate-300"
          >

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 text-2xl">
                {selectedEsim.flag}
              </div>

              <div>

                <div className="flex items-center gap-2">

                  <span className="text-sm font-bold text-slate-800">
                    {selectedEsim.name}
                  </span>

                  <StatusBadge
                    status={
                      selectedEsim.status
                    }
                  />

                </div>

                <p className="mt-1 text-xs text-slate-400">
                  {selectedEsim.planName} ·{" "}
                  {selectedEsim.country}
                </p>

              </div>

            </div>

            <ChevronDown
              className={`h-5 w-5 text-slate-400 transition ${
                showSelector
                  ? "rotate-180"
                  : ""
              }`}
            />

          </button>

          {showSelector && (
            <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">

              {esims.map((esim) => (
                <button
                  key={esim.id}
                  type="button"
                  onClick={() => {
                    setSelectedId(
                      esim.id
                    );
                    setShowSelector(false);
                  }}
                  className={`flex w-full items-center justify-between border-b border-slate-100 p-4 text-left last:border-0 hover:bg-slate-50 ${
                    esim.id ===
                    selectedEsim.id
                      ? "bg-cyan-50/50"
                      : ""
                  }`}
                >

                  <div className="flex items-center gap-3">

                    <span className="text-xl">
                      {esim.flag}
                    </span>

                    <div>

                      <p className="text-sm font-bold text-slate-800">
                        {esim.name}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {esim.planName} ·{" "}
                        {esim.network}
                      </p>

                    </div>

                  </div>

                  {esim.id ===
                    selectedEsim.id && (
                    <Check className="h-5 w-5 text-cyan-600" />
                  )}

                </button>
              ))}

            </div>
          )}

        </section>

        {/* ===================================================== */}
        {/* STATUS BANNER */}
        {/* ===================================================== */}

        <section className="mb-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          <div className="p-5 sm:p-6">

            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

              <div className="flex items-center gap-4">

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                    selectedEsim.status ===
                    "active"
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >

                  <Smartphone className="h-6 w-6" />

                </div>

                <div>

                  <div className="flex flex-wrap items-center gap-2">

                    <h2 className="text-lg font-bold text-slate-900">
                      {selectedEsim.name}
                    </h2>

                    <StatusBadge
                      status={
                        selectedEsim.status
                      }
                    />

                  </div>

                  <p className="mt-1 text-xs text-slate-400">
                    {selectedEsim.country} ·{" "}
                    {selectedEsim.network} ·{" "}
                    {selectedEsim.planName}
                  </p>

                </div>

              </div>

              <div className="flex flex-col gap-2 sm:flex-row">

                <button
                  type="button"
                  onClick={() =>
                    setShowRename(true)
                  }
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 text-xs font-bold text-slate-700 hover:bg-slate-50"
                >
                  <Edit3 className="h-4 w-4" />
                  Rename
                </button>

                <button
                  type="button"
                  onClick={toggleEsim}
                  className={`inline-flex h-10 items-center justify-center gap-2 rounded-xl px-4 text-xs font-bold ${
                    selectedEsim.status ===
                    "active"
                      ? "border border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100"
                      : "bg-cyan-700 text-white hover:bg-cyan-800"
                  }`}
                >
                  {selectedEsim.status ===
                  "active" ? (
                    <>
                      <Lock className="h-4 w-4" />
                      Disable eSIM
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      Enable eSIM
                    </>
                  )}
                </button>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================== */}
        {/* OVERVIEW GRID */}
        {/* ===================================================== */}

        <section className="mb-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <OverviewCard
            icon={
              <ArrowDownToLine className="h-5 w-5" />
            }
            title="Data remaining"
            value={`${remainingData.toFixed(
              1
            )} GB`}
            description={`of ${selectedEsim.dataTotal} GB`}
          />

          <OverviewCard
            icon={
              <CalendarDays className="h-5 w-5" />
            }
            title="Validity"
            value={`${selectedEsim.daysRemaining} days`}
            description={`Expires ${selectedEsim.expiryDate}`}
          />

          <OverviewCard
            icon={
              <Network className="h-5 w-5" />
            }
            title="Network"
            value={selectedEsim.network}
            description="Current network"
          />

          <OverviewCard
            icon={
              <Signal className="h-5 w-5" />
            }
            title="Connection"
            value={
              selectedEsim.status ===
              "active"
                ? "Connected"
                : "Offline"
            }
            description={
              selectedEsim.status ===
              "active"
                ? "Ready for data"
                : "eSIM disabled"
            }
          />

        </section>

        {/* ===================================================== */}
        {/* MAIN MANAGEMENT GRID */}
        {/* ===================================================== */}

        <section className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">

          {/* LEFT */}

          <div className="space-y-5">

            {/* CONNECTION SETTINGS */}

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

              <SectionHeader
                icon={
                  <Wifi className="h-5 w-5" />
                }
                title="Connection settings"
                description="Configure how your eSIM connects to mobile networks."
              />

              <div className="mt-6 divide-y divide-slate-100">

                <SettingRow
                  title="Automatic network selection"
                  description="Automatically connect to the best available network."
                  enabled={
                    selectedEsim.autoConnect
                  }
                  onChange={(enabled) =>
                    updateSelectedEsim({
                      autoConnect:
                        enabled,
                    })
                  }
                />

                <SettingRow
                  title="Data roaming"
                  description="Allow this eSIM to use mobile data while roaming."
                  enabled={
                    selectedEsim.dataRoaming
                  }
                  onChange={(enabled) =>
                    updateSelectedEsim({
                      dataRoaming:
                        enabled,
                    })
                  }
                />

              </div>

              <div className="mt-5 rounded-xl border border-cyan-100 bg-cyan-50/60 p-4">

                <div className="flex gap-3">

                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />

                  <p className="text-[11px] leading-5 text-cyan-800">
                    Settings are stored with your account.
                    Some network settings may also need to
                    be enabled from your device's cellular
                    settings.
                  </p>

                </div>

              </div>

            </div>

            {/* NETWORK */}

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

              <SectionHeader
                icon={
                  <Globe2 className="h-5 w-5" />
                }
                title="Network information"
                description="Technical information for your current eSIM connection."
              />

              <div className="mt-6 grid gap-3 sm:grid-cols-2">

                <InfoField
                  label="Country"
                  value={`${selectedEsim.flag} ${selectedEsim.country}`}
                />

                <InfoField
                  label="Network"
                  value={selectedEsim.network}
                />

                <InfoField
                  label="APN"
                  value={selectedEsim.apn}
                  copyable
                  copied={
                    copied === "apn"
                  }
                  onCopy={() =>
                    copyValue(
                      selectedEsim.apn,
                      "apn"
                    )
                  }
                />

                <InfoField
                  label="Connection"
                  value={
                    selectedEsim.status ===
                    "active"
                      ? "Available"
                      : "Unavailable"
                  }
                />

              </div>

            </div>

            {/* IDENTIFIERS */}

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

              <SectionHeader
                icon={
                  <ShieldCheck className="h-5 w-5" />
                }
                title="eSIM identifiers"
                description="Keep these details private. They may be required for support."
              />

              <div className="mt-6 space-y-3">

                <CopyField
                  label="ICCID"
                  value={
                    selectedEsim.iccid
                  }
                  copied={
                    copied === "iccid"
                  }
                  onCopy={() =>
                    copyValue(
                      selectedEsim.iccid,
                      "iccid"
                    )
                  }
                />

                <CopyField
                  label="EID"
                  value={selectedEsim.eid}
                  copied={
                    copied === "eid"
                  }
                  onCopy={() =>
                    copyValue(
                      selectedEsim.eid,
                      "eid"
                    )
                  }
                />

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="space-y-5">

            {/* DATA */}

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

              <SectionHeader
                icon={
                  <Activity className="h-5 w-5" />
                }
                title="Data usage"
                description="Current consumption for this eSIM."
              />

              <div className="mt-6">

                <div className="flex items-end justify-between">

                  <div>

                    <p className="text-xs text-slate-400">
                      Used
                    </p>

                    <p className="mt-1 text-3xl font-bold text-slate-900">
                      {selectedEsim.dataUsed.toFixed(
                        1
                      )}{" "}
                      <span className="text-sm font-medium text-slate-400">
                        GB
                      </span>
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-xs text-slate-400">
                      Remaining
                    </p>

                    <p className="mt-1 text-sm font-bold text-cyan-700">
                      {remainingData.toFixed(
                        1
                      )}{" "}
                      GB
                    </p>

                  </div>

                </div>

                <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-slate-100">

                  <div
                    className={`h-full rounded-full ${
                      usagePercentage >=
                      90
                        ? "bg-rose-500"
                        : usagePercentage >=
                            75
                          ? "bg-amber-500"
                          : "bg-cyan-600"
                    }`}
                    style={{
                      width: `${Math.min(
                        100,
                        usagePercentage
                      )}%`,
                    }}
                  />

                </div>

                <div className="mt-2 flex justify-between text-[10px] text-slate-400">

                  <span>
                    {usagePercentage.toFixed(
                      0
                    )}
                    % used
                  </span>

                  <span>
                    {selectedEsim.dataTotal} GB
                  </span>

                </div>

              </div>

              <div className="mt-6 grid gap-2 sm:grid-cols-2">

                <a
                  href={`/esim/usage?esim=${selectedEsim.id}`}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50"
                >
                  <Activity className="h-4 w-4" />
                  View usage
                </a>

                <a
                  href={`/esim/top-up?esim=${selectedEsim.id}`}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-cyan-700 text-xs font-bold text-white hover:bg-cyan-800"
                >
                  <Zap className="h-4 w-4" />
                  Top up
                </a>

              </div>

            </div>

            {/* QR */}

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

              <SectionHeader
                icon={
                  <QrCode className="h-5 w-5" />
                }
                title="Installation"
                description="Access your eSIM installation information."
              />

              <div className="mt-5 rounded-xl bg-slate-50 p-4">

                <div className="flex items-start gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-slate-500 shadow-sm">
                    <Smartphone className="h-5 w-5" />
                  </div>

                  <div>

                    <p className="text-xs font-bold text-slate-700">
                      Need to install again?
                    </p>

                    <p className="mt-1 text-[11px] leading-5 text-slate-400">
                      Open the QR code or view the manual
                      activation details.
                    </p>

                  </div>

                </div>

              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">

                <button
                  type="button"
                  onClick={() =>
                    setShowQR(true)
                  }
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-slate-900 text-xs font-bold text-white hover:bg-slate-800"
                >
                  <QrCode className="h-4 w-4" />
                  View QR code
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setShowActivation(
                      true
                    )
                  }
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50"
                >
                  <Info className="h-4 w-4" />
                  Manual setup
                </button>

              </div>

            </div>

            {/* SECURITY */}

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

              <SectionHeader
                icon={
                  <Lock className="h-5 w-5" />
                }
                title="Security"
                description="Sensitive eSIM management actions."
              />

              <div className="mt-5 space-y-2">

                <button
                  type="button"
                  onClick={() =>
                    setShowReset(true)
                  }
                  className="flex w-full items-center justify-between rounded-xl border border-slate-200 p-3 text-left hover:bg-slate-50"
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
                      <RotateCcw className="h-4 w-4" />
                    </div>

                    <div>

                      <p className="text-xs font-bold text-slate-700">
                        Reset connection
                      </p>

                      <p className="mt-1 text-[10px] text-slate-400">
                        Refresh network configuration
                      </p>

                    </div>

                  </div>

                  <ChevronRight className="h-4 w-4 text-slate-300" />

                </button>

                <button
                  type="button"
                  onClick={() =>
                    setShowDelete(true)
                  }
                  className="flex w-full items-center justify-between rounded-xl border border-rose-100 bg-rose-50/30 p-3 text-left hover:bg-rose-50"
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-100 text-rose-600">
                      <Trash2 className="h-4 w-4" />
                    </div>

                    <div>

                      <p className="text-xs font-bold text-rose-700">
                        Remove eSIM
                      </p>

                      <p className="mt-1 text-[10px] text-rose-500">
                        Permanently remove from account
                      </p>

                    </div>

                  </div>

                  <ChevronRight className="h-4 w-4 text-rose-300" />

                </button>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================== */}
        {/* ACTIVITY */}
        {/* ===================================================== */}

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white shadow-sm">

          <div className="flex items-center justify-between border-b border-slate-100 p-5 sm:p-6">

            <div>

              <h2 className="text-base font-bold text-slate-900">
                Recent activity
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Recent actions and network events.
              </p>

            </div>

            <button
              type="button"
              className="hidden items-center gap-2 text-xs font-bold text-cyan-700 hover:text-cyan-800 sm:flex"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </button>

          </div>

          <div className="divide-y divide-slate-100">

            {currentActivities.map(
              (item) => (
                <ActivityRow
                  key={item.id}
                  item={item}
                />
              )
            )}

          </div>

        </section>

        {/* ===================================================== */}
        {/* HELP */}
        {/* ===================================================== */}

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-start gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                <Info className="h-5 w-5" />
              </div>

              <div>

                <h3 className="text-sm font-bold text-slate-800">
                  Need help managing your eSIM?
                </h3>

                <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-400">
                  Learn how to install, activate, configure,
                  troubleshoot, or transfer your eSIM.
                </p>

              </div>

            </div>

            <a
              href="/help/esim"
              className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 text-xs font-bold text-slate-700 hover:bg-slate-50"
            >
              Visit help center
              <ArrowRight className="h-4 w-4" />
            </a>

          </div>

        </section>

      </div>

      {/* ===================================================== */}
      {/* RENAME MODAL */}
      {/* ===================================================== */}

      {showRename && (
        <RenameModal
          currentName={
            selectedEsim.name
          }
          loading={isSaving}
          onClose={() =>
            setShowRename(false)
          }
          onSave={saveRename}
        />
      )}

      {/* ===================================================== */}
      {/* DELETE MODAL */}
      {/* ===================================================== */}

      {showDelete && (
        <ConfirmModal
          title="Remove eSIM?"
          description={`Are you sure you want to remove "${selectedEsim.name}" from your account? This action cannot be undone.`}
          confirmText="Remove eSIM"
          danger
          onClose={() =>
            setShowDelete(false)
          }
          onConfirm={deleteEsim}
        />
      )}

      {/* ===================================================== */}
      {/* RESET MODAL */}
      {/* ===================================================== */}

      {showReset && (
        <ConfirmModal
          title="Reset connection?"
          description="This will refresh the eSIM connection configuration. Your plan and data balance will not be affected."
          confirmText="Reset connection"
          onClose={() =>
            setShowReset(false)
          }
          onConfirm={() => {
            setShowReset(false);
            refreshData();
          }}
        />
      )}

      {/* ===================================================== */}
      {/* QR MODAL */}
      {/* ===================================================== */}

      {showQR && (
        <QRModal
          esim={selectedEsim}
          onClose={() =>
            setShowQR(false)
          }
        />
      )}

      {/* ===================================================== */}
      {/* ACTIVATION MODAL */}
      {/* ===================================================== */}

      {showActivation && (
        <ActivationModal
          esim={selectedEsim}
          copied={copied}
          onCopy={() =>
            copyValue(
              selectedEsim.activationCode,
              "activation"
            )
          }
          onClose={() =>
            setShowActivation(false)
          }
        />
      )}

    </main>
  );
}

/* ========================================================================== */
/* OVERVIEW CARD                                                               */
/* ========================================================================== */

function OverviewCard({
  icon,
  title,
  value,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
        {icon}
      </div>

      <p className="mt-5 text-xs text-slate-400">
        {title}
      </p>

      <p className="mt-1 truncate text-xl font-bold text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-[11px] text-slate-400">
        {description}
      </p>

    </div>
  );
}

/* ========================================================================== */
/* SECTION HEADER                                                              */
/* ========================================================================== */

function SectionHeader({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
        {icon}
      </div>

      <div>

        <h2 className="text-sm font-bold text-slate-900">
          {title}
        </h2>

        <p className="mt-1 text-[11px] leading-5 text-slate-400">
          {description}
        </p>

      </div>

    </div>
  );
}

/* ========================================================================== */
/* SETTING ROW                                                                 */
/* ========================================================================== */

function SettingRow({
  title,
  description,
  enabled,
  onChange,
}: {
  title: string;
  description: string;
  enabled: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-5">

      <div>

        <p className="text-xs font-bold text-slate-700">
          {title}
        </p>

        <p className="mt-1 max-w-lg text-[11px] leading-5 text-slate-400">
          {description}
        </p>

      </div>

      <button
        type="button"
        onClick={() =>
          onChange(!enabled)
        }
        aria-pressed={enabled}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          enabled
            ? "bg-cyan-600"
            : "bg-slate-200"
        }`}
      >

        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
            enabled
              ? "left-6"
              : "left-1"
          }`}
        />

      </button>

    </div>
  );
}

/* ========================================================================== */
/* INFO FIELD                                                                  */
/* ========================================================================== */

function InfoField({
  label,
  value,
  copyable,
  copied,
  onCopy,
}: {
  label: string;
  value: string;
  copyable?: boolean;
  copied?: boolean;
  onCopy?: () => void;
}) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">

      <div className="flex items-center justify-between gap-2">

        <p className="text-[10px] uppercase tracking-wide text-slate-400">
          {label}
        </p>

        {copyable && (
          <button
            type="button"
            onClick={onCopy}
            className="text-slate-400 hover:text-cyan-700"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-emerald-600" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </button>
        )}

      </div>

      <p className="mt-2 break-all text-xs font-bold text-slate-700">
        {value}
      </p>

    </div>
  );
}

/* ========================================================================== */
/* COPY FIELD                                                                  */
/* ========================================================================== */

function CopyField({
  label,
  value,
  copied,
  onCopy,
}: {
  label: string;
  value: string;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <div className="rounded-xl border border-slate-200 p-3">

      <div className="flex items-center justify-between gap-3">

        <div className="min-w-0">

          <p className="text-[10px] uppercase tracking-wide text-slate-400">
            {label}
          </p>

          <p className="mt-1 truncate font-mono text-xs font-semibold text-slate-700">
            {value}
          </p>

        </div>

        <button
          type="button"
          onClick={onCopy}
          className="flex h-8 shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 text-[10px] font-bold text-slate-500 hover:bg-slate-50"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-600" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              Copy
            </>
          )}
        </button>

      </div>

    </div>
  );
}

/* ========================================================================== */
/* ACTIVITY ROW                                                                */
/* ========================================================================== */

function ActivityRow({
  item,
}: {
  item: ActivityItem;
}) {
  const icon =
    item.type === "activation" ? (
      <CheckCircle2 className="h-4 w-4" />
    ) : item.type === "network" ? (
      <Signal className="h-4 w-4" />
    ) : item.type === "security" ? (
      <ShieldCheck className="h-4 w-4" />
    ) : item.type === "purchase" ? (
      <Download className="h-4 w-4" />
    ) : (
      <Settings2 className="h-4 w-4" />
    );

  return (
    <div className="flex gap-4 p-5 sm:p-6">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
        {icon}
      </div>

      <div className="min-w-0 flex-1">

        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs font-bold text-slate-700">
            {item.title}
          </p>

          <span className="text-[10px] text-slate-400">
            {item.date}
          </span>

        </div>

        <p className="mt-1 text-[11px] leading-5 text-slate-400">
          {item.description}
        </p>

      </div>

    </div>
  );
}

/* ========================================================================== */
/* STATUS BADGE                                                                */
/* ========================================================================== */

function StatusBadge({
  status,
}: {
  status: EsimStatus;
}) {
  const config = {
    active: {
      label: "Active",
      classes:
        "bg-emerald-50 text-emerald-600",
      dot: "bg-emerald-500",
    },

    inactive: {
      label: "Inactive",
      classes:
        "bg-slate-100 text-slate-500",
      dot: "bg-slate-400",
    },

    expired: {
      label: "Expired",
      classes:
        "bg-slate-100 text-slate-500",
      dot: "bg-slate-400",
    },

    suspended: {
      label: "Suspended",
      classes:
        "bg-rose-50 text-rose-600",
      dot: "bg-rose-500",
    },

    not_activated: {
      label: "Not activated",
      classes:
        "bg-amber-50 text-amber-600",
      dot: "bg-amber-500",
    },
  }[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold ${config.classes}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${config.dot}`}
      />
      {config.label}
    </span>
  );
}

/* ========================================================================== */
/* RENAME MODAL                                                                */
/* ========================================================================== */

function RenameModal({
  currentName,
  loading,
  onClose,
  onSave,
}: {
  currentName: string;
  loading: boolean;
  onClose: () => void;
  onSave: (name: string) => void;
}) {
  const [name, setName] =
    useState(currentName);

  return (
    <ModalShell onClose={onClose}>

      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-lg font-bold text-slate-900">
            Rename eSIM
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Choose a name that makes this eSIM easy to identify.
          </p>

        </div>

        <button
          type="button"
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100"
        >
          <X className="h-4 w-4" />
        </button>

      </div>

      <div className="mt-6">

        <label className="text-xs font-bold text-slate-600">
          eSIM name
        </label>

        <input
          autoFocus
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          maxLength={50}
          className="mt-2 h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-cyan-600 focus:ring-4 focus:ring-cyan-600/10"
          placeholder="e.g. USA Travel"
        />

      </div>

      <div className="mt-6 flex gap-2">

        <button
          type="button"
          onClick={onClose}
          className="h-10 flex-1 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50"
        >
          Cancel
        </button>

        <button
          type="button"
          disabled={
            loading ||
            !name.trim()
          }
          onClick={() =>
            onSave(name)
          }
          className="flex h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-700 text-xs font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? (
            <RefreshCw className="h-4 w-4 animate-spin" />
          ) : (
            <Save className="h-4 w-4" />
          )}

          Save
        </button>

      </div>

    </ModalShell>
  );
}

/* ========================================================================== */
/* CONFIRM MODAL                                                               */
/* ========================================================================== */

function ConfirmModal({
  title,
  description,
  confirmText,
  danger,
  onClose,
  onConfirm,
}: {
  title: string;
  description: string;
  confirmText: string;
  danger?: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) {
  return (
    <ModalShell onClose={onClose}>

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-500">

        {danger ? (
          <Trash2 className="h-5 w-5 text-rose-600" />
        ) : (
          <AlertCircle className="h-5 w-5" />
        )}

      </div>

      <h2 className="mt-5 text-lg font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>

      <div className="mt-6 flex gap-2">

        <button
          type="button"
          onClick={onClose}
          className="h-10 flex-1 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={onConfirm}
          className={`h-10 flex-1 rounded-xl text-xs font-bold text-white ${
            danger
              ? "bg-rose-600 hover:bg-rose-700"
              : "bg-cyan-700 hover:bg-cyan-800"
          }`}
        >
          {confirmText}
        </button>

      </div>

    </ModalShell>
  );
}

/* ========================================================================== */
/* QR MODAL                                                                    */
/* ========================================================================== */

function QRModal({
  esim,
  onClose,
}: {
  esim: Esim;
  onClose: () => void;
}) {
  return (
    <ModalShell onClose={onClose}>

      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-lg font-bold text-slate-900">
            Install eSIM
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Scan this QR code with the device you want to activate.
          </p>

        </div>

        <button
          type="button"
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100"
        >
          <X className="h-4 w-4" />
        </button>

      </div>

      <div className="mt-6 flex justify-center">

        {/* Production: replace this visual with your provider's
            actual QR-code image/data. */}

        <div className="grid h-56 w-56 grid-cols-11 gap-1 rounded-xl border-8 border-white bg-white p-3 shadow-lg">

          {Array.from({
            length: 121,
          }).map((_, index) => {

            const active =
              (index * 17 +
                index * index) %
                7 <
              3;

            return (
              <span
                key={index}
                className={
                  active
                    ? "bg-slate-900"
                    : "bg-white"
                }
              />
            );
          })}

        </div>

      </div>

      <div className="mt-5 rounded-xl bg-slate-50 p-4 text-center">

        <p className="text-xs font-bold text-slate-700">
          {esim.flag}{" "}
          {esim.planName}
        </p>

        <p className="mt-1 text-[10px] text-slate-400">
          QR code contains your eSIM activation profile.
        </p>

      </div>

    </ModalShell>
  );
}

/* ========================================================================== */
/* ACTIVATION MODAL                                                            */
/* ========================================================================== */

function ActivationModal({
  esim,
  copied,
  onCopy,
  onClose,
}: {
  esim: Esim;
  copied: boolean;
  onCopy: () => void;
  onClose: () => void;
}) {
  return (
    <ModalShell onClose={onClose}>

      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-lg font-bold text-slate-900">
            Manual activation
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Enter these details when manually installing your eSIM.
          </p>

        </div>

        <button
          type="button"
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100"
        >
          <X className="h-4 w-4" />
        </button>

      </div>

      <div className="mt-6 space-y-3">

        <CopyField
          label="Activation code"
          value={esim.activationCode}
          copied={copied}
          onCopy={onCopy}
        />

        <CopyField
          label="SM-DP+ / Provider"
          value="sm-v4.example.com"
          copied={false}
          onCopy={() => {}}
        />

      </div>

      <div className="mt-5 rounded-xl border border-amber-100 bg-amber-50 p-4">

        <div className="flex gap-3">

          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />

          <p className="text-[11px] leading-5 text-amber-800">
            Never share your activation code publicly.
            Anyone with the activation details may be able
            to install the eSIM.
          </p>

        </div>

      </div>

    </ModalShell>
  );
}

/* ========================================================================== */
/* MODAL SHELL                                                                 */
/* ========================================================================== */

function ModalShell({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50">

      <button
        type="button"
        onClick={onClose}
        aria-label="Close modal"
        className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
      />

      <div className="relative flex min-h-full items-center justify-center p-4">

        <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-6">
          {children}
        </div>

      </div>

    </div>
  );
}


