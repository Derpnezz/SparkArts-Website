import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507643179773-3e975d7ac515')`,
          filter: 'brightness(0.3)'
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
              <Button size="lg" variant="default">
                Support Our Cause
              </Button>
            </a>

            <a 
              href="https://external-signup.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20">
                Join As Artist
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}