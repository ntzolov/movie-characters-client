export const NewsItem = ({ news }) => {
  const dateData = new Date(news.publishedAt);
  const date = dateData.getDate() < 10 ? '0' + dateData.getDate() : dateData.getDate();
  const month = dateData.getMonth() + 1 < 10 ? '0' + (dateData.getMonth() + 1) : dateData.getMonth() + 1;
  const year = dateData.getFullYear();
  const hours = dateData.getHours() < 10 ? '0' + dateData.getHours() : dateData.getHours();
  const minutes = dateData.getMinutes() < 10 ? '0' + dateData.getMinutes() : dateData.getMinutes();
  const dateToShow = `${date}-${month}-${year} - ${hours}:${minutes}`;

  return (
    <div className='blog-wrapper'>
      <div className='blog-card'>
        <div className='card-img'>
          <img src={news.image} alt='title img' />
          <h1>{news.title}</h1>
        </div>

        <div className='card-details'>
          <span>
            <i className='fa fa-calendar'></i>
            {dateToShow}
          </span>
          <span>
            <i className='fa-solid fa-at'></i>
            {news.source.name}
          </span>
        </div>
        <div className='card-text'>
          <p>{news.description}</p>
        </div>

        <a href={news.url} target='blank_'>
          <div className='read-more'>Read more</div>
        </a>
      </div>
    </div>
  );
};
