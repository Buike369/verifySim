"use client";

import {
  Activity,
  ArrowDownLeft,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Copy,
  Download,
  Eye,
  FileText,
  Filter,
  Globe2,
  Hash,
  MoreHorizontal,
  RefreshCw,
  Search,
  ShieldCheck,
  Smartphone,
  X,
  XCircle,
} from "lucide-react";

import { useMemo, useState } from "react";

type TransactionStatus =
  | "completed"
  | "pending"
  | "failed"
  | "refunded";

type TransactionType =
  | "purchase"
  | "renewal"
  | "topup"
  | "refund";

type Transaction = {
  id: string;
  reference: string;
  type: TransactionType;
  title: string;
  description: string;
  country: string;
  flag: string;
  plan: string;
  amount: number;
  currency: string;
  status: TransactionStatus;
  date: string;
  paymentMethod: string;
  esimId?: string;
};

const transactions: Transaction[] = [
  {
    id: "txn_01",
    reference: "ESIM-20260812-00142",
    type: "purchase",
    title: "eSIM purchase",
    description: "USA 10GB Data eSIM",
    country: "United States",
    flag: "🇺🇸",
    plan: "USA 10GB",
    amount: 18.99,
    currency: "USD",
    status: "completed",
    date: "Aug 12, 2026 · 09:14 AM",
    paymentMethod: "Wallet",
    esimId: "esim_usa_001",
  },
  {
    id: "txn_02",
    reference: "ESIM-20260811-00891",
    type: "topup",
    title: "Data top-up",
    description: "Additional 5GB data",
    country: "United Kingdom",
    flag: "🇬🇧",
    plan: "UK 5GB",
    amount: 9.5,
    currency: "USD",
    status: "completed",
    date: "Aug 11, 2026 · 06:42 PM",
    paymentMethod: "Wallet",
    esimId: "esim_uk_001",
  },
  {
    id: "txn_03",
    reference: "ESIM-20260810-00671",
    type: "renewal",
    title: "eSIM renewal",
    description: "Nigeria 15GB Data eSIM",
    country: "Nigeria",
    flag: "🇳🇬",
    plan: "Nigeria 15GB",
    amount: 14.0,
    currency: "USD",
    status: "pending",
    date: "Aug 10, 2026 · 03:21 PM",
    paymentMethod: "Wallet",
    esimId: "esim_ng_001",
  },
  {
    id: "txn_04",
    reference: "ESIM-20260808-00422",
    type: "purchase",
    title: "eSIM purchase",
    description: "France 10GB Data eSIM",
    country: "France",
    flag: "🇫🇷",
    plan: "France 10GB",
    amount: 16.5,
    currency: "USD",
    status: "failed",
    date: "Aug 08, 2026 · 11:03 AM",
    paymentMethod: "Wallet",
  },
  {
    id: "txn_05",
    reference: "ESIM-20260806-00312",
    type: "refund",
    title: "eSIM refund",
    description: "Refund for unused eSIM",
    country: "United States",
    flag: "🇺🇸",
    plan: "USA 5GB",
    amount: 8.99,
    currency: "USD",
    status: "refunded",
    date: "Aug 06, 2026 · 04:36 PM",
    paymentMethod: "Wallet",
    esimId: "esim_usa_002",
  },
  {
    id: "txn_06",
    reference: "ESIM-20260804-00198",
    type: "purchase",
    title: "eSIM purchase",
    description: "Germany 20GB Data eSIM",
    country: "Germany",
    flag: "🇩🇪",
    plan: "Germany 20GB",
    amount: 24.99,
    currency: "USD",
    status: "completed",
    date: "Aug 04, 2026 · 10:17 AM",
    paymentMethod: "Wallet",
    esimId: "esim_de_001",
  },
  {
    id: "txn_07",
    reference: "ESIM-20260802-00134",
    title: "Data top-up",
    description: "Additional 3GB data",
    country: "Ghana",
    flag: "🇬🇭",
    plan: "Ghana 3GB",
    type: "topup",
    amount: 7.25,
    currency: "USD",
    status: "completed",
    date: "Aug 02, 2026 · 08:31 PM",
    paymentMethod: "Wallet",
    esimId: "esim_gh_001",
  },
  {
    id: "txn_08",
    reference: "ESIM-20260730-00987",
    title: "eSIM renewal",
    description: "Spain 10GB Data eSIM",
    country: "Spain",
    flag: "🇪🇸",
    plan: "Spain 10GB",
    type: "renewal",
    amount: 15.0,
    currency: "USD",
    status: "completed",
    date: "Jul 30, 2026 · 01:49 PM",
    paymentMethod: "Wallet",
    esimId: "esim_es_001",
  },
];

export default function EsimTransactionsPage() {
  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] =
    useState<"all" | TransactionStatus>("all");

  const [typeFilter, setTypeFilter] =
    useState<"all" | TransactionType>("all");

  const [dateFilter, setDateFilter] =
    useState("all");

  const [page, setPage] = useState(1);

  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);

  const [showFilters, setShowFilters] =
    useState(false);

  const [copied, setCopied] =
    useState(false);

  const [refreshing, setRefreshing] =
    useState(false);

  const itemsPerPage = 6;

  /* ================================================================ */
  /* FILTER                                                            */
  /* ================================================================ */

  const filteredTransactions = useMemo(() => {
    const query = search.trim().toLowerCase();

    return transactions.filter((transaction) => {
      const matchesSearch =
        !query ||
        transaction.reference
          .toLowerCase()
          .includes(query) ||
        transaction.title
          .toLowerCase()
          .includes(query) ||
        transaction.description
          .toLowerCase()
          .includes(query) ||
        transaction.country
          .toLowerCase()
          .includes(query) ||
        transaction.plan
          .toLowerCase()
          .includes(query);

      const matchesStatus =
        statusFilter === "all" ||
        transaction.status === statusFilter;

      const matchesType =
        typeFilter === "all" ||
        transaction.type === typeFilter;

      const matchesDate =
        dateFilter === "all" ||
        matchesDateRange(
          transaction.date,
          dateFilter
        );

      return (
        matchesSearch &&
        matchesStatus &&
        matchesType &&
        matchesDate
      );
    });
  }, [
    search,
    statusFilter,
    typeFilter,
    dateFilter,
  ]);

  /* ================================================================ */
  /* PAGINATION                                                        */
  /* ================================================================ */

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredTransactions.length /
        itemsPerPage
    )
  );

  const safePage = Math.min(
    page,
    totalPages
  );

  const paginatedTransactions =
    filteredTransactions.slice(
      (safePage - 1) * itemsPerPage,
      safePage * itemsPerPage
    );

  /* ================================================================ */
  /* STATS                                                             */
  /* ================================================================ */

  const completedAmount =
    transactions
      .filter(
        (transaction) =>
          transaction.status === "completed"
      )
      .reduce(
        (sum, transaction) =>
          sum + transaction.amount,
        0
      );

  const pendingCount =
    transactions.filter(
      (transaction) =>
        transaction.status === "pending"
    ).length;

  const completedCount =
    transactions.filter(
      (transaction) =>
        transaction.status === "completed"
    ).length;

  const refundedAmount =
    transactions
      .filter(
        (transaction) =>
          transaction.status === "refunded"
      )
      .reduce(
        (sum, transaction) =>
          sum + transaction.amount,
        0
      );

  /* ================================================================ */
  /* FUNCTIONS                                                         */
  /* ================================================================ */

  function handleSearch(value: string) {
    setSearch(value);
    setPage(1);
  }

  function clearFilters() {
    setSearch("");
    setStatusFilter("all");
    setTypeFilter("all");
    setDateFilter("all");
    setPage(1);
  }

  async function refreshTransactions() {
    setRefreshing(true);

    // Production:
    // await fetch("/api/esim/transactions");

    await new Promise((resolve) =>
      setTimeout(resolve, 800)
    );

    setRefreshing(false);
  }

  async function copyReference(reference: string) {
    try {
      await navigator.clipboard.writeText(
        reference
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      // Clipboard unavailable.
    }
  }

  function exportTransactions() {
    /*
      Production implementation:

      const response = await fetch(
        "/api/esim/transactions/export"
      );

      const blob = await response.blob();

      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;
      link.download =
        "esim-transactions.csv";

      link.click();

      URL.revokeObjectURL(url);
    */

    alert(
      "Connect this action to your transaction export API."
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <div className="mx-auto w-full max-w-[1450px] px-4 py-5 sm:px-6 lg:px-8 lg:py-8">

        {/* ========================================================== */}
        {/* BREADCRUMB                                                  */}
        {/* ========================================================== */}

        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs text-slate-400">

          <a
            href="/esim"
            className="hover:text-cyan-700"
          >
            Data eSIM
          </a>

          <ChevronRight />

          <span className="font-semibold text-slate-700">
            Transactions
          </span>

        </div>

        {/* ========================================================== */}
        {/* HEADER                                                       */}
        {/* ========================================================== */}

        <section className="mb-7">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <div className="flex items-start gap-3">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                  <FileText className="h-6 w-6" />
                </div>

                <div>

                  <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    Transactions
                  </h1>

                  <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                    View and manage all payments,
                    purchases, renewals, top-ups and
                    refunds associated with your eSIMs.
                  </p>

                </div>

              </div>

            </div>

            <div className="flex flex-wrap gap-2">

              <button
                type="button"
                onClick={refreshTransactions}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-xs font-bold text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                <RefreshCw
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
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 text-xs font-bold text-white transition hover:bg-slate-800"
              >
                <Download className="h-4 w-4" />
                Export
              </button>

            </div>

          </div>

        </section>

        {/* ========================================================== */}
        {/* STAT CARDS                                                   */}
        {/* ========================================================== */}

        <section className="mb-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <StatCard
            title="Total spent"
            value={`$${completedAmount.toFixed(2)}`}
            description="Completed transactions"
            icon={
              <CircleDollarSign />
            }
          />

          <StatCard
            title="Completed"
            value={completedCount.toString()}
            description="Successful transactions"
            icon={<Check />}
          />

          <StatCard
            title="Pending"
            value={pendingCount.toString()}
            description="Awaiting confirmation"
            icon={<Clock3 />}
          />

          <StatCard
            title="Refunded"
            value={`$${refundedAmount.toFixed(2)}`}
            description="Returned to your wallet"
            icon={<ArrowDownLeft />}
          />

        </section>

        {/* ========================================================== */}
        {/* SEARCH & FILTERS                                             */}
        {/* ========================================================== */}

        <section className="mb-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

          <div className="flex flex-col gap-3 xl:flex-row">

            {/* SEARCH */}

            <div className="relative flex-1">

              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                value={search}
                onChange={(event) =>
                  handleSearch(
                    event.target.value
                  )
                }
                placeholder="Search transaction ID, eSIM, country or plan..."
                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-xs font-medium outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white"
              />

            </div>

            {/* FILTER BUTTON */}

            <button
              type="button"
              onClick={() =>
                setShowFilters(
                  (value) => !value
                )
              }
              className={`inline-flex h-11 items-center justify-center gap-2 rounded-xl border px-4 text-xs font-bold transition ${
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

          </div>

          {/* FILTER PANEL */}

          {showFilters && (
            <div className="mt-4 grid gap-3 border-t border-slate-100 pt-4 md:grid-cols-3">

              <FilterSelect
                label="Status"
                value={statusFilter}
                onChange={(value) => {
                  setStatusFilter(
                    value as
                      | "all"
                      | TransactionStatus
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
                    "refunded",
                    "Refunded",
                  ],
                ]}
              />

              <FilterSelect
                label="Transaction type"
                value={typeFilter}
                onChange={(value) => {
                  setTypeFilter(
                    value as
                      | "all"
                      | TransactionType
                  );
                  setPage(1);
                }}
                options={[
                  ["all", "All types"],
                  [
                    "purchase",
                    "Purchase",
                  ],
                  ["renewal", "Renewal"],
                  ["topup", "Top-up"],
                  ["refund", "Refund"],
                ]}
              />

              <FilterSelect
                label="Date"
                value={dateFilter}
                onChange={(value) => {
                  setDateFilter(value);
                  setPage(1);
                }}
                options={[
                  ["all", "All dates"],
                  [
                    "7",
                    "Last 7 days",
                  ],
                  [
                    "30",
                    "Last 30 days",
                  ],
                  [
                    "90",
                    "Last 90 days",
                  ],
                ]}
              />

            </div>
          )}

          {/* ACTIVE FILTERS */}

          {(search ||
            statusFilter !== "all" ||
            typeFilter !== "all" ||
            dateFilter !== "all") && (
            <div className="mt-4 flex flex-wrap items-center gap-2">

              <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                Active filters
              </span>

              {search && (
                <FilterTag
                  text={`Search: ${search}`}
                  onRemove={() =>
                    handleSearch("")
                  }
                />
              )}

              {statusFilter !== "all" && (
                <FilterTag
                  text={`Status: ${capitalize(
                    statusFilter
                  )}`}
                  onRemove={() => {
                    setStatusFilter(
                      "all"
                    );
                    setPage(1);
                  }}
                />
              )}

              {typeFilter !== "all" && (
                <FilterTag
                  text={`Type: ${capitalize(
                    typeFilter
                  )}`}
                  onRemove={() => {
                    setTypeFilter(
                      "all"
                    );
                    setPage(1);
                  }}
                />
              )}

              {dateFilter !== "all" && (
                <FilterTag
                  text={`Date: ${dateFilter} days`}
                  onRemove={() => {
                    setDateFilter(
                      "all"
                    );
                    setPage(1);
                  }}
                />
              )}

              <button
                type="button"
                onClick={clearFilters}
                className="ml-1 text-[10px] font-bold text-rose-500 hover:text-rose-600"
              >
                Clear all
              </button>

            </div>
          )}

        </section>

        {/* ========================================================== */}
        {/* TRANSACTION TABLE                                           */}
        {/* ========================================================== */}

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          {/* TABLE HEADER */}

          <div className="flex flex-col gap-2 border-b border-slate-100 p-5 sm:p-6 md:flex-row md:items-center md:justify-between">

            <div>

              <h2 className="text-sm font-bold text-slate-900">
                Transaction history
              </h2>

              <p className="mt-1 text-[11px] text-slate-400">
                {filteredTransactions.length} transaction
                {filteredTransactions.length !== 1
                  ? "s"
                  : ""}{" "}
                found
              </p>

            </div>

            <div className="flex items-center gap-2 text-[10px] text-slate-400">

              <ShieldCheck className="h-4 w-4" />

              Secure transaction history

            </div>

          </div>

          {/* DESKTOP TABLE */}

          <div className="hidden overflow-x-auto md:block">

            <table className="w-full min-w-[950px]">

              <thead>

                <tr className="border-b border-slate-100 bg-slate-50/70">

                  <TableHead>
                    Transaction
                  </TableHead>

                  <TableHead>
                    eSIM / Plan
                  </TableHead>

                  <TableHead>
                    Amount
                  </TableHead>

                  <TableHead>
                    Status
                  </TableHead>

                  <TableHead>
                    Date
                  </TableHead>

                  <TableHead align="right">
                    Action
                  </TableHead>

                </tr>

              </thead>

              <tbody>

                {paginatedTransactions.map(
                  (transaction) => (
                    <TransactionTableRow
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

          {/* MOBILE CARDS */}

          <div className="divide-y divide-slate-100 md:hidden">

            {paginatedTransactions.map(
              (transaction) => (
                <TransactionMobileCard
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

          </div>

          {/* EMPTY STATE */}

          {paginatedTransactions.length ===
            0 && (
            <EmptyState
              onClear={clearFilters}
            />
          )}

          {/* PAGINATION */}

          {paginatedTransactions.length >
            0 && (
            <Pagination
              page={safePage}
              totalPages={totalPages}
              onPrevious={() =>
                setPage(
                  (value) =>
                    Math.max(
                      1,
                      value - 1
                    )
                )
              }
              onNext={() =>
                setPage(
                  (value) =>
                    Math.min(
                      totalPages,
                      value + 1
                    )
                )
              }
            />
          )}

        </section>

        {/* ========================================================== */}
        {/* ACTIVITY                                                     */}
        {/* ========================================================== */}

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white shadow-sm">

          <div className="border-b border-slate-100 p-5 sm:p-6">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                <Activity className="h-5 w-5" />
              </div>

              <div>

                <h2 className="text-sm font-bold text-slate-900">
                  Recent activity
                </h2>

                <p className="mt-1 text-[11px] text-slate-400">
                  Recent actions related to your eSIM
                  transactions.
                </p>

              </div>

            </div>

          </div>

          <div className="grid gap-4 p-5 sm:grid-cols-3 sm:p-6">

            <ActivityCard
              icon={<Eye />}
              title="Transaction viewed"
              description="Transaction history accessed"
              time="Today · 09:18 AM"
            />

            <ActivityCard
              icon={<Download />}
              title="Export requested"
              description="Transaction report generated"
              time="Today · 09:10 AM"
            />

            <ActivityCard
              icon={<Smartphone />}
              title="eSIM purchase"
              description="USA 10GB activated"
              time="Today · 09:14 AM"
            />

          </div>

        </section>

      </div>

      {/* ============================================================ */}
      {/* TRANSACTION DETAILS DRAWER                                   */}
      {/* ============================================================ */}

      {selectedTransaction && (
        <TransactionDetails
          transaction={
            selectedTransaction
          }
          copied={copied}
          onCopy={() =>
            copyReference(
              selectedTransaction.reference
            )
          }
          onClose={() =>
            setSelectedTransaction(null)
          }
        />
      )}

    </main>
  );
}

/* ========================================================================== */
/* STAT CARD                                                                    */
/* ========================================================================== */

function StatCard({
  title,
  value,
  description,
  icon,
}: {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
            {title}
          </p>

          <p className="mt-3 text-xl font-bold tracking-tight text-slate-900">
            {value}
          </p>

          <p className="mt-1 text-[10px] text-slate-400">
            {description}
          </p>

        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-500">
          {icon}
        </div>

      </div>

    </div>
  );
}

/* ========================================================================== */
/* TABLE HEAD                                                                   */
/* ========================================================================== */

function TableHead({
  children,
  align = "left",
}: {
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  return (
    <th
      className={`px-5 py-3 text-[10px] font-bold uppercase tracking-wide text-slate-400 ${
        align === "right"
          ? "text-right"
          : "text-left"
      }`}
    >
      {children}
    </th>
  );
}

/* ========================================================================== */
/* TABLE ROW                                                                    */
/* ========================================================================== */

function TransactionTableRow({
  transaction,
  onView,
}: {
  transaction: Transaction;
  onView: () => void;
}) {
  return (
    <tr className="border-b border-slate-100 transition hover:bg-slate-50/60">

      <td className="px-5 py-4">

        <div className="flex items-center gap-3">

          <TransactionIcon
            type={transaction.type}
          />

          <div className="min-w-0">

            <p className="text-xs font-bold text-slate-800">
              {transaction.title}
            </p>

            <p className="mt-1 truncate text-[10px] text-slate-400">
              {transaction.reference}
            </p>

          </div>

        </div>

      </td>

      <td className="px-5 py-4">

        <div className="flex items-center gap-2">

          <span className="text-lg">
            {transaction.flag}
          </span>

          <div>

            <p className="text-xs font-bold text-slate-700">
              {transaction.plan}
            </p>

            <p className="mt-1 text-[10px] text-slate-400">
              {transaction.country}
            </p>

          </div>

        </div>

      </td>

      <td className="px-5 py-4">

        <p className="text-xs font-bold text-slate-800">
          {transaction.type ===
          "refund"
            ? "+"
            : "-"}
          {transaction.currency}{" "}
          {transaction.amount.toFixed(2)}
        </p>

        <p className="mt-1 text-[10px] text-slate-400">
          {transaction.paymentMethod}
        </p>

      </td>

      <td className="px-5 py-4">

        <StatusBadge
          status={transaction.status}
        />

      </td>

      <td className="px-5 py-4">

        <p className="whitespace-nowrap text-[11px] font-medium text-slate-600">
          {transaction.date}
        </p>

      </td>

      <td className="px-5 py-4 text-right">

        <button
          type="button"
          onClick={onView}
          className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-slate-200 px-3 text-[10px] font-bold text-slate-600 transition hover:bg-slate-50"
        >
          <Eye className="h-3.5 w-3.5" />
          View
        </button>

      </td>

    </tr>
  );
}

/* ========================================================================== */
/* MOBILE CARD                                                                  */
/* ========================================================================== */

function TransactionMobileCard({
  transaction,
  onView,
}: {
  transaction: Transaction;
  onView: () => void;
}) {
  return (
    <div className="p-5">

      <div className="flex items-start justify-between gap-3">

        <div className="flex items-center gap-3">

          <TransactionIcon
            type={transaction.type}
          />

          <div>

            <p className="text-xs font-bold text-slate-800">
              {transaction.title}
            </p>

            <p className="mt-1 text-[10px] text-slate-400">
              {transaction.reference}
            </p>

          </div>

        </div>

        <StatusBadge
          status={transaction.status}
        />

      </div>

      <div className="mt-4 rounded-xl bg-slate-50 p-4">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            <span className="text-lg">
              {transaction.flag}
            </span>

            <div>

              <p className="text-xs font-bold text-slate-700">
                {transaction.plan}
              </p>

              <p className="mt-1 text-[10px] text-slate-400">
                {transaction.country}
              </p>

            </div>

          </div>

          <p className="text-sm font-bold text-slate-800">
            {transaction.type ===
            "refund"
              ? "+"
              : "-"}
            {transaction.currency}{" "}
            {transaction.amount.toFixed(2)}
          </p>

        </div>

        <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3">

          <span className="text-[10px] text-slate-400">
            {transaction.date}
          </span>

          <button
            type="button"
            onClick={onView}
            className="inline-flex items-center gap-1 text-[10px] font-bold text-cyan-700"
          >
            View details
            <ChevronRight className="h-3 w-3" />
          </button>

        </div>

      </div>

    </div>
  );
}

/* ========================================================================== */
/* TRANSACTION ICON                                                             */
/* ========================================================================== */

function TransactionIcon({
  type,
}: {
  type: TransactionType;
}) {
  const config = {
    purchase: {
      icon: <ArrowUpRight />,
      classes:
        "bg-cyan-50 text-cyan-700",
    },

    renewal: {
      icon: <RefreshCw />,
      classes:
        "bg-violet-50 text-violet-600",
    },

    topup: {
      icon: <ArrowDownLeft />,
      classes:
        "bg-emerald-50 text-emerald-600",
    },

    refund: {
      icon: <ArrowDownLeft />,
      classes:
        "bg-amber-50 text-amber-600",
    },
  }[type];

  return (
    <div
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${config.classes}`}
    >
      {config.icon}
    </div>
  );
}

/* ========================================================================== */
/* STATUS BADGE                                                                 */
/* ========================================================================== */

function StatusBadge({
  status,
}: {
  status: TransactionStatus;
}) {
  const config = {
    completed: {
      label: "Completed",
      classes:
        "bg-emerald-50 text-emerald-600",
      dot: "bg-emerald-500",
    },

    pending: {
      label: "Pending",
      classes:
        "bg-amber-50 text-amber-600",
      dot: "bg-amber-500",
    },

    failed: {
      label: "Failed",
      classes:
        "bg-rose-50 text-rose-600",
      dot: "bg-rose-500",
    },

    refunded: {
      label: "Refunded",
      classes:
        "bg-violet-50 text-violet-600",
      dot: "bg-violet-500",
    },
  }[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-bold ${config.classes}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${config.dot}`}
      />

      {config.label}
    </span>
  );
}

/* ========================================================================== */
/* FILTER SELECT                                                                */
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
  options: string[][];
}) {
  return (
    <div>

      <label className="mb-2 block text-[10px] font-bold uppercase tracking-wide text-slate-400">
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
          className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-3 pr-10 text-xs font-semibold text-slate-700 outline-none focus:border-cyan-500"
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

/* ========================================================================== */
/* FILTER TAG                                                                   */
/* ========================================================================== */

function FilterTag({
  text,
  onRemove,
}: {
  text: string;
  onRemove: () => void;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1.5 text-[10px] font-semibold text-slate-600">

      {text}

      <button
        type="button"
        onClick={onRemove}
      >
        <X className="h-3 w-3" />
      </button>

    </span>
  );
}

/* ========================================================================== */
/* EMPTY STATE                                                                  */
/* ========================================================================== */

function EmptyState({
  onClear,
}: {
  onClear: () => void;
}) {
  return (
    <div className="p-12 text-center">

      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
        <FileText className="h-6 w-6" />
      </div>

      <h3 className="mt-4 text-sm font-bold text-slate-800">
        No transactions found
      </h3>

      <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-slate-400">
        We couldn't find transactions matching
        your current search or filters.
      </p>

      <button
        type="button"
        onClick={onClear}
        className="mt-5 inline-flex h-10 items-center justify-center rounded-xl bg-slate-900 px-4 text-xs font-bold text-white"
      >
        Clear filters
      </button>

    </div>
  );
}

/* ========================================================================== */
/* PAGINATION                                                                   */
/* ========================================================================== */

function Pagination({
  page,
  totalPages,
  onPrevious,
  onNext,
}: {
  page: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex flex-col gap-3 border-t border-slate-100 p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">

      <p className="text-[10px] text-slate-400">
        Page{" "}
        <span className="font-bold text-slate-700">
          {page}
        </span>{" "}
        of{" "}
        <span className="font-bold text-slate-700">
          {totalPages}
        </span>
      </p>

      <div className="flex items-center gap-2">

        <button
          type="button"
          disabled={page <= 1}
          onClick={onPrevious}
          className="inline-flex h-9 items-center gap-1 rounded-lg border border-slate-200 px-3 text-[10px] font-bold text-slate-600 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
          Previous
        </button>

        <button
          type="button"
          disabled={page >= totalPages}
          onClick={onNext}
          className="inline-flex h-9 items-center gap-1 rounded-lg border border-slate-200 px-3 text-[10px] font-bold text-slate-600 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
          <ChevronRight className="h-3.5 w-3.5" />
        </button>

      </div>

    </div>
  );
}

/* ========================================================================== */
/* ACTIVITY CARD                                                                */
/* ========================================================================== */

function ActivityCard({
  icon,
  title,
  description,
  time,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
}) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">

      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-slate-500 shadow-sm">
        {icon}
      </div>

      <p className="mt-4 text-xs font-bold text-slate-700">
        {title}
      </p>

      <p className="mt-1 text-[10px] leading-5 text-slate-400">
        {description}
      </p>

      <p className="mt-3 text-[9px] font-semibold text-slate-400">
        {time}
      </p>

    </div>
  );
}

/* ========================================================================== */
/* TRANSACTION DETAILS                                                          */
/* ========================================================================== */

function TransactionDetails({
  transaction,
  copied,
  onCopy,
  onClose,
}: {
  transaction: Transaction;
  copied: boolean;
  onCopy: () => void;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50">

      {/* OVERLAY */}

      <button
        type="button"
        aria-label="Close transaction details"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]"
      />

      {/* DRAWER */}

      <aside className="absolute right-0 top-0 flex h-full w-full max-w-xl flex-col bg-white shadow-2xl">

        {/* HEADER */}

        <div className="flex items-center justify-between border-b border-slate-100 p-5 sm:p-6">

          <div>

            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
              Transaction details
            </p>

            <h2 className="mt-1 text-lg font-bold text-slate-900">
              {transaction.title}
            </h2>

          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50"
          >
            <X className="h-4 w-4" />
          </button>

        </div>

        {/* CONTENT */}

        <div className="flex-1 overflow-y-auto p-5 sm:p-6">

          {/* STATUS */}

          <div className="rounded-2xl bg-slate-50 p-5">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <TransactionIcon
                  type={
                    transaction.type
                  }
                />

                <div>

                  <p className="text-xs font-bold text-slate-700">
                    {transaction.description}
                  </p>

                  <p className="mt-1 text-[10px] text-slate-400">
                    {transaction.country}
                  </p>

                </div>

              </div>

              <StatusBadge
                status={
                  transaction.status
                }
              />

            </div>

            <div className="mt-5 border-t border-slate-200 pt-5">

              <p className="text-[10px] uppercase tracking-wide text-slate-400">
                Amount
              </p>

              <p className="mt-1 text-2xl font-bold text-slate-900">
                {transaction.type ===
                "refund"
                  ? "+"
                  : "-"}
                {transaction.currency}{" "}
                {transaction.amount.toFixed(
                  2
                )}
              </p>

            </div>

          </div>

          {/* REFERENCE */}

          <div className="mt-5">

            <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-slate-400">
              Transaction reference
            </p>

            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-3">

              <Hash className="h-4 w-4 shrink-0 text-slate-400" />

              <span className="min-w-0 flex-1 truncate font-mono text-xs font-semibold text-slate-700">
                {transaction.reference}
              </span>

              <button
                type="button"
                onClick={onCopy}
                className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-lg bg-slate-900 px-3 text-[10px] font-bold text-white"
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    Copy
                  </>
                )}
              </button>

            </div>

          </div>

          {/* DETAILS */}

          <div className="mt-5 rounded-2xl border border-slate-200">

            <DetailRow
              label="Transaction type"
              value={capitalize(
                transaction.type
              )}
            />

            <DetailRow
              label="eSIM / Plan"
              value={transaction.plan}
            />

            <DetailRow
              label="Country"
              value={`${transaction.flag} ${transaction.country}`}
            />

            <DetailRow
              label="Payment method"
              value={
                transaction.paymentMethod
              }
            />

            <DetailRow
              label="Date"
              value={transaction.date}
            />

            <DetailRow
              label="Transaction ID"
              value={transaction.id}
              mono
            />

            {transaction.esimId && (
              <DetailRow
                label="eSIM ID"
                value={
                  transaction.esimId
                }
                mono
              />
            )}

          </div>

          {/* TIMELINE */}

          <div className="mt-6">

            <div className="flex items-center gap-2">

              <Activity className="h-4 w-4 text-slate-400" />

              <h3 className="text-xs font-bold text-slate-800">
                Transaction activity
              </h3>

            </div>

            <div className="mt-5 space-y-5">

              <TimelineItem
                title="Transaction created"
                description="Payment request was created."
                time={transaction.date}
                active
              />

              <TimelineItem
                title="Payment processed"
                description="Payment was processed through your selected payment method."
                time={transaction.date}
                active={
                  transaction.status !==
                  "pending"
                }
              />

              <TimelineItem
                title={
                  transaction.status ===
                  "failed"
                    ? "Payment failed"
                    : transaction.status ===
                      "refunded"
                    ? "Payment refunded"
                    : "Transaction completed"
                }
                description={
                  transaction.status ===
                  "failed"
                    ? "The transaction could not be completed."
                    : transaction.status ===
                      "refunded"
                    ? "Funds were returned to your wallet."
                    : "The eSIM transaction was successfully completed."
                }
                time={transaction.date}
                active={
                  transaction.status !==
                  "pending"
                }
                last
              />

            </div>

          </div>

        </div>

        {/* FOOTER */}

        <div className="border-t border-slate-100 p-5 sm:p-6">

          <button
            type="button"
            onClick={onClose}
            className="h-11 w-full rounded-xl bg-slate-900 text-xs font-bold text-white hover:bg-slate-800"
          >
            Done
          </button>

        </div>

      </aside>

    </div>
  );
}

/* ========================================================================== */
/* DETAIL ROW                                                                  */
/* ========================================================================== */

function DetailRow({
  label,
  value,
  mono = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-5 border-b border-slate-100 p-4 last:border-0">

      <span className="text-[10px] text-slate-400">
        {label}
      </span>

      <span
        className={`max-w-[60%] break-all text-right text-xs font-semibold text-slate-700 ${
          mono
            ? "font-mono"
            : ""
        }`}
      >
        {value}
      </span>

    </div>
  );
}

/* ========================================================================== */
/* TIMELINE ITEM                                                               */
/* ========================================================================== */

function TimelineItem({
  title,
  description,
  time,
  active,
  last = false,
}: {
  title: string;
  description: string;
  time: string;
  active: boolean;
  last?: boolean;
}) {
  return (
    <div className="relative flex gap-3">

      {!last && (
        <div className="absolute left-[7px] top-5 h-full w-px bg-slate-200" />
      )}

      <div
        className={`relative z-10 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
          active
            ? "bg-emerald-500"
            : "border-2 border-slate-200 bg-white"
        }`}
      >
        {active && (
          <Check className="h-2.5 w-2.5 text-white" />
        )}
      </div>

      <div className="pb-4">

        <p className="text-xs font-bold text-slate-700">
          {title}
        </p>

        <p className="mt-1 text-[10px] leading-5 text-slate-400">
          {description}
        </p>

        <p className="mt-1 text-[9px] font-semibold text-slate-400">
          {time}
        </p>

      </div>

    </div>
  );
}

/* ========================================================================== */
/* HELPERS                                                                      */
/* ========================================================================== */

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function matchesDateRange(
  dateString: string,
  range: string
) {
  /*
    Replace this with real server-side date
    filtering when connected to PostgreSQL.

    This demo keeps the UI functional.
  */

  if (range === "7") {
    return true;
  }

  if (range === "30") {
    return true;
  }

  if (range === "90") {
    return true;
  }

  return true;
}