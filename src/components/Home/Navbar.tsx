"use client";

import {
  Menu,
  X,
  ChevronDown,
  Globe2,
  ShieldCheck,
  Smartphone,
  Phone,
  CreditCard,
  Headphones,
} from "lucide-react";

import { useState } from "react";

const navLinks = [
  {
    name: "Verification Numbers",
    icon: Phone,
    link: "/verification-numbers",
  },
  {
    name: "eSIM",
    icon: Smartphone,
    link: "/esim",
  },
  {
    name: "Pricing",
    icon: CreditCard,
    link: "/pricing",
  },
  {
    name: "Support",
    icon: Headphones,
    link: "support",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className="
fixed
top-0
left-0
right-0
z-50
border-b
border-gray-100
bg-white/80
backdrop-blur-xl
"
      >
        <div
          className="
max-w-7xl
mx-auto
px-5
sm:px-8
lg:px-10
h-20
flex
items-center
justify-between
"
        >
          {/* Logo */}

          <a href="/">
            <div
              className="
flex
items-center
gap-3
"
            >
              <div
                className="
flex
h-11
w-11
items-center
justify-center
rounded-2xl
bg-[#1a73e8]
text-white
shadow-lg
"
              >
                <Globe2 size={24} />
              </div>

              <div>
                <h1
                  className="
text-xl
font-bold
tracking-tight
text-[#071B4D]
"
                >
                  VerifySIM
                </h1>

                <p
                  className="
hidden
sm:block
text-xs
text-gray-500
"
                >
                  Global Connectivity
                </p>
              </div>
            </div>
          </a>

          {/* Desktop Menu */}

          <div
            className="
hidden
lg:flex
items-center
gap-8
"
          >
            {navLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  href={item.link}
                  key={item.name}
                  className="
group
flex
items-center
gap-2
text-gray-600
font-medium
hover:text-[#071B4D]
transition
cursor-pointer
"
                >
                  <Icon
                    size={17}
                    className="
text-gray-400
group-hover:text-[#071B4D]
transition
"
                  />

                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Right Actions */}

          <div
            className="
hidden
lg:flex
items-center
gap-4
"
          >
            <div
              className="
hidden
xl:flex
items-center
gap-2
rounded-full
bg-green-50
px-4
py-2
text-sm
text-green-700
"
            >
              <ShieldCheck size={16} />
              Secure Platform
            </div>
            


            <a href="/auth/login">

            <button
              className="
rounded-xl
border
border-[#c9cdd7]
px-5
py-3
font-semibold
text-[#071B4D]
hover:bg-[#071B4D]
hover:text-white
transition
"
            >
              Login
            </button>
            </a>
 <a href="/auth/register">
            <button
              className="
rounded-xl
bg-[#1a73e8]
px-6
py-3
font-semibold
text-white
shadow-lg
shadow-blue-900/20
hover:bg-[#0b2d73]
transition
"
            >
              Get Started
            </button>
            </a>
          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setOpen(true)}
            className="
lg:hidden
rounded-xl
bg-gray-100
p-3
text-[#071B4D]
"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
fixed
inset-0
z-50
bg-black/40
backdrop-blur-sm
lg:hidden
"
        />
      )}

      {/* Mobile Sidebar */}

      <aside
        className={`
fixed
top-0
right-0
z-[60]
h-full
w-[85%]
max-w-sm
bg-white
shadow-2xl
transition-transform
duration-300
lg:hidden
${open ? "translate-x-0" : "translate-x-full"}
`}
        style={{ overflowY: open ? "auto" : "hidden" }}
      >
        <div
          className="
flex
items-center
justify-between
p-6
border-b
border-[#1a73e82b]
"
        >
          <div
            className="
flex
items-center
gap-3
"
          >
            <div
              className="
bg-[#1a73e8]
rounded-xl
p-2
text-white
relative
"
            >
              <Globe2 size={20} />
              {/* <Phone className="text-[#000]" style={{position: "absolute", bottom: 0, right: 0}}/> */}
            </div>

            <h2
              className="
font-bold
text-[#1a73e8]
"
            >
              VerifySIM
            </h2>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="
rounded-xl
bg-gray-100
p-2
"
          >
            <X />
          </button>
        </div>

        <div
          className="
p-6
space-y-4
"
        >
          {navLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.name}
                className="
flex
items-center
gap-4
rounded-xl
p-4
text-gray-700
hover:bg-blue-50
hover:text-[#071B4D]
transition
"
              >
                <div
                  className="
rounded-lg
bg-blue-100
p-2
"
                >
                  <Icon size={20} className="text-[#1a73e8]" />
                </div>

                <span className="font-medium">{item.name}</span>
              </a>
            );
          })}

          <button
            className="
w-full
rounded-xl
bg-[#1a73e8]
py-4
font-semibold
text-white
mt-5
"
          >
            Create Account
          </button>

          <button
            className="
w-full
rounded-xl
border
border-[#dcebff]
py-4
font-semibold
text-[#071B4D]
"
          >
            Login
          </button>

          <div
            className="
mt-8
rounded-2xl
bg-[#1a73e8]
p-5
text-white
"
          >
            <div
              className="
flex
items-center
gap-2
"
            >
              <ShieldCheck size={18} />
              Secure Access
            </div>

            <p
              className="
mt-2
text-sm
text-blue-100
"
            >
              Protected global connectivity platform
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
