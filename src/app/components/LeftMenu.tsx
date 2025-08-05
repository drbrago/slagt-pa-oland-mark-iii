import Link from "next/link";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { Frontmatter } from "@/lib/markdown";

type MenuItem = {
  title: string;
  link: string;
};

type MenuSection = {
  section: string;
  items: MenuItem[];
};

export default function LeftMenu() {
  const codexPath = path.join(process.cwd(), "codex");
  const sections: MenuSection[] = [];

  fs.readdirSync(codexPath).forEach((folder) => {
    const folderPath = path.join(codexPath, folder);
    if (fs.lstatSync(folderPath).isDirectory()) {
      const items: MenuItem[] = [];

      fs.readdirSync(folderPath).forEach((file) => {
        if (file.endsWith(".md")) {
          const filePath = path.join(folderPath, file);
          const fileContents = fs.readFileSync(filePath, "utf8");
          const { data } = matter(fileContents);
          const frontmatter = data as Frontmatter;
          items.push({
            title: frontmatter?.title || file.replace(/\.md$/, ""),
            link: `/codex/${folder}/${file.replace(/\.md$/, "")}`,
          });
        }
      });

      sections.push({ section: folder, items });
    }
  });

  return (
    <nav className="w-64 bg-gray-100 p-4">
      {sections.map((section) => (
        <div key={section.section} className="mb-4">
          <h2 className="font-bold text-lg mb-2 capitalize">
            {section.section.replace(/-/g, " ")}
          </h2>
          <ul>
            {section.items.map((item) => (
              <li key={item.link} className="mb-1">
                <Link
                  href={item.link}
                  className="text-blue-500 hover:underline"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
