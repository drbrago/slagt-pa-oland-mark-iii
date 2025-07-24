import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Frontmatter {
  title: string;
  updated?: string;
  tags?: string[];
}

export interface MarkdownContent {
  frontmatter: Frontmatter;
  markdown: string;
}

export function getMarkdownContent(filePath: string): MarkdownContent {
  console.log(`Loading markdown content from: ${filePath}`);
  const fullPath = path.join(process.cwd(), "codex", filePath);
  console.log(`Full path resolved to: ${fullPath}`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    frontmatter: data as Frontmatter,
    markdown: content,
  };
}
