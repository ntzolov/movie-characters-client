import { useContext } from 'react';
import { globalContext } from '../../contexts/globalContext';

export const ItemsPerPage = () => {
  const { setPage, itemsPerPage, setItemsPerPage } = useContext(globalContext);

  const onItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setPage(1);
  };

  return (
    <>
      <div className='container-items-per-page'>
        <label htmlFor='items-per-page'>Characters per page:</label>
        <select
          onChange={onItemsPerPageChange}
          value={itemsPerPage}
          name='items-per-page'
          id='items-per-page'>
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='20'>20</option>
        </select>
      </div>
    </>
  );
};
