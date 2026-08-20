// "use client";

// import {
//   Search,
//   Globe2,
//   Wifi,
//   Smartphone,
//   Zap,
//   ShieldCheck,
//   CheckCircle2,
//   Signal,
//   ArrowRight,
// } from "lucide-react";
// import Navbar from "@/components/Home/Navbar";
// import Footer from "@/components/Home/footer";

// import { useState } from "react";



// const plans = [

// {
// country:"United States",
// flag:"🇺🇸",
// data:"10GB",
// duration:"30 Days",
// price:"$15",
// network:"AT&T / T-Mobile",
// speed:"5G Ready"
// },


// {
// country:"United Kingdom",
// flag:"🇬🇧",
// data:"20GB",
// duration:"30 Days",
// price:"$20",
// network:"Vodafone",
// speed:"5G Ready"
// },


// {
// country:"France",
// flag:"🇫🇷",
// data:"5GB",
// duration:"15 Days",
// price:"$10",
// network:"Orange",
// speed:"4G LTE"
// },


// {
// country:"Japan",
// flag:"🇯🇵",
// data:"15GB",
// duration:"30 Days",
// price:"$25",
// network:"NTT Docomo",
// speed:"5G Ready"
// }


// ];





// export default function EsimPage(){


// const [search,setSearch] = useState("");



// return (
// <>
// <Navbar/>

// <main
// className="
// min-h-screen
// bg-[#f7f9fc]
// pt-10

// "
// >





// {/* HERO SECTION */}


// <section
// className="
// relative
// overflow-hidden
// bg-white
// py-20
// lg:py-28
// "
// >


// <div
// className="
// absolute
// right-0
// top-0
// h-[500px]
// w-[500px]
// rounded-full
// bg-blue-100/50
// blur-3xl
// "
// />



// <div
// className="
// relative
// max-w-7xl
// mx-auto
// px-5
// sm:px-8
// lg:px-10
// text-center
// "
// >



// <div
// className="
// inline-flex
// items-center
// gap-2
// rounded-full
// bg-blue-100
// px-5
// py-2
// text-sm
// font-medium
// text-[#071B4D]
// "
// >

// <Globe2 size={17}/>

// Global Data eSIM Network

// </div>







// <h1
// className="
// mt-7
// text-4xl
// sm:text-5xl
// lg:text-6xl
// font-bold
// leading-tight
// text-[#000000]
// "
// >

// Stay <span className="text-[#1a73e8]">Connected </span>
// Anywhere In The World

// </h1>





// <p
// className="
// mt-6
// max-w-3xl
// mx-auto
// text-lg
// text-[#686b71]
// "
// >

// Activate affordable data-only eSIM plans
// instantly and enjoy fast mobile internet
// without expensive roaming fees.

// </p>







// {/* Search */}

// <div
// className="
// mt-10
// max-w-3xl
// mx-auto
// rounded-2xl
// bg-white
// border
// border-[#abb2bb4a]
// shadow-xl
// p-3
// flex
// flex-col
// md:flex-row
// gap-3
// "
// >



// <div
// className="
// flex-1
// flex
// items-center
// gap-3
// bg-gray-50
// rounded-xl
// px-4
// "
// >

// <Search
// className="text-gray-400"
// />


// <input

// placeholder="Search country..."

// value={search}

// onChange={(e)=>setSearch(e.target.value)}

// className="
// w-full
// py-4
// bg-transparent
// outline-none
// "

// />


// </div>




// <button
// className="
// rounded-xl
// bg-[#1a73e8]
// px-8
// py-4
// text-white
// font-semibold
// "
// >

// Find eSIM

// </button>



// </div>



// </div>


// </section>









// {/* BENEFITS */}



// <section
// className="
// max-w-7xl
// mx-auto
// px-5
// sm:px-8
// lg:px-10
// py-16
// "
// >


// <div
// className="
// grid
// md:grid-cols-3
// gap-6
// "
// >


// <div
// className="
// bg-white
// rounded-3xl
// p-7
// border
// border-[#abb2bb4a]
// "
// >


// <Zap
// className="text-[#071B4D]"
// size={32}
// />


// <h3
// className="
// mt-5
// text-xl
// font-bold
// text-[#000000]
// "
// >

// Instant Activation

// </h3>


// <p className="
// mt-3
// text-[#686b71]
// ">

// Install your eSIM within minutes.

// </p>


// </div>






// <div
// className="
// bg-white
// rounded-3xl
// p-7
// border
// border-[#abb2bb4a]
// "
// >


// <Signal
// className="text-[#071B4D]"
// size={32}
// />


// <h3
// className="
// mt-5
// text-xl
// font-bold
// text-[#000000]
// "
// >

// Reliable Networks

// </h3>


// <p className="
// mt-3
// text-[#686b71]
// ">

// Connect using trusted mobile operators.

// </p>


// </div>







// <div
// className="
// bg-white
// rounded-3xl
// p-7
// border
// border-[#abb2bb4a]
// "
// >


// <ShieldCheck
// className="text-[#071B4D]"
// size={32}
// />


// <h3
// className="
// mt-5
// text-xl
// font-bold
// text-[#000000]
// "
// >

// Secure Connectivity

// </h3>


// <p className="
// mt-3
// text-[#686b71]
// ">

// Safe and private digital connection.

// </p>


// </div>



// </div>


// </section>









// {/* PLANS */}



// <section
// className="
// max-w-7xl
// mx-auto
// px-5
// sm:px-8
// lg:px-10
// pb-20
// "
// >



// <div
// className="
// flex
// justify-between
// items-center
// "
// >


// <div>

// <h2
// className="
// text-3xl
// font-bold
// text-[#000000]
// "
// >

// Popular eSIM Plans

// </h2>


// <p
// className="
// mt-2
// text-[#686b71]
// "
// >

// Choose your destination and stay connected.

// </p>


// </div>



// <button
// className="
// flex
// items-center
// gap-2
// text-[#071B4D]
// font-semibold
// "
// >

// View all plans

// <ArrowRight size={18}/>

// </button>


// </div>







// <div
// className="
// mt-10
// grid
// sm:grid-cols-2
// lg:grid-cols-4
// gap-6
// "
// >


// {
// plans.map((plan,index)=>(


// <div
// key={index}
// className="
// bg-white
// rounded-3xl
// border
// border-[#1a73e833]
// p-6
// shadow-sm
// hover:shadow-xl
// hover:-translate-y-2
// transition
// "
// >



// <div
// className="
// flex
// justify-between
// "
// >


// <span className="text-4xl">

// {plan.flag}

// </span>


// <div
// className="
// rounded-full
// bg-green-50
// px-3
// py-1
// text-xs
// text-green-700
// "
// >

// Available

// </div>


// </div>





// <h3
// className="
// mt-6
// text-xl
// font-bold
// text-[#000000]
// "
// >

// {plan.country}

// </h3>





// <div
// className="
// mt-5
// rounded-2xl
// bg-[#f4f7fc]
// p-5
// "
// >


// <div className="
// flex
// items-center
// gap-3
// "
// >

// <Wifi
// className="text-[#000000]"
// />


// <div>

// <p className="font-bold">

// {plan.data}

// </p>


// <p className="text-sm text-gray-500">

// {plan.duration}

// </p>


// </div>


// </div>


// </div>







// <p
// className="
// mt-4
// text-sm
// text-gray-500
// "
// >

// Network: {plan.network}

// </p>


// <p
// className="
// mt-2
// text-sm
// text-gray-500
// "
// >

// Speed: {plan.speed}

// </p>







// <div
// className="
// mt-6
// flex
// justify-between
// items-center
// "
// >


// <h4
// className="
// text-2xl
// font-bold
// text-[#000000]
// "
// >

// {plan.price}

// </h4>



// <button
// className="
// rounded-xl
// bg-[#1a73e8]
// px-5
// py-3
// text-white
// font-semibold
// "
// >

// Buy

// </button>


// </div>



// </div>


// ))


// }


// </div>


// </section>









// {/* CTA */}



// <section
// className="
// bg-[#1a73e8]
// py-20
// text-center
// text-white
// "
// >


// <div
// className="
// max-w-4xl
// mx-auto
// px-5
// "
// >


// <h2
// className="
// text-4xl
// font-bold
// "
// >

// Travel Without Borders

// </h2>



// <p
// className="
// mt-5
// text-blue-100
// "
// >

// One eSIM. Multiple countries.
// No physical SIM cards required.

// </p>




// <button
// className="
// mt-8
// rounded-xl
// bg-white
// px-10
// py-4
// font-semibold
// text-[#071B4D]
// "
// >

// Get Your eSIM

// </button>


// </div>


// </section>





// </main>
// <Footer/>
// </>


// )

// }



"use client";

import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Globe2,
  HelpCircle,
  Search,
  ShieldCheck,
  Signal,
  Smartphone,
  Sparkles,
  Wifi,
  X,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/footer";

type EsimPlan = {
  id: string;
  country: string;
  code: string;
  flag: string;
  data: string;
  duration: string;
  price: number;
  currency: string;
  network: string;
  speed: string;
  coverage: string;
  popular?: boolean;
  features: string[];
};

const plans: EsimPlan[] = [
  {
    id: "us-10gb-30",
    country: "United States",
    code: "US",
    flag: "🇺🇸",
    data: "10GB",
    duration: "30 Days",
    price: 15,
    currency: "USD",
    network: "AT&T / T-Mobile",
    speed: "5G Ready",
    coverage: "Nationwide",
    popular: true,
    features: [
      "Instant activation",
      "5G / 4G LTE",
      "Data-only",
      "Hotspot supported",
    ],
  },
  {
    id: "uk-20gb-30",
    country: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    data: "20GB",
    duration: "30 Days",
    price: 20,
    currency: "USD",
    network: "Vodafone",
    speed: "5G Ready",
    coverage: "Nationwide",
    popular: true,
    features: [
      "Instant activation",
      "5G / 4G LTE",
      "Data-only",
      "Hotspot supported",
    ],
  },
  {
    id: "fr-5gb-15",
    country: "France",
    code: "FR",
    flag: "🇫🇷",
    data: "5GB",
    duration: "15 Days",
    price: 10,
    currency: "USD",
    network: "Orange",
    speed: "4G LTE",
    coverage: "Nationwide",
    features: [
      "Instant activation",
      "4G LTE",
      "Data-only",
      "Hotspot supported",
    ],
  },
  {
    id: "jp-15gb-30",
    country: "Japan",
    code: "JP",
    flag: "🇯🇵",
    data: "15GB",
    duration: "30 Days",
    price: 25,
    currency: "USD",
    network: "NTT Docomo",
    speed: "5G Ready",
    coverage: "Nationwide",
    popular: true,
    features: [
      "Instant activation",
      "5G / 4G LTE",
      "Data-only",
      "Hotspot supported",
    ],
  },
  {
    id: "ca-10gb-30",
    country: "Canada",
    code: "CA",
    flag: "🇨🇦",
    data: "10GB",
    duration: "30 Days",
    price: 18,
    currency: "USD",
    network: "Rogers",
    speed: "5G Ready",
    coverage: "Nationwide",
    features: [
      "Instant activation",
      "5G / 4G LTE",
      "Data-only",
      "Hotspot supported",
    ],
  },
  {
    id: "de-10gb-30",
    country: "Germany",
    code: "DE",
    flag: "🇩🇪",
    data: "10GB",
    duration: "30 Days",
    price: 16,
    currency: "USD",
    network: "Telekom",
    speed: "5G Ready",
    coverage: "Nationwide",
    features: [
      "Instant activation",
      "5G / 4G LTE",
      "Data-only",
      "Hotspot supported",
    ],
  },
  {
    id: "ae-5gb-15",
    country: "United Arab Emirates",
    code: "AE",
    flag: "🇦🇪",
    data: "5GB",
    duration: "15 Days",
    price: 14,
    currency: "USD",
    network: "du",
    speed: "5G Ready",
    coverage: "Nationwide",
    features: [
      "Instant activation",
      "5G / 4G LTE",
      "Data-only",
      "Hotspot supported",
    ],
  },
  {
    id: "it-10gb-30",
    country: "Italy",
    code: "IT",
    flag: "🇮🇹",
    data: "10GB",
    duration: "30 Days",
    price: 15,
    currency: "USD",
    network: "Vodafone",
    speed: "5G Ready",
    coverage: "Nationwide",
    features: [
      "Instant activation",
      "5G / 4G LTE",
      "Data-only",
      "Hotspot supported",
    ],
  },
];

const faqs = [
  {
    question: "What is an eSIM?",
    answer:
      "An eSIM is a digital SIM built into compatible phones and devices. You can activate a mobile data plan without inserting a physical SIM card.",
  },
  {
    question: "How quickly is my eSIM activated?",
    answer:
      "After a successful purchase, your eSIM details can be delivered digitally. Installation usually takes only a few minutes on a compatible device.",
  },
  {
    question: "Can I use the eSIM while travelling?",
    answer:
      "Yes. Select the destination you are travelling to, purchase the appropriate plan and install the eSIM before or during your trip.",
  },
  {
    question: "Does the eSIM support 5G?",
    answer:
      "5G availability depends on the selected plan, local carrier and your device. Plans marked 5G Ready can connect to supported 5G networks.",
  },
  {
    question: "Can I keep my physical SIM?",
    answer:
      "Yes. On compatible dual-SIM devices, you can keep your physical SIM for calls/SMS while using the eSIM for mobile data.",
  },
];

export default function EsimPage() {
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<EsimPlan | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredPlans = useMemo(() => {
    const query = search.trim().toLowerCase();

    const filtered = plans.filter((plan) => {
      if (!query) return true;

      return (
        plan.country.toLowerCase().includes(query) ||
        plan.code.toLowerCase().includes(query) ||
        plan.network.toLowerCase().includes(query)
      );
    });

    return showAll ? filtered : filtered.slice(0, 4);
  }, [search, showAll]);

  const popularPlans = plans.filter((plan) => plan.popular);

  const handleSearch = () => {
    const element = document.getElementById("plans");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-[#071B4D]">
      <Navbar />

      <main className="pt-16">
        {/* HERO */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-100/40 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 lg:px-10 lg:pb-28 lg:pt-24">
            <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
              {/* HERO CONTENT */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#1a73e8]">
                  <Globe2 size={17} />
                  Global eSIM Connectivity
                </div>

                <h1 className="mt-7 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-[#071B4D] sm:text-5xl lg:text-6xl">
                  Stay connected
                  <span className="text-[#1a73e8]"> anywhere </span>
                  in the world.
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-7 text-[#686b71] sm:text-lg">
                  Get affordable mobile data in destinations around the world.
                  Buy an eSIM, install it digitally and connect without the
                  hassle of physical SIM cards or expensive roaming fees.
                </p>

                {/* SEARCH */}
                <div className="mt-9 max-w-2xl rounded-2xl border border-gray-200 bg-white p-2 shadow-xl shadow-blue-100/40">
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <div className="flex min-h-[56px] flex-1 items-center gap-3 rounded-xl bg-[#f6f8fb] px-4">
                      <Search className="shrink-0 text-gray-400" size={20} />

                      <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleSearch();
                          }
                        }}
                        placeholder="Where are you travelling?"
                        className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                        aria-label="Search eSIM destination"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleSearch}
                      className="flex min-h-[56px] items-center justify-center gap-2 rounded-xl bg-[#1a73e8] px-7 font-semibold text-white transition hover:bg-[#155fc0] active:scale-[.98]"
                    >
                      Search Plans
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                {/* TRUST */}
                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={17} className="text-green-600" />
                    Instant delivery
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={17} className="text-green-600" />
                    No physical SIM
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={17} className="text-green-600" />
                    4G / 5G networks
                  </div>
                </div>
              </div>

              {/* HERO CARD */}
              <div className="relative mx-auto w-full max-w-md">
                <div className="rounded-[2rem] border border-white/70 bg-[#071B4D] p-6 shadow-2xl shadow-blue-200/50 sm:p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-blue-200">
                        Recommended destination
                      </p>

                      <h3 className="mt-1 text-2xl font-bold text-white">
                        United States
                      </h3>
                    </div>

                    <span className="text-5xl">🇺🇸</span>
                  </div>

                  <div className="mt-7 rounded-2xl bg-white/10 p-5 backdrop-blur">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-blue-100">Data</p>
                        <p className="mt-1 text-3xl font-bold text-white">
                          10GB
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-sm text-blue-100">Validity</p>
                        <p className="mt-1 font-semibold text-white">
                          30 Days
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 h-px bg-white/10" />

                    <div className="mt-5 flex items-center justify-between text-sm">
                      <span className="text-blue-100">Network</span>
                      <span className="font-semibold text-white">
                        AT&T / T-Mobile
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-sm">
                      <span className="text-blue-100">Speed</span>
                      <span className="font-semibold text-white">
                        5G Ready
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 flex items-end justify-between">
                    <div>
                      <p className="text-sm text-blue-200">Starting from</p>
                      <p className="mt-1 text-3xl font-bold text-white">
                        $15
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedPlan(plans[0])}
                      className="rounded-xl bg-white px-5 py-3 font-semibold text-[#071B4D] transition hover:bg-blue-50"
                    >
                      Get eSIM
                    </button>
                  </div>
                </div>

                <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:block">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-green-50 p-3">
                      <Signal className="text-green-600" size={22} />
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        Network Status
                      </p>
                      <p className="font-semibold text-gray-900">
                        Connected
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="grid gap-5 md:grid-cols-3">
            <BenefitCard
              icon={<Zap size={25} />}
              title="Instant Activation"
              description="Receive your eSIM digitally and get connected without waiting for a physical SIM."
            />

            <BenefitCard
              icon={<Signal size={25} />}
              title="Reliable Networks"
              description="Connect through trusted mobile networks with fast 4G LTE and 5G-ready plans."
            />

            <BenefitCard
              icon={<ShieldCheck size={25} />}
              title="Secure Connectivity"
              description="A convenient digital connection designed for modern travellers and remote users."
            />
          </div>
        </section>

        {/* POPULAR DESTINATIONS */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a73e8]">
                  <Sparkles size={17} />
                  Popular destinations
                </div>

                <h2 className="mt-2 text-3xl font-bold text-[#071B4D] sm:text-4xl">
                  Travel with confidence
                </h2>

                <p className="mt-3 max-w-2xl text-gray-500">
                  Explore some of the most popular eSIM destinations.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setShowAll(true);

                  document
                    .getElementById("plans")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="flex items-center gap-2 font-semibold text-[#1a73e8]"
              >
                View all
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {popularPlans.map((plan) => (
                <button
                  type="button"
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan)}
                  className="group rounded-3xl border border-gray-100 bg-[#f8fafc] p-5 text-left transition hover:-translate-y-1 hover:border-blue-100 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-4xl">{plan.flag}</span>

                    <ArrowRight
                      size={19}
                      className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-[#1a73e8]"
                    />
                  </div>

                  <h3 className="mt-5 font-bold text-gray-900">
                    {plan.country}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    From ${plan.price} · {plan.data}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* PLANS */}
        <section
          id="plans"
          className="scroll-mt-20 mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10"
        >
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold text-[#1a73e8]">
                eSIM marketplace
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#071B4D] sm:text-4xl">
                Find your perfect plan
              </h2>

              <p className="mt-3 text-gray-500">
                Choose a plan based on your destination, data needs and trip
                duration.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-500">
              <Globe2 size={17} />
              {filteredPlans.length} plans available
            </div>
          </div>

          {/* SEARCH FILTER */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <div className="flex h-12 flex-1 items-center gap-3 rounded-xl border border-gray-200 bg-white px-4">
              <Search size={18} className="text-gray-400" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by country, code or network..."
                className="w-full bg-transparent text-sm outline-none"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="rounded-lg p-1 text-gray-400 hover:bg-gray-100"
                  aria-label="Clear search"
                >
                  <X size={17} />
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={() => setShowAll((value) => !value)}
              className="h-12 rounded-xl border border-gray-200 bg-white px-5 text-sm font-semibold text-[#071B4D] hover:bg-gray-50"
            >
              {showAll ? "Show popular" : "View all plans"}
            </button>
          </div>

          {/* PLAN GRID */}
          {filteredPlans.length > 0 ? (
            <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredPlans.map((plan) => (
                <PlanCard
                  key={plan.id}
                  plan={plan}
                  onBuy={() => setSelectedPlan(plan)}
                />
              ))}
            </div>
          ) : (
            <div className="mt-9 rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
                <Globe2 className="text-[#1a73e8]" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                No eSIM plans found
              </h3>

              <p className="mt-2 text-gray-500">
                Try searching for another country or network.
              </p>

              <button
                type="button"
                onClick={() => setSearch("")}
                className="mt-6 rounded-xl bg-[#1a73e8] px-5 py-3 font-semibold text-white"
              >
                Clear search
              </button>
            </div>
          )}
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-[#071B4D] py-20 text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold text-blue-300">
                Simple setup
              </p>

              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                Get connected in 3 simple steps
              </h2>

              <p className="mt-4 text-blue-100/70">
                No store visit. No physical SIM card. Just purchase, install
                and connect.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              <Step
                number="01"
                icon={<Globe2 size={25} />}
                title="Choose your destination"
                description="Select the country or region where you need mobile data."
              />

              <Step
                number="02"
                icon={<Smartphone size={25} />}
                title="Purchase your eSIM"
                description="Choose a data plan and complete your secure checkout."
              />

              <Step
                number="03"
                icon={<Signal size={25} />}
                title="Install & connect"
                description="Install your eSIM on a compatible device and start using data."
              />
            </div>
          </div>
        </section>

        {/* WHY SECTION */}
        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
            <div>
              <p className="text-sm font-semibold text-[#1a73e8]">
                Built for modern travellers
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#071B4D] sm:text-4xl">
                Your connection should travel as easily as you do.
              </h2>

              <p className="mt-5 leading-7 text-gray-500">
                Avoid airport SIM queues, complicated roaming packages and
                unexpected mobile data costs. With an eSIM, your connection is
                delivered digitally and ready for your trip.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Digital delivery",
                  "No physical SIM card required",
                  "Flexible data plans",
                  "4G LTE and 5G-ready options",
                  "Hotspot support on selected plans",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-50">
                      <Check size={15} className="text-green-600" />
                    </div>

                    <span className="font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#f6f8fc] p-7 sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                <Smartphone className="text-[#1a73e8]" size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#071B4D]">
                Is your device eSIM compatible?
              </h3>

              <p className="mt-3 leading-7 text-gray-500">
                Most modern smartphones, tablets and selected laptops support
                eSIM technology. Compatibility depends on your device model
                and carrier.
              </p>

              <div className="mt-7 rounded-2xl bg-white p-5">
                <div className="flex items-start gap-4">
                  <ShieldCheck
                    className="mt-1 shrink-0 text-green-600"
                    size={22}
                  />

                  <div>
                    <p className="font-semibold text-gray-900">
                      Check before purchase
                    </p>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      Make sure your device is unlocked and supports eSIM
                      functionality before buying a plan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#f7f9fc] py-20">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a73e8]">
                <HelpCircle size={18} />
                Help center
              </div>

              <h2 className="mt-3 text-3xl font-bold text-[#071B4D] sm:text-4xl">
                Frequently asked questions
              </h2>

              <p className="mt-3 text-gray-500">
                Everything you need to know before purchasing an eSIM.
              </p>
            </div>

            <div className="mt-10 space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-semibold text-gray-900">
                        {faq.question}
                      </span>

                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-gray-400 transition ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-gray-100 px-5 pb-5 pt-4">
                        <p className="text-sm leading-7 text-gray-500">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#1a73e8] py-20 text-white">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
              <Globe2 size={31} />
            </div>

            <h2 className="mt-7 text-3xl font-bold sm:text-4xl">
              Travel without borders.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
              Choose your destination, select your data plan and stay
              connected wherever your journey takes you.
            </p>

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("plans")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-[#071B4D] transition hover:bg-blue-50"
            >
              Explore eSIM Plans
              <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </main>

      <Footer />

      {/* PURCHASE MODAL */}
      {selectedPlan && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071B4D]/60 px-4 py-6 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedPlan(null);
            }
          }}
        >
          <div className="w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
              <div>
                <p className="text-sm text-gray-500">Selected eSIM</p>

                <h3 className="mt-1 text-xl font-bold text-[#071B4D]">
                  {selectedPlan.country}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedPlan(null)}
                className="rounded-xl p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              <div className="rounded-2xl bg-[#f6f8fc] p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{selectedPlan.flag}</span>

                    <div>
                      <p className="font-bold text-gray-900">
                        {selectedPlan.data} Data
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        {selectedPlan.duration}
                      </p>
                    </div>
                  </div>

                  <p className="text-2xl font-bold text-[#071B4D]">
                    ${selectedPlan.price}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <InfoRow
                  label="Network"
                  value={selectedPlan.network}
                />

                <InfoRow
                  label="Speed"
                  value={selectedPlan.speed}
                />

                <InfoRow
                  label="Coverage"
                  value={selectedPlan.coverage}
                />

                <InfoRow
                  label="Plan type"
                  value="Data-only"
                />
              </div>

              <div className="mt-6 space-y-2">
                {selectedPlan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-green-600"
                    />
                    {feature}
                  </div>
                ))}
              </div>

              <Link
                href={`/esim/checkout?plan=${selectedPlan.id}`}
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1a73e8] px-5 py-4 font-semibold text-white transition hover:bg-[#155fc0]"
              >
                Continue to Checkout
                <ArrowRight size={18} />
              </Link>

              <p className="mt-4 text-center text-xs text-gray-400">
                You will be able to review your order before payment.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-3xl border border-gray-100 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#1a73e8] transition group-hover:bg-[#1a73e8] group-hover:text-white">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-bold text-[#071B4D]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-500">
        {description}
      </p>
    </div>
  );
}

function PlanCard({
  plan,
  onBuy,
}: {
  plan: EsimPlan;
  onBuy: () => void;
}) {
  return (
    <div className="group relative flex flex-col rounded-3xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/40">
      {plan.popular && (
        <div className="absolute -top-3 left-5 rounded-full bg-[#071B4D] px-3 py-1 text-xs font-semibold text-white">
          Popular
        </div>
      )}

      <div className="flex items-start justify-between">
        <span className="text-4xl">{plan.flag}</span>

        <div className="flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
          <CheckCircle2 size={13} />
          Available
        </div>
      </div>

      <h3 className="mt-6 text-xl font-bold text-[#071B4D]">
        {plan.country}
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        {plan.network}
      </p>

      <div className="mt-5 rounded-2xl bg-[#f6f8fc] p-5">
        <div className="flex items-center gap-3">
          <Wifi size={22} className="text-[#1a73e8]" />

          <div>
            <p className="text-2xl font-bold text-[#071B4D]">
              {plan.data}
            </p>

            <p className="text-xs text-gray-500">
              {plan.duration}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 space-y-3 text-sm">
        <div className="flex justify-between gap-3">
          <span className="text-gray-500">Network</span>
          <span className="text-right font-medium text-gray-800">
            {plan.network}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Speed</span>
          <span className="font-medium text-gray-800">
            {plan.speed}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Coverage</span>
          <span className="font-medium text-gray-800">
            {plan.coverage}
          </span>
        </div>
      </div>

      <div className="mt-6 flex items-end justify-between border-t border-gray-100 pt-5">
        <div>
          <p className="text-xs text-gray-400">Starting from</p>

          <p className="mt-1 text-2xl font-bold text-[#071B4D]">
            ${plan.price}
          </p>
        </div>

        <button
          type="button"
          onClick={onBuy}
          className="rounded-xl bg-[#1a73e8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#155fc0] active:scale-[.98]"
        >
          Buy eSIM
        </button>
      </div>
    </div>
  );
}

function Step({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="relative rounded-3xl border border-white/10 bg-white/5 p-7">
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
          {icon}
        </div>

        <span className="text-4xl font-bold text-white/10">
          {number}
        </span>
      </div>

      <h3 className="mt-7 text-xl font-bold">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-blue-100/70">
        {description}
      </p>
    </div>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-5 text-sm">
      <span className="text-gray-500">{label}</span>

      <span className="text-right font-semibold text-gray-900">
        {value}
      </span>
    </div>
  );
}

