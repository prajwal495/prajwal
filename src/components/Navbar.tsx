import { Menu, Linkedin, Github } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-8">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-cyan-400 rounded flex items-center justify-center text-zinc-950 font-mono font-bold text-sm">
          P_
        </div>
        <span className="font-mono font-semibold text-xl tracking-tight text-zinc-50">Prajwal<span className="text-cyan-400">.dev</span></span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-mono text-zinc-400">
        <a href="#" className="text-cyan-400">~/home</a>
        <a href="#portfolio" className="hover:text-zinc-50 transition-colors">~/portfolio</a>
        <a href="#contact" className="hover:text-zinc-50 transition-colors">~/contact</a>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-4 text-zinc-400">
          <a href="https://github.com/PrajwalChaple" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/prajwalchaple" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors"><Linkedin size={18} /></a>
        </div>
        <button className="text-zinc-50 md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
