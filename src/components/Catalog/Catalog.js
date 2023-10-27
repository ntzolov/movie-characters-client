import { useContext, useEffect } from 'react';
import { globalContext } from '../../contexts/globalContext';
import { CatalogItem } from './CatalogItem';
import { Spinner } from '../Spinner/Spinner';
import { SearchBar } from './SearchBar';
import { Category } from './Category';
import { Pagination } from '@mui/material';
import { paginationStyles } from '../../muiStyles/muiStyles';
import { ItemsPerPage } from './ItemsPerPage';
import { useNavigate } from 'react-router-dom';
import { Sort } from './Sort';

export const Catalog = () => {
  const { characters, user, page, setPage, searchParams, itemsPerPage } = useContext(globalContext);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/catalog?search=${searchParams.search}&page=${page}`);
  }, [page, searchParams, navigate]);

  const totalPages = Math.ceil(characters?.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const charactersToDisplay = characters?.slice(startIndex, endIndex);

  const paginationHandler = (page) => {
    window.scrollTo(0, 0);
    setPage(Number(page));
  };

  return characters.length ? (
    <div className='container-catalog'>
      <SearchBar />
      <div className='container-category-and-sort'>
        {user && <Category />}
        {user && <Sort />}
      </div>
      <div className='card-container'>
        {characters[0].error ? (
          <h1>No characters found!</h1>
        ) : (
          charactersToDisplay.map((character) => (
            <CatalogItem
              key={character._id}
              character={character}
            />
          ))
        )}
      </div>
      <Pagination
        count={totalPages}
        page={Number(page)}
        sx={paginationStyles}
        onChange={(e, page) => paginationHandler(page)}
        variant='outlined'
        shape='rounded'
        color='primary'
        showFirstButton
        showLastButton
      />
      <ItemsPerPage />
    </div>
  ) : (
    <Spinner />
  );
};
