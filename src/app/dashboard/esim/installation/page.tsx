"use client";

import {
  Activity,
  AlertCircle,
  Apple,
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Clipboard,
  Copy,
  Download,
  ExternalLink,
  Globe2,
  Info,
  Laptop,
  Loader2,
  LockKeyhole,
  Network,
  QrCode,
  RefreshCw,
  ScanLine,
  Settings2,
  ShieldCheck,
  Smartphone,
  Wifi,
  X,
  XCircle,
} from "lucide-react";

import { useMemo, useState } from "react";

/* ========================================================================== */
/* TYPES                                                                       */
/* ========================================================================== */

type DeviceType = "iphone" | "android";

type InstallationMethod =
  | "qr"
  | "manual";

type InstallationStatus =
  | "ready"
  | "installing"
  | "installed"
  | "failed";

type EsimProfile = {
  id: string;
  name: string;
  country: string;
  flag: string;
  plan: string;
  data: string;
  remaining: string;
  expires: string;
  status: "ready" | "installed" | "expired";
  smdpAddress: string;
  activationCode: string;
  confirmationCode?: string;
  iccid: string;
};

const esimProfiles: EsimProfile[] = [
  {
    id: "esim_usa_001",
    name: "USA Travel eSIM",
    country: "United States",
    flag: "🇺🇸",
    plan: "USA 10GB",
    data: "10 GB",
    remaining: "8.42 GB",
    expires: "Sep 12, 2026",
    status: "ready",
    smdpAddress: "rsp.truphone.com",
    activationCode: "LPA:1$rsp.truphone.com$8K2D7P91",
    confirmationCode: "492817",
    iccid: "8944201234567890123",
  },
  {
    id: "esim_uk_001",
    name: "UK Travel eSIM",
    country: "United Kingdom",
    flag: "🇬🇧",
    plan: "UK 5GB",
    data: "5 GB",
    remaining: "3.72 GB",
    expires: "Sep 05, 2026",
    status: "installed",
    smdpAddress: "rsp.truphone.com",
    activationCode: "LPA:1$rsp.truphone.com$4K7N2P83",
    iccid: "8944201234567890456",
  },
  {
    id: "esim_ng_001",
    name: "Nigeria eSIM",
    country: "Nigeria",
    flag: "🇳🇬",
    plan: "Nigeria 15GB",
    data: "15 GB",
    remaining: "15 GB",
    expires: "Sep 20, 2026",
    status: "ready",
    smdpAddress: "rsp.truphone.com",
    activationCode: "LPA:1$rsp.truphone.com$7F3M9D21",
    iccid: "8944201234567890789",
  },
];

/* ========================================================================== */
/* MAIN PAGE                                                                   */
/* ========================================================================== */

export default function EsimInstallationPage() {
  const [selectedEsimId, setSelectedEsimId] =
    useState(esimProfiles[0].id);

  const [device, setDevice] =
    useState<DeviceType>("iphone");

  const [method, setMethod] =
    useState<InstallationMethod>("qr");

  const [installationStatus, setInstallationStatus] =
    useState<InstallationStatus>("ready");

  const [showInstructions, setShowInstructions] =
    useState(true);

  const [copiedField, setCopiedField] =
    useState<string | null>(null);

  const [showTroubleshooting, setShowTroubleshooting] =
    useState(false);

  const [refreshing, setRefreshing] =
    useState(false);

  const selectedEsim = useMemo(
    () =>
      esimProfiles.find(
        (item) => item.id === selectedEsimId
      ) ?? esimProfiles[0],
    [selectedEsimId]
  );

  /* ======================================================================== */
  /* FUNCTIONS                                                                */
  /* ======================================================================== */

  async function copyValue(
    value: string,
    field: string
  ) {
    try {
      await navigator.clipboard.writeText(value);

      setCopiedField(field);

      setTimeout(() => {
        setCopiedField(null);
      }, 1800);
    } catch {
      // Clipboard API unavailable.
    }
  }

  async function refreshInstallationStatus() {
    setRefreshing(true);

    /*
      Production:

      const response = await fetch(
        `/api/esim/${selectedEsim.id}/installation-status`
      );

      const data = await response.json();

      setInstallationStatus(data.status);
    */

    await new Promise((resolve) =>
      setTimeout(resolve, 900)
    );

    setRefreshing(false);
  }

  async function markInstalling() {
    setInstallationStatus("installing");

    /*
      Production:

      await fetch("/api/esim/installation/start", {
        method: "POST",
        body: JSON.stringify({
          esimId: selectedEsim.id,
        }),
      });
    */

    await new Promise((resolve) =>
      setTimeout(resolve, 1200)
    );

    setInstallationStatus("installed");
  }

  function downloadQrCode() {
    /*
      Connect this to your generated QR image:

      const link = document.createElement("a");

      link.href = qrCodeUrl;
      link.download = `${selectedEsim.plan}-qr.png`;

      link.click();
    */

    alert(
      "Connect this action to your generated eSIM QR code."
    );
  }

  function openDeviceSettings() {
    /*
      iOS / Android settings cannot be universally
      opened from a web application.

      Provide device-specific instructions instead.
    */

    alert(
      device === "iphone"
        ? "Open Settings → Cellular → Add eSIM."
        : "Open Settings → Network & Internet → SIMs → Add eSIM."
    );
  }

  /* ======================================================================== */
  /* RENDER                                                                   */
  /* ======================================================================== */

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-900">

      <div className="mx-auto w-full max-w-[1450px] px-4 py-5 sm:px-6 lg:px-8 lg:py-8">

        {/* ================================================================ */}
        {/* BREADCRUMB                                                        */}
        {/* ================================================================ */}

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
            Installation
          </span>

        </div>

        {/* ================================================================ */}
        {/* HEADER                                                             */}
        {/* ================================================================ */}

        <section className="mb-7">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

            <div className="flex items-start gap-3">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">

                <ScanLine className="h-6 w-6" />

              </div>

              <div>

                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Install eSIM
                </h1>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  Install your data-only eSIM securely
                  using a QR code or enter the activation
                  details manually.
                </p>

              </div>

            </div>

            <div className="flex flex-wrap gap-2">

              <button
                type="button"
                onClick={refreshInstallationStatus}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-xs font-bold text-slate-700 shadow-sm transition hover:bg-slate-50"
              >

                <RefreshCw
                  className={`h-4 w-4 ${
                    refreshing
                      ? "animate-spin"
                      : ""
                  }`}
                />

                Check status

              </button>

              <button
                type="button"
                onClick={() =>
                  setShowTroubleshooting(true)
                }
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 text-xs font-bold text-white transition hover:bg-slate-800"
              >

                <CircleHelp className="h-4 w-4" />

                Help

              </button>

            </div>

          </div>

        </section>

        {/* ================================================================ */}
        {/* SECURITY NOTICE                                                    */}
        {/* ================================================================ */}

        <section className="mb-5 flex items-start gap-3 rounded-2xl border border-cyan-100 bg-cyan-50/70 p-4">

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-cyan-700 shadow-sm">

            <ShieldCheck className="h-4 w-4" />

          </div>

          <div>

            <p className="text-xs font-bold text-cyan-900">
              Secure eSIM installation
            </p>

            <p className="mt-1 text-[10px] leading-5 text-cyan-800/70">
              Only install this eSIM on a device you own
              or control. Never share your QR code or
              activation credentials publicly.
            </p>

          </div>

        </section>

        {/* ================================================================ */}
        {/* SELECT ESIM                                                       */}
        {/* ================================================================ */}

        <section className="mb-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

          <div className="mb-4">

            <h2 className="text-sm font-bold text-slate-900">
              Select eSIM
            </h2>

            <p className="mt-1 text-[11px] text-slate-400">
              Choose the eSIM profile you want to install.
            </p>

          </div>

          <div className="grid gap-3 lg:grid-cols-3">

            {esimProfiles.map((esim) => {

              const selected =
                esim.id === selectedEsimId;

              return (
                <button
                  key={esim.id}
                  type="button"
                  onClick={() => {
                    setSelectedEsimId(
                      esim.id
                    );

                    setInstallationStatus(
                      esim.status ===
                        "installed"
                        ? "installed"
                        : "ready"
                    );
                  }}
                  className={`relative rounded-2xl border p-4 text-left transition ${
                    selected
                      ? "border-cyan-400 bg-cyan-50/50 shadow-sm"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >

                  {selected && (
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

                  <div className="mt-4 flex items-center justify-between">

                    <span className="text-[10px] text-slate-500">
                      {esim.remaining} remaining
                    </span>

                    <StatusMini
                      status={esim.status}
                    />

                  </div>

                </button>
              );
            })}

          </div>

        </section>

        {/* ================================================================ */}
        {/* INSTALLATION WORKSPACE                                           */}
        {/* ================================================================ */}

        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_400px]">

          {/* LEFT SIDE */}

          <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">

            {/* WORKSPACE HEADER */}

            <div className="border-b border-slate-100 p-5 sm:p-6">

              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <div>

                  <h2 className="text-sm font-bold text-slate-900">
                    Installation method
                  </h2>

                  <p className="mt-1 text-[11px] text-slate-400">
                    Select the installation method supported
                    by your device.
                  </p>

                </div>

                <InstallationStatusBadge
                  status={installationStatus}
                />

              </div>

            </div>

            {/* METHOD TABS */}

            <div className="grid grid-cols-2 gap-2 p-5 sm:p-6">

              <MethodButton
                active={method === "qr"}
                icon={<QrCode />}
                title="QR code"
                description="Recommended"
                onClick={() =>
                  setMethod("qr")
                }
              />

              <MethodButton
                active={method === "manual"}
                icon={<Clipboard />}
                title="Manual"
                description="Enter details"
                onClick={() =>
                  setMethod("manual")
                }
              />

            </div>

            {/* QR INSTALLATION */}

            {method === "qr" && (
              <QrInstallation
                esim={selectedEsim}
                device={device}
                installationStatus={
                  installationStatus
                }
                onCopy={copyValue}
                copiedField={copiedField}
                onDownload={downloadQrCode}
                onInstall={markInstalling}
              />
            )}

            {/* MANUAL INSTALLATION */}

            {method === "manual" && (
              <ManualInstallation
                esim={selectedEsim}
                device={device}
                onCopy={copyValue}
                copiedField={copiedField}
                onInstall={markInstalling}
              />
            )}

          </section>

          {/* RIGHT SIDE */}

          <aside className="space-y-5">

            {/* DEVICE SELECTOR */}

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">

                  {device === "iphone" ? (
                    <Apple className="h-5 w-5" />
                  ) : (
                    <Smartphone className="h-5 w-5" />
                  )}

                </div>

                <div>

                  <h3 className="text-sm font-bold text-slate-800">
                    Your device
                  </h3>

                  <p className="mt-1 text-[10px] text-slate-400">
                    Installation instructions
                  </p>

                </div>

              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">

                <DeviceButton
                  active={
                    device === "iphone"
                  }
                  icon={<Apple />}
                  title="iPhone"
                  onClick={() =>
                    setDevice("iphone")
                  }
                />

                <DeviceButton
                  active={
                    device === "android"
                  }
                  icon={<Smartphone />}
                  title="Android"
                  onClick={() =>
                    setDevice("android")
                  }
                />

              </div>

            </section>

            {/* INSTRUCTIONS */}

            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

              <button
                type="button"
                onClick={() =>
                  setShowInstructions(
                    (value) => !value
                  )
                }
                className="flex w-full items-center justify-between p-5 text-left"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">

                    <Settings2 className="h-4 w-4" />

                  </div>

                  <div>

                    <h3 className="text-sm font-bold text-slate-800">
                      Installation steps
                    </h3>

                    <p className="mt-1 text-[10px] text-slate-400">
                      {device === "iphone"
                        ? "For iPhone"
                        : "For Android"}
                    </p>

                  </div>

                </div>

                <ChevronDown
                  className={`h-4 w-4 text-slate-400 transition ${
                    showInstructions
                      ? "rotate-180"
                      : ""
                  }`}
                />

              </button>

              {showInstructions && (
                <div className="border-t border-slate-100 p-5">

                  <InstallationSteps
                    device={device}
                  />

                </div>
              )}

            </section>

            {/* NETWORK INFO */}

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">

                  <Network className="h-4 w-4" />

                </div>

                <div>

                  <h3 className="text-xs font-bold text-slate-800">
                    Network information
                  </h3>

                  <p className="mt-1 text-[10px] text-slate-400">
                    Profile details
                  </p>

                </div>

              </div>

              <div className="mt-4 space-y-3">

                <InfoRow
                  label="Country"
                  value={`${selectedEsim.flag} ${selectedEsim.country}`}
                />

                <InfoRow
                  label="Plan"
                  value={selectedEsim.plan}
                />

                <InfoRow
                  label="Data"
                  value={selectedEsim.data}
                />

                <InfoRow
                  label="Expires"
                  value={selectedEsim.expires}
                />

              </div>

            </section>

          </aside>

        </div>

        {/* ================================================================ */}
        {/* ACTIVITY                                                          */}
        {/* ================================================================ */}

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
                  Security and installation events for
                  your eSIM profile.
                </p>

              </div>

            </div>

          </div>

          <div className="grid gap-4 p-5 sm:grid-cols-3 sm:p-6">

            <ActivityCard
              icon={<QrCode />}
              title="QR code generated"
              description="Installation credentials prepared."
              time="Today · 09:12 AM"
            />

            <ActivityCard
              icon={<Smartphone />}
              title="Installation started"
              description="eSIM installation was initiated."
              time="Today · 09:14 AM"
            />

            <ActivityCard
              icon={<ShieldCheck />}
              title="Security check"
              description="Installation credentials remain protected."
              time="Today · 09:15 AM"
            />

          </div>

        </section>

        {/* ================================================================ */}
        {/* FOOTER SECURITY                                                   */}
        {/* ================================================================ */}

        <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-3">

            <LockKeyhole className="h-4 w-4 text-emerald-600" />

            <p className="text-[10px] leading-5 text-slate-500">
              Your eSIM activation credentials are
              private and should never be shared.
            </p>

          </div>

          <a
            href="/esim/help"
            className="inline-flex items-center gap-1 text-[10px] font-bold text-cyan-700"
          >
            Installation help
            <ExternalLink className="h-3 w-3" />
          </a>

        </div>

      </div>

      {/* ================================================================ */}
      {/* TROUBLESHOOTING MODAL                                            */}
      {/* ================================================================ */}

      {showTroubleshooting && (
        <TroubleshootingModal
          device={device}
          onClose={() =>
            setShowTroubleshooting(false)
          }
        />
      )}

    </main>
  );
}

/* ========================================================================== */
/* QR INSTALLATION                                                             */
/* ========================================================================== */

function QrInstallation({
  esim,
  device,
  installationStatus,
  onCopy,
  copiedField,
  onDownload,
  onInstall,
}: {
  esim: EsimProfile;
  device: DeviceType;
  installationStatus: InstallationStatus;
  onCopy: (
    value: string,
    field: string
  ) => void;
  copiedField: string | null;
  onDownload: () => void;
  onInstall: () => void;
}) {
  return (
    <div className="px-5 pb-6 sm:px-6">

      <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">

        {/* QR */}

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                Scan QR code
              </p>

              <p className="mt-1 text-xs font-bold text-slate-700">
                {esim.plan}
              </p>

            </div>

            <QrCode className="h-5 w-5 text-cyan-600" />

          </div>

          {/* QR PLACEHOLDER */}

          <div className="mx-auto mt-6 flex aspect-square max-w-[230px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <FakeQrCode />

          </div>

          <p className="mt-4 text-center text-[10px] leading-5 text-slate-400">
            Scan this QR code from your device's
            eSIM / cellular settings.
          </p>

          <button
            type="button"
            onClick={onDownload}
            className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white text-[10px] font-bold text-slate-700 transition hover:bg-slate-50"
          >

            <Download className="h-4 w-4" />

            Save QR code

          </button>

        </div>

        {/* INSTRUCTIONS */}

        <div>

          <div className="rounded-2xl border border-slate-200 p-5">

            <div className="flex items-start gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">

                {device === "iphone" ? (
                  <Apple className="h-4 w-4" />
                ) : (
                  <Smartphone className="h-4 w-4" />
                )}

              </div>

              <div>

                <h3 className="text-sm font-bold text-slate-800">
                  {device === "iphone"
                    ? "Install on iPhone"
                    : "Install on Android"}
                </h3>

                <p className="mt-1 text-[10px] leading-5 text-slate-400">
                  Follow the steps below to add the
                  eSIM to your device.
                </p>

              </div>

            </div>

            <InstallationSteps
              device={device}
              compact
            />

          </div>

          {/* STATUS */}

          <InstallationProgress
            status={installationStatus}
          />

          {/* ACTION */}

          {installationStatus !==
            "installed" && (
            <button
              type="button"
              onClick={onInstall}
              disabled={
                installationStatus ===
                "installing"
              }
              className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 text-xs font-bold text-white shadow-sm transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-60"
            >

              {installationStatus ===
              "installing" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Checking installation...
                </>
              ) : (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  I've installed the eSIM
                </>
              )}

            </button>
          )}

          {installationStatus ===
            "installed" && (
            <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-xs font-bold text-emerald-700">

              <CheckCircle2 className="h-4 w-4" />

              eSIM installation confirmed

            </div>
          )}

          {/* WARNING */}

          <div className="mt-4 flex items-start gap-2 rounded-xl bg-amber-50 p-3">

            <Info className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />

            <p className="text-[10px] leading-5 text-amber-800/80">
              Do not scan the same eSIM QR code on
              multiple devices. Your eSIM may only be
              installed once depending on the provider.
            </p>

          </div>

        </div>

      </div>

      {/* ACTIVATION DATA */}

      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">

        <div className="flex items-center justify-between">

          <div>

            <h3 className="text-xs font-bold text-slate-800">
              Activation information
            </h3>

            <p className="mt-1 text-[10px] text-slate-400">
              Use these details for manual installation.
            </p>

          </div>

          <LockKeyhole className="h-4 w-4 text-slate-400" />

        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2">

          <CopyField
            label="SM-DP+ Address"
            value={esim.smdpAddress}
            copied={
              copiedField ===
              "smdp"
            }
            onCopy={() =>
              onCopy(
                esim.smdpAddress,
                "smdp"
              )
            }
          />

          <CopyField
            label="Activation Code"
            value={esim.activationCode}
            copied={
              copiedField ===
              "activation"
            }
            onCopy={() =>
              onCopy(
                esim.activationCode,
                "activation"
              )
            }
          />

        </div>

      </div>

    </div>
  );
}

/* ========================================================================== */
/* MANUAL INSTALLATION                                                         */
/* ========================================================================== */

function ManualInstallation({
  esim,
  device,
  onCopy,
  copiedField,
  onInstall,
}: {
  esim: EsimProfile;
  device: DeviceType;
  onCopy: (
    value: string,
    field: string
  ) => void;
  copiedField: string | null;
  onInstall: () => void;
}) {
  return (
    <div className="px-5 pb-6 sm:px-6">

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

        <div className="flex items-start gap-3">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-cyan-700 shadow-sm">

            <Clipboard className="h-5 w-5" />

          </div>

          <div>

            <h3 className="text-sm font-bold text-slate-800">
              Manual installation
            </h3>

            <p className="mt-1 text-[10px] leading-5 text-slate-400">
              Enter the following information in your
              device's eSIM settings.
            </p>

          </div>

        </div>

        <div className="mt-5 space-y-3">

          <CopyField
            label="SM-DP+ Address"
            value={esim.smdpAddress}
            copied={
              copiedField ===
              "manual-smdp"
            }
            onCopy={() =>
              onCopy(
                esim.smdpAddress,
                "manual-smdp"
              )
            }
          />

          <CopyField
            label="Activation Code"
            value={esim.activationCode}
            copied={
              copiedField ===
              "manual-activation"
            }
            onCopy={() =>
              onCopy(
                esim.activationCode,
                "manual-activation"
              )
            }
          />

          {esim.confirmationCode && (
            <CopyField
              label="Confirmation Code"
              value={
                esim.confirmationCode
              }
              copied={
                copiedField ===
                "confirmation"
              }
              onCopy={() =>
                onCopy(
                  esim.confirmationCode!,
                  "confirmation"
                )
              }
            />
          )}

        </div>

      </div>

      <div className="mt-5 rounded-2xl border border-slate-200 p-5">

        <div className="flex items-center gap-3">

          {device === "iphone" ? (
            <Apple className="h-5 w-5 text-slate-700" />
          ) : (
            <Smartphone className="h-5 w-5 text-slate-700" />
          )}

          <div>

            <h3 className="text-xs font-bold text-slate-800">
              Manual setup instructions
            </h3>

            <p className="mt-1 text-[10px] text-slate-400">
              {device === "iphone"
                ? "iPhone"
                : "Android"}
            </p>

          </div>

        </div>

        <InstallationSteps
          device={device}
          compact
          manual
        />

      </div>

      <button
        type="button"
        onClick={onInstall}
        className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 text-xs font-bold text-white transition hover:bg-cyan-700"
      >

        <CheckCircle2 className="h-4 w-4" />

        I've completed installation

      </button>

    </div>
  );
}

/* ========================================================================== */
/* INSTALLATION STEPS                                                          */
/* ========================================================================== */

function InstallationSteps({
  device,
  compact = false,
  manual = false,
}: {
  device: DeviceType;
  compact?: boolean;
  manual?: boolean;
}) {
  const iphoneSteps = manual
    ? [
        "Open Settings on your iPhone.",
        "Go to Cellular or Mobile Service.",
        "Select Add eSIM.",
        "Choose Enter Details Manually.",
        "Enter the SM-DP+ address and activation code.",
        "Follow the on-screen prompts to complete setup.",
      ]
    : [
        "Open Settings on your iPhone.",
        "Tap Cellular or Mobile Service.",
        "Select Add eSIM.",
        "Choose Use QR Code.",
        "Scan the QR code displayed on this page.",
        "Follow the on-screen prompts to activate your eSIM.",
      ];

  const androidSteps = manual
    ? [
        "Open Settings on your Android device.",
        "Open Network & Internet or Connections.",
        "Select SIMs or SIM Manager.",
        "Choose Add eSIM or Add mobile plan.",
        "Select Enter activation code manually.",
        "Enter the SM-DP+ address and activation code.",
      ]
    : [
        "Open Settings on your Android device.",
        "Open Network & Internet or Connections.",
        "Select SIMs or SIM Manager.",
        "Choose Add eSIM or Add mobile plan.",
        "Scan the QR code displayed on this page.",
        "Follow the on-screen prompts to finish setup.",
      ];

  const steps =
    device === "iphone"
      ? iphoneSteps
      : androidSteps;

  return (
    <div
      className={`${
        compact ? "mt-5" : "mt-5"
      } space-y-4`}
    >

      {steps.map((step, index) => (
        <div
          key={step}
          className="flex items-start gap-3"
        >

          <div className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-[10px] font-bold text-cyan-700">

            {index + 1}

          </div>

          <p className="pt-0.5 text-[11px] leading-5 text-slate-600">
            {step}
          </p>

        </div>
      ))}

    </div>
  );
}

/* ========================================================================== */
/* INSTALLATION PROGRESS                                                       */
/* ========================================================================== */

function InstallationProgress({
  status,
}: {
  status: InstallationStatus;
}) {
  const steps = [
    {
      key: "ready",
      label: "Ready",
    },
    {
      key: "installing",
      label: "Installing",
    },
    {
      key: "installed",
      label: "Installed",
    },
  ];

  const activeIndex =
    status === "ready"
      ? 0
      : status === "installing"
      ? 1
      : status === "installed"
      ? 2
      : 0;

  return (
    <div className="mt-5 rounded-2xl border border-slate-200 p-5">

      <div className="flex items-center justify-between">

        <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
          Installation status
        </p>

        <span className="text-[10px] font-bold text-slate-500">
          {status === "installed"
            ? "Complete"
            : `${activeIndex + 1}/3`}
        </span>

      </div>

      <div className="mt-5 flex items-center">

        {steps.map((step, index) => {

          const completed =
            index <= activeIndex;

          return (
            <div
              key={step.key}
              className="flex flex-1 items-center"
            >

              <div
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                  completed
                    ? "bg-cyan-600 text-white"
                    : "bg-slate-100 text-slate-400"
                }`}
              >

                {index <
                activeIndex ? (
                  <Check className="h-3.5 w-3.5" />
                ) : status ===
                    "installing" &&
                  index ===
                    activeIndex ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  index + 1
                )}

              </div>

              {index <
                steps.length - 1 && (
                <div
                  className={`mx-2 h-px flex-1 ${
                    index <
                    activeIndex
                      ? "bg-cyan-500"
                      : "bg-slate-200"
                  }`}
                />
              )}

            </div>
          );
        })}

      </div>

      <div className="mt-3 flex justify-between">

        {steps.map((step) => (
          <span
            key={step.key}
            className="text-[9px] font-semibold text-slate-400"
          >
            {step.label}
          </span>
        ))}

      </div>

    </div>
  );
}

/* ========================================================================== */
/* METHOD BUTTON                                                               */
/* ========================================================================== */

function MethodButton({
  active,
  icon,
  title,
  description,
  onClick,
}: {
  active: boolean;
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-3 rounded-xl border p-3 text-left transition ${
        active
          ? "border-cyan-400 bg-cyan-50"
          : "border-slate-200 hover:bg-slate-50"
      }`}
    >

      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
          active
            ? "bg-cyan-600 text-white"
            : "bg-slate-100 text-slate-500"
        }`}
      >
        {icon}
      </div>

      <div>

        <p className="text-xs font-bold text-slate-800">
          {title}
        </p>

        <p className="mt-1 text-[9px] text-slate-400">
          {description}
        </p>

      </div>

    </button>
  );
}

/* ========================================================================== */
/* DEVICE BUTTON                                                               */
/* ========================================================================== */

function DeviceButton({
  active,
  icon,
  title,
  onClick,
}: {
  active: boolean;
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-3 text-[10px] font-bold transition ${
        active
          ? "border-cyan-300 bg-cyan-50 text-cyan-700"
          : "border-slate-200 text-slate-500 hover:bg-slate-50"
      }`}
    >

      {icon}

      {title}

    </button>
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
    <div>

      <label className="mb-2 block text-[10px] font-bold uppercase tracking-wide text-slate-400">
        {label}
      </label>

      <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2">

        <span className="min-w-0 flex-1 truncate px-2 font-mono text-[10px] font-semibold text-slate-600">
          {value}
        </span>

        <button
          type="button"
          onClick={onCopy}
          className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-lg bg-slate-900 px-3 text-[9px] font-bold text-white"
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
  );
}

/* ========================================================================== */
/* INFO ROW                                                                    */
/* ========================================================================== */

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3 last:border-0 last:pb-0">

      <span className="text-[10px] text-slate-400">
        {label}
      </span>

      <span className="text-right text-[10px] font-bold text-slate-700">
        {value}
      </span>

    </div>
  );
}

/* ========================================================================== */
/* STATUS MINI                                                                 */
/* ========================================================================== */

function StatusMini({
  status,
}: {
  status: EsimProfile["status"];
}) {
  const config = {
    ready: {
      label: "Ready",
      classes:
        "bg-cyan-50 text-cyan-700",
    },
    installed: {
      label: "Installed",
      classes:
        "bg-emerald-50 text-emerald-600",
    },
    expired: {
      label: "Expired",
      classes:
        "bg-slate-100 text-slate-500",
    },
  }[status];

  return (
    <span
      className={`rounded-full px-2 py-1 text-[9px] font-bold ${config.classes}`}
    >
      {config.label}
    </span>
  );
}

/* ========================================================================== */
/* INSTALLATION STATUS                                                         */
/* ========================================================================== */

function InstallationStatusBadge({
  status,
}: {
  status: InstallationStatus;
}) {
  const config = {
    ready: {
      label: "Ready to install",
      classes:
        "bg-cyan-50 text-cyan-700",
      icon: <QrCode />,
    },

    installing: {
      label: "Installing",
      classes:
        "bg-amber-50 text-amber-700",
      icon: <Loader2 />,
    },

    installed: {
      label: "Installed",
      classes:
        "bg-emerald-50 text-emerald-700",
      icon: <CheckCircle2 />,
    },

    failed: {
      label: "Installation failed",
      classes:
        "bg-rose-50 text-rose-600",
      icon: <XCircle />,
    },
  }[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold ${config.classes}`}
    >

      <span
        className={
          status === "installing"
            ? "animate-spin"
            : ""
        }
      >
        {config.icon}
      </span>

      {config.label}

    </span>
  );
}

/* ========================================================================== */
/* ACTIVITY CARD                                                               */
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
/* FAKE QR                                                                    */
/* ========================================================================== */

function FakeQrCode() {
  const blocks = [
    1, 1, 1, 1, 0, 1, 1, 1, 1,
    1, 0, 1, 0, 1, 0, 1, 0, 1,
    1, 1, 1, 0, 1, 1, 1, 1, 1,
    1, 0, 0, 1, 0, 0, 1, 0, 1,
    0, 1, 1, 0, 1, 0, 0, 1, 0,
    1, 0, 0, 1, 1, 1, 1, 0, 1,
    1, 1, 1, 1, 0, 1, 1, 0, 0,
    1, 0, 1, 0, 1, 0, 1, 1, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1,
  ];

  return (
    <div
      className="grid aspect-square w-full grid-cols-9 gap-1"
      aria-label="eSIM QR code"
    >
      {blocks.map((block, index) => (
        <span
          key={index}
          className={`rounded-[1px] ${
            block
              ? "bg-slate-900"
              : "bg-white"
          }`}
        />
      ))}
    </div>
  );
}

/* ========================================================================== */
/* TROUBLESHOOTING MODAL                                                       */
/* ========================================================================== */

function TroubleshootingModal({
  device,
  onClose,
}: {
  device: DeviceType;
  onClose: () => void;
}) {
  const issues =
    device === "iphone"
      ? [
          "Make sure your iPhone supports eSIM.",
          "Connect your device to Wi-Fi before starting.",
          "Confirm that the QR code has not already been used.",
          "Restart your iPhone and try the installation again.",
          "Check that your device is not carrier restricted.",
        ]
      : [
          "Make sure your Android device supports eSIM.",
          "Connect to a stable Wi-Fi connection.",
          "Confirm that the QR code has not already been used.",
          "Restart your device and try again.",
          "Check whether your device is carrier restricted.",
        ];

  return (
    <div className="fixed inset-0 z-50">

      <button
        type="button"
        aria-label="Close troubleshooting"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]"
      />

      <div className="absolute left-1/2 top-1/2 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-2xl">

        <div className="flex items-center justify-between border-b border-slate-100 p-5">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">

              <AlertCircle className="h-5 w-5" />

            </div>

            <div>

              <h2 className="text-sm font-bold text-slate-900">
                Installation troubleshooting
              </h2>

              <p className="mt-1 text-[10px] text-slate-400">
                Common solutions for installation problems
              </p>

            </div>

          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50"
          >

            <X className="h-4 w-4" />

          </button>

        </div>

        <div className="p-5">

          <div className="space-y-3">

            {issues.map(
              (issue, index) => (
                <div
                  key={issue}
                  className="flex items-start gap-3 rounded-xl bg-slate-50 p-3"
                >

                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[9px] font-bold text-slate-500 shadow-sm">
                    {index + 1}
                  </span>

                  <p className="pt-0.5 text-[10px] leading-5 text-slate-600">
                    {issue}
                  </p>

                </div>
              )
            )}

          </div>

          <div className="mt-5 rounded-xl bg-cyan-50 p-4">

            <div className="flex gap-3">

              <CircleHelp className="h-4 w-4 shrink-0 text-cyan-700" />

              <p className="text-[10px] leading-5 text-cyan-800/80">
                If your eSIM still cannot be installed,
                contact support with your transaction
                reference and eSIM ID. Do not send your
                QR code or activation credentials.
              </p>

            </div>

          </div>

          <button
            type="button"
            onClick={onClose}
            className="mt-5 h-11 w-full rounded-xl bg-slate-900 text-xs font-bold text-white hover:bg-slate-800"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}