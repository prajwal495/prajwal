import { Code, Database, Sparkles } from 'lucide-react';

export default function ServiceCards() {
  const cards = [
    {
      icon: <Code size={24} />,
      title: 'Frontend Development',
      desc: 'Building clean, responsive, and user-friendly digital experiences using React, TypeScript, and Tailwind CSS.'
    },
    {
      icon: <Database size={24} />,
      title: 'Full-Stack Development',
      desc: 'Creating robust backend solutions and database architectures using Node.js and Firebase.'
    },
    {
      icon: <Sparkles size={24} />,
      title: 'AI Integration',
      desc: 'Leveraging AI tools like Gemini AI and LLMs for faster development and smarter application features.'
    }
  ];

  return (
    <section className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, idx) => (
        <div key={idx} className="bg-zinc-900/50 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 shadow-lg border border-zinc-800 hover:border-cyan-400/50 flex flex-col h-full group">
          <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            {card.icon}
          </div>
          <h3 className="text-xl font-semibold mb-4 text-zinc-50">{card.title}</h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow font-mono">
            {card.desc}
          </p>
          <a href="#" className="text-cyan-400 text-sm flex items-center gap-2 hover:underline mt-auto font-mono">
            show_more() <span className="text-lg">→</span>
          </a>
        </div>
      ))}
    </section>
  );
}
