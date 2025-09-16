import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Privacy - Manon.icu" },
    {
      name: "description",
      content: "Privacy Policy",
    },
  ];
};

export default function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <article className="prose prose-slate">
        <header>
          <h1>Privacy Policy for Calculator</h1>
          <p className="not-prose text-sm text-gray-500">
            Last updated: 2025-09-16
          </p>
        </header>

        <p>
          This Privacy Policy governs your use of the mobile application
          "Calculator" (hereinafter referred to as the "App") developed by Manon
          (hereinafter referred to as "We", "Us", or "Our"). By accessing or
          using the App, you agree to the collection, use, and disclosure of
          your information as described in this Policy.
        </p>

        <section>
          <h2>1. Information We Collect</h2>
          <h3>1.1 Personal Information</h3>
          <p>
            "Personal Information" refers to data that can identify you as an
            individual. The App does not require you to provide Personal
            Information to use its core calculator functions (e.g., addition,
            subtraction, multiplication, division). We will only collect
            Personal Information if you voluntarily provide it (e.g., when
            contacting our support team via email, providing feedback, or
            signing up for optional features like saved calculation history
            sync). Such Personal Information may include:
          </p>
          <ul>
            <li>Your name</li>
            <li>Email address</li>
            <li>Contact details</li>
          </ul>

          <h3>1.2 Non-Personal Information</h3>
          <p>
            We may automatically collect Non-Personal Information to improve the
            App’s performance and user experience. This information cannot
            identify you individually and may include:
          </p>
          <ul>
            <li>
              Device information (e.g., device model, operating system version,
              unique device identifiers like Android Advertising ID)
            </li>
            <li>
              Usage data (e.g., features you use, frequency of use, calculation
              history stored locally on your device)
            </li>
            <li>
              Technical data (e.g., app crash reports, network connection type)
            </li>
          </ul>
          <p>
            Note: Calculation history is stored locally on your device by
            default. If you enable cloud sync (optional), this data will be
            encrypted and stored on our secure servers or third-party cloud
            services (see Section 3 for details).
          </p>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>
              <strong>2.1 Core App Functionality</strong>: Provide and maintain
              the App’s calculator features. Store local calculation history (if
              you enable this option) to help you retrieve past calculations.
            </li>
            <li>
              <strong>2.2 Service Improvement</strong>: Analyze Non-Personal
              Information to identify user trends, fix bugs, and optimize the
              App’s speed and usability. Use feedback (if you provide it) to
              enhance features and address user needs.
            </li>
            <li>
              <strong>2.3 Communication</strong>: Respond to your inquiries,
              support requests, or feedback (if you provide contact
              information). Send you important updates about the App (e.g.,
              security patches, feature releases) if you opt in to such
              notifications.
            </li>
            <li>
              <strong>2.4 Security</strong>: Protect the App and our users from
              unauthorized access, fraud, or other security threats.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Information Sharing and Disclosure</h2>
          <p>
            We will not sell, rent, or trade your Personal Information to third
            parties for commercial purposes. We may share information only in
            the following limited circumstances:
          </p>
          <ul>
            <li>
              <strong>3.1 Third-Party Service Providers</strong>: We may engage
              trusted third-party service providers to assist with App
              operations (e.g., cloud storage for sync features, analytics tools
              to measure App performance, customer support platforms). These
              providers are contractually obligated to protect your information,
              may only use your information to perform the services we request,
              and are prohibited from using your information for their own
              purposes. Examples include:
              <ul>
                <li>
                  Google Firebase (for crash reporting and analytics), subject
                  to Google’s Privacy Policy:{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://policies.google.com/privacy
                  </a>
                </li>
                <li>
                  Cloud storage providers (e.g., Amazon S3) for encrypted sync
                  data
                </li>
              </ul>
            </li>
            <li>
              <strong>3.2 Legal Requirements</strong>: We may disclose your
              information if required by law, regulation, or legal process
              (e.g., court order, subpoena) to comply with applicable laws in
              your jurisdiction.
            </li>
            <li>
              <strong>3.3 Business Transfers</strong>: If we undergo a merger,
              acquisition, or sale of all or part of our assets, your
              information may be transferred as part of the transaction. You
              will be notified via the App or email (if we have your contact
              information) of any such change in ownership or control of your
              information.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Data Security</h2>
          <ul>
            <li>
              Local calculation history is stored securely on your device.
            </li>
            <li>
              If you use cloud sync, data is encrypted in transit (via SSL/TLS)
              and at rest.
            </li>
            <li>
              We limit access to your information to authorized personnel only.
            </li>
          </ul>
          <p>
            Note: No method of data transmission or storage is 100% secure. We
            cannot guarantee absolute security, but we will update our security
            practices as new technologies become available.
          </p>
        </section>

        <section>
          <h2>5. Your Rights and Choices</h2>
          <p>
            Depending on your jurisdiction (e.g., EU under GDPR, California
            under CCPA), you may have the following rights regarding your
            Personal Information:
          </p>
          <ul>
            <li>
              <strong>5.1 Access and Correction</strong>: You may request access
              to the Personal Information we hold about you or ask to correct
              any inaccurate data.
            </li>
            <li>
              <strong>5.2 Deletion</strong>: You may request the deletion of
              your Personal Information (e.g., if you no longer use the App or
              withdraw consent). For locally stored calculation history, you can
              delete it directly via the App’s settings.
            </li>
            <li>
              <strong>5.3 Withdrawal of Consent</strong>: If you previously
              consented to the collection of Personal Information (e.g., cloud
              sync), you can withdraw consent at any time by disabling the
              feature in the App’s settings.
            </li>
            <li>
              <strong>5.4 How to Exercise Your Rights</strong>: To exercise any
              of the above rights, please contact us at
              <a href="mailto:gemini0525@foxmail.com">
                {" "}
                gemini0525@foxmail.com
              </a>
              . We will respond to your request within a reasonable timeframe as
              required by law.
            </li>
          </ul>
        </section>

        <section>
          <h2>6. Children’s Privacy</h2>
          <p>
            The App is not intended for use by children under the age of 13. We
            do not knowingly collect Personal Information from children under
            13. If we learn that we have collected Personal Information from a
            child under 13, we will immediately delete such information from our
            servers. If you are a parent or guardian and believe your child has
            provided us with Personal Information, please contact us at
            <a href="mailto:gemini0525@foxmail.com"> gemini0525@foxmail.com</a>
            to request deletion.
          </p>
        </section>

        <section>
          <h2>7. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices, legal requirements, or the App’s features.
            When we make updates:
          </p>
          <ul>
            <li>
              We will revise the "Last Updated" date at the top of this Policy.
            </li>
            <li>
              We will notify you via a pop-up in the App or email (if you
              provided your email address) at least 7 days before the updated
              Policy takes effect.
            </li>
          </ul>
          <p>
            Your continued use of the App after the updated Policy takes effect
            constitutes your acceptance of the changes. We encourage you to
            review this Policy periodically.
          </p>
        </section>

        <section>
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or the App’s data practices, please contact us at:
          </p>
          <p>
            Manon ·{" "}
            <a href="mailto:gemini0525@foxmail.com">gemini0525@foxmail.com</a>
          </p>
          <p>
            By using the Calculator App, you acknowledge that you have read and
            understood this Privacy Policy and agree to its terms.
          </p>
        </section>
      </article>
    </div>
  );
}
