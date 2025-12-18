
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-40 pb-32 px-6">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-8 block">Our Purpose</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-12 gradient-text">
          Architecture that anticipates growth.
        </h1>
        
        <div className="space-y-12 text-xl text-gray-400 leading-relaxed font-light">
          <p className="text-white font-normal">
            Zelavo exists to solve the fundamental friction points that prevent ambitious SMEs from reaching their full potential.
          </p>
          <p>
            We believe that software shouldn't just be a tool—it should be an asset. In an era where AI is rapidly commoditized, the real value lies in how these technologies are architected, integrated, and deployed within a unique business context.
          </p>
          <p>
            Our team focuses on the intersection of three critical pillars: technical integrity, product intuition, and business logic. We don't build features; we build systems that enable autonomy and scale.
          </p>
          <p>
            Operating with the precision of an enterprise lab and the speed of a startup, Zelavo is the silent engineering partner for the next generation of industry leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-32 pt-24 border-t border-white/10">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">The Standard</h3>
            <p className="text-gray-500 leading-relaxed">
              We adhere to the highest standards of code quality and security. Every line of code is written with scalability in mind, ensuring your platform can handle tomorrow's traffic today.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">The Partnership</h3>
            <p className="text-gray-500 leading-relaxed">
              We are not a traditional agency. We act as an extension of your leadership team, providing the technical foresight needed to navigate complex market shifts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
