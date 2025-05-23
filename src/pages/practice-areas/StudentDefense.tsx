
import React from "react";
import PracticeAreaDetail from "@/components/PracticeAreaDetail";

const StudentDefense = () => {
  return (
    <PracticeAreaDetail
      title="Student Defense Attorney in Massachusetts"
      description="Protecting Students' Rights and Futures"
      metaDescription="Summit Law provides specialized defense for students facing criminal charges or university disciplinary proceedings in Massachusetts. Protect your educational future with our experienced legal team."
      content={
        <>
          <h2>Student Defense Attorney in Massachusetts</h2>
          <p>
            Allegations against students for disciplinary or criminal matters can jeopardize academic and professional futures. Summit Law provides specialized defense for Massachusetts high school and college students, handling disciplinary hearings, criminal allegations, and ensuring your rights and educational opportunities remain secure.
          </p>
          
          <h3>Our Student Defense Services Include:</h3>
          
          <ul>
            <li>Representation in school disciplinary hearings</li>
            <li>Defense of criminal charges (drug possession, alcohol-related offenses, assault)</li>
            <li>Strategic negotiations to minimize academic disruption</li>
            <li>Preventative strategies to protect students' future opportunities</li>
          </ul>
          
          <p>
            Act swiftly to protect your education and future—contact Summit Law for dedicated student defense representation.
          </p>
        </>
      }
    />
  );
};

export default StudentDefense;
