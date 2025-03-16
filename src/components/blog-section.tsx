import { getAllPosts } from '@/lib/mdx';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { BlogCard } from './blog-card';
import SectionContainer from './section-container';
import SectionHeading from './section-heading';
import { Button } from './shared/button';

const MAX_NUMBER_BLOGS_TO_SHOW = 3;

export default function BlogSection() {
  const posts = getAllPosts().slice(0, MAX_NUMBER_BLOGS_TO_SHOW);

  return (
    <SectionContainer sectionName={'Blog'} className="space-y-8">
      <SectionHeading dataTestId="blog-heading my-0">
        <Link href="/blog" className="inline-flex flex-row underline-offset-8 hover:underline">
          Blog
          <ExternalLink className="ml-1 h-4 w-4" />
        </Link>
      </SectionHeading>

      <div className="max-w-2xl space-y-8 text-left">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      <Button variant={'outline'} asChild>
        <Link href="/blog">
          View all posts
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </Button>
    </SectionContainer>
  );
}
