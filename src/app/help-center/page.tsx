// "use client";

// import {
//   Search,
//   Smartphone,
//   Phone,
//   CreditCard,
//   ShieldCheck,
//   UserCircle,
//   MessageCircle,
//   BookOpen,
//   ArrowRight,
//   ChevronRight,
// } from "lucide-react";
// import Navbar from "@/components/Home/Navbar";
// import Footer from "@/components/Home/footer";

// import { useState } from "react";



// const categories = [

// {
// title:"eSIM Guide",
// description:
// "Learn how to purchase, install, activate, and manage your eSIM.",
// icon:Smartphone,
// articles:"24 Articles"
// },


// {
// title:"Verification Numbers",
// description:
// "Everything about OTP numbers, supported services, and activation.",
// icon:Phone,
// articles:"18 Articles"
// },


// {
// title:"Payments & Billing",
// description:
// "Manage payments, wallets, refunds, and transaction issues.",
// icon:CreditCard,
// articles:"15 Articles"
// },


// {
// title:"Account & Security",
// description:
// "Manage your account, privacy, and security settings.",
// icon:ShieldCheck,
// articles:"12 Articles"
// }

// ];





// const popularArticles=[

// "How to install VerifySIM eSIM",

// "How to receive a verification code",

// "Why is my verification number not working?",

// "How to add funds to my wallet",

// "Supported countries and networks"

// ];





// export default function HelpCenterPage(){


// const [search,setSearch]=useState("");



// return (

//   <>
//   <Navbar/>

// <main
// className="
// min-h-screen
// bg-[#f7f9fc]
// pt-10
// "
// >





// {/* HERO */}


// <section
// className="
// relative
// overflow-hidden
// bg-[#1a73e8]
// py-20
// lg:py-28
// text-white
// "
// >


// <div
// className="
// absolute
// right-0
// top-0
// h-[450px]
// w-[450px]
// rounded-full
// bg-blue-400/20
// blur-3xl
// "
// />





// <div
// className="
// relative
// max-w-6xl
// mx-auto
// px-5
// text-center
// "
// >


// <div
// className="
// inline-flex
// items-center
// gap-2
// rounded-full
// bg-white/10
// px-5
// py-2
// text-sm
// "
// >

// <BookOpen size={16}/>

// VerifySIM Help Center

// </div>





// <h1
// className="
// mt-7
// text-4xl
// sm:text-5xl
// lg:text-6xl
// font-bold
// "
// >

// How Can We Help?

// </h1>





// <p
// className="
// mt-5
// max-w-3xl
// mx-auto
// text-blue-100
// text-lg
// "
// >

// Find answers about eSIM activation,
// verification numbers, payments,
// and account management.

// </p>








// <div
// className="
// mt-10
// max-w-3xl
// mx-auto
// bg-white
// rounded-2xl
// p-3
// flex
// items-center
// gap-3
// shadow-xl
// "
// >


// <Search
// className="
// text-gray-400
// "
// />



// <input

// value={search}

// onChange={(e)=>setSearch(e.target.value)}

// placeholder="
// Search help articles...
// "

// className="
// flex-1
// text-gray-700
// outline-none
// py-3
// "

// />


// </div>


// </div>


// </section>









// {/* CATEGORIES */}



// <section
// className="
// max-w-7xl
// mx-auto
// px-5
// sm:px-8
// lg:px-10
// py-20
// "
// >


// <h2
// className="
// text-3xl
// font-bold
// text-[#000000]
// "
// >

// Browse Help Categories

// </h2>






// <div
// className="
// mt-10
// grid
// sm:grid-cols-2
// lg:grid-cols-4
// gap-6
// "
// >


// {
// categories.map((item,index)=>{


// const Icon=item.icon;


// return (

// <div
// key={index}
// className="
// bg-white
// rounded-3xl
// border
// border-[#dbeafe]
// p-7
// hover:shadow-xl
// hover:-translate-y-1
// transition
// cursor-pointer
// "
// >


// <div
// className="
// h-14
// w-14
// rounded-2xl
// bg-blue-100
// flex
// items-center
// justify-center
// "
// >


// <Icon
// className="text-[#1a73e8]"
// size={28}
// />


// </div>





// <h3
// className="
// mt-6
// text-xl
// font-bold
// text-[#000000]
// "
// >

// {item.title}

// </h3>




// <p
// className="
// mt-3
// text-[#717e95]
// "
// >

// {item.description}

// </p>




// <p
// className="
// mt-5
// text-sm
// font-semibold
// text-[#000000]
// "
// >

// {item.articles}

// </p>



// </div>


// )


// })


// }


// </div>


// </section>









// {/* POPULAR ARTICLES */}



// <section
// className="
// bg-white
// py-20
// "
// >


// <div
// className="
// max-w-5xl
// mx-auto
// px-5
// "
// >


// <h2
// className="
// text-3xl
// font-bold
// text-[#000000]
// "
// >

// Popular Articles

// </h2>





// <div
// className="
// mt-8
// space-y-4
// "
// >


// {
// popularArticles.map((article,index)=>(


// <div
// key={index}
// className="
// flex
// items-center
// justify-between
// bg-[#f7f9fc]
// rounded-2xl
// p-5
// hover:bg-blue-50
// transition
// cursor-pointer
// "
// >


// <div
// className="
// flex
// items-center
// gap-4
// "
// >


// <BookOpen
// className="text-[#6e6e6f]"
// />


// <span
// className="
// font-medium
// text-[#6e6e6f]
// "
// >

// {article}

// </span>


// </div>





// <ChevronRight
// className="text-[#6e6e6f]"
// />


// </div>


// ))

// }


// </div>


// </div>


// </section>









// {/* SUPPORT OPTIONS */}



// <section
// className="
// max-w-7xl
// mx-auto
// px-5
// sm:px-8
// lg:px-10
// py-20
// "
// >


// <div
// className="
// grid
// md:grid-cols-2
// gap-8
// "
// >





// <div
// className="
// rounded-[32px]
// bg-white
// border
// border-[#dbeafe]
// p-8
// "
// >


// <MessageCircle
// className="text-[#1a73e8]"
// size={35}
// />


// <h3
// className="
// mt-5
// text-2xl
// font-bold
// text-[#000000]
// "
// >

// Need More Help?

// </h3>



// <p
// className="
// mt-3
// text-gray-600
// "
// >

// Can't find your answer?
// Our support team is available
// to assist you.

// </p>



// <a href="/support">
// <button
// className="
// mt-6
// flex
// items-center
// gap-2
// rounded-xl
// bg-[#1a73e8]
// px-7
// py-4
// text-white
// font-semibold
// cursor-pointer
// "
// >

// Contact Support

// <ArrowRight size={18}/>

// </button>
// </a>



// </div>







// <div
// className="
// rounded-[32px]
// bg-[#1a73e8]
// p-8
// text-white
// "
// >


// <UserCircle
// size={35}
// />


// <h3
// className="
// mt-5
// text-2xl
// font-bold
// "
// >

// Account Assistance

// </h3>



// <p
// className="
// mt-3
// text-blue-100
// "
// >

// Manage your profile,
// transactions, eSIMs,
// and verification services.

// </p>




// <button
// className="
// mt-6
// rounded-xl
// bg-white
// px-7
// py-4
// font-semibold
// text-[#1a529b]
// "
// >

// Go To Dashboard

// </button>


// </div>



// </div>


// </section>





// </main>
// <Footer/>
// </>

// )

// }



"use client";

import {
  Search,
  Smartphone,
  Phone,
  CreditCard,
  ShieldCheck,
  UserCircle,
  MessageCircle,
  BookOpen,
  ArrowRight,
  ChevronRight,
  X,
  LifeBuoy,
  HelpCircle,
} from "lucide-react";

import Link from "next/link";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/footer";
import { useMemo, useState } from "react";

type Category = {
  title: string;
  description: string;
  icon: React.ElementType;
  articles: number;
  href: string;
};

type Article = {
  title: string;
  category: string;
  href: string;
};

const categories: Category[] = [
  {
    title: "eSIM Guide",
    description:
      "Learn how to purchase, install, activate, and manage your eSIM.",
    icon: Smartphone,
    articles: 24,
    href: "/help/esim",
  },
  {
    title: "Verification Numbers",
    description:
      "Everything about OTP numbers, supported services, and activations.",
    icon: Phone,
    articles: 18,
    href: "/help/verification-numbers",
  },
  {
    title: "Payments & Billing",
    description:
      "Manage payments, wallets, refunds, deposits, and transactions.",
    icon: CreditCard,
    articles: 15,
    href: "/help/payments",
  },
  {
    title: "Account & Security",
    description:
      "Manage your account, privacy, login, and security settings.",
    icon: ShieldCheck,
    articles: 12,
    href: "/help/account",
  },
];

const popularArticles: Article[] = [
  {
    title: "How to install VerifySIM eSIM",
    category: "eSIM Guide",
    href: "/help/esim/install",
  },
  {
    title: "How to receive a verification code",
    category: "Verification Numbers",
    href: "/help/verification-numbers/receive-code",
  },
  {
    title: "Why is my verification number not working?",
    category: "Verification Numbers",
    href: "/help/verification-numbers/not-working",
  },
  {
    title: "How to add funds to my wallet",
    category: "Payments & Billing",
    href: "/help/payments/add-funds",
  },
  {
    title: "Supported countries and networks",
    category: "eSIM Guide",
    href: "/help/esim/supported-countries",
  },
];

export default function HelpCenterPage() {
  const [search, setSearch] = useState("");

  const filteredArticles = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return popularArticles;
    }

    return popularArticles.filter(
      (article) =>
        article.title.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query)
    );
  }, [search]);

  const clearSearch = () => {
    setSearch("");
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f7f9fc] pt-12 text-[#111827]">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#1a73e8] text-white">

          {/* Decorative background */}
          <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-400/30 blur-3xl" />

          <div className="absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-indigo-400/20 blur-3xl" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />

          <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

            <div className="mx-auto max-w-4xl text-center">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">

                <BookOpen size={16} />

                VerifySIM Help Center

              </div>

              {/* Heading */}
              <h1 className="mt-7 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">

                How can we help?

              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">

                Find answers, guides, and helpful resources for your
                eSIMs, verification numbers, payments, and account.

              </p>

              {/* Search */}
              <div className="mx-auto mt-10 max-w-3xl">

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-white/20
                    bg-white
                    p-2
                    shadow-2xl
                    shadow-blue-950/20
                  "
                >

                  <Search
                    size={22}
                    className="ml-3 shrink-0 text-gray-400"
                  />

                  <input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search help articles..."
                    aria-label="Search help articles"
                    className="
                      min-w-0
                      flex-1
                      bg-transparent
                      px-1
                      py-3
                      text-sm
                      text-gray-900
                      outline-none
                      placeholder:text-gray-400
                      sm:text-base
                    "
                  />

                  {search && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      aria-label="Clear search"
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        text-gray-400
                        transition
                        hover:bg-gray-100
                        hover:text-gray-700
                      "
                    >
                      <X size={18} />
                    </button>
                  )}

                </div>

                <p className="mt-4 text-sm text-blue-100">
                  Search guides, troubleshooting articles, and account help.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            CATEGORIES
        ====================================================== */}

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

            <div>

              <p className="text-sm font-semibold uppercase tracking-wider text-[#1a73e8]">
                Help Center
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                Browse help categories
              </h2>

              <p className="mt-3 max-w-2xl text-gray-500">
                Find the information you need by choosing a category below.
              </p>

            </div>

          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {categories.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="
                    group
                    rounded-3xl
                    border
                    border-gray-200
                    bg-white
                    p-6
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-200
                    hover:shadow-xl
                  "
                >

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-blue-50
                      text-[#1a73e8]
                      transition
                      group-hover:bg-[#1a73e8]
                      group-hover:text-white
                    "
                  >
                    <Icon size={27} />
                  </div>

                  <div className="mt-6 flex items-start justify-between gap-3">

                    <h3 className="text-lg font-bold text-gray-950">
                      {item.title}
                    </h3>

                    <ChevronRight
                      size={20}
                      className="
                        mt-0.5
                        shrink-0
                        text-gray-300
                        transition
                        group-hover:translate-x-1
                        group-hover:text-[#1a73e8]
                      "
                    />

                  </div>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>

                  <div className="mt-5 text-sm font-semibold text-gray-900">
                    {item.articles} Articles
                  </div>

                </Link>
              );
            })}

          </div>

        </section>

        {/* =====================================================
            POPULAR / SEARCH RESULTS
        ====================================================== */}

        <section className="border-y border-gray-100 bg-white">

          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-20">

            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

              <div>

                <p className="text-sm font-semibold uppercase tracking-wider text-[#1a73e8]">
                  {search ? "Search Results" : "Knowledge Base"}
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-950">
                  {search ? `Results for "${search}"` : "Popular articles"}
                </h2>

              </div>

              {search && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="text-sm font-semibold text-[#1a73e8] hover:underline"
                >
                  Clear search
                </button>
              )}

            </div>

            {/* Results */}
            <div className="mt-8 space-y-3">

              {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => (
                  <Link
                    key={article.title}
                    href={article.href}
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      gap-5
                      rounded-2xl
                      border
                      border-gray-100
                      bg-[#f8fafc]
                      p-5
                      transition
                      hover:border-blue-100
                      hover:bg-blue-50
                    "
                  >

                    <div className="flex min-w-0 items-center gap-4">

                      <div
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-white
                          text-[#1a73e8]
                          shadow-sm
                        "
                      >
                        <BookOpen size={19} />
                      </div>

                      <div className="min-w-0">

                        <h3 className="truncate font-semibold text-gray-900">
                          {article.title}
                        </h3>

                        <p className="mt-1 text-xs font-medium text-gray-400">
                          {article.category}
                        </p>

                      </div>

                    </div>

                    <ChevronRight
                      size={20}
                      className="
                        shrink-0
                        text-gray-300
                        transition
                        group-hover:translate-x-1
                        group-hover:text-[#1a73e8]
                      "
                    />

                  </Link>
                ))
              ) : (
                <div className="rounded-3xl border border-dashed border-gray-200 bg-gray-50 px-6 py-14 text-center">

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-gray-400 shadow-sm">
                    <HelpCircle size={28} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-gray-900">
                    No articles found
                  </h3>

                  <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
                    We couldn't find an article matching your search.
                    Try a different keyword or contact our support team.
                  </p>

                  <Link
                    href="/support"
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-[#1a73e8]
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      transition
                      hover:bg-blue-700
                    "
                  >
                    Contact Support
                    <ArrowRight size={16} />
                  </Link>

                </div>
              )}

            </div>

          </div>

        </section>

        {/* =====================================================
            SUPPORT OPTIONS
        ====================================================== */}

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

          <div className="grid gap-6 lg:grid-cols-2">

            {/* Support */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-gray-200
                bg-white
                p-8
                shadow-sm
                sm:p-10
              "
            >

              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-50" />

              <div className="relative">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#1a73e8]">
                  <MessageCircle size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-950">
                  Need more help?
                </h3>

                <p className="mt-3 max-w-md leading-7 text-gray-500">
                  Can't find the answer you're looking for?
                  Our support team is ready to help you resolve
                  your issue.
                </p>

                <Link
                  href="/support"
                  className="
                    mt-7
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-[#1a73e8]
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-blue-500/20
                    transition
                    hover:bg-blue-700
                  "
                >
                  Contact Support
                  <ArrowRight size={17} />
                </Link>

              </div>

            </div>

            {/* Dashboard */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                bg-[#1a73e8]
                p-8
                text-white
                shadow-xl
                shadow-blue-500/10
                sm:p-10
              "
            >

              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

              <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-blue-400/20 blur-2xl" />

              <div className="relative">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                  <UserCircle size={29} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  Account assistance
                </h3>

                <p className="mt-3 max-w-md leading-7 text-blue-100">
                  Access your account to manage your profile,
                  transactions, eSIMs, verification numbers,
                  and wallet.
                </p>

                <Link
                  href="/userdashboard"
                  className="
                    mt-7
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-white
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-[#1a529b]
                    transition
                    hover:bg-blue-50
                  "
                >
                  Go to Dashboard
                  <ArrowRight size={17} />
                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            QUICK HELP
        ====================================================== */}

        <section className="pb-20">

          <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#1a73e8]">
              <LifeBuoy size={28} />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-gray-950">
              Still looking for something?
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-gray-500">
              Browse our complete help center or reach out to our
              support team for personalized assistance.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                href="/help"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-gray-800
                  transition
                  hover:border-blue-200
                  hover:bg-blue-50
                  hover:text-[#1a73e8]
                "
              >
                Browse All Articles
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/support"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#1a73e8]
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-blue-700
                "
              >
                Get Support
                <ArrowRight size={16} />
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

