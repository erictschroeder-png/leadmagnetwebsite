export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">Legal Disclaimer</h1>
        <p className="text-muted-foreground mb-8">Last Updated: November 11, 2025</p>

        <div className="bg-rose-50 border-l-4 border-rose-400 p-6 mb-8">
          <h2 className="text-xl font-bold text-foreground mb-2">Important Notice</h2>
          <p className="text-foreground/80 leading-relaxed">
            Please read this disclaimer carefully before using the services of Thrive In Harmony, LLC. By accessing our
            website, participating in our programs, or using any of our services, you acknowledge that you have read,
            understood, and agree to this disclaimer.
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8">
          <div className="bg-muted p-4 rounded-lg mb-8">
            <p className="font-semibold text-foreground mb-2">Business Information:</p>
            <p className="text-foreground/80">Legal Name: Thrive In Harmony, LLC</p>
            <p className="text-foreground/80">Address: 15-2698 Moano St, Pahoa, HI 96778</p>
            <p className="text-foreground/80">Contact: carley@carleyschroeder.com</p>
            <p className="text-foreground/80">Website: carleyschroeder.com</p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Not Medical, Nutritional, or Mental Health Advice
            </h2>

            <h3 className="text-xl font-semibold text-foreground mb-3">Professional Credentials</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Carley Schroeder and Thrive In Harmony, LLC provide coaching, educational content, and wellness guidance.
              We are not licensed medical doctors, registered dietitians, licensed nutritionists, psychologists,
              psychiatrists, or licensed mental health professionals.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">Not a Substitute for Medical Care</h3>
            <div className="bg-rose-50 border border-rose-200 p-4 rounded-lg mb-4">
              <p className="font-semibold text-foreground mb-2">
                IMPORTANT: Our services, programs, content, and recommendations are NOT intended to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Diagnose, treat, cure, or prevent any disease or medical condition</li>
                <li>Replace professional medical advice, diagnosis, or treatment</li>
                <li>Serve as a substitute for care from licensed healthcare providers</li>
                <li>Provide nutritional therapy or medical nutrition therapy</li>
                <li>Offer psychotherapy or mental health treatment</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">Consult Your Healthcare Provider</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              You should always consult with your physician or other qualified healthcare provider before:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
              <li>Starting any nutrition or wellness program</li>
              <li>Making changes to your diet or exercise routine</li>
              <li>Taking or discontinuing any medications or supplements</li>
              <li>Making any health-related decisions</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed font-semibold">
              Never disregard professional medical advice or delay seeking it because of information you received from
              us.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">When to Seek Emergency Care</h3>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
              <p className="text-foreground/80 leading-relaxed mb-2">
                If you are experiencing a medical emergency, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>Suicidal thoughts or self-harm urges</li>
                <li>Severe eating disorder symptoms</li>
                <li>Medical crisis or emergency</li>
                <li>Symptoms requiring immediate medical attention</li>
              </ul>
              <p className="text-foreground font-bold">
                CALL 911 or go to your nearest emergency room immediately. Our services are not equipped to handle
                medical emergencies.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Scope of Services</h2>

            <h3 className="text-xl font-semibold text-foreground mb-3">What We Provide</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
              <li>Educational coaching on nutrition and wellness principles</li>
              <li>Guidance on building healthier relationships with food</li>
              <li>Support for sustainable lifestyle changes</li>
              <li>Mindset and personal development coaching</li>
              <li>Movement and wellness education</li>
              <li>Community support and accountability</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">What We Do NOT Provide</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Medical diagnosis or treatment</li>
              <li>Meal plans for medical conditions (diabetes, heart disease, etc.)</li>
              <li>Treatment for eating disorders (anorexia, bulimia, binge eating disorder)</li>
              <li>Prescription or medical advice about medications or supplements</li>
              <li>Psychotherapy or mental health treatment</li>
              <li>Weight loss guarantees or specific outcome promises</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. No Guaranteed Results</h2>

            <h3 className="text-xl font-semibold text-foreground mb-3">Individual Results Vary</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Every person is unique. Your results will depend on numerous factors including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
              <li>Your current health status</li>
              <li>Your commitment and effort</li>
              <li>Your individual circumstances</li>
              <li>Genetics and metabolism</li>
              <li>Pre-existing medical conditions</li>
              <li>Lifestyle factors</li>
              <li>Compliance with program recommendations</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">No Promises of Specific Outcomes</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We do not guarantee, promise, or imply that you will:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
              <li>Lose any specific amount of weight</li>
              <li>Achieve specific health outcomes</li>
              <li>Experience particular results</li>
              <li>Have the same results as other clients or testimonials</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed italic">
              Any testimonials, case studies, or client stories represent individual experiences and are not guarantees
              of your results.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Your Responsibility</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              By using our services, you acknowledge and agree that:
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">Personal Responsibility</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
              <li>You are solely responsible for your health and wellness decisions</li>
              <li>You will consult with appropriate healthcare professionals as needed</li>
              <li>
                You will disclose any medical conditions, medications, or health concerns that may affect your
                participation
              </li>
              <li>You understand the risks of making lifestyle changes without medical supervision</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Following Professional Advice</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>You will prioritize advice from your licensed healthcare providers over our coaching guidance</li>
              <li>You will not implement recommendations that contradict your doctor's orders</li>
              <li>You will seek medical attention when appropriate</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitation of Liability</h2>
            <div className="bg-muted p-6 rounded-lg">
              <p className="text-foreground/80 leading-relaxed font-semibold mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, YOU AGREE TO RELEASE AND HOLD HARMLESS THRIVE IN HARMONY, LLC,
                CARLEY SCHROEDER, AND ALL AFFILIATES FROM ANY AND ALL LIABILITY, CLAIMS, DEMANDS, OR DAMAGES (ACTUAL OR
                CONSEQUENTIAL) OF EVERY KIND AND NATURE, KNOWN AND UNKNOWN, ARISING FROM OR RELATED TO:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Your participation in our programs or use of our services</li>
                <li>Your implementation of any recommendations or guidance</li>
                <li>Any injuries, health issues, or adverse effects</li>
                <li>Any financial losses or other damages</li>
                <li>Any disputes with other program participants</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Contact Information</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              If you have questions about this disclaimer or whether our services are appropriate for you, please
              contact us BEFORE enrolling:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-foreground/80">Email: carley@carleyschroeder.com</p>
              <p className="text-foreground/80">Address: Thrive In Harmony, LLC, 15-2698 Moano St, Pahoa, HI 96778</p>
            </div>
          </section>

          <section className="bg-rose-50 border-2 border-rose-400 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Acknowledgment and Acceptance</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              By proceeding to use our services, you confirm that you have read, understood, and agree to be bound by
              this Legal Disclaimer along with our Terms of Service and Privacy Policy.
            </p>
            <div className="space-y-2">
              <p className="text-foreground/80">✓ You have read and understood this entire disclaimer</p>
              <p className="text-foreground/80">✓ You agree to all terms and conditions stated herein</p>
              <p className="text-foreground/80">✓ You understand that our services are not medical care</p>
              <p className="text-foreground/80">✓ You will consult with healthcare providers as needed</p>
              <p className="text-foreground/80">✓ You assume all risks associated with participation</p>
              <p className="text-foreground/80">✓ You release us from liability as described above</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
