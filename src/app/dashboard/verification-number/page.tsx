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
  Globe2,
  History,
  Inbox,
  MoreHorizontal,
  Phone,
  Plus,
  RefreshCw,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  Wallet,
  XCircle,
  Zap,
} from "lucide-react";
import { useMemo, useState } from "react";

type ActivityStatus =
  | "completed"
  | "active"
  | "expired"
  | "failed";

type VerificationActivity = {
  id: string;
  service: string;
  phone: string;
  country: string;
  flag: string;
  status: ActivityStatus;
  amount: number;
  time: string;
  otp?: string;
};

const activities: VerificationActivity[] = [
  {
    id: "ACT-93821",
    service: "Google",
    phone: "+1 202 555 0187",
    country: "United States",
    flag: "🇺🇸",
    status: "completed",
    amount: 0.85,
    time: "2 mins ago",
    otp: "482913",
  },
  {
    id: "ACT-93820",
    service: "Telegram",
    phone: "+44 7700 900123",
    country: "United Kingdom",
    flag: "🇬🇧",
    status: "active",
    amount: 0.72,
    time: "8 mins ago",
  },
  {
    id: "ACT-93819",
    service: "WhatsApp",
    phone: "+33 6 12 34 56 78",
    country: "France",
    flag: "🇫🇷",
    status: "completed",
    amount: 0.68,
    time: "24 mins ago",
    otp: "193820",
  },
  {
    id: "ACT-93818",
    service: "Microsoft",
    phone: "+49 151 23456789",
    country: "Germany",
    flag: "🇩🇪",
    status: "expired",
    amount: 0.91,
    time: "1 hour ago",
  },
  {
    id: "ACT-93817",
    service: "Facebook",
    phone: "+234 803 123 4567",
    country: "Nigeria",
    flag: "🇳🇬",
    status: "completed",
    amount: 0.55,
    time: "2 hours ago",
    otp: "739201",
  },
];

const services = [
  {
    name: "Google",
    category: "Account verification",
    icon: "G",
    color: "bg-red-50 text-red-600",
  },
  {
    name: "WhatsApp",
    category: "Messaging",
    icon: "W",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    name: "Telegram",
    category: "Messaging",
    icon: "T",
    color: "bg-sky-50 text-sky-600",
  },
  {
    name: "Facebook",
    category: "Social",
    icon: "f",
    color: "bg-blue-50 text-blue-600",
  },
  {
    name: "Microsoft",
    category: "Account verification",
    icon: "M",
    color: "bg-orange-50 text-orange-600",
  },
  {
    name: "Discord",
    category: "Community",
    icon: "D",
    color: "bg-indigo-50 text-indigo-600",
  },
];

const countries = [
  {
    country: "United States",
    flag: "🇺🇸",
    numbers: "1,240+",
    price: "$0.85",
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    numbers: "820+",
    price: "$0.72",
  },
  {
    country: "Nigeria",
    flag: "🇳🇬",
    numbers: "640+",
    price: "$0.55",
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    numbers: "510+",
    price: "$0.91",
  },
];

export default function VerificationHomePage() {
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");

  const filteredActivities = useMemo(() => {
    if (!search.trim()) return activities;

    const query = search.toLowerCase();

    return activities.filter(
      (item) =>
        item.service.toLowerCase().includes(query) ||
        item.phone.toLowerCase().includes(query) ||
        item.country.toLowerCase().includes(query) ||
        item.id.toLowerCase().includes(query)
    );
  }, [search]);

  async function handleRefresh() {
    setRefreshing(true);

    /*
      Production:

      const response = await fetch(
        "/api/verification/dashboard",
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
                  Verification
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 sm:flex">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <div>
                  <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    Verification Dashboard
                  </h1>

                  <p className="mt-1 text-sm text-slate-500 sm:text-base">
                    Manage verification numbers, SMS and
                    activation activity from one place.
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
                href="/verification/buy"
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#0f766e] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b625b]"
              >
                <Plus className="h-4 w-4" />
                Buy Number
              </a>
            </div>
          </div>
        </header>

        {/* ========================================================= */}
        {/* BALANCE + QUICK ACTION */}
        {/* ========================================================= */}

        <section className="mb-6 grid gap-5 lg:grid-cols-[1.5fr_1fr]">

          {/* Balance Card */}
          <div className="relative overflow-hidden rounded-2xl bg-[#092f36] p-6 text-white shadow-sm sm:p-7">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-teal-400/10 blur-2xl" />
            <div className="absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-cyan-300/10 blur-2xl" />

            <div className="relative">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 text-sm text-white/65">
                    <Wallet className="h-4 w-4" />
                    Verification Balance
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
                      <TrendingUp className="h-3 w-3" />
                    </span>

                    Available for verification purchases
                  </div>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <Wallet className="h-5 w-5 text-teal-200" />
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
                  href="/verification/history"
                  className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <History className="h-4 w-4" />
                  View History
                </a>
              </div>
            </div>
          </div>

          {/* Quick Action */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                <Zap className="h-5 w-5" />
              </div>

              <div>
                <h2 className="font-bold text-slate-900">
                  Quick actions
                </h2>

                <p className="text-xs text-slate-400">
                  Get things done faster
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <QuickAction
                href="/verification/buy"
                icon={<Phone className="h-4 w-4" />}
                title="Buy Number"
                description="Get a new number"
              />

              <QuickAction
                href="/verification/active"
                icon={<Smartphone className="h-4 w-4" />}
                title="Active Numbers"
                description="Manage numbers"
              />

              <QuickAction
                href="/verification/sms"
                icon={<Inbox className="h-4 w-4" />}
                title="SMS Inbox"
                description="View messages"
              />

              <QuickAction
                href="/verification/history"
                icon={<History className="h-4 w-4" />}
                title="History"
                description="View activity"
              />
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* STATS */}
        {/* ========================================================= */}

        <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <DashboardStat
            title="Active Numbers"
            value="3"
            change="+1 today"
            icon={<Smartphone className="h-5 w-5" />}
          />

          <DashboardStat
            title="SMS Received"
            value="18"
            change="+6 today"
            icon={<Inbox className="h-5 w-5" />}
            positive
          />

          <DashboardStat
            title="Completed"
            value="96"
            change="+12 this month"
            icon={<CheckCircle2 className="h-5 w-5" />}
            positive
          />

          <DashboardStat
            title="Total Spent"
            value="$84.32"
            change="+$12.50 this week"
            icon={<BarChart3 className="h-5 w-5" />}
          />
        </section>

        {/* ========================================================= */}
        {/* PERFORMANCE */}
        {/* ========================================================= */}

        <section className="mb-6 grid gap-5 xl:grid-cols-[1.5fr_1fr]">

          {/* Chart */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-bold text-slate-900">
                  Verification activity
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Your verification activity over the
                  last 7 days.
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

            <ActivityChart />
          </div>

          {/* Success rate */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold text-slate-900">
                  Verification success
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Overall success rate
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <CheckCircle2 className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-7 flex items-center justify-center">
              <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-[14px] border-emerald-100">
                <div className="absolute inset-[-14px] rounded-full border-[14px] border-transparent border-r-emerald-500 border-t-emerald-500 rotate-[-25deg]" />

                <div className="text-center">
                  <p className="text-3xl font-bold text-slate-900">
                    92%
                  </p>

                  <p className="text-xs text-slate-400">
                    success rate
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <MiniMetric
                label="Completed"
                value="96"
                icon={<CheckCircle2 className="h-4 w-4" />}
              />

              <MiniMetric
                label="Failed"
                value="8"
                icon={<XCircle className="h-4 w-4" />}
              />
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* RECENT ACTIVITY + SERVICES */}
        {/* ========================================================= */}

        <section className="grid gap-5 xl:grid-cols-[1.5fr_1fr]">

          {/* Recent Activity */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

            <div className="border-b border-slate-200 p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-bold text-slate-900">
                    Recent activity
                  </h2>

                  <p className="mt-1 text-sm text-slate-400">
                    Your latest verification transactions.
                  </p>
                </div>

                <a
                  href="/verification/history"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:text-teal-800"
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
                  placeholder="Search recent activity..."
                  className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-4 text-sm outline-none transition focus:border-teal-600 focus:bg-white focus:ring-4 focus:ring-teal-600/10"
                />
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {filteredActivities.map((item) => (
                <ActivityRow
                  key={item.id}
                  item={item}
                  onCopy={() => copy(item.phone)}
                />
              ))}

              {filteredActivities.length === 0 && (
                <div className="px-6 py-12 text-center">
                  <Search className="mx-auto h-8 w-8 text-slate-300" />

                  <p className="mt-3 text-sm font-semibold text-slate-700">
                    No activity found
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Try another search term.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Services */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold text-slate-900">
                  Popular services
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Frequently used verification services.
                </p>
              </div>

              <a
                href="/verification/buy"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition hover:bg-teal-50 hover:text-teal-700"
              >
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-5 space-y-2">
              {services.map((service) => (
                <button
                  key={service.name}
                  type="button"
                  className="flex w-full items-center gap-3 rounded-xl p-3 text-left transition hover:bg-slate-50"
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold ${service.color}`}
                  >
                    {service.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-slate-800">
                      {service.name}
                    </p>

                    <p className="mt-0.5 truncate text-xs text-slate-400">
                      {service.category}
                    </p>
                  </div>

                  <ChevronRight className="h-4 w-4 text-slate-300" />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* COUNTRIES */}
        {/* ========================================================= */}

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Globe2 className="h-5 w-5 text-teal-700" />

                <h2 className="font-bold text-slate-900">
                  Available countries
                </h2>
              </div>

              <p className="mt-1 text-sm text-slate-400">
                Browse available verification numbers by
                country.
              </p>
            </div>

            <a
              href="/verification/buy"
              className="inline-flex items-center gap-1 text-sm font-semibold text-teal-700"
            >
              Browse all
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {countries.map((item) => (
              <button
                key={item.country}
                type="button"
                className="group flex items-center gap-3 rounded-xl border border-slate-200 p-4 text-left transition hover:border-teal-200 hover:bg-teal-50/40"
              >
                <span className="text-2xl">
                  {item.flag}
                </span>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-800">
                    {item.country}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {item.numbers} numbers
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm font-bold text-slate-800">
                    {item.price}
                  </p>

                  <p className="text-[10px] text-slate-400">
                    from
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* INFO BANNER */}
        {/* ========================================================= */}

        <section className="mt-5 overflow-hidden rounded-2xl border border-teal-100 bg-teal-50/60 p-5 sm:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-teal-700 shadow-sm">
                <Sparkles className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-semibold text-teal-950">
                  Need a number for a specific service?
                </h3>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-teal-800/70">
                  Search thousands of verification numbers
                  across supported countries and services.
                </p>
              </div>
            </div>

            <a
              href="/verification/buy"
              className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl bg-teal-700 px-4 text-sm font-semibold text-white transition hover:bg-teal-800"
            >
              Find a Number
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

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
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
      className="group rounded-xl border border-slate-200 p-3 transition hover:border-teal-200 hover:bg-teal-50/40"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-600 transition group-hover:bg-teal-100 group-hover:text-teal-700">
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

function MiniMetric({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-3">
      <div className="flex items-center gap-2 text-xs text-slate-400">
        {icon}
        {label}
      </div>

      <p className="mt-1 text-lg font-bold text-slate-800">
        {value}
      </p>
    </div>
  );
}

function ActivityRow({
  item,
  onCopy,
}: {
  item: VerificationActivity;
  onCopy: () => void;
}) {
  return (
    <div className="flex items-center gap-3 px-5 py-4 transition hover:bg-slate-50 sm:px-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-lg">
        {item.flag}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-semibold text-slate-800">
            {item.service}
          </p>

          <StatusPill status={item.status} />
        </div>

        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-400">
          <span>{item.phone}</span>

          <span>•</span>

          <span>{item.time}</span>
        </div>
      </div>

      {item.otp && (
        <button
          type="button"
          onClick={onCopy}
          className="hidden items-center gap-1.5 rounded-lg bg-teal-50 px-2.5 py-1.5 font-mono text-xs font-bold text-teal-700 transition hover:bg-teal-100 sm:flex"
        >
          {item.otp}
          <Copy className="h-3 w-3" />
        </button>
      )}

      <div className="text-right">
        <p className="text-sm font-semibold text-slate-700">
          ${item.amount.toFixed(2)}
        </p>

        <p className="font-mono text-[9px] text-slate-400">
          {item.id}
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

function StatusPill({
  status,
}: {
  status: ActivityStatus;
}) {
  const config = {
    completed: {
      label: "Completed",
      className: "bg-emerald-50 text-emerald-700",
    },
    active: {
      label: "Active",
      className: "bg-blue-50 text-blue-700",
    },
    expired: {
      label: "Expired",
      className: "bg-amber-50 text-amber-700",
    },
    failed: {
      label: "Failed",
      className: "bg-red-50 text-red-700",
    },
  }[status];

  return (
    <span
      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${config.className}`}
    >
      {config.label}
    </span>
  );
}

function ActivityChart() {
  const values = [42, 58, 46, 75, 62, 88, 71];

  return (
    <div className="mt-7">
      <div className="flex h-[190px] items-end gap-2 sm:gap-4">
        {values.map((value, index) => (
          <div
            key={index}
            className="flex h-full flex-1 flex-col justify-end"
          >
            <div className="mb-2 text-center text-[10px] text-slate-400">
              {value}
            </div>

            <div
              className="w-full rounded-t-lg bg-teal-600/80 transition hover:bg-teal-700"
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