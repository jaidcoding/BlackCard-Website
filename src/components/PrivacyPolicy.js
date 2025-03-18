'use client';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-300 mb-6">
          At BlackCard, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our &quot;Service&quot; (the &quot;App&quot;).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <h3 className="text-xl font-medium mb-2">Personal Information You Provide:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>Name and contact information</li>
          <li>Payment information</li>
          <li>Account credentials</li>
          <li>Profile information</li>
          <li>Communication preferences</li>
        </ul>

        <h3 className="text-xl font-medium mb-2">Information Automatically Collected:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>Device information (including device identifiers)</li>
          <li>Usage data and analytics</li>
          <li>Location information (with your permission)</li>
          <li>Log data and activity information</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>To provide and maintain our Services</li>
          <li>To process your transactions</li>
          <li>To communicate with you about our Services</li>
          <li>To improve and personalize your experience</li>
          <li>To protect against fraud and unauthorized access</li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Sharing and Disclosure</h2>
        <p className="text-gray-300 mb-6">
          We may share your information with:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Service providers and business partners</li>
          <li>Payment processors</li>
          <li>Analytics providers</li>
          <li>Law enforcement when required by law</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <p className="text-gray-300 mb-6">
          We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>
        <p className="text-gray-300 mb-6">
          You have the right to:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of marketing communications</li>
          <li>Control app permissions (e.g., location services)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Children&apos;s Privacy</h2>
        <p className="text-gray-300 mb-6">
          Our Services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
        <p className="text-gray-300 mb-6">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">California Privacy Rights</h2>
        <p className="text-gray-300 mb-6">
          California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, disclose, and sell, and the right to request deletion of personal information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">International Data Transfers</h2>
        <p className="text-gray-300 mb-6">
          Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-300 mb-6">
          If you have any questions about this Privacy Policy or our practices, please contact us at:
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
