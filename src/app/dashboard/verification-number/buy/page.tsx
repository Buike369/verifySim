"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Search,
  ChevronDown,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Smartphone,
  Globe2,
  Wallet,
  RefreshCw,
  Copy,
  X,
  AlertCircle,
  MessageSquare,
  ArrowRight,
  Hash,
  Activity,
} from "lucide-react";

type Country = {
  id: string;
  name: string;
  code: string;
  flag: string;
};

type Service = {
  id: string;
  name: string;
  icon?: string;
};

type NumberItem = {
  id: string;
  number: string;
  country: string;
  countryCode: string;
  service: string;
  serviceId: string;
  price: number;
  currency: string;
  status: "available" | "reserved";
};

type Purchase = {
  id: string;
  number: string;
  service: string;
  country: string;
  price: number;
  currency: string;
  status: "waiting" | "received" | "completed" | "cancelled";
  otp?: string;
  createdAt: string;
};

const countries: Country[] = [
  {
    id: "us",
    name: "United States",
    code: "+1",
    flag: "🇺🇸",
  },
  {
    id: "gb",
    name: "United Kingdom",
    code: "+44",
    flag: "🇬🇧",
  },
  {
    id: "ca",
    name: "Canada",
    code: "+1",
    flag: "🇨🇦",
  },
  {
    id: "de",
    name: "Germany",
    code: "+49",
    flag: "🇩🇪",
  },
  {
    id: "fr",
    name: "France",
    code: "+33",
    flag: "🇫🇷",
  },
  {
    id: "ng",
    name: "Nigeria",
    code: "+234",
    flag: "🇳🇬",
  },
  {
    id: "au",
    name: "Australia",
    code: "+61",
    flag: "🇦🇺",
  },
];

const services: Service[] = [
  {
    id: "whatsapp",
    name: "WhatsApp",
  },
  {
    id: "telegram",
    name: "Telegram",
  },
  {
    id: "google",
    name: "Google",
  },
  {
    id: "facebook",
    name: "Facebook",
  },
  {
    id: "instagram",
    name: "Instagram",
  },
  {
    id: "tiktok",
    name: "TikTok",
  },
];

const demoNumbers: NumberItem[] = [
  {
    id: "1",
    number: "+1 202 555 0181",
    country: "United States",
    countryCode: "US",
    service: "WhatsApp",
    serviceId: "whatsapp",
    price: 0.85,
    currency: "USD",
    status: "available",
  },
  {
    id: "2",
    number: "+1 202 555 0198",
    country: "United States",
    countryCode: "US",
    service: "WhatsApp",
    serviceId: "whatsapp",
    price: 0.92,
    currency: "USD",
    status: "available",
  },
  {
    id: "3",
    number: "+44 7700 900123",
    country: "United Kingdom",
    countryCode: "GB",
    service: "Telegram",
    serviceId: "telegram",
    price: 0.75,
    currency: "USD",
    status: "available",
  },
  {
    id: "4",
    number: "+49 151 23456789",
    country: "Germany",
    countryCode: "DE",
    service: "Google",
    serviceId: "google",
    price: 1.1,
    currency: "USD",
    status: "available",
  },
];

export default function BuyNumberPage() {
  const [selectedCountry, setSelectedCountry] = useState("us");
  const [selectedService, setSelectedService] = useState("whatsapp");

  const [countryOpen, setCountryOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const [search, setSearch] = useState("");

  const [balance, setBalance] = useState(125.5);

  const [selectedNumber, setSelectedNumber] =
    useState<NumberItem | null>(null);

  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  const [purchaseLoading, setPurchaseLoading] = useState(false);

  const [purchase, setPurchase] = useState<Purchase | null>(null);

  const [error, setError] = useState("");

  const selectedCountryData = countries.find(
    (country) => country.id === selectedCountry
  );

  const selectedServiceData = services.find(
    (service) => service.id === selectedService
  );

  const filteredNumbers = useMemo(() => {
    return demoNumbers.filter((item) => {
      const matchesCountry =
        item.countryCode.toLowerCase() ===
        selectedCountry.toLowerCase();

      const matchesService =
        item.serviceId.toLowerCase() ===
        selectedService.toLowerCase();

      const matchesSearch =
        item.number
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.country
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesCountry && matchesService && matchesSearch;
    });
  }, [selectedCountry, selectedService, search]);

  const handlePurchase = async () => {
    if (!selectedNumber) return;

    setError("");

    if (balance < selectedNumber.price) {
      setError(
        "Insufficient wallet balance. Please fund your wallet before purchasing this number."
      );
      return;
    }

    try {
      setPurchaseLoading(true);

      /*
       * Replace this with your real API:
       *
       * POST /api/verification/purchase
       *
       * Body:
       * {
       *   countryId: selectedCountry,
       *   serviceId: selectedService,
       *   numberId: selectedNumber.id
       * }
       */

      await new Promise((resolve) =>
        setTimeout(resolve, 1200)
      );

      const newPurchase: Purchase = {
        id: `ACT-${Date.now()}`,
        number: selectedNumber.number,
        service: selectedNumber.service,
        country: selectedNumber.country,
        price: selectedNumber.price,
        currency: selectedNumber.currency,
        status: "waiting",
        createdAt: new Date().toISOString(),
      };

      setBalance((prev) =>
        Number((prev - selectedNumber.price).toFixed(2))
      );

      setPurchase(newPurchase);
      setShowPurchaseModal(false);
    } catch {
      setError(
        "Unable to complete the purchase. Please try again."
      );
    } finally {
      setPurchaseLoading(false);
    }
  };

  const refreshOtp = async () => {
    if (!purchase) return;

    /*
     * Replace with:
     *
     * GET /api/verification/activation/${purchase.id}
     */

    setPurchase((prev) =>
      prev
        ? {
            ...prev,
            status: "received",
            otp: "482913",
          }
        : null
    );
  };

  const copyOtp = async () => {
    if (!purchase?.otp) return;

    await navigator.clipboard.writeText(purchase.otp);
  };

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-900">
      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white">
                  <Smartphone size={20} />
                </div>

                <div>
                  <h1 className="text-xl font-bold tracking-tight">
                    Buy Verification Number
                  </h1>

                  <p className="text-sm text-slate-500">
                    Get a temporary number for secure verification.
                  </p>
                </div>
              </div>
            </div>

            {/* BALANCE */}
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm">
                <Wallet size={17} />
              </div>

              <div>
                <p className="text-xs font-medium text-slate-500">
                  Available balance
                </p>

                <p className="font-bold">
                  ${balance.toFixed(2)}
                </p>
              </div>

              <button className="ml-2 rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                Add funds
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* STEPS */}
        <div className="mb-6 hidden items-center gap-3 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-4 md:flex">
          <Step
            number="01"
            title="Configure"
            active
          />

          <div className="h-px flex-1 bg-slate-200" />

          <Step
            number="02"
            title="Select number"
          />

          <div className="h-px flex-1 bg-slate-200" />

          <Step
            number="03"
            title="Purchase"
          />

          <div className="h-px flex-1 bg-slate-200" />

          <Step
            number="04"
            title="Receive OTP"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
          {/* SIDEBAR */}
          <aside className="space-y-5">
            {/* CONFIGURATION */}
            <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-5">
                <h2 className="font-bold">
                  Number preferences
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Configure the number you need.
                </p>
              </div>

              {/* COUNTRY */}
              <div className="mb-5">
                <label className="mb-2 block text-sm font-semibold">
                  Country
                </label>

                <div className="relative">
                  <button
                    onClick={() =>
                      setCountryOpen((prev) => !prev)
                    }
                    className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left transition hover:border-slate-300"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xl">
                        {selectedCountryData?.flag}
                      </span>

                      <span>
                        <span className="block text-sm font-semibold">
                          {selectedCountryData?.name}
                        </span>

                        <span className="text-xs text-slate-500">
                          {selectedCountryData?.code}
                        </span>
                      </span>
                    </span>

                    <ChevronDown size={18} />
                  </button>

                  {countryOpen && (
                    <div className="absolute z-30 mt-2 max-h-72 w-full overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                      {countries.map((country) => (
                        <button
                          key={country.id}
                          onClick={() => {
                            setSelectedCountry(country.id);
                            setCountryOpen(false);
                          }}
                          className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left hover:bg-slate-50"
                        >
                          <span className="text-xl">
                            {country.flag}
                          </span>

                          <span>
                            <span className="block text-sm font-medium">
                              {country.name}
                            </span>

                            <span className="text-xs text-slate-500">
                              {country.code}
                            </span>
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* SERVICE */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Service
                </label>

                <div className="relative">
                  <button
                    onClick={() =>
                      setServiceOpen((prev) => !prev)
                    }
                    className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left hover:border-slate-300"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100">
                        <MessageSquare size={17} />
                      </span>

                      <span>
                        <span className="block text-sm font-semibold">
                          {selectedServiceData?.name}
                        </span>

                        <span className="text-xs text-slate-500">
                          SMS verification
                        </span>
                      </span>
                    </span>

                    <ChevronDown size={18} />
                  </button>

                  {serviceOpen && (
                    <div className="absolute z-30 mt-2 max-h-72 w-full overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => {
                            setSelectedService(service.id);
                            setServiceOpen(false);
                          }}
                          className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left hover:bg-slate-50"
                        >
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100">
                            <MessageSquare size={16} />
                          </div>

                          <span>
                            <span className="block text-sm font-semibold">
                              {service.name}
                            </span>

                            <span className="text-xs text-slate-500">
                              Verification SMS
                            </span>
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* TRUST */}
            <section className="rounded-3xl bg-slate-950 p-5 text-white">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                <ShieldCheck size={21} />
              </div>

              <h3 className="font-bold">
                Secure verification
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                Numbers are automatically assigned and protected
                throughout the verification process.
              </p>

              <div className="mt-5 space-y-3">
                <TrustItem text="Private temporary numbers" />
                <TrustItem text="Real-time SMS delivery" />
                <TrustItem text="Automatic activation tracking" />
              </div>
            </section>
          </aside>

          {/* MAIN */}
          <section>
            {/* TITLE */}
            <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
                  <Globe2 size={15} />
                  <span>
                    {selectedCountryData?.name}
                  </span>

                  <span>•</span>

                  <span>
                    {selectedServiceData?.name}
                  </span>
                </div>

                <h2 className="text-2xl font-bold tracking-tight">
                  Available numbers
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Select an available number to continue.
                </p>
              </div>

              <button
                onClick={() => window.location.reload()}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold hover:bg-slate-50"
              >
                <RefreshCw size={15} />
                Refresh
              </button>
            </div>

            {/* SEARCH */}
            <div className="mb-5 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="flex items-center gap-3">
                <Search
                  size={19}
                  className="ml-2 text-slate-400"
                />

                <input
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  placeholder="Search by number or country..."
                  className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* ERROR */}
            {error && (
              <div className="mb-5 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                <AlertCircle
                  size={18}
                  className="mt-0.5 shrink-0"
                />

                <span>{error}</span>

                <button
                  onClick={() => setError("")}
                  className="ml-auto"
                >
                  <X size={16} />
                </button>
              </div>
            )}

            {/* NUMBERS */}
            {filteredNumbers.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {filteredNumbers.map((item) => (
                  <NumberCard
                    key={item.id}
                    item={item}
                    onBuy={() => {
                      setSelectedNumber(item);
                      setShowPurchaseModal(true);
                    }}
                  />
                ))}
              </div>
            ) : (
              <EmptyState />
            )}

            {/* ACTIVE PURCHASE */}
            {purchase && (
              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <Activity size={17} />

                      <h3 className="font-bold">
                        Active verification
                      </h3>
                    </div>

                    <p className="mt-1 text-sm text-slate-500">
                      Activation ID: {purchase.id}
                    </p>
                  </div>

                  <StatusBadge status={purchase.status} />
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <InfoBox
                    label="Number"
                    value={purchase.number}
                  />

                  <InfoBox
                    label="Service"
                    value={purchase.service}
                  />

                  <InfoBox
                    label="Country"
                    value={purchase.country}
                  />
                </div>

                <div className="mt-5 rounded-2xl bg-slate-50 p-5">
                  {purchase.otp ? (
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Verification code
                        </p>

                        <p className="mt-2 text-3xl font-black tracking-[0.25em]">
                          {purchase.otp}
                        </p>
                      </div>

                      <button
                        onClick={copyOtp}
                        className="flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white"
                      >
                        <Copy size={16} />
                        Copy code
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                          <Clock3 size={18} />
                        </div>

                        <div>
                          <p className="font-semibold">
                            Waiting for SMS
                          </p>

                          <p className="text-sm text-slate-500">
                            Your verification code will appear here.
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={refreshOtp}
                        className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold"
                      >
                        <RefreshCw size={15} />
                        Check SMS
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* INFO */}
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <FeatureCard
                icon={<ZapIcon />}
                title="Fast delivery"
                text="Receive verification messages in real time."
              />

              <FeatureCard
                icon={<ShieldCheck size={20} />}
                title="Private"
                text="Your temporary number stays protected."
              />

              <FeatureCard
                icon={<CheckCircle2 size={20} />}
                title="Reliable"
                text="Track every activation from purchase to OTP."
              />
            </div>
          </section>
        </div>
      </div>

      {/* PURCHASE MODAL */}
      {showPurchaseModal && selectedNumber && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100">
                  <Hash size={20} />
                </div>

                <h2 className="text-xl font-bold">
                  Confirm purchase
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Review your verification number.
                </p>
              </div>

              <button
                onClick={() =>
                  setShowPurchaseModal(false)
                }
                className="rounded-xl p-2 hover:bg-slate-100"
              >
                <X size={19} />
              </button>
            </div>

            <div className="space-y-3 rounded-2xl bg-slate-50 p-4">
              <SummaryRow
                label="Number"
                value={selectedNumber.number}
              />

              <SummaryRow
                label="Country"
                value={selectedNumber.country}
              />

              <SummaryRow
                label="Service"
                value={selectedNumber.service}
              />

              <div className="my-2 h-px bg-slate-200" />

              <SummaryRow
                label="Price"
                value={`$${selectedNumber.price.toFixed(2)}`}
                strong
              />

              <SummaryRow
                label="Balance after purchase"
                value={`$${(
                  balance - selectedNumber.price
                ).toFixed(2)}`}
              />
            </div>

            {balance < selectedNumber.price && (
              <div className="mt-4 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
                <AlertCircle size={17} />

                <span>
                  Your wallet balance is insufficient for
                  this purchase.
                </span>
              </div>
            )}

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                onClick={() =>
                  setShowPurchaseModal(false)
                }
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                disabled={
                  purchaseLoading ||
                  balance < selectedNumber.price
                }
                onClick={handlePurchase}
                className="flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {purchaseLoading ? (
                  <>
                    <RefreshCw
                      size={16}
                      className="animate-spin"
                    />
                    Purchasing...
                  </>
                ) : (
                  <>
                    Buy number
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

/* ----------------------------------------
   COMPONENTS
----------------------------------------- */

function Step({
  number,
  title,
  active = false,
}: {
  number: string;
  title: string;
  active?: boolean;
}) {
  return (
    <div className="flex shrink-0 items-center gap-3">
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-xl text-xs font-bold ${
          active
            ? "bg-slate-950 text-white"
            : "bg-slate-100 text-slate-500"
        }`}
      >
        {number}
      </div>

      <span
        className={`text-sm font-semibold ${
          active ? "text-slate-900" : "text-slate-500"
        }`}
      >
        {title}
      </span>
    </div>
  );
}

function NumberCard({
  item,
  onBuy,
}: {
  item: NumberItem;
  onBuy: () => void;
}) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
      <div className="mb-5 flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-lg">
          📱
        </div>

        <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Available
        </span>
      </div>

      <p className="text-lg font-bold tracking-tight">
        {item.number}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
          {item.country}
        </span>

        <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
          {item.service}
        </span>
      </div>

      <div className="my-5 h-px bg-slate-100" />

      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs text-slate-500">
            One-time price
          </p>

          <p className="mt-1 text-xl font-black">
            ${item.price.toFixed(2)}
          </p>
        </div>

        <button
          onClick={onBuy}
          className="flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Buy
          <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}

function TrustItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-slate-300">
      <CheckCircle2 size={15} />
      {text}
    </div>
  );
}

function InfoBox({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <p className="text-xs font-medium text-slate-500">
        {label}
      </p>

      <p className="mt-1 truncate text-sm font-bold">
        {value}
      </p>
    </div>
  );
}

function StatusBadge({
  status,
}: {
  status: Purchase["status"];
}) {
  const config = {
    waiting: {
      text: "Waiting for SMS",
      className:
        "bg-amber-50 text-amber-700 border-amber-200",
    },
    received: {
      text: "OTP received",
      className:
        "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    completed: {
      text: "Completed",
      className:
        "bg-blue-50 text-blue-700 border-blue-200",
    },
    cancelled: {
      text: "Cancelled",
      className:
        "bg-red-50 text-red-700 border-red-200",
    },
  };

  const item = config[status];

  return (
    <span
      className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${item.className}`}
    >
      {item.text}
    </span>
  );
}

function SummaryRow({
  label,
  value,
  strong = false,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm text-slate-500">
        {label}
      </span>

      <span
        className={`text-right text-sm ${
          strong ? "font-black" : "font-semibold"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
        {icon}
      </div>

      <h3 className="font-bold">{title}</h3>

      <p className="mt-1 text-sm leading-5 text-slate-500">
        {text}
      </p>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
        <Smartphone size={23} className="text-slate-500" />
      </div>

      <h3 className="mt-4 font-bold">
        No numbers available
      </h3>

      <p className="mx-auto mt-1 max-w-md text-sm text-slate-500">
        There are currently no available numbers for this
        country and service. Try another combination.
      </p>
    </div>
  );
}

function ZapIcon() {
  return <Activity size={20} />;
}