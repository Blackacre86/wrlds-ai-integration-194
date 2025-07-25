
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  slug: string;
  category: string;
}

const BlogPostCard = ({
  title,
  excerpt,
  imageUrl,
  slug,
  category
}: BlogPostCardProps) => {
  return (
    <Link to={`/blog/${slug}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
        <div className="grid grid-rows-[200px,1fr]">
          <div
            className="bg-cover bg-center grayscale"
            style={{ backgroundImage: `url('${imageUrl}')` }}
          />
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
            <p className="text-gray-700 mb-4 line-clamp-3">{excerpt}</p>
            <Button variant="outline" className="group mt-auto">
              Read more 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
};

export default BlogPostCard;
