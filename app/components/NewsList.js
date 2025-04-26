import NewsCard from './NewsCard';

const NewsList = ({ newsItems }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {newsItems.map((article, index) => (
        <NewsCard key={article.link || index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;