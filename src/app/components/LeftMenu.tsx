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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    async function fetchMenu() {
      const response = await fetch("/api/menu");
      const data = await response.json();
      setSections(data);
    }

    fetchMenu();
  }, []);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        {isVisible ? "Hide Menu" : "Show Menu"}
      </button>
      {isVisible && (
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
      )}
    </div>
  );
}
