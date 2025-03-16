import { Post } from '@/lib/mdx';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Badge } from './shared/badge';

export function BlogCard({ post }: { post: Post }) {
  const { title, date, tags, description, readingTime } = post.meta;

  return (
    <article className="group relative">
      <Link href={`/blog/${post.slug}`}>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 transition-colors group-hover:underline dark:text-gray-100">
            {title}
          </h2>

          <div className="flex items-center gap-x-2 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={date}>{date}</time>
            <span>•</span>
            <span>{readingTime} read</span>
          </div>

          <ul className="flex flex-row items-center gap-2">
            {tags?.length > 0
              ? tags?.map((tag, index) => {
                  return (
                    <Badge variant="outline" key={index}>
                      {tag}
                    </Badge>
                  );
                })
              : null}
          </ul>

          <p className="line-clamp-4 leading-relaxed text-gray-500 dark:text-gray-300">
            {description}
          </p>

          <span className="bold inline-flex items-center gap-2">
            Read more
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </article>
  );
}
