// "use client";

// import {
//   Search,
//   Filter,
//   Download,
//   ArrowUpRight,
//   ArrowDownLeft,
//   Receipt,
//   CreditCard,
//   Smartphone,
//   Phone,
//   Wallet,
//   CheckCircle2,
//   Clock,
//   XCircle,
//   CalendarDays,
// } from "lucide-react";

// import { useState } from "react";





// const transactions = [

// {
// id:"#TXN-849201",
// title:"USA eSIM Purchase",
// category:"eSIM",
// type:"Debit",
// amount:"-$15.00",
// date:"Aug 07, 2026",
// status:"Completed",
// icon:Smartphone
// },


// {
// id:"#TXN-849202",
// title:"Wallet Deposit",
// category:"Deposit",
// type:"Credit",
// amount:"+$100.00",
// date:"Aug 06, 2026",
// status:"Completed",
// icon:Wallet
// },


// {
// id:"#TXN-849203",
// title:"WhatsApp Verification Number",
// category:"Verification",
// type:"Debit",
// amount:"-$2.50",
// date:"Aug 05, 2026",
// status:"Completed",
// icon:Phone
// },


// {
// id:"#TXN-849204",
// title:"UK eSIM Renewal",
// category:"Renewal",
// type:"Debit",
// amount:"-$8.00",
// date:"Aug 03, 2026",
// status:"Pending",
// icon:RefreshIcon
// },


// {
// id:"#TXN-849205",
// title:"Payment Refund",
// category:"Refund",
// type:"Credit",
// amount:"+$5.00",
// date:"Aug 01, 2026",
// status:"Failed",
// icon:CreditCard
// }

// ];





// function RefreshIcon(){

// return (
// <Clock size={24}/>
// )

// }








// const filters=[

// "All",
// "eSIM",
// "Verification",
// "Deposit",
// "Refund"

// ];







// export default function TransactionsPage(){


// const [activeFilter,setActiveFilter]=useState("All");



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


// <div>

// <h1
// className="
// text-3xl
// font-bold
// text-[#071B4D]
// "
// >

// Transactions

// </h1>


// <p
// className="
// mt-2
// text-gray-500
// "
// >

// Track all your VerifySIM payments,
// purchases and account activity.

// </p>


// </div>






// <button
// className="
// flex
// items-center
// justify-center
// gap-2
// bg-[#071B4D]
// text-white
// px-7
// py-4
// rounded-xl
// font-semibold
// "
// >


// <Download size={18}/>

// Export Report


// </button>


// </div>


// </div>


// </section>









// {/* SUMMARY */}



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


// <Wallet
// className="text-[#071B4D]"
// />


// <p
// className="
// mt-4
// text-gray-500
// "
// >

// Total Spent

// </p>


// <h2
// className="
// text-3xl
// font-bold
// text-[#071B4D]
// "
// >

// $245

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


// <ArrowDownLeft
// className="text-green-600"
// />


// <p
// className="
// mt-4
// text-gray-500
// "
// >

// Total Deposits

// </p>


// <h2
// className="
// text-3xl
// font-bold
// "
// >

// $500

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


// <Receipt
// className="text-[#071B4D]"
// />


// <p
// className="
// mt-4
// text-gray-500
// "
// >

// Transactions

// </p>


// <h2
// className="
// text-3xl
// font-bold
// "
// >

// 48

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


// <CheckCircle2
// className="text-green-600"
// />


// <p
// className="
// mt-4
// text-gray-500
// "
// >

// Successful

// </p>


// <h2
// className="
// text-3xl
// font-bold
// "
// >

// 46

// </h2>


// </div>



// </div>


// </section>









// {/* FILTER BAR */}



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
// rounded-3xl
// p-5
// flex
// flex-col
// lg:flex-row
// gap-5
// justify-between
// "
// >



// <div
// className="
// flex
// items-center
// gap-3
// bg-[#f7f9fc]
// rounded-xl
// px-4
// py-3
// flex-1
// "
// >


// <Search
// className="text-gray-400"
// />


// <input

// placeholder="Search transactions..."

// className="
// bg-transparent
// outline-none
// w-full
// "

// />


// </div>






// <div
// className="
// flex
// gap-3
// overflow-x-auto
// "
// >


// {
// filters.map((filter)=>(


// <button

// key={filter}

// onClick={()=>setActiveFilter(filter)}

// className={`
// px-5
// py-3
// rounded-xl
// whitespace-nowrap
// font-medium

// ${
// activeFilter===filter
// ?
// "bg-[#071B4D] text-white"
// :
// "bg-gray-100 text-gray-600"
// }

// `}
// >

// {filter}

// </button>


// ))

// }


// </div>



// </div>


// </section>









// {/* TRANSACTIONS LIST */}



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
// rounded-[32px]
// border
// overflow-hidden
// "
// >





// <div
// className="
// hidden
// lg:grid
// grid-cols-6
// bg-[#f7f9fc]
// p-5
// font-semibold
// text-gray-600
// "
// >


// <span>Transaction</span>

// <span>Category</span>

// <span>Date</span>

// <span>Amount</span>

// <span>Status</span>

// <span></span>


// </div>







// {
// transactions.map((item,index)=>{


// const Icon=item.icon;


// return (

// <div
// key={index}
// className="
// lg:grid
// lg:grid-cols-6
// items-center
// p-5
// border-t
// hover:bg-gray-50
// transition
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
// h-12
// w-12
// rounded-xl
// bg-blue-100
// flex
// items-center
// justify-center
// "
// >


// <Icon
// className="text-[#071B4D]"
// />


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

// {item.id}

// </p>


// </div>


// </div>








// <div>

// {item.category}

// </div>







// <div
// className="
// flex
// items-center
// gap-2
// "
// >

// <CalendarDays size={15}/>

// {item.date}

// </div>







// <div
// className={`
// font-bold

// ${
// item.type==="Credit"
// ?
// "text-green-600"
// :
// "text-red-600"
// }

// `}
// >

// {item.amount}

// </div>








// <div>


// <span
// className={`
// px-4
// py-2
// rounded-full
// text-sm
// font-semibold

// ${
// item.status==="Completed"
// ?
// "bg-green-100 text-green-700"
// :
// item.status==="Pending"
// ?
// "bg-yellow-100 text-yellow-700"
// :
// "bg-red-100 text-red-700"
// }

// `}
// >


// {item.status}


// </span>


// </div>








// <button
// className="
// mt-4
// lg:mt-0
// text-[#071B4D]
// font-semibold
// "
// >

// View


// </button>




// </div>


// )


// })


// }



// </div>


// </section>









// {/* SECURITY */}



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
// p-10
// text-white
// text-center
// "
// >


// <CreditCard
// size={45}
// className="
// mx-auto
// "
// />



// <h2
// className="
// mt-5
// text-3xl
// font-bold
// "
// >

// Secure Financial Records

// </h2>



// <p
// className="
// mt-4
// text-blue-100
// max-w-2xl
// mx-auto
// "
// >

// Every VerifySIM transaction is securely recorded
// for transparency, tracking and account protection.

// </p>


// </div>


// </section>





// </main>

// )

// }


"use client";

import {
  Activity,
  ArrowDownLeft,
  ArrowDownRight,
  ArrowUpRight,
  Banknote,
  CalendarDays,
  Check,
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
  Gift,
  Hash,
  Info,
  Landmark,
  Loader2,
  MoreHorizontal,
  Phone,
  Plus,
  RefreshCcw,
  RotateCcw,
  Search,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  UserPlus,
  Wallet,
  Wifi,
  X,
  XCircle,
} from "lucide-react";

import { useMemo, useState } from "react";

/* ==========================================================================
   TYPES
============================================================================ */

type TransactionCategory =
  | "verification"
  | "esim"
  | "deposit"
  | "refund"
  | "referral"
  | "wallet"
  | "withdrawal";

type TransactionStatus =
  | "completed"
  | "pending"
  | "failed"
  | "cancelled";

type TransactionDirection =
  | "credit"
  | "debit";

type Transaction = {
  id: string;
  reference: string;
  title: string;
  description: string;
  category: TransactionCategory;
  status: TransactionStatus;
  direction: TransactionDirection;
  amount: number;
  currency: string;
  date: string;
  time: string;
  provider?: string;
  phoneNumber?: string;
  country?: string;
  iconType: TransactionCategory;
};

/* ==========================================================================
   DEMO TRANSACTIONS
============================================================================ */

const transactions: Transaction[] = [
  {
    id: "tx_10001",
    reference: "DEP-8K29XQ7A",
    title: "Crypto Deposit",
    description: "Bitcoin wallet deposit",
    category: "deposit",
    status: "completed",
    direction: "credit",
    amount: 250,
    currency: "USD",
    date: "Aug 12, 2026",
    time: "10:42 AM",
    provider: "BlockBee",
    iconType: "deposit",
  },
  {
    id: "tx_10002",
    reference: "ESIM-7P92LM4Q",
    title: "eSIM Purchase",
    description: "United States 10GB",
    category: "esim",
    status: "completed",
    direction: "debit",
    amount: 18.99,
    currency: "USD",
    date: "Aug 12, 2026",
    time: "09:28 AM",
    provider: "eSIM Provider",
    country: "United States",
    iconType: "esim",
  },
  {
    id: "tx_10003",
    reference: "SMS-4K92NX8P",
    title: "Verification Number",
    description: "WhatsApp verification",
    category: "verification",
    status: "completed",
    direction: "debit",
    amount: 1.25,
    currency: "USD",
    date: "Aug 12, 2026",
    time: "08:51 AM",
    provider: "SMS Provider",
    phoneNumber: "+1 202 *** 8214",
    country: "United States",
    iconType: "verification",
  },
  {
    id: "tx_10004",
    reference: "REF-5Q72NX91",
    title: "Referral Commission",
    description: "Commission from referred user",
    category: "referral",
    status: "completed",
    direction: "credit",
    amount: 4.75,
    currency: "USD",
    date: "Aug 11, 2026",
    time: "08:17 PM",
    iconType: "referral",
  },
  {
    id: "tx_10005",
    reference: "REF-4Q21PK82",
    title: "Refund",
    description: "Verification number refund",
    category: "refund",
    status: "completed",
    direction: "credit",
    amount: 1.25,
    currency: "USD",
    date: "Aug 11, 2026",
    time: "07:45 PM",
    provider: "SMS Provider",
    iconType: "refund",
  },
  {
    id: "tx_10006",
    reference: "TOP-9K21MX7A",
    title: "Wallet Funding",
    description: "Card payment",
    category: "wallet",
    status: "completed",
    direction: "credit",
    amount: 100,
    currency: "USD",
    date: "Aug 11, 2026",
    time: "04:31 PM",
    provider: "Payment Gateway",
    iconType: "wallet",
  },
  {
    id: "tx_10007",
    reference: "ESIM-2K81NX9L",
    title: "eSIM Top Up",
    description: "Additional 5GB data",
    category: "esim",
    status: "pending",
    direction: "debit",
    amount: 12.99,
    currency: "USD",
    date: "Aug 11, 2026",
    time: "03:12 PM",
    provider: "eSIM Provider",
    country: "United States",
    iconType: "esim",
  },
  {
    id: "tx_10008",
    reference: "WDR-9X82PQ11",
    title: "Withdrawal",
    description: "Wallet withdrawal",
    category: "withdrawal",
    status: "pending",
    direction: "debit",
    amount: 50,
    currency: "USD",
    date: "Aug 11, 2026",
    time: "01:02 PM",
    provider: "Bank Transfer",
    iconType: "withdrawal",
  },
  {
    id: "tx_10009",
    reference: "SMS-7P29KM42",
    title: "Verification Number",
    description: "Telegram verification",
    category: "verification",
    status: "failed",
    direction: "debit",
    amount: 0.95,
    currency: "USD",
    date: "Aug 10, 2026",
    time: "11:38 PM",
    provider: "SMS Provider",
    phoneNumber: "+44 7*** 9821",
    country: "United Kingdom",
    iconType: "verification",
  },
  {
    id: "tx_10010",
    reference: "DEP-8X72KQ11",
    title: "Crypto Deposit",
    description: "USDT deposit",
    category: "deposit",
    status: "completed",
    direction: "credit",
    amount: 500,
    currency: "USD",
    date: "Aug 10, 2026",
    time: "05:44 PM",
    provider: "BlockBee",
    iconType: "deposit",
  },
  {
    id: "tx_10011",
    reference: "REF-2L81NX91",
    title: "Referral Commission",
    description: "Commission from referred user",
    category: "referral",
    status: "completed",
    direction: "credit",
    amount: 8.5,
    currency: "USD",
    date: "Aug 10, 2026",
    time: "01:27 PM",
    iconType: "referral",
  },
  {
    id: "tx_10012",
    reference: "RFN-7K91PQ21",
    title: "Refund",
    description: "eSIM purchase refund",
    category: "refund",
    status: "completed",
    direction: "credit",
    amount: 18.99,
    currency: "USD",
    date: "Aug 09, 2026",
    time: "10:18 AM",
    provider: "eSIM Provider",
    iconType: "refund",
  },
];

/* ==========================================================================
   CATEGORY CONFIG
============================================================================ */

const categoryConfig: Record<
  TransactionCategory,
  {
    label: string;
    icon: React.ElementType;
  }
> = {
  verification: {
    label: "Verification",
    icon: Phone,
  },
  esim: {
    label: "eSIM",
    icon: Smartphone,
  },
  deposit: {
    label: "Deposit",
    icon: ArrowDownLeft,
  },
  refund: {
    label: "Refund",
    icon: RotateCcw,
  },
  referral: {
    label: "Referral",
    icon: UserPlus,
  },
  wallet: {
    label: "Wallet",
    icon: Wallet,
  },
  withdrawal: {
    label: "Withdrawal",
    icon: ArrowUpRight,
  },
};

/* ==========================================================================
   MAIN PAGE
============================================================================ */

export default function TransactionsPage() {
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState<
    TransactionCategory | "all"
  >("all");

  const [status, setStatus] = useState<
    TransactionStatus | "all"
  >("all");

  const [direction, setDirection] = useState<
    TransactionDirection | "all"
  >("all");

  const [dateFilter, setDateFilter] =
    useState("all");

  const [page, setPage] = useState(1);

  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);

  const [showFilters, setShowFilters] =
    useState(false);

  const [exporting, setExporting] =
    useState(false);

  const [refreshing, setRefreshing] =
    useState(false);

  const pageSize = 7;

  /* ========================================================================
     FILTER
  ======================================================================== */

  const filteredTransactions = useMemo(() => {
    const query = search.toLowerCase().trim();

    return transactions.filter((transaction) => {
      const matchesSearch =
        !query ||
        transaction.title
          .toLowerCase()
          .includes(query) ||
        transaction.description
          .toLowerCase()
          .includes(query) ||
        transaction.reference
          .toLowerCase()
          .includes(query) ||
        transaction.provider
          ?.toLowerCase()
          .includes(query) ||
        transaction.phoneNumber
          ?.toLowerCase()
          .includes(query);

      const matchesCategory =
        category === "all" ||
        transaction.category === category;

      const matchesStatus =
        status === "all" ||
        transaction.status === status;

      const matchesDirection =
        direction === "all" ||
        transaction.direction === direction;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus &&
        matchesDirection
      );
    });
  }, [
    search,
    category,
    status,
    direction,
  ]);

  /* ========================================================================
     PAGINATION
  ======================================================================== */

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredTransactions.length / pageSize
    )
  );

  const currentPage = Math.min(
    page,
    totalPages
  );

  const paginatedTransactions =
    filteredTransactions.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );

  /* ========================================================================
     STATS
  ======================================================================== */

  const totalDeposits = transactions
    .filter(
      (item) =>
        item.direction === "credit" &&
        item.status === "completed"
    )
    .reduce(
      (sum, item) => sum + item.amount,
      0
    );

  const totalSpent = transactions
    .filter(
      (item) =>
        item.direction === "debit" &&
        item.status === "completed"
    )
    .reduce(
      (sum, item) => sum + item.amount,
      0
    );

  const totalRefunds = transactions
    .filter(
      (item) =>
        item.category === "refund" &&
        item.status === "completed"
    )
    .reduce(
      (sum, item) => sum + item.amount,
      0
    );

  const pendingCount =
    transactions.filter(
      (item) => item.status === "pending"
    ).length;

  /* ========================================================================
     ACTIONS
  ======================================================================== */

  async function refreshTransactions() {
    setRefreshing(true);

    /*
      PRODUCTION:

      const response = await fetch(
        "/api/transactions"
      );

      const data = await response.json();

      setTransactions(data);
    */

    await delay(800);

    setRefreshing(false);
  }

  async function exportTransactions() {
    setExporting(true);

    /*
      Production implementation:

      const response = await fetch(
        "/api/transactions/export"
      );

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;
      link.download = "transactions.csv";
      link.click();

      window.URL.revokeObjectURL(url);
    */

    await delay(900);

    setExporting(false);
  }

  function resetFilters() {
    setSearch("");
    setCategory("all");
    setStatus("all");
    setDirection("all");
    setDateFilter("all");
    setPage(1);
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-900">

      <div className="mx-auto w-full max-w-[1500px] px-4 py-5 sm:px-6 lg:px-8 lg:py-8">

        {/* ================================================================
            BREADCRUMB
        ================================================================= */}

        <div className="mb-6 flex items-center gap-2 text-xs text-slate-400">

          <a
            href="/dashboard"
            className="transition hover:text-cyan-700"
          >
            Dashboard
          </a>

          <ChevronRight className="h-3.5 w-3.5" />

          <span className="font-semibold text-slate-700">
            Transactions
          </span>

        </div>

        {/* ================================================================
            HEADER
        ================================================================= */}

        <section className="mb-7">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

            <div className="flex items-start gap-3">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">

                <FileText className="h-6 w-6" />

              </div>

              <div>

                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Transactions
                </h1>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  View and manage your verification,
                  eSIM, deposits, refunds, referrals,
                  wallet and withdrawal activities.
                </p>

              </div>

            </div>

            <div className="flex gap-2">

              <button
                type="button"
                onClick={refreshTransactions}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-xs font-bold text-slate-700 shadow-sm transition hover:bg-slate-50"
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
                onClick={exportTransactions}
                disabled={exporting}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 text-xs font-bold text-white shadow-sm transition hover:bg-slate-800 disabled:opacity-60"
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

        </section>

        {/* ================================================================
            STATISTICS
        ================================================================= */}

        <section className="mb-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <StatCard
            icon={<TrendingUp />}
            label="Total received"
            value={`$${totalDeposits.toFixed(
              2
            )}`}
            description="Completed credits"
          />

          <StatCard
            icon={<CircleDollarSign />}
            label="Total spent"
            value={`$${totalSpent.toFixed(
              2
            )}`}
            description="Completed debits"
          />

          <StatCard
            icon={<RotateCcw />}
            label="Total refunds"
            value={`$${totalRefunds.toFixed(
              2
            )}`}
            description="Refunded to wallet"
          />

          <StatCard
            icon={<Clock3 />}
            label="Pending"
            value={String(pendingCount)}
            description="Awaiting completion"
            isNumber
          />

        </section>

        {/* ================================================================
            CATEGORY QUICK FILTERS
        ================================================================= */}

        <section className="mb-5 overflow-x-auto">

          <div className="flex min-w-max gap-2">

            <QuickFilter
              active={category === "all"}
              label="All"
              count={transactions.length}
              onClick={() => {
                setCategory("all");
                setPage(1);
              }}
            />

            {(
              Object.entries(
                categoryConfig
              ) as [
                TransactionCategory,
                {
                  label: string;
                  icon: React.ElementType;
                }
              ][]
            ).map(
              ([key, config]) => {

                const count =
                  transactions.filter(
                    (item) =>
                      item.category === key
                  ).length;

                return (
                  <QuickFilter
                    key={key}
                    active={
                      category === key
                    }
                    label={config.label}
                    count={count}
                    icon={
                      <config.icon className="h-3.5 w-3.5" />
                    }
                    onClick={() => {
                      setCategory(key);
                      setPage(1);
                    }}
                  />
                );
              }
            )}

          </div>

        </section>

        {/* ================================================================
            SEARCH / FILTER
        ================================================================= */}

        <section className="mb-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">

          <div className="flex flex-col gap-3 lg:flex-row">

            {/* SEARCH */}

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
                placeholder="Search transaction, reference, provider..."
                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-100"
              />

            </div>

            {/* DATE */}

            <div className="relative">

              <CalendarDays className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <select
                value={dateFilter}
                onChange={(event) =>
                  setDateFilter(
                    event.target.value
                  )
                }
                className="h-11 min-w-[155px] appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-9 text-xs font-semibold text-slate-700 outline-none focus:border-cyan-400"
              >
                <option value="all">
                  All dates
                </option>
                <option value="today">
                  Today
                </option>
                <option value="7days">
                  Last 7 days
                </option>
                <option value="30days">
                  Last 30 days
                </option>
              </select>

              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            </div>

            {/* FILTER */}

            <button
              type="button"
              onClick={() =>
                setShowFilters(
                  !showFilters
                )
              }
              className={`inline-flex h-11 items-center justify-center gap-2 rounded-xl border px-4 text-xs font-bold transition ${
                showFilters
                  ? "border-cyan-300 bg-cyan-50 text-cyan-700"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >

              <Filter className="h-4 w-4" />

              Filters

              {(status !== "all" ||
                direction !== "all") && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-cyan-600 px-1 text-[9px] text-white">
                  {(status !== "all"
                    ? 1
                    : 0) +
                    (direction !==
                    "all"
                      ? 1
                      : 0)}
                </span>
              )}

            </button>

          </div>

          {/* ADVANCED FILTERS */}

          {showFilters && (
            <div className="mt-4 grid gap-3 border-t border-slate-100 pt-4 sm:grid-cols-2">

              <FilterSelect
                label="Status"
                value={status}
                onChange={(value) => {
                  setStatus(
                    value as
                      | TransactionStatus
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
                  [
                    "cancelled",
                    "Cancelled",
                  ],
                ]}
              />

              <FilterSelect
                label="Transaction type"
                value={direction}
                onChange={(value) => {
                  setDirection(
                    value as
                      | TransactionDirection
                      | "all"
                  );
                  setPage(1);
                }}
                options={[
                  ["all", "All types"],
                  ["credit", "Money in"],
                  ["debit", "Money out"],
                ]}
              />

            </div>
          )}

        </section>

        {/* ================================================================
            TRANSACTION TABLE
        ================================================================= */}

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          {/* TABLE HEADER */}

          <div className="flex flex-col gap-2 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">

            <div>

              <h2 className="text-sm font-bold text-slate-900">
                Transaction history
              </h2>

              <p className="mt-1 text-[10px] text-slate-400">
                {filteredTransactions.length}{" "}
                transaction
                {filteredTransactions.length !==
                1
                  ? "s"
                  : ""}{" "}
                found
              </p>

            </div>

            <div className="flex items-center gap-2 text-[10px] text-slate-400">

              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />

              Secure transaction ledger

            </div>

          </div>

          {/* DESKTOP TABLE */}

          <div className="hidden overflow-x-auto md:block">

            <table className="w-full min-w-[900px]">

              <thead>

                <tr className="border-b border-slate-100 bg-slate-50/70">

                  <th className="px-5 py-3 text-left text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    Transaction
                  </th>

                  <th className="px-5 py-3 text-left text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    Reference
                  </th>

                  <th className="px-5 py-3 text-left text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    Category
                  </th>

                  <th className="px-5 py-3 text-left text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    Date
                  </th>

                  <th className="px-5 py-3 text-left text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    Status
                  </th>

                  <th className="px-5 py-3 text-right text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    Amount
                  </th>

                  <th className="px-5 py-3 text-right text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody className="divide-y divide-slate-100">

                {paginatedTransactions.map(
                  (transaction) => (
                    <TransactionRow
                      key={transaction.id}
                      transaction={
                        transaction
                      }
                      onView={() =>
                        setSelectedTransaction(
                          transaction
                        )
                      }
                    />
                  )
                )}

              </tbody>

            </table>

          </div>

          {/* MOBILE LIST */}

          <div className="divide-y divide-slate-100 md:hidden">

            {paginatedTransactions.map(
              (transaction) => (
                <MobileTransaction
                  key={transaction.id}
                  transaction={transaction}
                  onView={() =>
                    setSelectedTransaction(
                      transaction
                    )
                  }
                />
              )
            )}

          </div>

          {/* EMPTY */}

          {paginatedTransactions.length ===
            0 && (
            <EmptyState
              onReset={resetFilters}
            />
          )}

          {/* PAGINATION */}

          {paginatedTransactions.length >
            0 && (
            <div className="flex flex-col gap-3 border-t border-slate-100 p-4 sm:flex-row sm:items-center sm:justify-between">

              <p className="text-[10px] text-slate-400">

                Showing{" "}
                <span className="font-bold text-slate-700">
                  {(currentPage - 1) *
                    pageSize +
                    1}
                </span>{" "}
                to{" "}
                <span className="font-bold text-slate-700">
                  {Math.min(
                    currentPage *
                      pageSize,
                    filteredTransactions.length
                  )}
                </span>{" "}
                of{" "}
                <span className="font-bold text-slate-700">
                  {filteredTransactions.length}
                </span>

              </p>

              <div className="flex items-center gap-1">

                <PaginationButton
                  disabled={
                    currentPage === 1
                  }
                  onClick={() =>
                    setPage(
                      Math.max(
                        1,
                        currentPage - 1
                      )
                    )
                  }
                >
                  <ChevronLeft className="h-4 w-4" />
                </PaginationButton>

                {Array.from(
                  {
                    length: totalPages,
                  },
                  (_, index) =>
                    index + 1
                ).map((number) => (
                  <PaginationButton
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
                  </PaginationButton>
                ))}

                <PaginationButton
                  disabled={
                    currentPage ===
                    totalPages
                  }
                  onClick={() =>
                    setPage(
                      Math.min(
                        totalPages,
                        currentPage + 1
                      )
                    )
                  }
                >
                  <ChevronRight className="h-4 w-4" />
                </PaginationButton>

              </div>

            </div>
          )}

        </section>

        {/* ================================================================
            FOOTER INFO
        ================================================================= */}

        <section className="mt-5 grid gap-4 sm:grid-cols-3">

          <InfoCard
            icon={<LockIcon />}
            title="Secure ledger"
            description="Every wallet activity is recorded with a unique transaction reference."
          />

          <InfoCard
            icon={<Activity />}
            title="Real-time updates"
            description="Deposit, refund and payment statuses update as transactions are processed."
          />

          <InfoCard
            icon={<Landmark />}
            title="Financial records"
            description="Export your transaction history whenever you need a complete financial record."
          />

        </section>

      </div>

      {/* ================================================================
          DETAIL DRAWER / MODAL
      ================================================================= */}

      {selectedTransaction && (
        <TransactionDetails
          transaction={
            selectedTransaction
          }
          onClose={() =>
            setSelectedTransaction(
              null
            )
          }
        />
      )}

    </main>
  );
}

/* ==========================================================================
   STAT CARD
============================================================================ */

function StatCard({
  icon,
  label,
  value,
  description,
  isNumber = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
  isNumber?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex items-start justify-between">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
          {icon}
        </div>

        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-300">
          {isNumber
            ? "Activity"
            : "Lifetime"}
        </span>

      </div>

      <p className="mt-5 text-[10px] font-semibold text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-xl font-bold tracking-tight text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-[9px] text-slate-400">
        {description}
      </p>

    </div>
  );
}

/* ==========================================================================
   QUICK FILTER
============================================================================ */

function QuickFilter({
  active,
  label,
  count,
  icon,
  onClick,
}: {
  active: boolean;
  label: string;
  count: number;
  icon?: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex h-10 items-center gap-2 rounded-xl border px-3.5 text-[10px] font-bold transition ${
        active
          ? "border-cyan-500 bg-cyan-600 text-white shadow-sm"
          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
      }`}
    >

      {icon}

      {label}

      <span
        className={`rounded-full px-1.5 py-0.5 text-[8px] ${
          active
            ? "bg-white/20"
            : "bg-slate-100"
        }`}
      >
        {count}
      </span>

    </button>
  );
}

/* ==========================================================================
   FILTER SELECT
============================================================================ */

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
            ([optionValue, optionLabel]) => (
              <option
                key={optionValue}
                value={optionValue}
              >
                {optionLabel}
              </option>
            )
          )}
        </select>

        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

      </div>

    </div>
  );
}

/* ==========================================================================
   TRANSACTION ROW
============================================================================ */

function TransactionRow({
  transaction,
  onView,
}: {
  transaction: Transaction;
  onView: () => void;
}) {
  const config =
    categoryConfig[
      transaction.category
    ];

  const Icon = config.icon;

  const isCredit =
    transaction.direction ===
    "credit";

  return (
    <tr className="group transition hover:bg-slate-50/70">

      <td className="px-5 py-4">

        <div className="flex items-center gap-3">

          <TransactionIcon
            category={
              transaction.category
            }
          />

          <div className="min-w-0">

            <p className="truncate text-xs font-bold text-slate-800">
              {transaction.title}
            </p>

            <p className="mt-1 max-w-[210px] truncate text-[10px] text-slate-400">
              {transaction.description}
            </p>

          </div>

        </div>

      </td>

      <td className="px-5 py-4">

        <button
          type="button"
          onClick={() =>
            copyToClipboard(
              transaction.reference
            )
          }
          className="group/ref inline-flex items-center gap-1 text-[10px] font-semibold text-slate-500 transition hover:text-cyan-700"
        >

          {transaction.reference}

          <Copy className="h-3 w-3 opacity-0 transition group-hover/ref:opacity-100" />

        </button>

      </td>

      <td className="px-5 py-4">

        <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1">

          <Icon className="h-3 w-3 text-slate-500" />

          <span className="text-[9px] font-bold text-slate-600">
            {config.label}
          </span>

        </div>

      </td>

      <td className="px-5 py-4">

        <p className="text-[10px] font-semibold text-slate-600">
          {transaction.date}
        </p>

        <p className="mt-1 text-[9px] text-slate-400">
          {transaction.time}
        </p>

      </td>

      <td className="px-5 py-4">

        <StatusBadge
          status={transaction.status}
        />

      </td>

      <td className="px-5 py-4 text-right">

        <p
          className={`text-xs font-bold ${
            isCredit
              ? "text-emerald-600"
              : "text-slate-800"
          }`}
        >
          {isCredit ? "+" : "-"}$
          {transaction.amount.toFixed(
            2
          )}
        </p>

        <p className="mt-1 text-[9px] text-slate-400">
          {transaction.currency}
        </p>

      </td>

      <td className="px-5 py-4 text-right">

        <button
          type="button"
          onClick={onView}
          className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
        >

          <Eye className="h-4 w-4" />

        </button>

      </td>

    </tr>
  );
}

/* ==========================================================================
   MOBILE TRANSACTION
============================================================================ */

function MobileTransaction({
  transaction,
  onView,
}: {
  transaction: Transaction;
  onView: () => void;
}) {
  const isCredit =
    transaction.direction ===
    "credit";

  return (
    <button
      type="button"
      onClick={onView}
      className="flex w-full items-center gap-3 p-4 text-left transition hover:bg-slate-50"
    >

      <TransactionIcon
        category={
          transaction.category
        }
      />

      <div className="min-w-0 flex-1">

        <div className="flex items-start justify-between gap-3">

          <div className="min-w-0">

            <p className="truncate text-xs font-bold text-slate-800">
              {transaction.title}
            </p>

            <p className="mt-1 truncate text-[9px] text-slate-400">
              {transaction.description}
            </p>

          </div>

          <p
            className={`shrink-0 text-xs font-bold ${
              isCredit
                ? "text-emerald-600"
                : "text-slate-800"
            }`}
          >
            {isCredit ? "+" : "-"}$
            {transaction.amount.toFixed(
              2
            )}
          </p>

        </div>

        <div className="mt-2 flex items-center justify-between">

          <div className="flex items-center gap-2">

            <StatusBadge
              status={
                transaction.status
              }
            />

            <span className="text-[9px] text-slate-400">
              {transaction.date}
            </span>

          </div>

          <ChevronRight className="h-3.5 w-3.5 text-slate-300" />

        </div>

      </div>

    </button>
  );
}

/* ==========================================================================
   TRANSACTION ICON
============================================================================ */

function TransactionIcon({
  category,
}: {
  category: TransactionCategory;
}) {
  const config =
    categoryConfig[category];

  const Icon = config.icon;

  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">

      <Icon className="h-4 w-4" />

    </div>
  );
}

/* ==========================================================================
   STATUS BADGE
============================================================================ */

function StatusBadge({
  status,
}: {
  status: TransactionStatus;
}) {
  const config = {
    completed: {
      label: "Completed",
      className:
        "bg-emerald-50 text-emerald-700",
      icon: Check,
    },

    pending: {
      label: "Pending",
      className:
        "bg-amber-50 text-amber-700",
      icon: Clock3,
    },

    failed: {
      label: "Failed",
      className:
        "bg-rose-50 text-rose-700",
      icon: XCircle,
    },

    cancelled: {
      label: "Cancelled",
      className:
        "bg-slate-100 text-slate-500",
      icon: X,
    },
  }[status];

  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[9px] font-bold ${config.className}`}
    >

      <Icon className="h-3 w-3" />

      {config.label}

    </span>
  );
}

/* ==========================================================================
   PAGINATION BUTTON
============================================================================ */

function PaginationButton({
  children,
  onClick,
  disabled = false,
  active = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`flex h-8 min-w-8 items-center justify-center rounded-lg px-2 text-[10px] font-bold transition ${
        active
          ? "bg-cyan-600 text-white"
          : "text-slate-500 hover:bg-slate-100"
      } disabled:pointer-events-none disabled:opacity-30`}
    >
      {children}
    </button>
  );
}

/* ==========================================================================
   EMPTY STATE
============================================================================ */

function EmptyState({
  onReset,
}: {
  onReset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 text-center">

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">

        <Search className="h-6 w-6" />

      </div>

      <h3 className="mt-4 text-sm font-bold text-slate-800">
        No transactions found
      </h3>

      <p className="mt-1 max-w-sm text-[10px] leading-5 text-slate-400">
        Try changing your search or filter
        settings to find the transaction you are
        looking for.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-4 text-[10px] font-bold text-cyan-700"
      >
        Clear filters
      </button>

    </div>
  );
}

/* ==========================================================================
   INFO CARD
============================================================================ */

function InfoCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
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
          {description}
        </p>

      </div>

    </div>
  );
}

/* ==========================================================================
   LOCK ICON
============================================================================ */

function LockIcon() {
  return (
    <ShieldCheck className="h-4 w-4" />
  );
}

/* ==========================================================================
   TRANSACTION DETAILS
============================================================================ */

function TransactionDetails({
  transaction,
  onClose,
}: {
  transaction: Transaction;
  onClose: () => void;
}) {
  const isCredit =
    transaction.direction ===
    "credit";

  return (
    <div className="fixed inset-0 z-50">

      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]"
      />

      <div className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto bg-white shadow-2xl">

        {/* HEADER */}

        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white/95 px-5 py-4 backdrop-blur sm:px-6">

          <div>

            <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
              Transaction details
            </p>

            <h2 className="mt-1 text-sm font-bold text-slate-900">
              {transaction.title}
            </h2>

          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition hover:bg-slate-200"
          >

            <X className="h-4 w-4" />

          </button>

        </div>

        <div className="p-5 sm:p-6">

          {/* AMOUNT */}

          <div className="rounded-2xl bg-slate-900 p-6 text-center">

            <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
              Transaction amount
            </p>

            <p
              className={`mt-2 text-3xl font-bold ${
                isCredit
                  ? "text-emerald-400"
                  : "text-white"
              }`}
            >
              {isCredit ? "+" : "-"}$
              {transaction.amount.toFixed(
                2
              )}
            </p>

            <div className="mt-3 flex justify-center">

              <StatusBadge
                status={
                  transaction.status
                }
              />

            </div>

          </div>

          {/* INFORMATION */}

          <div className="mt-5">

            <h3 className="text-xs font-bold text-slate-800">
              Transaction information
            </h3>

            <div className="mt-3 divide-y divide-slate-100 rounded-2xl border border-slate-200">

              <DetailRow
                icon={<Hash />}
                label="Reference"
                value={
                  transaction.reference
                }
                copyable
              />

              <DetailRow
                icon={<Activity />}
                label="Description"
                value={
                  transaction.description
                }
              />

              <DetailRow
                icon={<FileText />}
                label="Category"
                value={
                  categoryConfig[
                    transaction.category
                  ].label
                }
              />

              <DetailRow
                icon={<CalendarDays />}
                label="Date"
                value={`${transaction.date} · ${transaction.time}`}
              />

              <DetailRow
                icon={<CircleDollarSign />}
                label="Currency"
                value={
                  transaction.currency
                }
              />

              {transaction.provider && (
                <DetailRow
                  icon={<Landmark />}
                  label="Provider"
                  value={
                    transaction.provider
                  }
                />
              )}

              {transaction.country && (
                <DetailRow
                  icon={<Wifi />}
                  label="Country"
                  value={
                    transaction.country
                  }
                />
              )}

              {transaction.phoneNumber && (
                <DetailRow
                  icon={<Phone />}
                  label="Phone number"
                  value={
                    transaction.phoneNumber
                  }
                />
              )}

            </div>

          </div>

          {/* TIMELINE */}

          <div className="mt-6">

            <h3 className="text-xs font-bold text-slate-800">
              Activity timeline
            </h3>

            <div className="mt-4">

              <TimelineItem
                title="Transaction created"
                description="Transaction request was created."
                active
              />

              <TimelineItem
                title={
                  transaction.status ===
                  "completed"
                    ? "Payment confirmed"
                    : "Payment processing"
                }
                description={
                  transaction.status ===
                  "completed"
                    ? "Payment has been successfully confirmed."
                    : "The transaction is awaiting confirmation."
                }
                active={
                  transaction.status !==
                  "failed"
                }
              />

              <TimelineItem
                title={
                  transaction.status ===
                  "completed"
                    ? "Transaction completed"
                    : "Awaiting completion"
                }
                description={
                  transaction.status ===
                  "completed"
                    ? "Funds have been successfully recorded."
                    : "Final confirmation is pending."
                }
                active={
                  transaction.status ===
                  "completed"
                }
                last
              />

            </div>

          </div>

          {/* SECURITY */}

          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-emerald-50 p-4">

            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />

            <p className="text-[9px] leading-5 text-emerald-800">
              This transaction is protected by the
              platform's secure transaction ledger.
              Keep the reference ID for future
              support requests.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

/* ==========================================================================
   DETAIL ROW
============================================================================ */

function DetailRow({
  icon,
  label,
  value,
  copyable = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  copyable?: boolean;
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

      {copyable && (
        <button
          type="button"
          onClick={() =>
            copyToClipboard(value)
          }
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700"
        >

          <Copy className="h-3.5 w-3.5" />

        </button>
      )}

    </div>
  );
}

/* ==========================================================================
   TIMELINE ITEM
============================================================================ */

function TimelineItem({
  title,
  description,
  active,
  last = false,
}: {
  title: string;
  description: string;
  active: boolean;
  last?: boolean;
}) {
  return (
    <div className="relative flex gap-3">

      {!last && (
        <div className="absolute left-[7px] top-5 h-full w-px bg-slate-200" />
      )}

      <div
        className={`relative z-10 mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
          active
            ? "bg-emerald-500 text-white"
            : "bg-slate-200 text-slate-400"
        }`}
      >

        {active && (
          <Check className="h-2.5 w-2.5" />
        )}

      </div>

      <div className="pb-5">

        <p className="text-[10px] font-bold text-slate-700">
          {title}
        </p>

        <p className="mt-1 text-[9px] leading-5 text-slate-400">
          {description}
        </p>

      </div>

    </div>
  );
}

/* ==========================================================================
   HELPERS
============================================================================ */

async function copyToClipboard(
  value: string
) {
  try {
    await navigator.clipboard.writeText(
      value
    );
  } catch {
    // Clipboard may be unavailable.
  }
}

function delay(ms: number) {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}