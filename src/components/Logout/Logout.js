import { useContext, useEffect } from 'react';
import { globalContext } from '../../contexts/globalContext';
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
  const { setUser, setCategoryValue, setSearchValue, setPage, setSortValue, setEditError, setCreateError } =
    useContext(globalContext);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      navigate('/');
    };
  });

  setUser(true, true);
  setSearchValue('');
  setCategoryValue('all');
  setSortValue('none');
  setPage(1);
  setEditError('');
  setCreateError('');
};
