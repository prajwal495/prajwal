import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Code2, Layers, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-3 rounded-lg border border-zinc-800 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors text-sm font-mono bg-zinc-900/50"
        >
          <ArrowLeft size={16} className="inline mr-2" />
          return_home()
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-cyan-400 selection:text-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <Navbar />
        
        <main className="py-20">
          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors font-mono text-sm mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            cd ..
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-mono mb-4">
              <Code2 size={14} />
              <span>{project.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4">
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-400 text-zinc-950 font-semibold hover:bg-cyan-300 transition-colors"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
              {project.repo && (
                <a 
                  href={project.repo} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-800 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors bg-zinc-900/50"
                >
                  <Github size={18} />
                  Repository
                </a>
              )}
            </div>
          </div>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl mb-16 bg-zinc-900/50">
            <img 
              src={project.img} 
              alt={project.title} 
              className="w-full h-auto object-cover aspect-video"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Layers className="text-cyan-400" size={24} />
                  Overview
                </h2>
                <p className="text-zinc-400 leading-relaxed text-lg">
                  {project.description}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-cyan-400" size={24} />
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-zinc-400">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 sticky top-24">
                <h3 className="text-lg font-bold mb-4 font-mono text-zinc-50">
                  <span className="text-cyan-400">const</span> technologies = [
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 rounded-md bg-zinc-800/50 text-zinc-300 text-sm border border-zinc-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold font-mono text-zinc-50">
                  ];
                </h3>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
