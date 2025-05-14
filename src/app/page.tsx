import { Header } from "@/components/Header";
import { ThreeDMarqueeDemo } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { CardHoverEffectDemo } from "@/components/CardHoverEffect";
import { FocusCardsD } from "@/components/FocusImageCard";
import { StickyScrollRevealDemo } from "@/components/StickyScrollReveal";
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonials";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Your page content here */}
        <ThreeDMarqueeDemo/>
        <CardHoverEffectDemo/>

        <div className="flex justify-center items-center">
        <h1 className="text-4xl font-bold my-10 text-zinc-500">Our Renowned Members.</h1>
        </div>
        <AnimatedTestimonialsDemo />
        <div className="flex justify-center items-center">
        <h1 className="text-4xl font-bold my-10 text-zinc-500">Our Honourable Leaders.</h1>
        </div>
        <FocusCardsD/>
        <div className="flex justify-center items-center">
        <h1 className="text-4xl font-bold my-10 text-zinc-500">Our Services.</h1>
        </div>
        <StickyScrollRevealDemo />
      </main>
      <Footer/>
    </>
  );
}