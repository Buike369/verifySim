"use client";

import {
  Phone,
  Globe2,
  ShieldCheck,
  Clock,
  MessageSquare,
  Copy,
  Plus,
  RefreshCcw,
  MoreVertical,
  CheckCircle2,
  AlertCircle,
  Smartphone,
} from "lucide-react";

const numbers = [
  {
    country: "United States",
    flag: "🇺🇸",
    number: "+1 415 *** 8921",
    service: "WhatsApp",
    network: "T-Mobile",
    status: "Active",
    expires: "29 Minutes",
  },

  {
    country: "United Kingdom",
    flag: "🇬🇧",
    number: "+44 740 *** 2210",
    service: "Telegram",
    network: "Vodafone",
    status: "Active",
    expires: "2 Hours",
  },

  {
    country: "Canada",
    flag: "🇨🇦",
    number: "+1 647 *** 9032",
    service: "Google",
    network: "Rogers",
    status: "Expired",
    expires: "Expired",
  },
];

const otpMessages = [
  {
    service: "WhatsApp",
    code: "483921",
    time: "Just now",
  },

  {
    service: "Telegram",
    code: "729104",
    time: "5 minutes ago",
  },

  {
    service: "Google",
    code: "902811",
    time: "Expired",
  },
];

export default function VerificationNumbersPage() {
  return (
    <>
      
      <main
        className="
min-h-screen
bg-[#f7f9fc]
pt-10
"
      >
        {/* HEADER */}

        <section
          className="
bg-white
border-b
py-10
"
        >
          <div
            className="
max-w-7xl
mx-auto
px-5
lg:px-10
"
          >
            <div
              className="
flex
flex-col
md:flex-row
md:items-center
justify-between
gap-6
"
            >
              <div
                className="
flex
items-center
gap-4
"
              >
                <div
                  className="
w-14
h-14
rounded-2xl
bg-blue-100
flex
items-center
justify-center
"
                >
                  <Phone className="text-[#071B4D]" size={30} />
                </div>

                <div>
                  <h1
                    className="
text-3xl
font-bold
text-[#071B4D]
"
                  >
                    Verification Numbers
                  </h1>

                  <p
                    className="
text-gray-500
"
                  >
                    Receive OTP codes globally with secure virtual numbers.
                  </p>
                </div>
              </div>

              <button
                className="
flex
items-center
justify-center
gap-2
rounded-xl
bg-[#071B4D]
px-7
py-4
font-semibold
text-white
"
              >
                <Plus size={18} />
                Buy Number
              </button>
            </div>
          </div>
        </section>

        {/* STATS */}

        <section
          className="
max-w-7xl
mx-auto
px-5
lg:px-10
py-10
"
        >
          <div
            className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-6
"
          >
            <div
              className="
bg-white
rounded-3xl
border
p-6
"
            >
              <Phone className="text-[#071B4D]" />

              <p
                className="
mt-4
text-gray-500
"
              >
                Active Numbers
              </p>

              <h3
                className="
text-3xl
font-bold
text-[#071B4D]
"
              >
                12
              </h3>
            </div>

            <div
              className="
bg-white
rounded-3xl
border
p-6
"
            >
              <MessageSquare className="text-[#071B4D]" />

              <p
                className="
mt-4
text-gray-500
"
              >
                OTP Received
              </p>

              <h3
                className="
text-3xl
font-bold
text-[#071B4D]
"
              >
                248
              </h3>
            </div>

            <div
              className="
bg-white
rounded-3xl
border
p-6
"
            >
              <Globe2 className="text-[#071B4D]" />

              <p
                className="
mt-4
text-gray-500
"
              >
                Countries
              </p>

              <h3
                className="
text-3xl
font-bold
text-[#071B4D]
"
              >
                190+
              </h3>
            </div>

            <div
              className="
bg-white
rounded-3xl
border
p-6
"
            >
              <ShieldCheck className="text-green-600" />

              <p
                className="
mt-4
text-gray-500
"
              >
                Security Status
              </p>

              <h3
                className="
text-xl
font-bold
text-green-600
"
              >
                Protected
              </h3>
            </div>
          </div>
        </section>

        {/* ACTIVE NUMBERS */}

        <section
          className="
max-w-7xl
mx-auto
px-5
lg:px-10
"
        >
          <div
            className="
flex
justify-between
items-center
"
          >
            <h2
              className="
text-2xl
font-bold
text-[#071B4D]
"
            >
              My Numbers
            </h2>

            <button
              className="
text-[#071B4D]
font-semibold
"
            >
              View History
            </button>
          </div>

          <div
            className="
mt-6
grid
lg:grid-cols-2
gap-6
"
          >
            {numbers.map((item, index) => (
              <div
                key={index}
                className="
bg-white
rounded-[32px]
border
p-7
hover:shadow-xl
transition
"
              >
                <div
                  className="
flex
justify-between
"
                >
                  <div
                    className="
flex
gap-4
"
                  >
                    <div
                      className="
text-4xl
"
                    >
                      {item.flag}
                    </div>

                    <div>
                      <h3
                        className="
font-bold
text-xl
text-[#071B4D]
"
                      >
                        {item.country}
                      </h3>

                      <p
                        className="
text-gray-500
"
                      >
                        {item.service}
                      </p>
                    </div>
                  </div>

                  <MoreVertical />
                </div>

                <div
                  className="
mt-6
bg-[#f7f9fc]
rounded-xl
p-4
flex
justify-between
items-center
"
                >
                  <span
                    className="
font-bold
text-lg
"
                  >
                    {item.number}
                  </span>

                  <button>
                    <Copy size={18} />
                  </button>
                </div>

                <div
                  className="
mt-5
flex
justify-between
text-sm
"
                >
                  <span
                    className="
flex
items-center
gap-2
text-gray-500
"
                  >
                    <Smartphone size={16} />

                    {item.network}
                  </span>

                  <span
                    className="
flex
items-center
gap-2
text-gray-500
"
                  >
                    <Clock size={16} />

                    {item.expires}
                  </span>
                </div>

                <div
                  className="
mt-6
flex
justify-between
"
                >
                  <span
                    className={`
px-4
py-2
rounded-full
text-sm
font-semibold

${
  item.status === "Active"
    ? "bg-green-100 text-green-700"
    : "bg-red-100 text-red-700"
}

`}
                  >
                    {item.status}
                  </span>

                  <button
                    className="
flex
items-center
gap-2
rounded-xl
bg-[#071B4D]
text-white
px-5
py-3
text-sm
"
                  >
                    <RefreshCcw size={16} />
                    Renew
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* OTP INBOX */}

        <section
          className="
max-w-7xl
mx-auto
px-5
lg:px-10
py-12
"
        >
          <div
            className="
bg-white
rounded-[32px]
border
p-7
"
          >
            <div
              className="
flex
items-center
gap-3
"
            >
              <MessageSquare className="text-[#071B4D]" />

              <h2
                className="
text-2xl
font-bold
text-[#071B4D]
"
              >
                OTP Inbox
              </h2>
            </div>

            <div
              className="
mt-6
space-y-4
"
            >
              {otpMessages.map((otp, index) => (
                <div
                  key={index}
                  className="
flex
justify-between
items-center
bg-[#f7f9fc]
rounded-xl
p-5
"
                >
                  <div>
                    <p
                      className="
font-semibold
"
                    >
                      {otp.service}
                    </p>

                    <p
                      className="
text-gray-500
text-sm
"
                    >
                      {otp.time}
                    </p>
                  </div>

                  <div
                    className="
text-right
"
                  >
                    <p
                      className="
text-2xl
font-bold
tracking-widest
text-[#071B4D]
"
                    >
                      {otp.code}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECURITY CTA */}

        <section
          className="
max-w-7xl
mx-auto
px-5
lg:px-10
pb-20
"
        >
          <div
            className="
rounded-[36px]
bg-[#071B4D]
text-white
p-10
lg:p-14
text-center
"
          >
            <ShieldCheck size={45} className="mx-auto" />

            <h2
              className="
mt-6
text-3xl
font-bold
"
            >
              Secure Verification Worldwide
            </h2>

            <p
              className="
mt-4
text-blue-100
max-w-2xl
mx-auto
"
            >
              Access trusted verification numbers across multiple countries with
              fast OTP delivery and reliable networks.
            </p>

            <button
              className="
mt-8
bg-white
text-[#071B4D]
rounded-xl
px-10
py-4
font-semibold
"
            >
              Get New Number
            </button>
          </div>
        </section>
      </main>
   
    </>
  );
}
