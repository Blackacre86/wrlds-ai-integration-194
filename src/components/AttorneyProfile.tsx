
import { Badge } from '@/components/ui/badge';
import { useContentContext } from '@/components/ContentProvider';

const AttorneyProfile = () => {
  const { getContent } = useContentContext();
  const attorneyContent = getContent('attorney');

  return (
    <section id="attorney-profile" className="py-12 md:py-24 px-4 md:px-12 bg-white">
      <article itemScope itemType="https://schema.org/Attorney">
        <div className="container mx-auto max-w-6xl">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="mb-4">
              <Badge variant="outline" className="text-base px-4 py-2 border-black text-black bg-transparent">
                About Your Attorney
              </Badge>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black" itemProp="name">
              Meet Attorney {attorneyContent?.name || "Joe Brava"}
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              {attorneyContent?.description || "With over a decade of legal experience and a proven track record of success."}
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-black">Professional Background</h3>
              <div className="space-y-4 text-gray-800">
                <p className="leading-relaxed">
                  <strong>Former Prosecutor:</strong> {attorneyContent?.background?.prosecutor || "Served as an Assistant District Attorney, gaining invaluable insight into prosecution strategies and case development from the inside."}
                </p>
                <p className="leading-relaxed">
                  <strong>Trial Experience:</strong> {attorneyContent?.background?.experience || "Successfully handled over 1,000 criminal cases, from minor infractions to serious felonies."}
                </p>
                <p className="leading-relaxed">
                  <strong>Legal Education:</strong> {attorneyContent?.background?.education || "Graduated from Suffolk University Law School with honors."}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-black">Practice Philosophy</h3>
              <div className="space-y-4 text-gray-800">
                <p className="leading-relaxed">
                  "{attorneyContent?.philosophy?.quote || "Most defense attorneys immediately start defending against accusations. My approach is different. With my experience as a former prosecutor, I first think like an Assistant District Attorney (ADA) and build the strongest possible case against my client. Once I know exactly how the prosecution will try to prove their case, I can identify weaknesses and create powerful strategies for defense. This method, combined with cutting-edge technology and AI analysis, gives my clients an exceptional advantage in court."}"
                </p>
                <p className="leading-relaxed">
                  {attorneyContent?.philosophy?.approach || "My approach combines thorough case preparation, strategic thinking, and clear communication to ensure clients understand their options and feel confident in their defense."}
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </article>
    </section>
  );
};

export default AttorneyProfile;
