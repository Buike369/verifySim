// "use client";

// import {
//   Wallet,
//   Plus,
//   ArrowUpRight,
//   ArrowDownLeft,
//   CreditCard,
//   ShieldCheck,
//   Receipt,
//   TrendingUp,
//   Download,
//   Clock,
//   MoreHorizontal,
// } from "lucide-react";





// const transactions = [

// {
// title:"USA Verification Number",
// type:"Debit",
// amount:"-$2.50",
// date:"Aug 07, 2026",
// status:"Completed"
// },


// {
// title:"United States eSIM 10GB",
// type:"Debit",
// amount:"-$15.00",
// date:"Aug 06, 2026",
// status:"Completed"
// },


// {
// title:"Wallet Deposit",
// type:"Credit",
// amount:"+$100.00",
// date:"Aug 05, 2026",
// status:"Completed"
// },


// {
// title:"UK eSIM Renewal",
// type:"Debit",
// amount:"-$8.00",
// date:"Aug 02, 2026",
// status:"Completed"
// }

// ];





// const paymentMethods=[

// {
// name:"Visa **** 4242",
// type:"Card"
// },

// {
// name:"PayPal Account",
// type:"Online Payment"
// }

// ];






// export default function WalletPage(){


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


// <Wallet
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

// Wallet

// </h1>


// <p
// className="
// text-gray-500
// "
// >

// Manage your balance, payments and transactions

// </p>


// </div>


// </div>






// <button
// className="
// flex
// items-center
// justify-center
// gap-2
// rounded-xl
// bg-[#071B4D]
// px-7
// py-4
// text-white
// font-semibold
// "
// >

// <Plus size={18}/>

// Add Funds

// </button>



// </div>


// </div>


// </section>









// {/* BALANCE */}



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
// rounded-[32px]
// bg-[#071B4D]
// p-8
// lg:p-10
// text-white
// "
// >


// <div
// className="
// flex
// justify-between
// "
// >


// <div>

// <p
// className="
// text-blue-100
// "
// >

// Available Balance

// </p>


// <h2
// className="
// mt-3
// text-5xl
// font-bold
// "
// >

// $245.50

// </h2>


// </div>




// <Wallet
// size={45}
// />


// </div>







// <div
// className="
// mt-10
// grid
// sm:grid-cols-2
// gap-4
// "
// >


// <button
// className="
// bg-white
// text-[#071B4D]
// rounded-xl
// py-4
// font-semibold
// "
// >

// Deposit

// </button>



// <button
// className="
// bg-white/10
// border
// border-white/20
// rounded-xl
// py-4
// font-semibold
// "
// >

// Withdraw

// </button>



// </div>


// </div>







// <div
// className="
// bg-white
// rounded-[32px]
// border
// p-8
// "
// >


// <TrendingUp
// className="text-green-600"
// />


// <h3
// className="
// mt-5
// text-gray-500
// "
// >

// Monthly Spending

// </h3>



// <p
// className="
// text-3xl
// font-bold
// text-[#071B4D]
// "
// >

// $84.20

// </p>


// <p
// className="
// mt-3
// text-green-600
// font-medium
// "
// >

// 12% lower than last month

// </p>



// </div>




// </div>


// </section>









// {/* QUICK ACTIONS */}



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
// sm:grid-cols-3
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
// hover:shadow-lg
// transition
// "
// >


// <CreditCard
// className="text-[#071B4D]"
// />



// <h3
// className="
// mt-4
// font-bold
// "
// >

// Payment Methods

// </h3>


// <p
// className="
// text-gray-500
// text-sm
// mt-2
// "
// >

// Manage cards and payment options

// </p>



// </button>







// <button
// className="
// bg-white
// border
// rounded-3xl
// p-6
// text-left
// hover:shadow-lg
// transition
// "
// >


// <Receipt
// className="text-[#071B4D]"
// />



// <h3
// className="
// mt-4
// font-bold
// "
// >

// Invoices

// </h3>


// <p
// className="
// text-gray-500
// text-sm
// mt-2
// "
// >

// Download payment receipts

// </p>



// </button>







// <button
// className="
// bg-white
// border
// rounded-3xl
// p-6
// text-left
// hover:shadow-lg
// transition
// "
// >


// <ShieldCheck
// className="text-[#071B4D]"
// />



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
// mt-2
// "
// >

// Protected transactions

// </p>



// </button>





// </div>


// </section>









// {/* TRANSACTIONS */}



// <section
// className="
// max-w-7xl
// mx-auto
// px-5
// lg:px-10
// py-12
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
// items-center
// "
// >


// <h2
// className="
// text-2xl
// font-bold
// text-[#071B4D]
// "
// >

// Transaction History

// </h2>


// <button
// className="
// flex
// items-center
// gap-2
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
// mt-7
// space-y-4
// "
// >


// {
// transactions.map((item,index)=>(


// <div
// key={index}
// className="
// flex
// flex-col
// sm:flex-row
// sm:items-center
// justify-between
// gap-4
// rounded-2xl
// bg-[#f7f9fc]
// p-5
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
// className={`
// h-12
// w-12
// rounded-xl
// flex
// items-center
// justify-center

// ${item.type==="Credit"
// ?
// "bg-green-100"
// :
// "bg-red-100"
// }

// `}
// >


// {
// item.type==="Credit"
// ?
// <ArrowDownLeft className="text-green-600"/>
// :
// <ArrowUpRight className="text-red-600"/>
// }


// </div>





// <div>

// <h3
// className="
// font-semibold
// text-[#071B4D]
// "
// >

// {item.title}

// </h3>


// <p
// className="
// text-sm
// text-gray-500
// "
// >

// {item.date}

// </p>


// </div>


// </div>







// <div
// className="
// flex
// items-center
// gap-5
// "
// >


// <div
// className="
// text-right
// "
// >


// <p
// className="
// font-bold
// "
// >

// {item.amount}

// </p>



// <p
// className="
// text-sm
// text-green-600
// "
// >

// {item.status}

// </p>


// </div>





// <MoreHorizontal
// className="text-gray-400"
// />


// </div>


// </div>


// ))


// }


// </div>


// </div>


// </section>









// {/* PAYMENT SECURITY */}



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
// text-[#071B4D]
// "
// >

// Secure Payments Worldwide

// </h2>


// <p
// className="
// mt-4
// text-gray-600
// max-w-xl
// "
// >

// Your payments are protected with secure
// processing and modern financial security standards.

// </p>


// </div>





// <ShieldCheck
// size={55}
// className="text-[#071B4D]"
// />


// </div>


// </section>





// </main>

// )

// }


"use client";

import { useMemo, useState } from "react";
import {
  Activity,
  ArrowDownLeft,
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Copy,
  CreditCard,
  Download,
  Eye,
  FileText,
  Filter,
  Landmark,
  Loader2,
  LockKeyhole,
  Phone,
  Plus,
  RefreshCcw,
  RotateCcw,
  Search,
  ShieldCheck,
  Smartphone,
  UserPlus,
  Wallet as WalletIcon,
  X,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type ActivityType =
  | "deposit"
  | "verification"
  | "esim"
  | "refund"
  | "referral";

type ActivityStatus =
  | "completed"
  | "pending"
  | "failed";

type WalletActivity = {
  id: string;
  reference: string;
  type: ActivityType;
  title: string;
  description: string;
  amount: number;
  direction: "credit" | "debit";
  status: ActivityStatus;
  date: string;
  time: string;
  provider?: string;
};

/* =========================================================
   DEMO DATA
========================================================= */

const initialActivities: WalletActivity[] = [
  {
    id: "1",
    reference: "DEP-8K29XQ7A",
    type: "deposit",
    title: "Crypto Deposit",
    description: "USDT wallet deposit",
    amount: 250,
    direction: "credit",
    status: "completed",
    date: "Aug 12, 2026",
    time: "10:42 AM",
    provider: "BlockBee",
  },
  {
    id: "2",
    reference: "ESIM-7P92LM4Q",
    type: "esim",
    title: "eSIM Purchase",
    description: "United States — 10GB",
    amount: 18.99,
    direction: "debit",
    status: "completed",
    date: "Aug 12, 2026",
    time: "09:28 AM",
    provider: "eSIM Provider",
  },
  {
    id: "3",
    reference: "SMS-4K92NX8P",
    type: "verification",
    title: "Verification Number",
    description: "WhatsApp verification",
    amount: 1.25,
    direction: "debit",
    status: "completed",
    date: "Aug 12, 2026",
    time: "08:51 AM",
    provider: "SMS Provider",
  },
  {
    id: "4",
    reference: "REF-5Q72NX91",
    type: "referral",
    title: "Referral Commission",
    description: "Commission from referred user",
    amount: 4.75,
    direction: "credit",
    status: "completed",
    date: "Aug 11, 2026",
    time: "08:17 PM",
  },
  {
    id: "5",
    reference: "RFN-4Q21PK82",
    type: "refund",
    title: "Verification Refund",
    description: "Refund from failed verification",
    amount: 1.25,
    direction: "credit",
    status: "completed",
    date: "Aug 11, 2026",
    time: "07:45 PM",
    provider: "SMS Provider",
  },
  {
    id: "6",
    reference: "ESIM-2K81NX9L",
    type: "esim",
    title: "eSIM Top Up",
    description: "Additional 5GB data",
    amount: 12.99,
    direction: "debit",
    status: "pending",
    date: "Aug 11, 2026",
    time: "03:12 PM",
    provider: "eSIM Provider",
  },
  {
    id: "7",
    reference: "DEP-8X72KQ11",
    type: "deposit",
    title: "Crypto Deposit",
    description: "Bitcoin deposit",
    amount: 500,
    direction: "credit",
    status: "pending",
    date: "Aug 11, 2026",
    time: "02:21 PM",
    provider: "BlockBee",
  },
  {
    id: "8",
    reference: "SMS-7P29KM42",
    type: "verification",
    title: "Verification Number",
    description: "Telegram verification",
    amount: 0.95,
    direction: "debit",
    status: "failed",
    date: "Aug 10, 2026",
    time: "11:38 PM",
    provider: "SMS Provider",
  },
];

/* =========================================================
   CONFIG
========================================================= */

const activityConfig: Record<
  ActivityType,
  {
    label: string;
    icon: React.ElementType;
  }
> = {
  deposit: {
    label: "Deposit",
    icon: ArrowDownLeft,
  },
  verification: {
    label: "Verification",
    icon: Phone,
  },
  esim: {
    label: "eSIM",
    icon: Smartphone,
  },
  refund: {
    label: "Refund",
    icon: RotateCcw,
  },
  referral: {
    label: "Referral",
    icon: UserPlus,
  },
};

/* =========================================================
   PAGE
========================================================= */

export default function WalletPage() {
  const [activities, setActivities] =
    useState(initialActivities);

  const [balance, setBalance] =
    useState(426.72);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState<
    ActivityType | "all"
  >("all");

  const [status, setStatus] = useState<
    ActivityStatus | "all"
  >("all");

  const [showFilters, setShowFilters] =
    useState(false);

  const [selectedActivity, setSelectedActivity] =
    useState<WalletActivity | null>(null);

  const [refreshing, setRefreshing] =
    useState(false);

  const [exporting, setExporting] =
    useState(false);

  const [page, setPage] = useState(1);

  const pageSize = 6;

  /* =======================================================
     COMPUTED FINANCIALS
  ======================================================= */

  const completed = activities.filter(
    (item) =>
      item.status === "completed"
  );

  const totalDeposited = completed
    .filter(
      (item) =>
        item.type === "deposit" &&
        item.direction === "credit"
    )
    .reduce(
      (sum, item) => sum + item.amount,
      0
    );

  const totalSpent = completed
    .filter(
      (item) =>
        item.direction === "debit"
    )
    .reduce(
      (sum, item) => sum + item.amount,
      0
    );

  const totalRefunds = completed
    .filter(
      (item) =>
        item.type === "refund"
    )
    .reduce(
      (sum, item) => sum + item.amount,
      0
    );

  const referralEarnings = completed
    .filter(
      (item) =>
        item.type === "referral"
    )
    .reduce(
      (sum, item) => sum + item.amount,
      0
    );

  const pendingAmount = activities
    .filter(
      (item) =>
        item.status === "pending"
    )
    .reduce(
      (sum, item) =>
        sum +
        (item.direction === "credit"
          ? item.amount
          : 0),
      0
    );

  /* =======================================================
     FILTER ACTIVITIES
  ======================================================= */

  const filteredActivities = useMemo(() => {
    const query =
      search.trim().toLowerCase();

    return activities.filter((item) => {
      const matchesSearch =
        !query ||
        item.title
          .toLowerCase()
          .includes(query) ||
        item.description
          .toLowerCase()
          .includes(query) ||
        item.reference
          .toLowerCase()
          .includes(query) ||
        item.provider
          ?.toLowerCase()
          .includes(query);

      const matchesFilter =
        filter === "all" ||
        item.type === filter;

      const matchesStatus =
        status === "all" ||
        item.status === status;

      return (
        matchesSearch &&
        matchesFilter &&
        matchesStatus
      );
    });
  }, [
    activities,
    search,
    filter,
    status,
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
     REFRESH
  ======================================================= */

  async function refreshWallet() {
    setRefreshing(true);

    /*
      Production:

      const response = await fetch(
        "/api/wallet"
      );

      const data = await response.json();

      setBalance(data.balance);
      setActivities(data.activities);
    */

    await wait(700);

    setBalance(426.72);
    setActivities([
      ...initialActivities,
    ]);

    setRefreshing(false);
  }

  /* =======================================================
     EXPORT
  ======================================================= */

  async function exportWalletHistory() {
    setExporting(true);

    /*
      Production:

      GET /api/wallet/export
    */

    await wait(800);

    setExporting(false);
  }

  /* =======================================================
     CLEAR FILTERS
  ======================================================= */

  function clearFilters() {
    setSearch("");
    setFilter("all");
    setStatus("all");
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
                <WalletIcon className="h-6 w-6" />
              </div>

              <div>

                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-600">
                  Financial center
                </p>

                <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Wallet
                </h1>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  Manage your platform balance,
                  deposits, purchases, refunds and
                  referral earnings from one secure
                  wallet.
                </p>

              </div>

            </div>

            <div className="flex gap-2">

              <button
                type="button"
                onClick={refreshWallet}
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
                onClick={exportWalletHistory}
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
            BALANCE HERO
        ================================================= */}

        <section className="mb-5 overflow-hidden rounded-3xl bg-slate-900 shadow-xl">

          <div className="relative p-6 sm:p-8">

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <div className="flex items-center gap-2">

                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Available balance
                  </p>

                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-[8px] font-bold text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Active
                  </span>

                </div>

                <div className="mt-2 flex items-baseline gap-2">

                  <span className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    ${balance.toFixed(2)}
                  </span>

                  <span className="text-xs font-bold text-slate-400">
                    USD
                  </span>

                </div>

                <div className="mt-4 flex flex-wrap gap-4">

                  <div>
                    <p className="text-[9px] text-slate-500">
                      Pending
                    </p>

                    <p className="mt-1 text-xs font-bold text-amber-400">
                      $
                      {pendingAmount.toFixed(
                        2
                      )}
                    </p>
                  </div>

                  <div>
                    <p className="text-[9px] text-slate-500">
                      Referral earnings
                    </p>

                    <p className="mt-1 text-xs font-bold text-emerald-400">
                      $
                      {referralEarnings.toFixed(
                        2
                      )}
                    </p>
                  </div>

                </div>

              </div>

              <div className="flex flex-wrap gap-3">

                <button
                  type="button"
                  className="inline-flex h-12 items-center gap-2 rounded-xl bg-cyan-500 px-5 text-xs font-bold text-white shadow-lg shadow-cyan-900/20 hover:bg-cyan-400"
                >

                  <Plus className="h-4 w-4" />

                  Add funds

                </button>

                <button
                  type="button"
                  className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 text-xs font-bold text-white hover:bg-white/10"
                >

                  <ArrowUpRight className="h-4 w-4" />

                  Withdraw

                </button>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            FINANCIAL SUMMARY
        ================================================= */}

        <div className="mb-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <SummaryCard
            icon={<ArrowDownLeft />}
            title="Total deposits"
            value={`$${totalDeposited.toFixed(
              2
            )}`}
            description="Completed deposits"
          />

          <SummaryCard
            icon={<ArrowUpRight />}
            title="Total spent"
            value={`$${totalSpent.toFixed(
              2
            )}`}
            description="Verification + eSIM"
          />

          <SummaryCard
            icon={<RotateCcw />}
            title="Refunds"
            value={`$${totalRefunds.toFixed(
              2
            )}`}
            description="Money returned"
          />

          <SummaryCard
            icon={<UserPlus />}
            title="Referral earnings"
            value={`$${referralEarnings.toFixed(
              2
            )}`}
            description="Earned from referrals"
          />

        </div>

        {/* =================================================
            WALLET BREAKDOWN
        ================================================= */}

        <section className="mb-5 grid gap-4 lg:grid-cols-3">

          <WalletBreakdown
            icon={<Phone />}
            title="Verification numbers"
            description="SMS verification purchases"
            amount={getCategorySpent(
              completed,
              "verification"
            )}
            transactions={
              activities.filter(
                (item) =>
                  item.type ===
                  "verification"
              ).length
            }
          />

          <WalletBreakdown
            icon={<Smartphone />}
            title="eSIM"
            description="Data plans and top-ups"
            amount={getCategorySpent(
              completed,
              "esim"
            )}
            transactions={
              activities.filter(
                (item) =>
                  item.type === "esim"
              ).length
            }
          />

          <WalletBreakdown
            icon={<UserPlus />}
            title="Referrals"
            description="Commission earnings"
            amount={referralEarnings}
            transactions={
              activities.filter(
                (item) =>
                  item.type ===
                  "referral"
              ).length
            }
            credit
          />

        </section>

        {/* =================================================
            WALLET ACTIVITY
        ================================================= */}

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          <div className="border-b border-slate-100 p-5">

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <h2 className="text-sm font-bold text-slate-900">
                  Wallet activity
                </h2>

                <p className="mt-1 text-[10px] text-slate-400">
                  Recent balance movements and
                  financial activity
                </p>

              </div>

              <div className="flex items-center gap-2 text-[10px] text-slate-400">

                <LockKeyhole className="h-3.5 w-3.5 text-emerald-600" />

                Secure wallet ledger

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
                  placeholder="Search transactions..."
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
                  label="Activity"
                  value={filter}
                  onChange={(value) => {
                    setFilter(
                      value as
                        | ActivityType
                        | "all"
                    );
                    setPage(1);
                  }}
                  options={[
                    ["all", "All activity"],
                    [
                      "deposit",
                      "Deposits",
                    ],
                    [
                      "verification",
                      "Verification",
                    ],
                    ["esim", "eSIM"],
                    ["refund", "Refunds"],
                    [
                      "referral",
                      "Referrals",
                    ],
                  ]}
                />

                <FilterSelect
                  label="Status"
                  value={status}
                  onChange={(value) => {
                    setStatus(
                      value as
                        | ActivityStatus
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
                    ["failed", "Failed"],
                  ]}
                />

              </div>
            )}

          </div>

          {/* DESKTOP TABLE */}

          <div className="hidden overflow-x-auto md:block">

            <table className="w-full min-w-[900px]">

              <thead>

                <tr className="border-b border-slate-100 bg-slate-50">

                  <TableHeader>
                    Activity
                  </TableHeader>

                  <TableHeader>
                    Reference
                  </TableHeader>

                  <TableHeader>
                    Date
                  </TableHeader>

                  <TableHeader>
                    Status
                  </TableHeader>

                  <TableHeader align="right">
                    Amount
                  </TableHeader>

                  <TableHeader align="right">
                    Action
                  </TableHeader>

                </tr>

              </thead>

              <tbody className="divide-y divide-slate-100">

                {visibleActivities.map(
                  (activity) => (
                    <WalletActivityRow
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
                <MobileActivity
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
            <EmptyWallet
              onClear={clearFilters}
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
                  {filteredActivities.length}
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
            SECURITY CARDS
        ================================================= */}

        <div className="mt-5 grid gap-4 sm:grid-cols-3">

          <SecurityCard
            icon={<ShieldCheck />}
            title="Protected wallet"
            text="Wallet operations are processed through secure server-side APIs."
          />

          <SecurityCard
            icon={<LockKeyhole />}
            title="Transaction ledger"
            text="Every balance movement has a unique reference for reconciliation."
          />

          <SecurityCard
            icon={<Activity />}
            title="Real-time updates"
            text="Deposits, refunds and provider events can update automatically."
          />

        </div>

      </div>

      {/* =================================================
          DETAILS DRAWER
      ================================================= */}

      {selectedActivity && (
        <WalletActivityDrawer
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
   SUMMARY CARD
========================================================= */

function SummaryCard({
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

      <div className="flex items-start justify-between">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
          {icon}
        </div>

        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-300">
          Wallet
        </span>

      </div>

      <p className="mt-5 text-[10px] font-semibold text-slate-400">
        {title}
      </p>

      <p className="mt-1 text-xl font-bold text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-[9px] text-slate-400">
        {description}
      </p>

    </div>
  );
}

/* =========================================================
   BREAKDOWN
========================================================= */

function WalletBreakdown({
  icon,
  title,
  description,
  amount,
  transactions,
  credit = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  amount: number;
  transactions: number;
  credit?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex items-start justify-between">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
          {icon}
        </div>

        <span className="rounded-full bg-slate-100 px-2 py-1 text-[8px] font-bold text-slate-500">
          {transactions} transactions
        </span>

      </div>

      <h3 className="mt-4 text-sm font-bold text-slate-800">
        {title}
      </h3>

      <p className="mt-1 text-[9px] text-slate-400">
        {description}
      </p>

      <p
        className={`mt-4 text-xl font-bold ${
          credit
            ? "text-emerald-600"
            : "text-slate-900"
        }`}
      >
        {credit ? "+" : "-"}$
        {amount.toFixed(2)}
      </p>

    </div>
  );
}

/* =========================================================
   ACTIVITY ROW
========================================================= */

function WalletActivityRow({
  activity,
  onView,
}: {
  activity: WalletActivity;
  onView: () => void;
}) {
  const config =
    activityConfig[activity.type];

  const Icon = config.icon;

  const credit =
    activity.direction ===
    "credit";

  return (
    <tr className="transition hover:bg-slate-50">

      <td className="px-5 py-4">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">

            <Icon className="h-4 w-4" />

          </div>

          <div>

            <p className="text-xs font-bold text-slate-800">
              {activity.title}
            </p>

            <p className="mt-1 text-[9px] text-slate-400">
              {activity.description}
            </p>

          </div>

        </div>

      </td>

      <td className="px-5 py-4">

        <button
          type="button"
          onClick={() =>
            copyText(
              activity.reference
            )
          }
          className="group flex items-center gap-1 text-[10px] font-semibold text-slate-500 hover:text-cyan-700"
        >

          {activity.reference}

          <Copy className="h-3 w-3 opacity-0 group-hover:opacity-100" />

        </button>

      </td>

      <td className="px-5 py-4">

        <p className="text-[10px] font-semibold text-slate-600">
          {activity.date}
        </p>

        <p className="mt-1 text-[9px] text-slate-400">
          {activity.time}
        </p>

      </td>

      <td className="px-5 py-4">

        <StatusBadge
          status={activity.status}
        />

      </td>

      <td className="px-5 py-4 text-right">

        <p
          className={`text-xs font-bold ${
            credit
              ? "text-emerald-600"
              : "text-slate-800"
          }`}
        >
          {credit ? "+" : "-"}$
          {activity.amount.toFixed(2)}
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

function MobileActivity({
  activity,
  onClick,
}: {
  activity: WalletActivity;
  onClick: () => void;
}) {
  const credit =
    activity.direction ===
    "credit";

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full gap-3 p-4 text-left hover:bg-slate-50"
    >

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
        {(() => {
          const Icon =
            activityConfig[
              activity.type
            ].icon;

          return (
            <Icon className="h-4 w-4" />
          );
        })()}
      </div>

      <div className="min-w-0 flex-1">

        <div className="flex items-start justify-between gap-3">

          <div className="min-w-0">

            <p className="truncate text-xs font-bold text-slate-800">
              {activity.title}
            </p>

            <p className="mt-1 truncate text-[9px] text-slate-400">
              {activity.description}
            </p>

          </div>

          <p
            className={`shrink-0 text-xs font-bold ${
              credit
                ? "text-emerald-600"
                : "text-slate-800"
            }`}
          >
            {credit ? "+" : "-"}$
            {activity.amount.toFixed(2)}
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
   STATUS
========================================================= */

function StatusBadge({
  status,
}: {
  status: ActivityStatus;
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
    failed: {
      label: "Failed",
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
   HEADER
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

function EmptyWallet({
  onClear,
}: {
  onClear: () => void;
}) {
  return (
    <div className="flex flex-col items-center px-6 py-16 text-center">

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
        <WalletIcon className="h-6 w-6" />
      </div>

      <h3 className="mt-4 text-sm font-bold text-slate-800">
        No wallet activity
      </h3>

      <p className="mt-1 max-w-sm text-[10px] leading-5 text-slate-400">
        No transactions match your current
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
   SECURITY
========================================================= */

function SecurityCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
        {icon}
      </div>

      <div>

        <p className="text-xs font-bold text-slate-700">
          {title}
        </p>

        <p className="mt-1 text-[9px] leading-5 text-slate-400">
          {text}
        </p>

      </div>

    </div>
  );
}

/* =========================================================
   DRAWER
========================================================= */

function WalletActivityDrawer({
  activity,
  onClose,
}: {
  activity: WalletActivity;
  onClose: () => void;
}) {
  const credit =
    activity.direction ===
    "credit";

  const config =
    activityConfig[activity.type];

  const Icon = config.icon;

  return (
    <div className="fixed inset-0 z-50">

      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
      />

      <aside className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto bg-white shadow-2xl">

        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white/95 px-5 py-4 backdrop-blur">

          <div>

            <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
              Wallet activity
            </p>

            <h2 className="mt-1 text-sm font-bold text-slate-900">
              {activity.title}
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

          {/* AMOUNT */}

          <div className="rounded-2xl bg-slate-900 p-6 text-center">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
              <Icon className="h-6 w-6" />
            </div>

            <p className="mt-4 text-[9px] font-bold uppercase tracking-wider text-slate-400">
              Wallet movement
            </p>

            <p
              className={`mt-2 text-3xl font-bold ${
                credit
                  ? "text-emerald-400"
                  : "text-white"
              }`}
            >
              {credit ? "+" : "-"}$
              {activity.amount.toFixed(
                2
              )}
            </p>

            <div className="mt-3">
              <StatusBadge
                status={activity.status}
              />
            </div>

          </div>

          {/* INFORMATION */}

          <div className="mt-6">

            <h3 className="text-xs font-bold text-slate-800">
              Details
            </h3>

            <div className="mt-3 divide-y divide-slate-100 rounded-2xl border border-slate-200">

              <DetailRow
                icon={<FileText />}
                label="Reference"
                value={
                  activity.reference
                }
                copy
              />

              <DetailRow
                icon={<Activity />}
                label="Description"
                value={
                  activity.description
                }
              />

              <DetailRow
                icon={<CircleDollarSign />}
                label="Category"
                value={config.label}
              />

              <DetailRow
                icon={<CalendarDays />}
                label="Date"
                value={`${activity.date} · ${activity.time}`}
              />

              {activity.provider && (
                <DetailRow
                  icon={<Landmark />}
                  label="Provider"
                  value={
                    activity.provider
                  }
                />
              )}

            </div>

          </div>

          {/* WALLET EFFECT */}

          <div className="mt-6">

            <h3 className="text-xs font-bold text-slate-800">
              Wallet effect
            </h3>

            <div className="mt-3 rounded-2xl border border-slate-200 p-4">

              <div className="flex items-center justify-between">

                <span className="text-[10px] text-slate-400">
                  Movement
                </span>

                <span
                  className={`text-xs font-bold ${
                    credit
                      ? "text-emerald-600"
                      : "text-slate-800"
                  }`}
                >
                  {credit
                    ? "Credit"
                    : "Debit"}
                </span>

              </div>

              <div className="mt-3 flex items-center justify-between">

                <span className="text-[10px] text-slate-400">
                  Amount
                </span>

                <span className="text-xs font-bold text-slate-800">
                  $
                  {activity.amount.toFixed(
                    2
                  )}
                </span>

              </div>

            </div>

          </div>

          {/* SECURITY */}

          <div className="mt-5 flex gap-3 rounded-2xl bg-emerald-50 p-4">

            <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600" />

            <p className="text-[9px] leading-5 text-emerald-800">
              This activity is linked to your
              wallet ledger using the transaction
              reference shown above.
            </p>

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
   HELPERS
========================================================= */

function getCategorySpent(
  items: WalletActivity[],
  type: ActivityType
) {
  return items
    .filter(
      (item) =>
        item.type === type &&
        item.direction ===
          "debit"
    )
    .reduce(
      (sum, item) => sum + item.amount,
      0
    );
}

async function copyText(
  value: string
) {
  try {
    await navigator.clipboard.writeText(
      value
    );
  } catch {}
}

function wait(ms: number) {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}