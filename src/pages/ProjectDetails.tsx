import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/" className="text-cyan-400 hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors mb-8 font-mono text-sm">
        <ArrowLeft size={16} />
        cd ..
      </Link>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
      <p className="text-cyan-400 font-mono mb-8">{project.category}</p>
      
      <div className="aspect-video rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 mb-12">
        <img 
          src={project.thumbnail} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="prose prose-invert max-w-none">
        <p className="text-zinc-300 text-lg leading-relaxed mb-8">
          Detailed case study for {project.title} goes here. This project demonstrates advanced capabilities in building scalable, modern web applications.
        </p>
        
        <a 
          href={project.link} 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-cyan-400 text-zinc-950 font-semibold hover:bg-cyan-300 transition-colors"
        >
          Visit Live Site
        </a>
      </div>
    </div>
  );
}
