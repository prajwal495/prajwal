import { Terminal } from 'lucide-react';

export default function Testimonial() {
  return (
    <section className="py-20 flex flex-col md:flex-row gap-12 items-center" id="about">
      <div className="flex-1 w-full">
        <div className="bg-zinc-900/50 rounded-2xl p-8 md:p-12 relative border border-zinc-800 shadow-xl">
          
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
            <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 flex items-center justify-center shadow-inner">
              <Terminal size={40} className="text-cyan-400 opacity-80" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <p className="text-lg md:text-xl leading-relaxed mb-8 font-mono text-zinc-300">
                <span className="text-cyan-400">const</span> <span className="text-blue-400">philosophy</span> <span className="text-cyan-400">=</span> <span className="text-green-400">"I love turning ideas into real, working web applications. I focus on building clean, responsive, and user-friendly digital experiences while leveraging AI tools for faster development."</span><span className="text-zinc-50">;</span>
              </p>
              
              <div className="flex justify-between items-end border-t border-zinc-800 pt-6">
                <div>
                  <h4 className="font-bold text-lg text-zinc-50">Prajwal Chaple</h4>
                  <p className="text-zinc-500 text-sm font-mono mt-1">Web Developer & Creator</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-cyan-400 font-bold text-xl font-mono">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
