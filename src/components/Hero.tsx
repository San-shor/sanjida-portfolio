'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center relative overflow-hidden'>
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
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6'>
              Hi, I'm{' '}
              <span className='text-blue-600 dark:text-blue-400'>Sanjida</span>
            </h1>
            <p className='text-xl sm:text-2xl text-muted mb-4'>
              Full-Stack Developer & UI/UX Designer
            </p>
            <p className='text-lg text-muted mb-8 max-w-2xl mx-auto'>
              I create clean, functional web experiences that make a difference.
              Passionate about minimal design, clean code, and user-centered
              solutions.
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

          {/* Scroll indicator */}
          <div
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-500 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}>
            <div className='animate-bounce'>
              <div className='w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center'>
                <div className='w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
