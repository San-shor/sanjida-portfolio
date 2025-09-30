'use client';

import { useEffect, useState } from 'react';

export default function Experience() {
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

    const element = document.getElementById('experience');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description:
        'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description:
        'Developed responsive web applications and collaborated with design teams to create user-friendly interfaces. Improved application performance by 40%.',
      technologies: ['React', 'JavaScript', 'CSS3', 'Figma', 'Git'],
    },
    {
      title: 'Junior Web Developer',
      company: 'StartupXYZ',
      period: '2019 - 2020',
      description:
        'Built and maintained company websites, implemented new features, and worked closely with senior developers to learn best practices.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    },
  ];

  return (
    <section id='experience' className='py-20 bg-white dark:bg-gray-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto'>
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}>
            <h2 className='text-3xl sm:text-4xl font-bold text-center text-foreground mb-4'>
              Professional Experience
            </h2>
            <div className='w-16 h-0.5 bg-blue-600 mx-auto mb-12' />
          </div>

          <div className='relative'>
            {/* Timeline line */}
            <div className='absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-blue-600' />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 transition-all duration-1000 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}>
                {/* Timeline dot */}
                <div className='absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-background shadow-sm' />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                  }`}>
                  <div
                    className={`bg-white dark:bg-gray-800 p-6 rounded-xl border border-border hover:shadow-md transition-all duration-300 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                      <h3 className='text-xl font-bold text-foreground'>
                        {exp.title}
                      </h3>
                      <span className='text-blue-600 font-semibold text-sm'>
                        {exp.period}
                      </span>
                    </div>
                    <h4 className='text-lg text-foreground/80 mb-3'>
                      {exp.company}
                    </h4>
                    <p className='text-foreground/70 mb-4 leading-relaxed'>
                      {exp.description}
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className='px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium'>
                          {tech}
                        </span>
                      ))}
                    </div>
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
