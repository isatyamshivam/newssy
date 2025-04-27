import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';

const NewsCard = ({ article }) => {
  // Clean description by removing HTML tags, CDATA tags, and extra whitespace
  const cleanDescription = article.description
    .replace(/<!\[CDATA\[|\]\]>/g, '')
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .trim();

  // Format the publication date nicely
  const formattedDate = moment(new Date(article.pubDate)).fromNow();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="flex flex-col h-full">
        {article.imageUrl && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover transition-transform hover:scale-105"
              priority={false}
            />
          </div>
        )}
        
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex-grow">
            <h2 className="font-bold text-xl mb-2 line-clamp-2">{article.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-sm">
              {cleanDescription}
            </p>
          </div>
          
          <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-100 dark:border-gray-700">
            <div className="text-xs text-gray-500 dark:text-gray-400">
              <span>{article.creator}</span>
              <span className="mx-2">•</span>
              <time>{formattedDate}</time>
            </div>
            
            <Link 
              href={article.link} 
              target="_blank" 
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;