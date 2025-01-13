import Hero from "@/components/home/Hero";
import Story from "@/components/home/Story";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Story />
      <Footer />
    </div>
  );
}