// "use client";

// import {
//   Search,
//   Globe2,
//   Wifi,
//   Signal,
//   ShieldCheck,
//   CheckCircle2,
//   Smartphone,
//   ArrowRight,
//   Zap,
// } from "lucide-react";

// import { useState } from "react";





// const destinations = [

// {
// country:"United States",
// flag:"🇺🇸",
// network:"AT&T / T-Mobile",
// plans:[
// {
// data:"5GB",
// duration:"15 Days",
// price:"$8"
// },
// {
// data:"10GB",
// duration:"30 Days",
// price:"$15"
// },
// {
// data:"Unlimited",
// duration:"30 Days",
// price:"$35"
// }
// ]
// },



// {
// country:"United Kingdom",
// flag:"🇬🇧",
// network:"Vodafone",
// plans:[
// {
// data:"10GB",
// duration:"30 Days",
// price:"$18"
// },
// {
// data:"20GB",
// duration:"30 Days",
// price:"$28"
// }
// ]
// },



// {
// country:"Japan",
// flag:"🇯🇵",
// network:"NTT Docomo",
// plans:[
// {
// data:"5GB",
// duration:"15 Days",
// price:"$12"
// },
// {
// data:"15GB",
// duration:"30 Days",
// price:"$25"
// }
// ]
// }


// ];







// export default function BuyEsimPage(){


// const [search,setSearch]=useState("");



// const filtered =
// destinations.filter((item)=>
// item.country
// .toLowerCase()
// .includes(search.toLowerCase())
// );





// return (

// <main
// className="
// min-h-screen
// bg-[#f7f9fc]
// "
// >







// {/* HERO */}



// <section
// className="
// bg-[#071B4D]
// text-white
// py-14
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
// max-w-3xl
// "
// >


// <div
// className="
// flex
// items-center
// gap-3
// "
// >


// <div
// className="
// bg-white/10
// p-3
// rounded-xl
// "
// >

// <Globe2/>

// </div>


// <div>

// <h1
// className="
// text-4xl
// lg:text-5xl
// font-bold
// "
// >

// Buy Global eSIM

// </h1>


// </div>


// </div>




// <p
// className="
// mt-5
// text-blue-100
// text-lg
// "
// >

// Stay connected worldwide with affordable
// data-only eSIM plans. Activate instantly
// without physical SIM cards.

// </p>



// </div>


// </div>


// </section>









// {/* SEARCH */}



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
// bg-white
// rounded-3xl
// border
// p-5
// flex
// items-center
// gap-4
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
// flex-1
// outline-none
// text-lg
// "

// />


// </div>


// </section>









// {/* BENEFITS */}



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
// [
// {
// title:"Instant Activation",
// icon:Zap
// },
// {
// title:"190+ Countries",
// icon:Globe2
// },
// {
// title:"Secure Network",
// icon:ShieldCheck
// },
// {
// title:"5G Ready",
// icon:Signal
// }

// ].map((item,index)=>{


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


// <h3
// className="
// mt-4
// font-bold
// "
// >

// {item.title}

// </h3>


// </div>


// )


// })

// }


// </div>


// </section>









// {/* PLANS */}



// <section
// className="
// max-w-7xl
// mx-auto
// px-5
// lg:px-10
// py-12
// "
// >


// <h2
// className="
// text-3xl
// font-bold
// text-[#071B4D]
// "
// >

// Choose Your Destination

// </h2>







// <div
// className="
// mt-8
// space-y-8
// "
// >


// {
// filtered.map((destination,index)=>(


// <div
// key={index}
// className="
// bg-white
// rounded-[32px]
// border
// p-8
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
// text-5xl
// "
// >

// {destination.flag}

// </div>



// <div>


// <h3
// className="
// text-2xl
// font-bold
// text-[#071B4D]
// "
// >

// {destination.country}

// </h3>



// <p
// className="
// flex
// items-center
// gap-2
// text-gray-500
// "
// >


// <Wifi size={16}/>

// {destination.network}

// </p>


// </div>


// </div>









// <div
// className="
// mt-8
// grid
// md:grid-cols-3
// gap-6
// "
// >


// {
// destination.plans.map((plan,i)=>(


// <div
// key={i}
// className="
// border
// rounded-3xl
// p-6
// hover:border-[#071B4D]
// hover:shadow-xl
// transition
// "
// >





// <div
// className="
// flex
// justify-between
// "
// >


// <h4
// className="
// text-2xl
// font-bold
// text-[#071B4D]
// "
// >

// {plan.data}

// </h4>


// <p
// className="
// text-xl
// font-bold
// "
// >

// {plan.price}

// </p>


// </div>






// <p
// className="
// mt-3
// text-gray-500
// "
// >

// {plan.duration}

// </p>








// <ul
// className="
// mt-5
// space-y-3
// text-sm
// "
// >


// <li
// className="
// flex
// gap-2
// "
// >

// <CheckCircle2
// size={17}
// className="text-green-600"
// />

// Instant activation

// </li>



// <li
// className="
// flex
// gap-2
// "
// >

// <CheckCircle2
// size={17}
// className="text-green-600"
// />

// No roaming fees

// </li>



// <li
// className="
// flex
// gap-2
// "
// >

// <CheckCircle2
// size={17}
// className="text-green-600"
// />

// Multi-network access

// </li>


// </ul>







// <button
// className="
// mt-6
// w-full
// bg-[#071B4D]
// text-white
// rounded-xl
// py-3
// font-semibold
// flex
// items-center
// justify-center
// gap-2
// "
// >

// Buy eSIM

// <ArrowRight size={18}/>

// </button>




// </div>


// ))


// }


// </div>






// </div>


// ))


// }


// </div>


// </section>









// {/* INSTALL CTA */}



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
// border
// rounded-[36px]
// p-10
// lg:p-14
// flex
// flex-col
// lg:flex-row
// items-center
// justify-between
// gap-8
// "
// >


// <div>


// <h2
// className="
// text-3xl
// font-bold
// text-[#071B4D]
// "
// >

// Ready to Connect?

// </h2>


// <p
// className="
// mt-3
// text-gray-600
// "
// >

// Purchase your eSIM and activate
// within minutes.

// </p>


// </div>





// <div
// className="
// flex
// items-center
// gap-3
// "
// >

// <Smartphone
// size={50}
// className="text-[#071B4D]"
// />


// </div>


// </div>


// </section>





// </main>

// )

// }


"use client";

import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Clock3,
  CreditCard,
  Filter,
  Globe2,
  Info,
  MapPin,
  Minus,
  Plus,
  Search,
  ShieldCheck,
  Signal,
  Smartphone,
  Sparkles,
  Star,
  Wifi,
  X,
  Zap,
} from "lucide-react";

import { useMemo, useState } from "react";

type PlanType = "country" | "regional" | "global";

type EsimPlan = {
  id: string;
  country: string;
  flag: string;
  region: string;
  type: PlanType;
  data: number;
  dataUnit: "GB" | "UNLIMITED";
  validity: number;
  price: number;
  oldPrice?: number;
  currency: string;
  networks: string[];
  popular?: boolean;
  bestValue?: boolean;
  activation: string;
  hotspot: boolean;
};

const plans: EsimPlan[] = [
  {
    id: "usa-5gb-7",
    country: "United States",
    flag: "🇺🇸",
    region: "North America",
    type: "country",
    data: 5,
    dataUnit: "GB",
    validity: 7,
    price: 7.99,
    oldPrice: 9.99,
    currency: "USD",
    networks: ["AT&T", "T-Mobile"],
    popular: true,
    activation: "Instant",
    hotspot: true,
  },
  {
    id: "usa-10gb-30",
    country: "United States",
    flag: "🇺🇸",
    region: "North America",
    type: "country",
    data: 10,
    dataUnit: "GB",
    validity: 30,
    price: 18.99,
    currency: "USD",
    networks: ["AT&T", "T-Mobile"],
    bestValue: true,
    activation: "Instant",
    hotspot: true,
  },
  {
    id: "usa-unlimited-15",
    country: "United States",
    flag: "🇺🇸",
    region: "North America",
    type: "country",
    data: 0,
    dataUnit: "UNLIMITED",
    validity: 15,
    price: 29.99,
    currency: "USD",
    networks: ["AT&T", "T-Mobile"],
    popular: true,
    activation: "Instant",
    hotspot: false,
  },
  {
    id: "uk-5gb-15",
    country: "United Kingdom",
    flag: "🇬🇧",
    region: "Europe",
    type: "country",
    data: 5,
    dataUnit: "GB",
    validity: 15,
    price: 12.5,
    currency: "USD",
    networks: ["EE", "O2"],
    popular: true,
    activation: "Instant",
    hotspot: true,
  },
  {
    id: "uk-10gb-30",
    country: "United Kingdom",
    flag: "🇬🇧",
    region: "Europe",
    type: "country",
    data: 10,
    dataUnit: "GB",
    validity: 30,
    price: 19.99,
    currency: "USD",
    networks: ["EE", "O2"],
    bestValue: true,
    activation: "Instant",
    hotspot: true,
  },
  {
    id: "france-10gb-30",
    country: "France",
    flag: "🇫🇷",
    region: "Europe",
    type: "country",
    data: 10,
    dataUnit: "GB",
    validity: 30,
    price: 17.99,
    currency: "USD",
    networks: ["Orange", "SFR"],
    bestValue: true,
    activation: "Instant",
    hotspot: true,
  },
  {
    id: "europe-20gb-30",
    country: "Europe",
    flag: "🇪🇺",
    region: "Europe",
    type: "regional",
    data: 20,
    dataUnit: "GB",
    validity: 30,
    price: 24.99,
    currency: "USD",
    networks: ["Multiple networks"],
    popular: true,
    bestValue: true,
    activation: "Instant",
    hotspot: true,
  },
  {
    id: "europe-unlimited-15",
    country: "Europe",
    flag: "🇪🇺",
    region: "Europe",
    type: "regional",
    data: 0,
    dataUnit: "UNLIMITED",
    validity: 15,
    price: 34.99,
    currency: "USD",
    networks: ["Multiple networks"],
    popular: true,
    activation: "Instant",
    hotspot: false,
  },
  {
    id: "global-10gb-30",
    country: "Global",
    flag: "🌍",
    region: "Worldwide",
    type: "global",
    data: 10,
    dataUnit: "GB",
    validity: 30,
    price: 29.99,
    currency: "USD",
    networks: ["Multiple networks"],
    bestValue: true,
    activation: "Instant",
    hotspot: true,
  },
  {
    id: "global-20gb-60",
    country: "Global",
    flag: "🌎",
    region: "Worldwide",
    type: "global",
    data: 20,
    dataUnit: "GB",
    validity: 60,
    price: 49.99,
    currency: "USD",
    networks: ["Multiple networks"],
    popular: true,
    activation: "Instant",
    hotspot: true,
  },
];

const destinations = [
  {
    country: "United States",
    flag: "🇺🇸",
    region: "North America",
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    region: "Europe",
  },
  {
    country: "France",
    flag: "🇫🇷",
    region: "Europe",
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    region: "Europe",
  },
  {
    country: "Nigeria",
    flag: "🇳🇬",
    region: "Africa",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    region: "North America",
  },
];

export default function BuyEsimPage() {
  const [activeType, setActiveType] =
    useState<PlanType>("country");

  const [search, setSearch] = useState("");

  const [selectedDestination, setSelectedDestination] =
    useState("All destinations");

  const [dataFilter, setDataFilter] =
    useState("All data");

  const [validityFilter, setValidityFilter] =
    useState("Any validity");

  const [sortBy, setSortBy] =
    useState("Recommended");

  const [showFilters, setShowFilters] =
    useState(false);

  const [selectedPlan, setSelectedPlan] =
    useState<EsimPlan | null>(null);

  const filteredPlans = useMemo(() => {
    let result = [...plans];

    result = result.filter(
      (plan) => plan.type === activeType
    );

    if (selectedDestination !== "All destinations") {
      result = result.filter(
        (plan) =>
          plan.country === selectedDestination
      );
    }

    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter(
        (plan) =>
          plan.country
            .toLowerCase()
            .includes(query) ||
          plan.region.toLowerCase().includes(query) ||
          plan.networks.some((network) =>
            network.toLowerCase().includes(query)
          )
      );
    }

    if (dataFilter === "1-5 GB") {
      result = result.filter(
        (plan) =>
          plan.dataUnit === "GB" &&
          plan.data <= 5
      );
    }

    if (dataFilter === "6-20 GB") {
      result = result.filter(
        (plan) =>
          plan.dataUnit === "GB" &&
          plan.data >= 6 &&
          plan.data <= 20
      );
    }

    if (dataFilter === "Unlimited") {
      result = result.filter(
        (plan) =>
          plan.dataUnit === "UNLIMITED"
      );
    }

    if (validityFilter === "Up to 7 days") {
      result = result.filter(
        (plan) => plan.validity <= 7
      );
    }

    if (validityFilter === "8-30 days") {
      result = result.filter(
        (plan) =>
          plan.validity >= 8 &&
          plan.validity <= 30
      );
    }

    if (validityFilter === "31+ days") {
      result = result.filter(
        (plan) => plan.validity > 30
      );
    }

    if (sortBy === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "Data") {
      result.sort(
        (a, b) =>
          (b.data || 9999) -
          (a.data || 9999)
      );
    }

    if (sortBy === "Recommended") {
      result.sort(
        (a, b) =>
          Number(b.bestValue) -
          Number(a.bestValue)
      );
    }

    return result;
  }, [
    activeType,
    selectedDestination,
    search,
    dataFilter,
    validityFilter,
    sortBy,
  ]);

  function clearFilters() {
    setSearch("");
    setSelectedDestination("All destinations");
    setDataFilter("All data");
    setValidityFilter("Any validity");
    setSortBy("Recommended");
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <div className="mx-auto w-full max-w-[1500px] px-4 py-5 sm:px-6 lg:px-8 lg:py-8">

        {/* ======================================================== */}
        {/* HEADER */}
        {/* ======================================================== */}

        <header className="mb-6">

          <div className="mb-3 flex items-center gap-2 text-sm text-slate-400">

            <a
              href="/esim"
              className="transition hover:text-cyan-700"
            >
              Data eSIM
            </a>

            <ChevronRight className="h-4 w-4" />

            <span className="font-medium text-slate-700">
              Buy eSIM
            </span>

          </div>

          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                  <Globe2 className="h-6 w-6" />
                </div>

                <div>

                  <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    Buy an eSIM
                  </h1>

                  <p className="mt-1 text-sm text-slate-500 sm:text-base">
                    Stay connected with flexible data plans
                    in destinations around the world.
                  </p>

                </div>

              </div>

            </div>

            <div className="flex items-center gap-2">

              <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm sm:flex">

                <CreditCard className="h-4 w-4 text-slate-400" />

                <span className="text-slate-500">
                  Balance
                </span>

                <span className="font-bold text-slate-900">
                  $124.85
                </span>

              </div>

              <a
                href="/esim/my-esim"
                className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                <Smartphone className="h-4 w-4" />
                My eSIMs
              </a>

            </div>

          </div>

        </header>

        {/* ======================================================== */}
        {/* HERO SEARCH */}
        {/* ======================================================== */}

        <section className="relative mb-6 overflow-hidden rounded-3xl bg-[#092f36] p-5 text-white shadow-sm sm:p-7 lg:p-8">

          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-teal-300/10 blur-3xl" />

          <div className="relative">

            <div className="max-w-2xl">

              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-cyan-100">

                <Sparkles className="h-3.5 w-3.5" />

                Instant digital delivery

              </div>

              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Where are you traveling?
              </h2>

              <p className="mt-2 text-sm leading-6 text-white/60">
                Search a destination to find the best
                data-only eSIM plans for your trip.
              </p>

            </div>

            <div className="mt-6 max-w-3xl">

              <div className="relative">

                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                <input
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  placeholder="Search country, region or network..."
                  className="h-14 w-full rounded-2xl border border-white/10 bg-white pl-12 pr-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:ring-4 focus:ring-cyan-400/20"
                />

              </div>

            </div>

            <div className="mt-5 flex flex-wrap gap-2">

              {destinations.map(
                (destination) => (
                  <button
                    key={destination.country}
                    type="button"
                    onClick={() => {
                      setActiveType("country");
                      setSelectedDestination(
                        destination.country
                      );
                      setSearch("");
                    }}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                  >
                    <span>
                      {destination.flag}
                    </span>

                    {destination.country}
                  </button>
                )
              )}

            </div>

          </div>

        </section>

        {/* ======================================================== */}
        {/* PLAN TYPE */}
        {/* ======================================================== */}

        <section className="mb-5 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">

          <div className="grid grid-cols-3 gap-1">

            <PlanTypeButton
              active={activeType === "country"}
              onClick={() => {
                setActiveType("country");
                setSelectedDestination(
                  "All destinations"
                );
              }}
              icon={<MapPin className="h-4 w-4" />}
              title="Country"
              description="One destination"
            />

            <PlanTypeButton
              active={activeType === "regional"}
              onClick={() => {
                setActiveType("regional");
                setSelectedDestination(
                  "All destinations"
                );
              }}
              icon={<Globe2 className="h-4 w-4" />}
              title="Regional"
              description="Multiple countries"
            />

            <PlanTypeButton
              active={activeType === "global"}
              onClick={() => {
                setActiveType("global");
                setSelectedDestination(
                  "All destinations"
                );
              }}
              icon={<Wifi className="h-4 w-4" />}
              title="Global"
              description="Worldwide coverage"
            />

          </div>

        </section>

        {/* ======================================================== */}
        {/* FILTER TOOLBAR */}
        {/* ======================================================== */}

        <section className="mb-5">

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex items-center gap-2">

              <button
                type="button"
                onClick={() =>
                  setShowFilters(!showFilters)
                }
                className={`inline-flex h-10 items-center gap-2 rounded-xl border px-4 text-sm font-semibold transition ${
                  showFilters
                    ? "border-cyan-200 bg-cyan-50 text-cyan-700"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                <Filter className="h-4 w-4" />

                Filters

                <ChevronDown
                  className={`h-4 w-4 transition ${
                    showFilters
                      ? "rotate-180"
                      : ""
                  }`}
                />

              </button>

              <span className="text-sm text-slate-400">
                {filteredPlans.length} plans available
              </span>

            </div>

            <div className="flex items-center gap-2">

              <span className="hidden text-xs text-slate-400 sm:inline">
                Sort by
              </span>

              <select
                value={sortBy}
                onChange={(event) =>
                  setSortBy(event.target.value)
                }
                className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 outline-none focus:border-cyan-600"
              >
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Data</option>
              </select>

            </div>

          </div>

          {showFilters && (
            <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

              <div className="grid gap-4 md:grid-cols-3">

                <FilterSelect
                  label="Destination"
                  value={selectedDestination}
                  onChange={setSelectedDestination}
                  options={[
                    "All destinations",
                    ...destinations.map(
                      (item) => item.country
                    ),
                  ]}
                />

                <FilterSelect
                  label="Data allowance"
                  value={dataFilter}
                  onChange={setDataFilter}
                  options={[
                    "All data",
                    "1-5 GB",
                    "6-20 GB",
                    "Unlimited",
                  ]}
                />

                <FilterSelect
                  label="Validity"
                  value={validityFilter}
                  onChange={setValidityFilter}
                  options={[
                    "Any validity",
                    "Up to 7 days",
                    "8-30 days",
                    "31+ days",
                  ]}
                />

              </div>

              <div className="mt-4 flex justify-end">

                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-sm font-semibold text-slate-500 hover:text-cyan-700"
                >
                  Clear all filters
                </button>

              </div>

            </div>
          )}

        </section>

        {/* ======================================================== */}
        {/* PLANS */}
        {/* ======================================================== */}

        {filteredPlans.length > 0 ? (
          <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {filteredPlans.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                onSelect={() =>
                  setSelectedPlan(plan)
                }
              />
            ))}

          </section>
        ) : (
          <EmptyState onClear={clearFilters} />
        )}

        {/* ======================================================== */}
        {/* TRUST SECTION */}
        {/* ======================================================== */}

        <section className="mt-7 grid gap-4 md:grid-cols-3">

          <TrustItem
            icon={<Zap className="h-5 w-5" />}
            title="Instant delivery"
            description="Receive your eSIM immediately after payment."
          />

          <TrustItem
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Secure checkout"
            description="Your payment and account information are protected."
          />

          <TrustItem
            icon={<CircleHelp className="h-5 w-5" />}
            title="Easy installation"
            description="Install your eSIM using a QR code or manual setup."
          />

        </section>

      </div>

      {/* ========================================================== */}
      {/* CHECKOUT DRAWER */}
      {/* ========================================================== */}

      {selectedPlan && (
        <CheckoutDrawer
          plan={selectedPlan}
          onClose={() =>
            setSelectedPlan(null)
          }
        />
      )}

    </main>
  );
}

/* ========================================================================== */
/* PLAN TYPE BUTTON                                                            */
/* ========================================================================== */

function PlanTypeButton({
  active,
  onClick,
  icon,
  title,
  description,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl px-3 py-3 text-left transition sm:px-5 ${
        active
          ? "bg-cyan-700 text-white shadow-sm"
          : "text-slate-600 hover:bg-slate-50"
      }`}
    >

      <div className="flex items-center justify-center gap-2 sm:justify-start">

        <span
          className={`flex h-8 w-8 items-center justify-center rounded-lg ${
            active
              ? "bg-white/10"
              : "bg-slate-100"
          }`}
        >
          {icon}
        </span>

        <div>

          <p className="text-sm font-bold">
            {title}
          </p>

          <p
            className={`hidden text-[10px] sm:block ${
              active
                ? "text-white/60"
                : "text-slate-400"
            }`}
          >
            {description}
          </p>

        </div>

      </div>

    </button>
  );
}

/* ========================================================================== */
/* PLAN CARD                                                                   */
/* ========================================================================== */

function PlanCard({
  plan,
  onSelect,
}: {
  plan: EsimPlan;
  onSelect: () => void;
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md">

      {/* Badge */}

      {(plan.popular || plan.bestValue) && (
        <div className="absolute right-4 top-4 z-10">

          <span className="inline-flex items-center gap-1 rounded-full bg-cyan-50 px-2.5 py-1 text-[10px] font-bold text-cyan-700">

            <Star className="h-3 w-3 fill-current" />

            {plan.bestValue
              ? "Best value"
              : "Popular"}

          </span>

        </div>
      )}

      <div className="p-5 sm:p-6">

        {/* Destination */}

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-2xl">
            {plan.flag}
          </div>

          <div className="min-w-0">

            <h3 className="font-bold text-slate-900">
              {plan.country}
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              {plan.region}
            </p>

          </div>

        </div>

        {/* Data */}

        <div className="mt-6 rounded-xl bg-slate-50 p-4">

          <div className="flex items-end justify-between">

            <div>

              <p className="text-xs text-slate-400">
                Data allowance
              </p>

              <p className="mt-1 text-2xl font-bold text-slate-900">

                {plan.dataUnit ===
                "UNLIMITED"
                  ? "Unlimited"
                  : `${plan.data} GB`}

              </p>

            </div>

            <div className="text-right">

              <p className="text-xs text-slate-400">
                Valid for
              </p>

              <p className="mt-1 text-sm font-bold text-slate-800">
                {plan.validity} days
              </p>

            </div>

          </div>

        </div>

        {/* Features */}

        <div className="mt-5 space-y-3">

          <Feature
            icon={<Signal className="h-4 w-4" />}
            label="Network"
            value={plan.networks.join(" / ")}
          />

          <Feature
            icon={<Clock3 className="h-4 w-4" />}
            label="Activation"
            value={plan.activation}
          />

          <Feature
            icon={<Wifi className="h-4 w-4" />}
            label="Hotspot"
            value={
              plan.hotspot
                ? "Supported"
                : "Not supported"
            }
          />

        </div>

        {/* Price */}

        <div className="mt-6 flex items-end justify-between border-t border-slate-100 pt-5">

          <div>

            <p className="text-xs text-slate-400">
              One-time price
            </p>

            <div className="mt-1 flex items-baseline gap-2">

              <span className="text-2xl font-bold text-slate-900">
                ${plan.price.toFixed(2)}
              </span>

              {plan.oldPrice && (
                <span className="text-sm text-slate-400 line-through">
                  ${plan.oldPrice.toFixed(2)}
                </span>
              )}

            </div>

          </div>

          <span className="text-xs font-medium text-slate-400">
            USD
          </span>

        </div>

        {/* CTA */}

        <button
          type="button"
          onClick={onSelect}
          className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-cyan-700 text-sm font-bold text-white transition hover:bg-cyan-800"
        >
          Select plan
          <ArrowRight className="h-4 w-4" />
        </button>

      </div>

    </article>
  );
}

/* ========================================================================== */
/* FEATURE                                                                     */
/* ========================================================================== */

function Feature({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">

      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
        {icon}
      </div>

      <div className="min-w-0 flex-1">

        <p className="text-[10px] uppercase tracking-wide text-slate-400">
          {label}
        </p>

        <p className="mt-0.5 truncate text-xs font-medium text-slate-700">
          {value}
        </p>

      </div>

    </div>
  );
}

/* ========================================================================== */
/* FILTER SELECT                                                               */
/* ========================================================================== */

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <div>

      <label className="mb-2 block text-xs font-semibold text-slate-600">
        {label}
      </label>

      <select
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-cyan-600 focus:ring-4 focus:ring-cyan-600/10"
      >

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}

      </select>

    </div>
  );
}

/* ========================================================================== */
/* TRUST ITEM                                                                  */
/* ========================================================================== */

function TrustItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
        {icon}
      </div>

      <div>

        <h3 className="text-sm font-bold text-slate-800">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-5 text-slate-400">
          {description}
        </p>

      </div>

    </div>
  );
}

/* ========================================================================== */
/* EMPTY STATE                                                                 */
/* ========================================================================== */

function EmptyState({
  onClear,
}: {
  onClear: () => void;
}) {
  return (
    <section className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">

      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
        <Search className="h-6 w-6" />
      </div>

      <h3 className="mt-5 font-bold text-slate-900">
        No eSIM plans found
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
        Try another destination or remove some filters
        to find available eSIM plans.
      </p>

      <button
        type="button"
        onClick={onClear}
        className="mt-5 inline-flex h-10 items-center gap-2 rounded-xl bg-cyan-700 px-4 text-sm font-semibold text-white hover:bg-cyan-800"
      >
        <X className="h-4 w-4" />
        Clear filters
      </button>

    </section>
  );
}

/* ========================================================================== */
/* CHECKOUT DRAWER                                                             */
/* ========================================================================== */

function CheckoutDrawer({
  plan,
  onClose,
}: {
  plan: EsimPlan;
  onClose: () => void;
}) {
  const [quantity, setQuantity] = useState(1);

  const subtotal = plan.price * quantity;

  return (
    <div className="fixed inset-0 z-50">

      {/* Backdrop */}

      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
      />

      {/* Drawer */}

      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">

          <div>

            <p className="text-xs font-medium text-slate-400">
              eSIM purchase
            </p>

            <h2 className="mt-1 font-bold text-slate-900">
              Review your plan
            </h2>

          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700"
          >
            <X className="h-5 w-5" />
          </button>

        </div>

        {/* Content */}

        <div className="flex-1 overflow-y-auto p-5">

          {/* Selected plan */}

          <div className="rounded-2xl border border-cyan-100 bg-cyan-50/50 p-4">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl">
                {plan.flag}
              </div>

              <div className="flex-1">

                <p className="font-bold text-slate-900">
                  {plan.country}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {plan.dataUnit ===
                  "UNLIMITED"
                    ? "Unlimited"
                    : `${plan.data} GB`}{" "}
                  • {plan.validity} days
                </p>

              </div>

              <p className="font-bold text-slate-900">
                ${plan.price.toFixed(2)}
              </p>

            </div>

          </div>

          {/* Features */}

          <div className="mt-5 rounded-2xl border border-slate-200 p-4">

            <p className="text-sm font-bold text-slate-800">
              Plan details
            </p>

            <div className="mt-4 space-y-4">

              <CheckoutDetail
                label="Coverage"
                value={plan.country}
              />

              <CheckoutDetail
                label="Data"
                value={
                  plan.dataUnit ===
                  "UNLIMITED"
                    ? "Unlimited"
                    : `${plan.data} GB`
                }
              />

              <CheckoutDetail
                label="Validity"
                value={`${plan.validity} days`}
              />

              <CheckoutDetail
                label="Network"
                value={plan.networks.join(" / ")}
              />

              <CheckoutDetail
                label="Activation"
                value="Instant"
              />

              <CheckoutDetail
                label="Hotspot"
                value={
                  plan.hotspot
                    ? "Supported"
                    : "Not supported"
                }
              />

            </div>

          </div>

          {/* Quantity */}

          <div className="mt-5 rounded-2xl border border-slate-200 p-4">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm font-bold text-slate-800">
                  Quantity
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Number of eSIMs
                </p>

              </div>

              <div className="flex items-center gap-2 rounded-xl border border-slate-200 p-1">

                <button
                  type="button"
                  onClick={() =>
                    setQuantity(
                      Math.max(
                        1,
                        quantity - 1
                      )
                    )
                  }
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
                >
                  <Minus className="h-4 w-4" />
                </button>

                <span className="w-8 text-center text-sm font-bold">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity(
                      Math.min(
                        5,
                        quantity + 1
                      )
                    )
                  }
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
                >
                  <Plus className="h-4 w-4" />
                </button>

              </div>

            </div>

          </div>

          {/* Installation */}

          <div className="mt-5 rounded-2xl bg-slate-50 p-4">

            <div className="flex gap-3">

              <Info className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />

              <p className="text-xs leading-5 text-slate-500">
                After successful payment, your eSIM
                will be generated and delivered to your
                account. You can install it using the QR
                code or manual activation details.
              </p>

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="border-t border-slate-200 bg-white p-5">

          <div className="mb-4 flex items-center justify-between">

            <span className="text-sm text-slate-500">
              Total
            </span>

            <span className="text-2xl font-bold text-slate-900">
              ${subtotal.toFixed(2)}
            </span>

          </div>

          <button
            type="button"
            onClick={() => {
              /*
                Production:

                await fetch("/api/esim/purchase", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    planId: plan.id,
                    quantity
                  })
                })
              */

              alert(
                "Connect this button to your checkout API."
              );
            }}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-cyan-700 text-sm font-bold text-white transition hover:bg-cyan-800"
          >
            Continue to checkout
            <ArrowRight className="h-4 w-4" />
          </button>

          <p className="mt-3 text-center text-[10px] leading-4 text-slate-400">
            By continuing, you agree to the eSIM
            purchase terms and applicable conditions.
          </p>

        </div>

      </aside>

    </div>
  );
}

/* ========================================================================== */
/* CHECKOUT DETAIL                                                             */
/* ========================================================================== */

function CheckoutDetail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">

      <span className="text-xs text-slate-400">
        {label}
      </span>

      <span className="text-right text-xs font-semibold text-slate-700">
        {value}
      </span>

    </div>
  );
}