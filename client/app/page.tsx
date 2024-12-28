import { Hero } from "@/components/pages/heroPage/Page";
import Navbar from "@/components/navbar/Page";
import { About } from "@/components/pages/AboutEventPage/page";
import { Prizes } from "@/components/pages/Prizes/page";
import { Sponsors } from "@/components/pages/sponsers/page";
import { Footer } from "@/components/Footer/page";
import BackgroundVideo from "@/components/ui/BackgroundVideo";

export default function Home() {
  return (
    <div className="relative">
      <BackgroundVideo />
      <Navbar />
      <main className="mt-32 w-full relative">
        <Hero />
        <About />
        <Prizes />
        <Sponsors />
        <Footer />
      </main>
    </div>
  );
}
