import Link from 'next/link';
import Image from 'next/image';

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
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative h-10 w-10">
            <Image 
              src="/newsyy.jpg" 
              alt="Newsyy"
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
      
      {/* Category Navigation */}
      <div className="bg-gray-100 dark:bg-gray-800 overflow-x-auto">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <nav className="flex space-x-1 py-2">
            {categories.map((category) => (
              <Link 
                key={category.slug}
                href={`/category/${category.slug}`}
                className={`whitespace-nowrap px-3 py-1.5 text-sm font-medium rounded-md transition-colors
                  ${currentCategory === category.slug 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;