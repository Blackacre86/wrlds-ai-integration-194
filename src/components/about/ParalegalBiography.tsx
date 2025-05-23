
import React from "react";

const ParalegalBiography = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Kristin D'Amico, Paralegal</h2>
          
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="md:w-1/3">
              <img 
                src="/lovable-uploads/0223016f-04b0-4c04-9788-fd37bf41baca.png" 
                alt="Kristin D'Amico" 
                className="rounded-lg shadow-md w-full aspect-[3/4] object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-lg">
                Kristin D'Amico joined Summit Law in spring 2025 as a paralegal with extensive criminal justice experience.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-2">Education and Early Experience</h3>
              <p className="text-lg">
                Kristin earned her Bachelor's degree in Criminology (with a minor in Sociology) in 2015. 
                During college, she interned at the Framingham/Natick District Court and participated 
                in the "Inside-Out Prison Exchange Program" at the Massachusetts Correctional Institution (MCI) Framingham.
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
        </div>
      </div>
    </section>
  );
};

export default ParalegalBiography;
