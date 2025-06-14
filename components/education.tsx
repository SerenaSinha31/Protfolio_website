import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "Computer Science and Engineering",
    institution: "Lovely Professional University Punjab",
    location: "Jalandhar, Punjab",
    period: "Since September 2022",
    grade: "CGPA: 7.61",
  },
  {
    degree: "12th with Science",
    institution: "St. Maria Goretti Inter College",
    location: "Bareilly, Uttar Pradesh",
    period: "2020 – 2021",
    grade: "Percentage: 82%",
  },
]

export function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 dark:from-slate-950 dark:via-purple-950/20 dark:to-slate-950"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Education
          </h2>
          <p className="text-xl text-slate-300">Academic background and qualifications</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="border-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 text-slate-100">{edu.degree}</CardTitle>
                    <div className="space-y-1 text-slate-300">
                      <p className="font-medium">{edu.institution}</p>
                      <p>{edu.location}</p>
                      <div className="flex justify-between items-center">
                        <span>{edu.period}</span>
                        <span className="font-semibold text-cyan-400">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
