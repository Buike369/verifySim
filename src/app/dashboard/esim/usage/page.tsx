"use client";

import {
  Activity,
  AlertCircle,
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUp,
  ArrowUpFromLine,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Download,
  Globe2,
  Info,
  MoreHorizontal,
  RefreshCw,
  Search,
  Signal,
  Smartphone,
  TrendingDown,
  TrendingUp,
  Wifi,
  X,
  Zap,
} from "lucide-react";

import { useMemo, useState } from "react";

type EsimStatus =
  | "active"
  | "expired"
  | "not_activated"
  | "suspended";

type UsageRecord = {
  date: string;
  label: string;
  download: number;
  upload: number;
};

type EsimUsage = {
  id: string;
  country: string;
  flag: string;
  planName: string;

  status: EsimStatus;

  dataTotal: number;
  dataUsed: number;

  network: string;

  iccid: string;

  daysRemaining: number;
  expiryDate: string;

  purchaseDate: string;

  usage: UsageRecord[];
};

const esimUsageData: EsimUsage[] = [
  {
    id: "esim_usa_001",

    country: "United States",
    flag: "🇺🇸",

    planName: "USA 10GB",

    status: "active",

    dataTotal: 10,
    dataUsed: 3.7,

    network: "T-Mobile",

    iccid: "8944201234567890123",

    daysRemaining: 18,
    expiryDate: "Aug 31, 2026",

    purchaseDate: "Aug 02, 2026",

    usage: [
      {
        date: "2026-08-12",
        label: "Today",
        download: 0.38,
        upload: 0.08,
      },
      {
        date: "2026-08-11",
        label: "Yesterday",
        download: 0.62,
        upload: 0.12,
      },
      {
        date: "2026-08-10",
        label: "Aug 10",
        download: 0.71,
        upload: 0.15,
      },
      {
        date: "2026-08-09",
        label: "Aug 09",
        download: 0.42,
        upload: 0.09,
      },
      {
        date: "2026-08-08",
        label: "Aug 08",
        download: 0.33,
        upload: 0.07,
      },
      {
        date: "2026-08-07",
        label: "Aug 07",
        download: 0.51,
        upload: 0.11,
      },
      {
        date: "2026-08-06",
        label: "Aug 06",
        download: 0.29,
        upload: 0.06,
      },
    ],
  },

  {
    id: "esim_uk_001",

    country: "United Kingdom",
    flag: "🇬🇧",

    planName: "UK 5GB",

    status: "active",

    dataTotal: 5,
    dataUsed: 1.8,

    network: "EE",

    iccid: "8944201234567890456",

    daysRemaining: 7,
    expiryDate: "Aug 19, 2026",

    purchaseDate: "Aug 04, 2026",

    usage: [
      {
        date: "2026-08-12",
        label: "Today",
        download: 0.22,
        upload: 0.04,
      },
      {
        date: "2026-08-11",
        label: "Yesterday",
        download: 0.34,
        upload: 0.08,
      },
      {
        date: "2026-08-10",
        label: "Aug 10",
        download: 0.28,
        upload: 0.05,
      },
      {
        date: "2026-08-09",
        label: "Aug 09",
        download: 0.21,
        upload: 0.04,
      },
      {
        date: "2026-08-08",
        label: "Aug 08",
        download: 0.31,
        upload: 0.06,
      },
    ],
  },

  {
    id: "esim_france_001",

    country: "France",
    flag: "🇫🇷",

    planName: "France 10GB",

    status: "active",

    dataTotal: 10,
    dataUsed: 9.2,

    network: "Orange",

    iccid: "8944201234567890789",

    daysRemaining: 3,
    expiryDate: "Aug 15, 2026",

    purchaseDate: "Jul 16, 2026",

    usage: [
      {
        date: "2026-08-12",
        label: "Today",
        download: 0.41,
        upload: 0.09,
      },
      {
        date: "2026-08-11",
        label: "Yesterday",
        download: 0.52,
        upload: 0.12,
      },
      {
        date: "2026-08-10",
        label: "Aug 10",
        download: 0.72,
        upload: 0.14,
      },
      {
        date: "2026-08-09",
        label: "Aug 09",
        download: 0.83,
        upload: 0.16,
      },
      {
        date: "2026-08-08",
        label: "Aug 08",
        download: 0.64,
        upload: 0.11,
      },
    ],
  },
];

export default function EsimUsagePage() {
  const [selectedId, setSelectedId] =
    useState(esimUsageData[0].id);

  const [range, setRange] = useState<
    "7d" | "14d" | "30d"
  >("7d");

  const [search, setSearch] = useState("");

  const [showRefresh, setShowRefresh] =
    useState(false);

  const [showDetails, setShowDetails] =
    useState(false);

  const selectedEsim =
    esimUsageData.find(
      (esim) => esim.id === selectedId
    ) ?? esimUsageData[0];

  const filteredEsims = useMemo(() => {
    if (!search.trim()) {
      return esimUsageData;
    }

    const query =
      search.toLowerCase();

    return esimUsageData.filter(
      (esim) =>
        esim.country
          .toLowerCase()
          .includes(query) ||
        esim.planName
          .toLowerCase()
          .includes(query) ||
        esim.network
          .toLowerCase()
          .includes(query)
    );
  }, [search]);

  const totalUsed = esimUsageData.reduce(
    (sum, esim) => sum + esim.dataUsed,
    0
  );

  const totalAllowance =
    esimUsageData.reduce(
      (sum, esim) => sum + esim.dataTotal,
      0
    );

  const totalRemaining =
    totalAllowance - totalUsed;

  const usagePercentage =
    selectedEsim.dataTotal > 0
      ? (selectedEsim.dataUsed /
          selectedEsim.dataTotal) *
        100
      : 0;

  const selectedDownload =
    selectedEsim.usage.reduce(
      (sum, item) => sum + item.download,
      0
    );

  const selectedUpload =
    selectedEsim.usage.reduce(
      (sum, item) => sum + item.upload,
      0
    );

  const today =
    selectedEsim.usage[0];

  const todayTotal =
    today.download + today.upload;

  const averageDaily =
    selectedEsim.usage.length > 0
      ? selectedEsim.dataUsed /
        selectedEsim.usage.length
      : 0;

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-900">

      <div className="mx-auto w-full max-w-[1500px] px-4 py-5 sm:px-6 lg:px-8 lg:py-8">

        {/* ===================================================== */}
        {/* BREADCRUMB */}
        {/* ===================================================== */}

        <div className="mb-5 flex items-center gap-2 text-sm text-slate-400">

          <a
            href="/esim"
            className="transition hover:text-cyan-700"
          >
            Data eSIM
          </a>

          <ChevronRight className="h-4 w-4" />

          <span className="font-medium text-slate-700">
            Usage
          </span>

        </div>

        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}

        <section className="mb-7">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                  <Activity className="h-6 w-6" />
                </div>

                <div>

                  <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    Data Usage
                  </h1>

                  <p className="mt-1 text-sm text-slate-500 sm:text-base">
                    Monitor your eSIM data consumption,
                    remaining allowance, and network activity.
                  </p>

                </div>

              </div>

            </div>

            <button
              type="button"
              onClick={() => {
                setShowRefresh(true);

                setTimeout(() => {
                  setShowRefresh(false);
                }, 1200);
              }}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              <RefreshCw
                className={`h-4 w-4 ${
                  showRefresh
                    ? "animate-spin"
                    : ""
                }`}
              />

              {showRefresh
                ? "Updating..."
                : "Refresh usage"}
            </button>

          </div>

        </section>

        {/* ===================================================== */}
        {/* GLOBAL STATS */}
        {/* ===================================================== */}

        <section className="mb-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <UsageStat
            icon={
              <Smartphone className="h-5 w-5" />
            }
            label="Active eSIMs"
            value={String(
              esimUsageData.filter(
                (e) => e.status === "active"
              ).length
            )}
            description="Currently connected"
          />

          <UsageStat
            icon={
              <ArrowDownToLine className="h-5 w-5" />
            }
            label="Total data used"
            value={`${totalUsed.toFixed(1)} GB`}
            description={`of ${totalAllowance} GB allowance`}
          />

          <UsageStat
            icon={
              <Wifi className="h-5 w-5" />
            }
            label="Data remaining"
            value={`${totalRemaining.toFixed(1)} GB`}
            description="Across active plans"
            positive
          />

          <UsageStat
            icon={
              <TrendingUp className="h-5 w-5" />
            }
            label="Average daily usage"
            value={`${averageDaily.toFixed(2)} GB`}
            description="Based on recent activity"
          />

        </section>

        {/* ===================================================== */}
        {/* ESIM SELECTOR */}
        {/* ===================================================== */}

        <section className="mb-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                <Globe2 className="h-5 w-5" />
              </div>

              <div>

                <p className="text-xs text-slate-400">
                  Viewing usage for
                </p>

                <p className="text-sm font-bold text-slate-800">
                  {selectedEsim.flag}{" "}
                  {selectedEsim.planName}
                </p>

              </div>

            </div>

            <div className="flex flex-col gap-2 sm:flex-row">

              {/* Search */}

              <div className="relative">

                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  placeholder="Search plans..."
                  className="h-10 w-full rounded-xl border border-slate-200 pl-9 pr-3 text-xs outline-none focus:border-cyan-600 focus:ring-4 focus:ring-cyan-600/10 sm:w-[220px]"
                />

              </div>

              {/* Select */}

              <div className="relative">

                <select
                  value={selectedId}
                  onChange={(e) =>
                    setSelectedId(
                      e.target.value
                    )
                  }
                  className="h-10 w-full appearance-none rounded-xl border border-slate-200 bg-white px-3 pr-9 text-xs font-semibold text-slate-700 outline-none focus:border-cyan-600 sm:w-[230px]"
                >
                  {filteredEsims.map(
                    (esim) => (
                      <option
                        key={esim.id}
                        value={esim.id}
                      >
                        {esim.flag}{" "}
                        {esim.planName}
                      </option>
                    )
                  )}
                </select>

                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================== */}
        {/* MAIN USAGE CARD */}
        {/* ===================================================== */}

        <section className="mb-5 grid gap-5 xl:grid-cols-[1.4fr_0.6fr]">

          {/* Main */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

              <div>

                <div className="flex items-center gap-3">

                  <div className="text-3xl">
                    {selectedEsim.flag}
                  </div>

                  <div>

                    <div className="flex items-center gap-2">

                      <h2 className="text-lg font-bold text-slate-900">
                        {selectedEsim.planName}
                      </h2>

                      <StatusBadge
                        status={
                          selectedEsim.status
                        }
                      />

                    </div>

                    <p className="mt-1 text-xs text-slate-400">
                      {selectedEsim.country} ·{" "}
                      {selectedEsim.network}
                    </p>

                  </div>

                </div>

              </div>

              <button
                type="button"
                onClick={() =>
                  setShowDetails(true)
                }
                className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 text-xs font-semibold text-slate-600 hover:bg-slate-50"
              >
                <Info className="h-3.5 w-3.5" />
                Plan details
              </button>

            </div>

            {/* Usage summary */}

            <div className="mt-8 grid gap-6 md:grid-cols-[1fr_180px] md:items-center">

              <div>

                <div className="flex items-end justify-between">

                  <div>

                    <p className="text-xs text-slate-400">
                      Data consumed
                    </p>

                    <p className="mt-1 text-4xl font-bold tracking-tight text-slate-900">

                      {selectedEsim.dataUsed.toFixed(
                        1
                      )}

                      <span className="ml-1 text-base font-medium text-slate-400">
                        GB
                      </span>

                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-xs text-slate-400">
                      Remaining
                    </p>

                    <p className="mt-1 text-lg font-bold text-cyan-700">

                      {(
                        selectedEsim.dataTotal -
                        selectedEsim.dataUsed
                      ).toFixed(1)}{" "}
                      GB

                    </p>

                  </div>

                </div>

                <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100">

                  <div
                    className={`h-full rounded-full transition-all ${
                      usagePercentage >=
                      90
                        ? "bg-rose-500"
                        : usagePercentage >=
                            75
                          ? "bg-amber-500"
                          : "bg-cyan-600"
                    }`}
                    style={{
                      width: `${usagePercentage}%`,
                    }}
                  />

                </div>

                <div className="mt-3 flex justify-between text-xs text-slate-400">

                  <span>
                    {usagePercentage.toFixed(
                      0
                    )}
                    % used
                  </span>

                  <span>
                    {selectedEsim.dataTotal} GB total
                  </span>

                </div>

              </div>

              {/* Circular indicator */}

              <UsageCircle
                percentage={
                  usagePercentage
                }
              />

            </div>

            {/* Warning */}

            {usagePercentage >= 80 && (
              <div className="mt-6 flex gap-3 rounded-xl border border-amber-100 bg-amber-50 p-4">

                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />

                <div>

                  <p className="text-xs font-bold text-amber-800">
                    You're running low on data
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-amber-700">
                    You've used{" "}
                    {usagePercentage.toFixed(
                      0
                    )}
                    % of your allowance. Consider
                    topping up before your data runs out.
                  </p>

                </div>

              </div>
            )}

            {/* Actions */}

            <div className="mt-6 flex flex-col gap-2 border-t border-slate-100 pt-5 sm:flex-row">

              <a
                href={`/esim/top-up?esim=${selectedEsim.id}`}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-cyan-700 px-4 text-xs font-bold text-white hover:bg-cyan-800"
              >
                <Zap className="h-4 w-4" />
                Top up data
              </a>

              <a
                href={`/esim/manage/${selectedEsim.id}`}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                Manage eSIM
                <ArrowRight className="h-4 w-4" />
              </a>

            </div>

          </div>

          {/* Validity card */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                <CalendarDays className="h-5 w-5" />
              </div>

              <StatusBadge
                status={
                  selectedEsim.status
                }
              />

            </div>

            <p className="mt-6 text-xs text-slate-400">
              Validity
            </p>

            <p className="mt-1 text-3xl font-bold text-slate-900">
              {selectedEsim.daysRemaining}
            </p>

            <p className="mt-1 text-xs text-slate-400">
              days remaining
            </p>

            <div className="mt-6 rounded-xl bg-slate-50 p-4">

              <div className="flex justify-between">

                <span className="text-xs text-slate-400">
                  Expiry date
                </span>

                <span className="text-xs font-bold text-slate-700">
                  {selectedEsim.expiryDate}
                </span>

              </div>

            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">

              <Clock3 className="h-3.5 w-3.5" />

              Valid until expiry date

            </div>

          </div>

        </section>

        {/* ===================================================== */}
        {/* DAILY USAGE */}
        {/* ===================================================== */}

        <section className="grid gap-5 xl:grid-cols-[1.35fr_0.65fr]">

          {/* Activity chart */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <h2 className="text-base font-bold text-slate-900">
                  Usage activity
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Daily data consumption
                </p>

              </div>

              <div className="flex rounded-lg border border-slate-200 bg-slate-50 p-1">

                {(
                  [
                    ["7d", "7 days"],
                    ["14d", "14 days"],
                    ["30d", "30 days"],
                  ] as const
                ).map(
                  ([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() =>
                        setRange(value)
                      }
                      className={`rounded-md px-3 py-1.5 text-[10px] font-bold transition ${
                        range === value
                          ? "bg-white text-slate-800 shadow-sm"
                          : "text-slate-400"
                      }`}
                    >
                      {label}
                    </button>
                  )
                )}

              </div>

            </div>

            {/* Chart */}

            <UsageChart
              usage={
                selectedEsim.usage
              }
            />

            <div className="mt-4 flex flex-wrap items-center gap-4 text-[10px] text-slate-400">

              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-cyan-600" />
                Download
              </span>

              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-slate-300" />
                Upload
              </span>

            </div>

          </div>

          {/* Network stats */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-base font-bold text-slate-900">
                  Usage breakdown
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Current plan activity
                </p>

              </div>

              <MoreHorizontal className="h-5 w-5 text-slate-300" />

            </div>

            <div className="mt-6 space-y-5">

              <BreakdownItem
                icon={
                  <ArrowDownToLine className="h-4 w-4" />
                }
                label="Download"
                value={`${selectedDownload.toFixed(
                  2
                )} GB`}
                percentage={
                  selectedDownload +
                    selectedUpload >
                  0
                    ? (selectedDownload /
                        (selectedDownload +
                          selectedUpload)) *
                      100
                    : 0
                }
              />

              <BreakdownItem
                icon={
                  <ArrowUpFromLine className="h-4 w-4" />
                }
                label="Upload"
                value={`${selectedUpload.toFixed(
                  2
                )} GB`}
                percentage={
                  selectedDownload +
                    selectedUpload >
                  0
                    ? (selectedUpload /
                        (selectedDownload +
                          selectedUpload)) *
                      100
                    : 0
                }
              />

              <BreakdownItem
                icon={
                  <Smartphone className="h-4 w-4" />
                }
                label="Today's usage"
                value={`${todayTotal.toFixed(
                  2
                )} GB`}
                percentage={
                  selectedEsim.dataTotal >
                  0
                    ? (todayTotal /
                        selectedEsim.dataTotal) *
                      100
                    : 0
                }
              />

            </div>

            <div className="mt-7 rounded-xl border border-slate-100 bg-slate-50 p-4">

              <div className="flex items-start gap-3">

                <Signal className="mt-0.5 h-4 w-4 text-cyan-600" />

                <div>

                  <p className="text-xs font-bold text-slate-700">
                    Connected network
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {selectedEsim.network}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================== */}
        {/* USAGE HISTORY TABLE */}
        {/* ===================================================== */}

        <section className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          <div className="flex flex-col gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <h2 className="text-base font-bold text-slate-900">
                Usage history
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Detailed activity for {selectedEsim.planName}
              </p>

            </div>

            <button
              type="button"
              className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 text-xs font-semibold text-slate-600 hover:bg-slate-50"
              onClick={() =>
                alert(
                  "Connect this action to your CSV export endpoint."
                )
              }
            >
              <Download className="h-3.5 w-3.5" />
              Export
            </button>

          </div>

          {/* Desktop table */}

          <div className="hidden overflow-x-auto md:block">

            <table className="w-full">

              <thead>

                <tr className="border-b border-slate-100 bg-slate-50/70">

                  <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wide text-slate-400">
                    Date
                  </th>

                  <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wide text-slate-400">
                    Download
                  </th>

                  <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wide text-slate-400">
                    Upload
                  </th>

                  <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wide text-slate-400">
                    Total
                  </th>

                  <th className="px-5 py-3 text-right text-[10px] font-bold uppercase tracking-wide text-slate-400">
                    Status
                  </th>

                </tr>

              </thead>

              <tbody>

                {selectedEsim.usage.map(
                  (item) => {

                    const total =
                      item.download +
                      item.upload;

                    return (
                      <tr
                        key={item.date}
                        className="border-b border-slate-50 last:border-0"
                      >

                        <td className="px-5 py-4">

                          <div className="flex items-center gap-3">

                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
                              <CalendarDays className="h-4 w-4" />
                            </div>

                            <div>

                              <p className="text-xs font-semibold text-slate-700">
                                {item.label}
                              </p>

                              <p className="mt-0.5 text-[10px] text-slate-400">
                                {item.date}
                              </p>

                            </div>

                          </div>

                        </td>

                        <td className="px-5 py-4 text-xs font-semibold text-slate-700">
                          {item.download.toFixed(
                            2
                          )}{" "}
                          GB
                        </td>

                        <td className="px-5 py-4 text-xs font-semibold text-slate-700">
                          {item.upload.toFixed(
                            2
                          )}{" "}
                          GB
                        </td>

                        <td className="px-5 py-4 text-xs font-bold text-slate-900">
                          {total.toFixed(2)} GB
                        </td>

                        <td className="px-5 py-4 text-right">

                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600">

                            <CheckCircle2 className="h-3 w-3" />

                            Recorded

                          </span>

                        </td>

                      </tr>
                    );
                  }
                )}

              </tbody>

            </table>

          </div>

          {/* Mobile */}

          <div className="divide-y divide-slate-100 md:hidden">

            {selectedEsim.usage.map(
              (item) => {

                const total =
                  item.download +
                  item.upload;

                return (
                  <div
                    key={item.date}
                    className="p-4"
                  >

                    <div className="flex items-center justify-between">

                      <div>

                        <p className="text-xs font-bold text-slate-700">
                          {item.label}
                        </p>

                        <p className="mt-1 text-[10px] text-slate-400">
                          {item.date}
                        </p>

                      </div>

                      <span className="text-sm font-bold text-slate-900">
                        {total.toFixed(2)} GB
                      </span>

                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-2">

                      <div className="rounded-lg bg-slate-50 p-3">

                        <p className="text-[10px] text-slate-400">
                          Download
                        </p>

                        <p className="mt-1 text-xs font-bold text-slate-700">
                          {item.download.toFixed(
                            2
                          )}{" "}
                          GB
                        </p>

                      </div>

                      <div className="rounded-lg bg-slate-50 p-3">

                        <p className="text-[10px] text-slate-400">
                          Upload
                        </p>

                        <p className="mt-1 text-xs font-bold text-slate-700">
                          {item.upload.toFixed(
                            2
                          )}{" "}
                          GB
                        </p>

                      </div>

                    </div>

                  </div>
                );
              }
            )}

          </div>

        </section>

        {/* ===================================================== */}
        {/* HELP */}
        {/* ===================================================== */}

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-start gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                <Info className="h-5 w-5" />
              </div>

              <div>

                <h3 className="text-sm font-bold text-slate-800">
                  About data usage
                </h3>

                <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-400">
                  Usage figures may be delayed depending on
                  your eSIM provider and network. Your device
                  may also display slightly different usage
                  figures from the provider's records.
                </p>

              </div>

            </div>

            <a
              href="/help/esim/usage"
              className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 text-xs font-bold text-slate-700 hover:bg-slate-50"
            >
              Learn more
              <ArrowRight className="h-4 w-4" />
            </a>

          </div>

        </section>

      </div>

      {/* ===================================================== */}
      {/* DETAILS MODAL */}
      {/* ===================================================== */}

      {showDetails && (
        <PlanDetailsModal
          esim={selectedEsim}
          onClose={() =>
            setShowDetails(false)
          }
        />
      )}

    </main>
  );
}

/* ========================================================================== */
/* USAGE STAT                                                                  */
/* ========================================================================== */

function UsageStat({
  icon,
  label,
  value,
  description,
  positive,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
  positive?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex items-start justify-between">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
          {icon}
        </div>

        {positive && (
          <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">
            Available
          </span>
        )}

      </div>

      <p className="mt-5 text-xs text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-2xl font-bold text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-400">
        {description}
      </p>

    </div>
  );
}

/* ========================================================================== */
/* USAGE CIRCLE                                                                */
/* ========================================================================== */

function UsageCircle({
  percentage,
}: {
  percentage: number;
}) {
  const circumference =
    2 * Math.PI * 44;

  const offset =
    circumference -
    (Math.min(100, percentage) /
      100) *
      circumference;

  return (
    <div className="relative mx-auto h-40 w-40">

      <svg
        className="h-full w-full -rotate-90"
        viewBox="0 0 100 100"
      >

        <circle
          cx="50"
          cy="50"
          r="44"
          fill="none"
          strokeWidth="8"
          className="stroke-slate-100"
        />

        <circle
          cx="50"
          cy="50"
          r="44"
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          className={`${
            percentage >= 90
              ? "stroke-rose-500"
              : percentage >= 75
                ? "stroke-amber-500"
                : "stroke-cyan-600"
          }`}
          strokeDasharray={
            circumference
          }
          strokeDashoffset={offset}
        />

      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">

        <span className="text-2xl font-bold text-slate-900">
          {percentage.toFixed(0)}%
        </span>

        <span className="mt-1 text-[10px] text-slate-400">
          used
        </span>

      </div>

    </div>
  );
}

/* ========================================================================== */
/* USAGE CHART                                                                 */
/* ========================================================================== */

function UsageChart({
  usage,
}: {
  usage: UsageRecord[];
}) {
  const maxValue = Math.max(
    ...usage.map(
      (item) =>
        item.download +
        item.upload
    ),
    1
  );

  return (
    <div className="mt-7">

      <div className="flex h-[230px] items-end gap-2 overflow-x-auto border-b border-slate-100 pb-0 sm:gap-4">

        {usage.map((item) => {

          const total =
            item.download +
            item.upload;

          const height =
            (total / maxValue) *
            170;

          const downloadHeight =
            (item.download / total) *
            height;

          const uploadHeight =
            (item.upload / total) *
            height;

          return (
            <div
              key={item.date}
              className="flex min-w-[42px] flex-1 flex-col items-center justify-end"
            >

              <div className="mb-2 text-center">

                <span className="text-[9px] font-semibold text-slate-500">
                  {total.toFixed(2)}
                </span>

              </div>

              <div
                className="flex w-7 flex-col justify-end overflow-hidden rounded-t-md"
                style={{
                  height: `${height}px`,
                }}
              >

                <div
                  className="w-full bg-slate-300"
                  style={{
                    height: `${uploadHeight}px`,
                  }}
                />

                <div
                  className="w-full bg-cyan-600"
                  style={{
                    height: `${downloadHeight}px`,
                  }}
                />

              </div>

              <div className="mt-3 whitespace-nowrap text-[9px] text-slate-400">
                {item.label}
              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}

/* ========================================================================== */
/* BREAKDOWN ITEM                                                              */
/* ========================================================================== */

function BreakdownItem({
  icon,
  label,
  value,
  percentage,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  percentage: number;
}) {
  return (
    <div>

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">

          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
            {icon}
          </div>

          <span className="text-xs font-semibold text-slate-600">
            {label}
          </span>

        </div>

        <span className="text-xs font-bold text-slate-800">
          {value}
        </span>

      </div>

      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">

        <div
          className="h-full rounded-full bg-cyan-600"
          style={{
            width: `${Math.min(
              100,
              percentage
            )}%`,
          }}
        />

      </div>

      <p className="mt-1 text-right text-[9px] text-slate-400">
        {percentage.toFixed(0)}%
      </p>

    </div>
  );
}

/* ========================================================================== */
/* STATUS BADGE                                                                */
/* ========================================================================== */

function StatusBadge({
  status,
}: {
  status: EsimStatus;
}) {
  if (status === "active") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600">

        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

        Active

      </span>
    );
  }

  if (status === "not_activated") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold text-amber-600">

        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />

        Not activated

      </span>
    );
  }

  if (status === "suspended") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-2.5 py-1 text-[10px] font-bold text-rose-600">

        <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />

        Suspended

      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-500">

      <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />

      Expired

    </span>
  );
}

/* ========================================================================== */
/* PLAN DETAILS MODAL                                                          */
/* ========================================================================== */

function PlanDetailsModal({
  esim,
  onClose,
}: {
  esim: EsimUsage;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50">

      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
        aria-label="Close modal"
      />

      <div className="relative flex min-h-full items-center justify-center p-4">

        <div className="w-full max-w-lg rounded-2xl bg-white p-5 shadow-2xl sm:p-6">

          <div className="flex items-start justify-between">

            <div>

              <p className="text-xs text-slate-400">
                {esim.country}
              </p>

              <h2 className="mt-1 text-xl font-bold text-slate-900">
                {esim.planName}
              </h2>

            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100"
            >
              <X className="h-5 w-5" />
            </button>

          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">

            <DetailBox
              label="Data allowance"
              value={`${esim.dataTotal} GB`}
            />

            <DetailBox
              label="Data used"
              value={`${esim.dataUsed.toFixed(
                1
              )} GB`}
            />

            <DetailBox
              label="Network"
              value={esim.network}
            />

            <DetailBox
              label="Days remaining"
              value={`${esim.daysRemaining} days`}
            />

          </div>

          <div className="mt-4 rounded-xl bg-slate-50 p-4">

            <p className="text-[10px] uppercase tracking-wide text-slate-400">
              ICCID
            </p>

            <p className="mt-2 break-all font-mono text-xs font-semibold text-slate-700">
              {esim.iccid}
            </p>

          </div>

          <div className="mt-4 rounded-xl border border-slate-200 p-4">

            <div className="flex justify-between">

              <span className="text-xs text-slate-400">
                Purchased
              </span>

              <span className="text-xs font-semibold text-slate-700">
                {esim.purchaseDate}
              </span>

            </div>

            <div className="mt-3 flex justify-between">

              <span className="text-xs text-slate-400">
                Expires
              </span>

              <span className="text-xs font-semibold text-slate-700">
                {esim.expiryDate}
              </span>

            </div>

          </div>

          <a
            href={`/esim/top-up?esim=${esim.id}`}
            className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-cyan-700 text-xs font-bold text-white hover:bg-cyan-800"
          >
            <Zap className="h-4 w-4" />
            Top up this eSIM
          </a>

        </div>

      </div>

    </div>
  );
}

/* ========================================================================== */
/* DETAIL BOX                                                                  */
/* ========================================================================== */

function DetailBox({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-3">

      <p className="text-[10px] uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-bold text-slate-800">
        {value}
      </p>

    </div>
  );
}