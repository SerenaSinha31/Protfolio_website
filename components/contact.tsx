import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-300">Let's connect and discuss opportunities</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-slate-100">Let's Connect!</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">serena31may@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <span className="text-slate-300">8273322815</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-pink-400" />
                    <span className="text-slate-300">Bareilly, Uttar Pradesh 234005</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
                  >
                    <a href="https://linkedin.com/in/serena-sinha" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-purple-500/50 text-purple-400 hover:bg-purple-500/10 bg-transparent"
                  >
                    <a href="https://github.com/SerenaSinha31/" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Follow on GitHub
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0"
                  >
                    <a href="mailto:serena31may@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="text-center mt-12 text-slate-400">
        <p>&copy; 2024 Serena Sinha. All rights reserved.</p>
      </div>
    </section>
  )
}
