import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { id } = useParams();

  // In a real app, you'd fetch this data based on the ID
  const post = {
    id: 1,
    title: "Building Scalable React Applications",
    content: `
# Building Scalable React Applications

When building React applications that need to scale, there are several key principles and patterns you should follow to ensure your codebase remains maintainable and performant as it grows.

## 1. Component Structure and Organization

The foundation of any scalable React application is a well-organized component structure. Here are some best practices:

### Atomic Design Principles
- **Atoms**: Basic building blocks (buttons, inputs, labels)
- **Molecules**: Simple groups of atoms (search form, navigation item)
- **Organisms**: Complex UI components (header, product grid)
- **Templates**: Page-level objects that place components into a layout
- **Pages**: Specific instances of templates with real content

### Folder Structure
\`\`\`
src/
  components/
    ui/           # Reusable UI components
    layout/       # Layout components
    forms/        # Form-specific components
  pages/          # Page components
  hooks/          # Custom hooks
  utils/          # Utility functions
  contexts/       # Context providers
  types/          # TypeScript type definitions
\`\`\`

## 2. State Management

As your application grows, local component state isn't always sufficient. Consider these approaches:

### When to Use Different State Solutions
- **Local State**: Component-specific data that doesn't need to be shared
- **Context API**: When you need to avoid prop drilling for related components
- **External State Libraries**: For complex applications with lots of shared state

### Code Example
\`\`\`jsx
// Custom hook for data fetching
const useUserData = (userId) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await api.getUser(userId);
        setUser(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  return { user, loading, error };
};
\`\`\`

## 3. Performance Optimization

Performance becomes crucial as your app scales:

### Lazy Loading
Use React.lazy() and Suspense for code splitting:

\`\`\`jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

### Memoization
Use React.memo, useMemo, and useCallback strategically:

\`\`\`jsx
const ExpensiveComponent = React.memo(({ data, onItemClick }) => {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      processed: expensiveProcessing(item)
    }));
  }, [data]);

  const handleClick = useCallback((id) => {
    onItemClick(id);
  }, [onItemClick]);

  return (
    <div>
      {processedData.map(item => (
        <Item 
          key={item.id} 
          data={item} 
          onClick={handleClick}
        />
      ))}
    </div>
  );
});
\`\`\`

## 4. Testing Strategy

A robust testing strategy is essential for scalable applications:

### Testing Pyramid
- **Unit Tests**: Test individual components and functions
- **Integration Tests**: Test component interactions
- **E2E Tests**: Test complete user workflows

### Example Test
\`\`\`jsx
import { render, screen, fireEvent } from '@testing-library/react';
import UserCard from './UserCard';

test('displays user information correctly', () => {
  const user = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com'
  };

  render(<UserCard user={user} />);
  
  expect(screen.getByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('john@example.com')).toBeInTheDocument();
});
\`\`\`

## 5. Error Handling

Implement comprehensive error handling:

\`\`\`jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Log to error reporting service
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}
\`\`\`

## Conclusion

Building scalable React applications requires careful planning and adherence to best practices. Focus on component organization, state management, performance optimization, testing, and error handling from the beginning of your project.

Remember that scalability isn't just about handling more users—it's also about making your codebase maintainable and extensible as your team and feature set grows.
    `,
    category: "React",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "JavaScript", "Best Practices", "Scalability"],
    author: "Harrison Muchiri Njogu"
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: "Check out this article",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline">{post.category}</Badge>
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formatDate(post.date)}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </header>

        {/* Article Content */}
        <Card>
          <CardContent className="p-8">
            <div 
              className="prose prose-gray max-w-none"
              style={{ 
                lineHeight: '1.8',
                fontSize: '16px'
              }}
            >
              <div className="whitespace-pre-wrap">{post.content}</div>
            </div>
          </CardContent>
        </Card>

        {/* Author Info */}
        <Card className="mt-12">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold text-lg">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{post.author}</h3>
                <p className="text-muted-foreground text-sm">
                  Full-Stack Developer & Technology Enthusiast
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Posts CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Enjoyed this article?
          </h3>
          <p className="text-muted-foreground mb-6">
            Check out more articles on my blog or get in touch to discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/blog">Read More Articles</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;