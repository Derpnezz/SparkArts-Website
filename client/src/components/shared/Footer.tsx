import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">SparkArts</h3>
            <p className="text-gray-600">
              Empowering young minds and ||
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Socials</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.instagram.com/sparkartsmoco/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/sparkartsmoco/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                  Placeholder
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/sparkartsmoco/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                  Placeholder
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <p className="text-gray-600">
              Email: SparkArts.official@gmail.com<br />
              Phone: (555) 123-4567<br />
              Address: 123 Art Street, Creative City
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} SparkArts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}