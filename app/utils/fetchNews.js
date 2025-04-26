import Parser from 'rss-parser';

export async function fetchNews() {
  const parser = new Parser();
  
  try {
    // RSS feed URL for Times of India
    const feed = await parser.parseURL('https://timesofindia.indiatimes.com/rssfeedstopstories.cms');
    return {
      title: feed.title,
      description: feed.description,
      link: feed.link,
      items: feed.items.map(item => ({
        title: item.title,
        description: item.content || item.contentSnippet || item.description || '',
        link: item.link,
        pubDate: item.pubDate,
        creator: item['dc:creator'] || 'Times of India',
        imageUrl: item.enclosure?.url || null
      }))
    };
  } catch (error) {
    console.error('Error fetching news:', error);
    return {
      title: 'Times of India',
      description: 'Unable to fetch news at the moment',
      link: 'https://timesofindia.indiatimes.com',
      items: []
    };
  }
}