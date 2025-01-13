import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-transparent">
            SparkArts
          </a>

          <div className="hidden sm:flex space-x-8 items-center">
            <a href="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </a>
            <a href="https://external-donation-site.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors">
              Donate
            </a>
            <a href="/signup">
              <Button variant="default">Sign Up</Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}