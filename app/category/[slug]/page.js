import { fetchNews } from '../../utils/fetchNews';
import Header from '../../components/Header';
import NewsList from '../../components/NewsList';
import { notFound } from 'next/navigation';

// Define valid category slugs
const validCategories = [
  'top', 'india', 'world', 'business', 'sports', 
  'cricket', 'entertainment', 'technology', 'health'
];

// Generate metadata for the page
export async function generateMetadata({ params }) {
  const { slug } = params;
  
  // Format the category name
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);
  
  return {
    title: `${categoryName} News - Newsyy`,
    description: `Latest ${categoryName} news from Times of India`
  };
}

export default async function CategoryPage({ params }) {
  const { slug } = params;
  
  // Check if the category is valid
  if (!validCategories.includes(slug)) {
    notFound();
  }
  
  // Fetch news for the selected category
  const news = await fetchNews(slug);
  
  // Format the category name for display
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);
  
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header currentCategory={slug} />
      
      <div className="container max-w-7xl mx-auto px-4 md:px-6 py-8">
        <h2 className="text-2xl font-bold mb-4">{categoryName} News</h2>
        <NewsList newsItems={news.items} />
      </div>
    </main>
  );
}