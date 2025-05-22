
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PracticeAreas = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8">Practice Areas</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* OUI/DUI Defense */}
          <div className="p-6 bg-blue-50/60 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-blue-800 mb-3">OUI/DUI Defense</h2>
            <p className="text-gray-700 mb-4">Expert defense for operating under the influence charges with strategies designed to protect your driving privileges and minimize penalties.</p>
            <a href="/practice-areas/oui-dui" className="text-blue-700 font-medium hover:underline">Learn more →</a>
          </div>
          
          {/* Domestic Violence Defense */}
          <div className="p-6 bg-blue-50/60 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-blue-800 mb-3">Domestic Violence Defense</h2>
            <p className="text-gray-700 mb-4">Strategic defense against domestic violence allegations, protecting your rights while navigating these sensitive and complex cases.</p>
            <a href="/practice-areas/domestic-violence" className="text-blue-700 font-medium hover:underline">Learn more →</a>
          </div>
          
          {/* Drug Crimes */}
          <div className="p-6 bg-blue-50/60 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-blue-800 mb-3">Drug Crimes</h2>
            <p className="text-gray-700 mb-4">Comprehensive defense against drug possession, distribution, and trafficking charges with strategies focused on case dismissal or charge reduction.</p>
            <a href="/practice-areas/drug-crimes" className="text-blue-700 font-medium hover:underline">Learn more →</a>
          </div>
          
          {/* Violent Crimes */}
          <div className="p-6 bg-blue-50/60 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-blue-800 mb-3">Violent Crimes</h2>
            <p className="text-gray-700 mb-4">Aggressive defense against assault, battery, and other violent crime charges, challenging evidence and protecting your rights throughout the process.</p>
            <a href="/practice-areas/violent-crimes" className="text-blue-700 font-medium hover:underline">Learn more →</a>
          </div>
          
          {/* Sex Offenses */}
          <div className="p-6 bg-blue-50/60 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-blue-800 mb-3">Sex Offenses</h2>
            <p className="text-gray-700 mb-4">Strategic defense against sexual assault allegations and related charges, with careful attention to privacy, evidence examination, and constitutional rights.</p>
            <a href="/practice-areas/sex-offenses" className="text-blue-700 font-medium hover:underline">Learn more →</a>
          </div>
          
          {/* Theft & Property Crimes */}
          <div className="p-6 bg-blue-50/60 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-blue-800 mb-3">Theft & Property Crimes</h2>
            <p className="text-gray-700 mb-4">Effective defense strategies for larceny, shoplifting, burglary, and other property crime allegations.</p>
            <a href="/practice-areas/theft" className="text-blue-700 font-medium hover:underline">Learn more →</a>
          </div>
          
          {/* Additional blocks for other practice areas */}
          <div className="p-6 bg-blue-50/60 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-blue-800 mb-3">Magistrate Hearings</h2>
            <p className="text-gray-700 mb-4">Skilled representation at clerk magistrate hearings to prevent criminal charges from being issued against you.</p>
            <a href="/practice-areas/magistrate-hearings" className="text-blue-700 font-medium hover:underline">Learn more →</a>
          </div>
          
          <div className="p-6 bg-blue-50/60 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-blue-800 mb-3">Motor Vehicle Offenses</h2>
            <p className="text-gray-700 mb-4">Defense against driving violations, license suspensions, and other motor vehicle-related legal issues.</p>
            <a href="/practice-areas/motor-vehicle" className="text-blue-700 font-medium hover:underline">Learn more →</a>
          </div>
          
          <div className="p-6 bg-blue-50/60 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-blue-800 mb-3">209A Hearings</h2>
            <p className="text-gray-700 mb-4">Strategic representation in restraining order hearings to protect your rights and interests.</p>
            <a href="/practice-areas/209a-hearings" className="text-blue-700 font-medium hover:underline">Learn more →</a>
          </div>
          
          <div className="p-6 bg-blue-50/60 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-blue-800 mb-3">Student Defense</h2>
            <p className="text-gray-700 mb-4">Specialized defense for students facing academic disciplinary proceedings, criminal charges, or Title IX investigations.</p>
            <a href="/practice-areas/student-defense" className="text-blue-700 font-medium hover:underline">Learn more →</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PracticeAreas;
