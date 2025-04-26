import { fetchNews } from './utils/fetchNews';
import Header from './components/Header';
import NewsList from './components/NewsList';

export default async function Home() {
  const news = await fetchNews();
  
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="container max-w-7xl mx-auto px-4 py-8 md:py-12">
        <section className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{news.title}</h1>
          <p className="text-gray-600 dark:text-gray-300">{news.description}</p>
        </section>
        
        <div className="flex items-center mb-6 space-x-2 pb-2 border-b border-gray-200 dark:border-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
          </svg>
          <h2 className="text-xl font-semibold">Top Stories</h2>
        </div>
        
        {news.items.length > 0 ? (
          <NewsList newsItems={news.items} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No news articles available at the moment. Please check back later.
            </p>
          </div>
        )}
      </div>
      
      <footer className="bg-gray-100 dark:bg-gray-900 mt-12 py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Data sourced from Times of India RSS Feed. All content belongs to their respective owners.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
              © {new Date().getFullYear()} Times of India News App
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
