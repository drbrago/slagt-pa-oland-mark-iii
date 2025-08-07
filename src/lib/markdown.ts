import fs from "fs";
import path from "path";
import matter from "gray-matter";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { NotFoundError } from "./errors";
import remarkGfm from "remark-gfm";

export type Frontmatter = {
  title?: string;
  updated?: string;
};

export type MarkdownContent = {
  frontmatter: Frontmatter;
  markdown: string;
};

export async function getMarkdownContent(
  filePath: string
): Promise<MarkdownContent> {
  const basePath = path.join(process.cwd(), "codex", filePath);
  let fullPath: string;

  if (fs.existsSync(basePath) && fs.statSync(basePath).isDirectory()) {
    fullPath = path.join(basePath, "index.md");
  } else if (
    fs.existsSync(basePath + ".md") &&
    fs.statSync(basePath + ".md").isFile()
  ) {
    fullPath = basePath + ".md";
  } else {
    throw new NotFoundError(`Markdown file not found at: ${basePath}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(content);

  return {
    frontmatter: data as Frontmatter,
    markdown: String(file),
  };
}
