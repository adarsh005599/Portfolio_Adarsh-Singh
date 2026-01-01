import React from 'react';

const TermsAndConditions = () => {
  return (
    <section className="min-h-screen bg-midnight text-neutral-300 py-20 c-space">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Terms & Conditions</h1>
        <p className="mb-8 text-neutral-500">Last Updated: January 2026</p>

        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing the portfolio and platforms (including StartBridge and StarkDesk) owned by <strong>Adarsh Singh</strong>, 
              you agree to be bound by these terms. If you do not agree, please discontinue use immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. Intellectual Property</h2>
            <p>
              The code, design, and original content within these projects are the intellectual property of Adarsh Singh. 
              While GitHub repositories are public for review, commercial redistribution of the specific UI/UX design or 
              proprietary ML models without consent is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Use of Services</h2>
            <p>
              Users are prohibited from attempting to reverse-engineer the platforms or using AI-powered tools (like StarkDesk) 
              for illegal activities or automated scraping that exceeds rate limits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Limitation of Liability</h2>
            <p>
              All projects are provided "as-is." As a developer, I am not liable for any damages resulting from the use of 
              experimental features, ML predictions, or third-party integrations.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;