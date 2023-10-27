import { useContext } from 'react';
import { globalContext } from '../../contexts/globalContext';

export const Sort = () => {
  const { sortValue, setSortValue } = useContext(globalContext);
  const onChangeSort = (e) => {
    setSortValue(e.target.value);
  };

  return (
    <>
      <div className="container-sort">
        <label htmlFor="sort">Sort:</label>
        <select onChange={onChangeSort} value={sortValue} name="sort" id="sort">
          <option value="none">None</option>
          <option value="nameAZ">Name A-Z</option>
          <option value="nameZA">Name Z-A</option>
          <option value="mostLiked">Most liked first</option>
        </select>
      </div>
    </>
  );
};
