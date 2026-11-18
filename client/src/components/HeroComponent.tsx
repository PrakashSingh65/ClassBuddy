import { ArrowRight, PlayCircle, Star, BrainCircuit, Zap, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroComponent() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[95vh] text-center pt-32 pb-20 px-4 sm:px-6 overflow-hidden bg-white text-neutral-900 dark:bg-black dark:text-white transition-colors duration-300">
      {/* Light Green Ambient Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] md:w-[850px] md:h-[500px] opacity-30 dark:opacity-25 pointer-events-none z-0 blur-[130px] bg-gradient-to-r from-emerald-300 via-green-300 to-teal-200 dark:from-emerald-500 dark:via-green-400 dark:to-teal-400 rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] opacity-20 dark:opacity-15 pointer-events-none z-0 blur-[140px] bg-gradient-to-l from-green-300 to-emerald-200 dark:from-green-500 dark:to-emerald-400 rounded-full" />

      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Announcement Badge */}
      <a
        href="#features"
        aria-label="ClassBuddy AI 2.0 is now live - view features"
        className="group inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-full bg-white/90 dark:bg-neutral-950/80 border border-emerald-500/30 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-emerald-50/60 dark:hover:bg-neutral-900 hover:border-emerald-400 transition-all cursor-pointer select-none backdrop-blur-md shadow-xs hover:shadow-lg hover:shadow-emerald-500/10 animate-in fade-in slide-in-from-bottom-4 duration-700"
      >
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 dark:bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 dark:bg-emerald-400"></span>
        </span>
        <span className="tracking-tight text-neutral-900 dark:text-white">ClassBuddy AI 2.0 is now live</span>
        <ArrowRight className="w-4 h-4 ml-1 text-emerald-500 dark:text-emerald-400 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
      </a>

      {/* Main Heading */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 tracking-tight max-w-5xl mx-auto leading-[1.05] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 fill-mode-both text-black dark:text-white">
        Learn faster with your <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-500 dark:from-emerald-400 dark:via-green-300 dark:to-emerald-200 pb-2 inline-block">
          AI Study Companion
        </span>
      </h1>

      {/* Subhead */}
      <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 fill-mode-both">
        Transform your notes into quizzes, get precise summaries, and explore career paths in seconds. Trusted by <strong className="text-black dark:text-white font-semibold">10,000+</strong> students globally.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto z-10 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500 fill-mode-both">
        <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-emerald-400 hover:bg-emerald-300 text-black font-bold shadow-[0_4px_24px_-4px_rgba(52,211,153,0.5)] dark:shadow-[0_0_35px_-5px_rgba(74,222,128,0.5)] rounded-full transition-all hover:scale-105 active:scale-95 group cursor-pointer border-0">
          Start Learning Free <ArrowRight className="w-5 h-5 ml-2 text-black group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base rounded-full border border-neutral-300 bg-white/90 text-neutral-900 hover:text-emerald-600 hover:border-emerald-400 hover:bg-emerald-50/50 dark:border-neutral-800 dark:bg-neutral-950/80 dark:text-white dark:hover:text-emerald-300 dark:hover:border-emerald-500/40 dark:hover:bg-neutral-900 backdrop-blur-md transition-all active:scale-95 group cursor-pointer shadow-xs">
          <PlayCircle className="w-5 h-5 mr-2 text-emerald-500 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors" /> See how it works
        </Button>
      </div>

      {/* Floating UI Elements (SaaS vibe) */}
      <div className="mt-20 relative w-full max-w-[850px] mx-auto hidden md:block animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-700 fill-mode-both">
        {/* Decorative elements behind the mockup */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 dark:from-emerald-500/15 to-transparent blur-3xl rounded-full" />
        
        {/* Abstract App Mockup / Glass Card */}
        <div className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/90 backdrop-blur-2xl shadow-2xl overflow-hidden leading-none ring-1 ring-emerald-500/20">
          {/* Header row */}
          <div className="w-full h-12 bg-neutral-100/80 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-800 flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400/80 shadow-xs" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/80 shadow-xs" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80 dark:bg-emerald-400/80 shadow-xs" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white dark:bg-black/70 h-6 w-full max-w-[300px] rounded-md border border-neutral-200 dark:border-neutral-800 shadow-2xs flex items-center justify-center">
                <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-mono tracking-wider">classbuddy.ai/dashboard</span>
              </div>
            </div>
          </div>
          {/* Body */}
          <div className="p-8 grid grid-cols-3 gap-6 opacity-90">
            <div className="col-span-2 space-y-6">
              <div className="space-y-3">
                <div className="h-2 w-16 bg-emerald-500 dark:bg-emerald-400/80 rounded-full" />
                <div className="h-8 bg-neutral-200 dark:bg-neutral-800 rounded-lg w-3/4" />
              </div>
              <div className="space-y-3 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800/80 bg-neutral-50 dark:bg-neutral-900/60">
                <div className="h-3 bg-neutral-300 dark:bg-neutral-700 rounded w-full" />
                <div className="h-3 bg-neutral-300 dark:bg-neutral-700 rounded w-5/6" />
                <div className="h-3 bg-neutral-200 dark:bg-neutral-800 rounded w-4/6" />
              </div>
              <div className="flex gap-3 pt-2">
                <div className="h-10 w-28 bg-emerald-50 dark:bg-emerald-400/20 rounded-lg border border-emerald-300 dark:border-emerald-400/30 flex items-center justify-center">
                  <span className="text-xs text-emerald-700 dark:text-emerald-300 font-semibold">Generate</span>
                </div>
                <div className="h-10 w-28 bg-neutral-100 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 flex items-center justify-center">
                  <span className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">Export</span>
                </div>
              </div>
            </div>
            <div className="col-span-1 space-y-4">
               <div className="h-[110px] bg-gradient-to-br from-neutral-50 to-emerald-50/40 dark:from-neutral-900/70 dark:to-neutral-900/30 rounded-xl border border-neutral-200 dark:border-neutral-800 flex flex-col justify-center items-center gap-3 backdrop-blur-sm shadow-2xs transition-transform hover:scale-[1.02]">
                 <BrainCircuit className="w-8 h-8 text-emerald-500 dark:text-emerald-400 opacity-90" />
                 <div className="h-2 w-16 bg-neutral-300 dark:bg-neutral-700 rounded-full" />
               </div>
               <div className="h-[110px] bg-gradient-to-br from-neutral-50 to-emerald-50/40 dark:from-neutral-900/70 dark:to-neutral-900/30 rounded-xl border border-neutral-200 dark:border-neutral-800 flex flex-col justify-center items-center gap-3 backdrop-blur-sm shadow-2xs transition-transform hover:scale-[1.02]">
                 <Zap className="w-8 h-8 text-emerald-500 dark:text-emerald-300 opacity-90" />
                 <div className="h-2 w-20 bg-neutral-300 dark:bg-neutral-700 rounded-full" />
               </div>
            </div>
          </div>
          
          {/* Decor: Floating badges */}
          <div className="absolute -left-6 top-24 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl border border-emerald-500/30 text-neutral-900 dark:text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce shadow-emerald-500/10 [animation-duration:4s]">
            <div className="bg-emerald-50 dark:bg-emerald-500/15 p-2 rounded-xl border border-emerald-200 dark:border-emerald-500/30"><BookOpen className="w-5 h-5 text-emerald-500 dark:text-emerald-400" /></div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-bold leading-tight text-black dark:text-white">Quiz Ready</span>
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400/80">Generated in 2s</span>
            </div>
          </div>
          <div className="absolute -right-8 bottom-16 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce shadow-emerald-500/10 [animation-duration:5s]">
            <div className="bg-emerald-50 dark:bg-emerald-500/15 p-2 rounded-xl border border-emerald-200 dark:border-emerald-500/30"><Star className="w-5 h-5 text-emerald-500 fill-emerald-500 dark:text-emerald-400 dark:fill-emerald-400" /></div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-bold leading-tight text-black dark:text-white">A+ Score</span>
              <span className="text-[11px] text-neutral-500 dark:text-neutral-400">Excellent work!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
