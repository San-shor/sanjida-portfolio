'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/sanjida',
      icon: '🐙',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/sanjida',
      icon: '💼',
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/sanjida',
      icon: '🐦',
    },
    {
      name: 'Email',
      href: 'mailto:sanjida@example.com',
      icon: '📧',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className='bg-gray-100 dark:bg-gray-900 text-foreground border-t border-border'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid md:grid-cols-3 gap-8'>
          {/* Brand Section */}
          <div className='space-y-4'>
            <h3 className='text-2xl font-bold'>Sanjida</h3>
            <p className='text-muted leading-relaxed'>
              Full-stack developer passionate about creating beautiful,
              functional web experiences that make a difference.
            </p>
            <div className='flex space-x-4'>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 border border-border'
                  aria-label={social.name}>
                  <span className='text-lg'>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold'>Quick Links</h4>
            <ul className='space-y-2'>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-muted hover:text-blue-600 transition-colors duration-300'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold'>Get In Touch</h4>
            <div className='space-y-2 text-muted'>
              <p>📧 sanjida@example.com</p>
              <p>📱 +1 (555) 123-4567</p>
              <p>📍 San Francisco, CA</p>
            </div>
            <div className='pt-4'>
              <a
                href='#contact'
                className='inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300'>
                Let's Work Together
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-border mt-8 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <p className='text-muted text-sm'>
              © {currentYear} Sanjida. All rights reserved.
            </p>
            <div className='flex space-x-6 text-sm text-muted'>
              <a
                href='#'
                className='hover:text-blue-600 transition-colors duration-300'>
                Privacy Policy
              </a>
              <a
                href='#'
                className='hover:text-blue-600 transition-colors duration-300'>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
