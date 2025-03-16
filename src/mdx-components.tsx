import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import { memo, Suspense } from 'react';
import { highlight } from 'sugar-high';
import { cn } from './lib/utils';

const Code = memo(function Code({ children, ...props }: React.HTMLAttributes<HTMLElement>) {
  const codeHTML = highlight(children as string);
  return (
    <code
      className="break-words bg-zinc-50 dark:bg-zinc-900"
      dangerouslySetInnerHTML={{ __html: codeHTML }}
      {...props}
    />
  );
});

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        'mt-8 scroll-m-20 break-words text-3xl font-bold tracking-tight sm:text-4xl',
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        'mt-10 scroll-m-20 break-words border-b pb-1 text-2xl font-semibold tracking-tight first:mt-0 sm:text-3xl',
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        'mt-8 scroll-m-20 break-words text-xl font-semibold tracking-tight sm:text-2xl',
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        'mt-8 scroll-m-20 break-words text-lg font-semibold tracking-tight sm:text-xl',
        className,
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        'mt-8 scroll-m-20 break-words text-base font-semibold tracking-tight sm:text-lg',
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        'mt-8 scroll-m-20 break-words text-sm font-semibold tracking-tight sm:text-base',
        className,
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn(
        'break-words font-medium text-primary underline underline-offset-4 transition-colors hover:text-blue-700',
        className,
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn('break-words leading-7 [&:not(:first-child)]:mt-6', className)} {...props} />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn('my-6 ml-6 list-disc space-y-2 break-words', className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn('my-6 ml-6 list-decimal space-y-2 break-words', className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn('mt-2 break-words', className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className={cn('mt-6 break-words border-l-2 pl-6 italic', className)} {...props} />
  ),
  hr: ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className={cn('my-4 md:my-8', className)} {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className={cn('my-6 w-full overflow-x-auto rounded-md', className)}>
      <table className="w-full border-collapse" {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn('m-0 border-t p-0 even:bg-zinc-100 dark:even:bg-zinc-800', className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        'break-words border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <Suspense
      fallback={
        <div className="mb-4 mt-6 h-24 animate-pulse rounded-lg border bg-zinc-100 p-4 dark:bg-zinc-800"></div>
      }
    >
      <pre
        className={cn(
          'mb-4 mt-6 overflow-x-auto break-words rounded-lg border p-4 text-sm dark:bg-black md:text-base',
          className,
        )}
        {...props}
      />
    </Suspense>
  ),
  code: Code,
  inlineCode: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        'relative break-words rounded bg-zinc-100 px-[0.3rem] py-[0.2rem] font-mono text-sm dark:bg-zinc-800',
        className,
      )}
      {...props}
    />
  ),
};

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <div className="prose prose-zinc dark:prose-invert sm:prose-lg md:prose-xl w-full max-w-none break-words">
      <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
    </div>
  );
}
