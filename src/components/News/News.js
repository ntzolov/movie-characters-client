import { useEffect, useState } from 'react';
import { NewsItem } from './NewsItem';
import { Spinner } from '../Spinner/Spinner';
import { v4 as uuid } from 'uuid';

export const News = () => {
  const [news, setNews] = useState([]);

  const dateTo = new Date();
  const dateFrom = new Date(dateTo - 7 * 24 * 60 * 60 * 1000);
  const queryDateTo = `${dateTo.getFullYear()}-${
    dateTo.getMonth() + 1 < 10 ? '0' + dateTo.getMonth() + 1 : dateTo.getMonth() + 1
  }-${dateTo.getDate() < 10 ? '0' + dateTo.getDate() : dateTo.getDate()}`;
  const queryDateFrom = `${dateFrom.getFullYear()}-${
    dateFrom.getMonth() + 1 < 10 ? '0' + (dateFrom.getMonth() + 1) : dateFrom.getMonth() + 1
  }-${dateFrom.getDate() < 10 ? '0' + dateFrom.getDate() : dateFrom.getDate()}`;

  const searchPhrase = encodeURI('+movies +series +film +actor -torrent -military -review');

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${searchPhrase}&from=${queryDateFrom}&to=${queryDateTo}&sortBy=popularity&apiKey=3deec0641fe94458be2d7be25b87da9b`
    ).then((data) => {
      data.json().then((news) => {
        const newsArray = news.articles;
        const filteredNewsArray = newsArray.filter((x) => x.title !== null && x.author !== null && x.description !== null);
        setNews(filteredNewsArray.slice(0, 20));
      });
    });
  }, [queryDateFrom, queryDateTo, searchPhrase]);

  return (
    <div className="container-news">
      {news.length ? (
        <>
          <div className="news-title">Last week top stories...</div>
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
