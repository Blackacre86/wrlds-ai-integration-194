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
          </div>

          
        </div>
        </div>
      </article>
    </section>;
};
export default AttorneyProfile;