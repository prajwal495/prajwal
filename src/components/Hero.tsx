import { motion } from 'motion/react';
import { Github, Instagram, Linkedin, Mail, Terminal, Code2, Cpu } from 'lucide-react';

export default function Hero() {
  return (
    <section className="py-12 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
      <div className="flex-1 space-y-6 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-mono mb-4">
          <Terminal size={14} />
          <span>Hello World</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-zinc-50 tracking-tight">
          Prajwal Chaple
        </h1>
        <h2 className="text-2xl md:text-3xl text-zinc-400 font-light flex items-center gap-3">
          <span className="text-cyan-400">&gt;</span> Full-Stack Developer
        </h2>
        <p className="text-zinc-400 max-w-md text-sm md:text-base leading-relaxed pt-4 font-mono">
          // B.Tech IT student turning coffee into code.
          <br />
          // Building scalable web apps & integrating AI.
        </p>
        
        <div className="pt-6 flex gap-4">
          <a href="#portfolio" className="px-6 py-3 bg-cyan-400 text-zinc-950 font-medium rounded-lg hover:bg-cyan-300 transition-colors flex items-center gap-2">
            <Code2 size={18} />
            View Projects
          </a>
          <a href="https://github.com/PrajwalChaple" target="_blank" rel="noreferrer" className="px-6 py-3 bg-zinc-900 text-zinc-50 font-medium rounded-lg border border-zinc-800 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors flex items-center gap-2">
            <Github size={18} />
            GitHub
          </a>
        </div>
      </div>

      <div className="flex-1 relative flex justify-center items-center w-full max-w-md lg:max-w-none">
        {/* Tech Graphic Element */}
        <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
          
          {/* Background Glow */}
          <div className="absolute w-3/4 h-3/4 bg-cyan-400 rounded-full opacity-5 blur-[100px]"></div>
          
          {/* Code Editor Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 rounded-xl overflow-hidden shadow-2xl z-10"
          >
            {/* Editor Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="ml-4 text-xs font-mono text-zinc-500 flex items-center gap-2">
                <Cpu size={12} /> developer.ts
              </div>
            </div>
            
            {/* Editor Content */}
            <div className="p-6 font-mono text-sm md:text-base leading-relaxed overflow-x-auto">
              <div className="flex">
                <span className="text-zinc-600 select-none pr-4 text-right w-8">1</span>
                <span className="text-pink-400">const</span> <span className="text-blue-400">developer</span> <span className="text-cyan-400">=</span> <span className="text-yellow-300">{'{'}</span>
              </div>
              <div className="flex">
                <span className="text-zinc-600 select-none pr-4 text-right w-8">2</span>
                <span className="text-zinc-50 ml-4">name:</span> <span className="text-green-400">'Prajwal Chaple'</span><span className="text-zinc-50">,</span>
              </div>
              <div className="flex">
                <span className="text-zinc-600 select-none pr-4 text-right w-8">3</span>
                <span className="text-zinc-50 ml-4">role:</span> <span className="text-green-400">'Full-Stack Web Dev'</span><span className="text-zinc-50">,</span>
              </div>
              <div className="flex">
                <span className="text-zinc-600 select-none pr-4 text-right w-8">4</span>
                <span className="text-zinc-50 ml-4">education:</span> <span className="text-green-400">'B.Tech IT'</span><span className="text-zinc-50">,</span>
              </div>
              <div className="flex">
                <span className="text-zinc-600 select-none pr-4 text-right w-8">5</span>
                <span className="text-zinc-50 ml-4">skills:</span> <span className="text-purple-400">[</span>
              </div>
              <div className="flex">
                <span className="text-zinc-600 select-none pr-4 text-right w-8">6</span>
                <span className="text-green-400 ml-8">'React'</span><span className="text-zinc-50">,</span> <span className="text-green-400">'TypeScript'</span><span className="text-zinc-50">,</span>
              </div>
              <div className="flex">
                <span className="text-zinc-600 select-none pr-4 text-right w-8">7</span>
                <span className="text-green-400 ml-8">'Node.js'</span><span className="text-zinc-50">,</span> <span className="text-green-400">'Firebase'</span>
              </div>
              <div className="flex">
                <span className="text-zinc-600 select-none pr-4 text-right w-8">8</span>
                <span className="text-purple-400 ml-4">]</span><span className="text-zinc-50">,</span>
              </div>
              <div className="flex">
                <span className="text-zinc-600 select-none pr-4 text-right w-8">9</span>
                <span className="text-zinc-50 ml-4">isCoding:</span> <span className="text-orange-400">true</span>
              </div>
              <div className="flex">
                <span className="text-zinc-600 select-none pr-4 text-right w-8">10</span>
                <span className="text-yellow-300">{'}'}</span><span className="text-zinc-50">;</span>
              </div>
              <div className="flex mt-2">
                <span className="text-zinc-600 select-none pr-4 text-right w-8">11</span>
                <span className="text-zinc-50 animate-pulse">_</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links - Vertical */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 translate-x-12">
          <a href="https://github.com/PrajwalChaple" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/prajwalchaple" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
          <a href="https://www.instagram.com/prajwal__14_" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-colors"><Instagram size={20} /></a>
          <a href="mailto:prajwalchaple14@gmail.com" className="text-zinc-500 hover:text-cyan-400 transition-colors"><Mail size={20} /></a>
          <div className="w-[1px] h-24 bg-zinc-800 mx-auto mt-4"></div>
        </div>
      </div>
    </section>
  );
}
