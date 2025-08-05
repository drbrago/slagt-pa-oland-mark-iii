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
  console.log("Loading markdown content from:", filePath);
  const basePath = path.join(process.cwd(), "codex", filePath);
  let fullPath: string;

  // Case 1: If it's a directory, look for index.md inside it
  if (fs.existsSync(basePath) && fs.statSync(basePath).isDirectory()) {
    fullPath = path.join(basePath, "index.md");
  }
  // Case 2: If it's a .md file
  else if (
    fs.existsSync(basePath + ".md") &&
    fs.statSync(basePath + ".md").isFile()
  ) {
    fullPath = basePath + ".md";
  }
  // Case 3: Not found
  else {
    throw new Error(`Markdown file not found at: ${basePath}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    frontmatter: data as Frontmatter,
    markdown: content,
  };
}
