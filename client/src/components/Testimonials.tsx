import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Aarav",
      quote: "ClassBuddy helped me prepare faster for exams with AI summaries. The interactive quizzes are game-changing.",
    },
    {
      name: "Meera",
      quote: "The quiz generator is a lifesaver for teachers like me! It saves me hours of manual work every week.",
    },
    {
      name: "Karan",
      quote:
        "The career guidance feature showed me the exact skills to focus on. Highly recommend to any student planning their future.",
    },
  ];

  return (
    <section className="w-full relative bg-white dark:bg-black text-neutral-900 dark:text-white border-b border-neutral-200/80 dark:border-neutral-800/80 overflow-hidden py-24 transition-colors duration-300">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-400/10 dark:bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[550px] h-[550px] bg-green-400/10 dark:bg-green-500/10 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl tracking-tight pb-2 font-extrabold text-black dark:text-white mb-4">
            What Students Say
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg font-normal">
            Loved by learners & educators. Here’s how ClassBuddy is making a
            difference globally.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="bg-white dark:bg-neutral-950/80 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800/80 rounded-2xl shadow-xs hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <CardContent className="p-8 text-center flex flex-col items-center h-full justify-between">
                <div className="flex flex-col items-center">
                  {/* Avatar Placeholder */}
                  <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center mb-6 shadow-inner">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">
                      {t.name[0]}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed text-[15px]">
                    "{t.quote}"
                  </p>
                </div>

                <div>
                  {/* Star Rating */}
                  <div className="flex justify-center gap-1 mb-3" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        size={16}
                        aria-hidden="true"
                        className="text-emerald-500 fill-emerald-500 dark:text-emerald-400 dark:fill-emerald-400"
                      />
                    ))}
                  </div>

                  {/* Name */}
                  <h4 className="font-bold text-black dark:text-white tracking-wide">
                    {t.name}
                  </h4>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
