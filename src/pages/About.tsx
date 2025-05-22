
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
                  Proven Prosecutorial Insight. Strategic Criminal Defense
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
                  Attorney Joe Brava founded Summit Law in January 2023 following extensive experience as both a prosecutor and criminal defense attorney in Massachusetts. Throughout his legal career, Joe has prosecuted and defended over 1,000 criminal cases.
                </p>
                
                <p className="text-lg">
                  Joe earned his Bachelor's degree in American Government from Suffolk University in 2009. After graduation, he worked in the Massachusetts legislature and served as an independent political consultant, advising local, congressional, and statewide political campaigns throughout New England.
                </p>
                
                <p className="text-lg">
                  In 2016, Joe received his Juris Doctor from Massachusetts School of Law. He subsequently joined the Berkshire District Attorney's Office, specializing in domestic violence cases and serving as the District Court Domestic Violence Supervisor. Joe prosecuted numerous cases in both district and superior courts. In 2022, he was selected for advanced investigative and prosecutorial training through the National District Attorneys Association in Arizona. During his tenure as an ADA in the Berkshires, Joe secured a landmark conviction in a complex domestic violence case. He obtained a five-year sentence by successfully stacking multiple charges, significantly exceeding the district court's standard maximum sentence of two and a half years. This case represented one of the most successful evidence-based prosecutions without a witness in county history and set a new standard for prosecutorial effectiveness.
                </p>
                
                <p className="text-lg">
                  Following his service at the District Attorney's Office, Joe joined Barry & Kinzer, LLP, representing clients in criminal defense matters, including superior court cases, as well as family law and probate, before establishing Summit Law.
                </p>
                
                <p className="text-lg">
                  At Summit Law, Joe integrates his prosecutorial and investigative experience with secure, custom-built artificial intelligence technology. This innovative approach allows him to proactively identify and exploit weaknesses in the prosecution's case, crafting strategic, personalized, and effective defenses for his clients.
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
                    src="/lovable-uploads/3253b549-78e5-4c96-8b31-1743186d65d8.png"
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

        {/* Summit Law's Unique Approach Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Summit Law's Unique Approach</h2>
              
              <div className="space-y-6">
                <p className="text-lg">
                  Summit Law employs a strategic and proactive approach to criminal defense that fully utilizes Attorney Joe Brava's background as a former prosecutor and his deep understanding of law enforcement investigations.
                </p>
                
                <p className="text-lg">
                  Rather than merely responding to charges or reacting to the prosecution's moves, Joe begins every case by thinking strategically like a prosecutor and analytically like an investigator. He carefully reconstructs the police investigation, scrutinizing how evidence was collected and evaluating investigative methods. Joe identifies any potential mistakes, oversights, or shortcuts taken by law enforcement and assesses the reasoning behind prosecutorial charging decisions.
                </p>
                
                <p className="text-lg">
                  Before formulating a defense, Joe attempts to build the prosecution's case himself from their perspective. This reverse-engineering approach systematically reveals flaws in the evidence and investigative methods used by law enforcement. Only after this comprehensive analysis does Joe develop a customized defense strategy specifically designed to leverage those identified weaknesses, ensuring the best possible outcomes for his clients.
                </p>
                
                <p className="text-lg">
                  Additionally, Summit Law utilizes proprietary artificial intelligence technology securely hosted on private servers. These sophisticated AI tools enable rapid and detailed evidence analysis, identify investigative gaps, and enhance the construction of clear, compelling courtroom arguments. All technological solutions adhere to strict standards of security and confidentiality.
                </p>
                
                <p className="text-lg">
                  Clients represented by Summit Law benefit from an attorney who genuinely understands prosecution and investigative tactics from firsthand experience. This powerful combination of prosecutorial insight, investigative strategy, and advanced technology ensures robust and confident criminal defense representation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
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
