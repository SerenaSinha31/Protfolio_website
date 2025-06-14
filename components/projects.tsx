

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Calendar } from "lucide-react"

const projects = [
  {
    title: "Real-Time Document Editor",
    description:
      "A collaborative document editor with real-time synchronization using Socket.io",
    technologies: ["Node.js", "Express.js", "React", "Socket.io", "Codemirror"],
    features: [
      "Real-time synchronization across all connected users",
      "User management with unique Room IDs and usernames",
      "Interactive editor with syntax highlighting",
      "Room ID copying and session management",
    ],
    github: "https://github.com/SerenaSinha31/RealTextEditor",
    live: "https://github.com/SerenaSinha31/RealTextEditor", // 🔗 Replace with actual live link
    period: "Nov 2024 - Dec 2024",
    gradient: "from-cyan-500 to-blue-500",
    borderGradient: "from-cyan-500/50 to-blue-500/50",
    image: "/texteditor.png",
  },
  {
    title: "Online Food Delivery Website",
    description:
      "Full-stack food delivery application with dynamic menu filtering and payment system",
    technologies: ["React-Vite", "MongoDB", "Express.js", "Node.js"],
    features: [
      "User authentication and session handling",
      "Dynamic menu filtering and cart management",
      "Payment and checkout system",
      "Responsive design layout",
    ],
    github: "https://github.com/SerenaSinha31/BackenedProject_OnlineFoodDelivery",
    live: "https://github.com/SerenaSinha31/BackenedProject_OnlineFoodDelivery",
    period: "Mar 2024 - Apr 2024",
    gradient: "from-purple-500 to-pink-500",
    borderGradient: "from-purple-500/50 to-pink-500/50",
    image: "/Foodwebsite.png",
  },
  {
    title: "Weatherly",
    description:
      "A clean and responsive web app that displays real-time weather data for any city using the OpenWeatherMap API.",
    technologies: ["Html5", "Css3", "Javascript", "Bootstrap", "OpenWeatherMap API"],
    features: [
      "Search and display weather by city name",
      "Fetch real-time weather updates using OpenWeatherMap API",
      "Responsive layout with clean UI using Bootstrap",
      "Displays temperature, humidity, wind speed, news, blogs , articles and  weather condition",
    ],
    github: "https://github.com/SerenaSinha31/FrontendProject-Weather-Website",
    live: "https://serenasinha31.github.io/FrontendProject-Weather-Website/",
    period: "March 2024 - April 2024",
    gradient: "from-cyan-500 to-blue-500",
    borderGradient: "from-cyan-500/50 to-blue-500/50",
    image: "/weather.png",
  },
  {
    title: "E-commerce Website (ONE-STOP)",
    description:
      "A user-friendly shopping platform with seamless product browsing, authentication, and cart management, built using modern React tools.",
    technologies: ["React Hooks", "Redux", "React Router", "css3", "Stripe", "ReactJS"],
    features: [
      "Product listing & category filtering",
      "Product detail with images & sizes",
      "Login & cart functionality",
      "Delivery & payment options",
      "Smooth routing & scroll-to-top UX",
    ],
    github: "https://github.com/SerenaSinha31/One-Stop",
    live: "https://one-stop-eight.vercel.app/",
    period: "Nov 2024 - Dec 2024",
    gradient: "from-cyan-500 to-blue-500",
    borderGradient: "from-cyan-500/50 to-blue-500/50",
    image: "/ecommerce website.png",
  },
  {
    title: "❌⭕ Tic Tac Toe – Minimax AI",
    description:
      "A C++ implementation of Tic Tac Toe with an unbeatable AI using the Minimax algorithm.",
    technologies: ["C++", "Minimax Algorithm", "Game Development", "Terminal-based Logic"],
    features: [
      "Two-player mode with terminal-based interface",
      "Minimax algorithm for optimal moves",
      "Unbeatable AI using decision tree",
      "Interactive terminal-based gameplay",
      "Clear instructions for players",
      "Single-player mode supported",
    ],
    github: "https://github.com/SerenaSinha31/gfg_project",
    live: "https://github.com/SerenaSinha31/gfg_project",
    period: "Jul 2024 - Aug 2024",
    gradient: "from-cyan-500 to-blue-500",
    borderGradient: "from-cyan-500/50 to-blue-500/50",
    image: "/tictac.png",
  },
  {
    title: "Bookly – PHP & MySQL Book Portal",
    description:
      "A full-stack bookstore platform with real-time search, secure login, and admin dashboard",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    features: [
      "Real-time book search",
      "Add to cart & purchase",
      "User reviews & ratings",
      "Secure login & signup",
      "Admin panel for managing books & users",
      "Fully responsive design",
    ],
    github: "https://github.com/SerenaSinha31/Bookly",
    live: "https://github.com/SerenaSinha31/Bookly",
    period: "Nov 2024 - Dec 2024",
    gradient: "from-cyan-500 to-blue-500",
    borderGradient: "from-cyan-500/50 to-blue-500/50",
    image: "/bookstore.png",
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 dark:from-slate-950 dark:via-purple-950/20 dark:to-slate-950"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-300">
            A showcase of my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-3 border border-slate-700 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm overflow-hidden`}
            >
              <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

              {/* 👇 Project Image */}
              <div className="h-52 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-3">
                  <CardTitle className="text-2xl font-bold text-slate-100 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center gap-1 text-sm text-slate-400 bg-slate-800/60 rounded-full px-3 py-1">
                    <Calendar className="w-3 h-3" />
                    {project.period.split(" - ")[1]}
                  </div>
                </div>
                <CardDescription className="text-base text-slate-300 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-slate-100 flex items-center gap-2">
                    <span
                      className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full`}
                    ></span>
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/50 text-slate-200 rounded-full text-sm font-medium border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-slate-100 flex items-center gap-2">
                    <span
                      className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full`}
                    ></span>
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-2 text-slate-300"
                      >
                        <span className="text-cyan-400 mt-1">✨</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  <Button
                    asChild
                    className={`flex-1 bg-gradient-to-r ${project.gradient} hover:shadow-lg transition-all duration-300 border-0 text-white`}
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>

                  {project.live && (
                    <Button
                      asChild
                      variant="outline"
                      className="border-green-500/50 text-green-400 hover:bg-green-500/10 bg-transparent"
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
