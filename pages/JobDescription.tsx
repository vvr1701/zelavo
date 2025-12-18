
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const JOB_DATA: Record<string, any> = {
  "ai-ml-intern": {
    title: "AI/ML Intern",
    category: "Internship",
    duration: "2 Months",
    location: "Remote / Hybrid",
    stipend: "Performance-linked (Post-training)",
    overview: "You will join our AI Labs to assist in the development and refinement of proprietary RAG (Retrieval-Augmented Generation) architectures designed for high-precision SME data retrieval.",
    whoShouldApply: "Individuals obsessed with the internal mechanics of LLMs. You should be someone who isn't satisfied with just calling an API, but wants to understand embedding spaces, tokenization strategies, and the nuance of semantic retrieval.",
    customQuestion: "What is your preferred LLM orchestration framework (e.g., LangChain, LlamaIndex) and why?",
    responsibilities: [
      "Assisting in the engineering of data ingestion pipelines for large-scale unstructured datasets.",
      "Fine-tuning domain-specific LLMs for improved accuracy in niche industry verticals.",
      "Evaluating model performance using standardized benchmarks and custom SME-focused metrics.",
      "Collaborating with backend engineers to integrate AI models into production SaaS environments."
    ],
    requirements: [
      "Solid understanding of Python and deep learning frameworks (PyTorch/TensorFlow).",
      "Familiarity with LangChain, LlamaIndex, or similar LLM orchestration tools.",
      "Experience with Vector Databases (Pinecone, Weaviate, or Chroma).",
      "A strong desire to ship production-ready AI, not just research experiments."
    ],
    niceToHave: [
      "Published research in NLP or Computer Vision.",
      "Experience with quantization and model optimization (TensorRT, ONNX).",
      "Contributions to open-source AI projects."
    ]
  },
  "full-stack-intern": {
    title: "Full Stack Developer Intern",
    category: "Internship",
    duration: "2 Months",
    location: "Remote / Hybrid",
    stipend: "Performance-linked (Post-training)",
    overview: "Contribute to the end-to-end development of multi-tenant SaaS platforms. You will work across the entire stack, from frontend user interfaces to backend microservices.",
    whoShouldApply: "Product-minded engineers who love the 'aha!' moment of seeing a feature go from a database schema to a polished UI. You are comfortable jumping between environments and care about the flow of data.",
    customQuestion: "Describe a challenging bug you solved in a full-stack application and the stack you used.",
    responsibilities: [
      "Building responsive and interactive web components using React and TypeScript.",
      "Developing scalable server-side logic and RESTful APIs with Node.js.",
      "Implementing multi-tenant authentication and authorization flows.",
      "Participating in code reviews and architectural planning sessions."
    ],
    requirements: [
      "Proficiency in TypeScript, React, and Node.js.",
      "Basic understanding of SQL and NoSQL database management.",
      "Familiarity with modern CSS frameworks (Tailwind, CSS Modules).",
      "Strong problem-solving skills and a focus on clean, maintainable code."
    ],
    niceToHave: [
      "Experience with Docker and containerization.",
      "Familiarity with AWS services (S3, Lambda, RDS).",
      "Knowledge of Testing frameworks like Jest or Playwright."
    ]
  },
  "frontend-intern": {
    title: "Frontend Intern",
    category: "Internship",
    duration: "2 Months",
    location: "Remote",
    stipend: "Performance-linked (Post-training)",
    overview: "Focus on creating high-performance, pixel-perfect user experiences. You will translate complex enterprise requirements into intuitive and beautiful interfaces.",
    whoShouldApply: "Developers with a keen eye for aesthetics. If you notice a 1px misalignment or a stuttering animation, and it bothers you until it's fixed, you belong here. You care about 60fps and the 'feel' of a product.",
    customQuestion: "What is your approach to ensuring 60fps animations or smooth transitions in a React application?",
    responsibilities: [
      "Developing modular and reusable UI components for our internal design system.",
      "Optimizing web performance for core vitals and accessibility.",
      "Collaborating with designers to implement cinematic animations and smooth transitions.",
      "Ensuring cross-browser compatibility and mobile responsiveness."
    ],
    requirements: [
      "Strong foundation in React, Tailwind CSS, and Framer Motion.",
      "Attention to detail regarding typography, spacing, and visual hierarchy.",
      "Experience with state management libraries (Zustand, Redux).",
      "Portfolio demonstrating ability to build high-end UI."
    ],
    niceToHave: [
      "Experience with SVG animations or Canvas/WebGL.",
      "Familiarity with Headless UI or Radix UI.",
      "Understanding of Core Web Vitals optimization."
    ]
  },
  "backend-intern": {
    title: "Backend Intern",
    category: "Internship",
    duration: "2 Months",
    location: "Remote",
    stipend: "Performance-linked (Post-training)",
    overview: "Join the core engineering team to build the invisible infrastructure that powers our AI agents and SaaS applications.",
    whoShouldApply: "Engineers who find beauty in high-performance systems and clean API design. You enjoy thinking about race conditions, database indexing, and how to scale services to thousands of concurrent users.",
    customQuestion: "Briefly explain how you would approach database schema design for a multi-tenant SaaS application.",
    responsibilities: [
      "Engineering robust API endpoints and middleware for data processing.",
      "Optimizing database queries and schema designs for high performance.",
      "Implementing security best practices for data protection and encryption.",
      "Assisting in the deployment of services using containerization technologies."
    ],
    requirements: [
      "Strong knowledge of Node.js and Express.",
      "Familiarity with PostgreSQL or MongoDB.",
      "Understanding of asynchronous programming and message queues.",
      "Interest in cloud architecture and distributed systems."
    ],
    niceToHave: [
      "Experience with Redis or other caching strategies.",
      "Knowledge of gRPC or GraphQL.",
      "Familiarity with Kubernetes basics."
    ]
  },
  "data-engineering-intern": {
    title: "Data Engineering Intern",
    category: "Internship",
    duration: "2 Months",
    location: "Remote",
    stipend: "Performance-linked (Post-training)",
    overview: "Help architect the data pipelines that feed our intelligent systems. You will handle the extraction, transformation, and loading of raw business data.",
    whoShouldApply: "Someone who treats data as the lifeblood of an organization. You are meticulous about data integrity and enjoy building reliable pipelines that others can trust.",
    customQuestion: "What is your experience with data validation or integrity checks in ETL pipelines?",
    responsibilities: [
      "Developing automated ETL workflows using modern data tools.",
      "Ensuring data quality and integrity across multiple sources.",
      "Managing and scaling data warehouses for analytical processing.",
      "Supporting the AI team by providing clean, structured datasets."
    ],
    requirements: [
      "Proficiency in SQL and Python.",
      "Experience with workflow orchestration tools like Airflow or Prefect.",
      "Understanding of data modeling principles (Star Schema, Data Vault).",
      "Knowledge of cloud data platforms (BigQuery, Snowflake)."
    ],
    niceToHave: [
      "Experience with dbt (data build tool).",
      "Familiarity with data streaming (Kafka, Kinesis).",
      "Basic understanding of Machine Learning data prep."
    ]
  },
  "cloud-devops-intern": {
    title: "Cloud/DevOps Intern",
    category: "Internship",
    duration: "2 Months",
    location: "Hybrid",
    stipend: "Performance-linked (Post-training)",
    overview: "Focus on the automation of our infrastructure and deployment cycles. You will ensure our systems are reliable, scalable, and secure.",
    whoShouldApply: "Automation enthusiasts. You believe that if you have to do something twice, you should automate it. You find 'infrastructure as code' to be a powerful philosophy.",
    customQuestion: "Which CI/CD tool do you find most efficient for small, agile teams and why?",
    responsibilities: [
      "Managing CI/CD pipelines to ensure seamless code deployments.",
      "Monitoring system health and performance using observability tools.",
      "Automating cloud infrastructure provisioning using IaC tools.",
      "Implementing container orchestration strategies with Docker and Kubernetes."
    ],
    requirements: [
      "Familiarity with AWS, GCP, or Azure environments.",
      "Understanding of Docker containerization and Git workflows.",
      "Basic knowledge of Terraform or CloudFormation.",
      "Strong interest in site reliability and infrastructure automation."
    ],
    niceToHave: [
      "Experience with Prometheus and Grafana.",
      "Knowledge of Shell scripting (Bash/Zsh).",
      "Familiarity with Serverless architectures."
    ]
  },
  "ui-ux-intern": {
    title: "UI/UX Design Intern",
    category: "Internship",
    duration: "2 Months",
    location: "Remote",
    stipend: "Performance-linked (Post-training)",
    overview: "Help define the visual language of Zelavo. You will create enterprise-grade designs that balance complex functionality with aesthetic elegance.",
    whoShouldApply: "Designers who believe that 'Design is how it works.' You are a systems thinker who enjoys creating consistent components and intuitive flows for complex business logic.",
    customQuestion: "Link to a specific UI interaction you designed and briefly explain the logic behind it.",
    responsibilities: [
      "Designing intuitive user flows and wireframes for new product features.",
      "Maintaining and expanding our internal Figma design system.",
      "Conducting user research to validate design decisions.",
      "Preparing high-fidelity mockups and interactive prototypes for stakeholder review."
    ],
    requirements: [
      "Expertise in Figma and modern design tools.",
      "Solid understanding of UX principles and design psychology.",
      "Ability to create clean, minimal, and premium visual aesthetics.",
      "Excellent communication skills and the ability to articulate design logic."
    ],
    niceToHave: [
      "Basic knowledge of HTML/CSS.",
      "Experience with motion design in Principle or After Effects.",
      "Familiarity with Accessibility standards (WCAG)."
    ]
  },
  "product-engineering-intern": {
    title: "Product Engineering Intern",
    category: "Internship",
    duration: "2 Months",
    location: "Remote",
    stipend: "Performance-linked (Post-training)",
    overview: "Bridge the gap between business strategy and technical execution. You will work closely with leadership to scope and define the next generation of SME solutions.",
    whoShouldApply: "The 'mini-CEO' archetype. You have a technical foundation but also possess a high degree of business empathy. You are excellent at distilling chaos into actionable requirements.",
    customQuestion: "How do you personally prioritize technical debt against urgent new feature requests?",
    responsibilities: [
      "Translating business requirements into detailed technical specifications.",
      "Managing product backlogs and prioritizing features for development sprints.",
      "Analyzing market trends to identify new opportunities for AI automation.",
      "Documenting product architecture and user journeys."
    ],
    requirements: [
      "Strong analytical and organizational skills.",
      "Basic understanding of software development lifecycles.",
      "Ability to communicate complex technical concepts to non-technical stakeholders.",
      "Passion for building products that solve real business problems."
    ],
    niceToHave: [
      "Previous experience in a startup environment.",
      "Knowledge of Agile/Scrum methodologies.",
      "Experience using tools like Jira, Notion, or Linear."
    ]
  },
  "ai-automation-architect": {
    title: "AI Automation Architect",
    category: "Full-time",
    duration: "Indefinite",
    location: "Remote",
    stipend: "₹12L - ₹24L (Indicative)",
    overview: "Lead the design and implementation of autonomous agent systems for our SME clients. This is a high-impact senior role focusing on the convergence of LLMs and business logic.",
    whoShouldApply: "Senior technical leaders who are ready to own the AI roadmap of a scaling firm. You should have a proven track record of moving past 'chatbots' into agentic systems that actually perform work.",
    customQuestion: "Briefly describe the most complex autonomous agent workflow you've architected in a production environment.",
    responsibilities: [
      "Architecting complex agentic workflows using multi-model strategies.",
      "Setting the technical direction for AI integration across all SME platforms.",
      "Mentoring junior engineers and interns on production-grade AI practices.",
      "Collaborating with clients to identify and solve high-value automation problems."
    ],
    requirements: [
      "5+ years of experience in software architecture and machine learning.",
      "Proven track record of deploying AI systems at scale.",
      "Deep expertise in vector databases, prompt engineering, and fine-tuning.",
      "Exceptional leadership skills and strategic business intuition."
    ],
    niceToHave: [
      "Experience in FinTech or HealthTech sectors.",
      "Active contributor to relevant AI research or open-source.",
      "Speaker at major tech conferences."
    ]
  },
  "senior-frontend-engineer": {
    title: "Senior Frontend Engineer (Systems)",
    category: "Full-time",
    duration: "Indefinite",
    location: "Hybrid",
    stipend: "₹10L - ₹18L (Indicative)",
    overview: "Take ownership of the Zelavo frontend ecosystem. You will be responsible for building highly performant, accessible, and visually stunning SaaS engines.",
    whoShouldApply: "Engineers who see the browser as a sophisticated application platform. You are an expert at managing complexity in large React apps and believe that the best UI is invisible.",
    customQuestion: "What are your top 3 strategies for reducing Total Blocking Time (TBT) in a large-scale React SPA?",
    responsibilities: [
      "Leading the development of complex, multi-tenant web applications.",
      "Defining frontend architecture and selection of technical stacks.",
      "Enforcing strict standards for performance, security, and accessibility.",
      "Working closely with product designers to push the boundaries of web UI."
    ],
    requirements: [
      "5+ years of experience with React, TypeScript, and modern frontend ecosystems.",
      "Expert-level knowledge of web performance optimization techniques.",
      "Experience building and maintaining enterprise-grade design systems.",
      "Strong eye for aesthetics and micro-interactions."
    ],
    niceToHave: [
      "Expertise in CSS-in-JS or advanced CSS.",
      "Experience with Next.js App Router.",
      "Track record of improving team engineering culture."
    ]
  }
};

const JobDescription: React.FC = () => {
  const { roleId } = useParams<{ roleId: string }>();
  const role = roleId ? JOB_DATA[roleId] : null;
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Strict validation for resume file
    const resumeFile = formData.get('resume') as File;
    if (!resumeFile || resumeFile.size === 0) {
      alert("Please upload a valid Resume/CV file (PDF or Word) to proceed with your application.");
      setFormStatus('idle');
      return;
    }

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then(() => setFormStatus('success'))
      .catch((error) => {
        console.error("Form submission error:", error);
        setFormStatus('idle');
        alert("There was an error transmitting your application. Please try again.");
      });
  };

  if (!role || !roleId) {
    return (
      <div className="pt-40 pb-32 px-6 text-center text-white bg-black min-h-screen">
        <h1 className="text-4xl font-bold mb-8">Role Not Found</h1>
        <Link to="/careers" className="text-neutral-400 hover:text-white transition-colors underline">
          Back to Careers
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-32 px-6 bg-[#050505] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <Link to="/careers" className="inline-flex items-center text-neutral-500 hover:text-white transition-all mb-12 group">
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
          Careers
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="mb-16">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-neutral-100 leading-tight">
                {role.title}
              </h1>
              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-neutral-400 font-light leading-relaxed mb-12">
                  {role.overview}
                </p>
              </div>
            </div>

            <div className="space-y-20">
              {/* Who should apply */}
              <section className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-12">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-600 mb-8 block">Who should apply</h2>
                <p className="text-xl text-neutral-300 font-light leading-relaxed italic">
                  "{role.whoShouldApply}"
                </p>
              </section>

              {/* Responsibilities */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-600 mb-8 block">Role & Impact</h2>
                <div className="space-y-6">
                  {role.responsibilities.map((item: string, idx: number) => (
                    <div key={idx} className="flex gap-6 group">
                      <span className="text-neutral-800 font-bold text-xl leading-none pt-1">0{idx + 1}</span>
                      <p className="text-neutral-400 text-lg leading-relaxed font-light group-hover:text-neutral-200 transition-colors">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Requirements */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-600 mb-8 block">The Ideal Profile</h2>
                <div className="p-8 md:p-12 bg-white/[0.02] border border-white/5 rounded-[2.5rem]">
                  <ul className="space-y-6">
                    {role.requirements.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-neutral-600 flex-shrink-0"></div>
                        <p className="text-neutral-300 leading-relaxed font-light text-lg">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Nice to have */}
              {role.niceToHave && (
                <section>
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-600 mb-8 block">Nice to have (Optional)</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {role.niceToHave.map((item: string, idx: number) => (
                      <div key={idx} className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl">
                        <p className="text-neutral-500 text-sm font-light">{item}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Application Form */}
              <section id="apply" className="pt-20 border-t border-white/5 scroll-mt-32">
                <div className="bg-[#111113] p-8 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-[100px] -mr-48 -mt-48" />
                  
                  {formStatus === 'success' ? (
                    <div className="py-20 text-center relative z-10">
                      <div className="w-20 h-20 bg-white/10 text-white rounded-full flex items-center justify-center mx-auto mb-8 text-3xl">
                        ✓
                      </div>
                      <h3 className="text-4xl font-bold mb-4 text-neutral-100 tracking-tight">Application Transmitted</h3>
                      <p className="text-neutral-500 text-lg font-light max-w-md mx-auto">
                        Our engineering leadership will review your profile. You can expect a response within 48-72 hours.
                      </p>
                    </div>
                  ) : (
                    <div className="relative z-10">
                      <div className="max-w-xl mb-12">
                        <h2 className="text-4xl font-bold text-neutral-100 mb-4 tracking-tight">Apply for this Position</h2>
                        <p className="text-neutral-500 font-light">
                          Join the Zelavo engineering lab. Compulsory fields are marked with an asterisk (*).
                        </p>
                      </div>

                      <form 
                        name="job-application" 
                        method="POST" 
                        data-netlify="true" 
                        data-netlify-honeypot="bot-field"
                        encType="multipart/form-data"
                        onSubmit={handleSubmit}
                        className="space-y-8"
                      >
                        {/* Netlify Hidden Fields */}
                        <input type="hidden" name="form-name" value="job-application" />
                        <input type="hidden" name="applied-role" value={role.title} />
                        <p className="hidden">
                          <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Full Name *</label>
                            <input 
                              required 
                              type="text" 
                              name="full-name"
                              placeholder="Jane Smith" 
                              className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-white focus:border-white/20 focus:outline-none transition-all placeholder:text-neutral-700"
                            />
                          </div>
                          <div className="space-y-3">
                            <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Work Email *</label>
                            <input 
                              required 
                              type="email" 
                              name="email"
                              placeholder="jane@example.com" 
                              className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-white focus:border-white/20 focus:outline-none transition-all placeholder:text-neutral-700"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">LinkedIn Profile URL (Optional)</label>
                            <input 
                              type="url" 
                              name="linkedin-url"
                              placeholder="https://linkedin.com/in/username" 
                              className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-white focus:border-white/20 focus:outline-none transition-all placeholder:text-neutral-700"
                            />
                          </div>
                          <div className="space-y-3">
                            <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest text-white/90">Resume / CV (PDF/Word) *</label>
                            <div className="relative">
                              <input 
                                required 
                                type="file" 
                                name="resume"
                                accept=".pdf,.doc,.docx"
                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-neutral-400 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-[10px] file:font-bold file:bg-white/20 file:text-neutral-100 hover:file:bg-white/30 transition-all cursor-pointer ring-1 ring-white/5"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Project Portfolio / GitHub (Optional)</label>
                          <input 
                            type="text" 
                            name="portfolio-url"
                            placeholder="github.com/username or your-portfolio.com" 
                            className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-white focus:border-white/20 focus:outline-none transition-all placeholder:text-neutral-700"
                          />
                        </div>

                        {/* Dynamic Role-Specific Question */}
                        {role.customQuestion && (
                          <div className="space-y-3">
                            <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Role Question *</label>
                            <div className="text-sm text-neutral-400 mb-2 font-light italic">{role.customQuestion}</div>
                            <textarea 
                              required
                              name="role-specific-answer"
                              rows={3}
                              placeholder="Your answer..." 
                              className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-white focus:border-white/20 focus:outline-none transition-all placeholder:text-neutral-700 resize-none"
                            />
                          </div>
                        )}

                        <div className="space-y-3">
                          <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Why are you a fit for Zelavo? (Optional)</label>
                          <textarea 
                            name="motivation-text"
                            rows={4}
                            placeholder="Briefly describe your interest in this role and what you hope to achieve." 
                            className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-white focus:border-white/20 focus:outline-none transition-all placeholder:text-neutral-700 resize-none"
                          />
                        </div>

                        <button 
                          type="submit"
                          disabled={formStatus === 'submitting'}
                          className="w-full py-5 bg-[#fdfdfd] text-neutral-900 font-bold rounded-2xl hover:bg-white transition-all disabled:opacity-50 shadow-xl text-lg flex items-center justify-center gap-2"
                        >
                          {formStatus === 'submitting' ? (
                            <>
                              <div className="w-5 h-5 border-2 border-neutral-900/30 border-t-neutral-900 rounded-full animate-spin" />
                              Transmitting...
                            </>
                          ) : 'Submit Application'}
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <div className="p-8 bg-[#111113] border border-white/5 rounded-[2rem] shadow-2xl space-y-10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest mb-2">Category</h3>
                  <p className="text-neutral-200 font-medium">{role.category}</p>
                </div>
                <div>
                  <h3 className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest mb-2">Location</h3>
                  <p className="text-neutral-200 font-medium">{role.location}</p>
                </div>
                <div>
                  <h3 className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest mb-2">Commitment</h3>
                  <p className="text-neutral-200 font-medium">{role.duration}</p>
                </div>
                <div>
                  <h3 className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest mb-2">Compensation</h3>
                  <p className="text-neutral-200 font-medium">{role.stipend}</p>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5">
                <a 
                  href="#apply"
                  className="block w-full py-4 bg-[#fdfdfd] text-neutral-900 text-center font-bold rounded-xl hover:bg-white transition-all shadow-lg text-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Apply Now
                </a>
                <p className="text-[10px] text-neutral-600 text-center mt-6 uppercase tracking-tighter">
                  Review time: ~48 Hours
                </p>
              </div>
            </div>

            {/* Tech Stack Badge Cloud */}
            <div className="mt-8 p-8 border border-white/5 bg-white/[0.01] rounded-[2rem]">
              <h3 className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest mb-6">Core Stack</h3>
              <div className="flex flex-wrap gap-2">
                {roleId.includes('ai') ? ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'PyTorch'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] text-neutral-400 font-medium">{tag}</span>
                )) : roleId.includes('frontend') ? ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Vite'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] text-neutral-400 font-medium">{tag}</span>
                )) : ['TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] text-neutral-400 font-medium">{tag}</span>
                ))}
              </div>
            </div>

            <div className="mt-8 px-4">
              <p className="text-[10px] text-neutral-700 leading-relaxed italic">
                Zelavo is an equal opportunity engineering house. We prioritize work-ethic and technical curiosity above formal degrees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
