
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
              Strategic criminal defense representation by a former prosecutor who knows how to dismantle the state's case against you.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Practice Areas</h3>
            <ul className="space-y-2">
              <li><Link to="/practice-areas/oui-dui" className="text-sm hover:text-white">OUI/DUI Defense</Link></li>
              <li><Link to="/practice-areas/drug-crimes" className="text-sm hover:text-white">Drug Crimes</Link></li>
              <li><Link to="/practice-areas/assault" className="text-sm hover:text-white">Assault and Battery</Link></li>
              <li><Link to="/practice-areas/theft" className="text-sm hover:text-white">Theft and Property Crimes</Link></li>
              <li><Link to="/practice-areas/violent-crimes" className="text-sm hover:text-white">Violent Crimes</Link></li>
              <li><Link to="/practice-areas/domestic-violence" className="text-sm hover:text-white">Domestic Violence Defense</Link></li>
              <li><Link to="/practice-areas/student-defense" className="text-sm hover:text-white">Student Defense</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm hover:text-white">About Attorney Brava</Link></li>
              <li><Link to="/prosecutor-advantage" className="text-sm hover:text-white">Former Prosecutor Advantage</Link></li>
              <li><Link to="/ai-innovation" className="text-sm hover:text-white">AI Innovation</Link></li>
              <li><Link to="/case-results" className="text-sm hover:text-white">Case Results</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-white">Blog & Resources</Link></li>
              <li><Link to="/testimonials" className="text-sm hover:text-white">Client Testimonials</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <address className="not-italic">
              <p className="text-sm">Attorney Joe Brava</p>
              <p className="text-sm">Summit Law</p>
              <p className="text-sm">1042 Main Street, Suite C</p>
              <p className="text-sm">Clinton, MA 01510</p>
              <p className="text-sm mt-2">508-454-0822</p>
              <p className="text-sm">Joe@summitlawoffices.com</p>
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
