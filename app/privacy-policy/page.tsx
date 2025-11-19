export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last Updated: November 11, 2025</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Thrive In Harmony, LLC ("we," "us," or "our") respects your privacy and is committed to protecting your
              personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website carleyschroeder.com or use our services.
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-semibold text-foreground mb-2">Business Information:</p>
              <p className="text-foreground/80">Legal Name: Thrive In Harmony, LLC</p>
              <p className="text-foreground/80">Address: 15-2698 Moano St, Pahoa, HI 96778</p>
              <p className="text-foreground/80">Contact: carley@carleyschroeder.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">Information You Provide to Us</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We collect information that you voluntarily provide when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
              <li>Complete quizzes or assessments</li>
              <li>Sign up for our email list</li>
              <li>Download free resources (PDFs, guides, masterclasses)</li>
              <li>Purchase our coaching program</li>
              <li>Communicate with us via email or messaging</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-4">This may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Name and email address</li>
              <li>Payment information (processed securely through Stripe)</li>
              <li>Quiz responses and assessment answers</li>
              <li>Health and wellness information you share during coaching</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Information Automatically Collected</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              When you visit our website, we automatically collect certain information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Cookie data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Provide and deliver our services</li>
              <li>Process payments and send transaction confirmations</li>
              <li>Send you program materials and resources</li>
              <li>Communicate with you about your coaching program</li>
              <li>Send marketing emails (you can opt-out at any time)</li>
              <li>Improve our website and services</li>
              <li>Analyze usage patterns and trends</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraud and unauthorized access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Legal Basis for Processing (GDPR)</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              If you are located in the European Economic Area (EEA), our legal basis for collecting and using your
              information depends on the specific information and context:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>
                <strong>Contract Performance:</strong> To provide services you've purchased
              </li>
              <li>
                <strong>Consent:</strong> For marketing communications (you can withdraw consent anytime)
              </li>
              <li>
                <strong>Legitimate Interests:</strong> To improve our services and prevent fraud
              </li>
              <li>
                <strong>Legal Obligation:</strong> To comply with applicable laws
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. How We Share Your Information</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We DO NOT sell your personal information. We may share your information with:
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">Service Providers</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
              <li>Kit (formerly ConvertKit): Email marketing platform</li>
              <li>Stripe/Paperbell: Payment processing</li>
              <li>Google Analytics: Website analytics</li>
              <li>Meta (Facebook/Instagram): Advertising and tracking pixels</li>
              <li>Hosting providers: Website and data storage</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-4">
              These service providers are contractually obligated to protect your information and use it only for the
              purposes we specify.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">Legal Requirements</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We may disclose your information if required by law, court order, or governmental regulation, or if we
              believe disclosure is necessary to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Comply with legal process</li>
              <li>Enforce our Terms of Service</li>
              <li>Protect our rights, property, or safety</li>
              <li>Protect the rights, property, or safety of others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Cookies and Tracking Technologies</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
              <li>Remember your preferences</li>
              <li>Understand how you use our website</li>
              <li>Improve user experience</li>
              <li>Deliver targeted advertising</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Types of Cookies We Use:</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>
                <strong>Essential Cookies:</strong> Required for website functionality
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Google Analytics to understand usage patterns
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Meta Pixel for advertising purposes
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your Privacy Rights</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Depending on your location, you may have the following rights:
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">All Users</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
              <li>
                <strong>Access:</strong> Request a copy of your personal information
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your information
              </li>
              <li>
                <strong>Opt-Out:</strong> Unsubscribe from marketing emails
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">EEA Residents (GDPR Rights)</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
              <li>
                <strong>Data Portability:</strong> Receive your data in a portable format
              </li>
              <li>
                <strong>Restrict Processing:</strong> Limit how we use your information
              </li>
              <li>
                <strong>Object:</strong> Object to processing based on legitimate interests
              </li>
              <li>
                <strong>Withdraw Consent:</strong> Withdraw consent for marketing at any time
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">California Residents (CCPA Rights)</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
              <li>Right to know what personal information is collected</li>
              <li>Right to know if personal information is sold or disclosed</li>
              <li>Right to opt-out of the sale of personal information (we do not sell data)</li>
              <li>Right to deletion</li>
              <li>Right to non-discrimination for exercising privacy rights</li>
            </ul>

            <p className="text-foreground/80 leading-relaxed">
              To exercise these rights, contact us at carley@carleyschroeder.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Data Security</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We implement reasonable security measures to protect your information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
              <li>Secure SSL encryption for data transmission</li>
              <li>Secure payment processing through Stripe</li>
              <li>Limited access to personal information</li>
              <li>Regular security assessments</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed">
              However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or wish to exercise your privacy rights, contact us at:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-foreground/80">Email: carley@carleyschroeder.com</p>
              <p className="text-foreground/80">Address: Thrive In Harmony, LLC, 15-2698 Moano St, Pahoa, HI 96778</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
