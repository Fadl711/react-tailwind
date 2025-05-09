import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
      <footer className="py-12 flex justify-center  bg-card relative border border-border border-t ">
        <p className="text-center t">
          &copy; {new Date().getFullYear()} Fadl <span className="text-primary">Al-Matari</span> All rights reserved.{" "}
        </p>
        <a className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 absolute right-5 text-primary transition-colors" href="#hero">
            <ArrowUp/>
        </a>
      </footer>
    );
}