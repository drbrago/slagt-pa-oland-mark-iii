"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type MenuItem = {
  title: string;
  link: string;
};

type MenuSection = {
  section: string;
  items: MenuItem[];
};

export default function LeftMenu() {
  const [sections, setSections] = useState<MenuSection[]>([]);

  useEffect(() => {
    async function fetchMenu() {
      const response = await fetch("/api/menu");
      const data = await response.json();
      setSections(data);
    }

    fetchMenu();
  }, []);

  return (
    <nav className="w-64 bg-black p-4 prose">
      {sections.map((section) => (
        <div key={section.section} className="mb-4">
          <h2 className="!mt-2 !capitalize">
            {section.section.replace(/-/g, " ")}
          </h2>
          <ul>
            {section.items.map((item) => (
              <li key={item.link}>
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
