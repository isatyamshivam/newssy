import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative h-10 w-10">
            <Image 
              src="/globe.svg" 
              alt="Times of India"
              fill
              className="object-contain" 
            />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">Newsyy</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">An extention News app of Times of India</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Latest News & Headlines</p>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-4">
          <Link href="/" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>
          <Link href="https://timesofindia.indiatimes.com" target="_blank" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
            Official Site
          </Link>
        </nav>
        
        <div className="flex md:hidden">
          <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;