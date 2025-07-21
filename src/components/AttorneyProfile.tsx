import { Badge } from '@/components/ui/badge';
import { useContentContext } from '@/components/ContentProvider';
const AttorneyProfile = () => {
  const {
    getContent
  } = useContentContext();
  const attorneyContent = getContent('attorney');
  return <section id="attorney-profile" className="py-12 md:py-24 px-4 md:px-12 bg-white">
      <article itemScope itemType="https://schema.org/Attorney">
        <div className="container mx-auto max-w-6xl">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black" itemProp="name">
              Meet Attorney {attorneyContent?.name || "Joe Brava"}
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              {attorneyContent?.description || "With 8+ years of legal experience"}
            </p>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                I studied American government at Suffolk University and got my start at the Massachusetts State House as a legislative aide. From there, I moved into political consulting, working on campaigns across New England on everything from local races to statewide campaigns. After graduating from Massachusetts School of Law in 2016, I joined the Berkshire District Attorney's Office, where I spent five years prosecuting cases and eventually became the district court domestic violence supervisor.
              </p>
              
              <p>
                In 2022, I switched sides and joined Barry & Kinzer, LLP, where I focused on criminal defense and family law. By 2023, I was ready to build something of my own, so I started Summit Law.
              </p>
              
              <p>
                Summit Law isn't like other firms. I built it from the ground up to run lean, efficient, and without all the unnecessary overhead. I leverage technology to cut through the traditional noise of the criminal justice system and deliver high-level representation at a fair price. Bottom line: I know how to get things done, and that's exactly what I do.
              </p>
            </div>
          </div>

          
        </div>
        </div>
      </article>
    </section>;
};
export default AttorneyProfile;