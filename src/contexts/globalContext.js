import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from '../hooks/useUser';
import { createCharacter, deleteCharacterById, editCharacter, getAllCharacters } from '../services/characterServices';

export const globalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const [characters, setCharacters] = useState([]);
  const [createError, setCreateError] = useState('');
  const [editError, setEditError] = useState('');
  const initialQuery = new URLSearchParams(window.location.search);
  const [searchParams, setSearchParams] = useState({
    search: initialQuery.get('search') || '',
    page: initialQuery.get('page') || 1,
  });
  const [page, setPage] = useState(searchParams.page);
  const [searchValue, setSearchValue] = useState(searchParams.search);
  const [categoryValue, setCategoryValue] = useState('all');
  const [sortValue, setSortValue] = useState('none');
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [resetCatalog, setResetCatalog] = useState(false);
  const initialPage = page;
  const initialUser = user;

  useEffect(() => {
    const querySend = `?search=${searchParams.search}&page=${initialPage}&category=${categoryValue}&sort=${sortValue}&userId=${
      initialUser ? initialUser._id : ''
    }`;
    getAllCharacters(querySend).then((characters) => {
      setCharacters(characters);
    });
  }, [searchParams, categoryValue, sortValue, resetCatalog, initialPage, initialUser]);

  const onCreateSubmit = async (e, createValues) => {
    try {
      e.preventDefault();

      createValues._ownerId = user._id;
      createValues._ownerUsername = user.username;
      createValues.createdAt = Date.now();
      createValues.lastEdit = Date.now();
      const newCharacter = await createCharacter(createValues);
      setCreateError('');
      setCharacters((state) => [...state, newCharacter]);

      navigate(`/catalog/${newCharacter._id}`);
    } catch (error) {
      setCreateError(error.message);
    }
  };

  const onEditSubmit = async (e, characterId, editValues) => {
    try {
      e.preventDefault();

      editValues.lastEdit = Date.now();
      const editedCharacter = await editCharacter(characterId, editValues);
      setEditError('');
      setCharacters((state) => state.map((x) => (x._id === editedCharacter._id ? editedCharacter : x)));

      navigate(`/catalog/${editedCharacter._id}`);
    } catch (error) {
      setEditError(error.message);
    }
  };

  const onDeleteSubmit = async (e, characterId) => {
    try {
      e.preventDefault();

      const deletedCharacter = await deleteCharacterById(characterId);
      setCharacters((state) => state.filter((x) => x._id !== deletedCharacter._id));

      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  const onSearchSubmit = async (e) => {
    e.preventDefault();
    navigate(`/catalog?search=${searchValue}&page=${page}`);

    setPage(1);
    setSearchParams((state) => ({ ...state, search: searchValue }));
  };

  const resetCharacters = async () => {
    setResetCatalog(!resetCatalog);
    // const characters = await getAllCharacters();
    // setCharacters(characters);
  };

  const contextObject = {
    user,
    setUser,
    setCreateError,
    createError,
    setEditError,
    editError,
    characters,
    onDeleteSubmit,
    onEditSubmit,
    onCreateSubmit,
    onSearchSubmit,
    resetCharacters,
    setSearchParams,
    searchParams,
    setPage,
    page,
    setSearchValue,
    searchValue,
    setCategoryValue,
    categoryValue,
    setSortValue,
    sortValue,
    itemsPerPage,
    setItemsPerPage,
  };

  return <globalContext.Provider value={contextObject}>{children}</globalContext.Provider>;
};
