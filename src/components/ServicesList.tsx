import { ArrowRight, Code2, Database, Sparkles } from 'lucide-react';

export default function ServicesList() {
  return (
    <section className="py-20 flex flex-col lg:flex-row gap-16">
      <div className="flex-1 space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-mono">
          <span>&lt;services /&gt;</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          What Can I Do For<br />Your Needs
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-md leading-relaxed font-mono">
          // It is easier to entrust the work to the experts because they are able to provide the best results with reliable quality
        </p>
        
        <div className="grid grid-cols-2 gap-8 pt-4">
          <div className="border-l-2 border-cyan-400 pl-4">
            <h3 className="text-zinc-50 text-3xl font-bold mb-1 font-mono">10+</h3>
            <p className="text-xs text-zinc-400 uppercase tracking-wider">Projects Completed</p>
          </div>
          <div className="border-l-2 border-cyan-400 pl-4">
            <h3 className="text-zinc-50 text-3xl font-bold mb-1 font-mono">Web</h3>
            <p className="text-xs text-zinc-400 uppercase tracking-wider">Developer</p>
          </div>
          <div className="border-l-2 border-cyan-400 pl-4">
            <h3 className="text-zinc-50 text-3xl font-bold mb-1 font-mono">5+</h3>
            <p className="text-xs text-zinc-400 uppercase tracking-wider">AI Tools Leveraged</p>
          </div>
          <div className="border-l-2 border-cyan-400 pl-4">
            <h3 className="text-zinc-50 text-3xl font-bold mb-1 font-mono">IT</h3>
            <p className="text-xs text-zinc-400 uppercase tracking-wider">B.Tech Student</p>
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-4">
        {[
          { title: 'Frontend Development', count: 'React, Tailwind, TS', icon: <Code2 size={24} /> },
          { title: 'Full-Stack Apps', count: 'Node.js, Firebase', icon: <Database size={24} /> },
          { title: 'AI Integration', count: 'Gemini AI, LLMs', icon: <Sparkles size={24} /> }
        ].map((service, idx) => (
          <div key={idx} className="group flex items-center justify-between p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-cyan-400/50 transition-colors cursor-pointer">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1 text-zinc-50">{service.title}</h4>
                <p className="text-xs text-zinc-400 font-mono">{service.count}</p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:bg-cyan-400 group-hover:text-zinc-950 group-hover:border-cyan-400 transition-all duration-300">
              <ArrowRight size={20} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
