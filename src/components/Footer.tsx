
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[hsl(var(--summit-blue))] to-blue-950 text-blue-100">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-5">
            <div className="inline-block transform scale-90 origin-top-left">
              <Logo />
            </div>
            <p className="text-sm md:text-base">
              Strategic criminal defense representation by a former prosecutor who knows how to dismantle the state's case against you.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a 
                href="https://www.justia.com/lawyers/massachusetts/clinton/joe-brava" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-md"
              >
                <span className="text-sm font-medium">Review Us on Justia</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Practice Areas</h3>
            <ul className="space-y-3">
              <li><Link to="/practice-areas/oui-dui" className="text-sm hover:text-white transition-colors">OUI/DUI Defense</Link></li>
              <li><Link to="/practice-areas/drug-crimes" className="text-sm hover:text-white transition-colors">Drug Crimes</Link></li>
              <li><Link to="/practice-areas/assault" className="text-sm hover:text-white transition-colors">Assault and Battery</Link></li>
              <li><Link to="/practice-areas/theft" className="text-sm hover:text-white transition-colors">Theft and Property Crimes</Link></li>
              <li><Link to="/practice-areas/violent-crimes" className="text-sm hover:text-white transition-colors">Violent Crimes</Link></li>
              <li><Link to="/practice-areas/domestic-violence" className="text-sm hover:text-white transition-colors">Domestic Violence Defense</Link></li>
              <li><Link to="/practice-areas/student-defense" className="text-sm hover:text-white transition-colors">Student Defense</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm hover:text-white transition-colors">About Attorney Brava</Link></li>
              <li><Link to="/prosecutor-advantage" className="text-sm hover:text-white transition-colors">Former Prosecutor Advantage</Link></li>
              <li><Link to="/ai-innovation" className="text-sm hover:text-white transition-colors">AI Innovation</Link></li>
              <li><Link to="/case-results" className="text-sm hover:text-white transition-colors">Case Results</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-white transition-colors">Blog & Resources</Link></li>
              <li><Link to="/testimonials" className="text-sm hover:text-white transition-colors">Client Testimonials</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Contact Us</h3>
            <address className="not-italic backdrop-blur-md bg-blue-800/30 border border-blue-700/30 rounded-lg p-5 shadow-lg">
              <p className="text-base">Attorney Joe Brava</p>
              <p className="text-base">Summit Law</p>
              <p className="text-sm mt-2">1042 Main Street, Suite C</p>
              <p className="text-sm">Clinton, MA 01510</p>
              <p className="text-lg mt-3 font-medium">508-454-0822</p>
              <p className="text-sm">Joe@summitlawoffices.com</p>
            </address>
            <Link to="/contact" className="inline-block mt-5 px-5 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-sm font-medium rounded-md transition-all duration-200 hover:shadow-md">
              Contact Us Now
            </Link>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
            <p className="text-sm">© {new Date().getFullYear()} Summit Law. All rights reserved.</p>
            <a 
              href="https://www.justia.com/lawyers/massachusetts/clinton/joe-brava" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm hover:text-white flex items-center"
            >
              <span>Justia Profile</span>
            </a>
          </div>
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
