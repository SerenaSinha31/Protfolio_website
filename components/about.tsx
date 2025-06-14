import { Card, CardContent } from "@/components/ui/card"
import { Code2, Target, Users, Award } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Technical Expertise",
      description:
        "Proficient in MERN stack with hands-on experience in building scalable web applications and real-time systems.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Target,
      title: "Problem Solving",
      description:
        "Strong foundation in Data Structures & Algorithms with 400+ problems solved across competitive programming platforms.",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: Users,
      title: "Leadership",
      description:
        "Demonstrated leadership as event coordinator for hackathons and recognized for excellence in communication skills.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Award,
      title: "Achievements",
      description:
        "Multiple certifications, hackathon participation, and consistent academic performance with practical project experience.",
      gradient: "from-emerald-500 to-teal-500",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
              About Me
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                I am a dedicated Computer Science Engineering student at Lovely Professional University with a passion
                for full-stack development and innovative problem-solving. My academic journey is complemented by
                practical experience in building real-world applications and contributing to collaborative projects.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                With a strong foundation in modern web technologies and a commitment to continuous learning, I strive to
                create efficient, scalable solutions that make a meaningful impact. My experience spans from developing
                real-time collaborative tools to building comprehensive e-commerce platforms.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-3 border-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${highlight.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-100 mb-3">{highlight.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-sm rounded-lg px-6 py-4 border border-purple-500/20">
              <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-medium text-slate-300">
                Currently seeking opportunities to contribute to innovative projects and advance my career in software
                development
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
