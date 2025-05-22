
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CaseResults = () => {
  // Group case results by category
  const caseResults = {
    oui: [
      {
        title: "OUI Charge Dismissed",
        description: "Client charged with Operating Under the Influence after being stopped at a sobriety checkpoint. We successfully challenged the legality of the checkpoint procedures, resulting in dismissal of all charges.",
        outcome: "Case Dismissed"
      },
      {
        title: "OUI with High BAC Reduced",
        description: "Client charged with OUI with a blood alcohol concentration of 0.15. Through careful analysis of breathalyzer calibration records and testing procedures, we negotiated a reduction to a first-offense OUI with probation and no jail time.",
        outcome: "Charges Reduced"
      },
      {
        title: "Multiple OUI Case Won at Trial",
        description: "Client faced second-offense OUI charges with potential mandatory jail time. We successfully challenged field sobriety test evidence and cross-examined the arresting officer effectively at trial.",
        outcome: "Not Guilty Verdict"
      }
    ],
    domestic: [
      {
        title: "Domestic Assault Charges Dropped",
        description: "Client charged with domestic assault and battery after a dispute with spouse. We presented evidence of self-defense and inconsistencies in the alleged victim's statements, resulting in dismissal of all charges.",
        outcome: "Case Dismissed"
      },
      {
        title: "Restraining Order Defense",
        description: "Client faced a 209A restraining order that would have required leaving the family home and restricted contact with children. We successfully contested the order at hearing by demonstrating lack of abuse or threat.",
        outcome: "Order Denied"
      },
      {
        title: "Strangulation Charge Reduced",
        description: "Client charged with domestic assault and battery by strangulation, a felony. Through negotiation and presentation of mitigating evidence, we secured a reduction to simple assault with probation and no jail time.",
        outcome: "Charges Reduced"
      }
    ],
    drug: [
      {
        title: "Drug Distribution Case Dismissed",
        description: "Client charged with possession with intent to distribute cocaine. We successfully challenged the search warrant that led to discovery of the drugs, resulting in suppression of evidence and dismissal of charges.",
        outcome: "Case Dismissed"
      },
      {
        title: "Heroin Possession Diverted",
        description: "Client charged with possession of heroin. We negotiated a pretrial diversion to a drug treatment program, resulting in dismissal of charges upon successful completion of treatment.",
        outcome: "Diversion Program"
      },
      {
        title: "School Zone Drug Case Reduced",
        description: "Client charged with distribution of marijuana in a school zone, carrying mandatory minimum sentence. We negotiated removal of school zone enhancement based on actual measurements of the location.",
        outcome: "Mandatory Minimum Avoided"
      }
    ],
    theft: [
      {
        title: "Shoplifting Dismissal",
        description: "Client charged with felony shoplifting based on alleged value of items. We demonstrated that the value was incorrectly calculated, resulting in reduction to a misdemeanor and eventual dismissal.",
        outcome: "Case Dismissed"
      },
      {
        title: "Embezzlement Alternative Resolution",
        description: "Client charged with embezzlement from employer. We negotiated a civil resolution with full restitution that allowed for dismissal of criminal charges.",
        outcome: "Civil Resolution"
      }
    ],
    violent: [
      {
        title: "Assault with Dangerous Weapon Acquittal",
        description: "Client charged with assault with a dangerous weapon after a bar fight. We presented evidence of self-defense and witness testimony contradicting the alleged victim's account.",
        outcome: "Not Guilty Verdict"
      },
      {
        title: "Armed Robbery Charges Reduced",
        description: "Client charged with armed robbery facing 10+ years in prison. Through investigation, we demonstrated issues with witness identification procedures, resulting in reduced charges and a significantly shorter sentence.",
        outcome: "Charges Reduced"
      }
    ],
    other: [
      {
        title: "License Suspension Overturned",
        description: "Client's license was suspended for accumulation of points. We successfully appealed to the Registry of Motor Vehicles by demonstrating errors in the point calculation.",
        outcome: "Suspension Reversed"
      },
      {
        title: "Student Misconduct Hearing Success",
        description: "College student faced expulsion for alleged misconduct. We represented the student in university disciplinary proceedings, resulting in findings that allowed continued enrollment.",
        outcome: "Student Remained Enrolled"
      },
      {
        title: "Magistrate Hearing Success",
        description: "Client faced potential criminal charges for property damage. At the clerk magistrate hearing, we presented evidence of mistaken identity, preventing criminal charges from being issued.",
        outcome: "No Criminal Charges"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>Case Results | Summit Law Criminal Defense</title>
        <meta name="description" content="Review our track record of success in Massachusetts criminal defense cases. Summit Law has achieved dismissals, acquittals, and favorable outcomes for clients facing serious charges." />
        <meta name="keywords" content="criminal defense results, case outcomes, acquittals, charges dismissed, Massachusetts lawyer success, Summit Law results" />
        <meta property="og:title" content="Case Results | Summit Law Criminal Defense" />
        <meta property="og:description" content="Review our track record of success in Massachusetts criminal defense cases. Summit Law has achieved dismissals, acquittals, and favorable outcomes for clients facing serious charges." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://summitlawoffices.com/case-results" />
        <link rel="canonical" href="https://summitlawoffices.com/case-results" />
      </Helmet>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Our Case Results
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-center text-blue-100">
              A proven track record of success defending clients throughout Massachusetts
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
              <path fill="#ffffff" fillOpacity="1" d="M0,128L80,133.3C160,139,320,149,480,144C640,139,800,117,960,122.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
          </div>
        </div>

        {/* Case Results Disclaimer */}
        <section className="container mx-auto px-4 py-8 md:py-12">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 md:p-6">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">Important Disclaimer</h2>
            <p className="text-blue-700">
              The case results described below are real examples of outcomes our attorneys have achieved for clients. However, each case is unique and depends on its specific facts and circumstances. Past results do not guarantee similar outcomes in future cases.
            </p>
          </div>
        </section>

        {/* Case Results Sections */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">OUI/DUI Defense Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseResults.oui.map((result, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
                <div className="flex items-start mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <h3 className="font-bold text-lg">{result.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{result.description}</p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                    Outcome: {result.outcome}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-blue-800 mt-12 mb-6">Domestic Violence Defense Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseResults.domestic.map((result, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
                <div className="flex items-start mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <h3 className="font-bold text-lg">{result.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{result.description}</p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                    Outcome: {result.outcome}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-blue-800 mt-12 mb-6">Drug Crime Defense Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseResults.drug.map((result, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
                <div className="flex items-start mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <h3 className="font-bold text-lg">{result.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{result.description}</p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                    Outcome: {result.outcome}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-blue-800 mt-12 mb-6">Other Notable Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...caseResults.theft, ...caseResults.violent, ...caseResults.other].map((result, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
                <div className="flex items-start mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <h3 className="font-bold text-lg">{result.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{result.description}</p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                    Outcome: {result.outcome}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-50 py-12 my-8">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
              Get Results For Your Case
            </h2>
            <p className="text-blue-700 max-w-2xl mx-auto mb-8">
              Our experienced attorneys are ready to build a strategic defense for your unique situation. Contact us today to discuss how we can help you achieve the best possible outcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-blue-800 hover:bg-blue-900 text-lg px-6 py-3">
                  Contact Us For a Free Consultation
                </Button>
              </Link>
              <Link to="/practice-areas">
                <Button variant="outline" className="border-blue-800 text-blue-800 hover:bg-blue-50 text-lg px-6 py-3">
                  View Our Practice Areas
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

export default CaseResults;
