
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Scale, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import BlogPostCard from '@/components/BlogPostCard';
import { blogPosts } from '@/data/blogPosts';

const Blog = () => {
  // Get the "What to Expect" guide for the featured post section (id '1')
  const featuredPost = blogPosts.find(post => post.id === '1') || blogPosts[0];
  // Get the rest of the blog posts for the grid section
  const otherPosts = blogPosts.filter(post => post.id !== featuredPost?.id);
  
  return (
    <PageLayout>
      <SEO 
        title="Legal Insights - Attorney Joe Brava" 
        description="Expert legal insights and guidance on criminal defense, domestic violence, and Massachusetts criminal law from former prosecutor Attorney Joe Brava."
        imageUrl={featuredPost?.imageUrl || "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop&sat=-100"}
        keywords={['legal insights', 'criminal defense', 'Massachusetts law', 'domestic violence defense', 'former prosecutor', 'legal blog']}
        type="website"
      />
      
      <div className="w-full pt-24 pb-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Scale className="h-12 w-12 text-white mr-4" />
              <Shield className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Legal Insights</h1>
            <p className="text-xl text-gray-300 mb-6">
              Expert guidance on criminal defense and Massachusetts law from a former prosecutor
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPost && (
            <Link to={`/blog/${featuredPost.slug}`} className="col-span-1 md:col-span-2 lg:col-span-3">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full border-2 border-gray-200 hover:border-black">
                <div className="grid md:grid-cols-2 h-full">
                  <div 
                    className="bg-cover bg-center h-64 md:h-full p-8 flex items-center justify-center bg-black"
                    style={{ 
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${featuredPost.imageUrl}')`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      filter: 'grayscale(100%)'
                    }}
                  >
                    <div className="text-white text-center">
                      <span className="px-4 py-2 bg-white text-black rounded-full text-sm font-bold inline-block mb-4">Featured Article</span>
                      <h3 className="text-2xl md:text-3xl font-bold">{featuredPost.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-8 bg-white">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-black text-white text-xs font-medium rounded-full">{featuredPost.category}</span>
                      <span className="text-gray-500 text-sm">{featuredPost.date}</span>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <Button variant="outline" className="group border-black text-black hover:bg-black hover:text-white">
                      Read Full Article 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </Link>
          )}
          
          {/* Other blog posts */}
          {otherPosts.map((post) => (
            <BlogPostCard 
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              imageUrl={post.imageUrl || 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop&sat=-100'}
              date={post.date}
              slug={post.slug}
              category={post.category}
            />
          ))}
          
          {/* If there are fewer than 4 published posts, add placeholders */}
          {blogPosts.length < 5 && Array.from({ length: Math.max(0, 5 - blogPosts.length) }).map((_, index) => (
            <Card key={`placeholder-${index}`} className="overflow-hidden border-2 border-gray-200">
              <div 
                className="h-48 bg-black flex items-center justify-center"
              >
                <div className="text-white text-center">
                  <Scale className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <h3 className="text-lg font-medium opacity-75">Coming Soon</h3>
                </div>
              </div>
              <CardContent className="p-6 bg-white">
                <span className="px-3 py-1 bg-gray-200 text-gray-600 text-xs font-medium rounded-full inline-block mb-3">Upcoming</span>
                <h3 className="text-lg font-semibold mb-2 text-black">New Legal Insights</h3>
                <p className="text-gray-600 text-sm">
                  Stay tuned for more expert legal guidance and insights from Attorney Joe Brava.
                </p>
                <p className="text-gray-400 text-xs mt-4">Coming soon</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;
