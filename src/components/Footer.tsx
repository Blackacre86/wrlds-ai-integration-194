
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-summit-slate-800 to-summit-slate-900 text-summit-slate-100">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-5">
            <div className="mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 inline-block">
                <Logo variant="white" />
              </div>
            </div>
            <p className="text-sm md:text-base text-summit-slate-300">
              Strategic criminal defense representation that knows how to dismantle the state's case against you.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a 
                href="https://www.justia.com/lawyers/massachusetts/clinton/joe-brava" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 bg-summit-slate-700/50 hover:bg-summit-blue-600/50 transition-colors px-4 py-2 rounded-md border border-summit-slate-600"
              >
                <span className="text-sm font-medium">Review Us on Justia</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Practice Areas</h3>
            <ul className="space-y-3">
              <li><Link to="/practice-areas/oui-dui" className="text-sm text-summit-slate-300 hover:text-white transition-colors">OUI/DUI Defense</Link></li>
              <li><Link to="/practice-areas/drug-crimes" className="text-sm text-summit-slate-300 hover:text-white transition-colors">Drug Crimes</Link></li>
              <li><Link to="/practice-areas/assault" className="text-sm text-summit-slate-300 hover:text-white transition-colors">Assault and Battery</Link></li>
              <li><Link to="/practice-areas/theft" className="text-sm text-summit-slate-300 hover:text-white transition-colors">Theft and Property Crimes</Link></li>
              <li><Link to="/practice-areas/violent-crimes" className="text-sm text-summit-slate-300 hover:text-white transition-colors">Violent Crimes</Link></li>
              <li><Link to="/practice-areas/domestic-violence" className="text-sm text-summit-slate-300 hover:text-white transition-colors">Domestic Violence Defense</Link></li>
              <li><Link to="/practice-areas/student-defense" className="text-sm text-summit-slate-300 hover:text-white transition-colors">Student Defense</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Service Areas</h3>
            <ul className="space-y-3">
              <li><Link to="/locations/boston" className="text-sm text-summit-slate-300 hover:text-white transition-colors">Boston Criminal Defense</Link></li>
              <li><Link to="/locations/worcester" className="text-sm text-summit-slate-300 hover:text-white transition-colors">Worcester Criminal Defense</Link></li>
              <li><Link to="/about" className="text-sm text-summit-slate-300 hover:text-white transition-colors">About Attorney Brava</Link></li>
              <li><Link to="/prosecutor-advantage" className="text-sm text-summit-slate-300 hover:text-white transition-colors">The Summit Advantage</Link></li>
              <li><Link to="/contact" className="text-sm text-summit-slate-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Contact Us</h3>
            <address className="not-italic backdrop-blur-md bg-summit-slate-700/50 border border-summit-slate-600 rounded-lg p-5 shadow-lg">
              <p className="text-base text-white">Attorney Joe Brava</p>
              <p className="text-base text-white">Summit Law</p>
              <p className="text-sm mt-2 text-summit-slate-300">1042 Main Street, Suite C</p>
              <p className="text-sm text-summit-slate-300">Clinton, MA 01510</p>
              <p className="text-lg mt-3 font-medium text-summit-blue-400">508-454-0822</p>
              <p className="text-sm text-summit-slate-300">Joe@summitlawoffices.com</p>
            </address>
            <Link to="/contact" className="inline-block mt-5 px-5 py-3 bg-summit-blue-600/80 hover:bg-summit-blue-600 backdrop-blur-md text-white text-sm font-medium rounded-md transition-all duration-200 hover:shadow-md border border-summit-blue-500">
              Contact Us Now
            </Link>
          </div>
        </div>
        
        <div className="border-t border-summit-slate-700 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
            <p className="text-sm text-summit-slate-400">© {new Date().getFullYear()} Law Offices. All rights reserved.</p>
            <a 
              href="https://www.justia.com/lawyers/massachusetts/clinton/joe-brava" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-summit-slate-300 hover:text-white flex items-center"
            >
              <span>Justia Profile</span>
            </a>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-summit-slate-300 hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-summit-slate-300 hover:text-white">Terms of Service</Link>
            <Link to="/disclaimer" className="text-sm text-summit-slate-300 hover:text-white">Legal Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
