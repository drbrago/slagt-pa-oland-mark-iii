import path from "path";
import fs from "fs";
import { getMarkdownContent } from "@/lib/markdown";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { NotFoundError } from "@/lib/errors";

type Page = {
  slug: string[];
};

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  const codexPath = path.join(process.cwd(), "codex");
  const pages: Page[] = [];

  fs.readdirSync(codexPath).forEach((folder) => {
    const folderPath = path.join(codexPath, folder);
    if (fs.lstatSync(folderPath).isDirectory()) {
      pages.push({
        slug: [folder],
      });

      fs.readdirSync(folderPath).forEach((file) => {
        if (file.endsWith(".md")) {
          pages.push({
            slug: [folder, file.replace(/\.md$/, "")],
          });
        }
      });
    }
  });

  return pages.map((page) => ({
    slug: page.slug,
  }));
}

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

    throw error;
  }

  const { frontmatter, markdown } = content;

  return (
    <div className="prose lg:prose-xl mx-auto px-4 py-8">
      {frontmatter?.title && (
        <h1 className="text-3xl font-bold">{frontmatter.title}</h1>
      )}
      {frontmatter?.updated && (
        <p className="text-sm text-gray-500">Updated: {frontmatter.updated}</p>
      )}
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}
