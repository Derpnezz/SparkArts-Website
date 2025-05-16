import Hero from "@/components/home/Hero";
import Story from "@/components/home/Story";
import Info from "@/components/home/Info";
import ImageSlideshow from "@/components/home/ImageSlideshow";
import Team from "@/components/home/Team";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Story /> */}
      <Info />
      {/* <ImageSlideshow /> */}
      <Team />
      <Footer />
    </div>
  );
}