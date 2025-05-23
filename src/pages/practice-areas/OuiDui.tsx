
import React from "react";
import PracticeAreaDetail from "@/components/PracticeAreaDetail";

const OuiDui = () => {
  return (
    <PracticeAreaDetail
      title="OUI Defense Attorney in Massachusetts"
      description="Aggressive Defense Against OUI Charges"
      metaDescription="Expert OUI/DUI defense from former prosecutors at Summit Law. Protect your driving privileges and minimize penalties with our experienced legal team."
      content={
        <>
          <h2>OUI Defense Attorney in Massachusetts</h2>
          <p>
            Facing charges of Operating Under the Influence (OUI) in Massachusetts threatens your freedom, driving privileges, and employment opportunities. Summit Law provides expert representation, challenging evidence such as breathalyzer tests, field sobriety results, and procedural missteps by law enforcement. We meticulously analyze each detail of your case to build a robust defense strategy designed for successful outcomes.
          </p>
          
          <h3>Our OUI Defense Services Include:</h3>
          
          <ul>
            <li>Breathalyzer accuracy challenges</li>
            <li>Field sobriety test disputes</li>
            <li>Police procedural evaluations</li>
            <li>Registry of Motor Vehicles (RMV) hearings representation</li>
          </ul>
          
          <p>
            Secure your rights and future by contacting our experienced Massachusetts OUI attorneys today.
          </p>
        </>
      }
    />
  );
};

export default OuiDui;
