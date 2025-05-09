import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "TypeScript", level: 60, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "bootstrip", level: 80, category: "frontend" },

  // Backend
  { name: "laravel", level: 90, category: "backend" },
  { name: "php", level: 80, category: "backend" },
  { name: "mysql", level: 80, category: "backend" },
  { name: "MongoDB", level: 65, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "python", level: 75, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 80, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];
const categories = ["all", "frontend", "backend", "tools"];
export const SkilsSection = () => {
  const [activeCatrgory, setActiveCategory] = useState("all");
  const filtered = skills.filter(skill => (
    activeCatrgory==="all" || activeCatrgory===skill.category
  ))
  return (
    <section id="skils" className="py-24 px-4 relative bg-secondary/30">
      <div className="container max-w-5xl mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skils</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((categorie, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(categorie)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize ",
                activeCatrgory === categorie
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-primary/50"
              )}
            >
              {categorie}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  style={{ width: skill.level + "%" }}
                  className="bg-primary  h-2 rounded-2xl origin-left animate-[grow_1.5s_ease-out]"
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm ">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
