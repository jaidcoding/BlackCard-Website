'use client';

export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By downloading, installing, or using the BlackCard app (&quot;App&quot;), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, do not use the App.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. App Store Terms</h2>
        <p className="mb-4">
          These terms are in addition to the App Store terms of service. The App is licensed, not sold, to you by BlackCard for use strictly in accordance with these terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
        <p className="mb-4">
          You must be at least 18 years old to use this App. You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Subscription and Payments</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Subscription fees are charged through your Apple ID account</li>
          <li>Subscriptions automatically renew unless cancelled at least 24 hours before the renewal date</li>
          <li>You can manage and cancel subscriptions through your App Store account settings</li>
          <li>No refunds will be issued for partial subscription periods</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. User Content</h2>
        <p className="mb-4">
          You retain ownership of any content you submit through the App. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, modify, and display that content.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Prohibited Activities</h2>
        <p className="mb-4">You agree not to:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Use the App for any illegal purpose</li>
          <li>Attempt to gain unauthorized access to the App</li>
          <li>Interfere with or disrupt the App's security features</li>
          <li>Share your account credentials with others</li>
          <li>Use the App to transmit harmful code or malware</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
        <p className="mb-4">
          The App and its original content, features, and functionality are owned by BlackCard and are protected by international copyright, trademark, and other intellectual property laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Disclaimer of Warranties</h2>
        <p className="mb-4">
          The App is provided &quot;as is&quot; without any warranty of any kind. We do not guarantee that the App will be uninterrupted, secure, or error-free.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
        <p className="mb-4">
          To the maximum extent permitted by law, BlackCard shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the App.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new terms on the App and updating the &quot;Last Updated&quot; date.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
        <p className="mb-4">
          These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
        <p className="mb-4">
          For any questions about these Terms and Conditions, please contact us at:
        </p>
        <div className="ml-6">
          <p>Email: jaidcoding@gmail.com</p>
        </div>
      </section>

      <footer className="mt-12 text-sm text-gray-600">
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  );
} 