"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const categories = [
  { name: 'Top Stories', slug: 'top' },
  { name: 'India', slug: 'india' },
  { name: 'World', slug: 'world' },
  { name: 'Business', slug: 'business' },
  { name: 'Sports', slug: 'sports' },
  { name: 'Cricket', slug: 'cricket' },
  { name: 'Entertainment', slug: 'entertainment' },
  { name: 'Technology', slug: 'technology' },
  { name: 'Health', slug: 'health' }
];

const Header = ({ currentCategory = 'top' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-lg">
      <div className="container max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative h-10 w-10 transition-transform duration-300 group-hover:scale-110">
            <Image 
              src="/newsyy.jpg" 
              alt="Newsyy"
              fill
              className="object-contain rounded-md" 
            />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Newsyy</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">Latest News & Headlines</p>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-5">
          <Link href="/" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 border-b-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400 pb-1">
            Home
          </Link>
          <Link href="https://timesofindia.indiatimes.com" target="_blank" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 border-b-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400 pb-1">
            Official Site
          </Link>
        </nav>
        
        <div className="flex md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="px-4 py-3 space-y-3">
            <Link 
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md font-medium"
            >
              Home
            </Link>
            <Link 
              href="https://timesofindia.indiatimes.com" 
              target="_blank"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md font-medium"
            >
              Official Site
            </Link>
            <div className="border-t dark:border-gray-700 my-2"></div>
            <p className="px-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Categories</p>
            {categories.map((category) => (
              <Link 
                key={category.slug}
                href={`/category/${category.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${currentCategory === category.slug 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      
      {/* Category Navigation - Desktop */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-750 shadow-inner">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <nav className="flex py-2 overflow-x-auto scrollbar-hide">
            <div className="flex space-x-3 mx-auto">
              {categories.map((category) => (
                <Link 
                  key={category.slug}
                  href={category.slug === 'top' ? '/' : `/category/${category.slug}`}
                  className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 transform hover:scale-105
                    ${currentCategory === category.slug 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:shadow-md'
                    }`}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;