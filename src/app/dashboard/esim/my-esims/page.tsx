"use client";

import {
  Activity,
  AlertCircle,
  ArrowDownToLine,
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock3,
  Copy,
  CreditCard,
  Download,
  Globe2,
  Info,
  MoreHorizontal,
  PackageOpen,
  QrCode,
  RefreshCw,
  Search,
  Settings2,
  Signal,
  Smartphone,
  Trash2,
  Upload,
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

type Esim = {
  id: string;
  country: string;
  countryCode: string;
  flag: string;

  planName: string;

  dataTotal: number;
  dataUsed: number;
  dataUnit: "GB";

  validityDays: number;
  daysRemaining: number;

  status: EsimStatus;

  network: string;
  networks: string[];

  iccid: string;

  phoneNumber?: string;

  purchaseDate: string;
  activatedDate?: string;
  expiryDate: string;

  hotspot: boolean;

  provider: string;

  autoRenew: boolean;
};

const esimData: Esim[] = [
  {
    id: "esim_usa_001",
    country: "United States",
    countryCode: "US",
    flag: "🇺🇸",

    planName: "USA 10GB",
    dataTotal: 10,
    dataUsed: 3.7,
    dataUnit: "GB",

    validityDays: 30,
    daysRemaining: 18,

    status: "active",

    network: "T-Mobile",
    networks: ["T-Mobile", "AT&T"],

    iccid: "8944201234567890123",

    purchaseDate: "Aug 02, 2026",
    activatedDate: "Aug 03, 2026",
    expiryDate: "Aug 31, 2026",

    hotspot: true,

    provider: "eSIM Provider",

    autoRenew: false,
  },

  {
    id: "esim_uk_001",
    country: "United Kingdom",
    countryCode: "GB",
    flag: "🇬🇧",

    planName: "UK 5GB",
    dataTotal: 5,
    dataUsed: 1.8,
    dataUnit: "GB",

    validityDays: 15,
    daysRemaining: 7,

    status: "active",

    network: "EE",
    networks: ["EE", "O2"],

    iccid: "8944201234567890456",

    purchaseDate: "Aug 04, 2026",
    activatedDate: "Aug 05, 2026",
    expiryDate: "Aug 19, 2026",

    hotspot: true,

    provider: "eSIM Provider",

    autoRenew: false,
  },

  {
    id: "esim_france_001",
    country: "France",
    countryCode: "FR",
    flag: "🇫🇷",

    planName: "France 10GB",
    dataTotal: 10,
    dataUsed: 9.2,
    dataUnit: "GB",

    validityDays: 30,
    daysRemaining: 3,

    status: "active",

    network: "Orange",
    networks: ["Orange", "SFR"],

    iccid: "8944201234567890789",

    purchaseDate: "Jul 16, 2026",
    activatedDate: "Jul 17, 2026",
    expiryDate: "Aug 15, 2026",

    hotspot: true,

    provider: "eSIM Provider",

    autoRenew: false,
  },

  {
    id: "esim_europe_001",
    country: "Europe",
    countryCode: "EU",
    flag: "🇪🇺",

    planName: "Europe 20GB",
    dataTotal: 20,
    dataUsed: 20,
    dataUnit: "GB",

    validityDays: 30,
    daysRemaining: 0,

    status: "expired",

    network: "Multiple Networks",
    networks: ["Orange", "Vodafone", "O2"],

    iccid: "8944201234567890999",

    purchaseDate: "Jun 12, 2026",
    activatedDate: "Jun 13, 2026",
    expiryDate: "Jul 12, 2026",

    hotspot: true,

    provider: "eSIM Provider",

    autoRenew: false,
  },

  {
    id: "esim_canada_001",
    country: "Canada",
    countryCode: "CA",
    flag: "🇨🇦",

    planName: "Canada 5GB",
    dataTotal: 5,
    dataUsed: 0,
    dataUnit: "GB",

    validityDays: 15,
    daysRemaining: 15,

    status: "not_activated",

    network: "Rogers",
    networks: ["Rogers", "Bell"],

    iccid: "8944201234567890111",

    purchaseDate: "Aug 11, 2026",

    expiryDate: "Aug 26, 2026",

    hotspot: true,

    provider: "eSIM Provider",

    autoRenew: false,
  },
];

export default function MyEsimPage() {
  const [activeTab, setActiveTab] = useState<
    "all" | "active" | "expired"
  >("active");

  const [search, setSearch] = useState("");

  const [selectedEsim, setSelectedEsim] =
    useState<Esim | null>(null);

  const [showInstall, setShowInstall] =
    useState(false);

  const [showUsage, setShowUsage] =
    useState(false);

  const [copied, setCopied] =
    useState(false);

  const filteredEsims = useMemo(() => {
    let result = [...esimData];

    if (activeTab === "active") {
      result = result.filter(
        (esim) =>
          esim.status === "active" ||
          esim.status === "not_activated"
      );
    }

    if (activeTab === "expired") {
      result = result.filter(
        (esim) => esim.status === "expired"
      );
    }

    if (search.trim()) {
      const query =
        search.toLowerCase();

      result = result.filter(
        (esim) =>
          esim.country
            .toLowerCase()
            .includes(query) ||
          esim.planName
            .toLowerCase()
            .includes(query) ||
          esim.iccid
            .toLowerCase()
            .includes(query) ||
          esim.network
            .toLowerCase()
            .includes(query)
      );
    }

    return result;
  }, [activeTab, search]);

  const activeCount = esimData.filter(
    (esim) =>
      esim.status === "active" ||
      esim.status === "not_activated"
  ).length;

  const expiredCount = esimData.filter(
    (esim) => esim.status === "expired"
  ).length;

  function copyIccid(iccid: string) {
    navigator.clipboard.writeText(iccid);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <div className="mx-auto w-full max-w-[1500px] px-4 py-5 sm:px-6 lg:px-8 lg:py-8">

        {/* ====================================================== */}
        {/* BREADCRUMB */}
        {/* ====================================================== */}

        <div className="mb-5 flex items-center gap-2 text-sm text-slate-400">

          <a
            href="/esim"
            className="transition hover:text-cyan-700"
          >
            Data eSIM
          </a>

          <ChevronRight className="h-4 w-4" />

          <span className="font-medium text-slate-700">
            My eSIMs
          </span>

        </div>

        {/* ====================================================== */}
        {/* HEADER */}
        {/* ====================================================== */}

        <section className="mb-7">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                  <Smartphone className="h-6 w-6" />
                </div>

                <div>

                  <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    My eSIMs
                  </h1>

                  <p className="mt-1 text-sm text-slate-500 sm:text-base">
                    Manage your data plans, monitor usage,
                    and install your eSIMs.
                  </p>

                </div>

              </div>

            </div>

            <a
              href="/esim/buy"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-cyan-700 px-5 text-sm font-bold text-white shadow-sm transition hover:bg-cyan-800"
            >
              <Zap className="h-4 w-4" />
              Buy new eSIM
            </a>

          </div>

        </section>

        {/* ====================================================== */}
        {/* OVERVIEW STATS */}
        {/* ====================================================== */}

        <section className="mb-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <StatCard
            icon={<Smartphone className="h-5 w-5" />}
            title="Total eSIMs"
            value={String(esimData.length)}
            description="Purchased plans"
          />

          <StatCard
            icon={<CheckCircle2 className="h-5 w-5" />}
            title="Active"
            value={String(activeCount)}
            description="Currently usable"
            positive
          />

          <StatCard
            icon={<Activity className="h-5 w-5" />}
            title="Data used"
            value="14.7 GB"
            description="Across active plans"
          />

          <StatCard
            icon={<Clock3 className="h-5 w-5" />}
            title="Expiring soon"
            value="1"
            description="Within 7 days"
            warning
          />

        </section>

        {/* ====================================================== */}
        {/* SEARCH + TABS */}
        {/* ====================================================== */}

        <section className="mb-5">

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

            {/* Tabs */}

            <div className="flex overflow-x-auto rounded-xl border border-slate-200 bg-white p-1 shadow-sm">

              <TabButton
                active={activeTab === "active"}
                onClick={() =>
                  setActiveTab("active")
                }
              >
                Active
                <span>
                  {activeCount}
                </span>
              </TabButton>

              <TabButton
                active={activeTab === "all"}
                onClick={() =>
                  setActiveTab("all")
                }
              >
                All
                <span>
                  {esimData.length}
                </span>
              </TabButton>

              <TabButton
                active={activeTab === "expired"}
                onClick={() =>
                  setActiveTab("expired")
                }
              >
                Expired
                <span>
                  {expiredCount}
                </span>
              </TabButton>

            </div>

            {/* Search */}

            <div className="relative w-full lg:w-[330px]">

              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search eSIMs..."
                className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm outline-none placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-600/10"
              />

            </div>

          </div>

        </section>

        {/* ====================================================== */}
        {/* ESIM LIST */}
        {/* ====================================================== */}

        {filteredEsims.length > 0 ? (
          <section className="space-y-4">

            {filteredEsims.map((esim) => (
              <EsimCard
                key={esim.id}
                esim={esim}
                onDetails={() =>
                  setSelectedEsim(esim)
                }
                onInstall={() => {
                  setSelectedEsim(esim);
                  setShowInstall(true);
                }}
                onUsage={() => {
                  setSelectedEsim(esim);
                  setShowUsage(true);
                }}
                onCopy={() =>
                  copyIccid(esim.iccid)
                }
              />
            ))}

          </section>
        ) : (
          <EmptyEsim
            expired={activeTab === "expired"}
            search={search}
            onClear={() => {
              setSearch("");
              setActiveTab("all");
            }}
          />
        )}

        {/* ====================================================== */}
        {/* FOOTER HELP */}
        {/* ====================================================== */}

        <section className="mt-7 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                <CircleHelp className="h-5 w-5" />
              </div>

              <div>

                <h3 className="text-sm font-bold text-slate-800">
                  Need help with your eSIM?
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Learn how to install, activate, manage,
                  and troubleshoot your eSIM.
                </p>

              </div>

            </div>

            <a
              href="/help/esim"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              eSIM Help Center
              <ArrowRight className="h-4 w-4" />
            </a>

          </div>

        </section>

      </div>

      {/* ====================================================== */}
      {/* DETAILS MODAL */}
      {/* ====================================================== */}

      {selectedEsim &&
        !showInstall &&
        !showUsage && (
          <EsimDetailsModal
            esim={selectedEsim}
            onClose={() =>
              setSelectedEsim(null)
            }
            onInstall={() =>
              setShowInstall(true)
            }
            onUsage={() =>
              setShowUsage(true)
            }
            onCopy={() =>
              copyIccid(selectedEsim.iccid)
            }
            copied={copied}
          />
        )}

      {/* ====================================================== */}
      {/* INSTALL MODAL */}
      {/* ====================================================== */}

      {selectedEsim && showInstall && (
        <InstallModal
          esim={selectedEsim}
          onClose={() => {
            setShowInstall(false);
            setSelectedEsim(null);
          }}
        />
      )}

      {/* ====================================================== */}
      {/* USAGE MODAL */}
      {/* ====================================================== */}

      {selectedEsim && showUsage && (
        <UsageModal
          esim={selectedEsim}
          onClose={() => {
            setShowUsage(false);
            setSelectedEsim(null);
          }}
        />
      )}

    </main>
  );
}

/* ========================================================================== */
/* STAT CARD                                                                   */
/* ========================================================================== */

function StatCard({
  icon,
  title,
  value,
  description,
  positive,
  warning,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  positive?: boolean;
  warning?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex items-start justify-between">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
          {icon}
        </div>

        {positive && (
          <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">
            Healthy
          </span>
        )}

        {warning && (
          <span className="rounded-full bg-amber-50 px-2 py-1 text-[10px] font-bold text-amber-600">
            Attention
          </span>
        )}

      </div>

      <p className="mt-5 text-xs text-slate-400">
        {title}
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
/* TAB BUTTON                                                                  */
/* ========================================================================== */

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-9 items-center gap-2 whitespace-nowrap rounded-lg px-3 text-xs font-semibold transition sm:px-4 ${
        active
          ? "bg-cyan-700 text-white"
          : "text-slate-500 hover:bg-slate-50"
      }`}
    >
      {children}
    </button>
  );
}

/* ========================================================================== */
/* ESIM CARD                                                                   */
/* ========================================================================== */

function EsimCard({
  esim,
  onDetails,
  onInstall,
  onUsage,
  onCopy,
}: {
  esim: Esim;
  onDetails: () => void;
  onInstall: () => void;
  onUsage: () => void;
  onCopy: () => void;
}) {
  const remaining =
    esim.dataTotal - esim.dataUsed;

  const usagePercentage =
    Math.min(
      100,
      (esim.dataUsed /
        esim.dataTotal) *
        100
    );

  const isLowData =
    remaining <= esim.dataTotal * 0.2;

  const isExpiring =
    esim.daysRemaining > 0 &&
    esim.daysRemaining <= 7;

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-cyan-200 hover:shadow-md">

      {/* Top */}

      <div className="p-5 sm:p-6">

        <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">

          {/* Identity */}

          <div className="flex min-w-0 items-start gap-4">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-3xl">
              {esim.flag}
            </div>

            <div className="min-w-0">

              <div className="flex flex-wrap items-center gap-2">

                <h2 className="text-lg font-bold text-slate-900">
                  {esim.planName}
                </h2>

                <StatusBadge
                  status={esim.status}
                />

              </div>

              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400">

                <span className="inline-flex items-center gap-1.5">
                  <Globe2 className="h-3.5 w-3.5" />
                  {esim.country}
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <Signal className="h-3.5 w-3.5" />
                  {esim.network}
                </span>

              </div>

              {/* ICCID */}

              <div className="mt-3 flex items-center gap-2">

                <span className="text-[10px] uppercase tracking-wide text-slate-400">
                  ICCID
                </span>

                <code className="rounded-md bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-600">
                  {esim.iccid}
                </code>

                <button
                  type="button"
                  onClick={onCopy}
                  className="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                  title="Copy ICCID"
                >
                  <Copy className="h-3.5 w-3.5" />
                </button>

              </div>

            </div>

          </div>

          {/* Menu */}

          <button
            type="button"
            onClick={onDetails}
            className="hidden h-9 w-9 items-center justify-center self-start rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 xl:flex"
          >
            <MoreHorizontal className="h-5 w-5" />
          </button>

        </div>

        {/* Data + validity */}

        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_280px]">

          {/* Data */}

          <div className="rounded-2xl bg-slate-50 p-4">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-xs text-slate-400">
                  Data usage
                </p>

                <p className="mt-1 text-xl font-bold text-slate-900">

                  {esim.dataUsed.toFixed(1)}{" "}
                  <span className="text-sm font-medium text-slate-400">
                    / {esim.dataTotal} GB
                  </span>

                </p>

              </div>

              <span
                className={`text-xs font-bold ${
                  isLowData
                    ? "text-rose-600"
                    : "text-slate-500"
                }`}
              >
                {remaining.toFixed(1)} GB left
              </span>

            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">

              <div
                className={`h-full rounded-full transition-all ${
                  isLowData
                    ? "bg-rose-500"
                    : "bg-cyan-600"
                }`}
                style={{
                  width: `${usagePercentage}%`,
                }}
              />

            </div>

            <div className="mt-3 flex justify-between text-[10px] text-slate-400">

              <span>
                {usagePercentage.toFixed(0)}% used
              </span>

              <span>
                {esim.dataTotal -
                  esim.dataUsed >
                0
                  ? "Available"
                  : "Data exhausted"}
              </span>

            </div>

          </div>

          {/* Validity */}

          <div className="rounded-2xl border border-slate-200 p-4">

            <div className="flex items-center gap-2">

              <CalendarDays className="h-4 w-4 text-slate-400" />

              <p className="text-xs font-semibold text-slate-500">
                Validity
              </p>

            </div>

            <div className="mt-3 flex items-end justify-between">

              <div>

                <p
                  className={`text-xl font-bold ${
                    isExpiring
                      ? "text-amber-600"
                      : "text-slate-900"
                  }`}
                >
                  {esim.daysRemaining}
                </p>

                <p className="text-[10px] text-slate-400">
                  days remaining
                </p>

              </div>

              <div className="text-right">

                <p className="text-[10px] text-slate-400">
                  Expires
                </p>

                <p className="mt-1 text-xs font-bold text-slate-700">
                  {esim.expiryDate}
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom actions */}

        <div className="mt-5 flex flex-col gap-2 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">

            <span className="inline-flex items-center gap-1.5">
              <Wifi className="h-3.5 w-3.5" />
              Hotspot{" "}
              {esim.hotspot
                ? "supported"
                : "unavailable"}
            </span>

            <span className="hidden h-3 w-px bg-slate-200 sm:block" />

            <span>
              {esim.networks.length} network
              {esim.networks.length > 1
                ? "s"
                : ""}
            </span>

          </div>

          <div className="grid grid-cols-2 gap-2 sm:flex">

            {esim.status ===
              "not_activated" && (
              <button
                type="button"
                onClick={onInstall}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-cyan-700 px-4 text-xs font-bold text-white hover:bg-cyan-800"
              >
                <QrCode className="h-4 w-4" />
                Install
              </button>
            )}

            {esim.status ===
              "active" && (
              <button
                type="button"
                onClick={onUsage}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                <Activity className="h-4 w-4" />
                Usage
              </button>
            )}

            <button
              type="button"
              onClick={onDetails}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 text-xs font-bold text-white hover:bg-slate-800"
            >
              View details
              <ArrowRight className="h-4 w-4" />
            </button>

          </div>

        </div>

      </div>

    </article>
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
/* EMPTY STATE                                                                 */
/* ========================================================================== */

function EmptyEsim({
  expired,
  search,
  onClear,
}: {
  expired: boolean;
  search: string;
  onClear: () => void;
}) {
  return (
    <section className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">

        <PackageOpen className="h-7 w-7" />

      </div>

      <h2 className="mt-5 text-lg font-bold text-slate-900">

        {search
          ? "No eSIMs found"
          : expired
            ? "No expired eSIMs"
            : "No eSIMs yet"}

      </h2>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">

        {search
          ? "Try searching with another country, plan name, network, or ICCID."
          : expired
            ? "Your expired eSIMs will appear here."
            : "Purchase your first data-only eSIM and stay connected wherever you travel."}

      </p>

      <div className="mt-5 flex justify-center gap-2">

        {search && (
          <button
            type="button"
            onClick={onClear}
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-600 hover:bg-slate-50"
          >
            Clear search
          </button>
        )}

        {!expired && !search && (
          <a
            href="/esim/buy"
            className="inline-flex h-10 items-center gap-2 rounded-xl bg-cyan-700 px-4 text-sm font-bold text-white hover:bg-cyan-800"
          >
            <Zap className="h-4 w-4" />
            Buy an eSIM
          </a>
        )}

      </div>

    </section>
  );
}

/* ========================================================================== */
/* DETAILS MODAL                                                               */
/* ========================================================================== */

function EsimDetailsModal({
  esim,
  onClose,
  onInstall,
  onUsage,
  onCopy,
  copied,
}: {
  esim: Esim;
  onClose: () => void;
  onInstall: () => void;
  onUsage: () => void;
  onCopy: () => void;
  copied: boolean;
}) {
  return (
    <Modal onClose={onClose}>

      <div className="flex items-start justify-between">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-2xl">
            {esim.flag}
          </div>

          <div>

            <h2 className="font-bold text-slate-900">
              {esim.planName}
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              {esim.country}
            </p>

          </div>

        </div>

        <button
          type="button"
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100"
        >
          <X className="h-5 w-5" />
        </button>

      </div>

      <div className="mt-6">

        <StatusBadge
          status={esim.status}
        />

      </div>

      {/* Details */}

      <div className="mt-5 grid gap-3 sm:grid-cols-2">

        <InfoBox
          label="Data allowance"
          value={`${esim.dataTotal} GB`}
        />

        <InfoBox
          label="Data used"
          value={`${esim.dataUsed.toFixed(1)} GB`}
        />

        <InfoBox
          label="Validity"
          value={`${esim.validityDays} days`}
        />

        <InfoBox
          label="Days remaining"
          value={`${esim.daysRemaining} days`}
        />

        <InfoBox
          label="Network"
          value={esim.network}
        />

        <InfoBox
          label="Hotspot"
          value={
            esim.hotspot
              ? "Supported"
              : "Unavailable"
          }
        />

      </div>

      {/* ICCID */}

      <div className="mt-4 rounded-xl border border-slate-200 p-4">

        <p className="text-[10px] uppercase tracking-wide text-slate-400">
          ICCID
        </p>

        <div className="mt-2 flex items-center gap-2">

          <code className="min-w-0 flex-1 break-all text-xs font-semibold text-slate-700">
            {esim.iccid}
          </code>

          <button
            type="button"
            onClick={onCopy}
            className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-50"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-500" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                Copy
              </>
            )}
          </button>

        </div>

      </div>

      {/* Dates */}

      <div className="mt-4 rounded-xl bg-slate-50 p-4">

        <DateRow
          label="Purchased"
          value={esim.purchaseDate}
        />

        {esim.activatedDate && (
          <DateRow
            label="Activated"
            value={esim.activatedDate}
          />
        )}

        <DateRow
          label="Expires"
          value={esim.expiryDate}
        />

      </div>

      {/* Actions */}

      <div className="mt-5 grid grid-cols-2 gap-2">

        {esim.status ===
          "not_activated" && (
          <button
            type="button"
            onClick={onInstall}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-cyan-700 text-xs font-bold text-white hover:bg-cyan-800"
          >
            <QrCode className="h-4 w-4" />
            Install
          </button>
        )}

        {esim.status ===
          "active" && (
          <button
            type="button"
            onClick={onUsage}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50"
          >
            <Activity className="h-4 w-4" />
            View usage
          </button>
        )}

        {esim.status ===
          "active" && (
          <a
            href={`/esim/top-up?esim=${esim.id}`}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 text-xs font-bold text-white hover:bg-slate-800"
          >
            <RefreshCw className="h-4 w-4" />
            Top up
          </a>
        )}

        <a
          href={`/esim/manage/${esim.id}`}
          className="col-span-2 inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50"
        >
          <Settings2 className="h-4 w-4" />
          Manage eSIM
        </a>

      </div>

    </Modal>
  );
}

/* ========================================================================== */
/* INSTALL MODAL                                                              */
/* ========================================================================== */

function InstallModal({
  esim,
  onClose,
}: {
  esim: Esim;
  onClose: () => void;
}) {
  return (
    <Modal onClose={onClose}>

      <div className="flex items-start justify-between">

        <div>

          <p className="text-xs font-medium text-slate-400">
            {esim.country}
          </p>

          <h2 className="mt-1 text-xl font-bold text-slate-900">
            Install your eSIM
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

      {/* QR */}

      <div className="mt-6 flex justify-center">

        <div className="flex h-52 w-52 items-center justify-center rounded-2xl border-8 border-slate-50 bg-white shadow-sm">

          {/* Production:
              Replace with real QR image from provider.
          */}

          <div className="flex h-40 w-40 items-center justify-center rounded-xl bg-slate-900">

            <QrCode className="h-28 w-28 text-white" />

          </div>

        </div>

      </div>

      <div className="mt-5 text-center">

        <h3 className="font-bold text-slate-900">
          Scan this QR code
        </h3>

        <p className="mt-2 text-xs leading-5 text-slate-400">
          Open your phone's mobile network settings
          and scan this QR code to install your eSIM.
        </p>

      </div>

      {/* Steps */}

      <div className="mt-6 space-y-3">

        <InstallStep
          number="1"
          title="Open mobile settings"
          description="Go to Cellular or Mobile Network settings."
        />

        <InstallStep
          number="2"
          title="Add eSIM"
          description="Choose Add eSIM or Add Mobile Plan."
        />

        <InstallStep
          number="3"
          title="Scan QR code"
          description="Scan the QR code displayed above."
        />

      </div>

      {/* Manual */}

      <button
        type="button"
        className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50"
        onClick={() => {
          alert(
            "Open manual installation details here."
          );
        }}
      >
        <Smartphone className="h-4 w-4" />
        Enter details manually
      </button>

      <p className="mt-4 text-center text-[10px] leading-4 text-slate-400">
        Do not share your eSIM QR code with anyone.
      </p>

    </Modal>
  );
}

/* ========================================================================== */
/* USAGE MODAL                                                                */
/* ========================================================================== */

function UsageModal({
  esim,
  onClose,
}: {
  esim: Esim;
  onClose: () => void;
}) {
  const remaining =
    esim.dataTotal - esim.dataUsed;

  const percentage =
    (esim.dataUsed /
      esim.dataTotal) *
    100;

  return (
    <Modal onClose={onClose}>

      <div className="flex items-start justify-between">

        <div>

          <p className="text-xs text-slate-400">
            {esim.country}
          </p>

          <h2 className="mt-1 text-xl font-bold text-slate-900">
            Data usage
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

      {/* Usage */}

      <div className="mt-6 rounded-2xl bg-slate-50 p-5">

        <div className="flex items-end justify-between">

          <div>

            <p className="text-xs text-slate-400">
              Used
            </p>

            <p className="mt-1 text-3xl font-bold text-slate-900">
              {esim.dataUsed.toFixed(1)}
              <span className="ml-1 text-sm font-medium text-slate-400">
                GB
              </span>
            </p>

          </div>

          <div className="text-right">

            <p className="text-xs text-slate-400">
              Remaining
            </p>

            <p className="mt-1 text-lg font-bold text-cyan-700">
              {remaining.toFixed(1)} GB
            </p>

          </div>

        </div>

        <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200">

          <div
            className="h-full rounded-full bg-cyan-600"
            style={{
              width: `${percentage}%`,
            }}
          />

        </div>

        <div className="mt-3 flex justify-between text-xs text-slate-400">

          <span>
            {percentage.toFixed(0)}% used
          </span>

          <span>
            {esim.dataTotal} GB total
          </span>

        </div>

      </div>

      {/* Usage activity */}

      <div className="mt-5">

        <h3 className="text-sm font-bold text-slate-800">
          Usage activity
        </h3>

        <div className="mt-3 divide-y divide-slate-100 rounded-xl border border-slate-200">

          <UsageRow
            icon={<Upload className="h-4 w-4" />}
            title="Mobile data"
            value="3.2 GB"
          />

          <UsageRow
            icon={<ArrowDownToLine className="h-4 w-4" />}
            title="Background data"
            value="0.5 GB"
          />

        </div>

      </div>

      {/* CTA */}

      {remaining <= 2 && (
        <a
          href={`/esim/top-up?esim=${esim.id}`}
          className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-cyan-700 text-xs font-bold text-white hover:bg-cyan-800"
        >
          <RefreshCw className="h-4 w-4" />
          Top up data
        </a>
      )}

    </Modal>
  );
}

/* ========================================================================== */
/* MODAL                                                                       */
/* ========================================================================== */

function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50">

      <button
        type="button"
        aria-label="Close modal"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
      />

      <div className="relative flex min-h-full items-center justify-center p-4">

        <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-6">

          {children}

        </div>

      </div>

    </div>
  );
}

/* ========================================================================== */
/* INFO BOX                                                                    */
/* ========================================================================== */

function InfoBox({
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

/* ========================================================================== */
/* DATE ROW                                                                    */
/* ========================================================================== */

function DateRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between py-1.5">

      <span className="text-xs text-slate-400">
        {label}
      </span>

      <span className="text-xs font-semibold text-slate-700">
        {value}
      </span>

    </div>
  );
}

/* ========================================================================== */
/* INSTALL STEP                                                                */
/* ========================================================================== */

function InstallStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3">

      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-700 text-xs font-bold text-white">
        {number}
      </div>

      <div>

        <p className="text-xs font-bold text-slate-800">
          {title}
        </p>

        <p className="mt-0.5 text-[11px] leading-5 text-slate-400">
          {description}
        </p>

      </div>

    </div>
  );
}

/* ========================================================================== */
/* USAGE ROW                                                                   */
/* ========================================================================== */

function UsageRow({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between p-4">

      <div className="flex items-center gap-3">

        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
          {icon}
        </div>

        <span className="text-xs font-medium text-slate-600">
          {title}
        </span>

      </div>

      <span className="text-xs font-bold text-slate-800">
        {value}
      </span>

    </div>
  );
}