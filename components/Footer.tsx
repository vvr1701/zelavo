
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-12 md:py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-2xl font-bold tracking-tighter mb-6 block">ZELAVO</Link>
          <p className="text-gray-500 max-w-sm leading-relaxed">
            Engineering the next generation of SME automation through purposeful AI and architectural excellence.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6">Capabilities</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><span className="hover:text-white transition-colors cursor-default">AI Automation Agents</span></li>
            <li><span className="hover:text-white transition-colors cursor-default">SaaS Development</span></li>
            <li><span className="hover:text-white transition-colors cursor-default">Custom Web Engines</span></li>
            <li><span className="hover:text-white transition-colors cursor-default">Scale Strategy</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><a href="mailto:hello@zelavo.in" className="hover:text-white transition-colors">hello@zelavo.in</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col items-start gap-8">
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Zelavo Solutions. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span className="hover:text-gray-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-400 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
        <p className="text-[10px] text-gray-700 leading-relaxed max-w-3xl">
          Zelavo is a software & AI solutions company focused on building bespoke systems for SMEs. Some projects discussed on this platform may include anonymized pilot deployments or internal proof-of-concept builds.
        </p>
      </div>
    </footer>
  );
};

export default Footer;