import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Resume } from "@/components/resume"
import { Training } from "@/components/training"
import { Achievements } from "@/components/achievements"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Training />
      <Achievements />
      <Education />
      <Contact />
    </main>
  )
}
