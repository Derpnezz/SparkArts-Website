import { Button } from "@/components/ui/button";
import Hero from "@/components/home/Hero";
import Story from "@/components/home/Story";
import Gallery from "@/components/home/Gallery";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Story />
      <Gallery />
      <Footer />
    </div>
  );
}