import Header from "@/components/Header";
import Detail from "@/components/Detail";
import Navigation from "@/components/Navigation";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Curriculum from "@/components/Curriculum";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Navigation />
      <Detail />
      <Features />
      <Curriculum />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
