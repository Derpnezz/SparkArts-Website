import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://cdn.discordapp.com/attachments/949416614510620702/1328546907286540298/template_1.png?ex=67871939&is=6785c7b9&hm=f2461881c300e9aa997ad4161bcff7a82830255616671eb4ef7656cb4ffd8636&')`,
          filter: 'brightness(0.45)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transforming Lives Through Art
          </h1>

          <p className="text-xl text-gray-200 mb-8">
            Join us in our mission to make art accessible to everyone and empower creative voices in our community.
          </p>

          <div className="space-x-4">
            <a 
              href="https://external-donation-site.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20">
                Support Us
              </Button>
            </a>

            <Link href="/signup"
              onClick={()=> window.scrollTo({top: 0, behavior: 'smooth'})}>              
              <Button size="lg" variant="default">
                Join Our Program
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}