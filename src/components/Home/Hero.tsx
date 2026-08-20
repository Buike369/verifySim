


// import {
//   ShieldCheck,
//   Wifi,
//   Globe2,
//   CheckCircle2,
//   Signal,
//   Smartphone,
//   ArrowRight,
//   ShoppingCart,
// } from "lucide-react";


// export default function Hero() {

//   return (

//     <section
//       className="
//       relative
//       overflow-hidden
//       bg-white
//       pt-8
//       "
//     >

//       {/* Background Glow */}

//       <div
//         className="
//         absolute
//         -top-40
//         -right-40
//         h-[500px]
//         w-[500px]
//         rounded-full
//         bg-blue-100/60
//         blur-3xl
//         "
//       />

//       <div
//         className="
//         absolute
//         bottom-0
//         -left-40
//         h-[400px]
//         w-[400px]
//         rounded-full
//         bg-indigo-100/50
//         blur-3xl
//         "
//       />



//       <div
//         className="
//         relative
//         max-w-7xl
//         mx-auto
//         px-5
//         sm:px-8
//         lg:px-10
//         py-20
//         lg:py-32
//         grid
//         lg:grid-cols-2
//         gap-16
//         items-center
//         "
//       >



//         {/* LEFT CONTENT */}

//         <div>


//           <div
//             className="
//             inline-flex
//             items-center
//             gap-2
//             rounded-full
//             bg-[#eef3ff]
//             px-4
//             py-2
//             text-sm
//             font-medium
//             text-[#071B4D]
//             border
//             border-blue-100
//             "
//           >

//             <CheckCircle2 size={16}/>

//             Trusted by users worldwide

//           </div>



//           <h1
//             className="
//             mt-6
//             text-4xl
//             sm:text-5xl
//             lg:text-[68px]
//             leading-[1.05]
//             font-bold
//             tracking-tight
//             text-[#000000]
//             "
//           >

//             Global
//             <span className="text-[#1a73e8]">
//               {" "}Verification
//             </span>

//             <br/>

//             Numbers &
//             <br/>

//             Data eSIM

//           </h1>



//           <p
//             className="
//             mt-7
//             max-w-xl
//             text-lg
//             leading-relaxed
//             text-[#5a6c84]
//             "
//           >

//             Get instant virtual numbers for OTP verification
//             and activate affordable data-only eSIM plans
//             with reliable connectivity across 190+ countries.

//           </p>




//           {/* BUTTONS */}

//           <div
//             className="
//             mt-9
//             flex
//             flex-col
//             sm:flex-row
//             gap-4
//             "
//           >


//             <button
//               className="
//               rounded-xl
//               bg-[#1a73e8]
//               px-8
//               py-4
//               text-white
//               font-semibold
//               shadow-lg
//               shadow-blue-900/20
//               hover:bg-[#0b2d73]
//               transition-all
//               duration-300
//               flex items-center gap-2 justify-center
//               "
//             >
//                 <ShoppingCart size={18}/>

//               Buy Verification Number

//             </button>



//             <button
//               className="
//               rounded-xl
//               border
//               border-[#505e804f]
//               px-8
//               py-4
//               text-[#071B4D]
//               font-semibold
//               hover:bg-[#071B4D]
//               hover:text-white
//               transition-all
//               duration-300 flex items-center gap-2
//               justify-center
//               "
//             >

//               Explore eSIM Plans
//               <ArrowRight
// size={18}
// className="
// group-hover:translate-x-1
// transition
// "
// />
  
//             </button>


//           </div>





//           {/* TRUST STATS */}

//           <div
//             className="
//             mt-12
//             grid
//             grid-cols-3
//             gap-5
//             max-w-md
//             "
//           >

//             <div>

//               <h3 className="text-2xl font-bold text-[#071B4D]">
//                 190+
//               </h3>

//               <p className="text-sm text-gray-500">
//                 Countries
//               </p>

//             </div>



//             <div>

//               <h3 className="text-2xl font-bold text-[#071B4D]">
//                 99.9%
//               </h3>

//               <p className="text-sm text-gray-500">
//                 Uptime
//               </p>

//             </div>



//             <div>

//               <h3 className="text-2xl font-bold text-[#071B4D]">
//                 24/7
//               </h3>

//               <p className="text-sm text-gray-500">
//                 Support
//               </p>

//             </div>


//           </div>


//         </div>






//         {/* RIGHT DASHBOARD CARD */}


//         <div
//           className="
//           relative
//           "
//         >


//           {/* Floating badge */}

//           <div
//             className="
//             absolute
//             -top-6
//             right-5
//             z-10
//             rounded-2xl
//             bg-white
//             shadow-xl
//             px-5
//             py-3
//             flex
//             items-center
//             gap-3
//             border
//             border-gray-100
//             "
//           >

//             <Signal
//               size={20}
//               className="text-green-500"
//             />

//             <div>

//               <p className="text-xs text-gray-500">
//                 Network
//               </p>

//               <p className="font-semibold">
//                 Connected
//               </p>

//             </div>


//           </div>





//           <div
//             className="
//             rounded-[32px]
//             bg-white
//             border
//             border-gray-100
//             shadow-2xl
//             shadow-blue-900/10
//             p-6
//             sm:p-8
//             "
//           >



//             {/* Verification Card */}


//             <div
//               className="
//               rounded-3xl
//               bg-gradient-to-br
//               from-[#1a73e8]
//               to-[#3083f61a]
//               p-6
//               text-white
//               "
//             >

//               <div
//                 className="
//                 flex
//                 justify-between
//                 items-start
//                 "
//               >

//                 <div>

//                   <p className="text-blue-100 text-sm">
//                     Verification Number
//                   </p>


//                   <h3 className="mt-2 text-3xl font-bold">
//                     +1 415 *** 8921
//                   </h3>

//                 </div>


//                 <ShieldCheck size={34}/>

//               </div>



//               <div
//                 className="
//                 mt-6
//                 flex
//                 items-center
//                 gap-2
//                 text-sm
//                 "
//               >

//                 <CheckCircle2 size={16}/>

//                 OTP Ready

//               </div>


//             </div>





//             {/* eSIM CARD */}


//             <div
//               className="
//               mt-6
//               rounded-3xl
//               bg-[#f7f9fc]
//               py-6
//               px-3
//               "
//             >


//               <div
//                 className="
//                 flex
//                 items-center
//                 gap-4
//                 "
//               >

//                 <div
//                   className="
//                   rounded-2xl
//                   bg-blue-100
//                   p-4
//                   "
//                 >

//                   <Wifi
//                     className="text-[#071B4D]"
//                   />

//                 </div>



//                 <div>

//                   <h3 className="font-bold text-lg">
//                     USA Data eSIM
//                   </h3>


//                   <p className="text-gray-500 text-sm">
//                     High speed mobile data
//                   </p>

//                 </div>


//               </div>





//               <div
//                 className="
//                 mt-6
//                 grid
//                 grid-cols-3
//                 gap-2
//                 "
//               >

//                 <div className="bg-white rounded-xl p-2 text-center">

//                   <Globe2
//                     className="mx-auto text-[#071B4D]"
//                     size={20}
//                   />

//                   <p className="text-xs mt-2">
//                     Global
//                   </p>

//                 </div>



//                 <div className="bg-white rounded-xl p-3 text-center">

//                   <Smartphone
//                     className="mx-auto text-[#071B4D]"
//                     size={20}
//                   />

//                   <p className="text-xs mt-2">
//                     Instant
//                   </p>

//                 </div>



//                 <div className="bg-white rounded-xl p-3 text-center">

//                   <Wifi
//                     className="mx-auto text-[#071B4D]"
//                     size={20}
//                   />

//                   <p className="text-xs mt-2">
//                     5G Ready
//                   </p>

//                 </div>


//               </div>


//             </div>


//           </div>


//         </div>



//       </div>


//     </section>

//   );

// }



"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Wifi,
  Globe2,
  CheckCircle2,
  Signal,
  Smartphone,
  ArrowRight,
  ShoppingCart,
  Zap,
  Lock,
  Star,
  Phone,
  ChevronRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-12 md:pt-15">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="absolute left-1/2 top-20 h-32 w-32 -translate-x-1/2 rounded-full bg-cyan-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:px-10 lg:py-28">

        {/* ================= LEFT ================= */}
        <div className="max-w-2xl">

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-[#071B4D] shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>

            Trusted global connectivity platform
          </div>

          {/* Heading */}
          <h1 className="mt-7 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#000] sm:text-5xl lg:text-[68px]">
            Connect.
            <br />

            <span className="bg-gradient-to-r from-[#1a73e8] to-[#38a5ff] bg-clip-text text-transparent">
              Verify.
            </span>

            <br />

            Go Global.
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Get instant virtual numbers for OTP verification and affordable
            data eSIM plans with reliable connectivity across{" "}
            <span className="font-semibold text-[#000]">
              190+ countries.
            </span>
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">

            <Link
              href="/verification-numbers"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#1a73e8] px-7 py-4 font-semibold text-white shadow-xl shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0d5dcc] hover:shadow-2xl"
            >
              <ShoppingCart size={18} />

              Buy Verification Number

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/esim"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-[#000] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50"
            >
              <Wifi size={18} />

              Explore eSIM Plans

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>

          {/* Mini Trust Text */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">

            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500" />
              Instant activation
            </div>

            <div className="flex items-center gap-2">
              <Lock size={15} className="text-blue-500" />
              Secure payments
            </div>

            <div className="flex items-center gap-2">
              <Zap size={16} className="text-amber-500" />
              Fast delivery
            </div>

          </div>

          {/* Stats */}
          <div className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-slate-200">

            <div className="pr-5">
              <p className="text-2xl font-bold text-[#000] sm:text-3xl">
                190+
              </p>

              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Countries
              </p>
            </div>

            <div className="px-5">
              <p className="text-2xl font-bold text-[#000] sm:text-3xl">
                99.9%
              </p>

              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Platform uptime
              </p>
            </div>

            <div className="pl-5">
              <p className="text-2xl font-bold text-[#000] sm:text-3xl">
                24/7
              </p>

              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Support
              </p>
            </div>

          </div>

        </div>

        {/* ================= RIGHT ================= */}
        <div className="relative mx-auto w-full max-w-xl">

          {/* Floating Network Status */}
          <div className="absolute -right-2 -top-8 z-20 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white px-5 py-3 shadow-xl sm:flex">

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50">
              <Signal size={18} className="text-green-500" />
            </div>

            <div>
              <p className="text-[11px] text-slate-400">
                Network status
              </p>

              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />

                <p className="text-sm font-semibold text-slate-800">
                  All systems operational
                </p>
              </div>
            </div>

          </div>

          {/* Main Dashboard */}
          <div className="relative rounded-[30px] border border-slate-200 bg-white p-4 shadow-[0_25px_80px_-20px_rgba(7,27,77,0.25)] sm:p-6">

            {/* Dashboard Header */}
            <div className="mb-5 flex items-center justify-between">

              <div>
                <p className="text-xs font-medium text-slate-400">
                  GLOBAL CONNECT
                </p>

                <h2 className="mt-1 text-lg font-bold text-[#000]">
                  Your connectivity
                </h2>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                <Globe2 size={20} className="text-[#1a73e8]" />
              </div>

            </div>

            {/* Verification Card */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a73e8] via-[#3a79d7] to-[#5f9ff3] p-6 text-white shadow-lg">

              {/* Decorative circle */}
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10" />

              <div className="relative">

                <div className="flex items-start justify-between">

                  <div>
                    <div className="flex items-center gap-2">
                      <Phone size={15} className="text-blue-200" />

                      <p className="text-sm text-blue-100">
                        Verification Number
                      </p>
                    </div>

                    <h3 className="mt-3 text-2xl font-bold tracking-wide sm:text-3xl">
                      +1 415 *** 8921
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <ShieldCheck size={25} />
                  </div>

                </div>

                <div className="mt-7 flex items-center justify-between">

                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    OTP Ready
                  </div>

                  <span className="text-xs text-blue-100">
                    United States
                  </span>

                </div>

              </div>
            </div>

            {/* eSIM */}
            <div className="mt-5 rounded-3xl border border-slate-100 bg-slate-50 p-5">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
                    <Wifi
                      size={22}
                      className="text-[#1a73e8]"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      DATA eSIM
                    </p>

                    <h3 className="mt-0.5 font-bold text-[#000]">
                      USA Data eSIM
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      High-speed mobile data
                    </p>
                  </div>

                </div>

                <ChevronRight
                  size={18}
                  className="text-slate-400"
                />

              </div>

              {/* Features */}
              <div className="mt-5 grid grid-cols-3 gap-2">

                <div className="rounded-xl bg-white p-3 text-center shadow-sm">

                  <Globe2
                    size={18}
                    className="mx-auto text-[#1a73e8]"
                  />

                  <p className="mt-2 text-[11px] font-medium text-slate-600">
                    Global
                  </p>

                </div>

                <div className="rounded-xl bg-white p-3 text-center shadow-sm">

                  <Smartphone
                    size={18}
                    className="mx-auto text-[#1a73e8]"
                  />

                  <p className="mt-2 text-[11px] font-medium text-slate-600">
                    Instant
                  </p>

                </div>

                <div className="rounded-xl bg-white p-3 text-center shadow-sm">

                  <Signal
                    size={18}
                    className="mx-auto text-[#1a73e8]"
                  />

                  <p className="mt-2 text-[11px] font-medium text-slate-600">
                    5G Ready
                  </p>

                </div>

              </div>

            </div>

            {/* Bottom Status */}
            <div className="mt-5 flex items-center justify-between rounded-2xl border border-green-100 bg-green-50 px-4 py-3">

              <div className="flex items-center gap-2">

                <CheckCircle2
                  size={17}
                  className="text-green-500"
                />

                <span className="text-xs font-medium text-green-700">
                  Services available worldwide
                </span>

              </div>

              <div className="flex gap-0.5">
                <Star size={12} fill="currentColor" className="text-amber-400" />
                <Star size={12} fill="currentColor" className="text-amber-400" />
                <Star size={12} fill="currentColor" className="text-amber-400" />
                <Star size={12} fill="currentColor" className="text-amber-400" />
                <Star size={12} fill="currentColor" className="text-amber-400" />
              </div>

            </div>

          </div>

          {/* Floating eSIM Badge */}
          <div className="absolute -bottom-6 -left-5 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:flex">

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50">
              <Wifi size={17} className="text-[#1a73e8]" />
            </div>

            <div>
              <p className="text-[11px] text-slate-400">
                eSIM activation
              </p>

              <p className="text-sm font-semibold text-[#071B4D]">
                Ready instantly
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Trust Strip */}
      <div className="relative border-t border-slate-100 bg-slate-50/70">

        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-5 text-xs font-medium text-slate-500 sm:gap-x-12">

          <div className="flex items-center gap-2">
            <ShieldCheck size={15} className="text-[#1a73e8]" />
            Secure & Private
          </div>

          <div className="flex items-center gap-2">
            <Zap size={15} className="text-[#1a73e8]" />
            Instant Delivery
          </div>

          <div className="flex items-center gap-2">
            <Globe2 size={15} className="text-[#1a73e8]" />
            190+ Countries
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 size={15} className="text-green-500" />
            Reliable Service
          </div>

        </div>

      </div>

    </section>
  );
}

