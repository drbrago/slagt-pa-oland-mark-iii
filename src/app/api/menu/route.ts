import fs from "fs";
import path from "path";
import matter from "gray-matter";

type MenuItem = {
  title: string;
  link: string;
};

type MenuSection = {
  section: string;
  items: MenuItem[];
};

export const dynamic = "force-dynamic";

export async function GET() {
  try {
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
            items.push({
              title: data.title || file.replace(/\.md$/, ""),
              link: `/codex/${folder}/${file.replace(/\.md$/, "")}`,
            });
          }
        });

        sections.push({ section: folder, items });
      }
    });

    return Response.json(sections);
  } catch (error) {
    console.error("Error fetching menu:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
