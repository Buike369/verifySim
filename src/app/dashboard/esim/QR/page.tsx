"use client";

import {
  Activity,
  AlertCircle,
  ArrowLeft,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Copy,
  Download,
  Globe2,
  Info,
  Lock,
  QrCode,
  RefreshCw,
  ScanLine,
  ShieldCheck,
  Smartphone,
  Wifi,
  X,
} from "lucide-react";

import { useState } from "react";

type EsimStatus = "active" | "inactive" | "expired";

type Esim = {
  id: string;
  name: string;
  country: string;
  flag: string;
  planName: string;
  status: EsimStatus;
  network: string;
  iccid: string;
  activationCode: string;
  smdpAddress: string;
  expiresAt: string;
};

const esimData: Esim[] = [
  {
    id: "esim_usa_001",
    name: "USA Travel eSIM",
    country: "United States",
    flag: "🇺🇸",
    planName: "USA 10GB",
    status: "active",
    network: "T-Mobile",
    iccid: "8944201234567890123",
    activationCode:
      "LPA:1$sm-v4.example.com$USA10GB-8X2K9P",
    smdpAddress: "sm-v4.example.com",
    expiresAt: "Aug 31, 2026",
  },
  {
    id: "esim_uk_001",
    name: "UK Travel eSIM",
    country: "United Kingdom",
    flag: "🇬🇧",
    planName: "UK 5GB",
    status: "active",
    network: "EE",
    iccid: "8944201234567890456",
    activationCode:
      "LPA:1$sm-v4.example.com$UK5GB-7M4Q2R",
    smdpAddress: "sm-v4.example.com",
    expiresAt: "Aug 19, 2026",
  },
];

export default function EsimQRCodePage() {
  const [esims, setEsims] =
    useState<Esim[]>(esimData);

  const [selectedId, setSelectedId] =
    useState(esimData[0].id);

  const [selectorOpen, setSelectorOpen] =
    useState(false);

  const [activeTab, setActiveTab] =
    useState<"qr" | "manual">("qr");

  const [copied, setCopied] =
    useState<string | null>(null);

  const [refreshing, setRefreshing] =
    useState(false);

  const [showSecurity, setShowSecurity] =
    useState(false);

  const selectedEsim =
    esims.find(
      (item) => item.id === selectedId
    ) ?? esims[0];

  async function copyText(
    value: string,
    key: string
  ) {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(key);

      window.setTimeout(() => {
        setCopied(null);
      }, 1800);
    } catch {
      // Clipboard unavailable.
    }
  }

  async function refreshQr() {
    setRefreshing(true);

    // Replace with:
    // await fetch(`/api/esim/${selectedEsim.id}/qr`);

    await new Promise((resolve) =>
      setTimeout(resolve, 900)
    );

    setRefreshing(false);
  }

  function downloadQRCode() {
    /*
      Production:

      Fetch the provider-issued QR image from your
      authenticated Next.js API route and download it.

      Example:

      const response = await fetch(
        `/api/esim/${selectedEsim.id}/qr`
      );

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${selectedEsim.name}-qr.png`;
      link.click();

      URL.revokeObjectURL(url);
    */

    alert(
      "Connect this button to your provider-issued QR image."
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <div className="mx-auto w-full max-w-[1450px] px-4 py-5 sm:px-6 lg:px-8 lg:py-8">

        {/* ========================================================= */}
        {/* BREADCRUMB                                                */}
        {/* ========================================================= */}

        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs text-slate-400">

          <a
            href="/esim"
            className="transition hover:text-cyan-700"
          >
            Data eSIM
          </a>

          <ChevronRight className="h-3.5 w-3.5" />

          <a
            href="/esim/my-esim"
            className="transition hover:text-cyan-700"
          >
            My eSIM
          </a>

          <ChevronRight className="h-3.5 w-3.5" />

          <span className="font-semibold text-slate-700">
            QR Code
          </span>

        </div>

        {/* ========================================================= */}
        {/* HEADER                                                     */}
        {/* ========================================================= */}

        <section className="mb-7">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <div className="flex items-start gap-3">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                  <QrCode className="h-6 w-6" />
                </div>

                <div>

                  <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    eSIM QR Code
                  </h1>

                  <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                    Install your data eSIM by scanning the
                    provider-issued QR code with a compatible
                    device.
                  </p>

                </div>

              </div>

            </div>

            <button
              type="button"
              onClick={refreshQr}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-xs font-bold text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              <RefreshCw
                className={`h-4 w-4 ${
                  refreshing
                    ? "animate-spin"
                    : ""
                }`}
              />

              {refreshing
                ? "Refreshing..."
                : "Refresh"}
            </button>

          </div>

        </section>

        {/* ========================================================= */}
        {/* ESIM SELECTOR                                              */}
        {/* ========================================================= */}

        <section className="relative mb-5">

          <button
            type="button"
            onClick={() =>
              setSelectorOpen(
                (value) => !value
              )
            }
            className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-slate-300"
          >

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 text-2xl">
                {selectedEsim.flag}
              </div>

              <div>

                <div className="flex flex-wrap items-center gap-2">

                  <span className="text-sm font-bold text-slate-800">
                    {selectedEsim.name}
                  </span>

                  <StatusBadge
                    status={
                      selectedEsim.status
                    }
                  />

                </div>

                <p className="mt-1 text-xs text-slate-400">
                  {selectedEsim.planName} ·{" "}
                  {selectedEsim.country} ·{" "}
                  {selectedEsim.network}
                </p>

              </div>

            </div>

            <ChevronDown
              className={`h-5 w-5 text-slate-400 transition ${
                selectorOpen
                  ? "rotate-180"
                  : ""
              }`}
            />

          </button>

          {selectorOpen && (
            <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">

              {esims.map((esim) => (
                <button
                  key={esim.id}
                  type="button"
                  onClick={() => {
                    setSelectedId(
                      esim.id
                    );
                    setSelectorOpen(false);
                  }}
                  className={`flex w-full items-center justify-between border-b border-slate-100 p-4 text-left last:border-0 hover:bg-slate-50 ${
                    esim.id ===
                    selectedEsim.id
                      ? "bg-cyan-50/50"
                      : ""
                  }`}
                >

                  <div className="flex items-center gap-3">

                    <span className="text-2xl">
                      {esim.flag}
                    </span>

                    <div>

                      <p className="text-sm font-bold text-slate-800">
                        {esim.name}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {esim.planName} ·{" "}
                        {esim.network}
                      </p>

                    </div>

                  </div>

                  {esim.id ===
                    selectedEsim.id && (
                    <Check className="h-5 w-5 text-cyan-600" />
                  )}

                </button>
              ))}

            </div>
          )}

        </section>

        {/* ========================================================= */}
        {/* STATUS NOTICE                                              */}
        {/* ========================================================= */}

        <section className="mb-5 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">

          <div className="flex gap-3">

            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

            <div>

              <p className="text-xs font-bold text-emerald-800">
                eSIM profile available
              </p>

              <p className="mt-1 text-[11px] leading-5 text-emerald-700">
                Your QR installation profile is ready.
                Scan it from the device where you want
                to install this eSIM.
              </p>

            </div>

          </div>

        </section>

        {/* ========================================================= */}
        {/* MAIN GRID                                                   */}
        {/* ========================================================= */}

        <section className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">

          {/* ======================================================= */}
          {/* QR PANEL                                                  */}
          {/* ======================================================= */}

          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

            {/* TABS */}

            <div className="flex border-b border-slate-100">

              <button
                type="button"
                onClick={() =>
                  setActiveTab("qr")
                }
                className={`flex-1 px-5 py-4 text-xs font-bold transition ${
                  activeTab === "qr"
                    ? "border-b-2 border-cyan-600 text-cyan-700"
                    : "text-slate-400 hover:text-slate-700"
                }`}
              >
                QR Code
              </button>

              <button
                type="button"
                onClick={() =>
                  setActiveTab("manual")
                }
                className={`flex-1 px-5 py-4 text-xs font-bold transition ${
                  activeTab === "manual"
                    ? "border-b-2 border-cyan-600 text-cyan-700"
                    : "text-slate-400 hover:text-slate-700"
                }`}
              >
                Manual activation
              </button>

            </div>

            {activeTab === "qr" ? (
              <QRCodePanel
                esim={selectedEsim}
                onDownload={
                  downloadQRCode
                }
              />
            ) : (
              <ManualActivationPanel
                esim={selectedEsim}
                copied={copied}
                onCopy={copyText}
              />
            )}

          </div>

          {/* ======================================================= */}
          {/* INFORMATION PANEL                                        */}
          {/* ======================================================= */}

          <div className="space-y-5">

            {/* INSTALL STEPS */}

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

              <SectionHeader
                icon={
                  <ScanLine className="h-5 w-5" />
                }
                title="How to install"
                description="Follow these steps to install your eSIM."
              />

              <div className="mt-6 space-y-5">

                <InstallStep
                  number="01"
                  title="Open cellular settings"
                  description="Go to Settings → Cellular / Mobile Data on your compatible device."
                />

                <InstallStep
                  number="02"
                  title="Add eSIM"
                  description='Select "Add eSIM", "Add Cellular Plan", or the equivalent option.'
                />

                <InstallStep
                  number="03"
                  title="Scan QR code"
                  description="Use your device camera to scan the QR code shown on this page."
                />

                <InstallStep
                  number="04"
                  title="Complete activation"
                  description="Follow the on-screen instructions and wait for the network connection."
                />

              </div>

            </div>

            {/* PLAN INFO */}

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

              <SectionHeader
                icon={
                  <Globe2 className="h-5 w-5" />
                }
                title="eSIM information"
                description="Details associated with this installation profile."
              />

              <div className="mt-5 grid gap-3 sm:grid-cols-2">

                <InfoBox
                  label="Country"
                  value={`${selectedEsim.flag} ${selectedEsim.country}`}
                />

                <InfoBox
                  label="Plan"
                  value={selectedEsim.planName}
                />

                <InfoBox
                  label="Network"
                  value={selectedEsim.network}
                />

                <InfoBox
                  label="Expires"
                  value={selectedEsim.expiresAt}
                />

              </div>

            </div>

            {/* SECURITY */}

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

              <button
                type="button"
                onClick={() =>
                  setShowSecurity(
                    (value) => !value
                  )
                }
                className="flex w-full items-center justify-between text-left"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <div>

                    <h2 className="text-sm font-bold text-slate-900">
                      Security & privacy
                    </h2>

                    <p className="mt-1 text-[11px] text-slate-400">
                      Protect your eSIM installation profile.
                    </p>

                  </div>

                </div>

                <ChevronDown
                  className={`h-4 w-4 text-slate-400 transition ${
                    showSecurity
                      ? "rotate-180"
                      : ""
                  }`}
                />

              </button>

              {showSecurity && (
                <div className="mt-5 border-t border-slate-100 pt-5">

                  <div className="flex gap-3">

                    <Lock className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />

                    <p className="text-[11px] leading-5 text-slate-500">
                      Your QR code and activation details
                      are sensitive credentials. Do not
                      post them publicly or send them to
                      untrusted people.
                    </p>

                  </div>

                </div>
              )}

            </div>

          </div>

        </section>

        {/* ========================================================= */}
        {/* DEVICE COMPATIBILITY                                      */}
        {/* ========================================================= */}

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex items-start gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                <Smartphone className="h-5 w-5" />
              </div>

              <div>

                <h2 className="text-sm font-bold text-slate-900">
                  Before installing
                </h2>

                <p className="mt-1 max-w-2xl text-[11px] leading-5 text-slate-400">
                  Make sure your device supports eSIM and
                  is not restricted by a carrier. You may
                  also need an internet connection during
                  installation.
                </p>

              </div>

            </div>

            <a
              href="/help/esim/compatibility"
              className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 text-xs font-bold text-slate-700 hover:bg-slate-50"
            >
              Check compatibility
              <ChevronRight className="h-4 w-4" />
            </a>

          </div>

        </section>

        {/* ========================================================= */}
        {/* ACTIVITY                                                  */}
        {/* ========================================================= */}

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white shadow-sm">

          <div className="border-b border-slate-100 p-5 sm:p-6">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                <Activity className="h-5 w-5" />
              </div>

              <div>

                <h2 className="text-sm font-bold text-slate-900">
                  Installation activity
                </h2>

                <p className="mt-1 text-[11px] text-slate-400">
                  Recent eSIM installation events.
                </p>

              </div>

            </div>

          </div>

          <div className="divide-y divide-slate-100">

            <ActivityRow
              title="QR code accessed"
              description="Installation QR code was opened."
              date="Today · 09:14 AM"
            />

            <ActivityRow
              title="eSIM profile active"
              description={`The ${selectedEsim.planName} profile is available for installation.`}
              date="Today · 09:12 AM"
            />

            <ActivityRow
              title="eSIM purchased"
              description={`${selectedEsim.planName} was successfully purchased.`}
              date="Aug 02, 2026 · 08:31 PM"
            />

          </div>

        </section>

        {/* ========================================================= */}
        {/* FOOTER SECURITY                                           */}
        {/* ========================================================= */}

        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">

          <Lock className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />

          <p className="text-[10px] leading-5 text-slate-400">
            Keep your QR code and activation information
            private. These credentials can be used to
            install your eSIM profile.
          </p>

        </div>

      </div>
    </main>
  );
}

/* ========================================================================== */
/* QR CODE PANEL                                                               */
/* ========================================================================== */

function QRCodePanel({
  esim,
  onDownload,
}: {
  esim: Esim;
  onDownload: () => void;
}) {
  return (
    <div className="p-5 sm:p-8">

      <div className="text-center">

        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
          <QrCode className="h-5 w-5" />
        </div>

        <h2 className="mt-4 text-lg font-bold text-slate-900">
          Scan to install
        </h2>

        <p className="mx-auto mt-2 max-w-md text-xs leading-5 text-slate-400">
          Scan this QR code using the device where you
          want to install your {esim.planName} eSIM.
        </p>

      </div>

      {/* =========================================================== */}
      {/* QR CONTAINER                                                 */}
      {/* =========================================================== */}

      <div className="mx-auto mt-7 flex w-fit flex-col items-center">

        <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.10)]">

          <QRCodePlaceholder />

          <div className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg">
            <Check className="h-5 w-5" />
          </div>

        </div>

        <div className="mt-5 flex items-center gap-2 text-[11px] font-semibold text-emerald-600">

          <CheckCircle2 className="h-4 w-4" />

          Installation profile ready

        </div>

      </div>

      {/* =========================================================== */}
      {/* ACTIONS                                                       */}
      {/* =========================================================== */}

      <div className="mx-auto mt-7 grid max-w-md gap-2 sm:grid-cols-2">

        <button
          type="button"
          onClick={onDownload}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 text-xs font-bold text-white transition hover:bg-slate-800"
        >
          <Download className="h-4 w-4" />
          Download QR
        </button>

        <button
          type="button"
          onClick={() =>
            window.print()
          }
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 transition hover:bg-slate-50"
        >
          <QrCode className="h-4 w-4" />
          Print QR
        </button>

      </div>

      {/* =========================================================== */}
      {/* DEVICE NOTE                                                   */}
      {/* =========================================================== */}

      <div className="mx-auto mt-6 max-w-md rounded-xl border border-cyan-100 bg-cyan-50/60 p-4">

        <div className="flex gap-3">

          <Info className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />

          <p className="text-[11px] leading-5 text-cyan-800">
            If you are viewing this page on the same
            device you want to install the eSIM on,
            display the QR code on another screen or
            use the manual activation option.
          </p>

        </div>

      </div>

    </div>
  );
}

/* ========================================================================== */
/* QR PLACEHOLDER                                                              */
/* ========================================================================== */

function QRCodePlaceholder() {
  const cells = Array.from({
    length: 441,
  });

  return (
    <div
      className="grid h-[260px] w-[260px] grid-cols-[repeat(21,1fr)] gap-[2px] bg-white"
      aria-label="eSIM QR code"
    >
      {cells.map((_, index) => {

        const row =
          Math.floor(index / 21);

        const col = index % 21;

        const finder =
          (row < 7 && col < 7) ||
          (row < 7 && col > 13) ||
          (row > 13 && col < 7);

        const finderBorder =
          finder &&
          ((row === 0 ||
            row === 6) ||
            (col === 0 ||
              col === 6));

        const finderCenter =
          finder &&
          row >= 2 &&
          row <= 4 &&
          col >= 2 &&
          col <= 4;

        const randomPattern =
          ((row * 37 +
            col * 19 +
            row * col) %
            11) <
          5;

        const active =
          finderBorder ||
          finderCenter ||
          (!finder &&
            randomPattern);

        return (
          <span
            key={index}
            className={
              active
                ? "bg-slate-950"
                : "bg-white"
            }
          />
        );
      })}
    </div>
  );
}

/* ========================================================================== */
/* MANUAL ACTIVATION                                                           */
/* ========================================================================== */

function ManualActivationPanel({
  esim,
  copied,
  onCopy,
}: {
  esim: Esim;
  copied: string | null;
  onCopy: (
    value: string,
    key: string
  ) => void;
}) {
  return (
    <div className="p-5 sm:p-8">

      <div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
          <Smartphone className="h-5 w-5" />
        </div>

        <h2 className="mt-4 text-lg font-bold text-slate-900">
          Manual activation
        </h2>

        <p className="mt-2 max-w-xl text-xs leading-5 text-slate-400">
          If your device cannot scan the QR code,
          enter the following activation details manually.
        </p>

      </div>

      <div className="mt-7 space-y-4">

        <CopyField
          label="SM-DP+ address"
          value={esim.smdpAddress}
          copied={
            copied === "smdp"
          }
          onCopy={() =>
            onCopy(
              esim.smdpAddress,
              "smdp"
            )
          }
        />

        <CopyField
          label="Activation code"
          value={esim.activationCode}
          copied={
            copied === "activation"
          }
          onCopy={() =>
            onCopy(
              esim.activationCode,
              "activation"
            )
          }
        />

        <CopyField
          label="ICCID"
          value={esim.iccid}
          copied={
            copied === "iccid"
          }
          onCopy={() =>
            onCopy(
              esim.iccid,
              "iccid"
            )
          }
        />

      </div>

      <div className="mt-6 rounded-xl border border-amber-100 bg-amber-50 p-4">

        <div className="flex gap-3">

          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />

          <p className="text-[11px] leading-5 text-amber-800">
            Keep these activation details private.
            They should only be entered on a trusted
            compatible device.
          </p>

        </div>

      </div>

    </div>
  );
}

/* ========================================================================== */
/* COPY FIELD                                                                  */
/* ========================================================================== */

function CopyField({
  label,
  value,
  copied,
  onCopy,
}: {
  label: string;
  value: string;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">

      <div className="flex items-center justify-between gap-3">

        <div className="min-w-0">

          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
            {label}
          </p>

          <p className="mt-2 break-all font-mono text-xs font-semibold text-slate-700">
            {value}
          </p>

        </div>

        <button
          type="button"
          onClick={onCopy}
          className="flex h-9 shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 text-[10px] font-bold text-slate-600 transition hover:bg-slate-50"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-600" />
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

      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-[10px] font-bold text-cyan-700">
        {number}
      </div>

      <div>

        <p className="text-xs font-bold text-slate-700">
          {title}
        </p>

        <p className="mt-1 text-[11px] leading-5 text-slate-400">
          {description}
        </p>

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
    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">

      <p className="text-[10px] uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className="mt-2 truncate text-xs font-bold text-slate-700">
        {value}
      </p>

    </div>
  );
}

/* ========================================================================== */
/* SECTION HEADER                                                              */
/* ========================================================================== */

function SectionHeader({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
        {icon}
      </div>

      <div>

        <h2 className="text-sm font-bold text-slate-900">
          {title}
        </h2>

        <p className="mt-1 text-[11px] leading-5 text-slate-400">
          {description}
        </p>

      </div>

    </div>
  );
}

/* ========================================================================== */
/* ACTIVITY ROW                                                                */
/* ========================================================================== */

function ActivityRow({
  title,
  description,
  date,
}: {
  title: string;
  description: string;
  date: string;
}) {
  return (
    <div className="flex gap-4 p-5 sm:p-6">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
        <CheckCircle2 className="h-4 w-4" />
      </div>

      <div className="min-w-0 flex-1">

        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs font-bold text-slate-700">
            {title}
          </p>

          <span className="text-[10px] text-slate-400">
            {date}
          </span>

        </div>

        <p className="mt-1 text-[11px] leading-5 text-slate-400">
          {description}
        </p>

      </div>

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
  const config = {
    active: {
      label: "Active",
      classes:
        "bg-emerald-50 text-emerald-600",
      dot: "bg-emerald-500",
    },

    inactive: {
      label: "Inactive",
      classes:
        "bg-slate-100 text-slate-500",
      dot: "bg-slate-400",
    },

    expired: {
      label: "Expired",
      classes:
        "bg-rose-50 text-rose-600",
      dot: "bg-rose-500",
    },
  }[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold ${config.classes}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${config.dot}`}
      />

      {config.label}
    </span>
  );
}