import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/components/home/images/favicon_words.png" alt="SparkArts" width="250" height="250" className="center"/>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://sparkarts.net" className="text-gray-600 hover:text-primary transition-colors">
                  Home Page
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/sparkartsmoco/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://donate.sparkarts.net" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                  Donate
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <p className="text-gray-600">
              Email: SparkArts.official@gmail.com<br />
              Phone: (202) 604-4426<br />
              EIN: 33-3355422
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} SparkArts Corporation. All rights reserved.
          </p>
          <p className="text-center text-gray-500">
            Website managed by Gabriel Yee
          </p>
        </div>
      </div>
    </footer>
  );
}