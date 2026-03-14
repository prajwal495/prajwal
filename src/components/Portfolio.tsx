import { ArrowUpRight, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="flex justify-between items-end mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-mono mb-4">
            <Code2 size={14} />
            <span>&lt;projects /&gt;</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Featured Work</h2>
          <p className="text-zinc-400 text-sm max-w-md font-mono">
            // A selection of my recent full-stack and AI-integrated projects
          </p>
        </div>
        <button className="hidden md:block px-6 py-3 rounded-lg border border-zinc-800 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors text-sm font-mono bg-zinc-900/50">
          view_all()
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <Link to={`/project/${project.id}`} key={idx} className="group cursor-pointer block">
            <div className="bg-zinc-900/50 rounded-2xl overflow-hidden mb-4 aspect-[4/3] relative shadow-lg border border-zinc-800 group-hover:border-cyan-400/50 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 transition-all duration-500">
              <img 
                src={project.thumbnail} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              
              {/* Color overlay transition */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-cyan-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Hover icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                <div className="w-14 h-14 rounded-full bg-cyan-400 text-zinc-950 flex items-center justify-center translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                  <ArrowUpRight size={24} strokeWidth={2.5} />
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-cyan-400 font-mono border border-zinc-800 z-20 group-hover:border-cyan-400/50 transition-colors duration-500">
                View Details
              </div>
            </div>
            <div className="transform transition-transform duration-300 group-hover:translate-x-2">
              <p className="text-zinc-400 text-xs mb-1 font-mono">{project.category}</p>
              <h3 className="text-xl font-semibold group-hover:text-cyan-400 transition-colors text-zinc-50">{project.title}</h3>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-8 flex justify-center md:hidden">
        <button className="px-6 py-3 rounded-lg border border-zinc-800 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors text-sm font-mono bg-zinc-900/50">
          view_all()
        </button>
      </div>
    </section>
  );
}
