
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Scale, Users, Lightbulb, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Team</h1>
                <p className="text-xl text-blue-100">
                  Former prosecutor turned defense attorney with a strategic approach to criminal defense
                </p>
              </div>
              <div className="w-full md:w-1/2">
                {/* Placeholder for Attorney Joe Brava's professional image */}
                <div className="bg-blue-800 w-full aspect-[4/3] rounded-lg flex items-center justify-center">
                  <span>Professional Photo of Attorney Joe Brava</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Biography Section - Attorney Joe Brava */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Attorney Joe Brava</h2>
              
              <div className="space-y-6">
                <p className="text-lg">
                  Attorney Joe Brava brings a unique prosecutorial perspective to criminal defense, 
                  giving his clients the advantage of insider knowledge in building effective defense strategies.
                </p>
                
                <h3 className="text-xl font-bold">Education</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Suffolk University (B.A., American Government, 2009)</li>
                  <li>Massachusetts School of Law (J.D., 2016)</li>
                </ul>
                
                <h3 className="text-xl font-bold">Professional Experience</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Five years as a prosecutor at the Berkshire District Attorney's Office, specializing in domestic violence cases</li>
                  <li>Advanced training from the National District Attorney Association</li>
                  <li>Experience in Massachusetts legislature and New England political consulting</li>
                  <li>Associate attorney at Barry & Kinzer, LLP</li>
                  <li>Founded Summit Law in January 2023</li>
                </ul>
                
                <h3 className="text-xl font-bold">Approach to Defense</h3>
                <p className="text-lg">
                  Attorney Brava's unique approach involves reverse-engineering prosecution cases. By first 
                  understanding how prosecutors will build their case against his clients, he identifies 
                  weaknesses and develops strategic defenses that anticipate the prosecution's tactics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Biography Section - Kristin D'Amico */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Kristin D'Amico, Paralegal</h2>
              
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="md:w-1/3">
                  {/* Kristin's photo */}
                  <img 
                    src="/lovable-uploads/30517370-4045-4723-b7f5-447436e4e589.png"
                    alt="Kristin D'Amico"
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg">
                    Kristin D'Amico joined Summit Law in spring 2025 as a paralegal with extensive criminal justice experience.
                  </p>
                  
                  <h3 className="text-xl font-bold mt-6 mb-2">Education and Early Experience</h3>
                  <p className="text-lg">
                    Kristin earned her Bachelor's degree in Criminology (with a minor in Sociology) in 2015. 
                    During college, she interned at the Framingham/Natick District Court and participated in 
                    the "Inside-Out Prison Exchange Program" at the Massachusetts Correctional Institution (MCI) Framingham.
                  </p>
                  
                  <h3 className="text-xl font-bold mt-6 mb-2">Professional Experience</h3>
                  <p className="text-lg">
                    After graduation, Kristin worked in the Probation Department at Marlborough District Court from 2015 to 2019. 
                    She then joined the Massachusetts Department of Correction's (DOC) Special Operations Division, focusing on 
                    policy writing and regulatory compliance.
                  </p>
                  <p className="text-lg mt-4">
                    In 2020, Kristin obtained her Massachusetts Real Estate Salesperson License, working full-time in real 
                    estate before returning to criminal justice. In January 2024, she began working as a paralegal at Sambito Law, 
                    where she handled case preparation, document management, and client communication.
                  </p>
                  
                  <h3 className="text-xl font-bold mt-6 mb-2">Certifications</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Department of Criminal Justice Information Services (CJIS)</li>
                    <li>Department of Revenue (DOR) Indigency Verification</li>
                    <li>Department of Transitional Assistance (DTA)</li>
                    <li>Massachusetts Notary Public (commission expires March 2032)</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-lg mt-6">
                At Summit Law, Kristin applies her diverse background and skills to support attorneys effectively and deliver exceptional client service.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Summit Law</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-t-4 border-blue-700">
                <CardContent className="pt-8">
                  <Scale className="h-12 w-12 text-blue-700 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-center mb-2">Trust & Integrity</h3>
                  <p className="text-center">
                    We build relationships based on honesty, transparency, and unwavering commitment to your best interests.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-blue-700">
                <CardContent className="pt-8">
                  <Users className="h-12 w-12 text-blue-700 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-center mb-2">Personalized Attention</h3>
                  <p className="text-center">
                    Your case receives direct attention from Attorney Brava, not handed off to junior associates or paralegals.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-blue-700">
                <CardContent className="pt-8">
                  <Lightbulb className="h-12 w-12 text-blue-700 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-center mb-2">Innovative Technology</h3>
                  <p className="text-center">
                    We leverage cutting-edge AI tools to analyze evidence, research precedents, and build stronger cases.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-blue-700">
                <CardContent className="pt-8">
                  <Clock className="h-12 w-12 text-blue-700 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-center mb-2">Responsive Communication</h3>
                  <p className="text-center">
                    We understand that criminal charges create anxiety and prioritize keeping you informed at every stage.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/contact">
                <Button size="lg" className="bg-blue-800 hover:bg-blue-900">
                  Schedule Your Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
