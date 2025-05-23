import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <div className="terms-content">
        <h1>Terms and Conditions</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using Dream Journal, you accept and agree to be bound by the terms and conditions of this agreement.</p>
        </section>

        <section>
          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily use Dream Journal for personal, non-commercial purposes only. This is the grant of a license, not a transfer of title.</p>
        </section>

        <section>
          <h2>3. User Content</h2>
          <p>Users retain ownership of their content but grant Dream Journal a license to use, modify, and display the content for the purpose of providing the service.</p>
        </section>

        <section>
          <h2>4. Privacy</h2>
          <p>Your use of Dream Journal is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the site and informs users of our data collection practices.</p>
        </section>

        <section>
          <h2>5. Disclaimer</h2>
          <p>Dream Journal is provided "as is". We make no warranties, expressed or implied, and hereby disclaim all warranties of merchantability and fitness for a particular purpose.</p>
        </section>

        <section>
          <h2>6. Limitations</h2>
          <p>In no event shall Dream Journal or its suppliers be liable for any damages arising out of the use or inability to use the materials on Dream Journal.</p>
        </section>

        <section>
          <h2>7. Contact Information</h2>
          <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
          <p>Email: support@story-93958.web.app</p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions; 