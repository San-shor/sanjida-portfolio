'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    {
      name: 'JavaScript/TypeScript',
      icon: 'JS',
      color: 'from-yellow-400 to-orange-500',
    },
    { name: 'React/Next.js', icon: '⚛', color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-emerald-600' },
    { name: 'Svelte', icon: 'S', color: 'from-orange-400 to-red-500' },
    { name: 'SQL', icon: 'DB', color: 'from-blue-600 to-indigo-600' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id='home'
      className='min-h-screen lg:min-h-screen flex items-center justify-center relative overflow-hidden'>
      {/* Minimal background */}
      <div className='absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800' />

      {/* Subtle background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob dark:bg-blue-900/20' />
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 dark:bg-gray-800/20' />
        <div className='absolute top-40 left-40 w-80 h-80 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob animation-delay-4000 dark:bg-blue-900/10' />
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center'>
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground mb-6'>
              <span className='text-blue-600 dark:text-blue-400'>
                Sanjida Akter
              </span>
            </h1>
            <p className='text-xl sm:text-2xl text-muted mb-4'>
              Software Engineer
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}>
            <button
              onClick={() => scrollToSection('projects')}
              className='px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-md'>
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className='px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all duration-300'>
              Get In Touch
            </button>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}>
            <div className='max-w-4xl mx-auto mt-16 space-y-8'>
              <div className='space-y-6'>
                <p className='text-lg text-muted leading-relaxed'>
                  I’m a passionate Frontend Developer who enjoys creating modern
                  and user-friendly web experiences. I previously worked as an
                  Associate Software Engineer at Selise Digital Ltd, where I
                  gained valuable professional experience in building and
                  delivering digital solutions.
                </p>
              </div>

              <div>
                <h3 className='text-2xl font-bold text-foreground mb-6'>
                  Technologies I Work With
                </h3>
                <div className='flex flex-wrap justify-center gap-4'>
                  {skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className='group bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm px-6 py-4 rounded-xl text-center font-medium text-foreground hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 border border-white/30 dark:border-gray-600/30 hover:border-blue-300 dark:hover:border-blue-500 hover:scale-105 hover:shadow-lg flex items-center gap-3'
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}>
                      <div
                        className={`w-8 h-8 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300`}>
                        {skill.icon}
                      </div>
                      <span className='text-sm font-semibold'>
                        {skill.name}
                      </span>
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
