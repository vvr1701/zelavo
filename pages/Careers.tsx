
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Careers: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then(() => setFormStatus('success'))
      .catch((error) => {
        console.error("Form submission error:", error);
        setFormStatus('idle');
        alert("There was an error submitting your profile. Please try again.");
      });
  };

  const fullTimeRoles = [
    {
      id: "ai-automation-architect",
      role: "AI Automation Architect",
      type: "Full-time / Remote",
      department: "Engineering"
    },
    {
      id: "senior-frontend-engineer",
      role: "Senior Frontend Engineer (Systems)",
      type: "Full-time / Hybrid",
      department: "Product"
    }
  ];

  const internshipRoles = [
    {
      id: "ai-ml-intern",
      role: "AI/ML Intern",
      desc: "Assist in developing RAG pipelines and fine-tuning domain-specific LLMs for SME datasets.",
      focus: "Python, LangChain, Vector DBs"
    },
    {
      id: "full-stack-intern",
      role: "Full Stack Developer Intern",
      desc: "Contribute to building multi-tenant SaaS dashboards and scalable microservices.",
      focus: "TypeScript, React, Node.js"
    },
    {
      id: "frontend-intern",
      role: "Frontend Intern",
      desc: "Translate high-fidelity designs into performant, accessible React components.",
      focus: "React, Tailwind, Framer Motion"
    },
    {
      id: "backend-intern",
      role: "Backend Intern",
      desc: "Support the engineering of RESTful APIs and assist in SQL/NoSQL schema optimization.",
      focus: "Express, PostgreSQL, Redis"
    },
    {
      id: "data-engineering-intern",
      role: "Data Engineering Intern",
      desc: "Build robust ETL pipelines to structure raw business data for automated agents.",
      focus: "SQL, Airflow, Data Modeling"
    },
    {
      id: "cloud-devops-intern",
      role: "Cloud/DevOps Intern",
      desc: "Maintain CI/CD pipelines and monitor cloud infrastructure for high availability.",
      focus: "AWS, Docker, GitHub Actions"
    },
    {
      id: "ui-ux-intern",
      role: "UI/UX Design Intern",
      desc: "Create enterprise-grade design systems and intuitive user flows for SaaS platforms.",
      focus: "Figma, Design Systems, Prototyping"
    },
    {
      id: "product-engineering-intern",
      role: "Product Engineering Intern",
      desc: "Bridge the gap between business logic and technical execution for internal builds.",
      focus: "Product Scoping, Agile, Technical Documentation"
    }
  ];

  return (
    <div className="pt-40 pb-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="max-w-3xl mb-24">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-600 mb-8 block">Careers at Zelavo</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-neutral-100 leading-[1.1]">Ship products that matter.</h1>
          <p className="text-xl text-neutral-400 leading-relaxed font-light">
            We are looking for individuals who care about technical nuance and building systems that matter. We provide high-autonomy environments and direct exposure to production-grade SME software ecosystems.
          </p>
        </div>

        {/* Internships Section */}
        <section className="mb-40">
          <div className="mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-600 mb-6 block">Early Career Track</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-100 mb-8">Internships at Zelavo</h2>
            <p className="text-lg text-neutral-400 max-w-3xl font-light leading-relaxed">
              Our internship program is a structured engineering engagement designed for individuals looking to bridge the gap between academic theory and production-grade software delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {internshipRoles.map((role, idx) => (
              <Link 
                key={idx} 
                to={`/careers/${role.id}`}
                className="p-8 border border-white/5 bg-white/[0.01] rounded-[2rem] hover:bg-white/[0.02] hover:border-white/10 transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-[10px] mb-6 group-hover:bg-[#fdfdfd] group-hover:text-black transition-all">
                    →
                  </div>
                  <h3 className="text-xl font-bold text-neutral-100 mb-4 group-hover:text-white transition-colors">{role.role}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-6 font-light">
                    {role.desc}
                  </p>
                </div>
                <div className="pt-6 border-t border-white/5">
                  <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest block mb-1">Focus Area</span>
                  <span className="text-xs text-neutral-300 font-mono">{role.focus}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Internship Structure & Compensation */}
          <div className="mt-20 p-8 md:p-12 bg-white/[0.02] border border-white/5 rounded-[3rem]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-neutral-100 mb-6">Program Structure & Growth</h3>
                <div className="space-y-6 text-neutral-400 font-light leading-relaxed">
                  <p>
                    Internships are typically 1–2 month engagements focused on intensive hands-on learning within our AI and software labs. Initially, these are unpaid positions where we invest in your technical growth.
                  </p>
                  <p>
                    High-performing interns may be invited to extended paid contracts or offered full-time associate positions based on engineering excellence.
                  </p>
                </div>
              </div>
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 h-full flex flex-col justify-center text-center md:text-left">
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] mb-4 block">Indicative Career Track</span>
                <div className="space-y-2">
                  <p className="text-neutral-400 text-sm">Full-Time Associate CTC Range</p>
                  <p className="text-3xl font-bold text-white leading-none">₹6L — ₹10L</p>
                  <p className="text-[10px] text-neutral-600 uppercase font-medium pt-2 leading-relaxed">
                    *Non-promissory. Based on performance.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/5">
              <p className="text-[10px] text-neutral-700 leading-relaxed max-w-4xl italic">
                Disclaimer: Internships at Zelavo are structured as educational engagements and do not constitute a contract of employment. Compensation during the initial training phase is nil; subsequent engagements are meritocratic.
              </p>
            </div>
          </div>
        </section>

        {/* Full-Time Roles Section */}
        <section className="mb-40" id="jobs">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-600 mb-6 block">Professional Track</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-100 mb-12">Senior Roles</h2>
              <div className="space-y-4">
                {fullTimeRoles.map((job, idx) => (
                  <Link 
                    key={idx} 
                    to={`/careers/${job.id}`}
                    className="p-8 bg-white/[0.01] border border-white/5 rounded-3xl flex justify-between items-center group hover:bg-white/[0.03] hover:border-white/10 transition-all cursor-pointer"
                  >
                    <div>
                      <h3 className="font-bold text-xl mb-1 text-neutral-200">{job.role}</h3>
                      <p className="text-sm text-neutral-500 font-medium tracking-tight">{job.department} • {job.type}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#fdfdfd] group-hover:text-black transition-all">
                      →
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Application Intake Form */}
            <div id="apply" className="bg-[#111113] p-8 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden scroll-mt-32">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.01] rounded-full blur-[80px] -mr-32 -mt-32" />
              <h2 className="text-3xl font-bold mb-8 text-neutral-100 relative z-10">Application Intake</h2>
              <p className="text-neutral-500 mb-8 text-sm leading-relaxed relative z-10 font-light">
                Submit your profile for manual review by our engineering leads. Compulsory fields are marked.
              </p>
              
              {formStatus === 'success' ? (
                <div className="py-20 text-center relative z-10">
                  <div className="w-16 h-16 bg-white/10 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-neutral-100">Profile Received</h3>
                  <p className="text-neutral-500">We will review your submission shortly.</p>
                </div>
              ) : (
                <form 
                  name="careers-intake" 
                  method="POST" 
                  data-netlify="true" 
                  data-netlify-honeypot="bot-field"
                  encType="multipart/form-data"
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-10"
                >
                  {/* Netlify Hidden Fields */}
                  <input type="hidden" name="form-name" value="careers-intake" />
                  <p className="hidden">
                    <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                  </p>
                  
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">Full Name *</label>
                      <input 
                        required 
                        type="text" 
                        name="full-name"
                        placeholder="Jane Doe" 
                        className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-4 py-4 text-white focus:border-white/20 focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">Email Address *</label>
                      <input 
                        required 
                        type="email" 
                        name="email"
                        placeholder="jane@company.com" 
                        className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-4 py-4 text-white focus:border-white/20 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">LinkedIn Profile URL (Optional)</label>
                    <input 
                      type="url" 
                      name="linkedin"
                      placeholder="https://linkedin.com/in/username" 
                      className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-4 py-4 text-white focus:border-white/20 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">Resume / CV (PDF/Word) *</label>
                    <input 
                      required 
                      type="file" 
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3 text-neutral-500 text-sm file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-[10px] file:font-bold file:bg-white/10 file:text-neutral-300 hover:file:bg-white/20 transition-all cursor-pointer"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">Role of Interest</label>
                    <select 
                      name="role-interest"
                      className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-4 py-4 text-white focus:border-white/20 focus:outline-none transition-colors appearance-none"
                    >
                      <optgroup label="Internships" className="bg-[#111113]">
                        {internshipRoles.map(o => <option key={o.id} value={o.role}>{o.role}</option>)}
                      </optgroup>
                      <optgroup label="Full-Time" className="bg-[#111113]">
                        {fullTimeRoles.map(o => <option key={o.id} value={o.role}>{o.role}</option>)}
                      </optgroup>
                      <option value="General" className="bg-[#111113]">General Application</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">Portfolio / GitHub / Project Link (Optional)</label>
                    <input 
                      type="text" 
                      name="portfolio-link"
                      placeholder="github.com/yourhandle" 
                      className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-4 py-4 text-white focus:border-white/20 focus:outline-none transition-colors"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 bg-[#fdfdfd] text-neutral-900 font-bold rounded-xl hover:bg-white transition-all disabled:opacity-50 shadow-lg"
                  >
                    {formStatus === 'submitting' ? 'Transmitting...' : 'Submit Profile'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;
