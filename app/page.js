import { fetchNews } from './utils/fetchNews';
import Header from './components/Header';
import NewsList from './components/NewsList';

export default async function Home() {
  // Fetch top stories (default category)
  const news = await fetchNews('top');
  
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header currentCategory="top" />
      
      <div className="container max-w-7xl mx-auto px-4 md:px-6 py-8">
        <h2 className="text-2xl font-bold mb-4">Top Stories</h2>
        <NewsList newsItems={news.items} />
      </div>
    </main>
  );
}
