"use client";

import {
  AlertCircle,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Copy,
  Download,
  ExternalLink,
  FileText,
  Filter,
  History,
  Inbox,
  MoreVertical,
  Phone,
  RefreshCw,
  Search,
  ShieldCheck,
  Smartphone,
  Trash2,
  X,
  XCircle,
} from "lucide-react";
import { useMemo, useState } from "react";

type HistoryStatus = "completed" | "expired" | "cancelled" | "failed";

type VerificationHistory = {
  id: string;
  phoneNumber: string;
  country: string;
  countryCode: string;
  flag: string;
  service: string;
  status: HistoryStatus;
  price: number;
  currency: string;
  otp: string | null;
  smsReceived: boolean;
  smsMessage?: string;
  createdAt: string;
  completedAt?: string;
  expiresAt?: string;
  activationId: string;
  provider: string;
};

const initialHistory: VerificationHistory[] = [
  {
    id: "ver_1001",
    phoneNumber: "+1 202 555 0187",
    country: "United States",
    countryCode: "US",
    flag: "🇺🇸",
    service: "Google",
    status: "completed",
    price: 0.85,
    currency: "USD",
    otp: "482913",
    smsReceived: true,
    smsMessage:
      "Your Google verification code is 482913. Do not share this code with anyone.",
    createdAt: "Aug 12, 2026 • 07:42",
    completedAt: "Aug 12, 2026 • 07:45",
    activationId: "act_89321",
    provider: "SMS Provider",
  },
  {
    id: "ver_1002",
    phoneNumber: "+44 7700 900123",
    country: "United Kingdom",
    countryCode: "GB",
    flag: "🇬🇧",
    service: "Telegram",
    status: "completed",
    price: 0.72,
    currency: "USD",
    otp: "728491",
    smsReceived: true,
    smsMessage:
      "Telegram login code: 728491. Please do not give this code to anyone.",
    createdAt: "Aug 11, 2026 • 19:31",
    completedAt: "Aug 11, 2026 • 19:34",
    activationId: "act_89320",
    provider: "SMS Provider",
  },
  {
    id: "ver_1003",
    phoneNumber: "+33 6 12 34 56 78",
    country: "France",
    countryCode: "FR",
    flag: "🇫🇷",
    service: "WhatsApp",
    status: "expired",
    price: 0.68,
    currency: "USD",
    otp: null,
    smsReceived: false,
    createdAt: "Aug 10, 2026 • 14:12",
    expiresAt: "Aug 10, 2026 • 14:32",
    activationId: "act_89318",
    provider: "SMS Provider",
  },
  {
    id: "ver_1004",
    phoneNumber: "+49 151 23456789",
    country: "Germany",
    countryCode: "DE",
    flag: "🇩🇪",
    service: "Microsoft",
    status: "completed",
    price: 0.91,
    currency: "USD",
    otp: "639201",
    smsReceived: true,
    smsMessage: "Use 639201 as your Microsoft account security code.",
    createdAt: "Aug 9, 2026 • 11:20",
    completedAt: "Aug 9, 2026 • 11:23",
    activationId: "act_89317",
    provider: "SMS Provider",
  },
  {
    id: "ver_1005",
    phoneNumber: "+1 305 555 0164",
    country: "United States",
    countryCode: "US",
    flag: "🇺🇸",
    service: "Amazon",
    status: "cancelled",
    price: 0.76,
    currency: "USD",
    otp: null,
    smsReceived: false,
    createdAt: "Aug 8, 2026 • 09:14",
    activationId: "act_89316",
    provider: "SMS Provider",
  },
  {
    id: "ver_1006",
    phoneNumber: "+81 90 1234 5678",
    country: "Japan",
    countryCode: "JP",
    flag: "🇯🇵",
    service: "Discord",
    status: "failed",
    price: 0.89,
    currency: "USD",
    otp: null,
    smsReceived: false,
    createdAt: "Aug 7, 2026 • 21:04",
    activationId: "act_89315",
    provider: "SMS Provider",
  },
  {
    id: "ver_1007",
    phoneNumber: "+234 803 123 4567",
    country: "Nigeria",
    countryCode: "NG",
    flag: "🇳🇬",
    service: "Facebook",
    status: "completed",
    price: 0.55,
    currency: "USD",
    otp: "193820",
    smsReceived: true,
    smsMessage: "Your Facebook confirmation code is 193820.",
    createdAt: "Aug 6, 2026 • 16:27",
    completedAt: "Aug 6, 2026 • 16:30",
    activationId: "act_89314",
    provider: "SMS Provider",
  },
];

export default function VerificationHistoryPage() {
  const [history, setHistory] = useState<VerificationHistory[]>(initialHistory);

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState<"all" | HistoryStatus>("all");

  const [country, setCountry] = useState("all");

  const [service, setService] = useState("all");

  const [selected, setSelected] = useState<VerificationHistory | null>(null);

  const [menuId, setMenuId] = useState<string | null>(null);

  const [refreshing, setRefreshing] = useState(false);

  const [page, setPage] = useState(1);

  const itemsPerPage = 5;

  const countries = useMemo(
    () => Array.from(new Set(history.map((item) => item.country))),
    [history],
  );

  const services = useMemo(
    () => Array.from(new Set(history.map((item) => item.service))),
    [history],
  );

  const filteredHistory = useMemo(() => {
    const query = search.trim().toLowerCase();

    return history.filter((item) => {
      const matchesSearch =
        !query ||
        item.phoneNumber.toLowerCase().includes(query) ||
        item.service.toLowerCase().includes(query) ||
        item.country.toLowerCase().includes(query) ||
        item.activationId.toLowerCase().includes(query) ||
        item.otp?.includes(query);

      const matchesStatus = status === "all" || item.status === status;

      const matchesCountry = country === "all" || item.country === country;

      const matchesService = service === "all" || item.service === service;

      return matchesSearch && matchesStatus && matchesCountry && matchesService;
    });
  }, [history, search, status, country, service]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredHistory.length / itemsPerPage),
  );

  const visibleHistory = filteredHistory.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  const completed = history.filter(
    (item) => item.status === "completed",
  ).length;

  const expired = history.filter((item) => item.status === "expired").length;

  const failed = history.filter(
    (item) => item.status === "failed" || item.status === "cancelled",
  ).length;

  const totalSpent = history.reduce((sum, item) => sum + item.price, 0);

  function resetPage() {
    setPage(1);
  }

  function copy(value: string) {
    navigator.clipboard.writeText(value);
  }

  function deleteHistory(id: string) {
    setHistory((current) => current.filter((item) => item.id !== id));

    if (selected?.id === id) {
      setSelected(null);
    }

    setMenuId(null);
  }

  async function refresh() {
    setRefreshing(true);

    try {
      /*
       * Production:
       *
       * const response = await fetch(
       *   "/api/verification/history",
       *   {
       *     cache: "no-store",
       *   }
       * );
       *
       * const data = await response.json();
       *
       * setHistory(data.history);
       */

      await new Promise((resolve) => setTimeout(resolve, 700));
    } finally {
      setRefreshing(false);
    }
  }

  function exportHistory() {
    const headers = [
      "Phone Number",
      "Country",
      "Service",
      "Status",
      "Price",
      "OTP",
      "Created At",
      "Activation ID",
    ];

    const rows = filteredHistory.map((item) => [
      item.phoneNumber,
      item.country,
      item.service,
      item.status,
      `${item.price} ${item.currency}`,
      item.otp || "",
      item.createdAt,
      item.activationId,
    ]);

    const csv = [headers, ...rows]
      .map((row) =>
        row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(","),
      )
      .join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "verification-history.csv";

    document.body.appendChild(link);

    link.click();

    link.remove();

    URL.revokeObjectURL(url);
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <div className="mx-auto w-full max-w-[1500px] px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
        {/* Header */}
        <header className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
              <span>Verification</span>

              <ChevronRight className="h-4 w-4" />

              <span className="font-medium text-slate-900">History</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 sm:flex">
                <History className="h-5 w-5" />
              </div>

              <div>
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Verification History
                </h1>

                <p className="mt-1 text-sm text-slate-500 sm:text-base">
                  Review your previous verification numbers, activations and
                  verification activity.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={refresh}
              disabled={refreshing}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:opacity-60"
            >
              <RefreshCw
                className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`}
              />
              Refresh
            </button>

            <button
              type="button"
              onClick={exportHistory}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              <Download className="h-4 w-4" />
              Export
            </button>

            <a
              href="/dashboard/verification-number/buy"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#0f766e] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b625b]"
            >
              <Smartphone className="h-4 w-4" />
              Buy Number
            </a>
          </div>
        </header>

        {/* Statistics */}
        <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Activations"
            value={history.length.toString()}
            description="All verification activity"
            icon={<History className="h-5 w-5" />}
          />

          <StatCard
            title="Completed"
            value={completed.toString()}
            description="Successfully verified"
            icon={<CheckCircle2 className="h-5 w-5" />}
            tone="success"
          />

          <StatCard
            title="Expired / Failed"
            value={(expired + failed).toString()}
            description="Unsuccessful activations"
            icon={<AlertCircle className="h-5 w-5" />}
            tone="warning"
          />

          <StatCard
            title="Total Spent"
            value={`$${totalSpent.toFixed(2)}`}
            description="Verification spending"
            icon={<ShieldCheck className="h-5 w-5" />}
          />
        </section>

        {/* Main */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* Filters */}
          <div className="border-b border-slate-200 p-4 sm:p-5">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="relative w-full xl:max-w-md">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                    resetPage();
                  }}
                  placeholder="Search number, service, OTP or ID..."
                  className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:bg-white focus:ring-4 focus:ring-teal-600/10"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <FilterSelect
                  value={status}
                  onChange={(value) => {
                    setStatus(value as "all" | HistoryStatus);
                    resetPage();
                  }}
                  options={[
                    {
                      label: "All statuses",
                      value: "all",
                    },
                    {
                      label: "Completed",
                      value: "completed",
                    },
                    {
                      label: "Expired",
                      value: "expired",
                    },
                    {
                      label: "Cancelled",
                      value: "cancelled",
                    },
                    {
                      label: "Failed",
                      value: "failed",
                    },
                  ]}
                />

                <FilterSelect
                  value={country}
                  onChange={(value) => {
                    setCountry(value);
                    resetPage();
                  }}
                  options={[
                    {
                      label: "All countries",
                      value: "all",
                    },
                    ...countries.map((item) => ({
                      label: item,
                      value: item,
                    })),
                  ]}
                />

                <FilterSelect
                  value={service}
                  onChange={(value) => {
                    setService(value);
                    resetPage();
                  }}
                  options={[
                    {
                      label: "All services",
                      value: "all",
                    },
                    ...services.map((item) => ({
                      label: item,
                      value: item,
                    })),
                  ]}
                />

                <button
                  type="button"
                  className="inline-flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
                >
                  <Filter className="h-4 w-4" />
                  Date
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden overflow-x-auto lg:block">
            <table className="w-full min-w-[1050px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70">
                  <TableHead>Number</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>OTP</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead align="right">Actions</TableHead>
                </tr>
              </thead>

              <tbody>
                {visibleHistory.map((item) => (
                  <HistoryTableRow
                    key={item.id}
                    item={item}
                    menuId={menuId}
                    setMenuId={setMenuId}
                    onOpen={() => {
                      setSelected(item);
                      setMenuId(null);
                    }}
                    onCopy={() => copy(item.phoneNumber)}
                    onDelete={() => deleteHistory(item.id)}
                  />
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="divide-y divide-slate-100 lg:hidden">
            {visibleHistory.map((item) => (
              <HistoryMobileCard
                key={item.id}
                item={item}
                onOpen={() => setSelected(item)}
                onCopy={() => copy(item.phoneNumber)}
                onDelete={() => deleteHistory(item.id)}
              />
            ))}
          </div>

          {/* Empty */}
          {visibleHistory.length === 0 && <EmptyHistory />}

          {/* Pagination */}
          {filteredHistory.length > 0 && (
            <div className="flex flex-col gap-3 border-t border-slate-200 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <p className="text-sm text-slate-500">
                Showing{" "}
                <strong className="text-slate-700">
                  {(page - 1) * itemsPerPage + 1}
                </strong>{" "}
                to{" "}
                <strong className="text-slate-700">
                  {Math.min(page * itemsPerPage, filteredHistory.length)}
                </strong>{" "}
                of{" "}
                <strong className="text-slate-700">
                  {filteredHistory.length}
                </strong>
              </p>

              <div className="flex items-center justify-between gap-2">
                <button
                  type="button"
                  disabled={page === 1}
                  onClick={() => setPage((value) => Math.max(1, value - 1))}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-50 disabled:opacity-40"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <span className="min-w-[100px] text-center text-sm font-medium text-slate-600">
                  Page {page} of {totalPages}
                </span>

                <button
                  type="button"
                  disabled={page === totalPages}
                  onClick={() =>
                    setPage((value) => Math.min(totalPages, value + 1))
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-50 disabled:opacity-40"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </section>
      </div>

      {/* Details Drawer */}
      {selected && (
        <HistoryDetails
          item={selected}
          onClose={() => setSelected(null)}
          onCopy={() => copy(selected.phoneNumber)}
        />
      )}
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* STAT CARD                                                                   */
/* -------------------------------------------------------------------------- */

function StatCard({
  title,
  value,
  description,
  icon,
  tone = "default",
}: {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  tone?: "default" | "success" | "warning";
}) {
  const iconClass =
    tone === "success"
      ? "bg-emerald-50 text-emerald-600"
      : tone === "warning"
        ? "bg-amber-50 text-amber-600"
        : "bg-teal-50 text-teal-700";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>

          <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            {value}
          </p>

          <p className="mt-1 text-xs text-slate-400">{description}</p>
        </div>

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconClass}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* TABLE HEAD                                                                  */
/* -------------------------------------------------------------------------- */

function TableHead({
  children,
  align = "left",
}: {
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  return (
    <th
      className={`px-5 py-3 text-${align} text-[11px] font-bold uppercase tracking-wider text-slate-400`}
    >
      {children}
    </th>
  );
}

/* -------------------------------------------------------------------------- */
/* TABLE ROW                                                                   */
/* -------------------------------------------------------------------------- */

function HistoryTableRow({
  item,
  menuId,
  setMenuId,
  onOpen,
  onCopy,
  onDelete,
}: {
  item: VerificationHistory;
  menuId: string | null;
  setMenuId: (id: string | null) => void;
  onOpen: () => void;
  onCopy: () => void;
  onDelete: () => void;
}) {
  return (
    <tr className="border-b border-slate-100 transition hover:bg-slate-50/70">
      <td className="px-5 py-4">
        <button
          type="button"
          onClick={onOpen}
          className="flex items-center gap-3 text-left"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-lg">
            {item.flag}
          </span>

          <span>
            <span className="block text-sm font-semibold text-slate-900">
              {item.phoneNumber}
            </span>

            <span className="mt-1 block text-xs text-slate-400">
              {item.country}
            </span>
          </span>
        </button>
      </td>

      <td className="px-5 py-4">
        <span className="text-sm font-medium text-slate-700">
          {item.service}
        </span>

        <span className="mt-1 block font-mono text-[10px] text-slate-400">
          {item.activationId}
        </span>
      </td>

      <td className="px-5 py-4">
        <StatusBadge status={item.status} />
      </td>

      <td className="px-5 py-4">
        {item.otp ? (
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center gap-2 rounded-lg bg-teal-50 px-2.5 py-1.5 font-mono text-sm font-bold tracking-wider text-teal-700 transition hover:bg-teal-100"
          >
            {item.otp}
            <Copy className="h-3.5 w-3.5" />
          </button>
        ) : (
          <span className="text-sm text-slate-400">—</span>
        )}
      </td>

      <td className="px-5 py-4">
        <span className="text-sm font-semibold text-slate-800">
          ${item.price.toFixed(2)}
        </span>
      </td>

      <td className="px-5 py-4">
        <span className="text-sm text-slate-600">{item.createdAt}</span>
      </td>

      <td className="px-5 py-4 text-right">
        <div className="relative inline-block">
          <button
            type="button"
            onClick={() => setMenuId(menuId === item.id ? null : item.id)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <MoreVertical className="h-4 w-4" />
          </button>

          {menuId === item.id && (
            <div className="absolute right-0 top-10 z-30 w-48 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 text-left shadow-xl">
              <button
                type="button"
                onClick={onOpen}
                className="flex w-full items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                <ExternalLink className="h-4 w-4" />
                View details
              </button>

              <button
                type="button"
                onClick={onCopy}
                className="flex w-full items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                <Copy className="h-4 w-4" />
                Copy number
              </button>

              <button
                type="button"
                onClick={onDelete}
                className="flex w-full items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4" />
                Remove record
              </button>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}

/* -------------------------------------------------------------------------- */
/* MOBILE CARD                                                                 */
/* -------------------------------------------------------------------------- */

function HistoryMobileCard({
  item,
  onOpen,
  onCopy,
  onDelete,
}: {
  item: VerificationHistory;
  onOpen: () => void;
  onCopy: () => void;
  onDelete: () => void;
}) {
  return (
    <article className="p-4 transition hover:bg-slate-50" onClick={onOpen}>
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-lg">
          {item.flag}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold text-slate-900">
                {item.phoneNumber}
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                {item.country} • {item.service}
              </p>
            </div>

            <StatusBadge status={item.status} />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-slate-50 p-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                OTP
              </p>

              <p className="mt-1 font-mono text-sm font-bold tracking-wider text-slate-800">
                {item.otp || "—"}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Amount
              </p>

              <p className="mt-1 text-sm font-bold text-slate-800">
                ${item.price.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="flex items-center gap-1 text-xs text-slate-400">
              <Clock3 className="h-3.5 w-3.5" />
              {item.createdAt}
            </span>

            <div
              className="flex gap-1"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={onCopy}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <Copy className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={onDelete}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-600"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/* STATUS                                                                      */
/* -------------------------------------------------------------------------- */

function StatusBadge({ status }: { status: HistoryStatus }) {
  const config = {
    completed: {
      label: "Completed",
      className: "bg-emerald-50 text-emerald-700 border-emerald-100",
      icon: CheckCircle2,
    },

    expired: {
      label: "Expired",
      className: "bg-amber-50 text-amber-700 border-amber-100",
      icon: Clock3,
    },

    cancelled: {
      label: "Cancelled",
      className: "bg-slate-100 text-slate-600 border-slate-200",
      icon: XCircle,
    },

    failed: {
      label: "Failed",
      className: "bg-red-50 text-red-700 border-red-100",
      icon: AlertCircle,
    },
  }[status];

  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${config.className}`}
    >
      <Icon className="h-3.5 w-3.5" />
      {config.label}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* FILTER                                                                      */
/* -------------------------------------------------------------------------- */

function FilterSelect({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options: {
    label: string;
    value: string;
  }[];
}) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="h-11 min-w-[145px] rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-600 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

/* -------------------------------------------------------------------------- */
/* EMPTY                                                                       */
/* -------------------------------------------------------------------------- */

function EmptyHistory() {
  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center px-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
        <FileText className="h-7 w-7" />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-slate-900">
        No verification history found
      </h3>

      <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
        Try changing your filters or search terms. Completed and previous
        verification activity will appear here.
      </p>

      <a
        href="/verification/buy"
        className="mt-5 inline-flex h-10 items-center gap-2 rounded-xl bg-teal-700 px-4 text-sm font-semibold text-white transition hover:bg-teal-800"
      >
        <Smartphone className="h-4 w-4" />
        Buy Number
      </a>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* DETAILS DRAWER                                                              */
/* -------------------------------------------------------------------------- */

function HistoryDetails({
  item,
  onClose,
  onCopy,
}: {
  item: VerificationHistory;
  onClose: () => void;
  onCopy: () => void;
}) {
  return (
    <>
      <button
        type="button"
        aria-label="Close details"
        onClick={onClose}
        className="fixed inset-0 z-40 cursor-default bg-slate-950/30 backdrop-blur-[2px]"
      />

      <aside className="fixed right-0 top-0 z-50 flex h-full w-full max-w-lg flex-col bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Verification details
            </p>

            <h2 className="mt-1 text-lg font-bold text-slate-900">
              {item.service}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5">
          {/* Status */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg shadow-sm">
                  {item.flag}
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    {item.phoneNumber}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">{item.country}</p>
                </div>
              </div>

              <StatusBadge status={item.status} />
            </div>
          </div>

          {/* OTP */}
          {item.otp && (
            <div className="mt-5 rounded-2xl border border-teal-100 bg-teal-50 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-teal-700">
                <ShieldCheck className="h-4 w-4" />
                Verification code
              </div>

              <div className="mt-3 flex items-center justify-between gap-3">
                <span className="font-mono text-3xl font-bold tracking-[0.2em] text-teal-950">
                  {item.otp}
                </span>

                <button
                  type="button"
                  onClick={() => navigator.clipboard.writeText(item.otp!)}
                  className="inline-flex h-10 items-center gap-2 rounded-xl bg-white px-3 text-sm font-semibold text-teal-700 shadow-sm transition hover:bg-teal-100"
                >
                  <Copy className="h-4 w-4" />
                  Copy
                </button>
              </div>
            </div>
          )}

          {/* SMS */}
          {item.smsMessage && (
            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-900">
                  Received SMS
                </h3>

                <button
                  type="button"
                  onClick={() =>
                    navigator.clipboard.writeText(item.smsMessage!)
                  }
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700"
                >
                  <Copy className="h-3.5 w-3.5" />
                  Copy
                </button>
              </div>

              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm leading-7 text-slate-700">
                  {item.smsMessage}
                </p>
              </div>
            </div>
          )}

          {/* Information */}
          <div className="mt-5">
            <h3 className="mb-3 text-sm font-semibold text-slate-900">
              Activation information
            </h3>

            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <InfoRow label="Phone number" value={item.phoneNumber} />

              <InfoRow label="Country" value={`${item.flag} ${item.country}`} />

              <InfoRow label="Service" value={item.service} />

              <InfoRow label="Provider" value={item.provider} />

              <InfoRow label="Price" value={`$${item.price.toFixed(2)}`} />

              <InfoRow label="Activation ID" value={item.activationId} mono />

              <InfoRow label="Created" value={item.createdAt} />

              {item.completedAt && (
                <InfoRow label="Completed" value={item.completedAt} />
              )}

              {item.expiresAt && (
                <InfoRow label="Expired" value={item.expiresAt} />
              )}
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-6">
            <h3 className="mb-4 text-sm font-semibold text-slate-900">
              Activity
            </h3>

            <div className="relative space-y-5 pl-7">
              <div className="absolute bottom-2 left-[7px] top-2 w-px bg-slate-200" />

              <TimelineItem
                icon={<Smartphone className="h-3.5 w-3.5" />}
                title="Number activated"
                description={item.createdAt}
                active
              />

              {item.smsReceived && (
                <TimelineItem
                  icon={<Inbox className="h-3.5 w-3.5" />}
                  title="SMS received"
                  description="Verification message received"
                  active
                />
              )}

              {item.status === "completed" && (
                <TimelineItem
                  icon={<Check className="h-3.5 w-3.5" />}
                  title="Verification completed"
                  description={item.completedAt || "Completed successfully"}
                  active
                />
              )}

              {item.status === "expired" && (
                <TimelineItem
                  icon={<Clock3 className="h-3.5 w-3.5" />}
                  title="Number expired"
                  description={item.expiresAt || "Activation expired"}
                  active
                />
              )}

              {item.status === "failed" && (
                <TimelineItem
                  icon={<XCircle className="h-3.5 w-3.5" />}
                  title="Verification failed"
                  description="Verification was unsuccessful"
                  active
                />
              )}

              {item.status === "cancelled" && (
                <TimelineItem
                  icon={<XCircle className="h-3.5 w-3.5" />}
                  title="Activation cancelled"
                  description="Activation was cancelled"
                  active
                />
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 bg-white p-4">
          <button
            type="button"
            onClick={onCopy}
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-slate-900 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            <Copy className="h-4 w-4" />
            Copy Phone Number
          </button>
        </div>
      </aside>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* INFO ROW                                                                    */
/* -------------------------------------------------------------------------- */

function InfoRow({
  label,
  value,
  mono = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-4 py-3 last:border-b-0">
      <span className="text-xs font-medium text-slate-400">{label}</span>

      <span
        className={`max-w-[65%] break-all text-right text-sm font-medium text-slate-700 ${
          mono ? "font-mono text-xs" : ""
        }`}
      >
        {value}
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* TIMELINE                                                                    */
/* -------------------------------------------------------------------------- */

function TimelineItem({
  icon,
  title,
  description,
  active = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  active?: boolean;
}) {
  return (
    <div className="relative flex gap-3">
      <div
        className={`absolute -left-7 flex h-4 w-4 items-center justify-center rounded-full ${
          active ? "bg-teal-600 text-white" : "bg-slate-200 text-slate-500"
        }`}
      >
        {icon}
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-800">{title}</p>

        <p className="mt-1 text-xs text-slate-400">{description}</p>
      </div>
    </div>
  );
}
