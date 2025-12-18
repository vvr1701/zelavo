
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden bg-[#050505]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-6">
        {/* Cinematic Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,15,20,0.8)_0%,#050507_100%)]" />
        
        {/* Subtle Noise Texture Overlay specifically for the Hero */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-[120px]" />
        
        <div className="relative max-w-7xl mx-auto w-full z-10">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-[0.2em] text-white/40 mb-8 uppercase">
              Engineering Excellence for SMEs
            </span>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 gradient-text leading-[1.1]">
              Intelligent scale for the modern SME.
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl leading-relaxed">
              Zelavo builds elite AI automation and bespoke software ecosystems designed to handle the complexity of growth. We turn operational friction into competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-[#fafafa] text-neutral-900 font-semibold rounded-full hover:bg-white transition-all text-center flex items-center justify-center group"
              >
                Schedule Consultation
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                to="/about" 
                className="px-8 py-4 border border-white/10 text-neutral-300 font-semibold rounded-full hover:bg-white/5 transition-all text-center"
              >
                Our Philosophy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signal Section - Enterprise Capability */}
      <section className="py-20 border-y border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded border border-white/20 flex items-center justify-center font-bold text-xs italic">AI</div>
              <span className="text-sm font-semibold tracking-widest uppercase">Autonomous Intelligence</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded border border-white/20 flex items-center justify-center font-bold text-xs italic">CL</div>
              <span className="text-sm font-semibold tracking-widest uppercase">Cloud Architecture</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded border border-white/20 flex items-center justify-center font-bold text-xs italic">SE</div>
              <span className="text-sm font-semibold tracking-widest uppercase">Enterprise Security</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded border border-white/20 flex items-center justify-center font-bold text-xs italic">DT</div>
              <span className="text-sm font-semibold tracking-widest uppercase">Data Pipelines</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section - Softened off-white */}
      <section className="py-32 px-6 bg-neutral-50 text-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-6 block">The Context</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-10 leading-[1.1]">
                SMEs are being left behind by legacy tech.
              </h2>
            </div>
            <div className="space-y-8 text-lg text-neutral-600 leading-relaxed">
              <p>
                Most small and medium enterprises operate on fragmented systems that don't talk to each other. As your business scales, these inefficiencies don't just stay—they multiply.
              </p>
              <p>
                The gap between modern AI capabilities and day-to-day operations is widening. Zelavo was founded to bridge that gap, providing enterprise-grade infrastructure to companies that value precision and speed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Core Capabilities</h2>
            <p className="text-neutral-500 text-lg max-w-2xl">High-performance solutions built for the long term.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
            {[
              {
                title: "AI Automation Agents",
                desc: "Custom LLM integrations and autonomous agents that handle high-volume data processing and customer interactions with human-level nuance.",
                icon: "A"
              },
              {
                title: "SaaS Platform Build",
                desc: "From concept to market. We architect scalable multi-tenant architectures that perform at scale and provide seamless user experiences.",
                icon: "S"
              },
              {
                title: "Design Systems",
                desc: "Enterprise-grade visual languages. We create cohesive design systems that ensure your brand feels premium across every digital touchpoint.",
                icon: "D"
              },
              {
                title: "Web Engine Engineering",
                desc: "Beyond templates. We build bespoke web applications using the latest edge computing technologies for unparalleled performance.",
                icon: "W"
              }
            ].map((service, idx) => (
              <div 
                key={idx} 
                className="p-12 bg-black hover:bg-[#0f0f0f] transition-all duration-700 ease-in-out group relative hover:z-10 hover:scale-[1.01]"
              >
                {/* Subtle Glow Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />
                
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-xl font-bold mb-8 group-hover:bg-[#fafafa] group-hover:text-black transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:translate-x-1 transition-transform duration-500">{service.title}</h3>
                <p className="text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors duration-500">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-600 mb-6 block">Case Studies</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">Proof of Performance</h2>
            </div>
            <p className="text-neutral-500 text-sm italic font-light tracking-wide opacity-60">*Some projects are anonymized or represent pilot and internal deployments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                client: "Anonymized Logistics SME",
                title: "Automation of Pilot Fleet Management",
                problem: "Fragmented tracking systems caused 12% revenue leakage in dispatching operations.",
                solution: "Implemented an AI-driven routing agent and custom unified dashboard.",
                result: "14% increase in fleet utilization within first 60 days."
              },
              {
                client: "Internal Proof of Concept",
                title: "Enterprise Knowledge Base Agent",
                problem: "Internal documentation search was taking engineers 30 mins per query.",
                solution: "Engineered a RAG-based internal search tool with semantic understanding.",
                result: "Information retrieval time reduced to sub-2 seconds."
              },
              {
                client: "SaaS Pilot Deployment",
                title: "Multi-tenant Fintech Portal",
                problem: "Legacy portal couldn't handle more than 50 simultaneous high-data sessions.",
                solution: "Rebuilt core engine on a serverless edge architecture with real-time sync.",
                result: "Supported 500+ concurrent sessions with zero latency degradation."
              }
            ].map((study, idx) => (
              <div key={idx} className="border border-white/5 bg-white/[0.02] p-10 rounded-3xl flex flex-col justify-between hover:border-white/20 transition-all h-full group">
                <div>
                  <span className="text-[10px] text-neutral-600 font-bold uppercase tracking-widest mb-4 block">{study.client}</span>
                  <h3 className="text-2xl font-bold mb-8 leading-tight text-neutral-200 group-hover:text-white transition-colors">{study.title}</h3>
                  <div className="space-y-6 mb-12">
                    <div>
                      <h4 className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">Problem</h4>
                      <p className="text-sm text-neutral-500 leading-relaxed">{study.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">Solution</h4>
                      <p className="text-sm text-neutral-500 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>
                </div>
                <div className="pt-8 border-t border-white/5">
                  <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2">Outcome</h4>
                  <p className="text-xl font-medium text-white">{study.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Softened Background */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-[#fafafa] rounded-[3rem] p-12 md:p-24 text-center text-neutral-900 overflow-hidden relative shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neutral-100 rounded-full blur-[80px] -mr-32 -mt-32 opacity-40" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Ready to build?</h2>
            <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              We take on a limited number of high-impact projects each quarter to ensure engineering excellence. Let’s discuss your architecture.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-12 py-5 bg-[#050505] text-white font-bold rounded-full hover:bg-neutral-800 transition-all text-lg"
            >
              Start Project Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;