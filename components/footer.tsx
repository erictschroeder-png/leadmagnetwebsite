export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-white font-semibold mb-2 md:mb-3 text-sm md:text-base">Contact</h3>
            <p className="text-xs md:text-sm">
              Email:{" "}
              <a
                href="mailto:carley@carleyschroeder.com"
                className="text-rose-400 hover:text-rose-300 transition-colors"
              >
                carley@carleyschroeder.com
              </a>
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-2 md:mb-3 text-sm md:text-base">Legal</h3>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <li>
                <a href="/privacy-policy" className="text-rose-400 hover:text-rose-300 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-rose-400 hover:text-rose-300 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="text-rose-400 hover:text-rose-300 transition-colors">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6 md:pt-8">
          <p className="text-xs md:text-sm text-center mb-3 md:mb-4">
            © {new Date().getFullYear()} Thrive In Harmony, LLC. All rights reserved.
          </p>

          <p className="text-xs text-slate-400 text-center max-w-4xl mx-auto leading-relaxed">
            Disclaimer: The information provided on this website is for educational purposes only and is not intended as
            medical advice. Results may vary. Individual results depend on many factors including commitment to the
            program, individual health conditions, and lifestyle factors. Please consult with your healthcare provider
            before beginning any new health or nutrition program.
          </p>
        </div>
      </div>
    </footer>
  )
}
