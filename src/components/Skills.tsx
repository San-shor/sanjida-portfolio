'use client';

import { useEffect, useState } from 'react';

export default function Skills() {
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

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'HTML/CSS', level: 98 },
        { name: 'JavaScript', level: 92 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'Express.js', level: 90 },
        { name: 'REST APIs', level: 92 },
        { name: 'GraphQL', level: 80 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Figma', level: 85 },
        { name: 'PostgreSQL', level: 88 },
      ],
    },
  ];

  return (
    <section id='skills' className='py-20 bg-gray-50 dark:bg-gray-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}>
            <h2 className='text-3xl sm:text-4xl font-bold text-center text-foreground mb-4'>
              Skills & Expertise
            </h2>
            <div className='w-16 h-0.5 bg-blue-600 mx-auto mb-12' />
          </div>

          <div className='grid lg:grid-cols-3 gap-8'>
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`bg-white dark:bg-gray-800 p-6 rounded-xl border border-border transition-all duration-1000 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${categoryIndex * 200}ms` }}>
                <h3 className='text-xl font-bold text-foreground mb-6 text-center'>
                  {category.title}
                </h3>
                <div className='space-y-4'>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className='flex justify-between items-center mb-2'>
                        <span className='text-foreground/80 font-medium'>
                          {skill.name}
                        </span>
                        <span className='text-muted text-sm'>
                          {skill.level}%
                        </span>
                      </div>
                      <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
                        <div
                          className='bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out'
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${
                              categoryIndex * 200 + skillIndex * 100
                            }ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
