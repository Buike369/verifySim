// "use client";

// import {
//   User,
//   ShieldCheck,
//   Bell,
//   Globe2,
//   CreditCard,
//   Lock,
//   Smartphone,
//   Mail,
//   Eye,
//   Save,
//   Trash2,
//   KeyRound,
// } from "lucide-react";

// import { useState } from "react";





// const settingsSections = [

// {
// title:"Account Profile",
// description:"Manage your personal account information",
// icon:User
// },


// {
// title:"Security",
// description:"Password, authentication and login protection",
// icon:ShieldCheck
// },


// {
// title:"Notifications",
// description:"Control alerts and communication preferences",
// icon:Bell
// },


// {
// title:"Language & Region",
// description:"Manage language, timezone and currency",
// icon:Globe2
// },


// {
// title:"Payment Settings",
// description:"Manage billing and payment preferences",
// icon:CreditCard
// }

// ];






// export default function SettingsPage(){


// const [twoFA,setTwoFA]=useState(true);

// const [emailAlert,setEmailAlert]=useState(true);



// return (

// <main
// className="
// min-h-screen
// bg-[#f7f9fc]
// "
// >





// {/* HEADER */}


// <section
// className="
// bg-white
// border-b
// py-10
// "
// >


// <div
// className="
// max-w-7xl
// mx-auto
// px-5
// lg:px-10
// "
// >


// <h1
// className="
// text-3xl
// font-bold
// text-[#071B4D]
// "
// >

// Settings

// </h1>


// <p
// className="
// mt-2
// text-gray-500
// "
// >

// Manage your VerifySIM account,
// security and preferences.

// </p>


// </div>


// </section>









// <section
// className="
// max-w-7xl
// mx-auto
// px-5
// lg:px-10
// py-10
// "
// >


// <div
// className="
// grid
// lg:grid-cols-4
// gap-8
// "
// >









// {/* SIDEBAR */}



// <div
// className="
// bg-white
// rounded-3xl
// border
// p-5
// h-fit
// "
// >


// {

// settingsSections.map((item,index)=>{


// const Icon=item.icon;


// return (

// <button
// key={index}
// className="
// w-full
// flex
// items-center
// gap-4
// p-4
// rounded-xl
// hover:bg-blue-50
// transition
// text-left
// "
// >


// <div
// className="
// h-10
// w-10
// rounded-xl
// bg-blue-100
// flex
// items-center
// justify-center
// "
// >


// <Icon
// size={20}
// className="text-[#071B4D]"
// />


// </div>




// <div>

// <p
// className="
// font-semibold
// text-[#071B4D]
// "
// >

// {item.title}

// </p>


// <p
// className="
// text-xs
// text-gray-500
// "
// >

// {item.description}

// </p>


// </div>



// </button>


// )


// })


// }


// </div>









// {/* CONTENT */}



// <div
// className="
// lg:col-span-3
// space-y-6
// "
// >









// {/* PROFILE */}



// <div
// className="
// bg-white
// rounded-[32px]
// border
// p-8
// "
// >


// <div
// className="
// flex
// items-center
// gap-3
// "
// >

// <User
// className="text-[#071B4D]"
// />


// <h2
// className="
// text-2xl
// font-bold
// text-[#071B4D]
// "
// >

// Profile Information

// </h2>


// </div>







// <div
// className="
// mt-8
// grid
// sm:grid-cols-2
// gap-5
// "
// >


// <input
// placeholder="Full Name"
// defaultValue="Kingsley"
// className="
// border
// rounded-xl
// px-4
// py-3
// outline-none
// "
// />



// <input
// placeholder="Email Address"
// defaultValue="user@email.com"
// className="
// border
// rounded-xl
// px-4
// py-3
// outline-none
// "
// />




// <input
// placeholder="Phone Number"
// defaultValue="+234 xxx xxx xxxx"
// className="
// border
// rounded-xl
// px-4
// py-3
// outline-none
// "
// />



// <input
// placeholder="Country"
// defaultValue="Nigeria"
// className="
// border
// rounded-xl
// px-4
// py-3
// outline-none
// "
// />



// </div>





// <button
// className="
// mt-6
// flex
// items-center
// gap-2
// bg-[#071B4D]
// text-white
// px-7
// py-3
// rounded-xl
// font-semibold
// "
// >


// <Save size={18}/>

// Save Changes


// </button>


// </div>









// {/* SECURITY */}



// <div
// className="
// bg-white
// rounded-[32px]
// border
// p-8
// "
// >


// <div
// className="
// flex
// items-center
// gap-3
// "
// >

// <Lock
// className="text-[#071B4D]"
// />


// <h2
// className="
// text-2xl
// font-bold
// text-[#071B4D]
// "
// >

// Security

// </h2>


// </div>







// <div
// className="
// mt-6
// space-y-5
// "
// >





// <div
// className="
// flex
// justify-between
// items-center
// bg-[#f7f9fc]
// rounded-xl
// p-5
// "
// >


// <div>

// <h3
// className="
// font-semibold
// "
// >

// Two-Factor Authentication

// </h3>


// <p
// className="
// text-sm
// text-gray-500
// "
// >

// Extra protection for your account

// </p>


// </div>





// <button
// onClick={()=>setTwoFA(!twoFA)}
// className={`
// w-14
// h-7
// rounded-full
// p-1
// transition

// ${twoFA
// ?
// "bg-[#071B4D]"
// :
// "bg-gray-300"
// }

// `}
// >


// <div
// className={`
// bg-white
// h-5
// w-5
// rounded-full
// transition

// ${twoFA
// ?
// "translate-x-7"
// :
// "translate-x-0"
// }

// `}
// />


// </button>



// </div>









// <button
// className="
// flex
// items-center
// gap-3
// text-[#071B4D]
// font-semibold
// "
// >


// <KeyRound size={18}/>

// Change Password


// </button>


// </div>


// </div>









// {/* NOTIFICATIONS */}



// <div
// className="
// bg-white
// rounded-[32px]
// border
// p-8
// "
// >


// <div
// className="
// flex
// items-center
// gap-3
// "
// >

// <Bell
// className="text-[#071B4D]"
// />


// <h2
// className="
// text-2xl
// font-bold
// text-[#071B4D]
// "
// >

// Notifications

// </h2>


// </div>








// <div
// className="
// mt-6
// space-y-5
// "
// >



// <div
// className="
// flex
// justify-between
// items-center
// "
// >


// <div
// className="
// flex
// items-center
// gap-3
// "
// >

// <Mail/>

// <div>

// <p
// className="
// font-semibold
// "
// >

// Email Notifications

// </p>


// <p
// className="
// text-sm
// text-gray-500
// "
// >

// Receive account updates

// </p>


// </div>


// </div>





// <button
// onClick={()=>setEmailAlert(!emailAlert)}
// className={`
// w-14
// h-7
// rounded-full
// p-1

// ${emailAlert
// ?
// "bg-[#071B4D]"
// :
// "bg-gray-300"
// }

// `}
// >


// <div
// className={`
// bg-white
// h-5
// w-5
// rounded-full

// ${emailAlert
// ?
// "translate-x-7"
// :
// ""
// }

// `}
// />


// </button>



// </div>




// </div>


// </div>









// {/* PRIVACY */}



// <div
// className="
// bg-white
// rounded-[32px]
// border
// p-8
// "
// >


// <div
// className="
// flex
// items-center
// gap-3
// "
// >

// <Eye
// className="text-[#071B4D]"
// />



// <h2
// className="
// text-2xl
// font-bold
// text-[#071B4D]
// "
// >

// Privacy Controls

// </h2>


// </div>





// <p
// className="
// mt-5
// text-gray-600
// "
// >

// Manage how VerifySIM uses your information
// and communication preferences.

// </p>




// <button
// className="
// mt-6
// flex
// items-center
// gap-2
// text-red-600
// font-semibold
// "
// >


// <Trash2 size={18}/>


// Delete Account


// </button>


// </div>









// </div>


// </div>


// </section>





// </main>

// )

// }


"use client";

import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Bell,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  Eye,
  EyeOff,
  Globe,
  KeyRound,
  Laptop,
  Lock,
  LogOut,
  Mail,
  Monitor,
  Moon,
  MoreHorizontal,
  Phone,
  RefreshCcw,
  Save,
  Search,
  Settings as SettingsIcon,
  Shield,
  Smartphone,
  Trash2,
  User,
  Users,
  Wallet,
  X,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type SettingsSection =
  | "profile"
  | "security"
  | "verification"
  | "esim"
  | "wallet"
  | "transactions"
  | "notifications"
  | "referrals"
  | "sessions"
  | "privacy";

type Session = {
  id: string;
  device: string;
  browser: string;
  location: string;
  ip: string;
  lastActive: string;
  current: boolean;
};

/* =========================================================
   SESSION DATA
========================================================= */

const initialSessions: Session[] = [
  {
    id: "session-1",
    device: "MacBook Pro",
    browser: "Chrome 150",
    location: "Lagos, Nigeria",
    ip: "102.89.xx.xx",
    lastActive: "Active now",
    current: true,
  },
  {
    id: "session-2",
    device: "iPhone",
    browser: "Safari Mobile",
    location: "Port Harcourt, Nigeria",
    ip: "197.21.xx.xx",
    lastActive: "2 hours ago",
    current: false,
  },
  {
    id: "session-3",
    device: "Windows PC",
    browser: "Chrome 149",
    location: "Abuja, Nigeria",
    ip: "105.112.xx.xx",
    lastActive: "Yesterday",
    current: false,
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function SettingsPage() {
  const [activeSection, setActiveSection] =
    useState<SettingsSection>("profile");

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [saving, setSaving] =
    useState(false);

  const [saved, setSaved] =
    useState(false);

  const [sessions, setSessions] =
    useState(initialSessions);

  const [showDeleteModal, setShowDeleteModal] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  /* =======================================================
     PROFILE
  ======================================================= */

  const [profile, setProfile] = useState({
    firstName: "Kingsley",
    lastName: "Unegbu",
    email: "kingsley@example.com",
    phone: "+234 800 000 0000",
    country: "Nigeria",
    language: "English",
    timezone: "Africa/Lagos",
  });

  /* =======================================================
     SECURITY
  ======================================================= */

  const [security, setSecurity] = useState({
    twoFactor: true,
    loginAlerts: true,
    password: "",
    confirmPassword: "",
  });

  /* =======================================================
     VERIFICATION
  ======================================================= */

  const [verification, setVerification] = useState({
    autoRefreshSms: true,
    smsSound: true,
    autoCancelExpired: true,
    showFullNumber: true,
    defaultCountry: "Nigeria",
    defaultService: "WhatsApp",
  });

  /* =======================================================
     ESIM
  ======================================================= */

  const [esim, setEsim] = useState({
    lowDataAlert: true,
    dataAlertPercentage: "20",
    expiryReminder: true,
    expiryReminderDays: "3",
    autoTopUp: false,
    defaultCurrency: "USD",
  });

  /* =======================================================
     WALLET
  ======================================================= */

  const [wallet, setWallet] = useState({
    currency: "USD",
    lowBalanceAlert: true,
    lowBalanceThreshold: "10",
    walletNotifications: true,
    hideBalance: false,
  });

  /* =======================================================
     TRANSACTIONS
  ======================================================= */

  const [transactions, setTransactions] = useState({
    emailReceipts: true,
    transactionAlerts: true,
    showPendingTransactions: true,
    compactHistory: false,
    defaultPeriod: "30",
  });

  /* =======================================================
     NOTIFICATIONS
  ======================================================= */

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    verification: true,
    esim: true,
    wallet: true,
    transaction: true,
    referral: true,
    marketing: false,
  });

  /* =======================================================
     REFERRALS
  ======================================================= */

  const [referrals, setReferrals] = useState({
    referralNotifications: true,
    commissionNotifications: true,
    weeklySummary: true,
    referralCode: "KINGSLEY25",
  });

  /* =======================================================
     PRIVACY
  ======================================================= */

  const [privacy, setPrivacy] = useState({
    analytics: true,
    personalizedOffers: false,
    activityTracking: true,
  });

  /* =======================================================
     SETTINGS NAVIGATION
  ======================================================= */

  const navigation = [
    {
      id: "profile" as SettingsSection,
      label: "Profile",
      description: "Personal information",
      icon: User,
    },
    {
      id: "security" as SettingsSection,
      label: "Security",
      description: "Password & authentication",
      icon: Shield,
    },
    {
      id: "verification" as SettingsSection,
      label: "Verification Number",
      description: "SMS & number preferences",
      icon: Phone,
    },
    {
      id: "esim" as SettingsSection,
      label: "eSIM",
      description: "Data & eSIM preferences",
      icon: Smartphone,
    },
    {
      id: "wallet" as SettingsSection,
      label: "Wallet",
      description: "Balance & currency",
      icon: Wallet,
    },
    {
      id: "transactions" as SettingsSection,
      label: "Transactions",
      description: "History & receipts",
      icon: CreditCard,
    },
    {
      id: "notifications" as SettingsSection,
      label: "Notifications",
      description: "Alerts & communication",
      icon: Bell,
    },
    {
      id: "referrals" as SettingsSection,
      label: "Referrals",
      description: "Referral preferences",
      icon: Users,
    },
    {
      id: "sessions" as SettingsSection,
      label: "Sessions",
      description: "Devices & active sessions",
      icon: Laptop,
    },
    {
      id: "privacy" as SettingsSection,
      label: "Privacy",
      description: "Data & personalization",
      icon: Lock,
    },
  ];

  const activeNavigation = useMemo(
    () =>
      navigation.find(
        (item) =>
          item.id === activeSection
      ),
    [activeSection]
  );

  /* =======================================================
     SAVE
  ======================================================= */

  async function saveSettings() {
    setSaving(true);
    setSaved(false);

    /*
      Production:

      await fetch("/api/settings", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          profile,
          security,
          verification,
          esim,
          wallet,
          transactions,
          notifications,
          referrals,
          privacy,
        }),
      });
    */

    await delay(800);

    setSaving(false);
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  }

  /* =======================================================
     LOGOUT SESSION
  ======================================================= */

  function logoutSession(id: string) {
    setSessions((current) =>
      current.filter(
        (session) => session.id !== id
      )
    );
  }

  /* =======================================================
     LOGOUT ALL
  ======================================================= */

  function logoutAllSessions() {
    setSessions((current) =>
      current.filter(
        (session) => session.current
      )
    );
  }

  /* =======================================================
     NAVIGATE
  ======================================================= */

  function selectSection(
    section: SettingsSection
  ) {
    setActiveSection(section);
    setMobileMenuOpen(false);
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc]">

      <div className="mx-auto w-full max-w-[1500px] px-4 py-5 sm:px-6 lg:px-8 lg:py-8">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mb-6">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">

            <div className="flex items-start gap-3">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white">
                <SettingsIcon className="h-6 w-6" />
              </div>

              <div>

                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-600">
                  Account center
                </p>

                <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Settings
                </h1>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  Manage your profile, security,
                  verification numbers, eSIM,
                  wallet, transactions and
                  communication preferences.
                </p>

              </div>

            </div>

            <button
              type="button"
              onClick={saveSettings}
              disabled={saving}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-xs font-bold text-white shadow-sm transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >

              {saving ? (
                <RefreshCcw className="h-4 w-4 animate-spin" />
              ) : saved ? (
                <Check className="h-4 w-4" />
              ) : (
                <Save className="h-4 w-4" />
              )}

              {saving
                ? "Saving..."
                : saved
                ? "Saved"
                : "Save changes"}

            </button>

          </div>

        </div>

        {/* =================================================
            MOBILE SETTINGS SELECTOR
        ================================================= */}

        <div className="mb-4 lg:hidden">

          <button
            type="button"
            onClick={() =>
              setMobileMenuOpen(
                !mobileMenuOpen
              )
            }
            className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          >

            <div className="flex items-center gap-3">

              {activeNavigation && (
                <>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                    <activeNavigation.icon className="h-5 w-5" />
                  </div>

                  <div className="text-left">

                    <p className="text-xs font-bold text-slate-800">
                      {activeNavigation.label}
                    </p>

                    <p className="mt-1 text-[9px] text-slate-400">
                      {activeNavigation.description}
                    </p>

                  </div>
                </>
              )}

            </div>

            <ChevronDown
              className={`h-4 w-4 text-slate-400 transition ${
                mobileMenuOpen
                  ? "rotate-180"
                  : ""
              }`}
            />

          </button>

          {mobileMenuOpen && (
            <div className="mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">

              {navigation.map(
                (item) => (
                  <SettingsNavItem
                    key={item.id}
                    item={item}
                    active={
                      item.id ===
                      activeSection
                    }
                    onClick={() =>
                      selectSection(
                        item.id
                      )
                    }
                  />
                )
              )}

            </div>
          )}

        </div>

        {/* =================================================
            MAIN LAYOUT
        ================================================= */}

        <div className="grid gap-5 lg:grid-cols-[270px_1fr]">

          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside className="hidden h-fit overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:block">

            <div className="border-b border-slate-100 p-4">

              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                Settings
              </p>

            </div>

            <nav className="p-2">

              {navigation.map(
                (item) => (
                  <SettingsNavItem
                    key={item.id}
                    item={item}
                    active={
                      item.id ===
                      activeSection
                    }
                    onClick={() =>
                      selectSection(
                        item.id
                      )
                    }
                  />
                )
              )}

            </nav>

            <div className="m-3 rounded-xl bg-slate-50 p-3">

              <div className="flex gap-2">

                <Shield className="h-4 w-4 shrink-0 text-emerald-600" />

                <div>

                  <p className="text-[9px] font-bold text-slate-700">
                    Account protected
                  </p>

                  <p className="mt-1 text-[8px] leading-4 text-slate-400">
                    Two-factor authentication
                    is enabled.
                  </p>

                </div>

              </div>

            </div>

          </aside>

          {/* =================================================
              CONTENT
          ================================================= */}

          <section className="min-w-0">

            {/* PAGE TITLE */}

            <div className="mb-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="flex items-center gap-3">

                {activeNavigation && (
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                    <activeNavigation.icon className="h-5 w-5" />
                  </div>
                )}

                <div>

                  <h2 className="text-sm font-bold text-slate-900">
                    {activeNavigation?.label}
                  </h2>

                  <p className="mt-1 text-[10px] text-slate-400">
                    {
                      activeNavigation?.description
                    }
                  </p>

                </div>

              </div>

            </div>

            {/* =================================================
                PROFILE
            ================================================= */}

            {activeSection ===
              "profile" && (
              <ProfileSettings
                profile={profile}
                setProfile={setProfile}
              />
            )}

            {/* =================================================
                SECURITY
            ================================================= */}

            {activeSection ===
              "security" && (
              <SecuritySettings
                security={security}
                setSecurity={setSecurity}
                showPassword={
                  showPassword
                }
                setShowPassword={
                  setShowPassword
                }
                showConfirmPassword={
                  showConfirmPassword
                }
                setShowConfirmPassword={
                  setShowConfirmPassword
                }
              />
            )}

            {/* =================================================
                VERIFICATION
            ================================================= */}

            {activeSection ===
              "verification" && (
              <VerificationSettings
                settings={
                  verification
                }
                setSettings={
                  setVerification
                }
              />
            )}

            {/* =================================================
                ESIM
            ================================================= */}

            {activeSection ===
              "esim" && (
              <EsimSettings
                settings={esim}
                setSettings={setEsim}
              />
            )}

            {/* =================================================
                WALLET
            ================================================= */}

            {activeSection ===
              "wallet" && (
              <WalletSettings
                settings={wallet}
                setSettings={setWallet}
              />
            )}

            {/* =================================================
                TRANSACTIONS
            ================================================= */}

            {activeSection ===
              "transactions" && (
              <TransactionSettings
                settings={
                  transactions
                }
                setSettings={
                  setTransactions
                }
              />
            )}

            {/* =================================================
                NOTIFICATIONS
            ================================================= */}

            {activeSection ===
              "notifications" && (
              <NotificationSettings
                settings={
                  notifications
                }
                setSettings={
                  setNotifications
                }
              />
            )}

            {/* =================================================
                REFERRALS
            ================================================= */}

            {activeSection ===
              "referrals" && (
              <ReferralSettings
                settings={referrals}
                setSettings={
                  setReferrals
                }
              />
            )}

            {/* =================================================
                SESSIONS
            ================================================= */}

            {activeSection ===
              "sessions" && (
              <SessionsSettings
                sessions={sessions}
                logoutSession={
                  logoutSession
                }
                logoutAllSessions={
                  logoutAllSessions
                }
              />
            )}

            {/* =================================================
                PRIVACY
            ================================================= */}

            {activeSection ===
              "privacy" && (
              <PrivacySettings
                settings={privacy}
                setSettings={setPrivacy}
              />
            )}

            {/* =================================================
                DANGER ZONE
            ================================================= */}

            <div className="mt-5 rounded-2xl border border-rose-200 bg-white shadow-sm">

              <div className="border-b border-rose-100 p-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                    <AlertTriangle className="h-4 w-4" />
                  </div>

                  <div>

                    <h3 className="text-xs font-bold text-rose-700">
                      Danger zone
                    </h3>

                    <p className="mt-1 text-[9px] text-slate-400">
                      Irreversible account actions.
                    </p>

                  </div>

                </div>

              </div>

              <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <p className="text-xs font-bold text-slate-800">
                    Delete account
                  </p>

                  <p className="mt-1 max-w-xl text-[9px] leading-5 text-slate-400">
                    Permanently remove your account
                    and associated data. This action
                    cannot be undone.
                  </p>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    setShowDeleteModal(
                      true
                    )
                  }
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-4 text-[10px] font-bold text-rose-700 hover:bg-rose-100"
                >

                  <Trash2 className="h-4 w-4" />

                  Delete account

                </button>

              </div>

            </div>

          </section>

        </div>

      </div>

      {/* =====================================================
          DELETE MODAL
      ===================================================== */}

      {showDeleteModal && (
        <DeleteAccountModal
          onClose={() =>
            setShowDeleteModal(
              false
            )
          }
        />
      )}

    </main>
  );
}

/* =========================================================
   SETTINGS NAV ITEM
========================================================= */

function SettingsNavItem({
  item,
  active,
  onClick,
}: {
  item: {
    id: SettingsSection;
    label: string;
    description: string;
    icon: any;
  };
  active: boolean;
  onClick: () => void;
}) {
  const Icon = item.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-xl p-3 text-left transition ${
        active
          ? "bg-cyan-50 text-cyan-700"
          : "text-slate-600 hover:bg-slate-50"
      }`}
    >

      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
          active
            ? "bg-white text-cyan-700 shadow-sm"
            : "bg-slate-100 text-slate-400"
        }`}
      >
        <Icon className="h-4 w-4" />
      </div>

      <div className="min-w-0 flex-1">

        <p
          className={`truncate text-[10px] font-bold ${
            active
              ? "text-cyan-800"
              : "text-slate-700"
          }`}
        >
          {item.label}
        </p>

        <p className="mt-0.5 truncate text-[8px] text-slate-400">
          {item.description}
        </p>

      </div>

      {active && (
        <div className="h-1.5 w-1.5 rounded-full bg-cyan-600" />
      )}

    </button>
  );
}

/* =========================================================
   PROFILE SETTINGS
========================================================= */

function ProfileSettings({
  profile,
  setProfile,
}: any) {
  return (
    <div className="space-y-5">

      <SettingsCard
        title="Personal information"
        description="Update the information associated with your account."
      >

        <div className="mb-6 flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-lg font-bold text-white">
            KU
          </div>

          <div>

            <p className="text-sm font-bold text-slate-800">
              Profile photo
            </p>

            <p className="mt-1 text-[9px] text-slate-400">
              JPG, PNG or WebP. Maximum 2MB.
            </p>

            <button
              type="button"
              className="mt-2 text-[9px] font-bold text-cyan-700"
            >
              Change photo
            </button>

          </div>

        </div>

        <div className="grid gap-4 sm:grid-cols-2">

          <Input
            label="First name"
            value={profile.firstName}
            onChange={(value) =>
              setProfile({
                ...profile,
                firstName: value,
              })
            }
          />

          <Input
            label="Last name"
            value={profile.lastName}
            onChange={(value) =>
              setProfile({
                ...profile,
                lastName: value,
              })
            }
          />

          <Input
            label="Email address"
            type="email"
            value={profile.email}
            onChange={(value) =>
              setProfile({
                ...profile,
                email: value,
              })
            }
          />

          <Input
            label="Phone number"
            value={profile.phone}
            onChange={(value) =>
              setProfile({
                ...profile,
                phone: value,
              })
            }
          />

        </div>

      </SettingsCard>

      <SettingsCard
        title="Regional preferences"
        description="Control language, country and timezone preferences."
      >

        <div className="grid gap-4 sm:grid-cols-3">

          <Select
            label="Country"
            value={profile.country}
            onChange={(value) =>
              setProfile({
                ...profile,
                country: value,
              })
            }
            options={[
              "Nigeria",
              "United Kingdom",
              "United States",
              "Canada",
              "Ghana",
            ]}
          />

          <Select
            label="Language"
            value={profile.language}
            onChange={(value) =>
              setProfile({
                ...profile,
                language: value,
              })
            }
            options={[
              "English",
              "French",
              "Spanish",
              "Portuguese",
            ]}
          />

          <Select
            label="Timezone"
            value={profile.timezone}
            onChange={(value) =>
              setProfile({
                ...profile,
                timezone: value,
              })
            }
            options={[
              "Africa/Lagos",
              "UTC",
              "Europe/London",
              "America/New_York",
            ]}
          />

        </div>

      </SettingsCard>

    </div>
  );
}

/* =========================================================
   SECURITY
========================================================= */

function SecuritySettings({
  security,
  setSecurity,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
}: any) {
  return (
    <div className="space-y-5">

      <SettingsCard
        title="Two-factor authentication"
        description="Add an additional security layer to your account."
      >

        <ToggleRow
          icon={<Shield />}
          title="Two-factor authentication"
          description="Require a verification code when signing in from a new device."
          checked={
            security.twoFactor
          }
          onChange={(checked) =>
            setSecurity({
              ...security,
              twoFactor: checked,
            })
          }
        />

        <div className="mt-4 rounded-xl bg-emerald-50 p-4">

          <div className="flex gap-3">

            <Check className="h-4 w-4 shrink-0 text-emerald-600" />

            <div>

              <p className="text-[10px] font-bold text-emerald-800">
                Your account is protected
              </p>

              <p className="mt-1 text-[9px] leading-5 text-emerald-700">
                Two-factor authentication is
                currently enabled.
              </p>

            </div>

          </div>

        </div>

      </SettingsCard>

      <SettingsCard
        title="Change password"
        description="Use a strong password that you do not reuse elsewhere."
      >

        <div className="grid gap-4 sm:grid-cols-2">

          <PasswordInput
            label="New password"
            value={
              security.password
            }
            show={showPassword}
            setShow={setShowPassword}
            onChange={(value) =>
              setSecurity({
                ...security,
                password: value,
              })
            }
          />

          <PasswordInput
            label="Confirm password"
            value={
              security.confirmPassword
            }
            show={
              showConfirmPassword
            }
            setShow={
              setShowConfirmPassword
            }
            onChange={(value) =>
              setSecurity({
                ...security,
                confirmPassword:
                  value,
              })
            }
          />

        </div>

      </SettingsCard>

      <SettingsCard
        title="Login alerts"
        description="Receive security alerts when your account is accessed."
      >

        <ToggleRow
          icon={<Bell />}
          title="New login alerts"
          description="Notify me whenever a new device signs into my account."
          checked={
            security.loginAlerts
          }
          onChange={(checked) =>
            setSecurity({
              ...security,
              loginAlerts: checked,
            })
          }
        />

      </SettingsCard>

    </div>
  );
}

/* =========================================================
   VERIFICATION SETTINGS
========================================================= */

function VerificationSettings({
  settings,
  setSettings,
}: any) {
  return (
    <div className="space-y-5">

      <SettingsCard
        title="Verification Number preferences"
        description="Configure how purchased numbers and incoming SMS are handled."
      >

        <div className="space-y-1">

          <ToggleRow
            icon={<RefreshCcw />}
            title="Auto-refresh SMS"
            description="Automatically refresh incoming messages while an activation is active."
            checked={
              settings.autoRefreshSms
            }
            onChange={(checked) =>
              setSettings({
                ...settings,
                autoRefreshSms:
                  checked,
              })
            }
          />

          <ToggleRow
            icon={<Bell />}
            title="SMS notification sound"
            description="Play a notification sound when a new verification SMS arrives."
            checked={
              settings.smsSound
            }
            onChange={(checked) =>
              setSettings({
                ...settings,
                smsSound: checked,
              })
            }
          />

          <ToggleRow
            icon={<RefreshCcw />}
            title="Automatically cancel expired activations"
            description="Automatically close activations after their provider-defined expiry period."
            checked={
              settings.autoCancelExpired
            }
            onChange={(checked) =>
              setSettings({
                ...settings,
                autoCancelExpired:
                  checked,
              })
            }
          />

          <ToggleRow
            icon={<Eye />}
            title="Show full phone number"
            description="Display the complete purchased number in your dashboard."
            checked={
              settings.showFullNumber
            }
            onChange={(checked) =>
              setSettings({
                ...settings,
                showFullNumber:
                  checked,
              })
            }
          />

        </div>

      </SettingsCard>

      <SettingsCard
        title="Default purchase preferences"
        description="Set your preferred defaults when purchasing verification numbers."
      >

        <div className="grid gap-4 sm:grid-cols-2">

          <Select
            label="Default country"
            value={
              settings.defaultCountry
            }
            onChange={(value) =>
              setSettings({
                ...settings,
                defaultCountry:
                  value,
              })
            }
            options={[
              "Nigeria",
              "United States",
              "United Kingdom",
              "Canada",
              "Ghana",
              "India",
            ]}
          />

          <Select
            label="Default service"
            value={
              settings.defaultService
            }
            onChange={(value) =>
              setSettings({
                ...settings,
                defaultService:
                  value,
              })
            }
            options={[
              "WhatsApp",
              "Telegram",
              "Google",
              "Facebook",
              "Instagram",
            ]}
          />

        </div>

      </SettingsCard>

    </div>
  );
}

/* =========================================================
   ESIM
========================================================= */

function EsimSettings({
  settings,
  setSettings,
}: any) {
  return (
    <div className="space-y-5">

      <SettingsCard
        title="eSIM usage alerts"
        description="Receive alerts before your eSIM data or validity expires."
      >

        <ToggleRow
          icon={<Bell />}
          title="Low data alert"
          description="Notify me when my eSIM data reaches the configured threshold."
          checked={
            settings.lowDataAlert
          }
          onChange={(checked) =>
            setSettings({
              ...settings,
              lowDataAlert: checked,
            })
          }
        />

        {settings.lowDataAlert && (
          <div className="mt-4 max-w-xs">

            <Input
              label="Alert threshold (%)"
              type="number"
              value={
                settings.dataAlertPercentage
              }
              onChange={(value) =>
                setSettings({
                  ...settings,
                  dataAlertPercentage:
                    value,
                })
              }
            />

          </div>
        )}

        <div className="mt-4">

          <ToggleRow
            icon={<Bell />}
            title="Expiry reminder"
            description="Remind me before my eSIM validity expires."
            checked={
              settings.expiryReminder
            }
            onChange={(checked) =>
              setSettings({
                ...settings,
                expiryReminder:
                  checked,
              })
            }
          />

        </div>

        {settings.expiryReminder && (
          <div className="mt-4 max-w-xs">

            <Input
              label="Reminder days before expiry"
              type="number"
              value={
                settings.expiryReminderDays
              }
              onChange={(value) =>
                setSettings({
                  ...settings,
                  expiryReminderDays:
                    value,
                })
              }
            />

          </div>
        )}

      </SettingsCard>

      <SettingsCard
        title="Automatic top-up"
        description="Automatically replenish an eSIM when its data reaches your threshold."
      >

        <ToggleRow
          icon={<Wallet />}
          title="Enable automatic top-up"
          description="Use your configured wallet payment method to replenish eligible eSIMs."
          checked={
            settings.autoTopUp
          }
          onChange={(checked) =>
            setSettings({
              ...settings,
              autoTopUp: checked,
            })
          }
        />

        <div className="mt-4">

          <Select
            label="Default currency"
            value={
              settings.defaultCurrency
            }
            onChange={(value) =>
              setSettings({
                ...settings,
                defaultCurrency:
                  value,
              })
            }
            options={[
              "USD",
              "NGN",
              "EUR",
              "GBP",
            ]}
          />

        </div>

      </SettingsCard>

    </div>
  );
}

/* =========================================================
   WALLET
========================================================= */

function WalletSettings({
  settings,
  setSettings,
}: any) {
  return (
    <div className="space-y-5">

      <SettingsCard
        title="Wallet preferences"
        description="Configure your wallet display, currency and balance alerts."
      >

        <div className="grid gap-4 sm:grid-cols-2">

          <Select
            label="Default wallet currency"
            value={
              settings.currency
            }
            onChange={(value) =>
              setSettings({
                ...settings,
                currency: value,
              })
            }
            options={[
              "USD",
              "NGN",
              "EUR",
              "GBP",
            ]}
          />

          <Input
            label="Low balance threshold"
            type="number"
            value={
              settings.lowBalanceThreshold
            }
            onChange={(value) =>
              setSettings({
                ...settings,
                lowBalanceThreshold:
                  value,
              })
            }
          />

        </div>

        <div className="mt-4">

          <ToggleRow
            icon={<Bell />}
            title="Low wallet balance alert"
            description="Notify me when my wallet balance drops below the configured threshold."
            checked={
              settings.lowBalanceAlert
            }
            onChange={(checked) =>
              setSettings({
                ...settings,
                lowBalanceAlert:
                  checked,
              })
            }
          />

          <ToggleRow
            icon={<Wallet />}
            title="Wallet notifications"
            description="Receive notifications about deposits, credits, debits and refunds."
            checked={
              settings.walletNotifications
            }
            onChange={(checked) =>
              setSettings({
                ...settings,
                walletNotifications:
                  checked,
              })
            }
          />

          <ToggleRow
            icon={<EyeOff />}
            title="Hide wallet balance"
            description="Hide your wallet balance on dashboard screens."
            checked={
              settings.hideBalance
            }
            onChange={(checked) =>
              setSettings({
                ...settings,
                hideBalance: checked,
              })
            }
          />

        </div>

      </SettingsCard>

    </div>
  );
}

/* =========================================================
   TRANSACTIONS
========================================================= */

function TransactionSettings({
  settings,
  setSettings,
}: any) {
  return (
    <SettingsCard
      title="Transaction preferences"
      description="Configure your transaction history and receipt preferences."
    >

      <ToggleRow
        icon={<Mail />}
        title="Email receipts"
        description="Send transaction receipts to your registered email address."
        checked={
          settings.emailReceipts
        }
        onChange={(checked) =>
          setSettings({
            ...settings,
            emailReceipts: checked,
          })
        }
      />

      <ToggleRow
        icon={<Bell />}
        title="Transaction alerts"
        description="Notify me when money is credited or debited from my account."
        checked={
          settings.transactionAlerts
        }
        onChange={(checked) =>
          setSettings({
            ...settings,
            transactionAlerts:
              checked,
          })
        }
      />

      <ToggleRow
        icon={<CreditCard />}
        title="Show pending transactions"
        description="Include pending transactions in transaction history."
        checked={
          settings.showPendingTransactions
        }
        onChange={(checked) =>
          setSettings({
            ...settings,
            showPendingTransactions:
              checked,
          })
        }
      />

      <ToggleRow
        icon={<CreditCard />}
        title="Compact transaction history"
        description="Use a denser transaction history layout."
        checked={
          settings.compactHistory
        }
        onChange={(checked) =>
          setSettings({
            ...settings,
            compactHistory:
              checked,
          })
        }
      />

      <div className="mt-4 max-w-xs">

        <Select
          label="Default history period"
          value={
            settings.defaultPeriod
          }
          onChange={(value) =>
            setSettings({
              ...settings,
              defaultPeriod: value,
            })
          }
          options={[
            "7",
            "30",
            "90",
            "180",
            "365",
          ]}
        />

      </div>

    </SettingsCard>
  );
}

/* =========================================================
   NOTIFICATIONS
========================================================= */

function NotificationSettings({
  settings,
  setSettings,
}: any) {
  const items = [
    {
      key: "email",
      icon: <Mail />,
      title: "Email notifications",
      description:
        "Receive important account notifications by email.",
    },
    {
      key: "sms",
      icon: <Phone />,
      title: "SMS notifications",
      description:
        "Receive selected account notifications through SMS.",
    },
    {
      key: "push",
      icon: <Bell />,
      title: "Push notifications",
      description:
        "Receive real-time notifications in supported devices.",
    },
    {
      key: "verification",
      icon: <Phone />,
      title: "Verification activity",
      description:
        "Number purchases, SMS and activation updates.",
    },
    {
      key: "esim",
      icon: <Smartphone />,
      title: "eSIM activity",
      description:
        "Purchases, installation, usage and expiry alerts.",
    },
    {
      key: "wallet",
      icon: <Wallet />,
      title: "Wallet activity",
      description:
        "Deposits, withdrawals, credits and refunds.",
    },
    {
      key: "transaction",
      icon: <CreditCard />,
      title: "Transaction activity",
      description:
        "Important transaction status updates.",
    },
    {
      key: "referral",
      icon: <Users />,
      title: "Referral activity",
      description:
        "Referral registrations and commission updates.",
    },
    {
      key: "marketing",
      icon: <Mail />,
      title: "Product updates",
      description:
        "Optional offers, announcements and product news.",
    },
  ];

  return (
    <SettingsCard
      title="Notification preferences"
      description="Choose which events you want to be notified about."
    >

      <div className="space-y-1">

        {items.map((item) => (
          <ToggleRow
            key={item.key}
            icon={item.icon}
            title={item.title}
            description={
              item.description
            }
            checked={
              settings[item.key]
            }
            onChange={(checked) =>
              setSettings({
                ...settings,
                [item.key]:
                  checked,
              })
            }
          />
        ))}

      </div>

    </SettingsCard>
  );
}

/* =========================================================
   REFERRALS
========================================================= */

function ReferralSettings({
  settings,
  setSettings,
}: any) {
  return (
    <SettingsCard
      title="Referral preferences"
      description="Control referral commission and activity notifications."
    >

      <ToggleRow
        icon={<Users />}
        title="Referral notifications"
        description="Notify me when a new user joins through my referral link."
        checked={
          settings.referralNotifications
        }
        onChange={(checked) =>
          setSettings({
            ...settings,
            referralNotifications:
              checked,
          })
        }
      />

      <ToggleRow
        icon={<Wallet />}
        title="Commission notifications"
        description="Notify me whenever a referral commission is earned."
        checked={
          settings.commissionNotifications
        }
        onChange={(checked) =>
          setSettings({
            ...settings,
            commissionNotifications:
              checked,
          })
        }
      />

      <ToggleRow
        icon={<Mail />}
        title="Weekly referral summary"
        description="Receive a weekly summary of referral performance."
        checked={
          settings.weeklySummary
        }
        onChange={(checked) =>
          setSettings({
            ...settings,
            weeklySummary: checked,
          })
        }
      />

      <div className="mt-5 max-w-md">

        <Input
          label="Referral code"
          value={
            settings.referralCode
          }
          disabled
          rightElement={
            <button
              type="button"
              onClick={() =>
                copyText(
                  settings.referralCode
                )
              }
              className="text-slate-400 hover:text-slate-700"
            >
              <Copy className="h-4 w-4" />
            </button>
          }
        />

      </div>

    </SettingsCard>
  );
}

/* =========================================================
   SESSIONS
========================================================= */

function SessionsSettings({
  sessions,
  logoutSession,
  logoutAllSessions,
}: {
  sessions: Session[];
  logoutSession: (
    id: string
  ) => void;
  logoutAllSessions: () => void;
}) {
  return (
    <SettingsCard
      title="Active sessions"
      description="Review devices currently signed into your account."
      action={
        sessions.length > 1 ? (
          <button
            type="button"
            onClick={logoutAllSessions}
            className="text-[9px] font-bold text-rose-600"
          >
            Sign out other devices
          </button>
        ) : undefined
      }
    >

      <div className="space-y-3">

        {sessions.map((session) => (
          <div
            key={session.id}
            className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-4 sm:flex-row sm:items-center"
          >

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
              {session.device.includes(
                "iPhone"
              ) ? (
                <Smartphone className="h-5 w-5" />
              ) : (
                <Monitor className="h-5 w-5" />
              )}
            </div>

            <div className="min-w-0 flex-1">

              <div className="flex flex-wrap items-center gap-2">

                <p className="text-xs font-bold text-slate-800">
                  {session.device}
                </p>

                {session.current && (
                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-[8px] font-bold text-emerald-700">
                    Current device
                  </span>
                )}

              </div>

              <p className="mt-1 text-[9px] text-slate-400">
                {session.browser} ·{" "}
                {session.location}
              </p>

              <p className="mt-1 text-[8px] text-slate-400">
                IP {session.ip} ·{" "}
                {session.lastActive}
              </p>

            </div>

            {!session.current && (
              <button
                type="button"
                onClick={() =>
                  logoutSession(
                    session.id
                  )
                }
                className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 text-[9px] font-bold text-slate-600 hover:bg-slate-50"
              >

                <LogOut className="h-3.5 w-3.5" />

                Sign out

              </button>
            )}

          </div>
        ))}

      </div>

    </SettingsCard>
  );
}

/* =========================================================
   PRIVACY
========================================================= */

function PrivacySettings({
  settings,
  setSettings,
}: any) {
  return (
    <SettingsCard
      title="Privacy & personalization"
      description="Control optional data usage and personalization features."
    >

      <ToggleRow
        icon={<SettingsIcon />}
        title="Product analytics"
        description="Allow anonymous usage analytics to help improve the platform."
        checked={
          settings.analytics
        }
        onChange={(checked) =>
          setSettings({
            ...settings,
            analytics: checked,
          })
        }
      />

      <ToggleRow
        icon={<Globe />}
        title="Personalized offers"
        description="Allow recommendations and offers based on your platform activity."
        checked={
          settings.personalizedOffers
        }
        onChange={(checked) =>
          setSettings({
            ...settings,
            personalizedOffers:
              checked,
          })
        }
      />

      <ToggleRow
        icon={<ActivityIcon />}
        title="Activity tracking"
        description="Keep account activity history for security and account management."
        checked={
          settings.activityTracking
        }
        onChange={(checked) =>
          setSettings({
            ...settings,
            activityTracking:
              checked,
          })
        }
      />

      <div className="mt-5 rounded-xl bg-slate-50 p-4">

        <p className="text-[10px] font-bold text-slate-700">
          Data management
        </p>

        <p className="mt-1 text-[9px] leading-5 text-slate-400">
          You can request an export of your
          account data or contact support
          regarding privacy requests.
        </p>

        <div className="mt-3 flex flex-wrap gap-2">

          <button
            type="button"
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-[9px] font-bold text-slate-600"
          >
            Request data export
          </button>

          <button
            type="button"
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-[9px] font-bold text-slate-600"
          >
            Privacy request
          </button>

        </div>

      </div>

    </SettingsCard>
  );
}

/* =========================================================
   SETTINGS CARD
========================================================= */

function SettingsCard({
  title,
  description,
  children,
  action,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="flex items-start justify-between gap-4 border-b border-slate-100 p-5">

        <div>

          <h3 className="text-sm font-bold text-slate-900">
            {title}
          </h3>

          <p className="mt-1 text-[9px] leading-5 text-slate-400">
            {description}
          </p>

        </div>

        {action}

      </div>

      <div className="p-5">
        {children}
      </div>

    </section>
  );
}

/* =========================================================
   TOGGLE
========================================================= */

function ToggleRow({
  icon,
  title,
  description,
  checked,
  onChange,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  checked: boolean;
  onChange: (
    value: boolean
  ) => void;
}) {
  return (
    <div className="flex items-center gap-3 border-b border-slate-100 py-4 last:border-0">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
        {icon}
      </div>

      <div className="min-w-0 flex-1">

        <p className="text-[10px] font-bold text-slate-800">
          {title}
        </p>

        <p className="mt-1 max-w-2xl text-[8px] leading-5 text-slate-400">
          {description}
        </p>

      </div>

      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() =>
          onChange(!checked)
        }
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          checked
            ? "bg-cyan-600"
            : "bg-slate-200"
        }`}
      >

        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
            checked
              ? "left-6"
              : "left-1"
          }`}
        />

      </button>

    </div>
  );
}

/* =========================================================
   INPUT
========================================================= */

function Input({
  label,
  value,
  onChange,
  type = "text",
  disabled = false,
  rightElement,
}: {
  label: string;
  value: string;
  onChange?: (
    value: string
  ) => void;
  type?: string;
  disabled?: boolean;
  rightElement?: React.ReactNode;
}) {
  return (
    <div>

      <label className="mb-2 block text-[9px] font-bold uppercase tracking-wider text-slate-400">
        {label}
      </label>

      <div className="relative">

        <input
          type={type}
          value={value}
          disabled={disabled}
          onChange={(event) =>
            onChange?.(
              event.target.value
            )
          }
          className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-xs font-medium text-slate-700 outline-none transition placeholder:text-slate-300 focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-100 disabled:cursor-not-allowed disabled:opacity-60"
        />

        {rightElement && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {rightElement}
          </div>
        )}

      </div>

    </div>
  );
}

/* =========================================================
   PASSWORD INPUT
========================================================= */

function PasswordInput({
  label,
  value,
  show,
  setShow,
  onChange,
}: {
  label: string;
  value: string;
  show: boolean;
  setShow: (
    value: boolean
  ) => void;
  onChange: (
    value: string
  ) => void;
}) {
  return (
    <Input
      label={label}
      type={
        show ? "text" : "password"
      }
      value={value}
      onChange={onChange}
      rightElement={
        <button
          type="button"
          onClick={() =>
            setShow(!show)
          }
          className="text-slate-400"
        >
          {show ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </button>
      }
    />
  );
}

/* =========================================================
   SELECT
========================================================= */

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (
    value: string
  ) => void;
  options: string[];
}) {
  return (
    <div>

      <label className="mb-2 block text-[9px] font-bold uppercase tracking-wider text-slate-400">
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
          className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-3 pr-9 text-xs font-medium text-slate-700 outline-none focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-100"
        >
          {options.map(
            (option) => (
              <option
                key={option}
                value={option}
              >
                {option}
              </option>
            )
          )}
        </select>

        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

      </div>

    </div>
  );
}

/* =========================================================
   DELETE MODAL
========================================================= */

function DeleteAccountModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const [confirmation, setConfirmation] =
    useState("");

  const canDelete =
    confirmation ===
    "DELETE MY ACCOUNT";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
        aria-label="Close modal"
      />

      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">

        <div className="border-b border-slate-100 p-5">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                <AlertTriangle className="h-5 w-5" />
              </div>

              <div>

                <h2 className="text-sm font-bold text-slate-900">
                  Delete account
                </h2>

                <p className="mt-1 text-[9px] text-slate-400">
                  This action is permanent.
                </p>

              </div>

            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500"
            >
              <X className="h-4 w-4" />
            </button>

          </div>

        </div>

        <div className="p-5">

          <p className="text-xs leading-6 text-slate-600">
            Deleting your account will permanently
            remove your profile and account data.
            Any remaining balance or unresolved
            transactions should be handled before
            deletion.
          </p>

          <div className="mt-5">

            <label className="mb-2 block text-[9px] font-bold uppercase tracking-wider text-slate-400">
              Type DELETE MY ACCOUNT to continue
            </label>

            <input
              value={confirmation}
              onChange={(event) =>
                setConfirmation(
                  event.target.value
                )
              }
              placeholder="DELETE MY ACCOUNT"
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-xs font-bold text-slate-700 outline-none focus:border-rose-400 focus:bg-white focus:ring-2 focus:ring-rose-100"
            />

          </div>

          <div className="mt-5 flex gap-2">

            <button
              type="button"
              onClick={onClose}
              className="h-11 flex-1 rounded-xl border border-slate-200 text-xs font-bold text-slate-600"
            >
              Cancel
            </button>

            <button
              type="button"
              disabled={!canDelete}
              className="h-11 flex-1 rounded-xl bg-rose-600 text-xs font-bold text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              Delete account
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   HELPERS
========================================================= */

function copyText(value: string) {
  navigator.clipboard
    ?.writeText(value)
    .catch(() => {});
}

function delay(ms: number) {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}

function ActivityIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
    >
      <path d="M3 12h4l3-9 4 18 3-9h4" />
    </svg>
  );
}