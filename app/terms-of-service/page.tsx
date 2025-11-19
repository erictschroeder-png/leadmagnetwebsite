export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last Updated: November 11, 2025</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              By accessing or using the services of Thrive In Harmony, LLC ("we," "us," or "our"), including
              carleyschroeder.com, you agree to be bound by these Terms of Service. If you do not agree to these terms,
              please do not use our services.
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-semibold text-foreground mb-2">Business Information:</p>
              <p className="text-foreground/80">Legal Name: Thrive In Harmony, LLC</p>
              <p className="text-foreground/80">Address: 15-2698 Moano St, Pahoa, HI 96778</p>
              <p className="text-foreground/80">Contact: carley@carleyschroeder.com</p>
              <p className="text-foreground/80">Website: carleyschroeder.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services Offered</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We provide nutrition and wellness coaching services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Educational quizzes and assessments</li>
              <li>Digital products (PDFs, guides, masterclasses)</li>
              <li>
                5-month coaching program including:
                <ul className="list-circle pl-6 mt-2 space-y-1">
                  <li>Unlimited messaging support</li>
                  <li>Group and private coaching calls</li>
                  <li>Custom nutrition framework</li>
                  <li>Nervous system regulation tools</li>
                  <li>Cycle-synced movement guide</li>
                  <li>Mindset and identity work</li>
                  <li>Lifetime access to course materials</li>
                  <li>Private client portal access</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Payment Terms</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">Pricing and Payment</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
              <li>All prices are listed in USD</li>
              <li>Payment is processed through Paperbell using Stripe integration</li>
              <li>Payment is required in full or according to the payment plan selected at enrollment</li>
              <li>Failure to make payments may result in suspension of services</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Payment Plans</h3>
            <p className="text-foreground/80 leading-relaxed mb-2">If you select a payment plan option:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>You agree to make payments on the schedule provided at enrollment</li>
              <li>Missed payments may result in loss of access to program materials and coaching support</li>
              <li>Payment plans must be completed within the program duration</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. 30-Day Money-Back Guarantee</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We offer a 30-Day Money-Back Promise for our coaching program:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
              <li>
                If you don't feel a significant shift in your relationship with food and your body within the first 30
                days, we will refund your payment in full
              </li>
              <li>To request a refund, email carley@carleyschroeder.com within 30 days of purchase</li>
              <li>Refunds are processed within 7-10 business days</li>
              <li>
                This guarantee applies only to the coaching program, not to individual digital products or masterclasses
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">After 30 Days</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Refunds are not available after the 30-day period</li>
              <li>In cases of extenuating circumstances, refund requests may be reviewed on a case-by-case basis</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              All content, materials, and resources provided through our services are protected by copyright and are the
              intellectual property of Thrive In Harmony, LLC.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">You may NOT:</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
              <li>Reproduce, distribute, or share program materials with others</li>
              <li>Use materials for commercial purposes</li>
              <li>Claim authorship of our content</li>
              <li>Record or distribute private or group coaching calls without written permission</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">You may:</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Use materials for your personal growth and implementation</li>
              <li>Take notes during coaching calls for personal use</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Disclaimer of Warranties</h2>
            <p className="text-foreground/80 leading-relaxed font-semibold">
              OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT GUARANTEE
              SPECIFIC RESULTS OR OUTCOMES.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
            <p className="text-foreground/80 leading-relaxed font-semibold">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, THRIVE IN HARMONY, LLC SHALL NOT BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF OUR SERVICES.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Governing Law</h2>
            <p className="text-foreground/80 leading-relaxed">
              These Terms are governed by the laws of the State of Hawaii, without regard to conflict of law principles.
              Any disputes shall be resolved in the courts of Hawaii County, Hawaii.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Information</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              For questions about these Terms of Service, contact us at:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-foreground/80">Email: carley@carleyschroeder.com</p>
              <p className="text-foreground/80">Address: 15-2698 Moano St, Pahoa, HI 96778</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
