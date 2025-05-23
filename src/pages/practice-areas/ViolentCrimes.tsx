
import React from "react";
import PracticeAreaDetail from "@/components/PracticeAreaDetail";

const ViolentCrimes = () => {
  return (
    <PracticeAreaDetail
      title="Violent Crimes Attorney in Massachusetts"
      description="Skilled Defense for Violent Crime Charges"
      metaDescription="Summit Law provides aggressive defense against violent crime charges in Massachusetts. Our former prosecutors understand how to build effective defenses for assault, battery, and more serious offenses."
      content={
        <>
          <h2>Violent Crimes Attorney in Massachusetts</h2>
          <p>
            Violent crimes like assault, battery, robbery, or manslaughter are among Massachusetts's most aggressively prosecuted offenses. Summit Law provides expert courtroom defense, challenging the prosecution's case through meticulous investigation and strategic litigation. We work tirelessly toward reduced charges or case dismissals.
          </p>
          
          <h3>Our Violent Crime Defense Includes:</h3>
          
          <ul>
            <li>Intensive case investigation</li>
            <li>Forensic and medical evidence analysis</li>
            <li>Constitutional rights advocacy</li>
            <li>Trial-proven representation</li>
          </ul>
          
          <p>
            Contact Summit Law immediately for proactive defense strategies against violent crime charges.
          </p>
        </>
      }
    />
  );
};

export default ViolentCrimes;
