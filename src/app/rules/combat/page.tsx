import React from "react";
import { getMarkdownContent } from "@/lib/markdown";
import ReactMarkdown from "react-markdown";

export default function CombatPage() {
  const { frontmatter, markdown } = getMarkdownContent("rules/combat.md");

  return (
    <div className="prose mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">{frontmatter.title}</h1>
      {frontmatter.updated && (
        <p className="text-sm text-gray-500">Updated: {frontmatter.updated}</p>
      )}
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}
