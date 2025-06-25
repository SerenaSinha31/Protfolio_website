import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C++", "JavaScript", "HTML", "CSS"],
    gradient: "from-red-500 to-pink-500",
    bgGradient: "from-red-900/20 to-pink-900/20",
    emoji: "💻",
  },
  {
    title: "Technologies & Frameworks",
    skills: ["React JS", "Node JS", "Git", "GitHub", "MongoDB", "VSCODE"],
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-900/20 to-blue-900/20",
    emoji: "🚀",
  },
  {
    title: "Core Skills",
    skills: ["Web Development", "Problem-Solving", "Responsive Web Design", "DSA", "UX/UI", "Postman", "PHP"],
    gradient: "from-purple-500 to-indigo-500",
    bgGradient: "from-purple-900/20 to-indigo-900/20",
    emoji: "⚡",
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-300">Technologies and tools I work with</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-3 border-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm overflow-hidden`}
            >
              <div className={`h-1 bg-gradient-to-r ${category.gradient}`}></div>
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-3">{category.emoji}</div>
                <CardTitle className="text-xl text-slate-100">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-4 py-2 bg-gradient-to-r ${category.gradient} text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-900/50 to-teal-900/50 backdrop-blur-sm rounded-full px-8 py-4 border border-emerald-500/20">
            <span className="text-3xl">🌟</span>
            <span className="text-lg font-semibold text-slate-300">
              Always learning and exploring new technologies!
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
