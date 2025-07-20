import { Badge } from '@/components/ui/badge';

const AttorneyProfile = () => {
  return (
    <section id="attorney-profile" className="py-12 md:py-24 px-4 md:px-12 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start">
          <div className="lg:w-1/3">
            <div className="relative">
              <img
                src="/lovable-uploads/92cc4676-3f43-4a6e-9bbe-1cb528cc4386.png"
                alt="Attorney Joe Brava"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="mb-6">
              <div className="mb-4">
                <Badge variant="outline" className="text-base px-4 py-2 border-black text-black bg-transparent">
                  About Your Attorney
                </Badge>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Meet Attorney Joe Brava</h2>
              <p className="text-gray-800 text-lg leading-relaxed mb-6">
                With over a decade of legal experience and a proven track record of success, 
                Attorney Joe Brava brings strategic thinking and tenacious advocacy to every case.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-black">Professional Background</h3>
                <div className="space-y-4 text-gray-800">
                  <p className="leading-relaxed">
                    <strong>Former Prosecutor:</strong> Served as an Assistant District Attorney, gaining invaluable insight 
                    into prosecution strategies and case development from the inside.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Trial Experience:</strong> Successfully handled over 1,000 criminal cases, from minor infractions 
                    to serious felonies, with a focus on achieving the best possible outcomes for clients.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Legal Education:</strong> Graduated from Suffolk University Law School with honors and 
                    maintains active membership in the Massachusetts Bar Association.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-black">Practice Philosophy</h3>
                <div className="space-y-4 text-gray-800">
                  <p className="leading-relaxed">
                    "Every client deserves aggressive representation and personalized attention. I believe in fighting 
                    hard for my clients while maintaining the highest ethical standards."
                  </p>
                  <p className="leading-relaxed">
                    My approach combines thorough case preparation, strategic thinking, and clear communication 
                    to ensure clients understand their options and feel confident in their defense.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttorneyProfile;
