import { cn } from "@/lib/utils";
import { X, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
const navItems = [
  { name: "Home", herf: "#hero" },
  { name: "About", herf: "#about" },
  { name: "Skils", herf: "#skils" },
  { name: "Projects", herf: "#projects" },
  { name: "Contact", herf: "#contact" },
];

export const NavBar = () => {
  const [isScrolled, setIsScrooled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handelScrool = () => {
      setIsScrooled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handelScrool);
    return () => window.removeEventListener("scroll", handelScrool);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a className="text-xl font-bold text-primary flex items-center">
          <span className="relative z-10">
            <span className="text-glow mr-2 text-foreground">
              Fadl Al-Matari
            </span>
            Portfolio
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.herf}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile nav */}
        <div className="flex justify-between mt-1 ">
          <div className="z-50">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden text-foreground  mx-2 "
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div>
            <ThemeToggle />
          </div>
        </div>
        <div
          className={cn(
            "fixed inset-0 backdrop-blur-md z-40 flex flex-col items-center justify-center ",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none "
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.herf}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
