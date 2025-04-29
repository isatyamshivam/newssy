import Parser from 'rss-parser';

// Define RSS feed URLs for different categories
const RSS_FEEDS = {
  top: 'https://timesofindia.indiatimes.com/rssfeedstopstories.cms',
  india: 'https://timesofindia.indiatimes.com/rssfeeds/296589292.cms',
  world: 'https://timesofindia.indiatimes.com/rssfeeds/296589292.cms',
  internation: 'https://timesofindia.indiatimes.com/rssfeeds/296589292.cms',
  business: 'https://timesofindia.indiatimes.com/rssfeeds/1898055.cms',
  cricket: 'https://timesofindia.indiatimes.com/rssfeeds/54829575.cms',
  sports: 'https://timesofindia.indiatimes.com/rssfeeds/4719148.cms',
  entertainment: 'https://timesofindia.indiatimes.com/rssfeeds/1081479906.cms',
  technology: 'https://timesofindia.indiatimes.com/rssfeeds/66949542.cms',
  health: 'https://timesofindia.indiatimes.com/rssfeeds/3908999.cms'
};

export async function fetchNews(category = 'top') {
  const parser = new Parser();
  
  try {
    // Get the RSS feed URL based on category or default to top stories
    const feedUrl = RSS_FEEDS[category] || RSS_FEEDS.top;
    
    // Fetch the RSS feed
    const feed = await parser.parseURL(feedUrl);
    
    return {
      title: feed.title,
      description: feed.description,
      link: feed.link,
      category,
      items: feed.items.map(item => ({
        title: item.title,
        description: item.content || item.contentSnippet || item.description || '',
        link: item.link,
        pubDate: item.pubDate,
        creator: item['dc:creator'] || 'Times of India',
        imageUrl: item.enclosure?.url || null,
        category
      }))
    };
  } catch (error) {
    console.error(`Error fetching ${category} news:`, error);
    return {
      title: 'Times of India',
      description: 'Unable to fetch news at the moment',
      link: 'https://timesofindia.indiatimes.com',
      category,
      items: []
    };
  }
}