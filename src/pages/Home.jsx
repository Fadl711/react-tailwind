import { AboutSection } from "../components/AboutMe"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"
import { HeroSection } from "../components/HeroSection"
import { NavBar } from "../components/NavBar"
import { ProjectsSection } from "../components/ProjectsSection"
import { SkilsSection } from "../components/SkilsSection"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">


        <StarBackground/>

        <NavBar/>

        <main>
            <HeroSection/>

            <AboutSection/>
            <SkilsSection/>
            <ProjectsSection/>

            <ContactSection/>
        </main>
        <Footer/>
    </div>
}