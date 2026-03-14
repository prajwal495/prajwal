import { Quote } from 'lucide-react';

export default function Testimonial() {
  return (
    <section id="quote" className="py-32 relative my-20">
      {/* Background styling */}
      <div className="absolute inset-0 bg-zinc-900/30 border-y border-zinc-800/50"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <Quote className="w-16 h-16 text-cyan-400/20 mx-auto mb-8" />
        
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-10 text-zinc-100 tracking-tight">
          "Programs must be written for people to read, and only incidentally for machines to execute."
        </h2>
        
        <div className="inline-flex items-center justify-center gap-4">
          <div className="h-[1px] w-12 bg-cyan-400/50"></div>
          <p className="text-zinc-400 font-mono text-sm uppercase tracking-widest">Harold Abelson</p>
          <div className="h-[1px] w-12 bg-cyan-400/50"></div>
        </div>
      </div>
    </section>
  );
}
