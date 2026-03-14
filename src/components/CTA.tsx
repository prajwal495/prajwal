import { Github, Mail, Send } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 flex flex-col justify-center items-center text-center gap-8 bg-zinc-900/50 rounded-3xl p-8 md:p-16 my-12 relative overflow-hidden border border-zinc-800 shadow-2xl" id="contact">
      {/* Very subtle tech background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-cyan-400 opacity-[0.03] rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-2xl relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-mono mb-6">
          <Send size={14} />
          <span>&lt;contact /&gt;</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-tight">
          Let's Build Something Amazing Together
        </h2>
        <p className="text-zinc-400 mb-10 text-lg font-mono">
          // Contact me if you are interested in collaborating on a project, or check out my GitHub to see how I work and what I'm currently building.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="https://github.com/PrajwalChaple" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-lg border border-zinc-800 bg-zinc-950 flex items-center gap-3 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors font-mono text-lg">
            <Github size={24} className="text-zinc-400 group-hover:text-cyan-400" />
            github.com
          </a>
          <a href="mailto:prajwalchaple14@gmail.com" className="px-10 py-4 rounded-lg bg-cyan-400 text-zinc-950 font-medium hover:bg-cyan-300 transition-colors flex items-center gap-3 text-lg font-mono">
            <Mail size={24} />
            send_email()
          </a>
        </div>
      </div>
    </section>
  );
}
