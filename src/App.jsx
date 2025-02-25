import { useEffect, useState } from "react";
import {
  BonusTable,
  Button,
  Navbar,
  ReferralForm,
  HeroSection,
  Benefits,
} from "./components/index.js";

function App() {
  const [displayReferralForm, setDisplayReferralForm] = useState(false);

  return (
    <>
      {displayReferralForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>
      )}
      {displayReferralForm && (
        <div>
          <ReferralForm setDisplayReferralForm={setDisplayReferralForm} />
        </div>
      )}
      <div>
        {/* Navbar */}
        <Navbar setDisplayReferralForm={setDisplayReferralForm} />

        {/* Hero Section */}
        <HeroSection setDisplayReferralForm={setDisplayReferralForm} />

        {/* Benefits Section - Why to Refer and Enroll in you courses */}
        <Benefits setDisplayReferralForm={setDisplayReferralForm} />

        {/* Referral Benefits Table */}
        <BonusTable />
      </div>
    </>
  );
}

export default App;
