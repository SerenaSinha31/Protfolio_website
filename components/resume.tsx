



"use client"
import React, { useState } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Eye, FileText, Calendar, MapPin, Phone, Mail, Github, Linkedin } from "lucide-react"

// export function Resume() {
//   const handleDownload = () => {
//     // This would typically generate and download a PDF
//     window.open("/serena12216517.pdf", "_blank") // Replace with your actual PDF path
//   }

//   const handlePreview = () => {
//     // This would open a preview modal or new tab
//     window.open("/serena12216517.pdf", "_blank") // Replace with your actual PDF path
//   }

export function Resume() {
  // ——————————————————————————————————————————
  // 1️⃣  State for the preview modal
  // ——————————————————————————————————————————
  const [showPreview, setShowPreview] = useState(false)
  const PDF_PATH = "/serena12216517.pdf" // adjust if you move the file

  // ——————————————————————————————————————————
  // 2️⃣  Download handler: forces “Save as…”
  // ——————————————————————————————————————————
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = PDF_PATH
    link.download = "serena12216517.pdf"
    link.click()
  }

  // ——————————————————————————————————————————
  // 3️⃣  Preview handler: just open the modal
  // ——————————————————————————————————————————
  const handlePreview = () => {
// This would open a preview modal or new tab
   window.open("/serena12216517.pdf", "_blank") // Replace with your actual PDF path
}
 

  return (
    <section
      id="resume"
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 dark:from-slate-950 dark:via-purple-950/20 dark:to-slate-950"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Resume
          </h2>
          <p className="text-xl text-slate-300 dark:text-slate-400">
            Download or preview my complete professional resume
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Resume Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={handleDownload}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF Resume
            </Button>
            <Button
              onClick={handlePreview}
              variant="outline"
              size="lg"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
            >
              <Eye className="w-5 h-5 mr-2" />
              Preview Resume
            </Button>
          </div>

          {/* Resume Preview Card */}
          <Card className="border-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm mb-8">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full">
                  <FileText className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl text-slate-100 dark:text-white mb-2">
                Serena Sinha - Full Stack Developer
              </CardTitle>
              <p className="text-slate-400 dark:text-slate-500">Computer Science Engineering Student</p>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-100 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></span>
                    Contact Information
                  </h3>
                  <div className="space-y-2 text-slate-300 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <a
                        href="mailto:serena31may@gmail.com"
                        className="hover:underline text-cyan-300"
                      >
                        serena31may@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-purple-400" />
                      <span>8273322815</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-pink-400" />
                      <span>Bareilly, Uttar Pradesh 234005</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-100 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></span>
                    Professional Links
                  </h3>
                  <div className="space-y-2 text-slate-300 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-cyan-400" />
                      <a
                        href="https://www.linkedin.com/in/serena-sinha-864357254/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-cyan-300"
                      >
                        linkedin.com/in/serena-sinha/
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-purple-400" />
                      <a
                        href="https://github.com/SerenaSinha31/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-purple-300"
                      >
                        github.com/SerenaSinha31/
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Summary */}
              <div>
                <h3 className="text-lg font-semibold text-slate-100 dark:text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></span>
                  Professional Summary
                </h3>
                <p className="text-slate-300 dark:text-slate-400 leading-relaxed">
                  Passionate Computer Science Engineering student with expertise in MERN stack development, strong
                  problem-solving skills, and a proven track record of building innovative web applications. Experienced
                  in real-time collaborative tools, e-commerce platforms, and competitive programming with 400+ problems
                  solved across various platforms.
                </p>
              </div>

              {/* Key Highlights */}
              <div>
                <h3 className="text-lg font-semibold text-slate-100 dark:text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></span>
                  Key Highlights
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✨</span>
                      <span className="text-slate-300 dark:text-slate-400">
                        MERN Stack Development with real-time features
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✨</span>
                      <span className="text-slate-300 dark:text-slate-400">
                        400+ DSA problems solved (LeetCode & GeeksForGeeks)
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✨</span>
                      <span className="text-slate-300 dark:text-slate-400">
                        HackerRank Silver Badges & 4-star rating
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✨</span>
                      <span className="text-slate-300 dark:text-slate-400">
                        Event Coordinator for 36-hour hackathon
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✨</span>
                      <span className="text-slate-300 dark:text-slate-400">Multiple professional certifications</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✨</span>
                      <span className="text-slate-300 dark:text-slate-400">CGPA: 7.61 in Computer Science</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Skills Preview */}
              <div>
                <h3 className="text-lg font-semibold text-slate-100 dark:text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></span>
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "JavaScript",
                    "React JS",
                    "Node JS",
                    "MongoDB",
                    "Express.js",
                    "C++",
                    "HTML/CSS",
                    "Git",
                    "Socket.io",
                    "DSA",
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-700/50 text-slate-200 dark:bg-slate-800/50 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-600/50 dark:border-slate-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Last Updated */}
              <div className="text-center pt-6 border-t border-slate-700/50 dark:border-slate-800/50">
                <div className="flex items-center justify-center gap-2 text-slate-400 dark:text-slate-500">
                  <Calendar className="w-4 h-4" />
                  
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Actions */}
          <div className="text-center">
            <p className="text-slate-400 dark:text-slate-500 mb-4">
              Need a different format or have questions about my experience?
            </p>
            <Button
              variant="outline"
              className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 bg-transparent"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}