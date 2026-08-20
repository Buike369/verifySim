// "use client";

// import {
//   Users,
//   Copy,
//   Share2,
//   Wallet,
//   TrendingUp,
//   Gift,
//   CheckCircle2,
//   Clock,
//   ArrowUpRight,
//   Download,
//   Link2,
//   Trophy,
// } from "lucide-react";

// import { useState } from "react";





// const referrals = [

// {
// name:"John Smith",
// date:"Aug 07, 2026",
// status:"Active",
// earnings:"$5.00"
// },

// {
// name:"Sarah Williams",
// date:"Aug 05, 2026",
// status:"Active",
// earnings:"$8.50"
// },

// {
// name:"Michael Lee",
// date:"Aug 01, 2026",
// status:"Pending",
// earnings:"$0.00"
// }

// ];





// export default function ReferralPage(){


// const referralLink =
// "https://verifysim.com/ref/KINGSLEY2026";


// const [copied,setCopied]=useState(false);



// function copyReferral(){

// navigator.clipboard.writeText(referralLink);

// setCopied(true);

// setTimeout(()=>{
// setCopied(false)
// },2000);

// }



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


// <Gift
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

// Referral Program

// </h1>


// <p
// className="
// text-gray-500
// "
// >

// Earn rewards by inviting users to VerifySIM.

// </p>


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
// flex
// items-center
// gap-2
// "
// >


// <Share2 size={18}/>

// Share Invite


// </button>



// </div>


// </div>


// </section>









// {/* STATS */}



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
// border
// rounded-3xl
// p-6
// "
// >


// <Users
// className="text-[#071B4D]"
// />


// <p
// className="
// mt-4
// text-gray-500
// "
// >

// Total Referrals

// </p>


// <h2
// className="
// text-3xl
// font-bold
// text-[#071B4D]
// "
// >

// 128

// </h2>


// </div>








// <div
// className="
// bg-white
// border
// rounded-3xl
// p-6
// "
// >


// <Wallet
// className="text-green-600"
// />


// <p
// className="
// mt-4
// text-gray-500
// "
// >

// Total Earnings

// </p>


// <h2
// className="
// text-3xl
// font-bold
// "
// >

// $640

// </h2>


// </div>








// <div
// className="
// bg-white
// border
// rounded-3xl
// p-6
// "
// >


// <TrendingUp
// className="text-[#071B4D]"
// />


// <p
// className="
// mt-4
// text-gray-500
// "
// >

// This Month

// </p>


// <h2
// className="
// text-3xl
// font-bold
// "
// >

// $120

// </h2>


// </div>








// <div
// className="
// bg-white
// border
// rounded-3xl
// p-6
// "
// >


// <Trophy
// className="text-yellow-500"
// />


// <p
// className="
// mt-4
// text-gray-500
// "
// >

// Referral Rank

// </p>


// <h2
// className="
// text-2xl
// font-bold
// "
// >

// #24

// </h2>


// </div>





// </div>


// </section>









// {/* REFERRAL LINK */}



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
// bg-[#071B4D]
// rounded-[36px]
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

// Your Referral Link

// </h2>


// <p
// className="
// mt-3
// text-blue-100
// "
// >

// Share your link and earn commission
// for every successful customer.

// </p>


// </div>







// <div
// className="
// bg-white
// rounded-2xl
// p-2
// flex
// items-center
// gap-2
// w-full
// lg:w-auto
// "
// >


// <input

// value={referralLink}

// readOnly

// className="
// flex-1
// px-4
// py-3
// text-gray-700
// outline-none
// min-w-0
// "

// />




// <button

// onClick={copyReferral}

// className="
// bg-[#071B4D]
// text-white
// px-5
// py-3
// rounded-xl
// "

// >


// {
// copied
// ?
// "Copied"
// :
// <Copy size={18}/>
// }


// </button>


// </div>



// </div>


// </div>


// </section>









// {/* HOW IT WORKS */}



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
// text-2xl
// font-bold
// text-[#071B4D]
// "
// >

// How Referral Works

// </h2>





// <div
// className="
// mt-6
// grid
// md:grid-cols-3
// gap-6
// "
// >


// {


// [
// "Share your referral link",
// "Friends create VerifySIM accounts",
// "Earn rewards automatically"

// ].map((item,index)=>(


// <div
// key={index}
// className="
// bg-white
// border
// rounded-3xl
// p-7
// text-center
// "
// >


// <div
// className="
// w-12
// h-12
// mx-auto
// rounded-full
// bg-[#071B4D]
// text-white
// flex
// items-center
// justify-center
// font-bold
// "
// >

// {index+1}

// </div>



// <p
// className="
// mt-5
// font-semibold
// "
// >

// {item}

// </p>


// </div>


// ))


// }



// </div>


// </section>









// {/* REFERRAL HISTORY */}



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
// rounded-[32px]
// border
// p-7
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

// Referral History

// </h2>



// <button
// className="
// flex
// gap-2
// items-center
// text-[#071B4D]
// font-semibold
// "
// >


// <Download size={17}/>

// Export


// </button>


// </div>







// <div
// className="
// mt-6
// space-y-4
// "
// >


// {
// referrals.map((item,index)=>(


// <div
// key={index}
// className="
// bg-[#f7f9fc]
// rounded-2xl
// p-5
// flex
// flex-col
// sm:flex-row
// justify-between
// gap-4
// "
// >


// <div>

// <h3
// className="
// font-bold
// text-[#071B4D]
// "
// >

// {item.name}

// </h3>


// <p
// className="
// text-gray-500
// "
// >

// Joined {item.date}

// </p>


// </div>





// <div
// className="
// flex
// items-center
// gap-5
// "
// >



// <span
// className={`
// px-4
// py-2
// rounded-full
// text-sm
// font-semibold

// ${
// item.status==="Active"
// ?
// "bg-green-100 text-green-700"
// :
// "bg-yellow-100 text-yellow-700"
// }

// `}
// >

// {item.status}

// </span>




// <p
// className="
// font-bold
// text-[#071B4D]
// "
// >

// {item.earnings}

// </p>



// </div>



// </div>


// ))


// }


// </div>


// </div>


// </section>









// {/* CTA */}



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
// bg-white
// border
// p-10
// text-center
// "
// >


// <Link2
// size={45}
// className="
// mx-auto
// text-[#071B4D]
// "
// />


// <h2
// className="
// mt-5
// text-3xl
// font-bold
// text-[#071B4D]
// "
// >

// Grow With VerifySIM

// </h2>



// <p
// className="
// mt-4
// text-gray-600
// max-w-xl
// mx-auto
// "
// >

// Invite businesses, travelers and digital users
// and earn from every successful connection.

// </p>


// <button
// className="
// mt-8
// bg-[#071B4D]
// text-white
// px-10
// py-4
// rounded-xl
// font-semibold
// "
// >

// Start Sharing

// </button>


// </div>


// </section>





// </main>

// )

// }


"use client";

import { useMemo, useState } from "react";
import {
  Activity,
  ArrowDownToLine,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clipboard,
  Copy,
  Download,
  ExternalLink,
  Eye,
  Filter,
  Gift,
  Link2,
  Loader2,
  Mail,
  MoreHorizontal,
  RefreshCcw,
  Search,
  Share2,
  ShieldCheck,
  Smartphone,
  UserCheck,
  Users,
  Wallet,
  X,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type ReferralProduct =
  | "verification"
  | "esim";

type ReferralStatus =
  | "completed"
  | "pending"
  | "cancelled";

type ReferralActivity = {
  id: string;
  reference: string;
  user: string;
  email: string;
  product: ReferralProduct;
  amount: number;
  commission: number;
  status: ReferralStatus;
  date: string;
  time: string;
};

/* =========================================================
   DEMO DATA
========================================================= */

const referralActivities: ReferralActivity[] = [
  {
    id: "1",
    reference: "REF-8K29XQ71",
    user: "Michael O.",
    email: "michael@example.com",
    product: "verification",
    amount: 25,
    commission: 3.75,
    status: "completed",
    date: "Aug 12, 2026",
    time: "10:42 AM",
  },
  {
    id: "2",
    reference: "REF-7P82LM44",
    user: "Sarah K.",
    email: "sarah@example.com",
    product: "esim",
    amount: 18.99,
    commission: 2.85,
    status: "completed",
    date: "Aug 12, 2026",
    time: "09:31 AM",
  },
  {
    id: "3",
    reference: "REF-4Q91NX28",
    user: "Daniel C.",
    email: "daniel@example.com",
    product: "verification",
    amount: 14.5,
    commission: 2.18,
    status: "pending",
    date: "Aug 11, 2026",
    time: "07:18 PM",
  },
  {
    id: "4",
    reference: "REF-5K72PL19",
    user: "David A.",
    email: "david@example.com",
    product: "esim",
    amount: 39.99,
    commission: 6,
    status: "completed",
    date: "Aug 11, 2026",
    time: "04:27 PM",
  },
  {
    id: "5",
    reference: "REF-9X82KM11",
    user: "John E.",
    email: "john@example.com",
    product: "verification",
    amount: 8.5,
    commission: 1.28,
    status: "completed",
    date: "Aug 10, 2026",
    time: "01:32 PM",
  },
  {
    id: "6",
    reference: "REF-2Q91PL73",
    user: "Grace M.",
    email: "grace@example.com",
    product: "esim",
    amount: 29.99,
    commission: 4.5,
    status: "pending",
    date: "Aug 10, 2026",
    time: "11:21 AM",
  },
  {
    id: "7",
    reference: "REF-7N21KX82",
    user: "Peter I.",
    email: "peter@example.com",
    product: "verification",
    amount: 11,
    commission: 1.65,
    status: "cancelled",
    date: "Aug 09, 2026",
    time: "08:41 PM",
  },
  {
    id: "8",
    reference: "REF-4M82KP91",
    user: "Emma N.",
    email: "emma@example.com",
    product: "esim",
    amount: 49.99,
    commission: 7.5,
    status: "completed",
    date: "Aug 09, 2026",
    time: "03:27 PM",
  },
];

/* =========================================================
   CONFIG
========================================================= */

const productConfig = {
  verification: {
    label: "Verification",
    icon: PhoneIcon,
  },
  esim: {
    label: "eSIM",
    icon: Smartphone,
  },
};

/* =========================================================
   PAGE
========================================================= */

export default function ReferralPage() {
  const [activities, setActivities] =
    useState(referralActivities);

  const [search, setSearch] = useState("");

  const [productFilter, setProductFilter] =
    useState<
      ReferralProduct | "all"
    >("all");

  const [statusFilter, setStatusFilter] =
    useState<
      ReferralStatus | "all"
    >("all");

  const [showFilters, setShowFilters] =
    useState(false);

  const [selectedActivity, setSelectedActivity] =
    useState<ReferralActivity | null>(null);

  const [copied, setCopied] = useState(false);

  const [refreshing, setRefreshing] =
    useState(false);

  const [exporting, setExporting] =
    useState(false);

  const [page, setPage] = useState(1);

  const pageSize = 6;

  const referralLink =
    "https://verify.example.com/ref/KINGSLEY25";

  const referralCode = "KINGSLEY25";

  /* =======================================================
     STATS
  ======================================================= */

  const completedActivities =
    activities.filter(
      (item) =>
        item.status === "completed"
    );

  const totalEarnings =
    completedActivities.reduce(
      (sum, item) =>
        sum + item.commission,
      0
    );

  const pendingEarnings =
    activities
      .filter(
        (item) =>
          item.status === "pending"
      )
      .reduce(
        (sum, item) =>
          sum + item.commission,
        0
      );

  const totalSales =
    activities.reduce(
      (sum, item) =>
        sum + item.amount,
      0
    );

  const totalReferrals = 127;

  const activeReferrals = 84;

  const conversionRate = 66.1;

  /* =======================================================
     FILTER
  ======================================================= */

  const filteredActivities = useMemo(() => {
    const query =
      search.trim().toLowerCase();

    return activities.filter((item) => {
      const matchesSearch =
        !query ||
        item.user
          .toLowerCase()
          .includes(query) ||
        item.email
          .toLowerCase()
          .includes(query) ||
        item.reference
          .toLowerCase()
          .includes(query);

      const matchesProduct =
        productFilter === "all" ||
        item.product === productFilter;

      const matchesStatus =
        statusFilter === "all" ||
        item.status === statusFilter;

      return (
        matchesSearch &&
        matchesProduct &&
        matchesStatus
      );
    });
  }, [
    activities,
    search,
    productFilter,
    statusFilter,
  ]);

  /* =======================================================
     PAGINATION
  ======================================================= */

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredActivities.length /
        pageSize
    )
  );

  const currentPage = Math.min(
    page,
    totalPages
  );

  const visibleActivities =
    filteredActivities.slice(
      (currentPage - 1) *
        pageSize,
      currentPage * pageSize
    );

  /* =======================================================
     COPY LINK
  ======================================================= */

  async function copyReferralLink() {
    try {
      await navigator.clipboard.writeText(
        referralLink
      );

      setCopied(true);

      setTimeout(
        () => setCopied(false),
        2000
      );
    } catch {}
  }

  /* =======================================================
     SHARE
  ======================================================= */

  async function shareReferralLink() {
    if (
      typeof navigator !== "undefined" &&
      "share" in navigator
    ) {
      try {
        await navigator.share({
          title:
            "Join our platform",
          text:
            "Sign up using my referral link.",
          url: referralLink,
        });
      } catch {}
    } else {
      await copyReferralLink();
    }
  }

  /* =======================================================
     REFRESH
  ======================================================= */

  async function refreshReferralData() {
    setRefreshing(true);

    /*
      Production:

      const response = await fetch(
        "/api/referrals"
      );

      const data = await response.json();

      setActivities(data.activities);
    */

    await delay(700);

    setActivities([
      ...referralActivities,
    ]);

    setRefreshing(false);
  }

  /* =======================================================
     EXPORT
  ======================================================= */

  async function exportReferralHistory() {
    setExporting(true);

    /*
      Production:

      window.location.href =
        "/api/referrals/export";
    */

    await delay(800);

    setExporting(false);
  }

  /* =======================================================
     CLEAR FILTER
  ======================================================= */

  function clearFilters() {
    setSearch("");
    setProductFilter("all");
    setStatusFilter("all");
    setPage(1);
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc]">

      <div className="mx-auto w-full max-w-[1500px] px-4 py-5 sm:px-6 lg:px-8 lg:py-8">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mb-7">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

            <div className="flex items-start gap-3">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                <Users className="h-6 w-6" />
              </div>

              <div>

                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-600">
                  Affiliate center
                </p>

                <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Referrals
                </h1>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  Invite users, track conversions
                  and earn commissions from
                  Verification Numbers and eSIM
                  purchases.
                </p>

              </div>

            </div>

            <div className="flex gap-2">

              <button
                type="button"
                onClick={
                  refreshReferralData
                }
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-xs font-bold text-slate-700 shadow-sm hover:bg-slate-50"
              >

                <RefreshCcw
                  className={`h-4 w-4 ${
                    refreshing
                      ? "animate-spin"
                      : ""
                  }`}
                />

                Refresh

              </button>

              <button
                type="button"
                onClick={
                  exportReferralHistory
                }
                disabled={exporting}
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-slate-900 px-4 text-xs font-bold text-white shadow-sm hover:bg-slate-800 disabled:opacity-60"
              >

                {exporting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Download className="h-4 w-4" />
                )}

                Export

              </button>

            </div>

          </div>

        </div>

        {/* =================================================
            REFERRAL HERO
        ================================================= */}

        <section className="relative mb-5 overflow-hidden rounded-3xl bg-slate-900 shadow-xl">

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_420px] lg:items-center">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">

                <Gift className="h-3.5 w-3.5 text-cyan-400" />

                <span className="text-[9px] font-bold text-slate-300">
                  Referral program
                </span>

              </div>

              <h2 className="mt-4 max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Earn when your referrals
                use the platform.
              </h2>

              <p className="mt-3 max-w-xl text-xs leading-6 text-slate-400">
                Share your personal referral
                link and earn commissions when
                your referred users purchase
                verification numbers or eSIM
                services.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                <button
                  type="button"
                  onClick={
                    copyReferralLink
                  }
                  className="inline-flex h-11 items-center gap-2 rounded-xl bg-cyan-500 px-4 text-xs font-bold text-white hover:bg-cyan-400"
                >

                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}

                  {copied
                    ? "Copied"
                    : "Copy referral link"}

                </button>

                <button
                  type="button"
                  onClick={
                    shareReferralLink
                  }
                  className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 text-xs font-bold text-white hover:bg-white/10"
                >

                  <Share2 className="h-4 w-4" />

                  Share

                </button>

              </div>

            </div>

            {/* REFERRAL LINK CARD */}

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-2">

                  <Link2 className="h-4 w-4 text-cyan-400" />

                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    Your referral link
                  </span>

                </div>

                <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[8px] font-bold text-emerald-400">
                  Active
                </span>

              </div>

              <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-black/10 p-2">

                <div className="min-w-0 flex-1 overflow-hidden">

                  <p className="truncate px-2 text-[10px] font-medium text-slate-300">
                    {referralLink}
                  </p>

                </div>

                <button
                  type="button"
                  onClick={
                    copyReferralLink
                  }
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20"
                >

                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}

                </button>

              </div>

              <div className="mt-4 flex items-center justify-between">

                <div>

                  <p className="text-[8px] uppercase tracking-wider text-slate-500">
                    Referral code
                  </p>

                  <p className="mt-1 text-xs font-bold tracking-wider text-white">
                    {referralCode}
                  </p>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    copyText(
                      referralCode
                    )
                  }
                  className="text-[9px] font-bold text-cyan-400 hover:text-cyan-300"
                >
                  Copy code
                </button>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            STAT CARDS
        ================================================= */}

        <div className="mb-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <StatCard
            icon={<Wallet />}
            label="Total earnings"
            value={`$${totalEarnings.toFixed(
              2
            )}`}
            helper="Completed commissions"
            positive
          />

          <StatCard
            icon={<Users />}
            label="Total referrals"
            value={totalReferrals.toString()}
            helper="Users registered"
          />

          <StatCard
            icon={<UserCheck />}
            label="Active referrals"
            value={activeReferrals.toString()}
            helper="Users with activity"
          />

          <StatCard
            icon={<ArrowUpRight />}
            label="Conversion rate"
            value={`${conversionRate}%`}
            helper="Referral conversion"
            positive
          />

        </div>

        {/* =================================================
            EARNINGS OVERVIEW
        ================================================= */}

        <section className="mb-5 grid gap-4 lg:grid-cols-3">

          <EarningsCard
            title="Verification earnings"
            icon={<PhoneIcon />}
            amount={getProductEarnings(
              completedActivities,
              "verification"
            )}
            description="From verification number purchases"
          />

          <EarningsCard
            title="eSIM earnings"
            icon={<Smartphone />}
            amount={getProductEarnings(
              completedActivities,
              "esim"
            )}
            description="From eSIM purchases and top-ups"
          />

          <EarningsCard
            title="Pending earnings"
            icon={<ArrowDownToLine />}
            amount={pendingEarnings}
            description="Waiting for eligible settlement"
            pending
          />

        </section>

        {/* =================================================
            REFERRAL ACTIVITY
        ================================================= */}

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          <div className="border-b border-slate-100 p-5">

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <h2 className="text-sm font-bold text-slate-900">
                  Referral activity
                </h2>

                <p className="mt-1 text-[10px] text-slate-400">
                  Track referred users and
                  commission activity.
                </p>

              </div>

              <div className="flex items-center gap-2 text-[10px] text-slate-400">

                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />

                Secure commission tracking

              </div>

            </div>

            {/* SEARCH */}

            <div className="mt-5 flex flex-col gap-3 lg:flex-row">

              <div className="relative flex-1">

                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  value={search}
                  onChange={(event) => {
                    setSearch(
                      event.target.value
                    );
                    setPage(1);
                  }}
                  placeholder="Search user, email or reference..."
                  className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-xs outline-none focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-100"
                />

              </div>

              <button
                type="button"
                onClick={() =>
                  setShowFilters(
                    !showFilters
                  )
                }
                className={`inline-flex h-11 items-center justify-center gap-2 rounded-xl border px-4 text-xs font-bold ${
                  showFilters
                    ? "border-cyan-300 bg-cyan-50 text-cyan-700"
                    : "border-slate-200 bg-white text-slate-700"
                }`}
              >

                <Filter className="h-4 w-4" />

                Filters

              </button>

            </div>

            {/* FILTERS */}

            {showFilters && (
              <div className="mt-4 grid gap-4 border-t border-slate-100 pt-4 sm:grid-cols-2">

                <FilterSelect
                  label="Product"
                  value={
                    productFilter
                  }
                  onChange={(value) => {
                    setProductFilter(
                      value as
                        | ReferralProduct
                        | "all"
                    );
                    setPage(1);
                  }}
                  options={[
                    ["all", "All products"],
                    [
                      "verification",
                      "Verification numbers",
                    ],
                    ["esim", "eSIM"],
                  ]}
                />

                <FilterSelect
                  label="Status"
                  value={
                    statusFilter
                  }
                  onChange={(value) => {
                    setStatusFilter(
                      value as
                        | ReferralStatus
                        | "all"
                    );
                    setPage(1);
                  }}
                  options={[
                    ["all", "All statuses"],
                    [
                      "completed",
                      "Completed",
                    ],
                    ["pending", "Pending"],
                    [
                      "cancelled",
                      "Cancelled",
                    ],
                  ]}
                />

              </div>
            )}

          </div>

          {/* DESKTOP TABLE */}

          <div className="hidden overflow-x-auto md:block">

            <table className="w-full min-w-[1000px]">

              <thead>

                <tr className="border-b border-slate-100 bg-slate-50">

                  <TableHeader>
                    Referred user
                  </TableHeader>

                  <TableHeader>
                    Product
                  </TableHeader>

                  <TableHeader>
                    Purchase
                  </TableHeader>

                  <TableHeader>
                    Commission
                  </TableHeader>

                  <TableHeader>
                    Status
                  </TableHeader>

                  <TableHeader>
                    Date
                  </TableHeader>

                  <TableHeader align="right">
                    Action
                  </TableHeader>

                </tr>

              </thead>

              <tbody className="divide-y divide-slate-100">

                {visibleActivities.map(
                  (activity) => (
                    <ReferralRow
                      key={activity.id}
                      activity={activity}
                      onView={() =>
                        setSelectedActivity(
                          activity
                        )
                      }
                    />
                  )
                )}

              </tbody>

            </table>

          </div>

          {/* MOBILE */}

          <div className="divide-y divide-slate-100 md:hidden">

            {visibleActivities.map(
              (activity) => (
                <MobileReferral
                  key={activity.id}
                  activity={activity}
                  onClick={() =>
                    setSelectedActivity(
                      activity
                    )
                  }
                />
              )
            )}

          </div>

          {/* EMPTY */}

          {visibleActivities.length ===
            0 && (
            <EmptyState
              onClear={
                clearFilters
              }
            />
          )}

          {/* PAGINATION */}

          {visibleActivities.length >
            0 && (
            <div className="flex flex-col gap-3 border-t border-slate-100 p-4 sm:flex-row sm:items-center sm:justify-between">

              <p className="text-[10px] text-slate-400">

                Showing{" "}
                <b className="text-slate-700">
                  {(currentPage - 1) *
                    pageSize +
                    1}
                </b>{" "}
                –{" "}
                <b className="text-slate-700">
                  {Math.min(
                    currentPage *
                      pageSize,
                    filteredActivities.length
                  )}
                </b>{" "}
                of{" "}
                <b className="text-slate-700">
                  {
                    filteredActivities.length
                  }
                </b>

              </p>

              <div className="flex items-center gap-1">

                <PageButton
                  disabled={
                    currentPage === 1
                  }
                  onClick={() =>
                    setPage(
                      currentPage - 1
                    )
                  }
                >
                  <ChevronLeft className="h-4 w-4" />
                </PageButton>

                {Array.from(
                  {
                    length: totalPages,
                  },
                  (_, i) => i + 1
                ).map((number) => (
                  <PageButton
                    key={number}
                    active={
                      number ===
                      currentPage
                    }
                    onClick={() =>
                      setPage(number)
                    }
                  >
                    {number}
                  </PageButton>
                ))}

                <PageButton
                  disabled={
                    currentPage ===
                    totalPages
                  }
                  onClick={() =>
                    setPage(
                      currentPage + 1
                    )
                  }
                >
                  <ChevronRight className="h-4 w-4" />
                </PageButton>

              </div>

            </div>
          )}

        </section>

        {/* =================================================
            HOW IT WORKS
        ================================================= */}

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <h2 className="text-sm font-bold text-slate-900">
                How referrals work
              </h2>

              <p className="mt-1 text-[10px] text-slate-400">
                A simple three-step referral
                journey.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-3">

              <Step
                number="01"
                icon={<Share2 />}
                title="Share"
                text="Share your referral link with your audience."
              />

              <Step
                number="02"
                icon={<UserCheck />}
                title="Register"
                text="A new user signs up through your link."
              />

              <Step
                number="03"
                icon={<Wallet />}
                title="Earn"
                text="Eligible purchases generate your commission."
              />

            </div>

          </div>

        </section>

        {/* =================================================
            SECURITY
        ================================================= */}

        <div className="mt-5 flex gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-4">

          <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-600" />

          <div>

            <p className="text-xs font-bold text-emerald-800">
              Transparent referral tracking
            </p>

            <p className="mt-1 text-[9px] leading-5 text-emerald-700">
              Referral commissions are linked
              to individual purchases and
              transaction references, making
              earnings easy to reconcile.
            </p>

          </div>

        </div>

      </div>

      {/* =================================================
          ACTIVITY DRAWER
      ================================================= */}

      {selectedActivity && (
        <ReferralDrawer
          activity={selectedActivity}
          onClose={() =>
            setSelectedActivity(
              null
            )
          }
        />
      )}

    </main>
  );
}

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({
  icon,
  label,
  value,
  helper,
  positive = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  helper: string;
  positive?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex items-start justify-between">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
          {icon}
        </div>

        {positive && (
          <span className="rounded-full bg-emerald-50 px-2 py-1 text-[8px] font-bold text-emerald-700">
            Growing
          </span>
        )}

      </div>

      <p className="mt-5 text-[10px] font-semibold text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-xl font-bold text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-[9px] text-slate-400">
        {helper}
      </p>

    </div>
  );
}

/* =========================================================
   EARNINGS CARD
========================================================= */

function EarningsCard({
  title,
  icon,
  amount,
  description,
  pending = false,
}: {
  title: string;
  icon: React.ReactNode;
  amount: number;
  description: string;
  pending?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex items-start justify-between">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
          {icon}
        </div>

        {pending && (
          <span className="rounded-full bg-amber-50 px-2 py-1 text-[8px] font-bold text-amber-700">
            Pending
          </span>
        )}

      </div>

      <h3 className="mt-4 text-sm font-bold text-slate-800">
        {title}
      </h3>

      <p className="mt-1 text-[9px] text-slate-400">
        {description}
      </p>

      <p
        className={`mt-4 text-xl font-bold ${
          pending
            ? "text-amber-600"
            : "text-emerald-600"
        }`}
      >
        +${amount.toFixed(2)}
      </p>

    </div>
  );
}

/* =========================================================
   TABLE ROW
========================================================= */

function ReferralRow({
  activity,
  onView,
}: {
  activity: ReferralActivity;
  onView: () => void;
}) {
  const config =
    productConfig[
      activity.product
    ];

  const Icon = config.icon;

  return (
    <tr className="transition hover:bg-slate-50">

      <td className="px-5 py-4">

        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-50 text-xs font-bold text-cyan-700">
            {getInitials(
              activity.user
            )}
          </div>

          <div>

            <p className="text-xs font-bold text-slate-800">
              {activity.user}
            </p>

            <p className="mt-1 text-[9px] text-slate-400">
              {activity.email}
            </p>

          </div>

        </div>

      </td>

      <td className="px-5 py-4">

        <div className="flex items-center gap-2">

          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
            <Icon className="h-4 w-4" />
          </div>

          <span className="text-[10px] font-semibold text-slate-600">
            {config.label}
          </span>

        </div>

      </td>

      <td className="px-5 py-4">

        <p className="text-xs font-bold text-slate-800">
          ${activity.amount.toFixed(2)}
        </p>

      </td>

      <td className="px-5 py-4">

        <p className="text-xs font-bold text-emerald-600">
          +$
          {activity.commission.toFixed(
            2
          )}
        </p>

      </td>

      <td className="px-5 py-4">

        <StatusBadge
          status={activity.status}
        />

      </td>

      <td className="px-5 py-4">

        <p className="text-[10px] font-semibold text-slate-600">
          {activity.date}
        </p>

        <p className="mt-1 text-[9px] text-slate-400">
          {activity.time}
        </p>

      </td>

      <td className="px-5 py-4 text-right">

        <button
          type="button"
          onClick={onView}
          className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700"
        >
          <Eye className="h-4 w-4" />
        </button>

      </td>

    </tr>
  );
}

/* =========================================================
   MOBILE
========================================================= */

function MobileReferral({
  activity,
  onClick,
}: {
  activity: ReferralActivity;
  onClick: () => void;
}) {
  const config =
    productConfig[
      activity.product
    ];

  const Icon = config.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full gap-3 p-4 text-left hover:bg-slate-50"
    >

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-xs font-bold text-cyan-700">
        {getInitials(
          activity.user
        )}
      </div>

      <div className="min-w-0 flex-1">

        <div className="flex items-start justify-between gap-3">

          <div className="min-w-0">

            <p className="truncate text-xs font-bold text-slate-800">
              {activity.user}
            </p>

            <div className="mt-1 flex items-center gap-1.5">

              <Icon className="h-3 w-3 text-slate-400" />

              <span className="text-[9px] text-slate-400">
                {config.label}
              </span>

            </div>

          </div>

          <p className="shrink-0 text-xs font-bold text-emerald-600">
            +$
            {activity.commission.toFixed(
              2
            )}
          </p>

        </div>

        <div className="mt-2 flex items-center justify-between">

          <div className="flex items-center gap-2">

            <StatusBadge
              status={activity.status}
            />

            <span className="text-[9px] text-slate-400">
              {activity.date}
            </span>

          </div>

          <ChevronRight className="h-4 w-4 text-slate-300" />

        </div>

      </div>

    </button>
  );
}

/* =========================================================
   DRAWER
========================================================= */

function ReferralDrawer({
  activity,
  onClose,
}: {
  activity: ReferralActivity;
  onClose: () => void;
}) {
  const config =
    productConfig[
      activity.product
    ];

  const Icon = config.icon;

  return (
    <div className="fixed inset-0 z-50">

      <button
        type="button"
        aria-label="Close referral details"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
      />

      <aside className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto bg-white shadow-2xl">

        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white/95 px-5 py-4 backdrop-blur">

          <div>

            <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
              Referral activity
            </p>

            <h2 className="mt-1 text-sm font-bold text-slate-900">
              Commission details
            </h2>

          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500"
          >
            <X className="h-4 w-4" />
          </button>

        </div>

        <div className="p-5">

          {/* COMMISSION */}

          <div className="rounded-2xl bg-slate-900 p-6 text-center">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
              <Wallet className="h-6 w-6" />
            </div>

            <p className="mt-4 text-[9px] font-bold uppercase tracking-wider text-slate-400">
              Referral commission
            </p>

            <p className="mt-2 text-3xl font-bold text-emerald-400">
              +$
              {activity.commission.toFixed(
                2
              )}
            </p>

            <div className="mt-3">
              <StatusBadge
                status={activity.status}
              />
            </div>

          </div>

          {/* REFERRED USER */}

          <div className="mt-6">

            <h3 className="text-xs font-bold text-slate-800">
              Referred user
            </h3>

            <div className="mt-3 flex items-center gap-3 rounded-2xl border border-slate-200 p-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-50 text-xs font-bold text-cyan-700">
                {getInitials(
                  activity.user
                )}
              </div>

              <div>

                <p className="text-xs font-bold text-slate-800">
                  {activity.user}
                </p>

                <p className="mt-1 text-[9px] text-slate-400">
                  {activity.email}
                </p>

              </div>

            </div>

          </div>

          {/* DETAILS */}

          <div className="mt-6">

            <h3 className="text-xs font-bold text-slate-800">
              Transaction details
            </h3>

            <div className="mt-3 divide-y divide-slate-100 rounded-2xl border border-slate-200">

              <DetailRow
                icon={<Clipboard />}
                label="Reference"
                value={
                  activity.reference
                }
                copy
              />

              <DetailRow
                icon={<Icon />}
                label="Product"
                value={config.label}
              />

              <DetailRow
                icon={<ArrowUpRight />}
                label="Purchase amount"
                value={`$${activity.amount.toFixed(
                  2
                )}`}
              />

              <DetailRow
                icon={<Wallet />}
                label="Commission"
                value={`$${activity.commission.toFixed(
                  2
                )}`}
              />

              <DetailRow
                icon={<CalendarDays />}
                label="Date"
                value={`${activity.date} · ${activity.time}`}
              />

            </div>

          </div>

          <div className="mt-5 rounded-2xl bg-emerald-50 p-4">

            <div className="flex gap-3">

              <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600" />

              <p className="text-[9px] leading-5 text-emerald-800">
                This commission is linked to the
                referred user's purchase and its
                unique referral transaction
                reference.
              </p>

            </div>

          </div>

        </div>

      </aside>

    </div>
  );
}

/* =========================================================
   DETAIL ROW
========================================================= */

function DetailRow({
  icon,
  label,
  value,
  copy = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  copy?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 p-4">

      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-400">
        {icon}
      </div>

      <div className="min-w-0 flex-1">

        <p className="text-[9px] text-slate-400">
          {label}
        </p>

        <p className="mt-1 truncate text-[10px] font-bold text-slate-700">
          {value}
        </p>

      </div>

      {copy && (
        <button
          type="button"
          onClick={() =>
            copyText(value)
          }
          className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100"
        >
          <Copy className="h-3.5 w-3.5" />
        </button>
      )}

    </div>
  );
}

/* =========================================================
   STATUS
========================================================= */

function StatusBadge({
  status,
}: {
  status: ReferralStatus;
}) {
  const config = {
    completed: {
      label: "Completed",
      className:
        "bg-emerald-50 text-emerald-700",
    },
    pending: {
      label: "Pending",
      className:
        "bg-amber-50 text-amber-700",
    },
    cancelled: {
      label: "Cancelled",
      className:
        "bg-rose-50 text-rose-700",
    },
  }[status];

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-[9px] font-bold ${config.className}`}
    >
      {config.label}
    </span>
  );
}

/* =========================================================
   FILTER
========================================================= */

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[][];
}) {
  return (
    <div>

      <label className="mb-2 block text-[9px] font-bold uppercase tracking-wider text-slate-400">
        {label}
      </label>

      <div className="relative">

        <select
          value={value}
          onChange={(event) =>
            onChange(
              event.target.value
            )
          }
          className="h-10 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-3 pr-9 text-xs font-semibold text-slate-700 outline-none focus:border-cyan-400"
        >
          {options.map(
            ([key, label]) => (
              <option
                key={key}
                value={key}
              >
                {label}
              </option>
            )
          )}
        </select>

        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

      </div>

    </div>
  );
}

/* =========================================================
   TABLE HEADER
========================================================= */

function TableHeader({
  children,
  align = "left",
}: {
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  return (
    <th
      className={`px-5 py-3 text-${align} text-[9px] font-bold uppercase tracking-wider text-slate-400`}
    >
      {children}
    </th>
  );
}

/* =========================================================
   PAGINATION
========================================================= */

function PageButton({
  children,
  active,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`flex h-8 min-w-8 items-center justify-center rounded-lg px-2 text-[10px] font-bold ${
        active
          ? "bg-cyan-600 text-white"
          : "text-slate-500 hover:bg-slate-100"
      } disabled:opacity-30`}
    >
      {children}
    </button>
  );
}

/* =========================================================
   EMPTY
========================================================= */

function EmptyState({
  onClear,
}: {
  onClear: () => void;
}) {
  return (
    <div className="flex flex-col items-center px-6 py-16 text-center">

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
        <Users className="h-6 w-6" />
      </div>

      <h3 className="mt-4 text-sm font-bold text-slate-800">
        No referral activity
      </h3>

      <p className="mt-1 max-w-sm text-[10px] leading-5 text-slate-400">
        No referrals match your current
        search or filters.
      </p>

      <button
        type="button"
        onClick={onClear}
        className="mt-4 text-[10px] font-bold text-cyan-700"
      >
        Clear filters
      </button>

    </div>
  );
}

/* =========================================================
   STEP
========================================================= */

function Step({
  number,
  icon,
  title,
  text,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex max-w-[220px] gap-3">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
        {icon}
      </div>

      <div>

        <div className="flex items-center gap-2">

          <span className="text-[8px] font-bold text-cyan-600">
            {number}
          </span>

          <h3 className="text-xs font-bold text-slate-800">
            {title}
          </h3>

        </div>

        <p className="mt-1 text-[9px] leading-5 text-slate-400">
          {text}
        </p>

      </div>

    </div>
  );
}

/* =========================================================
   HELPERS
========================================================= */

function getProductEarnings(
  items: ReferralActivity[],
  product: ReferralProduct
) {
  return items
    .filter(
      (item) =>
        item.product === product
    )
    .reduce(
      (sum, item) =>
        sum + item.commission,
      0
    );
}

function getInitials(
  name: string
) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function copyText(value: string) {
  navigator.clipboard
    ?.writeText(value)
    .catch(() => {});
}

function delay(ms: number) {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}