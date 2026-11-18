import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Brain, Compass, ClipboardList, Sparkles, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function FeaturesComponents() {
  const features = [
    {
      icon: BookOpen,
      title: "AI Notes Generator",
      description:
        "Teachers upload study materials, and AI instantly generates clean, structured study notes and summaries for joined student groups.",
      badge: "Study Repository",
      highlights: ["Instant Summaries", "Group Access", "PDF & Docs"],
    },
    {
      icon: Brain,
      title: "AI Quiz & Interview Prep",
      description:
        "Interactive practice quizzes and real-time AI mock interviews generated directly from course topics to boost student confidence.",
      badge: "Interactive Practice",
      highlights: ["Mock Interviews", "Adaptive Quizzes", "Score Analytics"],
    },
    {
      icon: Compass,
      title: "Career Guidance Bot",
      description:
        "Personalized career roadmaps and AI skill advice helping students navigate tech specializations and future job market readiness.",
      badge: "Career Growth",
      highlights: ["Skill Assessment", "Career Roadmaps", "Industry Insights"],
    },
    {
      icon: ClipboardList,
      title: "Assignments & Auto-Grading",
      description:
        "Teachers publish interactive assignments with deadline controls, markdown questions, and instant AI-driven grade feedback.",
      badge: "Smart Evaluation",
      highlights: ["Markdown Editor", "Automated Feedback", "Progress Tracking"],
    },
  ];

  return (
    <section id="features" className="w-full relative bg-neutral-50/60 dark:bg-black text-neutral-900 dark:text-white border-y border-neutral-200/80 dark:border-neutral-800/80 py-20 sm:py-28 overflow-hidden transition-colors duration-300">
      {/* Background Decorative Mesh Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-emerald-400/10 dark:bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-semibold shadow-2xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Platform Superpowers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black dark:text-white">
            Everything You Need for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-500 dark:from-emerald-400 dark:via-green-300 dark:to-emerald-200">
              Smarter Learning
            </span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            ClassBuddy bridges teachers and students with an all-in-one AI ecosystem — from study materials to automated assignments and career guidance.
          </p>
        </div>

        {/* Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card
                key={idx}
                className="group relative overflow-hidden rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-950/80 backdrop-blur-xl shadow-xs hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/40 dark:hover:border-emerald-500/50 transition-all duration-500"
              >
                {/* Top Ambient Glow */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-transparent dark:from-emerald-500/15 dark:via-green-500/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                />

                <CardContent className="p-8 sm:p-10 flex flex-col justify-between h-full space-y-8 relative z-10">
                  <div className="space-y-6">
                    {/* Header Row: Icon + Badge */}
                    <div className="flex items-center justify-between">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center border shadow-2xs group-hover:scale-110 transition-transform duration-500 bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20"
                      >
                        <Icon className="w-7 h-7" />
                      </div>

                      <Badge
                        variant="secondary"
                        className="text-[11px] font-semibold px-3 py-1 bg-neutral-100 text-emerald-800 border border-emerald-200 dark:bg-neutral-900 dark:text-emerald-300 dark:border-emerald-500/20"
                      >
                        {feature.badge}
                      </Badge>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-black dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed group-hover:text-neutral-800 dark:group-hover:text-neutral-300 transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Highlights Tags */}
                  <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center gap-2 flex-wrap">
                    {feature.highlights.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-neutral-50 dark:bg-neutral-900/90 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-400 dark:hover:border-emerald-500/30 transition-colors"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 dark:text-emerald-400" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
