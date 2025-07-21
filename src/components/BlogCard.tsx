import { Link } from "react-router-dom";
import { Calendar, User, Tag, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
  tags: string[];
}

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  if (featured) {
    return (
      <Card className="blog-card card-soft overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2 p-6">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                {post.category}
              </span>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <Link
                to={`/blog/${post.slug}`}
                className="btn-insurance text-sm px-4 py-2"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="blog-card card-soft overflow-hidden h-full">
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 hover:text-primary transition-colors">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          
          <Link
            to={`/blog/${post.slug}`}
            className="text-primary hover:text-primary-hover font-medium text-sm transition-colors"
          >
            Read More →
          </Link>
        </div>
        
        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-border">
            <Tag className="w-4 h-4 text-muted-foreground" />
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <Link
                  key={tag}
                  to={`/tag/${tag.toLowerCase().replace(' ', '-')}`}
                  className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default BlogCard;