import Image from "next/image";
import { Hero } from "@/components/pages/heroPage/Page";
import Navbar from "@/components/navbar/Page";
import { About } from "@/components/pages/AboutEventPage/page";
import { Prizes } from "@/components/pages/Prizes/page";
import { Sponsors } from "@/components/pages/sponsers/page";
import { OurTeam } from "@/components/pages/OurTeam/page";
import { Footer } from "@/components/Footer/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="mt-32 w-full">
        <Hero />
        <About />
        <Prizes />
        <Sponsors />
        <OurTeam />
        <Footer />
      </main>
    </div>
  );
}
