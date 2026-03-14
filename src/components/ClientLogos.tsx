import { Code2, Database, Layout, Server, Terminal } from 'lucide-react';

export default function ClientLogos() {
  return (
    <section className="py-8">
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl py-8 px-8 md:px-16 flex flex-wrap justify-center md:justify-between items-center gap-8 shadow-lg backdrop-blur-sm">
        {/* React */}
        <div className="flex items-center gap-3 text-zinc-400 hover:text-cyan-400 transition-colors group cursor-default">
          <Layout className="w-8 h-8 group-hover:scale-110 transition-transform" />
          <span className="text-xl font-mono font-semibold tracking-tight">React</span>
        </div>
        
        {/* TypeScript */}
        <div className="flex items-center gap-3 text-zinc-400 hover:text-blue-400 transition-colors group cursor-default">
          <Code2 className="w-8 h-8 group-hover:scale-110 transition-transform" />
          <span className="text-xl font-mono font-semibold tracking-tight">TypeScript</span>
        </div>

        {/* Node.js */}
        <div className="flex items-center gap-3 text-zinc-400 hover:text-green-400 transition-colors group cursor-default">
          <Server className="w-8 h-8 group-hover:scale-110 transition-transform" />
          <span className="text-xl font-mono font-semibold tracking-tight">Node.js</span>
        </div>

        {/* Firebase */}
        <div className="flex items-center gap-3 text-zinc-400 hover:text-yellow-400 transition-colors group cursor-default">
          <Database className="w-8 h-8 group-hover:scale-110 transition-transform" />
          <span className="text-xl font-mono font-semibold tracking-tight">Firebase</span>
        </div>
      </div>
    </section>
  );
}
