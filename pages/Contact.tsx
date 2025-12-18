
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => setFormStatus('success'))
      .catch((error) => {
        console.error("Form submission error:", error);
        setFormStatus('idle');
        alert("There was an error sending your message. Please try again.");
      });
  };

  return (
    <div className="pt-40 pb-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-600 mb-8 block">Contact</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-neutral-100">Start the conversation.</h1>
            <p className="text-xl text-neutral-400 leading-relaxed mb-16 max-w-lg font-light">
              Whether you need to automate a specific vertical or build a complete SaaS ecosystem, we are here to help you architect the future.
            </p>

            <div className="space-y-12">
              <div>
                <h3 className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.2em] mb-4">Email</h3>
                <a href="mailto:hello@zelavo.in" className="text-2xl font-medium text-neutral-200 hover:text-white transition-colors">
                  hello@zelavo.in
                </a>
              </div>
              <div>
                <h3 className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.2em] mb-4">Location</h3>
                <p className="text-2xl font-medium text-neutral-200">
                  Engineering Hub / Remote
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#fafafa] p-8 md:p-12 rounded-[2rem] text-neutral-900 shadow-2xl">
            <h2 className="text-3xl font-bold mb-8">Project Inquiry</h2>
            
            {formStatus === 'success' ? (
              <div className="py-20 text-center">
                <div className="w-16 h-16 bg-[#050505] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  ✓
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Delivered</h3>
                <p className="text-neutral-600">Our engineering lead will contact you within 24 hours.</p>
              </div>
            ) : (
              <form 
                name="contact-form" 
                method="POST" 
                data-netlify="true" 
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Netlify Hidden Fields */}
                <input type="hidden" name="form-name" value="contact-form" />
                <p className="hidden">
                  <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Full Name</label>
                    <input 
                      required 
                      type="text" 
                      name="full-name"
                      placeholder="Jane Smith" 
                      className="w-full bg-neutral-100/50 border border-neutral-200/50 rounded-xl px-4 py-4 focus:border-black/20 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Company</label>
                    <input 
                      required 
                      type="text" 
                      name="company"
                      placeholder="Acme Corp" 
                      className="w-full bg-neutral-100/50 border border-neutral-200/50 rounded-xl px-4 py-4 focus:border-black/20 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Work Email</label>
                  <input 
                    required 
                    type="email" 
                    name="email"
                    placeholder="jane@acme.com" 
                    className="w-full bg-neutral-100/50 border border-neutral-200/50 rounded-xl px-4 py-4 focus:border-black/20 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Message</label>
                  <textarea 
                    required 
                    name="message"
                    rows={5} 
                    placeholder="Tell us about your project..." 
                    className="w-full bg-neutral-100/50 border border-neutral-200/50 rounded-xl px-4 py-4 focus:border-black/20 focus:outline-none transition-colors"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full py-5 bg-[#050505] text-white font-bold rounded-xl hover:bg-neutral-800 transition-all text-lg disabled:opacity-50 shadow-lg"
                >
                  {formStatus === 'submitting' ? 'Sending Inquiry...' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
