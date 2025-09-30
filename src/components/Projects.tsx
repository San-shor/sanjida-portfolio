'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and secure payments.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      category: 'fullstack',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/600/400',
      technologies: [
        'Next.js',
        'TypeScript',
        'Socket.io',
        'Prisma',
        'PostgreSQL',
      ],
      category: 'frontend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description:
        'A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
      category: 'frontend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
    },
    {
      id: 4,
      title: 'REST API Service',
      description:
        'A scalable REST API built with Node.js and Express, featuring authentication, rate limiting, and comprehensive documentation.',
      image: '/api/placeholder/600/400',
      technologies: ['Node.js', 'Express', 'JWT', 'MongoDB', 'Swagger'],
      category: 'backend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and dark mode.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'frontend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
    },
    {
      id: 6,
      title: 'Data Visualization Tool',
      description:
        'An interactive data visualization tool for analyzing business metrics with customizable charts and real-time data updates.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      category: 'fullstack',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' },
  ];

  const filteredProjects = projects.filter(
    (project) => filter === 'all' || project.category === filter
  );

  return (
    <section id='projects' className='py-20 bg-gray-50 dark:bg-gray-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}>
            <h2 className='text-3xl sm:text-4xl font-bold text-center text-foreground mb-4'>
              Featured Projects
            </h2>
            <div className='w-16 h-0.5 bg-blue-600 mx-auto mb-12' />
          </div>

          {/* Filter buttons */}
          <div
            className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white dark:bg-gray-800 text-muted hover:text-foreground hover:bg-blue-50 dark:hover:bg-blue-900/10 border border-border'
                }`}>
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-white dark:bg-gray-800 rounded-xl border border-border overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}>
                <div className='h-48 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 relative overflow-hidden'>
                  <div className='absolute inset-0 bg-black/20' />
                  <div className='absolute bottom-4 left-4 right-4'>
                    <h3 className='text-xl font-bold text-white mb-2'>
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className='p-6'>
                  <p className='text-foreground/70 mb-4 leading-relaxed'>
                    {project.description}
                  </p>

                  <div className='flex flex-wrap gap-2 mb-6'>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium'>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className='flex gap-4'>
                    <Link
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300'>
                      Live Demo
                    </Link>
                    <Link
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex-1 border border-border text-foreground text-center py-2 px-4 rounded-lg font-medium hover:border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all duration-300'>
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
