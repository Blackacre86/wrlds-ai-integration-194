
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="bg-white p-2 inline-block rounded">
              <Logo />
            </div>
            <p className="text-sm">
              Providing exceptional legal services with integrity and excellence since 1995.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Practice Areas</h3>
            <ul className="space-y-2">
              <li><Link to="/practice-areas/corporate" className="text-sm hover:text-white">Corporate Law</Link></li>
              <li><Link to="/practice-areas/litigation" className="text-sm hover:text-white">Litigation</Link></li>
              <li><Link to="/practice-areas/real-estate" className="text-sm hover:text-white">Real Estate</Link></li>
              <li><Link to="/practice-areas/intellectual-property" className="text-sm hover:text-white">Intellectual Property</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm hover:text-white">About Us</Link></li>
              <li><Link to="/attorneys" className="text-sm hover:text-white">Our Team</Link></li>
              <li><Link to="/news" className="text-sm hover:text-white">Latest News</Link></li>
              <li><Link to="/careers" className="text-sm hover:text-white">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <address className="not-italic">
              <p className="text-sm">123 Legal Avenue</p>
              <p className="text-sm">Suite 500</p>
              <p className="text-sm">New York, NY 10001</p>
              <p className="text-sm mt-2">(212) 555-1234</p>
              <p className="text-sm">info@summitlaw.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© {new Date().getFullYear()} Summit Law. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="text-sm hover:text-white">Terms of Service</Link>
            <Link to="/disclaimer" className="text-sm hover:text-white">Legal Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
