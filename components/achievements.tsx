import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Award, Code, Users } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "1st Position in Section – Spotlight Circle Honoree",
    description: "Department of Communication Skills–IV",
    detail: "Recognized for excellence in communication skills and leadership in class",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Code,
    title: "Coding Practice Excellence",
    description: "LeetCode & GeeksForGeeks",
    detail: "Completed 100+ questions on LeetCode and 300+ questions on GeeksForGeeks",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Award,
    title: "HackerRank Silver Badges",
    description: "Multiple Programming Achievements",
    detail: "Achieved 3 stars in C++ and Java, and 4 stars in Problem Solving",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "CODE STORM 36 Hours Hackathon",
    description: "Event Coordinator",
    detail: "Spirit Organization & MLSA - Managed event planning, team coordination, and execution",
    gradient: "from-purple-500 to-pink-500",
  },
]

export function Achievements() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Achievements
          </h2>
          <p className="text-xl text-slate-300">Recognition and accomplishments throughout my journey</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <Card
                key={index}
                className="h-full border-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 bg-gradient-to-r ${achievement.gradient} rounded-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg text-slate-100">{achievement.title}</CardTitle>
                  </div>
                  <p className="text-cyan-400 font-medium">{achievement.description}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{achievement.detail}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
