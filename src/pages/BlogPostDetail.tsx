
import { useParams } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import EnhancedBlogContent from '@/components/EnhancedBlogContent';
import BlogProgressTracker from '@/components/BlogProgressTracker';
import ExpandableContentSection from '@/components/ExpandableContentSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const BlogPostDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return <PageLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </PageLayout>;
  }

  // Define the process steps for progress tracking
  const processSteps = [
    'Arrest or Summons',
    'Clerk Magistrate Hearing',
    'Arraignment',
    'Pretrial Proceedings',
    'Trial or Plea',
    'Verdict & Sentencing'
  ];

  // Group content into expandable sections for the criminal charges guide
  const isGuidePost = post.slug === 'what-to-expect-criminal-charges-guide';
  
  const groupContentIntoSections = (content: typeof post.content) => {
    if (!isGuidePost) return null;
    
    const sections = [];
    let currentSection: any = null;
    
    content.forEach((item, index) => {
      if (item.type === 'heading' && item.content?.startsWith('Step')) {
        // Save previous section
        if (currentSection) {
          sections.push(currentSection);
        }
        
        // Start new section
        const stepMatch = item.content.match(/Step (\d+)/);
        const stepNumber = stepMatch ? parseInt(stepMatch[1]) : null;
        
        currentSection = {
          title: item.content,
          stepNumber,
          content: []
        };
      } else if (currentSection) {
        currentSection.content.push(item);
      } else {
        // Content before first step
        sections.push({
          title: 'Overview',
          content: [item],
          isOverview: true
        });
      }
    });
    
    // Add last section
    if (currentSection) {
      sections.push(currentSection);
    }
    
    return sections;
  };

  const contentSections = groupContentIntoSections(post.content);

  // Format the date for display
  const formatPostDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return 'Recent';
      }
      return format(date, 'MMMM d, yyyy');
    } catch (error) {
      return 'Recent';
    }
  };

  // Get valid ISO date for SEO
  const getValidISODate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return undefined;
      }
      return date.toISOString();
    } catch (error) {
      return undefined;
    }
  };

  return (
    <PageLayout>
      <SEO 
        title={`${post.title} - WRLDS`} 
        description={post.metaDescription || post.excerpt} 
        imageUrl={post.imageUrl} 
        keywords={post.keywords} 
        isBlogPost={true} 
        publishDate={getValidISODate(post.date)}
        author={post.author} 
        category={post.category} 
        type="article" 
      />
      
      <article className="w-full pt-16 pb-16">
        {/* Hero Section */}
        <div className="banner-container h-96 sm:h-[450px] md:h-[500px] lg:h-[550px] relative">
          {post.imageUrl && (
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="absolute inset-0 w-full h-full object-cover filter grayscale" 
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
          
          <div className="banner-overlay">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center justify-start md:justify-center">
              <div className="w-full max-w-4xl mx-auto text-left md:text-center">
                <Link to="/blog" className="inline-flex items-center text-gray-300 hover:text-white mb-4 transition-colors text-sm">
                  <ArrowLeft className="mr-2 h-3 w-3" />
                  Back to Blog
                </Link>
                
                <h1 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight break-words max-w-full">
                  {post.title}
                </h1>
                
                <div className="flex flex-col gap-3 text-gray-300 mb-4 sm:mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start md:justify-center gap-2 sm:gap-6">
                    <div className="flex items-center text-xs sm:text-base">
                      <Calendar className="mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span>{formatPostDate(post.date)}</span>
                    </div>
                    <div className="flex items-center text-xs sm:text-base">
                      <User className="mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-200 text-sm sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Progress Tracker - Hidden on mobile, shown on larger screens */}
              {isGuidePost && (
                <div className="hidden lg:block lg:col-span-1">
                  <BlogProgressTracker steps={processSteps} />
                </div>
              )}
              
              {/* Main Content */}
              <div className={isGuidePost ? 'lg:col-span-3' : 'lg:col-span-4'}>
                {contentSections && isGuidePost ? (
                  <div className="space-y-6">
                    {contentSections.map((section, index) => (
                      <ExpandableContentSection
                        key={index}
                        title={section.title}
                        content={section.content}
                        stepNumber={section.stepNumber}
                        defaultOpen={section.isOverview || index === 0}
                      />
                    ))}
                  </div>
                ) : (
                  <EnhancedBlogContent content={post.content} />
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  );
};

export default BlogPostDetail;
