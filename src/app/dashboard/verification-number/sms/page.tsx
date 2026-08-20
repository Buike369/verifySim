"use client";

import {
  Check,
  CheckCheck,
  ChevronLeft,
  ChevronRight,
  Clipboard,
  Clock3,
  Copy,
  Inbox,
  Mail,
  MailOpen,
  MoreVertical,
  Phone,
  RefreshCw,
  Search,
  ShieldCheck,
  Smartphone,
  Trash2,
  X,
  Zap,
} from "lucide-react";
import { useMemo, useState } from "react";

type SmsStatus = "read" | "unread";

type SmsMessage = {
  id: string;
  sender: string;
  phoneNumber: string;
  country: string;
  countryCode: string;
  flag: string;
  service: string;
  message: string;
  otp: string | null;
  status: SmsStatus;
  receivedAt: string;
  activationId: string;
  numberId: string;
};

const initialMessages: SmsMessage[] = [
  {
    id: "sms_001",
    sender: "Google",
    phoneNumber: "+1 202 555 0187",
    country: "United States",
    countryCode: "US",
    flag: "🇺🇸",
    service: "Google",
    message: "Your Google verification code is 482913. Do not share this code with anyone.",
    otp: "482913",
    status: "unread",
    receivedAt: "2 min ago",
    activationId: "act_89321",
    numberId: "num_1001",
  },
  {
    id: "sms_002",
    sender: "Telegram",
    phoneNumber: "+44 7700 900123",
    country: "United Kingdom",
    countryCode: "GB",
    flag: "🇬🇧",
    service: "Telegram",
    message: "Telegram login code: 728491. Please do not give this code to anyone.",
    otp: "728491",
    status: "unread",
    receivedAt: "8 min ago",
    activationId: "act_89320",
    numberId: "num_1002",
  },
  {
    id: "sms_003",
    sender: "Facebook",
    phoneNumber: "+1 415 555 0132",
    country: "United States",
    countryCode: "US",
    flag: "🇺🇸",
    service: "Facebook",
    message: "Your Facebook confirmation code is 182937.",
    otp: "182937",
    status: "read",
    receivedAt: "15 min ago",
    activationId: "act_89319",
    numberId: "num_1003",
  },
  {
    id: "sms_004",
    sender: "WhatsApp",
    phoneNumber: "+33 6 12 34 56 78",
    country: "France",
    countryCode: "FR",
    flag: "🇫🇷",
    service: "WhatsApp",
    message: "Your WhatsApp verification code is 941823.",
    otp: "941823",
    status: "read",
    receivedAt: "24 min ago",
    activationId: "act_89318",
    numberId: "num_1004",
  },
  {
    id: "sms_005",
    sender: "Microsoft",
    phoneNumber: "+49 151 23456789",
    country: "Germany",
    countryCode: "DE",
    flag: "🇩🇪",
    service: "Microsoft",
    message: "Use 639201 as your Microsoft account security code.",
    otp: "639201",
    status: "unread",
    receivedAt: "31 min ago",
    activationId: "act_89317",
    numberId: "num_1005",
  },
  {
    id: "sms_006",
    sender: "Amazon",
    phoneNumber: "+1 305 555 0164",
    country: "United States",
    countryCode: "US",
    flag: "🇺🇸",
    service: "Amazon",
    message: "Amazon OTP: 531904. This code will expire shortly.",
    otp: "531904",
    status: "read",
    receivedAt: "42 min ago",
    activationId: "act_89316",
    numberId: "num_1006",
  },
  {
    id: "sms_007",
    sender: "Discord",
    phoneNumber: "+81 90 1234 5678",
    country: "Japan",
    countryCode: "JP",
    flag: "🇯🇵",
    service: "Discord",
    message: "Your Discord verification code is 812637.",
    otp: "812637",
    status: "read",
    receivedAt: "1 hour ago",
    activationId: "act_89315",
    numberId: "num_1007",
  },
];

function extractOtp(message: string): string | null {
  const patterns = [
    /\b\d{6}\b/,
    /\b\d{5}\b/,
    /\b\d{4}\b/,
  ];

  for (const pattern of patterns) {
    const match = message.match(pattern);

    if (match) {
      return match[0];
    }
  }

  return null;
}

function maskPhone(phone: string) {
  if (phone.length < 8) return phone;

  return `${phone.slice(0, 5)}••••${phone.slice(-3)}`;
}

export default function SmsPage() {
  const [messages, setMessages] = useState<SmsMessage[]>(initialMessages);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    "all" | "unread" | "read"
  >("all");

  const [countryFilter, setCountryFilter] = useState("all");
  const [serviceFilter, setServiceFilter] = useState("all");

  const [selectedMessage, setSelectedMessage] =
    useState<SmsMessage | null>(null);

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const itemsPerPage = 5;

  const countries = useMemo(() => {
    return Array.from(
      new Set(messages.map((message) => message.country))
    );
  }, [messages]);

  const services = useMemo(() => {
    return Array.from(
      new Set(messages.map((message) => message.service))
    );
  }, [messages]);

  const filteredMessages = useMemo(() => {
    const query = search.toLowerCase().trim();

    return messages.filter((message) => {
      const matchesSearch =
        !query ||
        message.sender.toLowerCase().includes(query) ||
        message.phoneNumber.toLowerCase().includes(query) ||
        message.message.toLowerCase().includes(query) ||
        message.service.toLowerCase().includes(query) ||
        message.otp?.includes(query);

      const matchesStatus =
        statusFilter === "all" ||
        message.status === statusFilter;

      const matchesCountry =
        countryFilter === "all" ||
        message.country === countryFilter;

      const matchesService =
        serviceFilter === "all" ||
        message.service === serviceFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesCountry &&
        matchesService
      );
    });
  }, [
    messages,
    search,
    statusFilter,
    countryFilter,
    serviceFilter,
  ]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredMessages.length / itemsPerPage)
  );

  const paginatedMessages = filteredMessages.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalMessages = messages.length;

  const unreadMessages = messages.filter(
    (message) => message.status === "unread"
  ).length;

  const otpMessages = messages.filter(
    (message) => Boolean(message.otp)
  ).length;

  const todayMessages = messages.length;

  function resetPage() {
    setCurrentPage(1);
  }

  function copyText(text: string, label = "Copied") {
    navigator.clipboard.writeText(text);

    // Replace with your toast library if desired.
    console.log(label);
  }

  function markAsRead(id: string) {
    setMessages((current) =>
      current.map((message) =>
        message.id === id
          ? { ...message, status: "read" }
          : message
      )
    );

    setSelectedMessage((current) =>
      current?.id === id
        ? { ...current, status: "read" }
        : current
    );
  }

  function markAsUnread(id: string) {
    setMessages((current) =>
      current.map((message) =>
        message.id === id
          ? { ...message, status: "unread" }
          : message
      )
    );

    setSelectedMessage((current) =>
      current?.id === id
        ? { ...current, status: "unread" }
        : current
    );
  }

  function markAllAsRead() {
    setMessages((current) =>
      current.map((message) => ({
        ...message,
        status: "read",
      }))
    );
  }

  function deleteMessage(id: string) {
    setMessages((current) =>
      current.filter((message) => message.id !== id)
    );

    if (selectedMessage?.id === id) {
      setSelectedMessage(null);
    }

    setOpenMenu(null);
  }

  async function refreshMessages() {
    setIsRefreshing(true);

    try {
      /*
       * Production:
       *
       * const response = await fetch(
       *   "/api/verification/sms",
       *   {
       *     cache: "no-store",
       *   }
       * );
       *
       * const data = await response.json();
       * setMessages(data.messages);
       */

      await new Promise((resolve) =>
        setTimeout(resolve, 800)
      );
    } finally {
      setIsRefreshing(false);
    }
  }

  function openMessage(message: SmsMessage) {
    setSelectedMessage(message);

    if (message.status === "unread") {
      markAsRead(message.id);
    }

    setOpenMenu(null);
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <div className="mx-auto w-full max-w-[1500px] px-4 py-5 sm:px-6 lg:px-8 lg:py-8">

        {/* Header */}
        <section className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
              <span>Verification</span>
              <ChevronRight className="h-4 w-4" />
              <span className="font-medium text-slate-900">
                SMS
              </span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              SMS Messages
            </h1>

            <p className="mt-1 max-w-2xl text-sm text-slate-500 sm:text-base">
              View and manage verification messages received
              on your active numbers.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={refreshMessages}
              disabled={isRefreshing}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <RefreshCw
                className={`h-4 w-4 ${
                  isRefreshing ? "animate-spin" : ""
                }`}
              />
              Refresh
            </button>

            <button
              type="button"
              onClick={markAllAsRead}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              <CheckCheck className="h-4 w-4" />
              Mark all read
            </button>

            <a
              href="/verification/buy"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#0f766e] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b625b]"
            >
              <Smartphone className="h-4 w-4" />
              Buy Number
            </a>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Messages"
            value={totalMessages}
            description="All received messages"
            icon={<Inbox className="h-5 w-5" />}
          />

          <StatCard
            title="Unread"
            value={unreadMessages}
            description="Need your attention"
            icon={<Mail className="h-5 w-5" />}
            highlight={unreadMessages > 0}
          />

          <StatCard
            title="OTP Messages"
            value={otpMessages}
            description="Codes detected automatically"
            icon={<ShieldCheck className="h-5 w-5" />}
          />

          <StatCard
            title="Today"
            value={todayMessages}
            description="Messages received"
            icon={<Zap className="h-5 w-5" />}
          />
        </section>

        {/* Main card */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          {/* Toolbar */}
          <div className="border-b border-slate-200 p-4 sm:p-5">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">

              {/* Search */}
              <div className="relative w-full xl:max-w-md">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                    resetPage();
                  }}
                  placeholder="Search messages, numbers or OTP..."
                  className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#0f766e] focus:bg-white focus:ring-4 focus:ring-[#0f766e]/10"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-2">

                <FilterSelect
                  value={statusFilter}
                  onChange={(value) => {
                    setStatusFilter(
                      value as "all" | "unread" | "read"
                    );
                    resetPage();
                  }}
                  options={[
                    { label: "All messages", value: "all" },
                    { label: "Unread", value: "unread" },
                    { label: "Read", value: "read" },
                  ]}
                />

                <FilterSelect
                  value={countryFilter}
                  onChange={(value) => {
                    setCountryFilter(value);
                    resetPage();
                  }}
                  options={[
                    { label: "All countries", value: "all" },
                    ...countries.map((country) => ({
                      label: country,
                      value: country,
                    })),
                  ]}
                />

                <FilterSelect
                  value={serviceFilter}
                  onChange={(value) => {
                    setServiceFilter(value);
                    resetPage();
                  }}
                  options={[
                    { label: "All services", value: "all" },
                    ...services.map((service) => ({
                      label: service,
                      value: service,
                    })),
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Inbox */}
          <div className="divide-y divide-slate-100">
            {paginatedMessages.length === 0 ? (
              <EmptyState />
            ) : (
              paginatedMessages.map((message) => (
                <SmsRow
                  key={message.id}
                  message={message}
                  openMenu={openMenu}
                  setOpenMenu={setOpenMenu}
                  onOpen={() => openMessage(message)}
                  onCopyOtp={() =>
                    message.otp &&
                    copyText(message.otp, "OTP copied")
                  }
                  onCopyMessage={() =>
                    copyText(message.message, "Message copied")
                  }
                  onMarkRead={() => markAsRead(message.id)}
                  onMarkUnread={() =>
                    markAsUnread(message.id)
                  }
                  onDelete={() =>
                    deleteMessage(message.id)
                  }
                />
              ))
            )}
          </div>

          {/* Pagination */}
          {filteredMessages.length > 0 && (
            <div className="flex flex-col gap-3 border-t border-slate-200 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <p className="text-sm text-slate-500">
                Showing{" "}
                <span className="font-semibold text-slate-700">
                  {(currentPage - 1) * itemsPerPage + 1}
                </span>{" "}
                to{" "}
                <span className="font-semibold text-slate-700">
                  {Math.min(
                    currentPage * itemsPerPage,
                    filteredMessages.length
                  )}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-slate-700">
                  {filteredMessages.length}
                </span>
              </p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() =>
                    setCurrentPage((page) =>
                      Math.max(1, page - 1)
                    )
                  }
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <span className="min-w-20 text-center text-sm font-medium text-slate-600">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() =>
                    setCurrentPage((page) =>
                      Math.min(totalPages, page + 1)
                    )
                  }
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </section>
      </div>

      {/* Details Drawer */}
      {selectedMessage && (
        <SmsDetailsDrawer
          message={selectedMessage}
          onClose={() => setSelectedMessage(null)}
          onCopyOtp={() =>
            selectedMessage.otp &&
            copyText(selectedMessage.otp, "OTP copied")
          }
          onCopyMessage={() =>
            copyText(selectedMessage.message, "Message copied")
          }
        />
      )}
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Components                                                                  */
/* -------------------------------------------------------------------------- */

function StatCard({
  title,
  value,
  description,
  icon,
  highlight = false,
}: {
  title: string;
  value: number;
  description: string;
  icon: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            {value.toLocaleString()}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {description}
          </p>
        </div>

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
            highlight
              ? "bg-amber-50 text-amber-600"
              : "bg-teal-50 text-teal-700"
          }`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

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
      className="h-11 min-w-[145px] rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-600 outline-none transition focus:border-[#0f766e] focus:ring-4 focus:ring-[#0f766e]/10"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

function SmsRow({
  message,
  openMenu,
  setOpenMenu,
  onOpen,
  onCopyOtp,
  onCopyMessage,
  onMarkRead,
  onMarkUnread,
  onDelete,
}: {
  message: SmsMessage;
  openMenu: string | null;
  setOpenMenu: (id: string | null) => void;
  onOpen: () => void;
  onCopyOtp: () => void;
  onCopyMessage: () => void;
  onMarkRead: () => void;
  onMarkUnread: () => void;
  onDelete: () => void;
}) {
  return (
    <article
      className={`group relative p-4 transition hover:bg-slate-50 sm:p-5 ${
        message.status === "unread"
          ? "bg-teal-50/30"
          : "bg-white"
      }`}
    >
      <div className="flex gap-3 sm:gap-4">

        {/* Sender avatar */}
        <div className="hidden shrink-0 sm:block">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-slate-700">
            {message.sender.slice(0, 2).toUpperCase()}
          </div>
        </div>

        <div className="min-w-0 flex-1">

          {/* Top */}
          <div className="flex flex-wrap items-start justify-between gap-2">
            <button
              type="button"
              onClick={onOpen}
              className="text-left"
            >
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-900">
                  {message.sender}
                </span>

                {message.status === "unread" && (
                  <span className="rounded-full bg-teal-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-teal-700">
                    New
                  </span>
                )}
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                <span>{message.flag}</span>
                <span>{maskPhone(message.phoneNumber)}</span>
                <span>•</span>
                <span>{message.service}</span>
              </div>
            </button>

            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-xs text-slate-400">
                <Clock3 className="h-3.5 w-3.5" />
                {message.receivedAt}
              </span>

              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setOpenMenu(
                      openMenu === message.id
                        ? null
                        : message.id
                    )
                  }
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                >
                  <MoreVertical className="h-4 w-4" />
                </button>

                {openMenu === message.id && (
                  <div className="absolute right-0 top-9 z-20 w-48 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">

                    <button
                      type="button"
                      onClick={onOpen}
                      className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <MailOpen className="h-4 w-4" />
                      View message
                    </button>

                    {message.status === "unread" ? (
                      <button
                        type="button"
                        onClick={onMarkRead}
                        className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                      >
                        <Check className="h-4 w-4" />
                        Mark as read
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={onMarkUnread}
                        className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                      >
                        <Mail className="h-4 w-4" />
                        Mark as unread
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={onCopyMessage}
                      className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <Copy className="h-4 w-4" />
                      Copy message
                    </button>

                    <button
                      type="button"
                      onClick={onDelete}
                      className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Message */}
          <button
            type="button"
            onClick={onOpen}
            className="mt-3 block w-full text-left"
          >
            <p
              className={`line-clamp-2 text-sm leading-6 ${
                message.status === "unread"
                  ? "font-medium text-slate-800"
                  : "text-slate-600"
              }`}
            >
              {message.message}
            </p>
          </button>

          {/* Footer */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {message.otp ? (
              <div className="flex items-center gap-2 rounded-lg border border-teal-100 bg-teal-50 px-2.5 py-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-teal-700" />

                <span className="text-xs font-medium text-teal-700">
                  OTP
                </span>

                <span className="font-mono text-sm font-bold tracking-wider text-teal-900">
                  {message.otp}
                </span>

                <button
                  type="button"
                  onClick={onCopyOtp}
                  className="ml-1 rounded-md p-1 text-teal-600 transition hover:bg-teal-100"
                  title="Copy OTP"
                >
                  <Clipboard className="h-3.5 w-3.5" />
                </button>
              </div>
            ) : (
              <span className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-500">
                No OTP detected
              </span>
            )}

            <button
              type="button"
              onClick={onOpen}
              className="rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            >
              View details
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function EmptyState() {
  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center px-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
        <Inbox className="h-7 w-7" />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-slate-900">
        No SMS messages found
      </h3>

      <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
        Your verification messages will appear here when
        they are received on your active numbers.
      </p>

      <a
        href="/verification/buy"
        className="mt-5 inline-flex h-10 items-center gap-2 rounded-xl bg-[#0f766e] px-4 text-sm font-semibold text-white transition hover:bg-[#0b625b]"
      >
        <Smartphone className="h-4 w-4" />
        Buy a Number
      </a>
    </div>
  );
}

function SmsDetailsDrawer({
  message,
  onClose,
  onCopyOtp,
  onCopyMessage,
}: {
  message: SmsMessage;
  onClose: () => void;
  onCopyOtp: () => void;
  onCopyMessage: () => void;
}) {
  return (
    <>
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="fixed inset-0 z-40 cursor-default bg-slate-950/30 backdrop-blur-[2px]"
      />

      {/* Drawer */}
      <aside className="fixed right-0 top-0 z-50 flex h-full w-full max-w-lg flex-col bg-white shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
              SMS Details
            </p>

            <h2 className="mt-1 text-lg font-bold text-slate-900">
              {message.sender}
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

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5">

          {/* Sender */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg shadow-sm">
                {message.flag}
              </div>

              <div>
                <p className="font-semibold text-slate-900">
                  {message.service}
                </p>

                <p className="mt-0.5 flex items-center gap-1 text-sm text-slate-500">
                  <Phone className="h-3.5 w-3.5" />
                  {message.phoneNumber}
                </p>
              </div>
            </div>
          </div>

          {/* OTP */}
          {message.otp && (
            <div className="mt-5 rounded-2xl border border-teal-100 bg-teal-50 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-teal-700">
                <ShieldCheck className="h-4 w-4" />
                Verification code
              </div>

              <div className="mt-3 flex items-center justify-between gap-3">
                <span className="font-mono text-3xl font-bold tracking-[0.2em] text-teal-950">
                  {message.otp}
                </span>

                <button
                  type="button"
                  onClick={onCopyOtp}
                  className="inline-flex h-10 items-center gap-2 rounded-xl bg-white px-3 text-sm font-semibold text-teal-700 shadow-sm transition hover:bg-teal-100"
                >
                  <Copy className="h-4 w-4" />
                  Copy
                </button>
              </div>
            </div>
          )}

          {/* Message */}
          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-900">
                Message
              </h3>

              <button
                type="button"
                onClick={onCopyMessage}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-800"
              >
                <Copy className="h-3.5 w-3.5" />
                Copy
              </button>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="whitespace-pre-wrap text-sm leading-7 text-slate-700">
                {message.message}
              </p>
            </div>
          </div>

          {/* Information */}
          <div className="mt-5">
            <h3 className="mb-3 text-sm font-semibold text-slate-900">
              Activation information
            </h3>

            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <InfoRow
                label="Number"
                value={message.phoneNumber}
              />

              <InfoRow
                label="Country"
                value={`${message.flag} ${message.country}`}
              />

              <InfoRow
                label="Service"
                value={message.service}
              />

              <InfoRow
                label="Activation ID"
                value={message.activationId}
                mono
              />

              <InfoRow
                label="Number ID"
                value={message.numberId}
                mono
              />

              <InfoRow
                label="Received"
                value={message.receivedAt}
              />

              <InfoRow
                label="Status"
                value={
                  message.status === "unread"
                    ? "Unread"
                    : "Read"
                }
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 bg-white p-4">
          <button
            type="button"
            onClick={onClose}
            className="h-11 w-full rounded-xl bg-slate-900 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Close
          </button>
        </div>
      </aside>
    </>
  );
}

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
      <span className="text-xs font-medium text-slate-400">
        {label}
      </span>

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