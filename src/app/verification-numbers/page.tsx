// "use client";

// import {
//   Search,
//   Globe2,
//   ShieldCheck,
//   Zap,
//   Phone,
//   CheckCircle2,
//   Star,
//   ArrowRight,
//   MessageSquareText,
// } from "lucide-react";

// import { useState } from "react";
// import Navbar from "@/components/Home/Navbar";
// import Footer from "@/components/Home/footer";




// const numbers = [

// {
// country:"United States",
// flag:"🇺🇸",
// service:"WhatsApp",
// price:"$0.25",
// available:true,
// network:"AT&T / T-Mobile"
// },


// {
// country:"United Kingdom",
// flag:"🇬🇧",
// service:"Google",
// price:"$0.30",
// available:true,
// network:"Vodafone"
// },


// {
// country:"Canada",
// flag:"🇨🇦",
// service:"Telegram",
// price:"$0.20",
// available:true,
// network:"Rogers"
// },


// {
// country:"Germany",
// flag:"🇩🇪",
// service:"Facebook",
// price:"$0.35",
// available:false,
// network:"Deutsche Telekom"
// },


// ];





// export default function VerificationNumbers(){


// const [search,setSearch]=useState("");



// return (

// <>
// <Navbar/>
// <main
// className="
// bg-[#f7f9fc]
// min-h-screen
// pt-10
// "
// >





// {/* HERO */}



// <section
// className="
// relative
// overflow-hidden
// bg-white
// py-20
// "
// >


// <div
// className="
// absolute
// right-0
// top-0
// h-96
// w-96
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

// <ShieldCheck size={16}/>

// Secure Virtual Numbers

// </div>





// <h1
// className="
// mt-7
// text-4xl
// sm:text-5xl
// lg:text-6xl
// font-bold
// text-[#000000]
// leading-tight
// "
// >

// Instant <span className="text-[#1a73e8]">Verification Numbers </span>
//  For Every Platform

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

// Get reliable virtual phone numbers for OTP
// verification across WhatsApp, Google, Telegram,
// Facebook and hundreds of services.

// </p>





// {/* Search */}



// <div
// className="
// mt-10
// max-w-3xl
// mx-auto
// bg-white
// rounded-2xl
// shadow-xl
// border
// border-[#e3eaf5]
// p-3
// flex
// flex-col
// md:flex-row
// gap-3
// "
// >


// <div
// className="
// flex
// items-center
// gap-3
// flex-1
// bg-gray-50
// rounded-xl
// px-4
// py-3
// "
// >

// <Search
// className="text-gray-400"
// />


// <input

// placeholder="Search country or service..."

// value={search}

// onChange={(e)=>setSearch(e.target.value)}

// className="
// bg-transparent
// outline-none
// w-full
// "

// />


// </div>




// <button
// className="
// rounded-xl
// bg-[#1a73e8]
// px-8
// py-3
// text-white
// font-semibold
// "
// >

// Search

// </button>



// </div>



// </div>


// </section>









// {/* MARKETPLACE */}



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
// flex
// flex-col
// md:flex-row
// justify-between
// items-start
// md:items-center
// gap-5
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

// Available Numbers

// </h2>


// <p
// className="
// mt-2
// text-[#686b71]
// "
// >

// Choose a country and activate instantly.

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

// View all countries

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
// numbers.map((item,index)=>(


// <div
// key={index}
// className="
// bg-white
// rounded-3xl
// border
// border-gray-100
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
// items-center
// "
// >


// <span
// className="
// text-4xl
// "
// >

// {item.flag}

// </span>



// {
// item.available ?

// <div
// className="
// rounded-full
// bg-green-50
// px-3
// py-1
// text-xs
// text-green-700
// font-medium
// "
// >

// Available

// </div>

// :

// <div
// className="
// rounded-full
// bg-red-50
// px-3
// py-1
// text-xs
// text-red-700
// font-medium
// "
// >

// Unavailable

// </div>

// }


// </div>







// <h3
// className="
// mt-6
// text-xl
// font-bold
// text-[#000000]
// "
// >

// {item.country}

// </h3>




// <div
// className="
// mt-4
// flex
// items-center
// gap-2
// text-gray-600
// "
// >

// <MessageSquareText size={18}/>

// {item.service}

// </div>






// <p
// className="
// mt-3
// text-sm
// text-gray-500
// "
// >

// Network:
// {item.network}

// </p>







// <div
// className="
// mt-6
// flex
// justify-between
// items-center
// "
// >


// <div>

// <p className="text-sm text-gray-500">
// Starting
// </p>


// <h4
// className="
// text-2xl
// font-bold
// text-[#000000]
// "
// >

// {item.price}

// </h4>


// </div>





// <button
// disabled={!item.available}
// className="
// rounded-xl
// bg-[#1a73e8]
// px-5
// py-3
// text-white
// font-semibold
// disabled:bg-gray-300
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









// {/* TRUST SECTION */}


// <section
// className="
// bg-[#1a73e8]
// py-20
// text-white
// "
// >


// <div
// className="
// max-w-7xl
// mx-auto
// px-5
// text-center
// "
// >


// <h2
// className="
// text-4xl
// font-bold
// "
// >

// Trusted Global Verification Platform

// </h2>



// <p
// className="
// mt-5
// text-blue-100
// "
// >

// Fast OTP delivery, secure numbers,
// and reliable global networks.

// </p>





// <div
// className="
// mt-10
// grid
// md:grid-cols-3
// gap-6
// "
// >


// <div
// className="
// bg-white/10
// rounded-2xl
// p-6
// "
// >

// <Zap
// className="mx-auto"
// />

// <p className="mt-3 font-semibold">
// Instant Delivery
// </p>

// </div>



// <div
// className="
// bg-white/10
// rounded-2xl
// p-6
// "
// >

// <Globe2
// className="mx-auto"
// />

// <p className="mt-3 font-semibold">
// Global Coverage
// </p>

// </div>




// <div
// className="
// bg-white/10
// rounded-2xl
// p-6
// "
// >

// <Star
// className="mx-auto"
// />

// <p className="mt-3 font-semibold">
// Trusted Service
// </p>

// </div>



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
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Copy,
  Globe2,
  Loader2,
  MessageSquareText,
  Phone,
  RefreshCw,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Trash2,
  X,
  Zap,
} from "lucide-react";

import { useMemo, useState } from "react";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/footer";

type VerificationNumber = {
  id: string;
  country: string;
  code: string;
  flag: string;
  service: string;
  price: number;
  available: boolean;
  network: string;
  popular?: boolean;
  delivery: string;
};

const numbers: VerificationNumber[] = [
  {
    id: "us-whatsapp",
    country: "United States",
    code: "US",
    flag: "🇺🇸",
    service: "WhatsApp",
    price: 0.25,
    available: true,
    network: "AT&T / T-Mobile",
    popular: true,
    delivery: "Instant",
  },
  {
    id: "uk-google",
    country: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    service: "Google",
    price: 0.3,
    available: true,
    network: "Vodafone",
    popular: true,
    delivery: "Instant",
  },
  {
    id: "ca-telegram",
    country: "Canada",
    code: "CA",
    flag: "🇨🇦",
    service: "Telegram",
    price: 0.2,
    available: true,
    network: "Rogers",
    popular: true,
    delivery: "Instant",
  },
  {
    id: "de-facebook",
    country: "Germany",
    code: "DE",
    flag: "🇩🇪",
    service: "Facebook",
    price: 0.35,
    available: false,
    network: "Deutsche Telekom",
    delivery: "Unavailable",
  },
  {
    id: "fr-whatsapp",
    country: "France",
    code: "FR",
    flag: "🇫🇷",
    service: "WhatsApp",
    price: 0.28,
    available: true,
    network: "Orange",
    popular: true,
    delivery: "Instant",
  },
  {
    id: "ng-google",
    country: "Nigeria",
    code: "NG",
    flag: "🇳🇬",
    service: "Google",
    price: 0.15,
    available: true,
    network: "MTN",
    popular: true,
    delivery: "Instant",
  },
  {
    id: "es-telegram",
    country: "Spain",
    code: "ES",
    flag: "🇪🇸",
    service: "Telegram",
    price: 0.22,
    available: true,
    network: "Movistar",
    delivery: "Instant",
  },
  {
    id: "it-facebook",
    country: "Italy",
    code: "IT",
    flag: "🇮🇹",
    service: "Facebook",
    price: 0.27,
    available: true,
    network: "Vodafone",
    delivery: "Instant",
  },
];

const services = [
  "All Services",
  "WhatsApp",
  "Google",
  "Telegram",
  "Facebook",
];

const recentActivities = [
  {
    service: "WhatsApp",
    country: "United States",
    flag: "🇺🇸",
    status: "Completed",
    time: "2 minutes ago",
  },
  {
    service: "Telegram",
    country: "Canada",
    flag: "🇨🇦",
    status: "Completed",
    time: "8 minutes ago",
  },
  {
    service: "Google",
    country: "United Kingdom",
    flag: "🇬🇧",
    status: "Completed",
    time: "14 minutes ago",
  },
];

export default function VerificationNumbers() {
  const [search, setSearch] = useState("");
  const [service, setService] = useState("All Services");
  const [availability, setAvailability] = useState<
    "all" | "available"
  >("all");

  const [sort, setSort] = useState<
    "recommended" | "low" | "high"
  >("recommended");

  const [showAll, setShowAll] = useState(false);
  const [selectedNumber, setSelectedNumber] =
    useState<VerificationNumber | null>(null);

  const [activationStarted, setActivationStarted] =
    useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const filteredNumbers = useMemo(() => {
    const query = search.trim().toLowerCase();

    let result = numbers.filter((item) => {
      const matchesSearch =
        !query ||
        item.country.toLowerCase().includes(query) ||
        item.code.toLowerCase().includes(query) ||
        item.service.toLowerCase().includes(query) ||
        item.network.toLowerCase().includes(query);

      const matchesService =
        service === "All Services" ||
        item.service === service;

      const matchesAvailability =
        availability === "all" || item.available;

      return (
        matchesSearch &&
        matchesService &&
        matchesAvailability
      );
    });

    if (sort === "low") {
      result = [...result].sort(
        (a, b) => a.price - b.price
      );
    }

    if (sort === "high") {
      result = [...result].sort(
        (a, b) => b.price - a.price
      );
    }

    if (!showAll) {
      result = result.slice(0, 8);
    }

    return result;
  }, [
    search,
    service,
    availability,
    sort,
    showAll,
  ]);

  const openPurchase = (item: VerificationNumber) => {
    if (!item.available) return;

    setSelectedNumber(item);
    setActivationStarted(false);
    setPhoneNumber("");
    setOtp("");
    setCopied(false);
  };

  const closePurchase = () => {
    if (loading) return;

    setSelectedNumber(null);
    setActivationStarted(false);
  };

  const simulatePurchase = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setActivationStarted(true);

      // Demo number.
      // Replace this with your real provider API response.
      setPhoneNumber("+1 202 555 0147");
    }, 1200);
  };

  const simulateOtp = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setOtp("482913");
    }, 1200);
  };

  const copyNumber = async () => {
    if (!phoneNumber) return;

    try {
      await navigator.clipboard.writeText(phoneNumber);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f7f9fc] pt-16">
        {/* HERO */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-blue-100/60 blur-3xl" />

          <div className="absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-100/40 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
            <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
              {/* HERO CONTENT */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#1a73e8]">
                  <ShieldCheck size={17} />

                  Secure Verification Numbers
                </div>

                <h1 className="mt-7 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-[#000] sm:text-5xl lg:text-6xl">
                  Verify accounts with
                  <span className="text-[#1a73e8]">
                    {" "}
                    reliable virtual numbers.
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-7 text-[#686b71] sm:text-lg">
                  Get temporary verification numbers for
                  popular online services. Receive OTP codes
                  quickly and manage your activations from one
                  secure platform.
                </p>

                {/* SEARCH */}
                <div className="mt-9 max-w-2xl rounded-2xl border border-gray-200 bg-white p-2 shadow-xl shadow-blue-100/40">
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <div className="flex min-h-[56px] flex-1 items-center gap-3 rounded-xl bg-[#f6f8fb] px-4">
                      <Search
                        size={20}
                        className="shrink-0 text-gray-400"
                      />

                      <input
                        value={search}
                        onChange={(e) =>
                          setSearch(e.target.value)
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            document
                              .getElementById("marketplace")
                              ?.scrollIntoView({
                                behavior: "smooth",
                              });
                          }
                        }}
                        placeholder="Search country or service..."
                        className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        document
                          .getElementById("marketplace")
                          ?.scrollIntoView({
                            behavior: "smooth",
                          })
                      }
                      className="flex min-h-[56px] items-center justify-center gap-2 rounded-xl bg-[#1a73e8] px-7 font-semibold text-white transition hover:bg-[#155fc0]"
                    >
                      Find Number
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                {/* TRUST */}
                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
                  <TrustItem text="Instant delivery" />

                  <TrustItem text="Global coverage" />

                  <TrustItem text="OTP supported" />
                </div>
              </div>

              {/* HERO CARD */}
              <div className="mx-auto w-full max-w-md">
                <div className="rounded-[2rem] bg-[#1a73e8] p-6 shadow-2xl shadow-blue-200/40 sm:p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-blue-200">
                        Most popular
                      </p>

                      <h3 className="mt-1 text-2xl font-bold text-white">
                        WhatsApp
                      </h3>
                    </div>

                    <span className="text-5xl">
                      🇺🇸
                    </span>
                  </div>

                  <div className="mt-7 rounded-2xl bg-white/10 p-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                        <Phone
                          className="text-white"
                          size={23}
                        />
                      </div>

                      <div>
                        <p className="text-xs text-blue-200">
                          Verification number
                        </p>

                        <p className="mt-1 font-semibold text-white">
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 h-px bg-white/10" />

                    <div className="mt-5 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-blue-200">
                          Starting from
                        </p>

                        <p className="mt-1 text-3xl font-bold text-white">
                          $0.25
                        </p>
                      </div>

                      <div className="rounded-full bg-green-400/10 px-3 py-1 text-xs font-semibold text-green-300">
                        Available
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      openPurchase(numbers[0])
                    }
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-4 font-semibold text-[#071B4D] transition hover:bg-blue-50"
                  >
                    Get Number
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK SERVICES */}
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "WhatsApp",
                icon: MessageSquareText,
                count: "120+ numbers",
              },
              {
                name: "Google",
                icon: Globe2,
                count: "90+ numbers",
              },
              {
                name: "Telegram",
                icon: MessageSquareText,
                count: "75+ numbers",
              },
              {
                name: "Facebook",
                icon: Smartphone,
                count: "60+ numbers",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => {
                    setService(item.name);
                    document
                      .getElementById("marketplace")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                  className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 text-left transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#1a73e8]">
                    <Icon size={21} />
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">
                      {item.name}
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      {item.count}
                    </p>
                  </div>

                  <ArrowRight
                    size={17}
                    className="ml-auto text-gray-400"
                  />
                </button>
              );
            })}
          </div>
        </section>

        {/* MARKETPLACE */}
        <section
          id="marketplace"
          className="scroll-mt-20 bg-white py-20"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a73e8]">
                  <Sparkles size={17} />
                  Number marketplace
                </div>

                <h2 className="mt-2 text-3xl font-bold text-[#000] sm:text-4xl">
                  Choose a verification number
                </h2>

                <p className="mt-3 text-gray-500">
                  Select your country and service, then activate
                  your number instantly.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-[#f8fafc] px-4 py-3 text-sm text-gray-500">
                {filteredNumbers.length} numbers available
              </div>
            </div>

            {/* FILTER BAR */}
            <div className="mt-9 grid gap-3 md:grid-cols-[1.3fr_1fr_1fr]">
              {/* SEARCH */}
              <div className="flex h-12 items-center gap-3 rounded-xl border border-gray-200 bg-white px-4">
                <Search
                  size={18}
                  className="text-gray-400"
                />

                <input
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  placeholder="Search country, service or network..."
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>

              {/* SERVICE */}
              <div className="relative">
                <select
                  value={service}
                  onChange={(e) =>
                    setService(e.target.value)
                  }
                  className="h-12 w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 pr-10 text-sm outline-none"
                >
                  {services.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>

                <ChevronDown
                  size={17}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>

              {/* SORT */}
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) =>
                    setSort(
                      e.target.value as
                        | "recommended"
                        | "low"
                        | "high"
                    )
                  }
                  className="h-12 w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 pr-10 text-sm outline-none"
                >
                  <option value="recommended">
                    Recommended
                  </option>
                  <option value="low">
                    Price: Low to High
                  </option>
                  <option value="high">
                    Price: High to Low
                  </option>
                </select>

                <ChevronDown
                  size={17}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>

            {/* AVAILABILITY FILTER */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  setAvailability("all")
                }
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  availability === "all"
                    ? "bg-[#1a73e8] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                All numbers
              </button>

              <button
                type="button"
                onClick={() =>
                  setAvailability("available")
                }
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  availability === "available"
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Available now
              </button>

              {(search ||
                service !== "All Services" ||
                availability !== "all") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setService("All Services");
                    setAvailability("all");
                    setSort("recommended");
                  }}
                  className="ml-auto text-sm font-semibold text-[#1a73e8]"
                >
                  Clear filters
                </button>
              )}
            </div>

            {/* CARDS */}
            {filteredNumbers.length > 0 ? (
              <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {filteredNumbers.map((item) => (
                  <NumberCard
                    key={item.id}
                    item={item}
                    onBuy={() => openPurchase(item)}
                  />
                ))}
              </div>
            ) : (
              <div className="mt-9 rounded-3xl border border-dashed border-gray-300 bg-[#f8fafc] px-6 py-16 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
                  <Search
                    className="text-[#1a73e8]"
                    size={23}
                  />
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  No numbers found
                </h3>

                <p className="mt-2 text-gray-500">
                  Try another country or service.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setService("All Services");
                    setAvailability("all");
                  }}
                  className="mt-6 rounded-xl bg-[#1a73e8] px-5 py-3 font-semibold text-white"
                >
                  Reset filters
                </button>
              </div>
            )}

            {filteredNumbers.length > 0 && (
              <div className="mt-10 text-center">
                <button
                  type="button"
                  onClick={() =>
                    setShowAll((value) => !value)
                  }
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 font-semibold text-[#071B4D] transition hover:bg-gray-50"
                >
                  {showAll
                    ? "Show fewer numbers"
                    : "View all numbers"}

                  <ArrowRight size={17} />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-[#071b4d] py-20 text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold text-blue-300">
                Simple verification
              </p>

              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                Get your OTP in 3 steps
              </h2>

              <p className="mt-4 text-white/70">
                Choose a service, receive a number and wait
                for the verification code.
              </p>
            </div>

            <div className="mt-14 grid gap-7 md:grid-cols-3">
              <Step
                number="01"
                icon={<Globe2 size={24} />}
                title="Select service"
                description="Choose the country and online service you want to verify."
              />

              <Step
                number="02"
                icon={<Phone size={24} />}
                title="Get your number"
                description="Purchase an available virtual number and receive it instantly."
              />

              <Step
                number="03"
                icon={<MessageSquareText size={24} />}
                title="Receive OTP"
                description="Wait for the verification message and copy the OTP code."
              />
            </div>
          </div>
        </section>

        {/* RECENT ACTIVITY */}
        <section className="bg-[#f7f9fc] py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm font-semibold text-[#1a73e8]">
                  Platform activity
                </p>

                <h2 className="mt-2 text-3xl font-bold text-[#071B4D]">
                  Recent activations
                </h2>
              </div>

              <Clock3
                className="hidden text-gray-300 sm:block"
                size={30}
              />
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl border border-gray-200 bg-white">
              {recentActivities.map(
                (activity, index) => (
                  <div
                    key={`${activity.service}-${index}`}
                    className={`flex flex-col gap-4 p-5 sm:flex-row sm:items-center ${
                      index !==
                      recentActivities.length - 1
                        ? "border-b border-gray-100"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">
                        {activity.flag}
                      </span>

                      <div>
                        <p className="font-semibold text-gray-900">
                          {activity.service}
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                          {activity.country}
                        </p>
                      </div>
                    </div>

                    <div className="sm:ml-auto">
                      <div className="flex items-center gap-2 text-sm font-medium text-green-600">
                        <CheckCircle2 size={16} />
                        {activity.status}
                      </div>

                      <p className="mt-1 text-xs text-gray-400">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-10">
            <p className="text-sm font-semibold text-[#1a73e8]">
              Built for reliability
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#071B4D] sm:text-4xl">
              A better verification experience
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Designed for fast activation, simple OTP
              management and transparent pricing.
            </p>

            <div className="mt-12 grid gap-5 md:grid-cols-4">
              <TrustCard
                icon={<Zap size={24} />}
                title="Fast"
                description="Get numbers within seconds."
              />

              <TrustCard
                icon={<Globe2 size={24} />}
                title="Global"
                description="Multiple countries and networks."
              />

              <TrustCard
                icon={<ShieldCheck size={24} />}
                title="Secure"
                description="Protected verification workflow."
              />

              <TrustCard
                icon={<Star size={24} />}
                title="Reliable"
                description="Built for consistent OTP delivery."
              />
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#1a73e8] py-20 text-white">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
              <Phone size={30} />
            </div>

            <h2 className="mt-7 text-3xl font-bold sm:text-4xl">
              Ready to verify your account?
            </h2>

            <p className="mt-4 leading-7 text-blue-100">
              Find an available number, activate it and receive
              your verification code instantly.
            </p>

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("marketplace")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-[#071B4D] hover:bg-blue-50"
            >
              Find a Number
              <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </main>

      <Footer />

      {/* PURCHASE / ACTIVATION MODAL */}
      {selectedNumber && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#071B4D]/60 px-4 py-6 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closePurchase();
            }
          }}
        >
          <div className="w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">
            {/* MODAL HEADER */}
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
              <div className="flex items-center gap-3">
                <span className="text-3xl">
                  {selectedNumber.flag}
                </span>

                <div>
                  <p className="text-xs text-gray-400">
                    Verification service
                  </p>

                  <h3 className="font-bold text-[#071B4D]">
                    {selectedNumber.service}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={closePurchase}
                disabled={loading}
                className="rounded-xl p-2 text-gray-400 hover:bg-gray-100 disabled:opacity-50"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              {!activationStarted ? (
                <>
                  {/* PURCHASE */}
                  <div className="rounded-2xl bg-[#f6f8fc] p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">
                          {selectedNumber.country}
                        </p>

                        <p className="mt-1 text-lg font-bold text-gray-900">
                          {selectedNumber.service}
                        </p>
                      </div>

                      <p className="text-2xl font-bold text-[#071B4D]">
                        ${selectedNumber.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <InfoRow
                      label="Network"
                      value={selectedNumber.network}
                    />

                    <InfoRow
                      label="Delivery"
                      value={selectedNumber.delivery}
                    />

                    <InfoRow
                      label="Number type"
                      value="Temporary"
                    />

                    <InfoRow
                      label="OTP"
                      value="Supported"
                    />
                  </div>

                  <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-4">
                    <div className="flex gap-3">
                      <ShieldCheck
                        size={20}
                        className="mt-0.5 shrink-0 text-[#1a73e8]"
                      />

                      <div>
                        <p className="font-semibold text-[#071B4D]">
                          Secure activation
                        </p>

                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          Your number will be reserved after
                          successful purchase.
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={simulatePurchase}
                    disabled={loading}
                    className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1a73e8] px-5 py-4 font-semibold text-white transition hover:bg-[#155fc0] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <Loader2
                          size={19}
                          className="animate-spin"
                        />
                        Activating...
                      </>
                    ) : (
                      <>
                        Purchase Number
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </>
              ) : (
                <>
                  {/* ACTIVATION */}
                  <div className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
                      <CheckCircle2
                        className="text-green-600"
                        size={29}
                      />
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-[#071B4D]">
                      Number activated
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      Your verification number is ready.
                    </p>
                  </div>

                  {/* NUMBER */}
                  <div className="mt-7 rounded-2xl bg-[#071B4D] p-5">
                    <p className="text-center text-xs text-blue-200">
                      Your verification number
                    </p>

                    <div className="mt-3 flex items-center justify-center gap-3">
                      <p className="text-2xl font-bold tracking-wide text-white">
                        {phoneNumber}
                      </p>

                      <button
                        type="button"
                        onClick={copyNumber}
                        className="rounded-lg bg-white/10 p-2 text-white hover:bg-white/20"
                      >
                        {copied ? (
                          <Check size={17} />
                        ) : (
                          <Copy size={17} />
                        )}
                      </button>
                    </div>

                    {copied && (
                      <p className="mt-2 text-center text-xs text-green-300">
                        Number copied
                      </p>
                    )}
                  </div>

                  {/* OTP */}
                  <div className="mt-6 rounded-2xl border border-gray-200 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          Verification code
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          Waiting for incoming SMS
                        </p>
                      </div>

                      {otp ? (
                        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                          Received
                        </span>
                      ) : (
                        <span className="rounded-full bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-700">
                          Waiting
                        </span>
                      )}
                    </div>

                    <div className="mt-5 flex min-h-[72px] items-center justify-center rounded-xl bg-[#f6f8fc]">
                      {otp ? (
                        <p className="text-3xl font-bold tracking-[.35em] text-[#071B4D]">
                          {otp}
                        </p>
                      ) : (
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Loader2
                            size={17}
                            className="animate-spin"
                          />
                          Waiting for OTP...
                        </div>
                      )}
                    </div>

                    {!otp && (
                      <button
                        type="button"
                        onClick={simulateOtp}
                        disabled={loading}
                        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                      >
                        <RefreshCw size={16} />
                        {loading
                          ? "Checking..."
                          : "Check for OTP"}
                      </button>
                    )}
                  </div>

                  {/* ACTIONS */}
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={simulateOtp}
                      disabled={loading}
                      className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                    >
                      <RefreshCw size={16} />
                      Refresh OTP
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedNumber(null);
                        setActivationStarted(false);
                      }}
                      className="flex items-center justify-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 hover:bg-red-100"
                    >
                      <Trash2 size={16} />
                      End Number
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* -------------------------------- */
/* NUMBER CARD */
/* -------------------------------- */

function NumberCard({
  item,
  onBuy,
}: {
  item: VerificationNumber;
  onBuy: () => void;
}) {
  return (
    <div className="group relative flex flex-col rounded-3xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/40">
      {item.popular && (
        <div className="absolute -top-3 left-5 inline-flex items-center gap-1 rounded-full bg-[#1a73e8] px-3 py-1 text-xs font-semibold text-white">
          <Star size={12} />
          Popular
        </div>
      )}

      <div className="flex items-center justify-between">
        <span className="text-4xl">
          {item.flag}
        </span>

        {item.available ? (
          <span className="flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
            <CheckCircle2 size={13} />
            Available
          </span>
        ) : (
          <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
            Unavailable
          </span>
        )}
      </div>

      <h3 className="mt-6 text-xl font-bold text-[#071B4D]">
        {item.country}
      </h3>

      <div className="mt-4 flex items-center gap-2 text-gray-600">
        <MessageSquareText size={18} />

        <span className="font-medium">
          {item.service}
        </span>
      </div>

      <div className="mt-5 rounded-2xl bg-[#f6f8fc] p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">
            Network
          </span>

          <span className="max-w-[140px] text-right font-medium text-gray-800">
            {item.network}
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="text-gray-500">
            Delivery
          </span>

          <span
            className={
              item.available
                ? "font-medium text-green-600"
                : "font-medium text-gray-400"
            }
          >
            {item.delivery}
          </span>
        </div>
      </div>

      <div className="mt-6 flex items-end justify-between border-t border-gray-100 pt-5">
        <div>
          <p className="text-xs text-gray-400">
            Starting from
          </p>

          <p className="mt-1 text-2xl font-bold text-[#071B4D]">
            ${item.price.toFixed(2)}
          </p>
        </div>

        <button
          type="button"
          disabled={!item.available}
          onClick={onBuy}
          className="rounded-xl bg-[#1a73e8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#155fc0] disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
        >
          {item.available ? "Get Number" : "Unavailable"}
        </button>
      </div>
    </div>
  );
}

/* -------------------------------- */
/* TRUST ITEM */
/* -------------------------------- */

function TrustItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <CheckCircle2
        size={17}
        className="text-green-600"
      />

      {text}
    </div>
  );
}

/* -------------------------------- */
/* STEP */
/* -------------------------------- */

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
    <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
          {icon}
        </div>

        <span className="text-4xl font-bold text-white/10">
          {number}
        </span>
      </div>

      <h3 className="mt-7 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-blue-100/70">
        {description}
      </p>
    </div>
  );
}

/* -------------------------------- */
/* TRUST CARD */
/* -------------------------------- */

function TrustCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-gray-100 bg-[#f8fafc] p-6">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#1a73e8]">
        {icon}
      </div>

      <h3 className="mt-5 font-bold text-[#071B4D]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        {description}
      </p>
    </div>
  );
}

/* -------------------------------- */
/* INFO ROW */
/* -------------------------------- */

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-5 text-sm">
      <span className="text-gray-500">
        {label}
      </span>

      <span className="text-right font-semibold text-gray-900">
        {value}
      </span>
    </div>
  );
}
