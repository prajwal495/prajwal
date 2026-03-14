import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(target);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(target);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-zinc-800 pt-16 pb-8 mt-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-cyan-400 rounded flex items-center justify-center text-zinc-950 font-mono font-bold text-sm">
                P_
              </div>
              <span className="font-mono font-semibold text-xl tracking-tight text-zinc-50">Prajwal<span className="text-cyan-400">.dev</span></span>
            </Link>
            <p className="text-zinc-400 text-sm max-w-xs font-mono">
              // A B.Tech IT student who loves turning ideas into real, working web applications.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-zinc-50 font-mono">Services</h4>
            <ul className="space-y-4 text-sm text-zinc-400 font-mono">
              <li><a href="#" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-cyan-400 transition-colors cursor-pointer">&gt; Frontend Dev</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-cyan-400 transition-colors cursor-pointer">&gt; Full-Stack Apps</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-cyan-400 transition-colors cursor-pointer">&gt; AI Integration</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-zinc-50 font-mono">Connect</h4>
            <ul className="space-y-4 text-sm text-zinc-400 font-mono">
              <li><a href="https://github.com/PrajwalChaple" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">&gt; GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/prajwalchaple" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">&gt; LinkedIn</a></li>
              <li><a href="https://www.instagram.com/prajwal__14_" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">&gt; Instagram</a></li>
              <li><a href="mailto:prajwalchaple14@gmail.com" className="hover:text-cyan-400 transition-colors">&gt; Email</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-zinc-50 font-mono">Information</h4>
            <ul className="space-y-4 text-sm text-zinc-400 font-mono">
              <li><a href="#" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-cyan-400 transition-colors cursor-pointer">&gt; About Me</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'portfolio')} className="hover:text-cyan-400 transition-colors cursor-pointer">&gt; My Work</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-cyan-400 transition-colors cursor-pointer">&gt; Contact Me</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-mono">
          <p>© {new Date().getFullYear()} Prajwal Chaple. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
