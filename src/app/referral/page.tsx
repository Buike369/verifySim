
"use client";

import {
  ArrowRight,
  Award,
  Check,
  CheckCircle2,
  ChevronDown,
  Copy,
  Gift,
  Globe2,
  Info,
  Link2,
  Percent,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

import { useState } from "react";
import Link from "next/link";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/footer";

const referralLink = "https://verifysim.com/ref/your-code";

const faqs = [
  {
    question: "How does the 10% referral reward work?",
    answer:
      "When someone joins through your referral link and makes an eligible eSIM or virtual-number purchase, you earn 10% of the platform profit generated from that eligible transaction. The reward can continue whenever your referred user makes additional eligible purchases.",
  },
  {
    question: "Do I earn every time my referred user buys?",
    answer:
      "Yes. Eligible purchases made by your referred users can continue generating referral rewards. This is a recurring referral relationship rather than a one-time signup bonus.",
  },
  {
    question: "How does the 10-purchase weekly reward work?",
    answer:
      "If you make 10 eligible eSIM or virtual-number purchases within a rolling 7-day period, you qualify for one free eligible reward. The reward value is based on the lowest-priced eligible purchase within that qualifying period.",
  },
  {
    question: "What happens when I refer 100 active buyers?",
    answer:
      "Once 100 unique referred users have made qualifying purchases on the platform, your account receives a $5 platform credit.",
  },
  {
    question: "How does the $500 monthly reward work?",
    answer:
      "When your eligible transaction volume exceeds $500 during a calendar month, you qualify for the 5% monthly activity reward according to the platform's eligible transaction and reward rules.",
  },
  {
    question: "Can referral and volume rewards be combined?",
    answer:
      "Eligible rewards can be tracked separately. Your platform should define whether the 5% activity reward and referral commission are additive, capped, or calculated from separate eligible bases. The dashboard should always show the exact amount earned.",
  },
];

export default function ReferralLandingPage() {
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [referrals, setReferrals] = useState(42);
  const [weeklyPurchases, setWeeklyPurchases] = useState(7);
  const [monthlyVolume, setMonthlyVolume] = useState(325);

  const referralProgress = Math.min((referrals / 100) * 100, 100);
  const weeklyProgress = Math.min(
    (weeklyPurchases / 10) * 100,
    100
  );

  const monthlyQualified = monthlyVolume >= 500;

  const copyReferralLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f7f9fc] text-[#071B4D] pt-12">
        {/* ===================================================== */}
        {/* HERO */}
        {/* ===================================================== */}

        <section className="relative overflow-hidden bg-white">
          <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-blue-100/70 blur-3xl" />

          <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-100/50 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">
              {/* HERO CONTENT */}

              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#1a73e8]">
                  <Sparkles size={17} />

                  Referral & Rewards Program
                </div>

                <h1 className="mt-7 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-[#071B4D] sm:text-5xl lg:text-6xl">
                  Share the platform.
                  <span className="text-[#1a73e8]">
                    {" "}
                    Earn every time.
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-7 text-[#686b71] sm:text-lg">
                  Invite people to use our eSIM and verification-number
                  services and earn recurring rewards from eligible
                  purchases made by your referred users.
                </p>

                {/* PRIMARY REWARD */}

                <div className="mt-9 rounded-3xl border border-blue-100 bg-[#f7faff] p-6">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#1a73e8] text-white shadow-lg shadow-blue-200">
                      <Percent size={27} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[#1a73e8]">
                        Recurring referral reward
                      </p>

                      <p className="mt-1 text-2xl font-bold text-[#071B4D]">
                        Earn 10% of eligible platform profit
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        Every time an eligible referred user purchases
                        an eSIM or virtual number.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/dashboard/referrals"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1a73e8] px-7 py-4 font-semibold text-white transition hover:bg-[#155fc0]"
                  >
                    Start Referring
                    <ArrowRight size={18} />
                  </Link>

                  <a
                    href="#rewards"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-7 py-4 font-semibold text-[#071B4D] transition hover:bg-gray-50"
                  >
                    View Rewards
                  </a>
                </div>

                {/* TRUST */}

                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle2
                      size={17}
                      className="text-green-600"
                    />
                    Recurring rewards
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle2
                      size={17}
                      className="text-green-600"
                    />
                    eSIM + virtual numbers
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle2
                      size={17}
                      className="text-green-600"
                    />
                    Transparent tracking
                  </div>
                </div>
              </div>

              {/* HERO REWARD CARD */}

              <div className="mx-auto w-full max-w-md">
                <div className="rounded-[2rem] bg-[#071B4D] p-6 shadow-2xl shadow-blue-200/50 sm:p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-blue-200">
                        Your rewards
                      </p>

                      <h2 className="mt-1 text-2xl font-bold text-white">
                        Keep earning
                      </h2>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                      <Wallet
                        size={24}
                        className="text-white"
                      />
                    </div>
                  </div>

                  <div className="mt-7 grid grid-cols-2 gap-3">
                    <RewardMiniCard
                      label="Referral"
                      value="10%"
                    />

                    <RewardMiniCard
                      label="100 buyers"
                      value="$5"
                    />

                    <RewardMiniCard
                      label="10 weekly"
                      value="FREE"
                    />

                    <RewardMiniCard
                      label="$500+ volume"
                      value="5%"
                    />
                  </div>

                  <div className="mt-6 rounded-2xl bg-white/10 p-4">
                    <div className="flex items-center gap-3">
                      <Trophy
                        size={22}
                        className="text-yellow-300"
                      />

                      <div>
                        <p className="text-sm font-semibold text-white">
                          More activity = more rewards
                        </p>

                        <p className="mt-1 text-xs text-blue-200">
                          Track everything from your referral dashboard.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* REWARD CARDS */}
        {/* ===================================================== */}

        <section
          id="rewards"
          className="scroll-mt-20 py-20"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold text-[#1a73e8]">
                Four ways to earn
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#071B4D] sm:text-4xl">
                Rewards designed around your activity
              </h2>

              <p className="mt-4 text-gray-500">
                The more people you refer and the more you use the
                platform, the more opportunities you unlock.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <RewardCard
                icon={<Percent size={25} />}
                number="10%"
                title="Recurring referrals"
                description="Earn 10% of eligible platform profit whenever your referred users make qualifying eSIM or virtual-number purchases."
                featured
              />

              <RewardCard
                icon={<Gift size={25} />}
                number="10"
                title="Weekly purchase reward"
                description="Complete 10 eligible purchases within 7 days and receive one free eligible item based on the lowest eligible purchase value."
              />

              <RewardCard
                icon={<Users size={25} />}
                number="100"
                title="Active referrals"
                description="Refer 100 unique users who make qualifying purchases and receive a $5 platform credit."
              />

              <RewardCard
                icon={<Trophy size={25} />}
                number="5%"
                title="$500+ monthly volume"
                description="Exceed $500 in eligible monthly transaction volume and qualify for a 5% activity reward."
              />
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* REFERRAL LINK */}
        {/* ===================================================== */}

        <section className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="rounded-[2rem] bg-[#071B4D] p-7 text-white shadow-2xl sm:p-10">
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                      <Link2 size={23} />
                    </div>

                    <div>
                      <p className="text-sm text-blue-200">
                        Your referral link
                      </p>

                      <h3 className="mt-1 text-xl font-bold">
                        Share and start earning
                      </h3>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-6 text-blue-100/70">
                    Share this link with friends, customers or your
                    community. Eligible purchases made through your
                    referral will be attributed to your account.
                  </p>

                  <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                    <div className="flex min-h-[52px] flex-1 items-center rounded-xl bg-white/10 px-4">
                      <span className="truncate text-sm text-blue-100">
                        {referralLink}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={copyReferralLink}
                      className="flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-white px-6 font-semibold text-[#071B4D] transition hover:bg-blue-50"
                    >
                      {copied ? (
                        <>
                          <Check size={17} />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy size={17} />
                          Copy Link
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="hidden h-28 w-28 items-center justify-center rounded-3xl bg-white/10 lg:flex">
                  <Users size={44} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* PROGRESS DASHBOARD PREVIEW */}
        {/* ===================================================== */}

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-7 lg:grid-cols-3">
              {/* REFERRAL PROGRESS */}

              <ProgressCard
                icon={<Users size={22} />}
                title="Active referrals"
                value={`${referrals}/100`}
                subtitle="buyers needed for $5 credit"
                progress={referralProgress}
                action={
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={referrals}
                    onChange={(e) =>
                      setReferrals(Number(e.target.value))
                    }
                    className="w-full accent-[#1a73e8]"
                  />
                }
              />

              {/* WEEKLY */}

              <ProgressCard
                icon={<Gift size={22} />}
                title="Weekly purchases"
                value={`${weeklyPurchases}/10`}
                subtitle="purchases needed for free reward"
                progress={weeklyProgress}
                action={
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={weeklyPurchases}
                    onChange={(e) =>
                      setWeeklyPurchases(Number(e.target.value))
                    }
                    className="w-full accent-[#1a73e8]"
                  />
                }
              />

              {/* MONTHLY */}

              <ProgressCard
                icon={<Trophy size={22} />}
                title="Monthly volume"
                value={`$${monthlyVolume}`}
                subtitle={
                  monthlyQualified
                    ? "5% reward unlocked"
                    : "$500 required"
                }
                progress={Math.min(
                  (monthlyVolume / 500) * 100,
                  100
                )}
                action={
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="25"
                    value={monthlyVolume}
                    onChange={(e) =>
                      setMonthlyVolume(Number(e.target.value))
                    }
                    className="w-full accent-[#1a73e8]"
                  />
                }
              />
            </div>

            {/* STATUS */}

            <div className="mt-8 rounded-3xl border border-blue-100 bg-blue-50 p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white">
                  <Award
                    size={24}
                    className="text-[#1a73e8]"
                  />
                </div>

                <div>
                  <p className="font-bold text-[#071B4D]">
                    {monthlyQualified
                      ? "Congratulations — your monthly reward is unlocked."
                      : "Keep going to unlock more rewards."}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {monthlyQualified
                      ? "Your eligible monthly volume has crossed the $500 threshold."
                      : `You need $${Math.max(
                          500 - monthlyVolume,
                          0
                        )} more in eligible monthly volume to reach the 5% threshold.`}
                  </p>
                </div>

                <Link
                  href="/dashboard/referrals"
                  className="sm:ml-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#1a73e8] px-5 py-3 text-sm font-semibold text-white"
                >
                  Open Dashboard
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* HOW IT WORKS */}
        {/* ===================================================== */}

        <section className="bg-[#071B4D] py-20 text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold text-blue-300">
                Simple process
              </p>

              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                Start earning in four steps
              </h2>

              <p className="mt-4 text-blue-100/70">
                Everything is tracked automatically inside your account.
              </p>
            </div>

            <div className="mt-14 grid gap-7 md:grid-cols-4">
              <Step
                number="01"
                icon={<Link2 size={23} />}
                title="Get your link"
                description="Open your referral dashboard and copy your unique referral link."
              />

              <Step
                number="02"
                icon={<Users size={23} />}
                title="Invite users"
                description="Share your link with people who need eSIMs or verification numbers."
              />

              <Step
                number="03"
                icon={<Zap size={23} />}
                title="They purchase"
                description="When referred users make eligible purchases, the activity is tracked."
              />

              <Step
                number="04"
                icon={<Wallet size={23} />}
                title="You earn"
                description="Eligible referral, loyalty and volume rewards are credited to your account."
              />
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* REWARD EXAMPLE */}
        {/* ===================================================== */}

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold text-[#1a73e8]">
                  Example
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#071B4D] sm:text-4xl">
                  Your referrals can keep earning for you
                </h2>

                <p className="mt-5 leading-7 text-gray-500">
                  Imagine you refer a customer who regularly purchases
                  eSIMs and verification numbers. Every eligible purchase
                  can contribute to your recurring referral rewards.
                </p>

                <div className="mt-7 space-y-4">
                  <ExampleRow
                    label="Referred user purchase"
                    value="$20"
                  />

                  <ExampleRow
                    label="Platform profit"
                    value="$5"
                  />

                  <ExampleRow
                    label="Your 10% referral reward"
                    value="$0.50"
                    highlighted
                  />
                </div>

                <p className="mt-5 text-xs leading-5 text-gray-400">
                  Example only. Actual referral earnings depend on the
                  platform profit generated by the eligible transaction.
                </p>
              </div>

              <div className="rounded-[2rem] bg-[#f7f9fc] p-7 sm:p-9">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">
                      Monthly referral example
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-[#071B4D]">
                      25 active buyers
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                    <Users
                      size={23}
                      className="text-[#1a73e8]"
                    />
                  </div>
                </div>

                <div className="mt-7 space-y-5">
                  <MetricRow
                    label="Eligible purchases"
                    value="75"
                  />

                  <MetricRow
                    label="Eligible platform profit"
                    value="$180"
                  />

                  <MetricRow
                    label="Estimated referral reward"
                    value="$18"
                    strong
                  />
                </div>

                <div className="mt-7 rounded-2xl bg-green-50 p-4">
                  <div className="flex gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-green-600"
                    />

                    <p className="text-sm leading-6 text-green-800">
                      More eligible purchases from your referred users can
                      increase your recurring referral earnings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* BENEFITS */}
        {/* ===================================================== */}

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-6 md:grid-cols-3">
              <Benefit
                icon={<Wallet size={24} />}
                title="Transparent rewards"
                description="See your referrals, purchases, commissions and reward history from your dashboard."
              />

              <Benefit
                icon={<ShieldCheck size={24} />}
                title="Secure tracking"
                description="Referral attribution and eligible transactions are handled on the server."
              />

              <Benefit
                icon={<Globe2 size={24} />}
                title="Global products"
                description="Earn from eligible eSIM and virtual-number purchases across supported destinations."
              />
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* FAQ */}
        {/* ===================================================== */}

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold text-[#1a73e8]">
                Help center
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#071B4D] sm:text-4xl">
                Referral program FAQ
              </h2>

              <p className="mt-3 text-gray-500">
                Everything you need to understand the reward system.
              </p>
            </div>

            <div className="mt-10 space-y-3">
              {faqs.map((faq, index) => {
                const open = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(open ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                      aria-expanded={open}
                    >
                      <span className="font-semibold text-gray-900">
                        {faq.question}
                      </span>

                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-gray-400 transition ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {open && (
                      <div className="border-t border-gray-100 px-5 pb-5 pt-4">
                        <p className="text-sm leading-7 text-gray-500">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* FINAL CTA */}
        {/* ===================================================== */}

        <section className="bg-[#1a73e8] py-20 text-white">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
              <Gift size={30} />
            </div>

            <h2 className="mt-7 text-3xl font-bold sm:text-4xl">
              Turn your network into rewards.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
              Invite people to use eSIM and virtual-number services and
              unlock recurring referral rewards, loyalty rewards and
              volume-based benefits.
            </p>

            <Link
              href="/dashboard/referrals"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-[#071B4D] transition hover:bg-blue-50"
            >
              Start Referring
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* ===================================================== */
/* COMPONENTS */
/* ===================================================== */

function RewardMiniCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-white/10 p-4">
      <p className="text-xs text-blue-200">{label}</p>

      <p className="mt-1 text-xl font-bold text-white">
        {value}
      </p>
    </div>
  );
}

function RewardCard({
  icon,
  number,
  title,
  description,
  featured = false,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`group relative rounded-3xl border p-7 transition hover:-translate-y-1 hover:shadow-xl ${
        featured
          ? "border-blue-200 bg-blue-50/50"
          : "border-gray-100 bg-white"
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-6 rounded-full bg-[#1a73e8] px-3 py-1 text-xs font-semibold text-white">
          Core reward
        </div>
      )}

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-[#1a73e8]">
        {icon}
      </div>

      <p className="mt-6 text-3xl font-bold text-[#1a73e8]">
        {number}
      </p>

      <h3 className="mt-2 text-xl font-bold text-[#071B4D]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-500">
        {description}
      </p>
    </div>
  );
}

function ProgressCard({
  icon,
  title,
  value,
  subtitle,
  progress,
  action,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
  progress: number;
  action: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#1a73e8]">
          {icon}
        </div>

        <span className="text-2xl font-bold text-[#071B4D]">
          {value}
        </span>
      </div>

      <h3 className="mt-5 font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        {subtitle}
      </p>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-[#1a73e8] transition-all"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <div className="mt-5">
        {action}
      </div>
    </div>
  );
}

function Step({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
          {icon}
        </div>

        <span className="text-4xl font-bold text-white/10">
          {number}
        </span>
      </div>

      <h3 className="mt-7 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-blue-100/70">
        {description}
      </p>
    </div>
  );
}

function ExampleRow({
  label,
  value,
  highlighted = false,
}: {
  label: string;
  value: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between rounded-xl p-4 ${
        highlighted
          ? "bg-blue-50"
          : "bg-[#f7f9fc]"
      }`}
    >
      <span className="text-sm text-gray-500">
        {label}
      </span>

      <span
        className={`font-bold ${
          highlighted
            ? "text-[#1a73e8]"
            : "text-[#071B4D]"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function MetricRow({
  label,
  value,
  strong = false,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 pb-4">
      <span className="text-sm text-gray-500">
        {label}
      </span>

      <span
        className={
          strong
            ? "text-xl font-bold text-[#1a73e8]"
            : "font-semibold text-[#071B4D]"
        }
      >
        {value}
      </span>
    </div>
  );
}

function Benefit({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#1a73e8]">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-bold text-[#071B4D]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-500">
        {description}
      </p>
    </div>
  );
}
