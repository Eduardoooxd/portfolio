import PageContainer from '@/components/page-containter';
import SectionContainer from '@/components/section-container';
import { Badge } from '@/components/shared/badge';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import { CustomMDX } from '@/mdx-components';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const generateStaticParams = () => {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
};

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = getPostBySlug(params.slug);
  if (!post)
    return { title: 'Post Not Found', description: 'The post you are looking for does not exist' };

  return {
    title: `${post.meta.title}`,
    description: post.meta.description,
  };
};

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { content, meta } = post;
  const { title, date, tags } = meta;

  return (
    <PageContainer className="items-start justify-start sm:items-center sm:pt-24">
      <SectionContainer
        singlePage
        useInViewThreshold={1}
        sectionName={'Blog'}
        className="w-full space-y-4 text-left"
      >
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-zinc-500 transition-colors hover:text-inherit dark:text-zinc-400 hover:dark:text-zinc-200"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all posts
        </Link>

        <article className="space-y-4">
          <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h1>

          <div className="flex flex-row items-center gap-x-4">
            <time className="block text-sm text-zinc-500 dark:text-zinc-400">{date}</time>

            <ul className="flex flex-row items-center gap-2">
              {tags?.length > 0
                ? tags?.map((tag, index) => {
                    return <Badge key={index}>{tag}</Badge>;
                  })
                : null}
            </ul>
          </div>

          <CustomMDX source={content} />
        </article>
      </SectionContainer>
    </PageContainer>
  );
}
