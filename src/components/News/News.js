import { useEffect, useState } from 'react';
import { NewsItem } from './NewsItem';
import { Spinner } from '../Spinner/Spinner';
import { v4 as uuid } from 'uuid';

export const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(`https://gnews.io/api/v4/search?q=movies&apikey=a48503af0f53a35a33308dfb3fe267af`).then((data) => {
      data.json().then((newsObj) => {
        const news = newsObj.articles;
        setNews(news);
      });
    });
  }, []);

  return (
    <div className='container-news'>
      {news.length ? (
        <>
          <div className='news-title'>Last week top stories...</div>
          {news.map((x) => (
            <NewsItem key={uuid()} news={x} />
          ))}
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};
