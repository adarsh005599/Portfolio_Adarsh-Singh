import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-midnight text-neutral-300 py-20 c-space">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="mb-8 text-neutral-500">Last Updated: January 2026</p>

        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Information We Collect</h2>
            <p>We may collect information you provide directly to us when you:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Register an account on StartBridge or StarkDesk.</li>
              <li>Submit a civic complaint via FixMyCity.</li>
              <li>Contact us via the email redirect provided in the footer.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. How We Use Data</h2>
            <p>
              Data is used to provide personalized startup intelligence, authenticate users via Firebase, 
              and store media on Cloudinary. We do not sell your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Third-Party Services</h2>
            <p>
              Our applications utilize industry-standard services:
              <br />
              <strong>• Authentication:</strong> Firebase / Auth0 / NextAuth / Clerk
              <br />
              <strong>• Database:</strong> MongoDB / Neon Postgres
              <br />
              <strong>• Payments:</strong> Razorpay (for StartBridge)
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Contact</h2>
            <p>
              If you have questions regarding your data or wish to request deletion, please contact 
              <strong> adarshsingh821109@gmail.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;