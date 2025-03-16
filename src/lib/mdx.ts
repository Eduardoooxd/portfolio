import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export type Post = {
  meta: {
    title: string;
    description: string;
    date: string;
    tags: string[];
    readingTime: string;
    published: boolean;
  };
  slug: string;
  content: string;
};

const POSTS_DIRECTORY = path.join(process.cwd(), 'content', 'blog');
const MDX_FILE_EXTENSION = '.mdx';

export function getPostBySlug(slug: string): Post | null {
  try {
    const fileName = `${slug}${MDX_FILE_EXTENSION}`;
    const fullPath = path.join(POSTS_DIRECTORY, fileName);
    const fileContent = fs.readFileSync(fullPath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
      slug,
      meta: {
        title: data.title,
        description: data.description,
        date: data.date.toString(),
        tags: data.tags ?? [],
        readingTime: data.readingTime ?? '10 min',
        published: data.published ?? false,
      },
      content,
    };
  } catch (e) {
    console.error(
      `operation=getPostBySlug, msg='Error while trying to get post by slug', slug=${slug}, exception=${e}`,
    );

    return null;
  }
}

export function getAllPosts(): Post[] {
  try {
    const fileNames = fs.readdirSync(POSTS_DIRECTORY);

    const posts = fileNames
      .filter((file) => file.endsWith(MDX_FILE_EXTENSION))
      .map((fileName) => {
        const slug = fileName.replace(MDX_FILE_EXTENSION, '');
        return getPostBySlug(slug);
      })
      .filter((post) => post !== null)
      .filter((post) => post.meta.published === true);

    return posts.sort((a, b) => {
      const dateA = new Date(a.meta.date).getTime();
      const dateB = new Date(b.meta.date).getTime();
      return dateB - dateA;
    });
  } catch (e) {
    console.error(
      `operation=getAllPosts, msg='Error while trying to get all posts', exception=${e}`,
    );
    return [];
  }
}
