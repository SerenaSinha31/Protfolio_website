import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950 pt-16 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  SERENA
                </span>
                <br />
                <span className="text-slate-100 dark:text-slate-200">SINHA</span>
              </h1>

              <div className="text-xl md:text-2xl font-medium mb-6">
                <span className="text-cyan-400">Full Stack Developer</span>
                <span className="mx-2 text-slate-400">•</span>
                <span className="text-purple-400">Computer Science Student</span>
              </div>

              <p className="text-lg text-slate-300 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Passionate Computer Science Engineering student with expertise in MERN stack development, strong
                problem-solving skills, and a proven track record of building innovative web applications.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0"
                >
                  <a href="#contact">
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
                >
                  <a href="#projects">View Projects</a>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Bareilly, Uttar Pradesh</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span>8273322815</span>
                </div>
              </div>
            </div>

            {/* Right Column - Photo and Contact */}
            <div className="flex flex-col items-center">
              {/* Professional Photo */}
              <div className="relative mb-8">
                <div className="w-80 h-80 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl rotate-6 animate-pulse"></div>
                  <div className="absolute inset-2 bg-slate-800 dark:bg-slate-900 rounded-2xl flex items-center justify-center -rotate-6">
                    <Image
                      src="/SerenaSinha.jpg"
                      alt="Serena Sinha - Professional Photo"
                      width={300}
                      height={300}
                      className="rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
                >
                  <a href="https://www.linkedin.com/in/serena-sinha-864357254/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 bg-transparent"
                >
                  <a href="https://github.com/SerenaSinha31/" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="border-pink-500/50 text-pink-400 hover:bg-pink-500/10 bg-transparent"
                >
                  <a href="mailto:serena31may@gmail.com">
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
