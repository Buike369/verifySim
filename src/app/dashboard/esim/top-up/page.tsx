"use client";

import {
  Activity,
  AlertCircle,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CreditCard,
  Database,
  Globe2,
  Info,
  LockKeyhole,
  Loader2,
  Plus,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Wallet,
  Wifi,
  X,
  XCircle,
  Zap,
} from "lucide-react";

import { useMemo, useState } from "react";

/* ==========================================================================
   TYPES
============================================================================ */

type EsimStatus = "active" | "ready" | "expired";

type Esim = {
  id: string;
  name: string;
  country: string;
  flag: string;
  plan: string;
  remaining: number;
  totalData: number;
  expires: string;
  status: EsimStatus;
};

type TopUpPackage = {
  id: string;
  data: number;
  label: string;
  price: number;
  currency: string;
  popular?: boolean;
};

type PaymentMethod =
  | "wallet"
  | "card";

type PaymentStatus =
  | "idle"
  | "processing"
  | "success"
  | "failed";

/* ==========================================================================
   DEMO DATA
============================================================================ */

const esimList: Esim[] = [
  {
    id: "esim_usa_001",
    name: "USA Travel eSIM",
    country: "United States",
    flag: "🇺🇸",
    plan: "USA 10GB",
    remaining: 8.42,
    totalData: 10,
    expires: "Sep 12, 2026",
    status: "active",
  },
  {
    id: "esim_uk_001",
    name: "UK Travel eSIM",
    country: "United Kingdom",
    flag: "🇬🇧",
    plan: "UK 5GB",
    remaining: 3.72,
    totalData: 5,
    expires: "Sep 05, 2026",
    status: "active",
  },
  {
    id: "esim_ng_001",
    name: "Nigeria eSIM",
    country: "Nigeria",
    flag: "🇳🇬",
    plan: "Nigeria 15GB",
    remaining: 15,
    totalData: 15,
    expires: "Sep 20, 2026",
    status: "ready",
  },
];

const topUpPackages: TopUpPackage[] = [
  {
    id: "topup_1gb",
    data: 1,
    label: "1 GB",
    price: 3.99,
    currency: "USD",
  },
  {
    id: "topup_3gb",
    data: 3,
    label: "3 GB",
    price: 8.99,
    currency: "USD",
  },
  {
    id: "topup_5gb",
    data: 5,
    label: "5 GB",
    price: 12.99,
    currency: "USD",
    popular: true,
  },
  {
    id: "topup_10gb",
    data: 10,
    label: "10 GB",
    price: 21.99,
    currency: "USD",
  },
  {
    id: "topup_20gb",
    data: 20,
    label: "20 GB",
    price: 38.99,
    currency: "USD",
  },
];

/* ==========================================================================
   MAIN PAGE
============================================================================ */

export default function EsimTopUpPage() {
  const [selectedEsimId, setSelectedEsimId] =
    useState(esimList[0].id);

  const [selectedPackageId, setSelectedPackageId] =
    useState(topUpPackages[2].id);

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("wallet");

  const [paymentStatus, setPaymentStatus] =
    useState<PaymentStatus>("idle");

  const [walletBalance, setWalletBalance] =
    useState(124.5);

  const [showEsimSelector, setShowEsimSelector] =
    useState(false);

  const [showSuccess, setShowSuccess] =
    useState(false);

  const [showFailed, setShowFailed] =
    useState(false);

  const [processingText, setProcessingText] =
    useState("Processing payment...");

  const [refreshing, setRefreshing] =
    useState(false);

  const selectedEsim = useMemo(
    () =>
      esimList.find(
        (esim) =>
          esim.id === selectedEsimId
      ) ?? esimList[0],
    [selectedEsimId]
  );

  const selectedPackage = useMemo(
    () =>
      topUpPackages.find(
        (item) =>
          item.id === selectedPackageId
      ) ?? topUpPackages[2],
    [selectedPackageId]
  );

  const newBalance =
    selectedEsim.remaining +
    selectedPackage.data;

  /* ==========================================================================
     PAYMENT
  ========================================================================== */

  async function handleTopUp() {
    if (
      paymentMethod === "wallet" &&
      walletBalance < selectedPackage.price
    ) {
      setShowFailed(true);
      return;
    }

    setPaymentStatus("processing");
    setProcessingText("Creating top-up request...");

    /*
      PRODUCTION:

      const response = await fetch(
        "/api/esim/top-up",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            esimId: selectedEsim.id,
            packageId: selectedPackage.id,
            paymentMethod,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        setPaymentStatus("failed");
        setShowFailed(true);
        return;
      }
    */

    await delay(900);

    setProcessingText("Authorizing payment...");

    await delay(900);

    setProcessingText(
      "Applying data to your eSIM..."
    );

    await delay(1100);

    if (paymentMethod === "wallet") {
      setWalletBalance(
        (balance) =>
          Number(
            (
              balance -
              selectedPackage.price
            ).toFixed(2)
          )
      );
    }

    setPaymentStatus("success");
    setShowSuccess(true);
  }

  async function refreshBalance() {
    setRefreshing(true);

    /*
      Production:

      const response = await fetch(
        `/api/esim/${selectedEsim.id}`
      );

      const data = await response.json();

      Update your eSIM state here.
    */

    await delay(800);

    setRefreshing(false);
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-900">

      <div className="mx-auto w-full max-w-[1450px] px-4 py-5 sm:px-6 lg:px-8 lg:py-8">

        {/* ================================================================
            BREADCRUMB
        ================================================================= */}

        <div className="mb-6 flex items-center gap-2 text-xs text-slate-400">

          <a
            href="/esim"
            className="transition hover:text-cyan-700"
          >
            Data eSIM
          </a>

          <ChevronRight className="h-3.5 w-3.5" />

          <span className="font-semibold text-slate-700">
            Top Up
          </span>

        </div>

        {/* ================================================================
            HEADER
        ================================================================= */}

        <section className="mb-7">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

            <div className="flex items-start gap-3">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">

                <Plus className="h-6 w-6" />

              </div>

              <div>

                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Top Up eSIM
                </h1>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  Add more mobile data to your eSIM
                  without changing your existing
                  profile.
                </p>

              </div>

            </div>

            <button
              type="button"
              onClick={refreshBalance}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-xs font-bold text-slate-700 shadow-sm transition hover:bg-slate-50"
            >

              <RefreshCw
                className={`h-4 w-4 ${
                  refreshing
                    ? "animate-spin"
                    : ""
                }`}
              />

              Refresh balance

            </button>

          </div>

        </section>

        {/* ================================================================
            INFO NOTICE
        ================================================================= */}

        <section className="mb-5 flex items-start gap-3 rounded-2xl border border-cyan-100 bg-cyan-50/70 p-4">

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-cyan-700 shadow-sm">

            <ShieldCheck className="h-4 w-4" />

          </div>

          <div>

            <p className="text-xs font-bold text-cyan-900">
              Instant data top-up
            </p>

            <p className="mt-1 text-[10px] leading-5 text-cyan-800/70">
              Your selected data package will be
              added directly to the selected eSIM
              after successful payment.
            </p>

          </div>

        </section>

        {/* ================================================================
            SELECT ESIM
        ================================================================= */}

        <section className="mb-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

          <div className="mb-4 flex items-center justify-between">

            <div>

              <h2 className="text-sm font-bold text-slate-900">
                Select eSIM
              </h2>

              <p className="mt-1 text-[11px] text-slate-400">
                Choose which eSIM you want to top up.
              </p>

            </div>

            <Smartphone className="h-5 w-5 text-slate-300" />

          </div>

          <div className="grid gap-3 md:grid-cols-3">

            {esimList.map((esim) => {

              const active =
                esim.id === selectedEsimId;

              return (
                <button
                  key={esim.id}
                  type="button"
                  disabled={
                    esim.status ===
                    "expired"
                  }
                  onClick={() =>
                    setSelectedEsimId(
                      esim.id
                    )
                  }
                  className={`relative rounded-2xl border p-4 text-left transition ${
                    active
                      ? "border-cyan-400 bg-cyan-50/50 shadow-sm"
                      : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >

                  {active && (
                    <div className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-600 text-white">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                  )}

                  <div className="flex items-center gap-3">

                    <span className="text-2xl">
                      {esim.flag}
                    </span>

                    <div>

                      <p className="text-xs font-bold text-slate-800">
                        {esim.name}
                      </p>

                      <p className="mt-1 text-[10px] text-slate-400">
                        {esim.plan}
                      </p>

                    </div>

                  </div>

                  <div className="mt-4">

                    <div className="mb-2 flex items-center justify-between">

                      <span className="text-[10px] text-slate-400">
                        Data remaining
                      </span>

                      <span className="text-[10px] font-bold text-slate-700">
                        {esim.remaining} GB
                      </span>

                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">

                      <div
                        className="h-full rounded-full bg-cyan-500"
                        style={{
                          width: `${Math.min(
                            100,
                            (esim.remaining /
                              esim.totalData) *
                              100
                          )}%`,
                        }}
                      />

                    </div>

                  </div>

                  <div className="mt-3 flex items-center justify-between">

                    <span className="text-[9px] text-slate-400">
                      Expires {esim.expires}
                    </span>

                    <StatusBadge
                      status={esim.status}
                    />

                  </div>

                </button>
              );
            })}

          </div>

        </section>

        {/* ================================================================
            MAIN CONTENT
        ================================================================= */}

        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_400px]">

          {/* ================================================================
              PACKAGES
          ================================================================= */}

          <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">

            <div className="border-b border-slate-100 p-5 sm:p-6">

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-sm font-bold text-slate-900">
                    Choose data package
                  </h2>

                  <p className="mt-1 text-[11px] text-slate-400">
                    Select the amount of data you want
                    to add.
                  </p>

                </div>

                <Database className="h-5 w-5 text-slate-300" />

              </div>

            </div>

            <div className="grid gap-3 p-5 sm:grid-cols-2 lg:grid-cols-3 sm:p-6">

              {topUpPackages.map(
                (item) => {

                  const selected =
                    item.id ===
                    selectedPackageId;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() =>
                        setSelectedPackageId(
                          item.id
                        )
                      }
                      className={`relative rounded-2xl border p-5 text-left transition ${
                        selected
                          ? "border-cyan-400 bg-cyan-50/50 shadow-sm"
                          : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >

                      {item.popular && (
                        <span className="absolute right-3 top-3 rounded-full bg-cyan-600 px-2 py-1 text-[8px] font-bold text-white">
                          POPULAR
                        </span>
                      )}

                      {selected && (
                        <div className="absolute bottom-3 right-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-600 text-white">

                          <Check className="h-3.5 w-3.5" />

                        </div>
                      )}

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-cyan-600 shadow-sm">

                        <Wifi className="h-5 w-5" />

                      </div>

                      <p className="mt-4 text-lg font-bold text-slate-900">
                        {item.label}
                      </p>

                      <p className="mt-1 text-[10px] text-slate-400">
                        Additional mobile data
                      </p>

                      <p className="mt-5 text-xl font-bold text-slate-900">
                        ${item.price.toFixed(2)}
                      </p>

                    </button>
                  );
                }
              )}

            </div>

            {/* CUSTOM TOP UP */}

            <div className="border-t border-slate-100 p-5 sm:p-6">

              <button
                type="button"
                className="flex w-full items-center justify-between rounded-xl border border-dashed border-slate-300 p-4 text-left transition hover:border-cyan-400 hover:bg-cyan-50/30"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500">

                    <Plus className="h-4 w-4" />

                  </div>

                  <div>

                    <p className="text-xs font-bold text-slate-700">
                      Need a different amount?
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      Contact support for custom data
                      packages.
                    </p>

                  </div>

                </div>

                <ArrowRight className="h-4 w-4 text-slate-400" />

              </button>

            </div>

          </section>

          {/* ================================================================
              ORDER SUMMARY
          ================================================================= */}

          <aside className="space-y-5">

            {/* SUMMARY */}

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">

                  <Zap className="h-5 w-5" />

                </div>

                <div>

                  <h2 className="text-sm font-bold text-slate-900">
                    Top-up summary
                  </h2>

                  <p className="mt-1 text-[10px] text-slate-400">
                    Review before payment.
                  </p>

                </div>

              </div>

              <div className="mt-5 rounded-xl bg-slate-50 p-4">

                <div className="flex items-center gap-3">

                  <span className="text-2xl">
                    {selectedEsim.flag}
                  </span>

                  <div>

                    <p className="text-xs font-bold text-slate-800">
                      {selectedEsim.name}
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      {selectedEsim.country}
                    </p>

                  </div>

                </div>

              </div>

              <div className="mt-5 space-y-3">

                <SummaryRow
                  label="Current data"
                  value={`${selectedEsim.remaining} GB`}
                />

                <SummaryRow
                  label="Top-up"
                  value={`+${selectedPackage.data} GB`}
                />

                <SummaryRow
                  label="New balance"
                  value={`${newBalance.toFixed(
                    2
                  )} GB`}
                  highlight
                />

                <div className="my-3 h-px bg-slate-100" />

                <SummaryRow
                  label="Top-up price"
                  value={`$${selectedPackage.price.toFixed(
                    2
                  )}`}
                  bold
                />

              </div>

            </section>

            {/* PAYMENT METHOD */}

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-sm font-bold text-slate-900">
                    Payment method
                  </h2>

                  <p className="mt-1 text-[10px] text-slate-400">
                    Choose how you want to pay.
                  </p>

                </div>

                <CreditCard className="h-5 w-5 text-slate-300" />

              </div>

              <div className="mt-4 space-y-2">

                <PaymentOption
                  selected={
                    paymentMethod ===
                    "wallet"
                  }
                  icon={<Wallet />}
                  title="Wallet balance"
                  description={`Available: $${walletBalance.toFixed(
                    2
                  )}`}
                  onClick={() =>
                    setPaymentMethod(
                      "wallet"
                    )
                  }
                />

                <PaymentOption
                  selected={
                    paymentMethod ===
                    "card"
                  }
                  icon={<CreditCard />}
                  title="Card / payment gateway"
                  description="Pay securely"
                  onClick={() =>
                    setPaymentMethod(
                      "card"
                    )
                  }
                />

              </div>

            </section>

            {/* PAYMENT BUTTON */}

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              {paymentMethod ===
                "wallet" &&
                walletBalance <
                  selectedPackage.price && (
                  <div className="mb-4 flex items-start gap-2 rounded-xl bg-rose-50 p-3">

                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-600" />

                    <p className="text-[10px] leading-5 text-rose-700">
                      Your wallet balance is
                      insufficient for this top-up.
                    </p>

                  </div>
                )}

              <button
                type="button"
                disabled={
                  paymentStatus ===
                  "processing"
                }
                onClick={handleTopUp}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 text-xs font-bold text-white shadow-sm transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-60"
              >

                {paymentStatus ===
                "processing" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />

                    {processingText}
                  </>
                ) : (
                  <>
                    <LockKeyhole className="h-4 w-4" />

                    Top up for $
                    {selectedPackage.price.toFixed(
                      2
                    )}
                  </>
                )}

              </button>

              <div className="mt-3 flex items-center justify-center gap-2">

                <ShieldCheck className="h-3 w-3 text-emerald-600" />

                <p className="text-[9px] text-slate-400">
                  Secure payment processing
                </p>

              </div>

            </section>

          </aside>

        </div>

        {/* ================================================================
            RECENT ACTIVITY
        ================================================================= */}

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white shadow-sm">

          <div className="border-b border-slate-100 p-5 sm:p-6">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-500">

                <Activity className="h-5 w-5" />

              </div>

              <div>

                <h2 className="text-sm font-bold text-slate-900">
                  Top-up activity
                </h2>

                <p className="mt-1 text-[11px] text-slate-400">
                  Recent data top-up events.
                </p>

              </div>

            </div>

          </div>

          <div className="grid gap-3 p-5 sm:grid-cols-3 sm:p-6">

            <ActivityCard
              icon={<Plus />}
              title="5 GB top-up"
              description="USA Travel eSIM"
              amount="+5 GB"
              time="Today · 09:24 AM"
            />

            <ActivityCard
              icon={<CheckCircle2 />}
              title="Top-up completed"
              description="Payment confirmed"
              amount="$12.99"
              time="Today · 09:24 AM"
            />

            <ActivityCard
              icon={<Wallet />}
              title="Wallet payment"
              description="Wallet balance used"
              amount="-$12.99"
              time="Today · 09:24 AM"
            />

          </div>

        </section>

        {/* ================================================================
            SECURITY FOOTER
        ================================================================= */}

        <section className="mt-5 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-3">

            <LockKeyhole className="h-4 w-4 text-emerald-600" />

            <p className="text-[10px] leading-5 text-slate-500">
              Payments are processed securely. Your
              card details are not stored by this page.
            </p>

          </div>

          <a
            href="/transactions"
            className="text-[10px] font-bold text-cyan-700"
          >
            View transactions
          </a>

        </section>

      </div>

      {/* ================================================================
          SUCCESS MODAL
      ================================================================= */}

      {showSuccess && (
        <SuccessModal
          esim={selectedEsim}
          packageData={selectedPackage}
          newBalance={newBalance}
          onClose={() => {
            setShowSuccess(false);
            setPaymentStatus("idle");
          }}
        />
      )}

      {/* ================================================================
          FAILED MODAL
      ================================================================= */}

      {showFailed && (
        <FailedModal
          onClose={() => {
            setShowFailed(false);
            setPaymentStatus("idle");
          }}
        />
      )}

    </main>
  );
}

/* ==========================================================================
   PAYMENT OPTION
============================================================================ */

function PaymentOption({
  selected,
  icon,
  title,
  description,
  onClick,
}: {
  selected: boolean;
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left transition ${
        selected
          ? "border-cyan-400 bg-cyan-50/50"
          : "border-slate-200 hover:bg-slate-50"
      }`}
    >

      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
          selected
            ? "bg-cyan-600 text-white"
            : "bg-slate-100 text-slate-500"
        }`}
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1">

        <p className="text-xs font-bold text-slate-800">
          {title}
        </p>

        <p className="mt-1 truncate text-[9px] text-slate-400">
          {description}
        </p>

      </div>

      {selected && (
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-600 text-white">

          <Check className="h-3 w-3" />

        </div>
      )}

    </button>
  );
}

/* ==========================================================================
   SUMMARY ROW
============================================================================ */

function SummaryRow({
  label,
  value,
  highlight = false,
  bold = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  bold?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3">

      <span className="text-[10px] text-slate-400">
        {label}
      </span>

      <span
        className={`text-right text-[10px] ${
          bold || highlight
            ? "font-bold"
            : "font-semibold"
        } ${
          highlight
            ? "text-cyan-700"
            : "text-slate-700"
        }`}
      >
        {value}
      </span>

    </div>
  );
}

/* ==========================================================================
   STATUS BADGE
============================================================================ */

function StatusBadge({
  status,
}: {
  status: EsimStatus;
}) {
  const config = {
    active: {
      label: "Active",
      className:
        "bg-emerald-50 text-emerald-700",
    },

    ready: {
      label: "Ready",
      className:
        "bg-cyan-50 text-cyan-700",
    },

    expired: {
      label: "Expired",
      className:
        "bg-slate-100 text-slate-500",
    },
  }[status];

  return (
    <span
      className={`rounded-full px-2 py-1 text-[9px] font-bold ${config.className}`}
    >
      {config.label}
    </span>
  );
}

/* ==========================================================================
   ACTIVITY CARD
============================================================================ */

function ActivityCard({
  icon,
  title,
  description,
  amount,
  time,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  amount: string;
  time: string;
}) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">

      <div className="flex items-center justify-between">

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-slate-500 shadow-sm">

          {icon}

        </div>

        <span className="text-xs font-bold text-slate-700">
          {amount}
        </span>

      </div>

      <p className="mt-4 text-xs font-bold text-slate-700">
        {title}
      </p>

      <p className="mt-1 text-[10px] text-slate-400">
        {description}
      </p>

      <p className="mt-3 text-[9px] font-semibold text-slate-400">
        {time}
      </p>

    </div>
  );
}

/* ==========================================================================
   SUCCESS MODAL
============================================================================ */

function SuccessModal({
  esim,
  packageData,
  newBalance,
  onClose,
}: {
  esim: Esim;
  packageData: TopUpPackage;
  newBalance: number;
  onClose: () => void;
}) {
  return (
    <ModalOverlay onClose={onClose}>

      <div className="p-6 text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">

          <CheckCircle2 className="h-8 w-8" />

        </div>

        <h2 className="mt-5 text-lg font-bold text-slate-900">
          Top-up successful
        </h2>

        <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-slate-400">
          Your {packageData.label} data package
          has been successfully added to your
          {` ${esim.name}`}.
        </p>

        <div className="mt-5 rounded-2xl bg-slate-50 p-5">

          <p className="text-[10px] text-slate-400">
            New data balance
          </p>

          <p className="mt-1 text-3xl font-bold text-cyan-700">
            {newBalance.toFixed(2)} GB
          </p>

          <p className="mt-2 text-[10px] text-slate-400">
            +{packageData.data} GB added
          </p>

        </div>

        <div className="mt-5 grid grid-cols-2 gap-2">

          <a
            href="/esim/usage"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 text-[10px] font-bold text-slate-700"
          >
            View usage
          </a>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 items-center justify-center rounded-xl bg-cyan-600 text-[10px] font-bold text-white"
          >
            Done
          </button>

        </div>

      </div>

    </ModalOverlay>
  );
}

/* ==========================================================================
   FAILED MODAL
============================================================================ */

function FailedModal({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <ModalOverlay onClose={onClose}>

      <div className="p-6 text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-50 text-rose-600">

          <XCircle className="h-8 w-8" />

        </div>

        <h2 className="mt-5 text-lg font-bold text-slate-900">
          Top-up could not be completed
        </h2>

        <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-slate-400">
          Your wallet balance may be insufficient,
          or the payment could not be authorized.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 h-11 w-full rounded-xl bg-slate-900 text-xs font-bold text-white"
        >
          Try again
        </button>

      </div>

    </ModalOverlay>
  );
}

/* ==========================================================================
   MODAL OVERLAY
============================================================================ */

function ModalOverlay({
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
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]"
      />

      <div className="absolute left-1/2 top-1/2 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-white shadow-2xl">

        {children}

      </div>

    </div>
  );
}

/* ==========================================================================
   DELAY
============================================================================ */

function delay(ms: number) {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}