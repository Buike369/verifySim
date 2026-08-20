// "use client";

// import {
//   Check,
//   Globe2,
//   ShieldCheck,
//   Zap,
//   Crown,
//   Smartphone,
//   Phone,
//   Building2,
// } from "lucide-react";
// import Navbar from "@/components/Home/Navbar";
// import Footer from "@/components/Home/footer";



// const plans = [

// {
// name:"Starter",
// description:"Perfect for personal verification and occasional connectivity.",
// price:"$9",
// period:"/month",
// icon:Phone,

// features:[
// "Virtual verification numbers",
// "Basic OTP access",
// "Single device support",
// "Email support"
// ],

// button:"Get Started"

// },



// {
// name:"Professional",
// description:"Best choice for frequent users and travelers.",
// price:"$29",
// period:"/month",
// popular:true,
// icon:Zap,

// features:[
// "Multiple verification numbers",
// "Global eSIM access",
// "Priority OTP delivery",
// "Usage dashboard",
// "24/7 support"
// ],

// button:"Start Free Trial"

// },




// {
// name:"Business",
// description:"Built for teams and global companies.",
// price:"Custom",
// period:"",
// icon:Building2,

// features:[
// "Bulk verification numbers",
// "Team management",
// "API access",
// "Dedicated support",
// "Custom solutions"
// ],

// button:"Contact Sales"

// }

// ];





// export default function PricingPage(){



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





// {/* HERO */}


// <section
// className="
// relative
// bg-white
// overflow-hidden
// py-20
// lg:py-28
// "
// >


// <div
// className="
// absolute
// right-0
// top-0
// h-[450px]
// w-[450px]
// rounded-full
// bg-blue-100/50
// blur-3xl
// "
// />



// <div
// className="
// relative
// max-w-5xl
// mx-auto
// px-5
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

// <Globe2 size={16}/>

// Global Connectivity Plans

// </div>





// <h1
// className="
// mt-7
// text-4xl
// sm:text-5xl
// lg:text-6xl
// font-bold
// text-[#000000]
// "
// >

// Simple Pricing.
// Powerful Global Access.

// </h1>





// <p
// className="
// mt-6
// text-lg
// text-[#717e95]
// max-w-3xl
// mx-auto
// "
// >

// Choose the right plan for verification numbers,
// data-only eSIM connectivity, and global digital services.

// </p>


// </div>


// </section>









// {/* PRICING CARDS */}



// <section
// className="
// max-w-7xl
// mx-auto
// px-5
// sm:px-8
// lg:px-10
// py-20
// "
// >


// <div
// className="
// grid
// lg:grid-cols-3
// gap-8
// "
// >


// {
// plans.map((plan,index)=>{


// const Icon = plan.icon;


// return (

// <div
// key={index}
// className={`
// relative
// rounded-[32px]
// bg-white
// border
// p-8
// shadow-sm
// hover:shadow-2xl
// transition-all
// duration-300

// ${plan.popular
// ?
// "border-[#1a73e866] scale-[1.03]"
// :
// "border-gray-100"
// }

// `}
// >



// {
// plan.popular &&

// <div
// className="
// absolute
// -top-4
// left-1/2
// -translate-x-1/2
// rounded-full
// bg-[#1a73e8]
// px-5
// py-2
// text-sm
// font-semibold
// text-white
// "
// >

// Most Popular

// </div>

// }




// <div
// className="
// h-14
// w-14
// rounded-2xl
// bg-[#eef3ff]
// flex
// items-center
// justify-center
// "
// >

// <Icon
// className="text-[#1a73e8]"
// />

// </div>






// <h2
// className="
// mt-7
// text-2xl
// font-bold
// text-[#1a529b]
// "
// >

// {plan.name}

// </h2>



// <p
// className="
// mt-3
// text-[#244066d1]
// leading-relaxed
// "
// >

// {plan.description}

// </p>








// <div
// className="
// mt-8
// flex
// items-end
// gap-2
// "
// >


// <span
// className="
// text-5xl
// font-bold
// text-[#1a529b]
// "
// >

// {plan.price}

// </span>


// <span
// className="
// text-gray-500
// mb-2
// "
// >

// {plan.period}

// </span>


// </div>







// <button
// className={`
// mt-8
// w-full
// rounded-xl
// py-4
// font-semibold
// transition

// ${plan.popular
// ?
// "bg-[#1a73e8] text-white hover:bg-[#0b2d73]"
// :
// "border border-[#c5cfe5e0] text-[#1a529b] hover:bg-[#071B4D] hover:text-white"
// }

// `}
// >

// {plan.button}

// </button>








// <div
// className="
// mt-8
// space-y-4
// "
// >


// {
// plan.features.map((feature)=>(


// <div
// key={feature}
// className="
// flex
// items-center
// gap-3
// text-[#244066d1]
// "
// >


// <div
// className="
// rounded-full
// bg-green-50
// p-1
// "
// >

// <Check
// size={14}
// className="text-green-600"
// />

// </div>


// <span>
// {feature}
// </span>


// </div>


// ))

// }


// </div>






// </div>

// )

// })

// }


// </div>


// </section>









// {/* TRUST SECTION */}


// <section
// className="

// py-20
// text-white
// mb-20
// "
// >


// <div
// className="
// max-w-7xl
// mx-auto
// px-5
// grid
// md:grid-cols-3
// gap-8
// text-center
// "
// >


// <div>

// <ShieldCheck
// className="mx-auto text-[#1a73e8]"
// size={35}
// />


// <h3
// className="
// mt-4
// font-bold
// text-xl
// text-[#000000]
// "
// >

// Secure Payments

// </h3>


// <p
// className="
// mt-2
// text-[#717e95]
// "
// >

// Protected global transactions

// </p>


// </div>






// <div>


// <Smartphone
// className="mx-auto text-[#1a73e8]"
// size={35}
// />



// <h3
// className="
// mt-4
// font-bold
// text-xl
// text-[#000000]
// "
// >

// Instant Activation

// </h3>


// <p
// className="
// mt-2
// text-[#717e95]
// "
// >

// Start using services immediately

// </p>



// </div>








// <div>


// <Crown
// className="mx-auto text-[#1a73e8]"
// size={35}
// />


// <h3
// className="
// mt-4
// font-bold
// text-xl
// text-[#000000]
// "
// >

// Premium Support

// </h3>


// <p
// className="
// mt-2
// text-[#717e95]
// "
// >

// Help whenever you need it

// </p>



// </div>




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
  Calculator,
  Check,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Globe2,
  Info,
  MessageSquareText,
  Phone,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  TrendingUp,
  Wifi,
  Zap,
} from "lucide-react";

import Link from "next/link";
import { useMemo, useState } from "react";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/footer";

/* =========================================================
   TYPES
========================================================= */

type PricingTab = "esim" | "numbers";

type EsimPlan = {
  id: string;
  country: string;
  countryCode: string;
  flag: string;
  data: string;
  duration: string;
  price: number;
  network: string;
  speed: string;
  popular?: boolean;
};

type NumberPlan = {
  id: string;
  country: string;
  countryCode: string;
  flag: string;
  service: string;
  price: number;
  network: string;
  type: string;
  available: boolean;
  popular?: boolean;
};

/* =========================================================
   DEMO DATA
   Replace this later with your API/database response.
========================================================= */

const esimPlans: EsimPlan[] = [
  {
    id: "us-10gb-30",
    country: "United States",
    countryCode: "US",
    flag: "🇺🇸",
    data: "10GB",
    duration: "30 Days",
    price: 15,
    network: "AT&T / T-Mobile",
    speed: "5G Ready",
    popular: true,
  },
  {
    id: "uk-20gb-30",
    country: "United Kingdom",
    countryCode: "GB",
    flag: "🇬🇧",
    data: "20GB",
    duration: "30 Days",
    price: 20,
    network: "Vodafone",
    speed: "5G Ready",
    popular: true,
  },
  {
    id: "fr-5gb-15",
    country: "France",
    countryCode: "FR",
    flag: "🇫🇷",
    data: "5GB",
    duration: "15 Days",
    price: 10,
    network: "Orange",
    speed: "4G LTE",
  },
  {
    id: "jp-15gb-30",
    country: "Japan",
    countryCode: "JP",
    flag: "🇯🇵",
    data: "15GB",
    duration: "30 Days",
    price: 25,
    network: "NTT Docomo",
    speed: "5G Ready",
    popular: true,
  },
  {
    id: "ca-10gb-30",
    country: "Canada",
    countryCode: "CA",
    flag: "🇨🇦",
    data: "10GB",
    duration: "30 Days",
    price: 18,
    network: "Rogers",
    speed: "5G Ready",
  },
  {
    id: "de-10gb-30",
    country: "Germany",
    countryCode: "DE",
    flag: "🇩🇪",
    data: "10GB",
    duration: "30 Days",
    price: 17,
    network: "Telekom",
    speed: "5G Ready",
  },
  {
    id: "it-5gb-15",
    country: "Italy",
    countryCode: "IT",
    flag: "🇮🇹",
    data: "5GB",
    duration: "15 Days",
    price: 9,
    network: "TIM",
    speed: "4G LTE",
  },
  {
    id: "es-10gb-30",
    country: "Spain",
    countryCode: "ES",
    flag: "🇪🇸",
    data: "10GB",
    duration: "30 Days",
    price: 14,
    network: "Movistar",
    speed: "5G Ready",
  },
];

const numberPlans: NumberPlan[] = [
  {
    id: "us-whatsapp",
    country: "United States",
    countryCode: "US",
    flag: "🇺🇸",
    service: "WhatsApp",
    price: 0.25,
    network: "AT&T / T-Mobile",
    type: "SMS Verification",
    available: true,
    popular: true,
  },
  {
    id: "uk-google",
    country: "United Kingdom",
    countryCode: "GB",
    flag: "🇬🇧",
    service: "Google",
    price: 0.3,
    network: "Vodafone",
    type: "SMS Verification",
    available: true,
    popular: true,
  },
  {
    id: "ca-telegram",
    country: "Canada",
    countryCode: "CA",
    flag: "🇨🇦",
    service: "Telegram",
    price: 0.2,
    network: "Rogers",
    type: "SMS Verification",
    available: true,
  },
  {
    id: "de-facebook",
    country: "Germany",
    countryCode: "DE",
    flag: "🇩🇪",
    service: "Facebook",
    price: 0.35,
    network: "Deutsche Telekom",
    type: "SMS Verification",
    available: false,
  },
  {
    id: "fr-instagram",
    country: "France",
    countryCode: "FR",
    flag: "🇫🇷",
    service: "Instagram",
    price: 0.28,
    network: "Orange",
    type: "SMS Verification",
    available: true,
  },
  {
    id: "jp-telegram",
    country: "Japan",
    countryCode: "JP",
    flag: "🇯🇵",
    service: "Telegram",
    price: 0.4,
    network: "NTT Docomo",
    type: "SMS Verification",
    available: true,
  },
];

/* =========================================================
   FAQ DATA
========================================================= */

const faqs = [
  {
    question: "Are these the final prices I will pay?",
    answer:
      "The displayed price is the current customer price for the selected product. Provider availability and pricing can change, so the final price should always be confirmed at checkout before payment.",
  },
  {
    question: "Can eSIM prices change?",
    answer:
      "Yes. eSIM pricing may change when provider costs, network availability, data packages or promotional pricing change. Your backend should always validate the price again during checkout.",
  },
  {
    question: "How are virtual-number prices calculated?",
    answer:
      "Virtual-number pricing can be based on provider cost, service availability, country, network and your platform's configured markup.",
  },
  {
    question: "Do I receive my referral reward immediately?",
    answer:
      "Eligible referral rewards should be recorded against the qualifying transaction and credited according to your platform's reward and settlement rules.",
  },
  {
    question: "Can I buy multiple numbers?",
    answer:
      "Yes. Quantity availability depends on the selected country, service and provider. The calculator can estimate your total before checkout.",
  },
  {
    question: "Are eSIMs physical SIM cards?",
    answer:
      "No. An eSIM is a digital SIM profile that can be installed on compatible devices without inserting a physical SIM card.",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function PricingPage() {
  const [activeTab, setActiveTab] =
    useState<PricingTab>("esim");

  const [search, setSearch] = useState("");

  const [selectedCountry, setSelectedCountry] =
    useState("All Countries");

  const [selectedService, setSelectedService] =
    useState("All Services");

  const [quantity, setQuantity] = useState(1);

  const [selectedEsim, setSelectedEsim] =
    useState<EsimPlan | null>(null);

  const [selectedNumber, setSelectedNumber] =
    useState<NumberPlan | null>(null);

  const [openFaq, setOpenFaq] =
    useState<number | null>(null);

  /* =========================================================
     FILTER ESIM
  ========================================================= */

  const filteredEsims = useMemo(() => {
    return esimPlans.filter((plan) => {
      const matchesSearch =
        plan.country
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        plan.countryCode
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCountry =
        selectedCountry === "All Countries" ||
        plan.country === selectedCountry;

      return matchesSearch && matchesCountry;
    });
  }, [search, selectedCountry]);

  /* =========================================================
     FILTER NUMBERS
  ========================================================= */

  const filteredNumbers = useMemo(() => {
    return numberPlans.filter((plan) => {
      const matchesSearch =
        plan.country
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        plan.service
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        plan.countryCode
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCountry =
        selectedCountry === "All Countries" ||
        plan.country === selectedCountry;

      const matchesService =
        selectedService === "All Services" ||
        plan.service === selectedService;

      return (
        matchesSearch &&
        matchesCountry &&
        matchesService
      );
    });
  }, [
    search,
    selectedCountry,
    selectedService,
  ]);

  /* =========================================================
     CALCULATOR
  ========================================================= */

  const calculatorPrice =
    activeTab === "esim"
      ? selectedEsim
        ? selectedEsim.price
        : 0
      : selectedNumber
        ? selectedNumber.price
        : 0;

  const calculatorTotal =
    calculatorPrice * quantity;

  /* =========================================================
     COUNTRY LIST
  ========================================================= */

  const countries = [
    "All Countries",
    ...Array.from(
      new Set(
        activeTab === "esim"
          ? esimPlans.map((item) => item.country)
          : numberPlans.map((item) => item.country)
      )
    ),
  ];

  /* =========================================================
     SERVICE LIST
  ========================================================= */

  const services = [
    "All Services",
    ...Array.from(
      new Set(
        numberPlans.map((item) => item.service)
      )
    ),
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f7f9fc]">
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative overflow-hidden bg-white">
          <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-3xl" />

          <div className="absolute -bottom-40 -left-32 h-[450px] w-[450px] rounded-full bg-cyan-100/40 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-semibold text-[#1a73e8]">
                <Sparkles size={16} />

                Transparent Pricing
              </div>

              <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-[#071B4D] sm:text-5xl lg:text-6xl">
                Simple pricing.
                <span className="text-[#1a73e8]">
                  {" "}
                  Global connectivity.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-500">
                Explore current eSIM and verification-number
                prices by country and service. Choose what you
                need and see your estimated total before checkout.
              </p>

              {/* =================================================
                  CATEGORY TABS
              ================================================= */}

              <div className="mx-auto mt-10 flex max-w-xl rounded-2xl border border-gray-200 bg-gray-50 p-1.5">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("esim");
                    setSearch("");
                    setSelectedCountry("All Countries");
                    setSelectedService("All Services");
                  }}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition ${
                    activeTab === "esim"
                      ? "bg-white text-[#1a73e8] shadow-sm"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  <Smartphone size={18} />
                  eSIM
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("numbers");
                    setSearch("");
                    setSelectedCountry("All Countries");
                    setSelectedService("All Services");
                  }}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition ${
                    activeTab === "numbers"
                      ? "bg-white text-[#1a73e8] shadow-sm"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  <Phone size={18} />
                  Virtual Numbers
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            QUICK BENEFITS
        ===================================================== */}

        <section className="border-y border-gray-100 bg-white">
          <div className="mx-auto grid max-w-7xl md:grid-cols-3">
            <QuickBenefit
              icon={<Globe2 size={22} />}
              title="Global coverage"
              description="Multiple countries and supported networks."
            />

            <QuickBenefit
              icon={<ShieldCheck size={22} />}
              title="Transparent pricing"
              description="See the price before you continue to checkout."
            />

            <QuickBenefit
              icon={<Zap size={22} />}
              title="Fast activation"
              description="Digital products designed for quick delivery."
            />
          </div>
        </section>

        {/* =====================================================
            PRICING MARKETPLACE
        ===================================================== */}

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            {/* HEADER */}

            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold text-[#1a73e8]">
                  {activeTab === "esim"
                    ? "eSIM Plans"
                    : "Verification Numbers"}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-[#071B4D] sm:text-4xl">
                  {activeTab === "esim"
                    ? "Choose your eSIM plan"
                    : "Choose your verification number"}
                </h2>

                <p className="mt-3 text-gray-500">
                  Browse available options and compare
                  pricing before purchase.
                </p>
              </div>

              <div className="rounded-xl bg-white px-4 py-3 text-sm text-gray-500 shadow-sm ring-1 ring-gray-100">
                {activeTab === "esim"
                  ? `${filteredEsims.length} plans available`
                  : `${filteredNumbers.length} options available`}
              </div>
            </div>

            {/* =================================================
                FILTERS
            ================================================= */}

            <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="grid gap-3 lg:grid-cols-[1fr_220px_220px_auto]">
                {/* SEARCH */}

                <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4">
                  <Search
                    size={19}
                    className="shrink-0 text-gray-400"
                  />

                  <input
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                    placeholder={
                      activeTab === "esim"
                        ? "Search country..."
                        : "Search country or service..."
                    }
                    className="w-full bg-transparent py-3.5 text-sm outline-none"
                  />
                </div>

                {/* COUNTRY */}

                <select
                  value={selectedCountry}
                  onChange={(e) =>
                    setSelectedCountry(e.target.value)
                  }
                  className="rounded-xl border-0 bg-gray-50 px-4 py-3.5 text-sm outline-none"
                >
                  {countries.map((country) => (
                    <option
                      key={country}
                      value={country}
                    >
                      {country}
                    </option>
                  ))}
                </select>

                {/* SERVICE */}

                {activeTab === "numbers" ? (
                  <select
                    value={selectedService}
                    onChange={(e) =>
                      setSelectedService(e.target.value)
                    }
                    className="rounded-xl border-0 bg-gray-50 px-4 py-3.5 text-sm outline-none"
                  >
                    {services.map((service) => (
                      <option
                        key={service}
                        value={service}
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className="flex items-center gap-2 rounded-xl bg-blue-50 px-4 text-sm text-[#1a73e8]">
                    <Wifi size={17} />
                    Data-only eSIM
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setSelectedCountry("All Countries");
                    setSelectedService("All Services");
                  }}
                  className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* =================================================
                ESIM CARDS
            ================================================= */}

            {activeTab === "esim" && (
              <>
                {filteredEsims.length > 0 ? (
                  <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {filteredEsims.map((plan) => (
                      <EsimCard
                        key={plan.id}
                        plan={plan}
                        onBuy={() => {
                          setSelectedEsim(plan);
                          setSelectedNumber(null);
                          setQuantity(1);
                        }}
                      />
                    ))}
                  </div>
                ) : (
                  <EmptyState />
                )}
              </>
            )}

            {/* =================================================
                NUMBER CARDS
            ================================================= */}

            {activeTab === "numbers" && (
              <>
                {filteredNumbers.length > 0 ? (
                  <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {filteredNumbers.map((plan) => (
                      <NumberCard
                        key={plan.id}
                        plan={plan}
                        onBuy={() => {
                          setSelectedNumber(plan);
                          setSelectedEsim(null);
                          setQuantity(1);
                        }}
                      />
                    ))}
                  </div>
                ) : (
                  <EmptyState />
                )}
              </>
            )}
          </div>
        </section>

        {/* =====================================================
            CALCULATOR
        ===================================================== */}

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#1a73e8]">
                  <Calculator size={24} />
                </div>

                <h2 className="mt-5 text-3xl font-bold text-[#071B4D] sm:text-4xl">
                  Pricing calculator
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-gray-500">
                  Select a product above or use the calculator to
                  estimate how much your purchase will cost.
                </p>

                <div className="mt-7 space-y-3">
                  <CheckItem text="No hidden setup fees" />
                  <CheckItem text="Live price should be verified at checkout" />
                  <CheckItem text="Multiple quantity support" />
                  <CheckItem text="Secure checkout" />
                </div>
              </div>

              {/* CALCULATOR CARD */}

              <div className="rounded-[2rem] border border-gray-200 bg-[#f7f9fc] p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">
                      Selected product
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-[#071B4D]">
                      {selectedEsim
                        ? `${selectedEsim.flag} ${selectedEsim.country} eSIM`
                        : selectedNumber
                          ? `${selectedNumber.flag} ${selectedNumber.country} Number`
                          : "Select a product"}
                    </h3>
                  </div>

                  <div className="rounded-xl bg-white px-3 py-2 text-xs font-semibold text-[#1a73e8]">
                    {activeTab === "esim"
                      ? "eSIM"
                      : "Verification"}
                  </div>
                </div>

                <div className="mt-7">
                  <label className="text-sm font-semibold text-gray-700">
                    Quantity
                  </label>

                  <div className="mt-2 flex items-center justify-between rounded-xl bg-white p-2 ring-1 ring-gray-200">
                    <button
                      type="button"
                      onClick={() =>
                        setQuantity(
                          Math.max(1, quantity - 1)
                        )
                      }
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 text-lg font-bold hover:bg-gray-100"
                    >
                      −
                    </button>

                    <span className="font-bold text-[#071B4D]">
                      {quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        setQuantity(
                          Math.min(100, quantity + 1)
                        )
                      }
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 text-lg font-bold hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="mt-7 space-y-4">
                  <CalculatorRow
                    label="Unit price"
                    value={
                      calculatorPrice > 0
                        ? formatCurrency(
                            calculatorPrice
                          )
                        : "--"
                    }
                  />

                  <CalculatorRow
                    label="Quantity"
                    value={`${quantity}`}
                  />

                  <div className="border-t border-gray-200 pt-5">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-600">
                        Estimated total
                      </span>

                      <span className="text-3xl font-bold text-[#071B4D]">
                        {calculatorPrice > 0
                          ? formatCurrency(
                              calculatorTotal
                            )
                          : "--"}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  disabled={
                    !selectedEsim && !selectedNumber
                  }
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1a73e8] px-5 py-4 font-semibold text-white transition hover:bg-[#155fc0] disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  Continue to checkout
                  <ArrowRight size={18} />
                </button>

                <div className="mt-4 flex items-start gap-2 text-xs leading-5 text-gray-400">
                  <Info size={15} className="mt-0.5 shrink-0" />

                  Prices are estimates until validated against
                  the current provider price and availability at
                  checkout.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            REFERRAL BANNER
        ===================================================== */}

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#071B4D] p-8 text-white sm:p-12">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                    <TrendingUp size={17} />
                    Referral Rewards
                  </div>

                  <h2 className="mt-5 max-w-3xl text-3xl font-bold sm:text-4xl">
                    Buy, refer and unlock more rewards.
                  </h2>

                  <p className="mt-4 max-w-2xl leading-7 text-blue-100/70">
                    Earn 10% of eligible platform profit from
                    referred users, unlock a free eligible item
                    after 10 purchases within 7 days, receive $5
                    after 100 qualifying referred buyers and
                    qualify for additional rewards when your
                    monthly eligible volume exceeds $500.
                  </p>
                </div>

                <Link
                  href="/referrals"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-[#071B4D]"
                >
                  View Rewards
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            HOW PRICING WORKS
        ===================================================== */}

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold text-[#1a73e8]">
                Pricing model
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#071B4D] sm:text-4xl">
                Clear pricing from provider to checkout
              </h2>

              <p className="mt-4 leading-7 text-gray-500">
                Your production implementation can keep provider
                pricing synchronized with your own configured
                markup and customer pricing.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-4">
              <PricingFlow
                number="01"
                title="Provider price"
                description="Retrieve current provider availability and cost."
              />

              <PricingFlow
                number="02"
                title="Platform pricing"
                description="Apply your configured markup and business rules."
              />

              <PricingFlow
                number="03"
                title="Customer price"
                description="Display the calculated customer price."
              />

              <PricingFlow
                number="04"
                title="Checkout validation"
                description="Verify availability and price again before payment."
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ===================================================== */}

        <section className="py-20">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#1a73e8]">
                <CircleHelp size={24} />
              </div>

              <h2 className="mt-5 text-3xl font-bold text-[#071B4D] sm:text-4xl">
                Pricing questions
              </h2>

              <p className="mt-3 text-gray-500">
                Everything you need to know before purchasing.
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
                        setOpenFaq(
                          isOpen ? null : index
                        )
                      }
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-semibold text-gray-900">
                        {faq.question}
                      </span>

                      <ChevronDown
                        size={19}
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

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="bg-[#1a73e8] py-20 text-white">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <Star size={26} />
            </div>

            <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
              Ready to get connected?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
              Choose an eSIM for global data or get a verification
              number for the service you need.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/esim"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-[#071B4D]"
              >
                Browse eSIMs
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/verification-numbers"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-7 py-4 font-semibold text-white hover:bg-white/10"
              >
                Browse Numbers
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* =========================================================
   COMPONENTS
========================================================= */

function EsimCard({
  plan,
  onBuy,
}: {
  plan: EsimPlan;
  onBuy: () => void;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {plan.popular && (
        <div className="absolute right-4 top-4 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-[#1a73e8]">
          Popular
        </div>
      )}

      <div className="flex items-center justify-between">
        <span className="text-4xl">
          {plan.flag}
        </span>

        <div className="rounded-xl bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
          Available
        </div>
      </div>

      <h3 className="mt-6 text-xl font-bold text-[#071B4D]">
        {plan.country}
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        Data-only eSIM
      </p>

      <div className="mt-5 rounded-2xl bg-[#f7f9fc] p-5">
        <div className="flex items-center gap-3">
          <Wifi
            size={22}
            className="text-[#1a73e8]"
          />

          <div>
            <p className="text-xl font-bold text-[#071B4D]">
              {plan.data}
            </p>

            <p className="text-xs text-gray-500">
              {plan.duration}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 space-y-2 text-sm text-gray-500">
        <div className="flex justify-between gap-3">
          <span>Network</span>
          <span className="text-right font-medium text-gray-700">
            {plan.network}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Speed</span>
          <span className="font-medium text-gray-700">
            {plan.speed}
          </span>
        </div>
      </div>

      <div className="mt-6 flex items-end justify-between gap-3">
        <div>
          <p className="text-xs text-gray-400">
            Starting from
          </p>

          <p className="text-2xl font-bold text-[#071B4D]">
            {formatCurrency(plan.price)}
          </p>
        </div>

        <button
          type="button"
          onClick={onBuy}
          className="rounded-xl bg-[#1a73e8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#155fc0]"
        >
          Buy eSIM
        </button>
      </div>
    </div>
  );
}

function NumberCard({
  plan,
  onBuy,
}: {
  plan: NumberPlan;
  onBuy: () => void;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {plan.popular && (
        <div className="absolute right-4 top-4 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-[#1a73e8]">
          Popular
        </div>
      )}

      <div className="flex items-center justify-between">
        <span className="text-4xl">
          {plan.flag}
        </span>

        <div
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            plan.available
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-600"
          }`}
        >
          {plan.available
            ? "Available"
            : "Unavailable"}
        </div>
      </div>

      <h3 className="mt-6 text-xl font-bold text-[#071B4D]">
        {plan.country}
      </h3>

      <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
        <MessageSquareText size={18} />

        {plan.service}
      </div>

      <div className="mt-5 rounded-2xl bg-[#f7f9fc] p-5">
        <p className="text-xs text-gray-400">
          Service
        </p>

        <p className="mt-1 font-semibold text-[#071B4D]">
          {plan.type}
        </p>
      </div>

      <div className="mt-5 space-y-2 text-sm text-gray-500">
        <div className="flex justify-between gap-3">
          <span>Network</span>

          <span className="text-right font-medium text-gray-700">
            {plan.network}
          </span>
        </div>
      </div>

      <div className="mt-6 flex items-end justify-between gap-3">
        <div>
          <p className="text-xs text-gray-400">
            Starting from
          </p>

          <p className="text-2xl font-bold text-[#071B4D]">
            {formatCurrency(plan.price)}
          </p>
        </div>

        <button
          type="button"
          disabled={!plan.available}
          onClick={onBuy}
          className="rounded-xl bg-[#1a73e8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#155fc0] disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          Buy Number
        </button>
      </div>
    </div>
  );
}

function QuickBenefit({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-4 border-gray-100 px-6 py-6 md:border-r md:last:border-r-0">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1a73e8]">
        {icon}
      </div>

      <div>
        <p className="font-semibold text-[#071B4D]">
          {title}
        </p>

        <p className="mt-1 text-sm text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
}

function CheckItem({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 text-sm text-gray-600">
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-50 text-green-600">
        <Check size={13} />
      </div>

      {text}
    </div>
  );
}

function CalculatorRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-500">
        {label}
      </span>

      <span className="font-semibold text-[#071B4D]">
        {value}
      </span>
    </div>
  );
}

function PricingFlow({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative rounded-3xl border border-gray-100 bg-[#f7f9fc] p-6">
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white font-bold text-[#1a73e8] shadow-sm">
          {number}
        </div>

        <ChevronRight
          size={20}
          className="text-gray-300"
        />
      </div>

      <h3 className="mt-6 text-lg font-bold text-[#071B4D]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        {description}
      </p>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="mt-8 rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 text-gray-400">
        <Search size={25} />
      </div>

      <h3 className="mt-5 text-lg font-bold text-[#071B4D]">
        No products found
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
        Try another country, service or search term.
      </p>
    </div>
  );
}

/* =========================================================
   HELPERS
========================================================= */

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits:
      amount < 1 ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(amount);
}