import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award, BookOpen } from "lucide-react"

const training = {
  title: "Data Structures and Algorithms - Self Paced",
  provider: "GeeksForGeeks",
  period: "May 2024 – Aug 2024",
  type: "Online Course",
  highlights: [
    "Completed comprehensive 16-week course on Data Structures and Algorithms",
    "Mastered foundational and advanced problem-solving techniques",
    "Gained expertise in arrays, linked lists, stacks, queues, trees, graphs, and sorting algorithms",
    "Developed skills in designing and implementing efficient algorithms",
    "Built Tic Tac Toe game with unbeatable AI using Minimax algorithm",
  ],
}

const certificates = [
  {
    title: "Safe and Responsible AI",
    provider: "NPTEL",
    date: "Nov 2024",
    type: "Professional Certificate",
  },
  {
    title: "Server-Side JavaScript with NodeJS",
    provider: "Coursera",
    date: "Apr 2024",
    type: "Course Certificate",
  },
  {
    title: "Introduction To Large Language Models",
    provider: "Google Cloud",
    date: "Feb 2024",
    type: "Specialization Certificate",
  },
]

export function Training() {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 dark:from-slate-950 dark:via-purple-950/20 dark:to-slate-950"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Training & Certifications
            </h2>
            <p className="text-xl text-slate-300">Continuous learning and professional development</p>
          </div>

          {/* Training Section */}
          <div className="mb-12">
            <Card className="border-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-slate-100">{training.title}</CardTitle>
                      <CardDescription className="text-base text-slate-300">
                        {training.provider} • {training.period}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                  >
                    {training.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {training.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certificates Section */}
          <div>
            <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3">
              <Award className="w-8 h-8 text-cyan-400" />
              Professional Certificates
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <Card
                  key={index}
                  className="border-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg text-slate-100">{cert.title}</CardTitle>
                    <CardDescription className="text-cyan-400 font-medium">{cert.provider}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{cert.date}</span>
                      </div>
                      <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
                        {cert.type}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
