// "use client";

// import {
//   Smartphone,
//   Wifi,
//   Signal,
//   QrCode,
//   RefreshCcw,
//   Globe2,
//   CalendarDays,
//   Database,
//   CheckCircle2,
//   MoreVertical,
//   Download,
//   Settings,
// } from "lucide-react";



// const esimProfiles = [

// {
// country:"United States",
// flag:"🇺🇸",
// plan:"10GB Data Plan",
// data:"7.5GB / 10GB",
// expiry:"Aug 30, 2026",
// network:"AT&T",
// status:"Active"
// },


// {
// country:"United Kingdom",
// flag:"🇬🇧",
// plan:"20GB Global Plan",
// data:"12GB / 20GB",
// expiry:"Sep 12, 2026",
// network:"Vodafone",
// status:"Active"
// },


// {
// country:"Japan",
// flag:"🇯🇵",
// plan:"5GB Travel Plan",
// data:"1.2GB / 5GB",
// expiry:"Aug 20, 2026",
// network:"NTT",
// status:"Expired"
// }

// ];





// export default function MyEsimPage(){



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
// md:items-center
// justify-between
// gap-5
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


// <div
// className="
// h-12
// w-12
// rounded-2xl
// bg-blue-100
// flex
// items-center
// justify-center
// "
// >

// <Smartphone
// className="text-[#071B4D]"
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

// My eSIMs

// </h1>


// <p
// className="
// text-gray-500
// "
// >

// Manage your global mobile connectivity

// </p>


// </div>


// </div>


// </div>







// <button
// className="
// bg-[#071B4D]
// text-white
// rounded-xl
// px-7
// py-4
// font-semibold
// "
// >

// Buy New eSIM

// </button>



// </div>


// </div>


// </section>









// {/* SUMMARY CARDS */}



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
// sm:grid-cols-2
// lg:grid-cols-4
// gap-6
// "
// >


// <div
// className="
// bg-white
// rounded-3xl
// border
// p-6
// "
// >

// <Globe2
// className="text-[#071B4D]"
// />


// <h3
// className="
// mt-5
// text-gray-500
// "
// >

// Total eSIM

// </h3>


// <p
// className="
// text-3xl
// font-bold
// text-[#071B4D]
// "
// >

// 3

// </p>


// </div>







// <div
// className="
// bg-white
// rounded-3xl
// border
// p-6
// "
// >

// <CheckCircle2
// className="text-green-600"
// />


// <h3
// className="
// mt-5
// text-gray-500
// "
// >

// Active

// </h3>


// <p
// className="
// text-3xl
// font-bold
// text-[#071B4D]
// "
// >

// 2

// </p>


// </div>







// <div
// className="
// bg-white
// rounded-3xl
// border
// p-6
// "
// >

// <Database
// className="text-[#071B4D]"
// />


// <h3
// className="
// mt-5
// text-gray-500
// "
// >

// Data Remaining

// </h3>


// <p
// className="
// text-3xl
// font-bold
// text-[#071B4D]
// "
// >

// 20GB

// </p>


// </div>








// <div
// className="
// bg-white
// rounded-3xl
// border
// p-6
// "
// >

// <Wifi
// className="text-[#071B4D]"
// />


// <h3
// className="
// mt-5
// text-gray-500
// "
// >

// Connected Network

// </h3>


// <p
// className="
// text-xl
// font-bold
// text-[#071B4D]
// "
// >

// 5G Ready

// </p>


// </div>



// </div>


// </section>









// {/* ESIM LIST */}



// <section
// className="
// max-w-7xl
// mx-auto
// px-5
// lg:px-10
// pb-20
// "
// >


// <h2
// className="
// text-2xl
// font-bold
// text-[#071B4D]
// "
// >

// Your eSIM Profiles

// </h2>





// <div
// className="
// mt-6
// grid
// lg:grid-cols-2
// gap-6
// "
// >


// {
// esimProfiles.map((esim,index)=>(


// <div
// key={index}
// className="
// bg-white
// rounded-[32px]
// border
// p-7
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



// <div
// className="
// flex
// gap-4
// "
// >


// <div
// className="
// text-4xl
// "
// >

// {esim.flag}

// </div>




// <div>

// <h3
// className="
// text-xl
// font-bold
// text-[#071B4D]
// "
// >

// {esim.country}

// </h3>


// <p
// className="
// text-gray-500
// "
// >

// {esim.plan}

// </p>


// </div>


// </div>





// <button>

// <MoreVertical/>

// </button>



// </div>









// {/* STATUS */}



// <div
// className="
// mt-6
// flex
// items-center
// justify-between
// "
// >


// <span
// className={`
// px-4
// py-2
// rounded-full
// text-sm
// font-semibold

// ${esim.status==="Active"
// ?
// "bg-green-100 text-green-700"
// :
// "bg-red-100 text-red-700"
// }

// `}
// >


// {esim.status}


// </span>





// <div
// className="
// flex
// items-center
// gap-2
// text-gray-500
// "
// >


// <Signal size={18}/>

// {esim.network}


// </div>


// </div>









// {/* DATA */}



// <div
// className="
// mt-7
// bg-[#f7f9fc]
// rounded-2xl
// p-5
// "
// >


// <div
// className="
// flex
// justify-between
// "
// >


// <p
// className="
// font-semibold
// "
// >

// Data Usage

// </p>


// <p
// className="
// text-[#071B4D]
// font-bold
// "
// >

// {esim.data}

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
// h-full
// bg-[#071B4D]
// rounded-full
// w-[70%]
// "
// />


// </div>


// </div>









// {/* DETAILS */}



// <div
// className="
// mt-6
// space-y-3
// text-gray-600
// "
// >


// <div
// className="
// flex
// items-center
// gap-3
// "
// >

// <CalendarDays size={18}/>

// Expires {esim.expiry}

// </div>



// </div>









// {/* ACTIONS */}



// <div
// className="
// mt-7
// grid
// grid-cols-3
// gap-3
// "
// >



// <button
// className="
// flex
// items-center
// justify-center
// gap-2
// rounded-xl
// bg-[#071B4D]
// text-white
// py-3
// text-sm
// "
// >

// <QrCode size={16}/>

// QR

// </button>





// <button
// className="
// flex
// items-center
// justify-center
// gap-2
// rounded-xl
// border
// py-3
// text-sm
// "
// >


// <RefreshCcw size={16}/>

// Renew

// </button>





// <button
// className="
// flex
// items-center
// justify-center
// gap-2
// rounded-xl
// border
// py-3
// text-sm
// "
// >

// <Settings size={16}/>

// Manage

// </button>



// </div>






// </div>


// ))


// }


// </div>


// </section>









// {/* INSTALL GUIDE CTA */}



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
// rounded-[36px]
// bg-[#071B4D]
// text-white
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
// "
// >

// Need Help Installing Your eSIM?

// </h2>


// <p
// className="
// mt-3
// text-blue-100
// "
// >

// Follow our simple activation guide
// and connect within minutes.

// </p>


// </div>





// <button
// className="
// flex
// items-center
// gap-3
// bg-white
// text-[#071B4D]
// px-8
// py-4
// rounded-xl
// font-semibold
// "
// >


// <Download size={18}/>

// Installation Guide


// </button>


// </div>


// </section>





// </main>

// )

// }


"use client";

import {
  Activity,
  ArrowDownLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Copy,
  CreditCard,
  Globe2,
  History,
  Info,
  MoreHorizontal,
  Package,
  Plus,
  RefreshCw,
  Search,
  Settings2,
  Signal,
  Smartphone,
  Sparkles,
  Wifi,
  XCircle,
  Zap,
} from "lucide-react";
import { useMemo, useState } from "react";

type EsimStatus = "active" | "expiring" | "expired";

type Esim = {
  id: string;
  iccid: string;
  country: string;
  flag: string;
  plan: string;
  dataTotal: number;
  dataUsed: number;
  dataUnit: "GB";
  status: EsimStatus;
  expiresAt: string;
  network: string;
};

type Transaction = {
  id: string;
  type: "purchase" | "topup" | "refund";
  title: string;
  description: string;
  amount: number;
  date: string;
  status: "completed" | "pending" | "failed";
};

const activeEsims: Esim[] = [
  {
    id: "ESIM-98231",
    iccid: "8944201234567890123",
    country: "United States",
    flag: "🇺🇸",
    plan: "10GB • 30 Days",
    dataTotal: 10,
    dataUsed: 4.7,
    dataUnit: "GB",
    status: "active",
    expiresAt: "Aug 28, 2026",
    network: "AT&T / T-Mobile",
  },
  {
    id: "ESIM-98230",
    iccid: "8944209876543210987",
    country: "United Kingdom",
    flag: "🇬🇧",
    plan: "5GB • 15 Days",
    dataTotal: 5,
    dataUsed: 3.8,
    dataUnit: "GB",
    status: "expiring",
    expiresAt: "Aug 15, 2026",
    network: "EE / O2",
  },
  {
    id: "ESIM-98229",
    iccid: "8944201112223334445",
    country: "Nigeria",
    flag: "🇳🇬",
    plan: "15GB • 30 Days",
    dataTotal: 15,
    dataUsed: 6.2,
    dataUnit: "GB",
    status: "active",
    expiresAt: "Sep 02, 2026",
    network: "MTN / Airtel",
  },
];

const transactions: Transaction[] = [
  {
    id: "TXN-90182",
    type: "purchase",
    title: "USA eSIM",
    description: "10GB • 30 Days",
    amount: 18.99,
    date: "Today, 08:42 AM",
    status: "completed",
  },
  {
    id: "TXN-90181",
    type: "topup",
    title: "Wallet top up",
    description: "Card payment",
    amount: 50.0,
    date: "Yesterday, 04:20 PM",
    status: "completed",
  },
  {
    id: "TXN-90180",
    type: "purchase",
    title: "UK eSIM",
    description: "5GB • 15 Days",
    amount: 12.5,
    date: "Aug 10, 2026",
    status: "completed",
  },
  {
    id: "TXN-90179",
    type: "purchase",
    title: "Nigeria eSIM",
    description: "15GB • 30 Days",
    amount: 16.25,
    date: "Aug 08, 2026",
    status: "completed",
  },
];

const destinations = [
  {
    country: "United States",
    flag: "🇺🇸",
    plans: "42 plans",
    from: "$4.99",
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    plans: "31 plans",
    from: "$3.99",
  },
  {
    country: "France",
    flag: "🇫🇷",
    plans: "27 plans",
    from: "$3.49",
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    plans: "29 plans",
    from: "$3.99",
  },
];

export default function EsimHomePage() {
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");

  const filteredTransactions = useMemo(() => {
    if (!search.trim()) return transactions;

    const query = search.toLowerCase();

    return transactions.filter(
      (transaction) =>
        transaction.title.toLowerCase().includes(query) ||
        transaction.description.toLowerCase().includes(query) ||
        transaction.id.toLowerCase().includes(query)
    );
  }, [search]);

  async function handleRefresh() {
    setRefreshing(true);

    /*
      Production API:

      const response = await fetch(
        "/api/esim/dashboard",
        {
          cache: "no-store",
        }
      );

      const data = await response.json();

      // Update dashboard state here.
    */

    await new Promise((resolve) =>
      setTimeout(resolve, 700)
    );

    setRefreshing(false);
  }

  function copy(value: string) {
    navigator.clipboard.writeText(value);
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <div className="mx-auto w-full max-w-[1500px] px-4 py-5 sm:px-6 lg:px-8 lg:py-8">

        {/* ========================================================= */}
        {/* HEADER */}
        {/* ========================================================= */}

        <header className="mb-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <div className="mb-2 flex items-center gap-2 text-sm text-slate-400">
                <span>Dashboard</span>

                <ChevronRight className="h-4 w-4" />

                <span className="font-medium text-slate-700">
                  Data eSIM
                </span>
              </div>

              <div className="flex items-center gap-3">

                <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 sm:flex">
                  <Wifi className="h-6 w-6" />
                </div>

                <div>
                  <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    eSIM Dashboard
                  </h1>

                  <p className="mt-1 text-sm text-slate-500 sm:text-base">
                    Manage your data eSIMs, usage, plans and
                    connectivity from one place.
                  </p>
                </div>

              </div>
            </div>

            <div className="flex flex-wrap gap-2">

              <button
                type="button"
                onClick={handleRefresh}
                disabled={refreshing}
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:opacity-60"
              >
                <RefreshCw
                  className={`h-4 w-4 ${
                    refreshing ? "animate-spin" : ""
                  }`}
                />

                Refresh
              </button>

              <a
                href="/esim/buy"
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#087f8c] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#066d78]"
              >
                <Plus className="h-4 w-4" />
                Buy eSIM
              </a>

            </div>

          </div>
        </header>

        {/* ========================================================= */}
        {/* BALANCE + QUICK ACTIONS */}
        {/* ========================================================= */}

        <section className="mb-6 grid gap-5 lg:grid-cols-[1.5fr_1fr]">

          {/* Wallet */}
          <div className="relative overflow-hidden rounded-2xl bg-[#092f36] p-6 text-white shadow-sm sm:p-7">

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />

            <div className="absolute -bottom-20 left-1/3 h-52 w-52 rounded-full bg-teal-300/10 blur-3xl" />

            <div className="relative">

              <div className="flex items-start justify-between">

                <div>
                  <div className="flex items-center gap-2 text-sm text-white/65">
                    <CreditCard className="h-4 w-4" />
                    Available Balance
                  </div>

                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-3xl font-bold tracking-tight sm:text-4xl">
                      $124.85
                    </span>

                    <span className="text-sm text-white/50">
                      USD
                    </span>
                  </div>

                  <div className="mt-2 flex items-center gap-2 text-xs text-white/55">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                      <ArrowUpRight className="h-3 w-3" />
                    </span>

                    Ready to purchase eSIM data plans
                  </div>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <WalletIcon />
                </div>

              </div>

              <div className="mt-7 flex flex-wrap gap-3">

                <a
                  href="/wallet/deposit"
                  className="inline-flex h-10 items-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold text-[#092f36] transition hover:bg-slate-100"
                >
                  <ArrowDownLeft className="h-4 w-4" />
                  Add Funds
                </a>

                <a
                  href="/esim/transactions"
                  className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <History className="h-4 w-4" />
                  Transactions
                </a>

              </div>

            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-center gap-2">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                <Zap className="h-5 w-5" />
              </div>

              <div>
                <h2 className="font-bold text-slate-900">
                  Quick actions
                </h2>

                <p className="text-xs text-slate-400">
                  Manage your eSIM faster
                </p>
              </div>

            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">

              <QuickAction
                href="/esim/buy"
                icon={<Plus className="h-4 w-4" />}
                title="Buy eSIM"
                description="Find a data plan"
              />

              <QuickAction
                href="/esim/my-esim"
                icon={<Smartphone className="h-4 w-4" />}
                title="My eSIMs"
                description="Manage eSIMs"
              />

              <QuickAction
                href="/esim/usage"
                icon={<BarChart3 className="h-4 w-4" />}
                title="Usage"
                description="Track your data"
              />

              <QuickAction
                href="/esim/transactions"
                icon={<History className="h-4 w-4" />}
                title="Transactions"
                description="View purchases"
              />

            </div>

          </div>

        </section>

        {/* ========================================================= */}
        {/* STATS */}
        {/* ========================================================= */}

        <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <DashboardStat
            title="Active eSIMs"
            value="3"
            change="+1 this month"
            icon={<Smartphone className="h-5 w-5" />}
            positive
          />

          <DashboardStat
            title="Data Remaining"
            value="15.3 GB"
            change="Across active plans"
            icon={<Wifi className="h-5 w-5" />}
          />

          <DashboardStat
            title="Data Used"
            value="14.7 GB"
            change="+3.2 GB this week"
            icon={<Activity className="h-5 w-5" />}
            positive
          />

          <DashboardStat
            title="Total Spent"
            value="$84.32"
            change="+$18.99 this week"
            icon={<BarChart3 className="h-5 w-5" />}
          />

        </section>

        {/* ========================================================= */}
        {/* ACTIVE ESIMS */}
        {/* ========================================================= */}

        <section className="mb-6 rounded-2xl border border-slate-200 bg-white shadow-sm">

          <div className="border-b border-slate-200 p-5 sm:p-6">

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <h2 className="font-bold text-slate-900">
                  Active eSIMs
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Monitor your active data plans and usage.
                </p>
              </div>

              <a
                href="/esim/my-esim"
                className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-700"
              >
                Manage eSIMs
                <ArrowRight className="h-4 w-4" />
              </a>

            </div>

          </div>

          <div className="grid gap-4 p-5 sm:p-6 lg:grid-cols-3">

            {activeEsims.map((esim) => (
              <EsimCard
                key={esim.id}
                esim={esim}
                onCopy={() => copy(esim.iccid)}
              />
            ))}

          </div>

        </section>

        {/* ========================================================= */}
        {/* USAGE + ALERT */}
        {/* ========================================================= */}

        <section className="mb-6 grid gap-5 xl:grid-cols-[1.5fr_1fr]">

          {/* Usage chart */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <h2 className="font-bold text-slate-900">
                  Data usage
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Your total eSIM data consumption.
                </p>
              </div>

              <button
                type="button"
                className="flex h-9 items-center gap-2 self-start rounded-lg border border-slate-200 px-3 text-xs font-semibold text-slate-600"
              >
                Last 7 days
                <ChevronDown className="h-3.5 w-3.5" />
              </button>

            </div>

            <UsageChart />

          </div>

          {/* Alert */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">

            <div className="flex items-start gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-amber-600 shadow-sm">
                <Bell className="h-5 w-5" />
              </div>

              <div>
                <h2 className="font-bold text-amber-950">
                  Plan expiring soon
                </h2>

                <p className="mt-1 text-sm leading-6 text-amber-900/70">
                  Your UK eSIM expires on{" "}
                  <strong>August 15, 2026</strong>.
                  Renew or purchase another plan to
                  stay connected.
                </p>
              </div>

            </div>

            <div className="mt-5 rounded-xl border border-amber-200 bg-white/70 p-4">

              <div className="flex items-center gap-3">

                <span className="text-2xl">
                  🇬🇧
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-800">
                    United Kingdom
                  </p>

                  <p className="text-xs text-slate-400">
                    5GB • 15 Days
                  </p>
                </div>

                <Clock3 className="h-4 w-4 text-amber-600" />

              </div>

            </div>

            <a
              href="/esim/buy"
              className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-amber-600 px-4 text-sm font-semibold text-white transition hover:bg-amber-700"
            >
              Find a new plan
              <ArrowRight className="h-4 w-4" />
            </a>

          </div>

        </section>

        {/* ========================================================= */}
        {/* TRANSACTIONS + DESTINATIONS */}
        {/* ========================================================= */}

        <section className="grid gap-5 xl:grid-cols-[1.5fr_1fr]">

          {/* Transactions */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

            <div className="border-b border-slate-200 p-5 sm:p-6">

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <h2 className="font-bold text-slate-900">
                    Recent transactions
                  </h2>

                  <p className="mt-1 text-sm text-slate-400">
                    Your latest eSIM purchases and wallet
                    activity.
                  </p>
                </div>

                <a
                  href="/esim/transactions"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-700"
                >
                  View all
                  <ArrowRight className="h-4 w-4" />
                </a>

              </div>

              <div className="relative mt-4">

                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  placeholder="Search transactions..."
                  className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-4 text-sm outline-none transition focus:border-cyan-600 focus:bg-white focus:ring-4 focus:ring-cyan-600/10"
                />

              </div>

            </div>

            <div className="divide-y divide-slate-100">

              {filteredTransactions.map((transaction) => (
                <TransactionRow
                  key={transaction.id}
                  transaction={transaction}
                />
              ))}

              {filteredTransactions.length === 0 && (
                <div className="px-6 py-12 text-center">
                  <Search className="mx-auto h-8 w-8 text-slate-300" />

                  <p className="mt-3 text-sm font-semibold text-slate-700">
                    No transactions found
                  </p>
                </div>
              )}

            </div>

          </div>

          {/* Destinations */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

            <div className="flex items-center justify-between">

              <div>
                <div className="flex items-center gap-2">

                  <Globe2 className="h-5 w-5 text-cyan-700" />

                  <h2 className="font-bold text-slate-900">
                    Popular destinations
                  </h2>

                </div>

                <p className="mt-1 text-sm text-slate-400">
                  Explore available data plans.
                </p>
              </div>

              <a
                href="/esim/buy"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-500 hover:bg-cyan-50 hover:text-cyan-700"
              >
                <ArrowRight className="h-4 w-4" />
              </a>

            </div>

            <div className="mt-5 space-y-2">

              {destinations.map((destination) => (
                <a
                  key={destination.country}
                  href="/esim/buy"
                  className="group flex items-center gap-3 rounded-xl p-3 transition hover:bg-slate-50"
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-xl">
                    {destination.flag}
                  </div>

                  <div className="min-w-0 flex-1">

                    <p className="text-sm font-semibold text-slate-800">
                      {destination.country}
                    </p>

                    <p className="mt-0.5 text-xs text-slate-400">
                      {destination.plans}
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-sm font-bold text-slate-800">
                      {destination.from}
                    </p>

                    <p className="text-[10px] text-slate-400">
                      from
                    </p>

                  </div>

                  <ChevronRight className="h-4 w-4 text-slate-300 transition group-hover:text-cyan-600" />

                </a>
              ))}

            </div>

            <a
              href="/esim/buy"
              className="mt-4 flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
            >
              Browse all destinations
              <ArrowRight className="h-4 w-4" />
            </a>

          </div>

        </section>

        {/* ========================================================= */}
        {/* INFORMATION BANNER */}
        {/* ========================================================= */}

        <section className="mt-5 overflow-hidden rounded-2xl border border-cyan-100 bg-cyan-50/60 p-5 sm:p-6">

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div className="flex items-start gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-cyan-700 shadow-sm">
                <Sparkles className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-semibold text-cyan-950">
                  Stay connected wherever you go
                </h3>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-cyan-900/70">
                  Choose from flexible data-only eSIM plans
                  for travel, business and everyday
                  connectivity across multiple destinations.
                </p>
              </div>

            </div>

            <a
              href="/esim/buy"
              className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl bg-cyan-700 px-4 text-sm font-semibold text-white transition hover:bg-cyan-800"
            >
              Explore eSIM Plans
              <ArrowRight className="h-4 w-4" />
            </a>

          </div>

        </section>

      </div>
    </main>
  );
}

/* ========================================================================== */
/* COMPONENTS                                                                  */
/* ========================================================================== */

function WalletIcon() {
  return (
    <CreditCard className="h-5 w-5 text-cyan-200" />
  );
}

function DashboardStat({
  title,
  value,
  change,
  icon,
  positive = false,
}: {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  positive?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            {value}
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
          {icon}
        </div>

      </div>

      <div
        className={`mt-4 flex items-center gap-1.5 text-xs font-medium ${
          positive
            ? "text-emerald-600"
            : "text-slate-500"
        }`}
      >
        {positive && (
          <ArrowUpRight className="h-3.5 w-3.5" />
        )}

        {change}
      </div>

    </div>
  );
}

function QuickAction({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <a
      href={href}
      className="group rounded-xl border border-slate-200 p-3 transition hover:border-cyan-200 hover:bg-cyan-50/40"
    >

      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-600 transition group-hover:bg-cyan-100 group-hover:text-cyan-700">
        {icon}
      </div>

      <p className="mt-3 text-sm font-semibold text-slate-800">
        {title}
      </p>

      <p className="mt-1 text-[11px] text-slate-400">
        {description}
      </p>

    </a>
  );
}

function EsimCard({
  esim,
  onCopy,
}: {
  esim: Esim;
  onCopy: () => void;
}) {
  const percentage =
    (esim.dataUsed / esim.dataTotal) * 100;

  const remaining =
    esim.dataTotal - esim.dataUsed;

  const isExpiring = esim.status === "expiring";

  return (
    <div className="rounded-2xl border border-slate-200 p-5 transition hover:border-cyan-200 hover:shadow-sm">

      <div className="flex items-start justify-between">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-2xl">
            {esim.flag}
          </div>

          <div>
            <p className="text-sm font-bold text-slate-900">
              {esim.country}
            </p>

            <p className="mt-0.5 text-xs text-slate-400">
              {esim.plan}
            </p>
          </div>

        </div>

        <StatusBadge status={esim.status} />

      </div>

      <div className="mt-6">

        <div className="flex items-end justify-between">

          <div>
            <p className="text-xs text-slate-400">
              Data remaining
            </p>

            <p className="mt-1 text-2xl font-bold text-slate-900">
              {remaining.toFixed(1)}
              <span className="ml-1 text-sm font-medium text-slate-400">
                GB
              </span>
            </p>
          </div>

          <p className="text-xs font-medium text-slate-500">
            {percentage.toFixed(0)}% used
          </p>

        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className={`h-full rounded-full ${
              percentage >= 80
                ? "bg-amber-500"
                : "bg-cyan-600"
            }`}
            style={{
              width: `${Math.min(percentage, 100)}%`,
            }}
          />
        </div>

      </div>

      <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">

        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-400">
            Network
          </span>

          <span className="font-medium text-slate-700">
            {esim.network}
          </span>
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-400">
            Expires
          </span>

          <span
            className={`font-medium ${
              isExpiring
                ? "text-amber-600"
                : "text-slate-700"
            }`}
          >
            {esim.expiresAt}
          </span>
        </div>

        <div className="flex items-center justify-between text-xs">

          <span className="text-slate-400">
            ICCID
          </span>

          <button
            type="button"
            onClick={onCopy}
            className="flex items-center gap-1 text-slate-600 hover:text-cyan-700"
          >
            ••••••{esim.iccid.slice(-4)}
            <Copy className="h-3 w-3" />
          </button>

        </div>

      </div>

      <div className="mt-5 flex gap-2">

        <a
          href={`/esim/${esim.id}`}
          className="flex h-9 flex-1 items-center justify-center gap-1.5 rounded-lg bg-slate-900 text-xs font-semibold text-white transition hover:bg-slate-800"
        >
          Manage
          <ArrowRight className="h-3.5 w-3.5" />
        </a>

        <a
          href="/esim/buy"
          className="flex h-9 items-center justify-center rounded-lg border border-slate-200 px-3 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
        >
          Top up
        </a>

      </div>

    </div>
  );
}

function StatusBadge({
  status,
}: {
  status: EsimStatus;
}) {
  const config = {
    active: {
      label: "Active",
      className: "bg-emerald-50 text-emerald-700",
    },
    expiring: {
      label: "Expiring",
      className: "bg-amber-50 text-amber-700",
    },
    expired: {
      label: "Expired",
      className: "bg-red-50 text-red-700",
    },
  }[status];

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${config.className}`}
    >
      {config.label}
    </span>
  );
}

function UsageChart() {
  const values = [34, 52, 42, 68, 54, 82, 64];

  return (
    <div className="mt-7">

      <div className="flex h-[190px] items-end gap-2 sm:gap-4">

        {values.map((value, index) => (
          <div
            key={index}
            className="flex h-full flex-1 flex-col justify-end"
          >

            <div className="mb-2 text-center text-[10px] text-slate-400">
              {value}%
            </div>

            <div
              className="w-full rounded-t-lg bg-cyan-600/80 transition hover:bg-cyan-700"
              style={{
                height: `${value}%`,
              }}
            />

          </div>
        ))}

      </div>

      <div className="mt-3 flex justify-between border-t border-slate-100 pt-3 text-[10px] text-slate-400">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>

    </div>
  );
}

function TransactionRow({
  transaction,
}: {
  transaction: Transaction;
}) {
  const isTopup = transaction.type === "topup";

  return (
    <div className="flex items-center gap-3 px-5 py-4 transition hover:bg-slate-50 sm:px-6">

      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
          isTopup
            ? "bg-emerald-50 text-emerald-600"
            : "bg-cyan-50 text-cyan-700"
        }`}
      >
        {isTopup ? (
          <ArrowDownLeft className="h-4 w-4" />
        ) : (
          <Package className="h-4 w-4" />
        )}
      </div>

      <div className="min-w-0 flex-1">

        <div className="flex items-center gap-2">

          <p className="text-sm font-semibold text-slate-800">
            {transaction.title}
          </p>

          <span className="hidden rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-700 sm:inline-block">
            {transaction.status}
          </span>

        </div>

        <p className="mt-1 truncate text-xs text-slate-400">
          {transaction.description} • {transaction.date}
        </p>

      </div>

      <div className="text-right">

        <p
          className={`text-sm font-semibold ${
            isTopup
              ? "text-emerald-600"
              : "text-slate-700"
          }`}
        >
          {isTopup ? "+" : "-"}$
          {transaction.amount.toFixed(2)}
        </p>

        <p className="font-mono text-[9px] text-slate-400">
          {transaction.id}
        </p>

      </div>

      <button
        type="button"
        className="hidden h-8 w-8 items-center justify-center rounded-lg text-slate-300 transition hover:bg-slate-100 hover:text-slate-600 sm:flex"
      >
        <MoreHorizontal className="h-4 w-4" />
      </button>

    </div>
  );
}