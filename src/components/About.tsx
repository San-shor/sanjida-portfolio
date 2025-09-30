'use client';

import { useEffect, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const skills = [
    'JavaScript/TypeScript',
    'React/Next.js',
    'Node.js',
    'Python',
    'UI/UX Design',
    'Database Design',
    'Cloud Computing',
    'DevOps',
  ];

  return (
    <section id='about' className='py-20 bg-white dark:bg-gray-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}>
            <h2 className='text-3xl sm:text-4xl font-bold text-center text-foreground mb-4'>
              About Me
            </h2>
            <div className='w-16 h-0.5 bg-blue-600 mx-auto mb-12' />
          </div>

          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-8'
              }`}>
              <div className='space-y-6'>
                <p className='text-lg text-muted leading-relaxed'>
                  I'm a passionate full-stack developer with a love for creating
                  clean, functional digital experiences. With expertise in
                  modern web technologies, I bring ideas to life through minimal
                  design and thoughtful code.
                </p>
                <p className='text-lg text-muted leading-relaxed'>
                  My journey in tech started with curiosity and has evolved into
                  a career focused on solving real-world problems. I believe in
                  the power of technology to make a positive impact through
                  simple, elegant solutions.
                </p>
                <p className='text-lg text-muted leading-relaxed'>
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community.
                </p>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-8'
              }`}>
              <div className='bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-border'>
                <h3 className='text-2xl font-bold text-foreground mb-6'>
                  What I Do
                </h3>
                <div className='grid grid-cols-2 gap-4'>
                  {skills.map((skill, index) => (
                    <div
                      key={skill}
                      className='bg-white dark:bg-gray-700 px-4 py-3 rounded-lg text-center font-medium text-foreground hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300 border border-border'
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
