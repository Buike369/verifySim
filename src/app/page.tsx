import Navbar from "@/components/Home/Navbar";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/features";
import HowItWorks from "@/components/Home/howItworks";
import Coverage from "@/components/Home/coverage";
import CTA from "@/components/Home/cta";
import Footer from "@/components/Home/footer";


export default function Home(){

return (

<main className="bg-white text-slate-900">

<Navbar/>

<Hero/>

<Features/>

<HowItWorks/>

<Coverage/>

<CTA/>

<Footer/>

</main>

)

}