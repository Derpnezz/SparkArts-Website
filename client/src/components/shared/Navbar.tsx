import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Navbar() {
  return (
    <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/">
            <a className="text-2xl font-bold bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-transparent">
              ArtSpace
            </a>
          </Link>
          
          <div className="hidden sm:flex space-x-8 items-center">
            <Link href="/">
              <a className="text-gray-700 hover:text-primary transition-colors">Home</a>
            </Link>
            <Link href="/donate">
              <a className="text-gray-700 hover:text-primary transition-colors">Donate</a>
            </Link>
            <a 
              href="https://external-signup.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="default">Sign Up</Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
