

// import {
//   Globe2,
//   Signal,
//   ShieldCheck,
//   Wifi,
//   CheckCircle2,
//     ArrowRight,
// } from "lucide-react";



// const stats = [

//   {
//     value:"190+",
//     label:"Countries Covered"
//   },

//   {
//     value:"500+",
//     label:"Mobile Networks"
//   },

//   {
//     value:"99.9%",
//     label:"Service Availability"
//   },

//   {
//     value:"24/7",
//     label:"Global Support"
//   }

// ];




// export default function Coverage(){


// return (


// <section
// className="
// relative
// overflow-hidden
// py-24
// bg-white
// "
// >


// {/* Background Effects */}

// <div
// className="
// absolute
// top-0
// left-1/2
// -translate-x-1/2
// h-[500px]
// w-[700px]
// rounded-full
// bg-blue-100/40
// blur-3xl
// "
// />



// <div
// className="
// relative
// max-w-7xl
// mx-auto
// px-5
// sm:px-8
// lg:px-10
// "
// >




// {/* // bg-gradient-to-br
// // from-[#071B4D]
// // via-[#0b2d73]
// // to-[#3156a3] */}

// <div
// className="
// relative
// overflow-hidden
// rounded-[40px]


// p-8
// sm:p-12
// lg:p-20
// text-white
// "
// >





// {/* Decorative circles */}

// <div
// className="
// absolute
// top-0
// right-0
// h-72
// w-72
// rounded-full
// bg-white/10
// blur-2xl
// "
// />


// <div
// className="
// absolute
// bottom-0
// left-0
// h-60
// w-60
// rounded-full
// bg-blue-300/20
// blur-3xl
// "
// />





// <div
// className="
// relative
// text-center
// max-w-4xl
// mx-auto
// "
// >



// <div
// className="
// inline-flex
// items-center
// gap-2
// rounded-full
// bg-[#eef3ff]
// border
// border-white/20
// px-5
// py-2
// text-sm
// font-medium
// text-[#071b4d]
// "
// >


// <Globe2 size={17}/>


// Global Connectivity Network


// </div>





// <h2
// className="
// mt-7
// text-3xl
// sm:text-4xl
// lg:text-5xl
// font-bold
// leading-tight
// text-[#000000]
// "
// >

// Connect Anywhere.
// Anytime.
// Without Borders.

// </h2>





// <p
// className="
// mt-6
// text-lg
// leading-relaxed
// text-[#4a5666]
// max-w-3xl
// mx-auto
// "
// >

// Access secure verification numbers and
// high-speed data-only eSIM plans across
// multiple countries with reliable network coverage.

// </p>






// {/* Features */}

// <div
// className="
// mt-10
// flex
// flex-wrap
// justify-center
// gap-4
// "
// >


// <div
// className="
// flex
// items-center
// gap-2
// rounded-full
// bg-[#eef3ff]
// text-[#071b4d]
// px-5
// py-3
// "
// >

// <Wifi size={18}/>

// Instant Activation

// </div>




// <div
// className="
// flex
// items-center
// gap-2
// rounded-full
// bg-[#eef3ff]
// text-[#071b4d]
// px-5
// py-3
// "
// >

// <Signal size={18}/>

// Fast Networks

// </div>





// <div
// className="
// flex
// items-center
// gap-2
// rounded-full
// bg-[#eef3ff]
// text-[#071b4d]
// px-5
// py-3
// "
// >

// <ShieldCheck size={18}/>

// Secure Platform

// </div>


// </div>




// </div>









// {/* Stats */}

// <div
// className="
// relative
// mt-14
// grid
// grid-cols-2
// lg:grid-cols-4
// gap-5
// "
// >


// {
// stats.map((item,index)=>(


// <div
// key={index}
// className="
// rounded-3xl
// bg-[#eef3ff6b]
// text-[#071b4d]
// border
// border-white/20
// p-6
// text-center
// backdrop-blur
// "
// >


// <h3
// className="
// text-3xl
// lg:text-4xl
// font-bold
// text-[#071b4d]
// "
// >

// {item.value}

// </h3>



// <p
// className="
// mt-2
// text-[#496589b8]
// text-sm
// "
// >

// {item.label}

// </p>


// </div>


// ))

// }


// </div>









// {/* Bottom CTA */}

// <div
// className="
// relative
// mt-12
// flex
// flex-col
// sm:flex-row
// items-center
// justify-center
// gap-4
// "
// >


// <button
// className="
// rounded-xl
// bg-[#1a73e8]
// px-8
// py-4
// font-semibold
// text-[#fff]
// hover:bg-blue-50
// hover:text-[#000]
// transition
// flex items-center
// gap-2
// cursor-pointer
// "
// >

// Explore Coverage
// <ArrowRight
// size={18}
// className="
// group-hover:translate-x-1
// transition
// "
// />

// </button>




// <div
// className="
// flex
// items-center
// gap-2
// text-[#000]
// "
// >

// <CheckCircle2 size={18}/>

// Trusted worldwide

// </div>



// </div>






// </div>


// </div>


// </section>


// )

// }


"use client";

import {
  Globe2,
  Signal,
  ShieldCheck,
  Wifi,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 190,
    suffix: "+",
    label: "Countries Covered",
  },
  {
    value: 500,
    suffix: "+",
    label: "Mobile Networks",
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Service Availability",
    decimals: 1,
  },
  {
    value: 24,
    suffix: "/7",
    label: "Global Support",
  },
];

function AnimatedCounter({
  value,
  suffix = "",
  decimals = 0,
  start,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    const duration = 1800;
    const startTime = performance.now();

    let animationFrame: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentValue = value * easedProgress;

      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, start]);

  return (
    <>
      {count.toFixed(decimals)}
      {suffix}
    </>
  );
}

export default function Coverage() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Run only once
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-white
        py-24
      "
    >
      {/* Background Effects */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-blue-100/40
          blur-3xl
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* Main Card */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
          
            p-8
            text-white
            sm:p-12
            lg:p-20
          "
        >
          {/* Decorative circles */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-72
              w-72
              rounded-full
              bg-white/10
              blur-2xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-20
              -left-20
              h-60
              w-60
              rounded-full
              bg-[#1c74e9]/20
              blur-3xl
            "
          />

          {/* Header */}

          <div
            className="
              relative
              mx-auto
              max-w-4xl
              text-center
            "
          >
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-white/95
                px-5
                py-2
                text-sm
                font-semibold
                text-[#071B4D]
                shadow-sm
              "
            >
              <Globe2 size={17} />

              Global Connectivity Network
            </div>

            <h2
              className="
                mt-7
                text-3xl
                font-bold
                leading-tight
                text-[#000]
                sm:text-4xl
                lg:text-5xl
              "
            >
              Connect Anywhere.
              <span className="block text-[#1a73e8]">
                Anytime. Without Borders.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-[#33445a]
                leading-relaxed
                text-[#7f8ba1]
                sm:text-lg
              "
            >
              Access secure verification numbers and high-speed data eSIM
              plans across multiple countries with reliable network coverage.
            </p>

            {/* Features */}

            <div
              className="
                mt-10
                flex
                flex-wrap
                justify-center
                gap-3
                sm:gap-4
              "
            >
              {[
                {
                  icon: Wifi,
                  text: "Instant Activation",
                },
                {
                  icon: Signal,
                  text: "Fast Networks",
                },
                {
                  icon: ShieldCheck,
                  text: "Secure Platform",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/10
                      px-4
                      py-2.5
                      text-sm
                      font-medium
                      text-black
                      backdrop-blur
                    "
                  >
                    <Icon size={17} className="text-[#1a73e8]" />

                    {item.text}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats */}

          <div
            className="
              relative
              mt-14
              grid
              grid-cols-2
              gap-4
              lg:grid-cols-4
            "
          >
            {stats.map((item, index) => (
              <div
                key={index}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/10
                  p-6
                  text-center
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/15
                "
              >
                <h3
                  className="
                    text-3xl
                    font-bold
                    tracking-tight
                    text-black
                    sm:text-4xl
                  "
                >
                  <AnimatedCounter
                    value={item.value}
                    suffix={item.suffix}
                    decimals={item.decimals ?? 0}
                    start={isVisible}
                  />
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    font-medium
                    text-[#7f8ba1]
                  "
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}

          <div
            className="
              relative
              mt-12
              flex
              flex-col
              items-center
              justify-center
              gap-5
              sm:flex-row
            "
          >
            <button
              type="button"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-[#1a73e8]
                px-7
                py-3.5
                font-semibold
                text-[#fff]
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-cyan-50
              "
            >
              Explore Coverage

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>

            <div
              className="
                flex
                items-center
                gap-2
                text-sm
                font-medium
                text-black
              "
            >
              <CheckCircle2
                size={18}
                className="text-[#1a73e8]"
              />

              Trusted worldwide
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}