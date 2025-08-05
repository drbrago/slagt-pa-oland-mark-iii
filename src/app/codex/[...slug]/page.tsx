import { getMarkdownContent } from "@/lib/markdown";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { NotFoundError } from "@/lib/errors";
import LeftMenu from "@/app/components/LeftMenu";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const path = Array.isArray(slug) ? slug.join("/") : slug;

  const { frontmatter } = getMarkdownContent(`${path}`);
  return {
    title: frontmatter?.title || "Rules",
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const path = Array.isArray(slug) ? slug.join("/") : slug;

  let content;
  try {
    content = getMarkdownContent(`${path}`);
  } catch (error) {
    if (error instanceof NotFoundError) {
      notFound();
    }

    throw error; // Re-throw unexpected errors
  }

  const { frontmatter, markdown } = content;

  return (
    <div className="flex">
      <LeftMenu />
      <div className="prose lg:prose-xl mx-auto px-4 py-8">
        {frontmatter?.title && (
          <h1 className="text-3xl font-bold">{frontmatter.title}</h1>
        )}
        {frontmatter?.updated && (
          <p className="text-sm text-gray-500">
            Updated: {frontmatter.updated}
          </p>
        )}
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}
