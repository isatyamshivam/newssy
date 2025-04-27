import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <h2 className="text-3xl font-bold mb-4">Category Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">The news category you're looking for doesn't exist.</p>
      <Link 
        href="/" 
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors"
      >
        Back to Homepage
      </Link>
    </div>
  );
}